import { useMemo, useState } from 'react';
import { Award } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { certificates } from '../data/certificates';
import type { CertificateCategory, CertificateItem } from '../data/types';
import { CertificateCard } from './CertificateCard';
import { CertificateLightbox } from './CertificateLightbox';
import { Reveal } from './Reveal';

type FilterValue = 'All' | CertificateCategory;

const SWISS_EASE = [0.16, 1, 0.3, 1] as const;

export function Certifications() {
  const [activeCategory, setActiveCategory] = useState<FilterValue>('All');
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const prefersReduced = useReducedMotion();

  const filterTabs = useMemo<FilterValue[]>(() => {
    const uniqueCategories = Array.from(new Set(certificates.map((c) => c.category)));
    return ['All', ...uniqueCategories];
  }, []);

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
    <section
      id="certificates"
      className="border-b border-[#E2E0D8] transition-colors duration-300 dark:border-[#282C34]"
    >
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16 lg:px-10">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col justify-between gap-4 border-b border-[#E2E0D8] pb-6 dark:border-[#282C34] md:flex-row md:items-end">
            <div>
              <span className="font-mono-tech text-xs text-[#425D78] dark:text-[#7E9BB8]">03</span>
              <h2 className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-[#171717] dark:text-[#F1F0EA] md:text-3xl">
                Certificates &amp; Achievements
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#626262] dark:text-[#B4B2AA]">
                Sertifikat resmi dari Cisco Networking Academy dan Class2Class.org. Klik gambar sertifikat untuk memperbesar tampilan.
              </p>
            </div>

            <span className="font-mono-tech text-xs text-[#626262] dark:text-[#B4B2AA] shrink-0">
              Total: {certificates.length} sertifikat
            </span>
          </div>
        </Reveal>

        {/* Category Filter Tabs */}
        <Reveal delay={0.05}>
          <div
            role="tablist"
            aria-label="Filter kategori sertifikat"
            className="mt-6 flex flex-wrap items-center gap-2"
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
                  className={`min-h-[38px] border px-3.5 py-1.5 text-xs font-medium transition-all duration-150 active:scale-[0.97] whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'border-[#171717] bg-[#171717] text-[#F7F6F2] dark:border-[#F1F0EA] dark:bg-[#F1F0EA] dark:text-[#0F1114]'
                      : 'border-[#E2E0D8] bg-white text-[#626262] hover:border-[#171717] hover:text-[#171717] dark:border-[#282C34] dark:bg-[#1A1D23] dark:text-[#B4B2AA] dark:hover:border-[#7E9BB8] dark:hover:text-[#F1F0EA]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Staggered Certificate Grid */}
        {filteredCertificates.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredCertificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={prefersReduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.42,
                  delay: prefersReduced ? 0 : index * 0.07,
                  ease: SWISS_EASE,
                }}
                className="flex"
              >
                <CertificateCard
                  certificate={certificate}
                  onOpenLightbox={setSelectedCertificate}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mt-8 border border-[#E2E0D8] bg-[#F0EFE9] p-8 dark:border-[#282C34] dark:bg-[#15181D]">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-[#425D78] dark:text-[#7E9BB8]" aria-hidden="true" />
                <p className="text-sm text-[#626262] dark:text-[#B4B2AA]">
                  Belum ada sertifikat pada kategori {activeCategory}.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveCategory('All')}
                className="min-h-[40px] border border-[#C8C5BA] bg-white px-4 py-2 text-xs font-medium text-[#171717] transition-colors hover:border-[#171717] dark:border-[#3B414D] dark:bg-[#1A1D23] dark:text-[#F1F0EA] cursor-pointer"
              >
                Tampilkan Semua
              </button>
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
        hasNavigation={filteredCertificates.length > 1}
      />
    </section>
  );
}
