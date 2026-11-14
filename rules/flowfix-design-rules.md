# Aturan Desain Web FlowFix

Panduan ini diturunkan dari `flowfix.html`. Ikuti aturan di sini setiap menambah halaman atau komponen baru agar tampilan tetap konsisten.

---

## 1. Prinsip Utama

1. **Satu halaman, satu pesan.** Setiap halaman punya satu tujuan dan satu CTA utama.
2. **Biru untuk aksi dan penekanan, netral untuk sisanya.** Jangan menambah warna aksen baru.
3. **Lega dan jelas.** Banyak ruang kosong, teks pendek, hierarki tegas.
4. **Dapat dipercaya.** Tampilkan bukti (ulasan, angka, foto tim) sebelum meminta tindakan.
5. **Mobile sama pentingnya dengan desktop.** Setiap bagian harus tetap rapi di satu kolom.

---

## 2. Design Token

Selalu pakai variabel CSS. Jangan menulis nilai warna langsung di komponen.

```css
:root{
  --blue:#0f5cff;        /* aksen utama, tombol utama, tautan penting */
  --blue-dark:#0a3fb8;   /* item terpilih, hover tombol biru */
  --navy:#0b1b3a;        /* footer, tombol gelap, tab aktif */
  --cream:#fffdf6;       /* latar halaman */
  --ink:#111827;         /* teks utama */
  --muted:#5b6478;       /* teks sekunder */
  --soft:#e9eefc;        /* latar kartu */
  --radius:14px;         /* sudut kartu dan gambar */
}
```

| Token | Dipakai untuk | Jangan dipakai untuk |
|---|---|---|
| `--blue` | Tombol utama, hero, label bagian, kata beraksen pada judul | Teks paragraf panjang |
| `--navy` | Footer, tombol sekunder gelap, menu aktif | Latar bagian isi |
| `--cream` | Latar halaman | Teks |
| `--soft` | Kartu, kutipan, kotak info | Tombol |
| `--muted` | Keterangan, deskripsi kartu | Judul |

**Kontras:** teks putih hanya di atas `--blue`, `--blue-dark`, atau `--navy`. Teks `--muted` hanya di atas `--cream`, putih, atau `--soft`.

### Spasi (kelipatan 4)

`4 · 8 · 12 · 16 · 20 · 24 · 32 · 48 · 64 · 80`

- Padding samping bagian: **48px** (desktop), **24px** (mobile).
- Jarak antar bagian: **48–80px** vertikal.
- Jarak antar kartu: **14–16px**.

---

## 3. Tipografi

Font tunggal: **Poppins** (300, 400, 500, 600). Cadangan: `system-ui, sans-serif`.

| Peran | Ukuran | Berat | Catatan |
|---|---|---|---|
| Judul hero (H1) | `clamp(36px, 5vw, 56px)` | 400 | `line-height: 1.08`, maksimal 2 baris |
| Judul bagian (H2) | `clamp(26px, 3.4vw, 36px)` | 400 | Satu atau dua kata diberi `.accent` |
| Judul kartu (H3/H4) | 15–22px | 500 | |
| Paragraf utama | 22px | 400 | `line-height: 1.45`, dipakai di bagian About |
| Paragraf biasa | 13–14px | 400 | |
| Label bagian | 12px | 600 | Huruf kapital, `letter-spacing: .06em`, warna `--blue` |
| Angka statistik | 34px | 300–400 | |

**Aturan judul:** pola khas FlowFix adalah kalimat pertama berwarna `--ink`, kalimat atau frasa kedua berwarna `--blue` lewat `<span class="accent">`. Pakai pola ini di setiap H2.

Contoh: `Fix the Leak. <span class="accent">Restore the Flow.</span>`

---

## 4. Tata Letak

- Lebar maksimal halaman: **1200px**, di tengah, sudut membulat 22px, di atas latar `#dfe7fb`.
- Gunakan **CSS Grid** untuk kolom dan **Flexbox** untuk baris tombol/menu.
- Titik henti tunggal: **900px**. Di bawahnya semua grid menjadi 1 kolom, padding samping 24px.
- Rasio kolom yang dipakai: `1.1fr 1fr 1fr` (hero), `1fr 1.4fr 1fr` (About), `1fr 2.1fr` (Services), `1fr 1.2fr` (Why), `1fr 1fr 2.2fr` (Testimoni), `1.4fr 1fr 1fr 1.2fr` (footer).

### Urutan bagian halaman

Halaman baru disusun dari bagian-bagian ini, urutannya dijaga:

1. **Header/hero** (biru) → judul, CTA, bukti singkat
2. **Konten utama** (krem) → penjelasan, daftar, fitur
3. **Bukti sosial** → testimoni, angka, logo
4. **CTA penutup + footer** (navy)

Setiap bagian dibuka dengan **label kecil (`.label`)** lalu judul H2.

---

## 5. Komponen

### Tombol

