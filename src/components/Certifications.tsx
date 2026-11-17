import { useMemo, useState } from 'react';
import { Award, Eye } from 'lucide-react';
import {
  CERTIFICATE_CATEGORIES,
  certificates,
  sampleCertificatePreview,
} from '../data/certificates';
import type { CertificateCategory, CertificateItem } from '../data/types';
import { CertificateCard } from './CertificateCard';
import { CertificateLightbox } from './CertificateLightbox';

type FilterValue = 'All' | CertificateCategory;

export function Certifications() {
  const [activeCategory, setActiveCategory] = useState<FilterValue>('All');
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  const filterTabs: FilterValue[] = ['All', ...CERTIFICATE_CATEGORIES];

  const filteredCertificates = useMemo(() => {
    if (activeCategory === 'All') {
      return certificates;
    }
    return certificates.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const currentIndex = selectedCertificate
    ? filteredCertificates.findIndex((item) => item.id === selectedCertificate.id)
    : -1;

  const handlePrev = () => {
    if (filteredCertificates.length <= 1 || currentIndex === -1) return;
    const prevIdx =
      (currentIndex - 1 + filteredCertificates.length) % filteredCertificates.length;
    setSelectedCertificate(filteredCertificates[prevIdx]);
  };

  const handleNext = () => {
    if (filteredCertificates.length <= 1 || currentIndex === -1) return;
    const nextIdx = (currentIndex + 1) % filteredCertificates.length;
    setSelectedCertificate(filteredCertificates[nextIdx]);
  };

  return (
    <section id="certifications" className="border-b border-[#E2E0D8]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#E2E0D8] pb-8 md:flex-row md:items-end">
          <div>
            <span className="font-mono-tech text-xs text-[#425D78]">02</span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#171717] md:text-4xl">
              Certifications &amp; Achievements
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#626262] md:text-base">
              Dokumentasi sertifikat pelatihan, uji kompetensi, serta pencapaian belajar di bidang jaringan komputer, perangkat keras, dan administrasi server.
            </p>
          </div>

          <div className="font-mono-tech text-xs text-[#626262] shrink-0">
            Total tercatat: {certificates.length}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter kategori sertifikat"
          className="mt-8 flex flex-wrap items-center gap-2"
        >
          {filterTabs.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`min-h-[40px] border px-4 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'border-[#171717] bg-[#171717] text-[#F7F6F2]'
                    : 'border-[#E2E0D8] bg-white text-[#626262] hover:border-[#171717] hover:text-[#171717]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Certificate Grid or Honest Empty State */}
        {filteredCertificates.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCertificates.map((certificate) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                onOpenLightbox={setSelectedCertificate}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 border border-[#E2E0D8] bg-[#F0EFE9] p-8 md:p-12">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex h-11 w-11 items-center justify-center border border-[#C8C5BA] bg-[#F7F6F2] text-[#425D78]">
                  <Award className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-[#171717]">
                  {activeCategory === 'All'
                    ? 'Belum ada sertifikat yang ditambahkan'
                    : `Belum ada sertifikat pada kategori ${activeCategory}`}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-[#626262]">
                  {activeCategory === 'All'
                    ? 'Bagian ini sengaja dibiarkan kosong hingga sertifikat resmi diperoleh. Untuk menambahkan sertifikat asli, simpan gambar di folder public/certificates/ lalu lengkapi datanya di src/data/certificates.ts.'
                    : `Saat ini belum ada sertifikat yang tercatat untuk kategori ${activeCategory}. Pilih kategori lain atau tambahkan entri baru pada src/data/certificates.ts.`}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                {activeCategory !== 'All' && (
                  <button
                    type="button"
                    onClick={() => setActiveCategory('All')}
                    className="min-h-[44px] border border-[#C8C5BA] bg-white px-5 py-2.5 text-xs font-medium text-[#171717] transition-colors hover:border-[#171717] whitespace-nowrap cursor-pointer"
                  >
                    Tampilkan Semua Kategori
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedCertificate(sampleCertificatePreview)}
                  className="inline-flex min-h-[44px] items-center gap-2 border border-[#425D78] bg-[#425D78] px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#334A60] whitespace-nowrap cursor-pointer"
                >
                  <Eye className="h-4 w-4" aria-hidden="true" />
                  <span>Pratinjau Contoh Lightbox</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Certificate Lightbox Viewer */}
      <CertificateLightbox
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        hasNavigation={
          Boolean(selectedCertificate && !selectedCertificate.isSample && filteredCertificates.length > 1)
        }
      />
    </section>
  );
}
