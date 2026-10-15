# Jelajah Bumi — Modul Geografi Kelas X

Aplikasi pembelajaran interaktif Geografi Kelas X SMA Negeri 12 Halmahera Timur. Materi, progres baca, catatan, dan hasil kuis tersimpan di IndexedDB pada browser. Service worker menyimpan app shell dan aset build agar aplikasi dapat dibuka kembali tanpa jaringan setelah kunjungan pertama.

## Menjalankan

Gunakan Node.js 18 atau lebih baru. Di folder `geografi-kelas-x` jalankan:

```bash
npm install
npm run dev
```

Buka URL lokal Vite yang ditampilkan di terminal (biasanya `http://localhost:5173`). Buat versi produksi dengan `npm run build`, lalu pratinjau dengan `npm run preview`.

Dependensi utama: React, Vite, Tailwind CSS, `dexie`, `dexie-react-hooks`, dan `lucide-react` (sudah dicantumkan dalam `package.json`). Service worker ringan tanpa plugin tambahan menyimpan halaman dan aset aplikasi setelah build.

## Struktur

```text
src/
  db/db.js          Skema IndexedDB, seed modul, profil siswa, progres/catatan
  data/modules.js   Empat materi Geografi dan bank soal per bab
  App.jsx           Navigasi, dashboard, reader, catatan, evaluasi/kuis
  index.css         Tailwind dan gaya global
  main.jsx          Titik masuk React
index.html
vite.config.js
tailwind.config.js
postcss.config.js
```

Basis data dibuat otomatis saat aplikasi dibuka. Jika tabel modul kosong, seed materi dan soal dimasukkan kembali. Menghapus data situs/browser akan menghapus progres, catatan, dan riwayat kuis yang tersimpan lokal.
