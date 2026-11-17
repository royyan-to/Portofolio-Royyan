import type { SkillGroup } from './types';

/**
 * Daftar keterampilan teknis terpusat.
 * Seluruh entri saat ini berada pada level 'Beginner / Basic' secara jujur
 * tanpa persentase atau progress bar buatan.
 */
export const skillGroups: SkillGroup[] = [
  {
    category: 'Web Development',
    subtitle: 'Dasar pembuatan struktur halaman, tata letak, dan interaktivitas web.',
    skills: [
      {
        name: 'HTML',
        status: 'Beginner / Basic',
        focusNote: 'Struktur dokumen web semantik dan elemen dasar halaman.',
      },
      {
        name: 'CSS',
        status: 'Beginner / Basic',
        focusNote: 'Pengaturan tampilan, warna, tipografi, dan tata letak responsif dasar.',
      },
      {
        name: 'JavaScript',
        status: 'Beginner / Basic',
        focusNote: 'Dasar logika pemrograman dan interaksi sederhana pada halaman web.',
      },
    ],
  },
  {
    category: 'Networking',
    subtitle: 'Simulasi jaringan komputer dan pengenalan konfigurasi perangkat jaringan.',
    skills: [
      {
        name: 'MikroTik',
        status: 'Beginner / Basic',
        focusNote: 'Pengenalan konfigurasi dasar router MikroTik dan pengaturan jaringan lokal.',
      },
      {
        name: 'Cisco Packet Tracer',
        status: 'Beginner / Basic',
        focusNote: 'Pembuatan simulasi topologi jaringan, pengalamatan IP, dan pengujian koneksi.',
      },
      {
        name: 'GNS3',
        status: 'Beginner / Basic',
        focusNote: 'Eksplorasi simulasi topologi jaringan virtual untuk latihan laboratorium.',
      },
    ],
  },
  {
    category: 'Version Control',
    subtitle: 'Pengelolaan riwayat perubahan proyek dan penyimpanan kode di repositori.',
    skills: [
      {
        name: 'Git',
        status: 'Beginner / Basic',
        focusNote: 'Perintah dasar pencatatan perubahan dan pengelolaan versi proyek.',
      },
      {
        name: 'GitHub',
        status: 'Beginner / Basic',
        focusNote: 'Pengelolaan repositori daring untuk dokumentasi dan penyimpanan proyek.',
      },
    ],
  },
  {
    category: 'AI-Assisted Development',
    subtitle: 'Pemanfaatan alat AI untuk merancang, mengarahkan, dan mengevaluasi proyek.',
    skills: [
      {
        name: 'Google AI Studio',
        status: 'Beginner / Basic',
        focusNote: 'Penggunaan Google AI Studio untuk eksplorasi ide dan pengembangan aplikasi berbantuan AI.',
      },
      {
        name: 'AI Prompting',
        status: 'Beginner / Basic',
        focusNote: 'Penyusunan instruksi terstruktur, evaluasi hasil keluaran AI, dan iterasi perbaikan.',
      },
    ],
  },
];
