import type { CertificateCategory, CertificateItem } from './types';

export const CERTIFICATE_CATEGORIES: readonly CertificateCategory[] = [
  'Networking',
  'Cybersecurity',
  'IT & Technology',
  'Computer & Hardware',
  'Server Administration',
  'Other Achievements',
] as const;

/**
 * Daftar sertifikat resmi Royyan Abdurrahman.
 * Setiap entri terhubung langsung ke aset gambar PNG berkualitas tinggi hasil konversi PDF asli
 * serta file PDF aslinya di dalam folder public/certificates/ agar ikut terbawa ke dist/ saat deploy.
 */
export const certificates: CertificateItem[] = [
  {
    id: 'cisco-networking-basics',
    name: 'Networking Basics',
    organization: 'Cisco Networking Academy',
    issueDate: '23 Sep 2025',
    category: 'Networking',
    image: '/certificates/networking-basics.png',
    pdfUrl: '/certificates/networking-basics.pdf',
    description:
      'Diselenggarakan oleh SMK Madinatul Quran melalui program Cisco Networking Academy.',
  },
  {
    id: 'cisco-intro-cybersecurity',
    name: 'Introduction to Cybersecurity',
    organization: 'Cisco Networking Academy',
    issueDate: '04 Nov 2025',
    category: 'Cybersecurity',
    image: '/certificates/introduction-to-cybersecurity.png',
    pdfUrl: '/certificates/introduction-to-cybersecurity.pdf',
    description:
      'Diselesaikan melalui program Cisco Networking Academy mengenai dasar-dasar keamanan siber.',
  },
  {
    id: 'cisco-intro-modern-ai',
    name: 'Introduction to Modern AI',
    organization: 'Cisco Networking Academy',
    issueDate: '04 Nov 2025',
    category: 'IT & Technology',
    image: '/certificates/introduction-to-modern-ai.png',
    pdfUrl: '/certificates/introduction-to-modern-ai.pdf',
    description:
      'Diselesaikan melalui program Cisco Networking Academy mengenai pengenalan kecerdasan buatan modern.',
  },
  {
    id: 'class2class-explore-cultures',
    name: 'Explore Cultures',
    organization: 'Class2Class.org',
    issueDate: 'January 26, 2026',
    category: 'Other Achievements',
    image: '/certificates/explore-cultures.png',
    pdfUrl: '/certificates/explore-cultures.pdf',
    description:
      'Global Student Certificate untuk proyek kolaborasi "Are neighbours necessary?" bersama SMK Madinatulquran (Indonesia) dan Ainjloula Secondary School (Tunisia).',
  },
];
