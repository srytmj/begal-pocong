// ══════════════════════════════════════════════════════════
// VIEW SWITCH
// ══════════════════════════════════════════════════════════
function showView(v){
  document.getElementById('view-map').style.display   = v==='map'   ? 'flex':'none';
  document.getElementById('view-chars').style.display = v==='chars' ? 'flex':'none';
  document.querySelectorAll('.tab').forEach((t,i)=>{
    t.classList.toggle('active',(i===0&&v==='map')||(i===1&&v==='chars'));
  });
}

// ══════════════════════════════════════════════════════════
// CHARACTER CARDS
// ══════════════════════════════════════════════════════════
const grid = document.getElementById('char-grid');
const cardEls = {};
CHARS.forEach(c=>{
  const card = document.createElement('div');
  card.id = 'card-' + c.id;
  card.className = 'char-card' + (c.mystery?' mystery':'');
  card.innerHTML = `
    <div class="char-top">
      <div class="char-av" style="background:${c.ab};border-color:${c.abr}">${c.av}</div>
      <div>
        <div class="char-name">${c.name}</div>
        <span class="char-role char-role-public" style="background:${c.rpC};color:${c.rpT}">${c.rolePublic}</span>
        <span class="char-role char-role-spoiler" style="background:${c.rsC};color:${c.rsT}">${c.roleSpoiler}</span>
      </div>
    </div>
    <div class="char-body">
      <div class="char-teaser">${c.teaser}</div>
      ${c.note?`<div class="char-note">${c.note}</div>`:''}
      <div class="spoiler-wrap">
        <div class="spoiler-content" id="sp-${c.id}">${(c.spoilerText||'').replace(/\n/g,'<br>')}</div>
        <button class="spoiler-btn" onclick="toggleSp('${c.id}',this)">
          <span>👁</span><span>Lihat Spoiler</span>
        </button>
      </div>
    </div>`;
  grid.appendChild(card);
  cardEls[c.id] = card;
});

function toggleSp(id, btn){
  const el  = document.getElementById('sp-'+id);
  const on  = el.classList.toggle('on');
  const card= cardEls[id];
  card.classList.toggle('spoiler-open', on);
  btn.children[0].textContent = on ? '🙈' : '👁';
  btn.children[1].textContent = on ? 'Sembunyikan' : 'Lihat Spoiler';
}

// ══════════════════════════════════════════════════════════
// RENDER SVG
// ══════════════════════════════════════════════════════════
const NS     = 'http://www.w3.org/2000/svg';
const SVG_W  = 3400;
const SVG_H  = 850;
const svg    = document.getElementById('svg');
svg.setAttribute('viewBox', `0 0 ${SVG_W} ${SVG_H}`);
svg.setAttribute('width',  SVG_W);
svg.setAttribute('height', SVG_H);

const nmap = {};
NODES.forEach(n => nmap[n.id] = n);

