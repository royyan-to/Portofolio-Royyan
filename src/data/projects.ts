import type { ProjectCategory, ProjectItem } from './types';

export const PROJECT_CATEGORIES: readonly ProjectCategory[] = [
  'AI-Assisted Development',
  'Network Configuration',
  'MikroTik',
  'GNS3',
  'Cisco Packet Tracer',
  'Server Administration',
  'Computer Hardware',
  'Troubleshooting',
] as const;

/**
 * Daftar proyek nyata milik Royyan Abdurrahman.
 * Simpan gambar/screenshot proyek di public/projects/ lalu tambahkan properti `image: '/projects/...'`
 * jika tangkapan layar aplikasi sudah tersedia.
 */
export const projects: ProjectItem[] = [
  {
    slug: 'usahapilot-ai',
    title: 'UsahaPilot AI',
    shortDescription:
      'An Android application designed to help small and medium-sized businesses (UMKM) manage their business operations through digital tools and AI assistance.',
    category: 'AI-Assisted Development',
    technologies: ['Android', 'Google AI Studio', 'AI-Assisted Development', 'Git', 'GitHub'],
    githubUrl: 'https://github.com/royyan-to/FOR-UMKM',
    objective:
      'Membantu pelaku usaha mikro, kecil, dan menengah (UMKM) mengelola operasional usaha secara lebih teratur menggunakan alat bantu digital dan asistensi AI pada perangkat Android.',
    contributionHeading: 'Kontribusi & Peran (AI-Assisted Development)',
    implementationOverview: [
      'Developed the initial product idea and concept.',
      'Planned application features and requirements.',
      'Directed AI-assisted development through prompts.',
      'Tested the application and identified issues.',
      'Evaluated results and requested improvements using AI.',
    ],
    learningOutcomes: [
      'Memahami cara merumuskan ide produk dan memecahnya menjadi kebutuhan fitur yang jelas.',
      'Melatih kemampuan mengarahkan proses pengembangan aplikasi berbantuan AI secara iteratif melalui prompting.',
      'Membiasakan proses pengujian fungsional, identifikasi bug/kendala, serta evaluasi hasil perbaikan.',
    ],
    status: 'In Development',
    dateLabel: 'In Development',
  },
];
