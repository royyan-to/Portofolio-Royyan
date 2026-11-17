import type { JourneyItem } from './types';

/**
 * Linimasa perkembangan belajar (Learning Journey).
 * Sengaja dimulai dalam kondisi kosong agar tidak ada tanggal, institusi,
 * atau pencapaian yang dibuat-buat.
 *
 * Contoh format entri saat ingin menambahkan catatan perjalanan belajar:
 * {
 *   id: 'journey-01',
 *   period: '2025 — Sekarang',
 *   title: 'Siswa Teknik Komputer dan Jaringan (TKJ)',
 *   institutionOrContext: 'Nama Sekolah (Opsional)',
 *   type: 'Education',
 *   description: 'Mempelajari dasar jaringan komputer, perangkat keras, dan administrasi sistem.',
 * }
 */
export const journeyItems: JourneyItem[] = [];
