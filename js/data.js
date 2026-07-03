// ══════════════════════════════════════════════════════════
// CHARACTER DATA
// ══════════════════════════════════════════════════════════
const CHARS = [
  {
    id:'mc',
    name:'MC', av:'🧍', ab:'#08182a', abr:'#4a8aaa',
    rolePublic:'Protagonis',     rpC:'#1a2a40', rpT:'#4a8aaa',
    roleSpoiler:'Protagonis',    rsC:'#1a2a40', rsT:'#4a8aaa',
    teaser:'Perantau dari Medan, kerja kurir di Desa Ngudilancur. Tidak punya koneksi di desa, tidak ada yang tahu keberadaannya — persis profil yang dicari jaringan pesugihan.',
    note:null,
    spoilerText:'MC tidak pernah punya nama — selalu dipanggil "Mas" oleh warga.\n\nSejak Hari 3, MC mengalami blackout periodik yang tidak pernah dia pertanyakan serius. Dia tidak tahu bahwa selama blackout itu, ada yang memakai tubuhnya — Wahyu, korban kultus sebelumnya.\n\nBergantung pada pilihan, MC bisa selamat, terjebak, bergabung dengan pesugihan, atau kehilangan nalarnya sendiri. Di satu jalur, MC pulang ke Medan dengan Ucok di carrier. Di jalur lain, MC tidak pernah meninggalkan desa.'
  },
  {
    id:'ucok',
    name:'Ucok', av:'🐱', ab:'#141408', abr:'#888833',
    rolePublic:'Kucing MC',         rpC:'#1e1e08', rpT:'#999933',
    roleSpoiler:'Detektor Supernatural', rsC:'#252500', rsT:'#cccc33',
    teaser:'Kucing peliharaan MC dari Medan. Terlihat biasa dan manja — tapi Ucok adalah satu-satunya karakter yang tidak pernah salah membaca situasi di seluruh game.',
    note:'Perhatikan Ucok di setiap scene. Kalau Ucok aneh, sesuatu memang tidak beres.',
    spoilerText:'Ucok berfungsi sebagai sensor supernatural pasif yang tidak pernah salah:\n\n• Hari 2: langsung ngumpet saat Pak RT masuk — pertama kalinya Ucok begitu\n• Hari 15: bawa sobekan kain kafan ke kamar MC berulang kali\n• Hari 17: bulu berdiri penuh di depan rumah Pak RT\n• Jalur B Hari 34: kabur tengah malam, memimpin MC ke gudang berisi bukti\n\nNasib Ucok per ending:\n• True/Secret: selamat, ikut kabur bareng MC\n• Bad Ending: ditemukan sendirian di depan kontrakan yang dikunci dari luar\n• Sesat Ending: tidak pernah ditemukan. Selamanya\n• Skizo Ending: MC tidak bisa pastikan Ucok masih ada atau halusinasi'
  },
  {
    id:'rendi',
    name:'Rendi', av:'😄', ab:'#0a1810', abr:'#3a7a4a',
    rolePublic:'Teman Tongkrongan',  rpC:'#0a2010', rpT:'#4a8a5a',
    roleSpoiler:'Korban Kultus',     rsC:'#1a2a10', rsT:'#66aa44',
    teaser:'Warga asli Desa Ngudilancur yang jadi teman tongkrongan MC. Anak yang santai, tahu banyak soal desa, dan tidak punya kecurigaan apapun terhadap lingkungan tempat dia tumbuh.',
    note:'Rendi tidak tahu ibunya anggota kultus Ustadz Faruq. Bapaknya tahu — dan diam-diam coba ngelawan.',
    spoilerText:'Rendi adalah anchor "normalitas" MC di desa — teman yang paling tidak curiga, justru karena dia tumbuh di sana.\n\nKeluarganya: ibunya sudah terbutakan oleh kultus Ustadz Faruq. Bapaknya waras dan diam-diam menolak — dialah yang slip kertas nomor ke MC di Hari 21, bukan warga random.\n\nArc per branch:\n• Jalur A: Rendi mulai curiga MC berubah, tanya-tanya ke orang yang salah → ibunya lapor ke kultus. Bapak coba halangi. Keduanya dibunuh atas perintah kultus.\n• Jalur B: Rendi aktif bantu MC investigasi. Di titik kritis, Rendi lihat MC ngobrol sendiri dan tanya "Lo ngobrol sama siapa tadi?" Ibu Rendi ketahuan jadi anggota. Bapak coba lindungi Rendi. Keduanya dibunuh sebelum BP2.\n• Jalur C: Rendi coba jangkau MC yang disosiasi. MC tidak bisa memproses apa yang terjadi.\n\nEnding di mana Rendi selamat: kabur bareng MC (Secret/True Ending Jalur B).'
  },
  {
    id:'ibu_rendi',
    name:'Ibu Rendi', av:'🧕', ab:'#150808', abr:'#664422',
    rolePublic:'Warga Desa',         rpC:'#1a1008', rpT:'#886644',
    roleSpoiler:'Anggota Kultus',    rsC:'#2a1008', rsT:'#cc6633',
    teaser:'Ibu Rendi yang MC kenali dari cerita Rendi. Tampak seperti ibu rumah tangga biasa yang taat beragama di desa.',
    note:null,
    spoilerText:'Anggota aktif jaringan pesugihan Ustadz Faruq. Sudah terbutakan oleh kepercayaan.\n\nDia yang melaporkan aktivitas Rendi dan keterlibatan bapak Rendi ke Ustadz Faruq. Secara tidak langsung, dia memerintahkan kematian anaknya dan suaminya sendiri.\n\nScene di Jalur A: MC melihatnya di pertemuan kultus dan baru sadar siapa dia. Ibu Rendi menghampiri MC dengan hangat: "Kamu teman Rendi kan. Bagus kamu ada di sini. Ini jalan yang benar."\n\nDia tidak tahu — atau memilih tidak tahu — bahwa saat itu Rendi dan suaminya sudah tidak ada.'
  },
  {
    id:'pakrt',
    name:'Pak RT', av:'👴', ab:'#160606', abr:'#663322',
    rolePublic:'Warga Desa',         rpC:'#1a1010', rpT:'#886655',
    roleSpoiler:'Antagonis Pendukung', rsC:'#2a0808', rsT:'#cc5533',
    teaser:'Warga desa yang selalu punya alasan untuk dekat dengan pendatang baru. Rajin berkunjung, sering traktir, selalu tahu di mana MC berada.',
    note:null,
    spoilerText:'Recruiter jaringan pesugihan Ustadz Faruq. Tugasnya: identifikasi perantau tanpa keluarga yang tahu keberadaan mereka, bangun kepercayaan, serahkan ke jaringan.\n\nClue yang ditanam sejak awal:\n• Hari 2: Ucok langsung ngumpet waktu Pak RT masuk\n• Hari 17: Ucok menolak masuk rumah Pak RT\n• Hari 24: tidak ada bayangan Pak RT di bawah lampu\n• Hari 26: tanya apakah keluarga MC tahu MC di sini\n\nNasib per ending:\n• True Ending: kabur saat konfrontasi, tertangkap dua jam kemudian\n• Sesat Ending: MC bergabung ke jaringannya\n• Bad Ending: tetap bebas, mencari target berikutnya'
  },
  {
    id:'faruq',
    name:'Ustadz Faruq', av:'🧔', ab:'#140404', abr:'#662222',
    rolePublic:'Tokoh Agama',        rpC:'#1a0808', rpT:'#886644',
    roleSpoiler:'Antagonis Utama',   rsC:'#2a0404', rsT:'#cc2222',
    teaser:'Ustadz yang dihormati seluruh desa. Suara tenang, pakaian rapi, pengajian selalu ramai. Tidak ada warga yang pernah meragukannya.',
    note:null,
    spoilerText:'Dalang pesugihan yang beroperasi di balik citra alim. Jaringannya sudah berjalan bertahun-tahun.\n\nClue terselubung:\n• Suhu ruangan selalu turun saat Faruq berdiri\n• Tidak pernah minum minuman yang dihidangkan di pengajian\n• Tidak ada bayangan di momen-momen tertentu\n\nNasib per ending:\n• True Ending: ditangkap, kasusnya terungkap ke publik\n• Secret Ending: lolos dari hukum, tapi namanya mulai beredar\n• Bad Ending 1 & 2: tetap bebas\n• Sesat Ending: berhasil merekrut MC'
  },
  {
    id:'wahyu',
    name:'Wahyu', av:'👁', ab:'#0e0416', abr:'#7a2aaa',
    mystery:true,
    rolePublic:'Teman (?)',           rpC:'#1a0828', rpT:'#884aaa',
    roleSpoiler:'Hantu Gentayangan', rsC:'#2a0840', rsT:'#cc44dd',
    teaser:'Suara yang mulai bicara ke MC sekitar Hari 3. MC menganggapnya teman imajinasi — sampai Rendi melihat MC ngobrol sendiri dan bertanya: "Lo ngobrol sama siapa tadi?"',
    note:'Plot twist: dia bukan halusinasi. Dan bukan manusia.',
    spoilerText:'Namanya Wahyu. Perantau yang menjadi korban pesugihan Ustadz Faruq sebelum MC datang ke desa. Rohnya belum pergi karena ada yang belum selesai: balas dendam.\n\nMalam Hari 3, Wahyu merasuki tubuh MC dan membantai beberapa anggota kultus. MC bangun tanpa ingatan. Hari 4, MC dengar gossip emak-emak tentang "kejadian semalam" dan dalam hati cuma bilang: "Wah serem juga ya, eh kemarin aku ngapain ya kok kayak lupa gitu... yaudah lah."\n\nWahyu berinteraksi langsung dengan MC sebagai "teman" — member saran, bicara santai, kadang mengejek. Player tidak akan tahu sampai momen kunci bahwa Wahyu bukan manusia.\n\nNasib per ending:\n• True/Secret Ending: berhasil "istirahat" setelah pesugihan terbongkar\n• Bad Ending: ikut terjebak bersama MC\n• Sesat Ending: terlepas dan pergi\n• Skizo Ending: MC tidak bisa lagi bedakan mana suaranya sendiri, mana suara Wahyu'
  },
];

