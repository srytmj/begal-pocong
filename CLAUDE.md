# Begal Pocong — Claude Code Agent Rules

## Cara Kerja Sesi Ini
- Pesan diakhiri **"gimana?"** = diskusi saja, **JANGAN implementasi**
- Pesan tanpa "gimana?" = langsung implementasi
- Minta konfirmasi sebelum nulis konten panjang (script, narasi, dll)

## Project
Game visual novel horror Roblox: **"Begal Pocong"**
Setting: Desa Ngudilancur, Jawa Timur
Web story map static: `index.html` (satu file, semua fitur)

## Deploy
- **GitHub repo**: https://github.com/srytmj/begal-pocong
- **GitHub Pages**: https://srytmj.github.io/begal-pocong/
- Deploy otomatis via GitHub Actions (`branches: master, main`) + `workflow_dispatch`
- Source Pages: **GitHub Actions** (bukan Deploy from branch)

## Struktur `index.html`
- SVG story map interaktif: klik node → detail, drag → pan, scroll → zoom
- `SVG_W=3700, SVG_H=760`, zoom awal 0.6
- Lane Y: `SY=360` (Shared), `AY=150` (Jalur A), `BY=360` (Jalur B), `CY=575` (Jalur C)
- Blackout node (d4): palette ungu `{fill:'#150820', stroke:'#7a3aaa'}`
- CROSS edges: dashed kuning `#cc9933`, clickable → jump ke target node
- REWIND edges: dashed ungu `#7a3aaa`, retroaktif ke node d4 Blackout
- Halaman Karakter: grid card dengan spoiler blur, dual role badge (public/spoiler)
- Toggle spoiler: `.spoiler-open` class di card → `.char-role-public` hide, `.char-role-spoiler` show

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

## Alur Utama
- **Hari 1–50**: Shared (semua jalur)
- **Hari 51 (BP1)**: Branch Point 1 — pilihan A/B/C
- **Jalur A**: MC direkrut masuk kultus (tanpa sadar)
- **Jalur B**: MC investigasi bareng Rendi
- **Jalur C**: MC disosiasi setelah lihat ritual
- **Hari 67 (BP2)**: Branch Point 2 per jalur → 6 endings
- **Branch Switch**: interaksi tertentu bisa pindah jalur (CROSS edges)

## Endings
| ID | Nama | Jalur |
|---|---|---|
| e_bad1 | Bad Ending 1 | A→B1 |
| e_bad2 | Bad Ending 2 | A→B2 |
| e_ses | Sesat Ending | A→B4 |
| e_sec | Secret Ending | B→B1 |
| e_tru | True Ending | B→B2 |
| e_skz | Skizo Ending | C→B3 |

## Plot Penting
- **Hari 4 Blackout**: Wahyu merasuki MC, bantai anggota kultus. MC tidak ingat
- **Hari 5**: MC dengar gosip, dalam hati "kemarin aku ngapain ya... yaudah lah"
- **Wahyu**: hantu korban pesugihan sebelumnya, interaksi sebagai "teman imajinasi" MC
- **Rendi**: ortunya — ibu anggota kultus, bapak coba ngelawan → keduanya dibunuh di branch tertentu
- **Ibu Rendi di tukang sayur**: muncul Hari 6, 20, 37 — escalating red flags
- **Ucok**: sensor supernatural pasif, tidak pernah salah baca situasi

## Clue System (Ucok)
- Hari 3: ngumpet waktu Pak RT masuk
- Hari 24: bawa sobekan kain kafan
- Hari 28: bulu berdiri di depan rumah Pak RT
- Jalur B Hari 60: kabur tengah malam → pimpin MC ke gudang bukti
