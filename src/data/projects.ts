import type { ProjectCategory, ProjectItem } from './types';

export const PROJECT_CATEGORIES: readonly ProjectCategory[] = [
  'Network Configuration',
  'MikroTik',
  'GNS3',
  'Cisco Packet Tracer',
  'Server Administration',
  'Computer Hardware',
  'Troubleshooting',
] as const;

/**
 * Daftar proyek & praktik nyata milik Royyan Abdurrahman.
 * Mulai dengan array kosong agar tidak ada proyek fiktif.
 * Tambahkan proyek nyata Anda ke array `projects` di bawah ini
 * dan simpan gambar/screenshot proyek di public/projects/.
 */
export const projects: ProjectItem[] = [];

/**
 * Contoh template / placeholder proyek untuk memperlihatkan struktur dokumentasi
 * proyek dan halaman detail (/projects/[slug]).
 * Ditandai secara eksplisit sebagai Sample Placeholder dan tidak diklaim sebagai karya nyata.
 */
export const sampleProjectPlaceholders: ProjectItem[] = [
  {
    slug: 'sample-packet-tracer-vlan-routing',
    title: '[Sample Placeholder] Simulasi Segmentasi VLAN & Inter-VLAN Routing',
    shortDescription:
      'Contoh struktur dokumentasi tugas praktik simulasi pemisahan segmen jaringan menggunakan VLAN pada Cisco Packet Tracer.',
    category: 'Cisco Packet Tracer',
    technologies: ['Cisco Packet Tracer', 'VLAN', 'Trunking 802.1Q', 'IP Addressing'],
    objective:
      'Contoh tujuan proyek: Memahami cara memisahkan broadcast domain pada satu switch ke beberapa VLAN serta menghubungkannya melalui router.',
    implementationOverview: [
      'Menyusun topologi dasar dengan satu router, satu switch manageable, dan beberapa host uji di Cisco Packet Tracer.',
      'Mengonfigurasi VLAN ID dan menetapkan port access untuk masing-masing segmen serta mode trunk menuju router.',
      'Mengatur sub-interface pada router (Router-on-a-Stick) dan menguji konektivitas antar-VLAN menggunakan perintah ping.',
    ],
    learningOutcomes: [
      'Memahami konsep segmentasi jaringan logis dengan VLAN dibandingkan pemisahan fisik.',
      'Mengenal fungsi port access vs trunk serta enkapsulasi 802.1Q.',
      'Berlatih memeriksa tabel VLAN dan verifikasi konektivitas dasar.',
    ],
    status: 'Experimental',
    dateLabel: 'Sample Template',
    isSamplePlaceholder: true,
  },
  {
    slug: 'sample-mikrotik-basic-gateway-dhcp',
    title: '[Sample Placeholder] Konfigurasi Dasar Gateway, DHCP Server & NAT',
    shortDescription:
      'Contoh struktur dokumentasi eksperimen laboratorium jaringan lokal menggunakan router MikroTik.',
    category: 'MikroTik',
    technologies: ['MikroTik RouterOS', 'DHCP Server', 'NAT', 'DNS'],
    objective:
      'Contoh tujuan proyek: Mendokumentasikan langkah konfigurasi router dasar agar klien lokal memperoleh IP otomatis dan akses jaringan.',
    implementationOverview: [
      'Menentukan alamat IP statis/DHCP client pada interface WAN serta alamat gateway untuk interface LAN.',
      'Menyiapkan DHCP Server dan IP pool untuk mendistribusikan alamat IP kepada perangkat klien secara otomatis.',
      'Menerapkan aturan firewall NAT masquerade dan menguji resolusi DNS dari sisi klien.',
    ],
    learningOutcomes: [
      'Memahami alur distribusi alamat IP melalui protokol DHCP.',
      'Mengenal peran Network Address Translation (NAT) pada jaringan lokal.',
      'Terbiasa melakukan verifikasi dasar menggunakan terminal dan ping test.',
    ],
    status: 'In Progress',
    dateLabel: 'Sample Template',
    isSamplePlaceholder: true,
  },
];
