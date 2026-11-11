import type { Metadata } from 'next';
import './styles.css';
export const metadata: Metadata = { title: 'Dapur Rasa | Sajian Hangat, Cerita Dekat', description: 'Demo website kuliner untuk UMKM dengan pilihan menu dan pilihan layanan pesan antar.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="id"><body>{children}</body></html>; }
