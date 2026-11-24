import type { ProfileData } from './types';

/**
 * Data profil pribadi terpusat untuk Royyan Abdurrahman.
 * Ubah informasi pada berkas ini untuk memperbarui profil, narasi About Me,
 * foto profil, berkas CV, maupun tautan kontak.
 */
export const profile: ProfileData = {
  name: 'Royyan Abdurrahman',
  title: 'IT Enthusiast & TKJ Student',
  location: 'Indonesia',
  school: 'SMK Madinatulquran',
  grade: 'Grade XI — TKJ',
  careerInterests: ['Cybersecurity', 'System Administration'],
  shortIntro:
    'Siswa kelas XI jurusan Teknik Komputer dan Jaringan (TKJ) di SMK Madinatulquran yang tertarik pada teknologi informasi, jaringan komputer, dan keamanan siber.',
  // Ganti null menjadi '/images/profile.jpg' setelah menaruh foto asli di public/images/profile.jpg
  photoUrl: null,
  photoAlt: 'Foto profil Royyan Abdurrahman',
  // Ganti null menjadi '/cv-royyan-abdurrahman.pdf' jika file CV sudah diletakkan di folder public/
  cvUrl: null,
  heroHeading: 'Building My Journey in Technology.',
  heroSupportText:
    'Exploring computer networking, cybersecurity, and system administration through continuous learning and AI-assisted projects.',
  aboutParagraphs: [
    'Saya merupakan siswa kelas XI jurusan Teknik Komputer dan Jaringan (TKJ) di SMK Madinatulquran. Saya memiliki ketertarikan pada teknologi informasi, jaringan komputer, dan keamanan siber.',
    'Saya senang mempelajari hal baru, mengeksplorasi teknologi, serta mengembangkan proyek dengan bantuan AI. Ke depannya, saya ingin berkarier di bidang Cybersecurity dan System Administration.',
  ],
  aboutFocusAreas: [
    {
      label: 'Jaringan & Sistem',
      detail: 'Mempelajari dasar jaringan komputer menggunakan MikroTik, Cisco Packet Tracer, dan GNS3.',
    },
    {
      label: 'Cybersecurity',
      detail: 'Membangun fondasi keamanan siber menuju karier di bidang Cybersecurity & System Administration.',
    },
    {
      label: 'Pengembangan Berbantuan AI',
      detail: 'Merancang konsep, menyusun kebutuhan fitur, mengarahkan AI melalui prompting, dan menguji hasil aplikasi.',
    },
  ],
  contacts: [
    {
      label: 'Email',
      value: 'abdurrahmanroyyan8@gmail.com',
      href: 'mailto:abdurrahmanroyyan8@gmail.com',
      isPlaceholder: false,
      helperText: 'Klik alamat email untuk mengirim pesan langsung melalui aplikasi email Anda.',
    },
    {
      label: 'GitHub',
      value: 'https://github.com/royyan-to',
      href: 'https://github.com/royyan-to',
      isPlaceholder: false,
      helperText: 'Profil GitHub dan repositori proyek yang sedang dikembangkan.',
    },
    {
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/royyan-abdurrahman-571a12384/',
      href: 'https://www.linkedin.com/in/royyan-abdurrahman-571a12384/',
      isPlaceholder: false,
      helperText: 'Profil LinkedIn resmi untuk terhubung secara profesional.',
    },
  ],
};
