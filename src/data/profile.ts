import type { ProfileData } from './types';

/**
 * Data profil pribadi terpusat.
 * Ubah informasi di file ini untuk memperbarui identitas, bagian About Me,
 * foto profil, maupun detail kontak pada website.
 */
export const profile: ProfileData = {
  name: 'Royyan Abdurrahman',
  title: 'TKJ Student | IT Enthusiast',
  location: 'Indonesia',
  shortIntro:
    'Pelajar jurusan Teknik Komputer dan Jaringan yang memiliki ketertarikan pada jaringan komputer, infrastruktur IT, administrasi sistem, dan teknologi.',
  // Ganti null menjadi '/images/profile.jpg' setelah menaruh foto asli di public/images/profile.jpg
  photoUrl: null,
  photoAlt: 'Foto profil Royyan Abdurrahman',
  heroHeading: 'Building My Journey in Technology.',
  heroSupportText:
    'Exploring computer networking, IT infrastructure, and digital technology through continuous learning and practical projects.',
  aboutParagraphs: [
    'Saya adalah pelajar Sekolah Menengah Kejuruan (SMK) pada program keahlian Teknik Komputer dan Jaringan (TKJ) di Indonesia. Ketertarikan saya berfokus pada bagaimana perangkat komputer, protokol jaringan, dan layanan server saling terhubung membentuk infrastruktur digital yang andal.',
    'Saat ini saya terus membangun fondasi pemahaman melalui pembelajaran di kelas, praktik laboratorium, simulasi jaringan, serta eksplorasi mandiri seputar routing, switching, konfigurasi perangkat jaringan, sistem operasi, dan dasar-dasar administrasi server.',
    'Portofolio ini menjadi catatan terbuka atas perjalanan belajar saya—mendokumentasikan proyek praktik, latihan simulasi, serta pencapaian sertifikasi secara jujur dan bertahap demi mengasah keterampilan teknis yang siap diterapkan di dunia nyata.',
  ],
  aboutFocusAreas: [
    {
      label: 'Jaringan Komputer',
      detail: 'Mempelajari pengalamatan IP, subnetting, DHCP, DNS, serta alur komunikasi data.',
    },
    {
      label: 'Infrastruktur & Sistem',
      detail: 'Membiasakan diri dengan instalasi sistem operasi, perangkat keras komputer, dan dasar server.',
    },
    {
      label: 'Praktik & Dokumentasi',
      detail: 'Menguji topologi melalui simulator jaringan dan mencatat proses troubleshooting secara terstruktur.',
    },
  ],
  contacts: [
    {
      label: 'Email',
      value: 'email-anda@contoh.com',
      href: undefined,
      isPlaceholder: true,
      helperText: 'Placeholder — ganti dengan alamat email aktif Anda di src/data/profile.ts',
    },
    {
      label: 'GitHub',
      value: 'github.com/username-anda',
      href: undefined,
      isPlaceholder: true,
      helperText: 'Placeholder — ganti dengan tautan profil GitHub Anda di src/data/profile.ts',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/username-anda',
      href: undefined,
      isPlaceholder: true,
      helperText: 'Placeholder — ganti dengan tautan profil LinkedIn Anda di src/data/profile.ts',
    },
  ],
};
