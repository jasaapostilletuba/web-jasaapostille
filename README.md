# Jasa Apostille

Landing page statis berbahasa Indonesia untuk layanan apostille, terjemah resmi, dan terjemah tersumpah.

## Struktur

- `index.html` - markup halaman, SEO, Open Graph, dan JSON-LD.
- `css/style.css` - seluruh stylesheet.
- `js/main.js` - interaksi menu, daftar layanan, carousel testimoni, dan tahun copyright.
- `assets/` - gambar halaman, termasuk `model-1.webp` untuk gambar hero.
- `robots.txt` dan `sitemap.xml` - konfigurasi crawling mesin pencari.
- `vercel.json` - URL bersih, header keamanan, dan cache aset.
- `DATA-UNTUK-DISI.md` - data dan aset yang masih perlu dikonfirmasi sebelum tayang.

## Menjalankan lokal

Proyek tidak membutuhkan framework atau dependensi tambahan.

### Opsi 1: buka langsung

Buka `index.html` di browser. Interaksi dasar halaman dapat diuji tanpa server.

### Opsi 2: server lokal

Server lokal lebih mendekati lingkungan deployment Vercel dan menghindari batasan `file://`.

Jika Python tersedia:

```powershell
py -m http.server 8080
```

Lalu buka <http://localhost:8080>.

Jika menggunakan Node.js:

```powershell
npx serve .
```

Buka URL yang ditampilkan oleh perintah tersebut.

## Deploy ke Vercel melalui GitHub

1. Pastikan semua data pada [DATA-UNTUK-DISI.md](DATA-UNTUK-DISI.md) sudah dikonfirmasi.
2. Pastikan domain, nomor WhatsApp, email, alamat, aset, dan testimoni produksi sudah benar.
3. Push folder proyek ke repository GitHub.
4. Masuk ke [Vercel](https://vercel.com/) dan pilih **Add New Project**.
5. Import repository GitHub tersebut.
6. Karena proyek ini statis, biarkan **Framework Preset** tanpa framework dan **Build Command** kosong.
7. Pastikan **Output Directory** menggunakan root proyek (`.`) bila Vercel memintanya.
8. Klik **Deploy**.
9. Setelah deployment, tambahkan domain produksi di pengaturan proyek Vercel jika diperlukan.
10. Uji halaman, tautan WhatsApp, email, canonical, Open Graph, dan URL `sitemap.xml`.

## Deploy melalui Vercel CLI

Instal Vercel CLI hanya jika belum tersedia:

```powershell
npm i -g vercel
```

Login:

```powershell
vercel login
```

Dari folder proyek, jalankan deployment preview:

```powershell
vercel
```

Untuk deployment production:

```powershell
vercel --prod
```

Ikuti prompt Vercel untuk menghubungkan proyek atau membuat proyek baru. Jangan memasukkan secret atau kredensial ke dalam file proyek.

## Pemeriksaan sebelum production

- Ganti seluruh data yang masih tercantum di [DATA-UNTUK-DISI.md](DATA-UNTUK-DISI.md).
- Tambahkan `og-image.jpg` atau ubah URL `og:image` ke aset yang tersedia.
- Pastikan klaim `24 Jam*` tetap memiliki syarat dan sesuai kapasitas operasional.
- Uji tampilan pada lebar 375px, 768px, dan 1280px.
- Jalankan Lighthouse pada URL HTTPS hasil deployment, bukan hanya `file://`.
- Periksa header keamanan dan cache aset dari deployment Vercel.
