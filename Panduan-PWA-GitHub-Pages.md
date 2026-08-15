# Panduan Pasang Warkas PWA di GitHub Pages

File yang saya buatkan ada di folder `warkas-pwa/`:
- `index.html` — tampilan aplikasi (manggil API Apps Script kamu)
- `manifest.json` — biar bisa "Install ke layar utama" beneran
- `service-worker.js` — biar tetap kebuka walau sinyal lemot
- `icons/icon-192.png` & `icons/icon-512.png` — ikon aplikasi

Backend-nya (Google Sheets + Apps Script) **tetap yang sudah kamu pasang**,
gak perlu diulang — cuma `Code.gs` di Apps Script perlu diganti ke versi
terbaru yang saya kirim di pesan sebelumnya (yang balik jadi API murni).

---

## Langkah 1 — Update Code.gs dulu

1. Buka lagi Apps Script kamu (Extensions > Apps Script dari spreadsheet).
2. Ganti isi `Code.gs` dengan versi terbaru yang saya kirim (yang judulnya
   "v3: API murni").
3. Deploy > Manage deployments > Edit > New version > Deploy.
4. Pastikan URL-nya (yang diakhiri `/exec`) masih sama seperti sebelumnya.

---

## Langkah 2 — Bikin akun GitHub (kalau belum punya)

1. Buka [github.com](https://github.com), klik **Sign up**.
2. Isi email, bikin password, pilih username. Gratis.

---

## Langkah 3 — Bikin repository baru

1. Setelah login, klik tombol **"+"** di pojok kanan atas > **New repository**.
2. Kasih nama misalnya `warkas-app`.
3. Pilih **Public**.
4. Centang **"Add a README file"**.
5. Klik **Create repository**.

---

## Langkah 4 — Upload file-filenya

1. Di halaman repository yang baru dibuat, klik **Add file > Upload files**.
2. Drag & drop atau pilih file: `index.html`, `manifest.json`, `service-worker.js`.
3. Untuk folder `icons`, upload juga kedua file gambarnya — GitHub otomatis
   bikin foldernya kalau kamu drag folder `icons` itu langsung, atau bisa
   juga bikin folder manual dengan cara ketik `icons/icon-192.png` di kolom
   nama file saat upload satuan.
4. Scroll ke bawah, klik **Commit changes**.

---

## Langkah 5 — Aktifkan GitHub Pages

1. Di repository, klik tab **Settings**.
2. Di menu kiri, klik **Pages**.
3. Di bagian "Branch", pilih **main**, folder **/ (root)**, klik **Save**.
4. Tunggu 1-2 menit, refresh halaman itu — akan muncul link hijau bertuliskan
   sesuatu seperti `https://namakamu.github.io/warkas-app/`.

---

## Langkah 6 — Buka & sambungkan

1. Buka link GitHub Pages itu di HP.
2. Akan muncul layar **"Sambungkan ke Google Sheets kamu"** — paste URL
   Apps Script kamu (yang diakhiri `/exec`), klik **Simpan & Lanjut**.
3. Kalau berhasil, lanjut ke layar login seperti biasa.
4. URL ini tersimpan di HP kamu, jadi gak perlu diisi ulang tiap buka.

---

## Langkah 7 — Install ke layar utama (PWA beneran)

- **Android (Chrome):** akan muncul notifikasi "Add Warkas to Home screen"
  otomatis, atau bisa manual lewat titik tiga (⋮) > **Add to Home screen**.
- **iPhone (Safari):** tekan ikon Share (kotak dengan panah ke atas) >
  **Add to Home Screen**.

Setelah itu, ikon Warkas muncul di layar utama HP, kebuka tanpa address bar
browser (mode standalone), dan tetap bisa kebuka meski sinyal lemot berkat
service worker (walau tetap butuh internet buat transaksi beneran).

---

## Kalau nanti Code.gs diubah lagi

Setiap kali `Code.gs` diubah, ulangi **Deploy > Manage deployments > Edit >
New version > Deploy**. URL-nya tetap sama, jadi `index.html` di GitHub
Pages gak perlu diubah.

Kalau `index.html`/`manifest.json`/`service-worker.js` yang diubah, upload
ulang filenya ke GitHub (Add file > Upload files, timpa yang lama), lalu di
HP tutup-buka lagi aplikasinya (kadang perlu hapus dari layar utama & install
ulang biar versi baru ke-load).
