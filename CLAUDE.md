# Begal Pocong — Claude Code Agent Rules

## Cara Kerja Sesi Ini
- Pesan diakhiri **"gimana?"** = diskusi saja, **JANGAN implementasi**
- Pesan tanpa "gimana?" = langsung implementasi
- Minta konfirmasi sebelum nulis konten panjang (script, narasi, dll)

## Tool Rules
- **JANGAN** pakai `preview_screenshot` — terlalu boros usage, gunakan `preview_eval` atau `preview_snapshot`
- **JANGAN** baca file yang sudah ada lengkap di CLAUDE.md ini — trust the docs
- Kalau edit `data.js`: baca hanya section yang relevan (NODES / EDGES / CROSS / REWIND), bukan full file
- Edit langsung tanpa confirm kalau tidak ada ambiguitas

## Project
Game visual novel horror Roblox: **"Begal Pocong"**
Setting: Desa Ngudilancur, Jawa Timur
Web story map: `index.html` + `js/data.js` + `js/app.js` + `css/style.css`

## Deploy
- **GitHub repo**: https://github.com/srytmj/begal-pocong
- **GitHub Pages**: https://srytmj.github.io/begal-pocong/
- Deploy otomatis via GitHub Actions (`branches: master, main`) + `workflow_dispatch`
- Source Pages: **GitHub Actions** (bukan Deploy from branch)
- Working branch: **main**

## Struktur File
- `js/data.js` — semua story data: CHARS, NODES, EDGES, CROSS, REWIND
- `js/app.js` — SVG render + interaction + blackout mechanic
- `css/style.css` — semua styling termasuk blackout stages & wahyu path
- `index.html` — struktur HTML + legend

## Layout & Konstanta (js/app.js)
```
SVG_W=3400, SVG_H=850, zoom awal 0.6
SY=360 (Shared/Jalur B), AY=150 (Jalur A), WY=255 (Jalur D/Wahyu), BY=360, CY=575 (Jalur C)
```

## Node Positions (js/data.js)
**Shared** — step 180px:
`d1:100, d4:280, d5:460, d14:640, d17:820, d21:1000, d28:1180, d35:1360, d38:1540, d45:1720, d49:1900, bp1:2080`

**Branch** — step 160px dari x:2240:
```
Tier 1:2240 | Tier 2:2400 | Tier 3:2560 | Tier 4:2720 | Tier 5:2880 | BP2:3040 | Ending:3220
```
- Jalur A: `a52, a54, a58, a60, a65, bp2a`
- Jalur B: `b52, b55, b57, b60, b65, bp2b`
- Jalur C: `c52, c53, c57, c59, c64, bp2c`
- Jalur D (Wahyu): `d_w1:2240, d_w2:2480, d_w3:2720` → `e_wahyu:3220` (y=WY=255)

**Endings** x:3220: `e_wahyu(y:80), e_bad1(y:210), e_bad2(y:330), e_ses(y:440), e_sec(y:545), e_tru(y:655), e_skz(y:760)`

## Palette (js/data.js — const P)
```javascript
sh, d4(ungu #150820/#7a3aaa), bp(kuning), a(merah), b(hijau), c(ungu muda),
b2a/b2b/b2c, bad, sec, tru, ses, skz
// Wahyu nodes pakai: fill:'#100420', stroke:'#aa44dd', badge:'#aa44dd'
```

## Blackout Mechanic (js/app.js)
- **Trigger nodes**: `d5`, `d21`, `b57` — kunjungi semua 3 untuk unlock d4
- Stage 0→3: CSS class `blackout-0` s/d `blackout-3` pada nodeEls['d4']
- Stage 3: Jalur D revealed, bp1→A/B/C edges disembunyikan, bp1 dapat class `aware-unlocked`
- Wahyu nodes/edges hidden on init via `initWahyuPath()`

## EDGES Penting
- CROSS: `a58→c57, a60→b60, b57→c57, b60→a60, c64→a65`
- REWIND (ke d4): `d5→d4, d21→d4, b57→d4`
- Jalur D: `bp1→d_w1(lbl:'D'), d_w1→d_w2, d_w2→d_w3, d_w3→e_wahyu`

## Karakter
| ID | Nama | Role Public | Role Spoiler |
|---|---|---|---|
| mc | MC | Protagonis | Protagonis |
| ucok | Ucok | Kucing MC | Detektor Supernatural |
| rendi | Rendi | Teman Tongkrongan | Korban Kultus |
| ibu_rendi | Ibu Rendi | Warga Desa | Anggota Kultus |
| pakrt | Pak RT | Warga Desa | Antagonis Pendukung |
| faruq | Ustadz Faruq | Tokoh Agama | Antagonis Utama |
| wahyu | Wahyu | Teman (?) | Hantu Gentayangan |

## Endings
| ID | Nama | Jalur |
|---|---|---|
| e_wahyu | Wahyu Ending | D (eksklusif, perlu blackout stage 3) |
| e_bad1 | Bad Ending 1 | A→B1 |
| e_bad2 | Bad Ending 2 | A→B2 |
| e_ses | Sesat Ending | A→B4 |
| e_sec | Secret Ending | B→B1 |
| e_tru | True Ending | B→B2 |
| e_skz | Skizo Ending | C→B3 |

## Plot Penting
- **Hari 3 Blackout (node d4)**: Wahyu merasuki MC, bantai anggota kultus. MC tidak ingat
- **Hari 4 (node d5)**: MC dengar gosip → trigger blackout stage 1
- **Wahyu**: hantu korban pesugihan, interaksi sebagai "teman imajinasi" MC
- **Rendi**: ortunya — ibu anggota kultus, bapak coba ngelawan → dibunuh di branch tertentu
- **Ucok**: sensor supernatural pasif, tidak pernah salah baca situasi

## Clue System (Ucok) — sudah di-merge ke nodes
- Hari 1–2 (d1): ngumpet waktu Pak RT masuk
- Hari 4–8 (d5): ngeong ke dinding → trigger rewind ke d4
- Hari 14–15 (d21): bawa sobekan kain kafan → trigger rewind ke d4
- Hari 17–18 (d28): bulu berdiri di depan rumah Pak RT
- Jalur B Hari 33–34 (b60): kabur tengah malam → pimpin MC ke gudang bukti
