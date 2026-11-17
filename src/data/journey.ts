import type { JourneyItem } from './types';

/**
 * Riwayat pendidikan dan perjalanan belajar Royyan Abdurrahman.
 * Hanya berisi data riwayat pendidikan aktual tanpa tanggal atau klaim buatan.
 */
export const journeyItems: JourneyItem[] = [
  {
    id: 'edu-smk-madinatulquran',
    period: '2025–Present',
    title: 'Teknik Komputer dan Jaringan (TKJ) — Grade XI',
    institutionOrContext: 'SMK Madinatulquran',
    type: 'Education',
    description:
      'Siswa kelas XI program keahlian Teknik Komputer dan Jaringan (TKJ), mendalami jaringan komputer, keamanan siber, administrasi sistem dasar, dan proyek pengembangan berbantuan AI.',
  },
  {
    id: 'edu-smpit-al-izzah',
    period: 'Graduated 2025',
    title: 'Sekolah Menengah Pertama',
    institutionOrContext: 'SMPIT Al-Izzah',
    type: 'Education',
    description: 'Menyelesaikan pendidikan tingkat menengah pertama pada tahun 2025.',
  },
  {
    id: 'edu-sdit-as-sabiquun',
    period: 'Primary Education',
    title: 'Sekolah Dasar',
    institutionOrContext: 'SDIT As Sabiquun',
    type: 'Education',
    description: 'Menyelesaikan pendidikan tingkat sekolah dasar di SDIT As Sabiquun.',
  },
];
