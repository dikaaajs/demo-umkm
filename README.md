# Demo UMKM — Dapur Rasa

Demo katalog kuliner fiktif untuk portofolio, dibuat dengan Next.js App Router, React, TypeScript, dan CSS. Website diekspor secara statis dan tidak membutuhkan database.

## Menjalankan di komputer

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk memeriksa build: `npm run build`.

## Kustomisasi

- Menu, harga, dan kategori contoh ada di `app/page.tsx`.
- Alamat, jam operasional, tautan Google Maps, dan tautan layanan pesan antar ada di `app/business.ts`.
- Isi `url` dengan tautan toko GoFood, GrabFood, ShopeeFood, atau platform lain. URL kosong tidak akan ditampilkan. Pengunjung diarahkan ke halaman toko, bukan langsung ke menu tertentu.
- Jika semua URL kosong, website menampilkan informasi bahwa layanan pesan antar belum tersedia. Isi `mapsUrl` dengan tautan lokasi sebenarnya untuk menampilkan tombol Google Maps.
- Menu dan informasi usaha bersifat fiktif. Foto stok hanya contoh dan tidak menggambarkan produk usaha sebenarnya. Ganti dengan foto produk klien sebelum digunakan untuk usaha.
- Foto contoh oleh Mufid Majnun di Unsplash: [foto pertama](https://unsplash.com/photos/a-plate-of-food-PHOf-72Iw-A) dan [foto kedua](https://unsplash.com/photos/a-plate-of-food-ljqmunR-oo4). Keduanya ditandai bebas digunakan di bawah [Lisensi Unsplash](https://unsplash.com/license).
- Foto dimuat dari server Unsplash, sehingga membutuhkan koneksi internet.
- Tampilan dan warna ada di `app/styles.css`.
- Metadata ada di `app/layout.tsx`. Font dimuat dari Google Fonts, dengan fallback lokal.

## Netlify

Impor repository ke Netlify. Atur build command `npm run build` dan publish directory `out`. Website memakai `output: 'export'` dan tidak menyertakan fitur server Next.js. Periksa ulang deploy dan fitur di akun sendiri sebelum digunakan untuk klien.