// ══════════════════════════════════════════════════════════
// PALETTE & LAYOUT
// ══════════════════════════════════════════════════════════
const P={
  sh: {fill:'#0a1e30',stroke:'#4a8aaa',badge:'#4a8aaa'},
  d4: {fill:'#150820',stroke:'#7a3aaa',badge:'#7a3aaa'},
  bp: {fill:'#1c1c00',stroke:'#cccc33',badge:'#cccc33'},
  a:  {fill:'#220a0a',stroke:'#c84a4a',badge:'#c84a4a'},
  b:  {fill:'#0a1e0a',stroke:'#4aaa4a',badge:'#4aaa4a'},
  c:  {fill:'#160828',stroke:'#a04acc',badge:'#a04acc'},
  b2a:{fill:'#1e0e00',stroke:'#dd8822',badge:'#dd8822'},
  b2b:{fill:'#001e08',stroke:'#33cc55',badge:'#33cc55'},
  b2c:{fill:'#1a0030',stroke:'#9944dd',badge:'#9944dd'},
  bad:{fill:'#2a0000',stroke:'#ff4444',badge:'#ff4444'},
  sec:{fill:'#002a08',stroke:'#22dd44',badge:'#22dd44'},
  tru:{fill:'#001804',stroke:'#44ff66',badge:'#44ff66'},
  ses:{fill:'#1a0028',stroke:'#cc22dd',badge:'#cc22dd'},
  skz:{fill:'#0e0018',stroke:'#9933cc',badge:'#9933cc'},
};

// Y-position untuk tiap jalur
const SY=360, AY=150, BY=360, CY=575;

// Y-position Wahyu lane (antara AY dan SY)
const WY=255;