| Varian | Kelas | Pemakaian |
|---|---|---|
| Biru | `.btn .btn-blue` | CTA utama di footer atau area terang |
| Gelap | `.btn .btn-dark` | CTA di dalam kartu putih |
| Terang | `.btn .btn-light` | CTA di atas latar biru |

- Tinggi minimal **44px**, sudut **8px**, huruf 14px berat 500.
- Satu CTA utama per layar. Tombol sekunder memakai varian berbeda.
- Teks tombol berupa kata kerja: "Get a quote", "Get Started ↗".

### Menu navigasi (pil)

- Wadah putih, sudut 8px, padding 4px.
- Item aktif: latar `--navy`, teks putih. Item lain: teks `--ink`.
- Halaman baru menambah satu item pil, dan item halaman saat ini diberi `.active`.

### Kartu

- **Kartu info:** latar `--soft`, sudut `--radius`, padding 16–18px, ikon kotak 40px di kiri, judul 15px, deskripsi 12px `--muted`.
- **Kartu statistik:** latar putih, angka besar, keterangan kecil, satu tombol penuh lebar.
- **Kartu kutipan:** latar `--soft`, kutipan 19px, nama dan peran di bawah dengan avatar bulat 32px.

### Daftar pilihan (Services)

- Panel biru, tiap item tinggi 46px, sudut 10px.
- Item terpilih: latar `--blue-dark`, berat 500, tanda panah `→`.
- Mengklik item mengganti isi panel detail di sebelahnya. Pola ini dipakai untuk daftar pilihan lain.

### Gambar dan video

- Semua gambar bersudut `--radius`, `object-fit: cover`.
- Video memakai tombol putar bulat 38px di tengah.
- Foto orang atau tim selalu hangat dan nyata. Hindari ilustrasi generik.
- Saat desain belum punya foto, pakai kotak `.ph` berlabel `[Photo]`.

### Footer

- Latar `--navy`, teks putih/abu terang (`#cfd6e6`).
- Urutan: baris CTA → grid 4 kolom (merek, 2 daftar tautan, kontak) → hak cipta rata kanan.

---

## 6. Interaksi

- Transisi: 150–200 ms, `ease`, hanya untuk warna, bayangan, dan transform.
- Hover tombol: gelapkan satu tingkat (biru → `--blue-dark`).
- Gulir halus (`scroll-behavior: smooth`) untuk tautan jangkar `#bagian`.
- Panah karusel: tombol bulat 44px. Panah kiri putih bergaris biru, panah kanan terisi biru.
- Jangan memakai animasi yang menghalangi membaca. Hormati `prefers-reduced-motion`.

---

## 7. Aksesibilitas

- Tombol memakai `<button>` dan tautan memakai `<a href>`. Jangan membuat tombol dari `<div>`.
- Tombol ikon wajib punya `aria-label`.
- Daftar pilihan memakai `aria-pressed` untuk status terpilih.
- Area sentuh minimal **44×44px**.
- Kontras teks minimal 4,5:1.
- Satu `<h1>` per halaman. Urutan H2 → H3 tidak melompat.
- Setiap gambar bermakna punya `alt`. Gambar hiasan memakai `alt=""` atau `aria-hidden="true"`.

---

## 8. Gaya Penulisan

- Judul pendek, aktif, berpasangan: *"Fix the Leak. Restore the Flow."*
- Deskripsi satu kalimat. Hindari paragraf lebih dari 3 baris di luar bagian About.
- Angka konkret lebih baik daripada klaim umum ("1,240+ reviews", "12+ years").
- Nada: ramah, tegas, jujur soal harga dan waktu.

---

## 9. Checklist Halaman Baru

Sebelum menyatakan halaman baru selesai, periksa:

- [ ] Memakai `:root` token yang sama, tidak ada warna atau font baru
- [ ] Header (logo + menu pil) dan footer identik dengan halaman lain
- [ ] Item menu halaman ini diberi `.active`
- [ ] Mulai dengan hero atau judul halaman, lalu bagian-bagian berlabel `.label`
- [ ] Setiap H2 memakai pola kata beraksen biru
- [ ] Hanya satu CTA utama, dan teksnya kata kerja
- [ ] Ada elemen bukti sosial sebelum CTA penutup
- [ ] Grid runtuh menjadi 1 kolom di bawah 900px
- [ ] Semua tombol ≥ 44px, semua tombol ikon punya `aria-label`
- [ ] Gambar punya `alt`, urutan heading benar
- [ ] Diuji di lebar 375px, 768px, dan 1280px

---

## 10. Boleh dan Jangan

| Boleh | Jangan |
|---|---|
| Menambah komponen dari token yang ada | Menambah warna aksen kedua |
| Memakai Poppins di semua teks | Mencampur font lain |
| Sudut `--radius` untuk kartu dan gambar | Sudut tajam atau bervariasi acak |
| Satu CTA utama yang konsisten | Dua tombol biru bersaing di satu layar |
| Menulis ulang teks agar singkat | Paragraf panjang di luar About |
| Menambah titik henti hanya jika benar-benar perlu | Banyak breakpoint berbeda per halaman |