function mk(tag, attrs={}){
  const e = document.createElementNS(NS, tag);
  for(const [k,v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
}

// Arrow markers per color
const defs = mk('defs');
const allColors = [...new Set(EDGES.map(e=>e.c)), '#cc9933', '#7a3aaa'];
allColors.filter(Boolean).forEach(c=>{
  const id = 'ar'+c.replace(/[^0-9a-f]/gi,'');
  const m  = mk('marker',{id, markerWidth:8, markerHeight:6, refX:6, refY:3, orient:'auto'});
  m.appendChild(mk('polygon',{points:'0 0,8 3,0 6', fill:c}));
  defs.appendChild(m);
});
svg.appendChild(defs);

// Lane labels
const laneG = mk('g');
[
  {x:2250, y:AY-42,  t:'── JALUR A : Ikut Pak RT',    c:'#c84a4a33'},
  {x:2250, y:WY-30,  t:'── JALUR D : Aware Path',     c:'#aa44dd33'},
  {x:2250, y:BY-42,  t:'── JALUR B : Hubungi Rendi',  c:'#4aaa4a33'},
  {x:2250, y:CY-42,  t:'── JALUR C : Ngintip',        c:'#a04acc33'},
].forEach(l=>{
  const t = mk('text',{x:l.x, y:l.y, fill:l.c, 'font-size':'10', 'letter-spacing':'1'});
  t.textContent = l.t;
  laneG.appendChild(t);
});
svg.appendChild(laneG);

// ── Regular edges ──
const edgeG  = mk('g');
const edgeEls = {};
EDGES.forEach(edge=>{
  const A = nmap[edge.f], B = nmap[edge.t];
  if(!A || !B) return;
  const markerRef = 'ar'+edge.c.replace(/[^0-9a-f]/gi,'');
  const g  = mk('g');
  const dx = B.x-A.x, dy = B.y-A.y;
  const dist = Math.sqrt(dx*dx+dy*dy)||1;
  const sx = A.x+(dx/dist)*(A.r+2), sy = A.y+(dy/dist)*(A.r+2);
  const ex = B.x-(dx/dist)*(B.r+4), ey = B.y-(dy/dist)*(B.r+4);
  const path = mk('path',{
    d:`M${sx},${sy} Q${(sx+ex)/2},${sy} ${ex},${ey}`,
    fill:'none', stroke:edge.c, 'stroke-width':1.7,
    'marker-end':`url(#${markerRef})`
  });
  path.classList.add('e-path','normal');
  g.appendChild(path);
  let le = null;
  if(edge.lbl){
    le = mk('text',{x:(sx+ex)/2, y:(sy+ey)/2-8, fill:edge.c});
    le.classList.add('e-lbl');
    le.textContent = edge.lbl;
    g.appendChild(le);
  }
  edgeG.appendChild(g);
  edgeEls[edge.f+'>'+edge.t] = {path, le, g};
});

// ── Cross-branch switch edges ──
const crossEls = {};
CROSS.forEach(cr=>{
  const A = nmap[cr.f], B = nmap[cr.t];
  if(!A || !B) return;
  const g  = mk('g');
  g.style.cursor = 'pointer';
  const dx = B.x-A.x, dy = B.y-A.y;
  const dist = Math.sqrt(dx*dx+dy*dy)||1;
  const sx = A.x+(dx/dist)*(A.r+2), sy = A.y+(dy/dist)*(A.r+2);
  const ex = B.x-(dx/dist)*(B.r+4), ey = B.y-(dy/dist)*(B.r+4);
  const path = mk('path',{
    d:`M${sx},${sy} C${sx+80},${sy} ${ex-80},${ey} ${ex},${ey}`,
    fill:'none', stroke:'#cc9933', 'stroke-width':1.4,
    'marker-end':'url(#arcc9933)'
  });
  path.classList.add('e-path','e-cross');
  g.appendChild(path);
  const lx = (sx+ex)/2, ly = (sy+ey)/2;
  const le = mk('text',{x:lx, y:ly-6, fill:'#cc9933'});
  le.classList.add('e-lbl');
  le.textContent = cr.lbl;
  g.appendChild(le);
  // invisible wide hit area
  const hit = mk('path',{
    d:`M${sx},${sy} C${sx+80},${sy} ${ex-80},${ey} ${ex},${ey}`,
    fill:'none', stroke:'transparent', 'stroke-width':10
  });
  g.appendChild(hit);
  g.addEventListener('click', e=>{ e.stopPropagation(); jumpToNode(B.id, cr); });
  edgeG.appendChild(g);
  crossEls[cr.f+'>'+cr.t] = {path, le, cr};
});

// ── Rewind edges ──
const rewindEls = {};
REWIND.forEach(rw=>{
  const A = nmap[rw.f], B = nmap[rw.t];
  if(!A || !B) return;
  const g  = mk('g');
  g.style.cursor = 'pointer';
  const dx = B.x-A.x, dy = B.y-A.y;
  const dist = Math.sqrt(dx*dx+dy*dy)||1;
  const sx = A.x+(dx/dist)*(A.r+2), sy = A.y+(dy/dist)*(A.r+2);
  const ex = B.x-(dx/dist)*(B.r+6), ey = B.y-(dy/dist)*(B.r+6);
  const cy1 = sy-55, cy2 = ey-55;
  const path = mk('path',{
    d:`M${sx},${sy} C${sx},${cy1} ${ex},${cy2} ${ex},${ey}`,
    fill:'none', stroke:'#7a3aaa', 'stroke-width':1.2,
    'marker-end':'url(#ar7a3aaa)'
  });
  path.classList.add('e-path','e-rewind');
  g.appendChild(path);
  const lx = (sx+ex)/2, ly = Math.min(sy,ey)-60;
  const le = mk('text',{x:lx, y:ly, fill:'#7a3aaa'});
  le.classList.add('e-lbl');
  le.textContent = rw.lbl;
  g.appendChild(le);
  const hit = mk('path',{
    d:`M${sx},${sy} C${sx},${cy1} ${ex},${cy2} ${ex},${ey}`,
    fill:'none', stroke:'transparent', 'stroke-width':10
  });
  g.appendChild(hit);
  g.addEventListener('click', e=>{ e.stopPropagation(); jumpToNode(B.id, rw); });
  edgeG.appendChild(g);
  rewindEls[rw.f+'>'+rw.t] = {path, le, rw};
});

svg.appendChild(edgeG);

// ── Nodes ──
const nodeG  = mk('g');
const nodeEls= {};
NODES.forEach(n=>{
  const g = mk('g');
  g.classList.add('node-group');
  g.style.setProperty('--nc', n.stroke);
  g.dataset.id = n.id;
  if(n.r>=20){
    const gl = mk('circle',{cx:n.x, cy:n.y, r:n.r+5, fill:'none', stroke:n.stroke, 'stroke-width':0.4, opacity:0.2});
    g.appendChild(gl);
  }
  const ci = mk('circle',{cx:n.x, cy:n.y, r:n.r, fill:n.fill, stroke:n.stroke, 'stroke-width':n.r>=28?2:1.5});
  ci.classList.add('node-bg');
  g.appendChild(ci);
  if(n.icon){
    const ic = mk('text',{x:n.x, y:n.y+1, 'font-size':n.r>=28?14:n.r>=20?11:9.5});
    ic.classList.add('node-icon');
    ic.textContent = n.icon;
    g.appendChild(ic);
  }
  const dt = mk('text',{x:n.x, y:n.y-n.r-5});
  dt.classList.add('node-day');
  dt.textContent = n.day;
  g.appendChild(dt);
  n.label.split('\n').forEach((l,i)=>{
    const t = mk('text',{x:n.x, y:n.y+n.r+11+i*10});
    t.classList.add('node-lbl');
    t.textContent = l;
    g.appendChild(t);
  });
  g.addEventListener('click', ()=> onNodeClick(n));
  nodeG.appendChild(g);
  nodeEls[n.id] = g;
});
svg.appendChild(nodeG);

// ══════════════════════════════════════════════════════════
// INTERACTION
// ══════════════════════════════════════════════════════════
let activeId = null;

// ══════════════════════════════════════════════════════════
// BLACKOUT MECHANIC
// ══════════════════════════════════════════════════════════
const BLACKOUT_TRIGGERS  = ['d5', 'd21', 'b57'];
const WAHYU_NODE_IDS     = ['d_w1', 'd_w2', 'd_w3', 'e_wahyu'];
const WAHYU_EDGE_KEYS    = ['bp1>d_w1', 'd_w1>d_w2', 'd_w2>d_w3', 'd_w3>e_wahyu'];
const BP1_BRANCH_KEYS    = ['bp1>a52', 'bp1>b52', 'bp1>c52'];

let visitedTriggers  = new Set();
let blackoutStage    = 0;  // 0 hidden → 3 fully unlocked

function initWahyuPath(){
  WAHYU_NODE_IDS.forEach(id => { if(nodeEls[id]) nodeEls[id].style.display = 'none'; });
  WAHYU_EDGE_KEYS.forEach(k  => { if(edgeEls[k])  edgeEls[k].g.style.display = 'none'; });
}

function updateBlackoutNode(){
  const el = nodeEls['d4'];
  if(!el) return;
  el.classList.remove('blackout-0','blackout-1','blackout-2','blackout-3');
  el.classList.add('blackout-'+blackoutStage);
}

function revealWahyuPath(){
  WAHYU_NODE_IDS.forEach(id => { if(nodeEls[id]) nodeEls[id].style.display = ''; });
  WAHYU_EDGE_KEYS.forEach(k  => { if(edgeEls[k])  edgeEls[k].g.style.display = ''; });
  BP1_BRANCH_KEYS.forEach(k  => { if(edgeEls[k])  edgeEls[k].g.style.display = 'none'; });
  if(nodeEls['bp1']) nodeEls['bp1'].classList.add('aware-unlocked');
}

/**
 * Hitung semua node & edge yang terhubung ke id (naik + turun).
 * Juga include node tujuan cross-branch switch agar ikut highlight.
 */
function getReach(id){
  const nodes = new Set([id]);
  const edges = new Set();

  function up(n){
    EDGES.forEach(e=>{
      if(e.t===n && !nodes.has(e.f)){
        nodes.add(e.f);
        edges.add(e.f+'>'+e.t);
        up(e.f);
      }
    });
  }
  function dn(n){
    EDGES.forEach(e=>{
      if(e.f===n && !nodes.has(e.t)){
        nodes.add(e.t);
        edges.add(e.f+'>'+e.t);
        dn(e.t);
      }
    });
  }
  up(id);
  dn(id);

  // Cross-branch: kalau ada node di jalur ini yang punya switch edge,
  // node tujuannya ikut masuk set (highlight, tidak dimmed)
  const cross = new Set();
  const snapshot = new Set(nodes);
  CROSS.forEach(cr=>{
    if(snapshot.has(cr.f) || snapshot.has(cr.t)){
      cross.add(cr.f+'>'+cr.t);
      nodes.add(cr.f);
      nodes.add(cr.t);
    }
  });
  return {nodes, edges, cross};
}

function resetAll(){
  Object.values(nodeEls).forEach(g=> g.classList.remove('active','dimmed'));
  Object.values(edgeEls).forEach(({path,le})=>{
    path.classList.remove('dimmed','highlight');
    path.classList.add('normal');
    if(le) le.classList.remove('dimmed');
  });
  Object.values(crossEls).forEach(({path,le})=>{
    path.classList.remove('dimmed','highlight');
    if(le) le.classList.remove('dimmed');
  });
  Object.values(rewindEls).forEach(({path,le})=>{
    path.classList.remove('dimmed','highlight');
    if(le) le.classList.remove('dimmed');
  });
}

function jumpToNode(id, edgeInfo){
  const n = nmap[id];
  if(!n) return;
  const cx = n.x*zoom, cy = n.y*zoom;
  ga.scrollLeft = cx - ga.clientWidth/2;
  ga.scrollTop  = cy - ga.clientHeight/2;
  onNodeClick(n);
  if(edgeInfo?.desc){
    document.getElementById('info-desc').textContent =
      '[Branch Switch: '+edgeInfo.desc+']\n\n'+n.desc;
  }
}

function onNodeClick(n){
  // Blackout trigger check
  if(BLACKOUT_TRIGGERS.includes(n.id) && !visitedTriggers.has(n.id)){
    visitedTriggers.add(n.id);
    blackoutStage = visitedTriggers.size;
    updateBlackoutNode();
    if(blackoutStage >= 3) revealWahyuPath();
  }

  if(activeId === n.id){
    activeId = null;
    resetAll();
    document.getElementById('info-accent').style.setProperty('--accent','#333');
    document.getElementById('info-tag').textContent   = 'Story Map';
    document.getElementById('info-title').textContent = 'Klik node untuk melihat detail';
    document.getElementById('info-desc').textContent  = 'Setiap node adalah momen penting. Garis putus-putus kuning = perpindahan jalur (branch switch). Node yang redup tetap bisa diklik.';
    return;
  }
  activeId = n.id;
  const {nodes:rn, edges:re, cross:rc} = getReach(n.id);

  // Node: active = dipilih, dimmed = tidak terhubung (tapi MASIH bisa diklik)
  Object.entries(nodeEls).forEach(([id,g])=>{
    g.classList.remove('active','dimmed');
    if(id === n.id) g.classList.add('active');
    else if(!rn.has(id)) g.classList.add('dimmed');
  });

  // Regular edges
  Object.entries(edgeEls).forEach(([key,{path,le}])=>{
    path.classList.remove('normal','dimmed','highlight');
    path.classList.add(re.has(key) ? 'highlight' : 'dimmed');
    if(le){ le.classList.remove('dimmed'); if(!re.has(key)) le.classList.add('dimmed'); }
  });

  // Cross-branch edges
  Object.entries(crossEls).forEach(([key,{path,le}])=>{
    const active = rc.has(key);
    path.classList.remove('dimmed','highlight');
    path.classList.add(active ? 'highlight' : 'dimmed');
    if(le){ le.classList.remove('dimmed'); if(!active) le.classList.add('dimmed'); }
  });

  // Rewind edges
  Object.entries(rewindEls).forEach(([key,{path,le}])=>{
    const [rf,rt] = key.split('>');
    const active  = rf===n.id || rt===n.id || rn.has(rf) || rn.has(rt);
    path.classList.remove('dimmed','highlight');
    path.classList.add(active ? 'highlight' : 'dimmed');
    if(le){ le.classList.remove('dimmed'); if(!active) le.classList.add('dimmed'); }
  });

  document.getElementById('info-accent').style.setProperty('--accent', n.badge||n.stroke);
  document.getElementById('info-tag').textContent   = n.tag;
  document.getElementById('info-title').textContent = n.title;
  document.getElementById('info-desc').textContent  = n.desc;
}

// ══════════════════════════════════════════════════════════
// ZOOM & PAN
// ══════════════════════════════════════════════════════════
const ga = document.getElementById('graph-area');
const sc = document.getElementById('scroll-content');
let zoom  = 0.6;
const ZMIN= 0.15, ZMAX = 2.5;

function applyZoom(z, px, py){
  const prev = zoom;
  zoom = Math.max(ZMIN, Math.min(ZMAX, z));
  sc.style.width  = (SVG_W*zoom)+'px';
  sc.style.height = (SVG_H*zoom)+'px';
  svg.style.transform = `scale(${zoom})`;
  if(px !== undefined){
    ga.scrollLeft = (ga.scrollLeft+px)*(zoom/prev)-px;
    ga.scrollTop  = (ga.scrollTop +py)*(zoom/prev)-py;
  }
  document.getElementById('zoom-pct').textContent = Math.round(zoom*100)+'%';
}
function changeZoom(f){ applyZoom(zoom*f); }
function setZoom(z)   { applyZoom(z); }
function fitZoom()    { applyZoom(Math.min(ga.clientWidth/SVG_W, ga.clientHeight/SVG_H)*0.94); ga.scrollLeft=0; ga.scrollTop=0; }

ga.addEventListener('wheel', e=>{
  e.preventDefault();
  const r = ga.getBoundingClientRect();
  applyZoom(zoom*(e.deltaY<0?1.1:0.91), e.clientX-r.left, e.clientY-r.top);
},{passive:false});

let drag=false, dx=0, dy=0, dsx=0, dsy=0;
ga.addEventListener('mousedown', e=>{ drag=true; dx=e.clientX; dy=e.clientY; dsx=ga.scrollLeft; dsy=ga.scrollTop; ga.style.cursor='grabbing'; });
window.addEventListener('mousemove',e=>{ if(drag){ ga.scrollLeft=dsx-(e.clientX-dx); ga.scrollTop=dsy-(e.clientY-dy); }});
window.addEventListener('mouseup',  ()=>{ drag=false; ga.style.cursor='grab'; });

// Init
applyZoom(zoom);
initWahyuPath();
updateBlackoutNode();