// ══════════════════════════════════════════════════════════
// NODES
// Merge: d1+d2, d5+d6+d7, a60+a63, b60+b64, c64+c65
// Spacing: Shared 180px · Branch 160px
// ══════════════════════════════════════════════════════════
const NODES=[
  // ── SHARED (Hari 1–27) ──
  // MERGED: d1 + d2
  {id:'d1',  x:100,  y:SY, r:20, ...P.sh, day:'Hari 1',  icon:'🏠', label:'Tiba &\nPak RT',
   tag:'Shared', title:'Hari 1–2 — Tiba di Ngudilancur & Ketemu Pak RT',
   desc:'Hari 1, MC tiba naik motor dari Medan. Kontrakan sempit di gang dalam — murah, sepi. Ucok langsung keluar dari carrier dan inspeksi tiap sudut.\n\nHari 2, MC mulai antar paket. Satu alamat di ujung desa — tidak ada yang buka pintu, tapi paket diterima.\n\nSore harinya Pak RT datang sendiri, bawa pisang goreng. Senyumnya lebar, bicaranya halus. "Kalau ada apa-apa, ke saya dulu ya, Mas." Ucok ngumpet di bawah kasur selama Pak RT di dalam — satu-satunya kali itu terjadi.'},

  {id:'d4',  x:280,  y:SY, r:20, ...P.d4, day:'Hari 3',  icon:'💀', label:'Blackout\n[TERSEMBUNYI]',
   tag:'Malam Ketiga', title:'Hari 3 — Malam yang MC Tidak Ingat',
   desc:'MC tidak punya memori malam ini.\n\nYang MC tidak tahu: Wahyu merasuki tubuhnya malam itu, dan membantai beberapa anggota kultus di gudang. MC bangun jam 6 pagi dalam kondisi normal — sedikit pusing, tapi tidak ada yang terlihat aneh.\n\n[Node tersembunyi dari perspektif MC. Player mengetahuinya secara retroaktif.]'},

  // MERGED: d5 + d6 + d7
  {id:'d5',  x:460,  y:SY, r:17, ...P.sh, day:'Hari 4',  icon:'👻', label:'Gosip, Ucok &\nKiriman Aneh',
   tag:'Shared', title:'Hari 4–8 — Gosip Blackout, Ucok Aneh & Kiriman Malam',
   desc:'Hari 4, MC dengar gosip di gang: "Eh, kemarin malem ada kejadian di gudang belakang sawah, serem banget..."\nMC dalam hati: "Wah serem juga ya. Eh... kemarin aku ngapain ya? Kok kayak lupa gitu. Yaudah lah." Ucok menatap MC selama 4 detik lalu pergi.\n\nHari 5, Ibu Rendi perkenalkan diri di gang — ramah, ketawa lepas. Sempat sebut "pengajian Pak Ustadz" dengan nada sangat casual. Belum ada red flag.\n\nHari 6, jam 11 malam, Ucok ngeong keras ke tembok barat. Bukan ngeong minta makan. MC ketuk tembok, kosong. Ucok berhenti, balik ke kasur, manja seperti tidak ada yang terjadi.\n\nHari 8, tetangga cerita soal "kiriman malam" — paket yang muncul di depan pintu sebelum subuh tanpa jejak kurir. Sudah setahun lebih. Warga sudah biasa. MC tertawa, pikir itu gosip.'},

  {id:'d14', x:640,  y:SY, r:20, ...P.sh, day:'Hari 10', icon:'🕌', label:'Pengajian &\nUstadz Faruq',
   tag:'Shared', title:'Hari 10 — Pengajian Pertama, Ketemu Ustadz Faruq',
   desc:'MC diajak Pak RT ke pengajian warga. Ustadz Faruq — suara datar, pakaian putih, semua orang hormat. Kecuali: suhu ruangan turun tiap Ustadz Faruq berdiri, dan Ustadz Faruq tidak pernah minum minuman yang dihidangkan.'},

  // MERGED: d17 + d20
  {id:'d17', x:820,  y:SY, r:17, ...P.sh, day:'Hari 12', icon:'📫', label:'Paket Ganjil &\nTukang Sayur',
   tag:'Shared', title:'Hari 12–13 — Paket Ganjil & Tukang Sayur',
   desc:'Hari 12, MC dapat paket ke alamat yang sama seperti kemarin. Sistem bilang belum diantar. MC antar lagi — pintu dibuka orang yang berbeda, tapi wajahnya sama persis.\n\nHari 13, Ibu Rendi ada di gang. Gibahan soal paket aneh subuh-subuh — Ibu Rendi nyeletuk: "Ya warga sini sih udah biasa, mungkin kiriman orang yang kerja malam." Senyum ringan, ganti topik. Tapi ada yang off: satu ibu mau lanjut cerita, Ibu Rendi sentuh lengannya pelan, dan dia diam.\n\n[Clue terselubung: Ibu Rendi tahu sesuatu.]'},

  // MERGED: d21 + d24
  {id:'d21', x:1000, y:SY, r:17, ...P.sh, day:'Hari 14', icon:'🗺️', label:'Rute Hilang &\nKain Kafan',
   tag:'Shared', title:'Hari 14–15 — Rute Hilang & Kain Kafan',
   desc:'Hari 14, paket harus diantar ke koordinat yang tidak muncul di aplikasi. MC ikut insting, ketemu jalan kecil di balik ladang. Rumahnya ada. Ucok di carrier tidak mau diam sepanjang jalan pulang.\n\nHari 15, MC bangun — Ucok naruh sobekan kain putih linen di depan pintu kamar. MC buang. Malamnya Ucok bawa lagi — sobekan yang sama, atau yang berbeda, MC tidak yakin.'},

  // MERGED: d28 + d31
  {id:'d28', x:1180, y:SY, r:18, ...P.sh, day:'Hari 17', icon:'🚪', label:'Peringatan Ucok\n& Mimpi Buruk',
   tag:'Shared', title:'Hari 17–18 — Peringatan Ucok & Mimpi Buruk',
   desc:'Hari 17, Pak RT undang MC makan siang. Di depan pagar, Ucok bulu berdiri penuh. MC tinggal Ucok di luar. Selama makan, MC dengar Ucok ngeong dua kali — lirih, seperti peringatan.\n\nMalam Hari 18, mimpi: MC berdiri di tengah desa. Semua lampu mati. Ada sesuatu yang bergerak di balik setiap jendela. MC mau lari tapi kakinya tidak bergerak. Ucok ada di belakangnya, ngeong keras, tapi suaranya makin menjauh. MC bangun jam 3.17.'},

  // MERGED: d35 + d37
  {id:'d35', x:1360, y:SY, r:17, ...P.sh, day:'Hari 20', icon:'🗣️', label:'Nama Rendi\n& Red Flag',
   tag:'Shared', title:'Hari 20–21 — Nama Rendi & Red Flag',
   desc:'Hari 20, di warung kopi, warga tua slip nama "Rendi." Langsung diam, ganti topik. Satu warga kasih kertas kecil diam-diam: nomor HP. "Kalau mau tahu yang sebenarnya."\n\nHari 21, MC iseng sebut nama itu ke Ibu Rendi di gang. Senyumnya tidak hilang, tapi ada yang bergeser. "Iya. Tapi dia sudah lama tidak di sini. Kamu kenal dia dari mana?" Nada terlalu datar. Tangannya mencengkeram tas belanjaan lebih erat.\n\n[Red flag terkonfirmasi.]'},

  // MERGED: d38 + d42
  {id:'d38', x:1540, y:SY, r:17, ...P.sh, day:'Hari 22', icon:'👤', label:'Nama Tanpa Wajah\n& Pak RT',
   tag:'Shared', title:'Hari 22–23 — Nama Tanpa Wajah & Pak RT',
   desc:'Hari 22, MC mulai hitung: dalam tiga minggu, ada 4 nama yang disebut warga tapi tidak ada orangnya. Semua "sudah pindah." Semua perantau.\n\nHari 23, MC mulai sadar: Pak RT muncul setiap kali MC sendirian. Selalu ada alasan masuk akal. Malam itu MC iseng lihat ke bawah — tidak ada bayangan Pak RT di bawah lampu. MC tutup tirai.'},

  // MERGED: d45 + d48
  {id:'d45', x:1720, y:SY, r:17, ...P.sh, day:'Hari 24', icon:'🖼️', label:'Foto Korban &\nPertanyaan Pak RT',
   tag:'Shared', title:'Hari 24–25 — Foto Korban & Pertanyaan Pak RT',
   desc:'Hari 24, MC bersih-bersih, temukan foto di laci meja: foto warga desa, ada yang MC kenal. Di balik foto, nama dan tanggal. Beberapa dari mereka adalah "yang sudah pergi." Foto ini tertinggal dari penghuni sebelumnya.\n\nHari 25, Pak RT tanya santai: "Keluarganya ada yang tahu Mas tinggal di sini?" MC jawab tidak terlalu. Pak RT angguk. "Bagus, berarti betahnya di sini aja ya." MC baru sadar artinya dua hari kemudian.'},

  // MERGED: d49 + d50
  {id:'d49', x:1900, y:SY, r:17, ...P.sh, day:'Hari 26', icon:'🌃', label:'Malam Sebelum\n& WA Rendi',
   tag:'Shared', title:'Hari 26–27 — Malam Sebelum & WA Rendi',
   desc:'Hari 26, Ucok bangunkan MC jam 2 pagi — ngeong ke jendela. MC lihat keluar: gang kosong. Tapi ada bau keringat basi yang samar, langkah berat yang menjauh, dan tidak ada bayangan yang bergerak meski lampu gang menyala.\n\nHari 27, MC akhirnya coba nomor di kertas. Berdering lama. Tidak diangkat. MC kirim WA — centang satu. Jam 11.57 malam, Rendi balas: "Jangan angkat kalau Pak RT telpon malam ini. Jangan pergi ke mana pun."'},

  // ── BRANCH POINT 1 ──
  {id:'bp1', x:2080, y:SY, r:30, ...P.bp, day:'Hari 28', icon:'⚑', label:'BRANCH\nPOINT 1',
   tag:'Branch Point', title:'Hari 28 — Branch Point 1',
   desc:'Tengah malam. Pak RT telpon: "Ada yang perlu aku tunjukkan ke Mas. Sekarang, bisa?"\n\n[A] Ikut sekarang — matikan HP, pergi bersama Pak RT\n[B] Bilang tunggu dulu — balas WA Rendi, koordinasi dulu\n[C] Bilang iya ke Pak RT — tapi diam-diam ikuti dari jauh\n[D] Hanya tersedia kalau kamu sudah tahu apa yang terjadi Hari 3'},

  // ── JALUR WAHYU (D) — hanya terbuka bila blackout fully unlocked ──
  {id:'d_w1', x:2240, y:WY, r:18, fill:'#100420',stroke:'#aa44dd',badge:'#aa44dd', day:'Hari 28', icon:'👁', label:'Wahyu\nBicara',
   tag:'Jalur Wahyu', title:'D · Hari 28 — Wahyu Bicara Jelas',
   desc:'Untuk pertama kalinya, MC tidak berpura-pura tidak tahu. Wahyu bicara langsung: "Aku punya nama. Aku pernah ada. Mereka membunuhku dan tidak ada yang tahu."\n\nMC menerima sepenuhnya. Bukan panik, bukan menyangkal. Baru kali ini Wahyu terdengar seperti manusia, bukan bisikan.'},

  {id:'d_w2', x:2480, y:WY, r:17, fill:'#100420',stroke:'#aa44dd',badge:'#aa44dd', day:'Hari 30', icon:'🕯️', label:'Temukan\nBukti Wahyu',
   tag:'Jalur Wahyu', title:'D · Hari 30 — Temukan Bukti Keberadaan Wahyu',
   desc:'MC cari nama Wahyu di seluruh catatan yang pernah ditemukan. Ada satu ID card di tumpukan dokumen lama — nama Wahyu, foto, tanggal kedatangan, dan tanggal "selesai" yang sama dengan malam Hari 3.\n\nUcok memeluk carrier kosong tempat biasanya Wahyu "duduk" waktu perjalanan. MC tidak berkomentar.'},

  {id:'d_w3', x:2720, y:WY, r:17, fill:'#100420',stroke:'#aa44dd',badge:'#aa44dd', day:'Hari 34', icon:'⚖️', label:'Konfrontasi\nSebagai Saksi',
   tag:'Jalur Wahyu', title:'D · Hari 34 — Wahyu sebagai Saksi Hidup (Mati)',
   desc:'MC dan Wahyu menyusun kronologi lengkap — semua yang Wahyu ingat, semua yang MC temukan. Wahyu tidak bisa "hadir" secara fisik, tapi bisa bersaksi lewat MC yang menghafal setiap detail.\n\nIni bukan investigasi biasa. Ini pemakaman yang tertunda.\n\nWahyu berkata: "Terima kasih sudah mau tahu namaku."'},

  // ── JALUR A ──
  {id:'a52', x:2240, y:AY, r:18, ...P.a, day:'Hari 29', icon:'🏚️', label:'Lokasi\nRahasia',
   tag:'Jalur A', title:'A · Hari 29 — Gudang di Balik Sawah',
   desc:'Pak RT bawa MC ke bangunan tua di pinggir sawah. Di dalam: beberapa warga yang tidak pernah MC lihat, cahaya lilin, dan Ustadz Faruq di pojok. MC diperkenalkan. Semua senyum.'},

  // MERGED: a54 + a56
  {id:'a54', x:2400, y:AY, r:17, ...P.a, day:'Hari 30', icon:'🕯️', label:'Menunggu &\nLihat Prosesi',
   tag:'Jalur A', title:'A · Hari 30–31 — Menunggu & Lihat Prosesi',
   desc:'Hari 30, ada pertemuan lagi tapi MC disuruh tunggu di luar. 40 menit. Dari celah pintu, ada suara lantunan yang MC tidak kenal bahasanya. Ucok di kontrakan ngeong terus — tetangga komplain keesokan harinya.\n\nHari 31, MC akhirnya diajak masuk saat prosesi berlangsung. Ada yang terlihat seperti doa, ada yang terlihat seperti serah-terima sesuatu. MC berdiri di belakang, tidak bertanya. Pulang jam 2 pagi.'},

  {id:'a58', x:2560, y:AY, r:17, ...P.a, day:'Hari 32', icon:'🤝', label:'Diperkenalkan\nResmi',
   tag:'Jalur A', title:'A · Hari 32 — Diperkenalkan ke Semua Anggota',
   desc:'Ustadz Faruq panggil MC maju. MC dapat amplop — uang lebih dari gaji kurir sebulan. "Tanda terima kasih sudah percaya." MC tidak nanya lebih lanjut.\n\n⚠ [Branch Switch tersedia: A→C — kalau MC melihat detail prosesi yang terlalu disturbing, nalar mulai retak → geser ke Jalur C]'},

  // MERGED: a60 + a63
  {id:'a60', x:2720, y:AY, r:20, ...P.a, day:'Hari 33', icon:'👁️', label:'Tugas, Diawasi &\nUcok Hilang',
   tag:'Jalur A', title:'A · Hari 33–34 — Tugas Pertama, Diawasi & Ucok Hilang',
   desc:'Hari 33, MC dapat tugas: antar "kiriman khusus" ke titik tertentu, tidak boleh dibuka. MC antar. Waktu MC kembali, Ucok tidak mau didekati MC selama dua jam penuh.\n\nSetelah itu MC mulai sadar ada yang mengikuti. Bukan Pak RT. Setiap kali MC menoleh, tidak ada siapapun — tapi ada bau keringat basi yang sama seperti malam Hari 26.\n\nHari 34, MC pulang malam. Pintu terkunci dari dalam. Ucok tidak ada. Tidak ada bekas kabur. MC lapor Pak RT — Pak RT bilang "paling nyasar, nanti balik." Senyumannya tidak sampai ke mata.\n\n⚠ [Branch Switch tersedia: A→B — kalau MC akhirnya balas WA lama Rendi setelah Ucok hilang → geser ke Jalur B versi terlambat]'},

  {id:'a65', x:2880, y:AY, r:17, ...P.a, day:'Hari 36', icon:'🔦', label:'Ketemu Rendi\nTidak Sengaja',
   tag:'Jalur A', title:'A · Hari 36 — Rendi Muncul Tidak Terduga',
   desc:'MC lagi cari Ucok di pasar pagi. Ada yang menarik lengan MC dari belakang — Rendi. Kurus, mata merah. "Aku sudah amati kamu dari jauh. Kamu sudah masuk terlalu dalam. Malam ini terakhir kesempatanmu keluar."'},

  {id:'bp2a',x:3040, y:AY, r:28, ...P.b2a, day:'Hari 37', icon:'⚑', label:'BP2-A',
   tag:'Branch Point', title:'Hari 37 — Branch Point 2 (Jalur A)',
   desc:'Ustadz Faruq undang MC ke "acara penting malam ini." Rendi kirim WA terakhir: "Ini malam terakhir."\n\n[B1] Kabur — tinggalkan semua, pergi bersama Rendi\n[B2] Konfrontasi — hadapi Ustadz Faruq langsung\n[B4] Abaikan Rendi — hadir di acara Ustadz Faruq'},

  // ── JALUR B ──
  // MERGED: b52 + b53
  {id:'b52', x:2240, y:BY, r:18, ...P.b, day:'Hari 29', icon:'🤫', label:'Rendi\nAkhirnya Bicara',
   tag:'Jalur B', title:'B · Hari 29–30 — Rendi Akhirnya Bicara',
   desc:'MC balas WA Rendi, tidak jadi pergi dengan Pak RT. Rendi minta ketemu langsung di luar desa, jam 6 pagi sebelum pasar buka.\n\nRendi datang duluan. Tampak kurus, gelisah. "Dua tahun lalu aku hampir jadi korban kesekian. Yang mereka lakukan di malam-malam itu — itu bukan sekedar ritual biasa." Rendi kasih nama-nama. Semua perantau.'},

  {id:'b55', x:2400, y:BY, r:17, ...P.b, day:'Hari 31', icon:'🗂️', label:'Mulai\nMapping',
   tag:'Jalur B', title:'B · Hari 31 — MC dan Rendi Mulai Mapping',
   desc:'Rendi dan MC susun peta: siapa saja yang hilang, kapan, pola lokasinya. Semua korban tinggal sendirian. Semua tidak punya keluarga yang tahu mereka di sana. MC diam: "Pak RT tanya soal keluargaku kemarin."'},

  {id:'b57', x:2560, y:BY, r:17, ...P.b, day:'Hari 32', icon:'📋', label:'Pola\nKorban',
   tag:'Jalur B', title:'B · Hari 32 — Pola yang Terlalu Rapi',
   desc:'Dari catatan Rendi, korban selalu hilang antara minggu ke-5 sampai ke-6. MC sekarang ada di Hari 32 — zona merah.\n\n⚠ [Branch Switch tersedia: B→C — kalau MC tidak sengaja melihat ritual saat investigasi → geser ke Jalur C]\n\n⚠ [Momen kunci: Rendi melihat MC "ngobrol sendiri" dan tanya "Lo ngobrol sama siapa tadi?"]'},

  // MERGED: b60 + b64
  {id:'b60', x:2720, y:BY, r:20, ...P.b, day:'Hari 33', icon:'🔓', label:'Gudang, Bukti &\nFoto Semua',
   tag:'Jalur B', title:'B · Hari 33–34 — Ucok Tunjukkan Gudang & Dokumentasi Bukti',
   desc:'Hari 33, tengah malam Ucok kabur dari jendela. MC kejar. Ucok berlari lurus ke gang belakang masjid lama, berhenti di depan gudang kecil. Rendi bantu buka gembok. Di dalam: dokumen, foto, ID card orang-orang yang "sudah pergi." Ada buku catatan — nama, tanggal kedatangan, tanggal "selesai." Ada nama MC. Dengan tanggal yang belum terisi.\n\nHari 34, MC dan Rendi foto semua dokumen. Rendi punya kontak jurnalis di kota. Rencana: keluar Hari 37 sebelum Ustadz Faruq curiga. Ucok tidur di atas tumpukan dokumen seolah jaga.\n\n⚠ [Branch Switch tersedia: B→A — kalau MC panik dan hancurkan bukti karena takut → geser ke Jalur A, tapi sudah terlambat]'},

  // MERGED: b65 + b66
  {id:'b65', x:2880, y:BY, r:17, ...P.b, day:'Hari 35', icon:'⚠️', label:'Diawasi &\nBocor',
   tag:'Jalur B', title:'B · Hari 35 — Diawasi & Rencana Bocor',
   desc:'Pak RT tiba-tiba jarang muncul. Tapi MC merasa lebih diawasi. Ada motor yang parkir di depan gang dari pagi sampai malam — beda orang, beda motor, tapi pose mereka sama: tidak melakukan apa-apa.\n\nRendi telpon panik: ada yang tahu mereka masuk gudang. Rencana harus dipercepat. "Besok. Jam 4 subuh. Jangan kasih tahu siapapun."'},

  {id:'bp2b',x:3040, y:BY, r:28, ...P.b2b, day:'Hari 37', icon:'⚑', label:'BP2-B',
   tag:'Branch Point', title:'Hari 37 — Branch Point 2 (Jalur B)',
   desc:'Jam 3.45 subuh. Rendi ada di luar. Tapi ada ketukan — suara Pak RT. "Mas, ada yang mau aku omongin sebentar."\n\n[B1] Kabur — tidak buka pintu, langsung pergi lewat jendela belakang\n[B2] Konfrontasi — buka pintu, hadapi Pak RT dengan bukti yang ada'},

  // ── JALUR C ──
  {id:'c52', x:2240, y:CY, r:18, ...P.c, day:'Hari 29', icon:'🌿', label:'Mengintip\nRitual',
   tag:'Jalur C', title:'C · Hari 29 — Ritual yang Tidak Boleh Dilihat',
   desc:'MC ikut tapi tidak masuk. Dari balik pohon cemara, MC mengintip ke celah jendela gudang. Yang dilihat MC: sesuatu yang tidak bisa dideskripsikan dengan kata-kata yang dimiliki MC. MC pulang. Tidak bisa cerita ke siapapun.'},

  // MERGED: c53 + c55
  {id:'c53', x:2400, y:CY, r:17, ...P.c, day:'Hari 30', icon:'🤐', label:'Tidak Bisa\nProses',
   tag:'Jalur C', title:'C · Hari 30–31 — Tidak Bisa Proses',
   desc:'MC coba nulis di notes HP apa yang dilihat malam itu. Hapus. Tulis lagi. Hapus lagi. Setiap kali mencoba merumuskan, kata-katanya tidak keluar. Ucok duduk di pangkuan, tidak bergerak seharian.\n\nHari 31, MC coba foto gudang dari jauh. Semua foto keluar blur, atau hitam, atau keluar foto yang MC tidak ingat mengambilnya — foto kontrakan, foto Ucok tidur, foto MC sendiri dari belakang.'},

  {id:'c57', x:2560, y:CY, r:17, ...P.c, day:'Hari 32', icon:'🌀', label:'Mulai\nDisosiasi',
   tag:'Jalur C', title:'C · Hari 32 — Batas Nyata Mulai Kabur',
   desc:'MC mulai ragu ingatan sendiri. Apakah benar-benar lihat ritual? Atau hanya mimpi? MC cek sepatu — ada tanah sawah. MC cek jaket — ada bau asap lilin. Tapi MC tidak yakin.'},

  // MERGED: c59 + c62
  {id:'c59', x:2720, y:CY, r:17, ...P.c, day:'Hari 33', icon:'🪞', label:'Realita\nRuntuh',
   tag:'Jalur C', title:'C · Hari 33–34 — Realita Runtuh',
   desc:'Hari 33, MC lihat dari jendela: dirinya sendiri berjalan di gang bawah. Pakai baju yang sama, tas yang sama. Yang di bawah itu menoleh ke atas. Menatap MC. Lalu pergi.\n\nHari 34, MC lihat Ucok di atas lemari. Pergi ambil makan. Kembali — tidak ada. Tidak ada jejak turun. Mangkuk tidak disentuh. MC duduk di lantai dua jam.'},

  // MERGED: c64 + c65
  {id:'c64', x:2880, y:CY, r:17, ...P.c, day:'Hari 35', icon:'🛏️', label:'Tidak Keluar &\nKertas Nama',
   tag:'Jalur C', title:'C · Hari 35–36 — Tiga Hari Tidak Keluar & Daftar Nama',
   desc:'Hari 35, MC tidak kerja. Tidak buka pintu. MC duduk di sudut kasur menghadap tembok. Sesekali ada yang lewat di luar jendela.\n\n⚠ [Branch Switch tersedia: C→A — kalau MC dalam kondisi disosiasi pasif mengikuti Pak RT yang datang → geser ke Jalur A, versi tanpa sadar]\n\nHari 36, ada kertas slip masuk dari bawah pintu. MC ambil. Ada daftar nama — semua "yang sudah pergi." Di bawah semua nama itu: nama MC. Dengan tanda tanya. Dan tulisan tangan: "Masih belum terlambat untuk pergi."'},

  {id:'bp2c',x:3040, y:CY, r:28, ...P.b2c, day:'Hari 38', icon:'⚑', label:'BP2-C',
   tag:'Branch Point', title:'Hari 38 — Branch Point 2 (Jalur C)',
   desc:'Ada yang ketuk pintu malam itu. Suara Pak RT — atau sesuatu yang terdengar seperti Pak RT.\n\nMC tidak bisa bergerak dari sudut kasur.\n\n[B3] Freeze total — MC tidak melakukan apa-apa'},

  // ── ENDINGS ──
  {id:'e_wahyu',x:3220,y:80,  r:24, fill:'#120030',stroke:'#cc44ee',badge:'#cc44ee', day:'Wahyu Ending', icon:'🕯', label:'Nama yang\nTercatat (D)',
   tag:'Wahyu Ending', title:'Wahyu Ending — Nama yang Tidak Boleh Hilang',
   desc:'Kasus Wahyu resmi tercatat. MC menyerahkan semua bukti ke jurnalis — bukan hanya soal pesugihan, tapi soal Wahyu secara spesifik: siapa dia, dari mana, kapan menghilang.\n\nUstadz Faruq dan Pak RT ditangkap.\n\nNama Wahyu muncul di berita. Keluarganya akhirnya tahu.\n\nUcok tidur di pangkuan MC dalam perjalanan pulang. Wahyu sudah tidak ada — bukan karena terjebak, tapi karena akhirnya bisa pergi.\n\n[Ending eksklusif. Hanya tersedia setelah blackout Hari 3 fully unlocked.]'},

  {id:'e_bad1',x:3220,y:210, r:24, ...P.bad, day:'Bad Ending 1', icon:'✕', label:'Terjebak\n(A → B1)',
   tag:'Bad Ending', title:'Bad Ending 1 — Tidak Ada yang Menunggu',
   desc:'MC kabur tapi semua jalur keluar sudah ditutup. Motor MC hilang. HP tidak ada sinyal.\n\nUcok ditemukan tiga hari kemudian — sendirian di depan kontrakan yang dikunci dari luar.'},

  {id:'e_bad2',x:3220,y:330, r:24, ...P.bad, day:'Bad Ending 2', icon:'✕', label:'Konfrontasi\nGagal (A → B2)',
   tag:'Bad Ending', title:'Bad Ending 2 — Tanpa Bukti, Tanpa Backing',
   desc:'MC datangi Ustadz Faruq langsung. Tidak ada bukti. Ustadz Faruq tetap tenang — bahkan tersenyum.\n\nTiga hari kemudian cerita yang beredar: ada perantau dari Medan yang gangguan jiwa, dibawa pulang.'},

  {id:'e_ses', x:3220,y:440, r:24, ...P.ses, day:'Sesat Ending',  icon:'☠', label:'Direkrut\n(A → B4)',
   tag:'Sesat Ending', title:'Sesat Ending — Bergabung Secara Sadar (atau Tidak)',
   desc:'MC abaikan Rendi, hadir di acara Ustadz Faruq. Malam itu MC resmi menjadi bagian dari jaringan pesugihan.\n\nUcok tidak ditemukan. Selamanya.\nWahyu terlepas — tidak bisa tinggal di tubuh seseorang yang bergabung dengan jaringan yang membunuhnya.'},

  {id:'e_sec', x:3220,y:545, r:24, ...P.sec, day:'Secret Ending', icon:'★', label:'Kabur Bersama\nRendi (B → B1)',
   tag:'Secret Ending', title:'Secret Ending — Pintu Terbuka, Hanya Sedikit',
   desc:'Rendi dan MC kabur jam 4 subuh. Bawa semua dokumen. Ucok di carrier.\n\nUstadz Faruq tidak bisa disentuh hukum secara langsung — tapi nama Ngudilancur mulai muncul di forum online. Kecil. Tapi ada.\n\nWahyu akhirnya bisa "istirahat."'},

  {id:'e_tru', x:3220,y:655, r:24, ...P.tru, day:'True Ending',   icon:'✦', label:'Kebenaran\nTerungkap (B → B2)',
   tag:'True Ending', title:'True Ending — Ngudilancur Akhirnya Bernapas',
   desc:'MC buka pintu. Di belakang MC: Rendi dengan dokumen. Di luar: jurnalis yang sudah Rendi hubungi.\n\nUstadz Faruq ditangkap. Pak RT lari, tertangkap dua jam kemudian.\n\nUcok tidur di pangkuan MC, perjalanan pulang ke Medan. Nama-nama yang "sudah pergi" mulai diselidiki.'},

  {id:'e_skz', x:3220,y:760, r:24, ...P.skz, day:'Skizo Ending',  icon:'⁇', label:'Runtuh\n(C → B3)',
   tag:'Skizo Ending', title:'Skizo Ending — Kita Tidak Pernah Tahu',
   desc:'MC tidak membuka pintu. MC tidak bergerak. Ketukan berhenti setelah 27 kali.\n\nKita tidak tahu apa yang terjadi setelah itu. Apakah MC selamat? Apakah Ucok nyata? Mana suara MC, mana suara Wahyu?\n\nScene terakhir: kamar kosong. Mangkuk makan bersih. Suara ngeong yang sangat jauh.'},
];

