# Demo UMKM — Dapur Rasa

Demo katalog kuliner fiktif untuk portofolio, dibuat dengan Next.js App Router, React, TypeScript, dan CSS. Website diekspor secara statis dan tidak membutuhkan database.

## Menjalankan di komputer

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk memeriksa build: `npm run build`.

## Kustomisasi

- Menu, harga, kategori dan nomor WhatsApp contoh ada di `app/page.tsx`.
- Ganti `6281234567890` dengan nomor WhatsApp usaha (kode negara tanpa tanda +).
- Semua menu dan kontak adalah ilustrasi, dan beberapa menu memakai foto ilustrasi yang sama. Ganti foto, nama, jam dan lokasi sebelum digunakan klien.
- Gambar hero buatan AI berada di `public/hero.jpg`.
- Tampilan dan warna ada di `app/styles.css`.
- Metadata ada di `app/layout.tsx`. Font dimuat dari Google Fonts, dengan fallback lokal.

## Netlify

Impor repository ke Netlify. Atur build command `npm run build` dan publish directory `out`. Website memakai `output: 'export'` dan tidak menyertakan fitur server Next.js. Periksa ulang deploy dan fitur di akun sendiri sebelum digunakan untuk klien.
