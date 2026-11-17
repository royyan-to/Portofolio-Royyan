import type { CertificateCategory, CertificateItem } from './types';

export const CERTIFICATE_CATEGORIES: readonly CertificateCategory[] = [
  'Networking',
  'Computer & Hardware',
  'Server Administration',
  'IT & Technology',
  'Other Achievements',
] as const;

/**
 * Daftar sertifikat & pencapaian asli.
 * Simpan file gambar sertifikat di folder public/certificates/
 * lalu tambahkan entri objek ke array `certificates` di bawah ini.
 *
 * Contoh format entri:
 * {
 *   id: 'cert-01',
 *   name: 'Nama Sertifikat Asli',
 *   organization: 'Nama Lembaga Penerbit',
 *   issueDate: 'Bulan Tahun',
 *   category: 'Networking',
 *   image: '/certificates/nama-file-sertifikat.jpg',
 *   description: 'Deskripsi singkat opsional mengenai materi atau pencapaian.',
 * }
 */
export const certificates: CertificateItem[] = [];

/**
 * Contoh tata letak sertifikat untuk menguji tampilan Lightbox Viewer
 * ketika belum ada sertifikat asli yang ditambahkan.
 * Tidak ditampilkan sebagai pencapaian nyata di galeri utama.
 */
const sampleSvgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="840" viewBox="0 0 1200 840">
  <rect width="1200" height="840" fill="#F7F6F2"/>
  <rect x="44" y="44" width="1112" height="752" fill="#FFFFFF" stroke="#C8C5BA" stroke-width="2"/>
  <rect x="64" y="64" width="1072" height="712" fill="none" stroke="#E2E0D8" stroke-width="1"/>
  <line x1="110" y1="180" x2="1090" y2="180" stroke="#425D78" stroke-width="2"/>
  <text x="110" y="145" font-family="sans-serif" font-size="18" letter-spacing="4" fill="#425D78">SAMPLE CERTIFICATE PLACEHOLDER</text>
  <text x="110" y="290" font-family="sans-serif" font-size="44" font-weight="bold" fill="#171717">Contoh Tata Letak Sertifikat</text>
  <text x="110" y="345" font-family="sans-serif" font-size="22" fill="#626262">Area ini digunakan untuk menampilkan pratinjau gambar sertifikat asli Anda.</text>
  <text x="110" y="455" font-family="sans-serif" font-size="18" fill="#777777">Penerbit: Lembaga / Penyelenggara Pelatihan</text>
  <text x="110" y="492" font-family="sans-serif" font-size="18" fill="#777777">Penerima: Royyan Abdurrahman</text>
  <text x="110" y="529" font-family="sans-serif" font-size="18" fill="#777777">Lokasi File: public/certificates/nama-file.jpg</text>
  <line x1="110" y1="660" x2="420" y2="660" stroke="#C8C5BA" stroke-width="1"/>
  <text x="110" y="695" font-family="sans-serif" font-size="15" fill="#777777">Pratinjau Lightbox — Bukan Sertifikat Asli</text>
</svg>`;

export const sampleCertificatePreview: CertificateItem = {
  id: 'sample-lightbox-preview',
  name: 'Contoh Pratinjau Sertifikat (Sample Placeholder)',
  organization: 'Contoh Lembaga Penerbit',
  issueDate: 'Tanggal Terbit (Placeholder)',
  category: 'Networking',
  image: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(sampleSvgMarkup)}`,
  description:
    'Ini adalah contoh placeholder untuk mendemonstrasikan fitur Lightbox Viewer. Tambahkan gambar sertifikat asli ke public/certificates/ dan isi data di src/data/certificates.ts.',
  isSample: true,
};