// ══════════════════════════════════════════════════════════
// EDGES (regular)
// ══════════════════════════════════════════════════════════
const EDGES=[
  // Shared
  {f:'d1', t:'d4', c:'#4a8aaa'},   // d2 merged into d1
  {f:'d4', t:'d5', c:'#6a3a8a'},
  {f:'d5', t:'d14',c:'#4a8aaa'},   // d6+d7 merged into d5
  {f:'d14',t:'d17',c:'#4a8aaa'}, {f:'d17',t:'d21',c:'#4a8aaa'},
  {f:'d21',t:'d28',c:'#4a8aaa'}, {f:'d28',t:'d35',c:'#4a8aaa'},
  {f:'d35',t:'d38',c:'#4a8aaa'}, {f:'d38',t:'d45',c:'#4a8aaa'},
  {f:'d45',t:'d49',c:'#4a8aaa'}, {f:'d49',t:'bp1',c:'#4a8aaa'},
  // Branch Point 1 → jalur (D hidden by default, unlocked via blackout mechanic)
  {f:'bp1',t:'a52',c:'#c84a4a',lbl:'A'}, {f:'bp1',t:'b52',c:'#4aaa4a',lbl:'B'}, {f:'bp1',t:'c52',c:'#a04acc',lbl:'C'},
  {f:'bp1',t:'d_w1',c:'#aa44dd',lbl:'D'},
  // Jalur A
  {f:'a52',t:'a54',c:'#c84a4a'}, {f:'a54',t:'a58',c:'#c84a4a'},
  {f:'a58',t:'a60',c:'#c84a4a'},
  {f:'a60',t:'a65',c:'#c84a4a'}, // a63 merged into a60
  {f:'a65',t:'bp2a',c:'#c84a4a'},
  // Jalur B
  {f:'b52',t:'b55',c:'#4aaa4a'}, {f:'b55',t:'b57',c:'#4aaa4a'},
  {f:'b57',t:'b60',c:'#4aaa4a'},
  {f:'b60',t:'b65',c:'#4aaa4a'}, // b64 merged into b60
  {f:'b65',t:'bp2b',c:'#4aaa4a'},
  // Jalur C
  {f:'c52',t:'c53',c:'#a04acc'}, {f:'c53',t:'c57',c:'#a04acc'},
  {f:'c57',t:'c59',c:'#a04acc'}, {f:'c59',t:'c64',c:'#a04acc'},
  {f:'c64',t:'bp2c',c:'#a04acc'}, // c65 merged into c64
  // Jalur Wahyu (D)
  {f:'d_w1',t:'d_w2',c:'#aa44dd'}, {f:'d_w2',t:'d_w3',c:'#aa44dd'},
  {f:'d_w3',t:'e_wahyu',c:'#aa44dd'},
  // Endings
  {f:'bp2a',t:'e_bad1',c:'#ff4444',lbl:'B1'}, {f:'bp2a',t:'e_bad2',c:'#ff4444',lbl:'B2'}, {f:'bp2a',t:'e_ses',c:'#cc22dd',lbl:'B4'},
  {f:'bp2b',t:'e_sec', c:'#22dd44',lbl:'B1'}, {f:'bp2b',t:'e_tru', c:'#44ff66',lbl:'B2'},
  {f:'bp2c',t:'e_skz', c:'#9933cc',lbl:'B3'},
];

