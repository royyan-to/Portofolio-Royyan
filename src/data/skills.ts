import type { SkillGroup } from './types';

/**
 * Daftar keterampilan teknis yang sedang dipelajari dan dipraktikkan.
 * Label status menggunakan: 'Learning' | 'Practiced' | 'Familiar'
 * dan dapat diubah kapan saja sesuai perkembangan belajar.
 */
export const skillGroups: SkillGroup[] = [
  {
    category: 'Networking',
    subtitle: 'Dasar pengalamatan, perutean, dan layanan inti jaringan komputer.',
    skills: [
      {
        name: 'IP Addressing',
        status: 'Practiced',
        focusNote: 'Pemahaman kelas alamat IPv4, network/host ID, dan konfigurasi IP statis.',
      },
      {
        name: 'Subnetting',
        status: 'Practiced',
        focusNote: 'Perhitungan subnet mask, CIDR, dan pembagian blok alamat jaringan.',
      },
      {
        name: 'Routing and Switching',
        status: 'Learning',
        focusNote: 'Konsep dasar switching Layer 2, static routing, dan alur paket data.',
      },
      {
        name: 'DHCP',
        status: 'Practiced',
        focusNote: 'Pemahaman proses DORA dan pengaturan distribusi IP otomatis.',
      },
      {
        name: 'DNS',
        status: 'Learning',
        focusNote: 'Cara kerja resolusi nama domain ke alamat IP pada jaringan lokal.',
      },
    ],
  },
  {
    category: 'Network Tools',
    subtitle: 'Perangkat lunak simulasi dan konfigurasi perangkat jaringan.',
    skills: [
      {
        name: 'MikroTik',
        status: 'Learning',
        focusNote: 'Pengenalan Winbox, konfigurasi dasar interface, DHCP, dan NAT.',
      },
      {
        name: 'GNS3',
        status: 'Learning',
        focusNote: 'Eksplorasi pembuatan topologi jaringan virtual untuk latihan laboratorium.',
      },
      {
        name: 'Cisco Packet Tracer',
        status: 'Practiced',
        focusNote: 'Simulasi topologi switch, router, pengalamatan IP, dan pengujian konektivitas.',
      },
    ],
  },
  {
    category: 'Computer Systems',
    subtitle: 'Perangkat keras komputer, sistem operasi, dan pemecahan masalah.',
    skills: [
      {
        name: 'Computer Hardware',
        status: 'Familiar',
        focusNote: 'Pengenalan komponen PC, perakitan dasar, dan pemeriksaan koneksi perangkat.',
      },
      {
        name: 'Operating System Installation',
        status: 'Practiced',
        focusNote: 'Instalasi sistem operasi desktop dan pengaturan partisi penyimpanan dasar.',
      },
      {
        name: 'Basic Troubleshooting',
        status: 'Practiced',
        focusNote: 'Identifikasi masalah koneksi jaringan dasar dan pemeriksaan kondisi sistem.',
      },
    ],
  },
  {
    category: 'Server Administration',
    subtitle: 'Fondasi sistem operasi server dan pengelolaan layanan berbasis CLI.',
    skills: [
      {
        name: 'Linux Fundamentals',
        status: 'Learning',
        focusNote: 'Perintah dasar terminal, manajemen file, izin akses, dan jaringan di Linux.',
      },
      {
        name: 'Windows Server Fundamentals',
        status: 'Learning',
        focusNote: 'Pengenalan antarmuka server, manajemen pengguna dasar, dan peran layanan.',
      },
    ],
  },
];