// ══════════════════════════════════════════════════════════
// CROSS-BRANCH SWITCH EDGES (dashed kuning)
// Ketika node di-klik, node tujuan switch juga ikut highlight
// ══════════════════════════════════════════════════════════
const CROSS=[
  {f:'a58',t:'c57',lbl:'A→C',desc:'Lihat prosesi terlalu jauh → nalar retak'},
  {f:'a60',t:'b60',lbl:'A→B',desc:'Ucok hilang → akhirnya balas WA Rendi'},
  {f:'b57',t:'c57',lbl:'B→C',desc:'Tidak sengaja lihat ritual saat investigasi'},
  {f:'b60',t:'a60',lbl:'B→A',desc:'Panik, hancurkan bukti → masuk ke jalur A terlambat'},
  {f:'c64',t:'a65',lbl:'C→A',desc:'Disosiasi total → pasif ikut Pak RT'},
];

// ══════════════════════════════════════════════════════════
// REWIND EDGES (retroaktif → Blackout d4)
// ══════════════════════════════════════════════════════════
const REWIND=[
  {f:'d5', t:'d4',lbl:'↺',desc:'Gosip emak-emak + Ucok ngeong ke dinding — semua clue Hari 4–8 mengarah ke malam yang terlupa'},
  {f:'d21',t:'d4',lbl:'↺',desc:'Sobekan kain kafan — peninggalan fisik dari malam blackout'},
  {f:'b57',t:'d4',lbl:'↺',desc:'Rendi tanya "lo ngobrol sama siapa?" — MC pertama kali dibenturkan ke memori Hari 3'},
];
