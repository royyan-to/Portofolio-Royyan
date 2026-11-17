import { type ChangeEvent, useMemo, useState } from 'react';
import { Award, Upload } from 'lucide-react';
import { CERTIFICATE_CATEGORIES, certificates } from '../data/certificates';
import type { CertificateCategory, CertificateItem } from '../data/types';
import { CertificateCard } from './CertificateCard';
import { CertificateLightbox } from './CertificateLightbox';

type FilterValue = 'All' | CertificateCategory;

export function Certifications() {
  const [activeCategory, setActiveCategory] = useState<FilterValue>('All');
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [uploadedPreviewCerts, setUploadedPreviewCerts] = useState<CertificateItem[]>([]);

  const allCertificates = useMemo(
    () => [...certificates, ...uploadedPreviewCerts],
    [uploadedPreviewCerts]
  );

  const filterTabs: FilterValue[] = ['All', ...CERTIFICATE_CATEGORIES];

  const filteredCertificates = useMemo(() => {
    if (activeCategory === 'All') {
      return allCertificates;
    }
    return allCertificates.filter((item) => item.category === activeCategory);
  }, [activeCategory, allCertificates]);

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

  const handleFileUploadPreview = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
    const cleanName = file.name.replace(/\.[^/.]+$/, '').replace(/[_-]+/g, ' ');

    const newItem: CertificateItem = {
      id: `local-upload-${Date.now()}`,
      name: cleanName || 'Sertifikat Terunggah',
      organization: 'Pratinjau Berkas Lokal',
      issueDate: 'Pratinjau Sesi Ini',
      category: activeCategory === 'All' ? 'IT & Technology' : activeCategory,
      image: isPdf ? undefined : objectUrl,
      pdfUrl: isPdf ? objectUrl : undefined,
      description:
        'Pratinjau lokal sementara di browser. Untuk menyimpan permanen, letakkan berkas ke public/certificates/ dan daftarkan di src/data/certificates.ts.',
    };

    setUploadedPreviewCerts((prev) => [...prev, newItem]);
    setSelectedCertificate(newItem);
    event.target.value = '';
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
              Dokumentasi sertifikat resmi dari Cisco Networking Academy dan Class2Class.org yang telah diselesaikan.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <span className="font-mono-tech text-xs text-[#626262]">
              Total sertifikat: {allCertificates.length}
            </span>

            <label className="inline-flex min-h-[40px] items-center gap-2 border border-[#C8C5BA] bg-white px-4 py-2 text-xs font-medium text-[#171717] transition-colors hover:border-[#171717] whitespace-nowrap cursor-pointer">
              <Upload className="h-3.5 w-3.5 text-[#425D78]" aria-hidden="true" />
              <span>Unggah Pratinjau (Gambar / PDF)</span>
              <input
                type="file"
                accept="image/*,.pdf,application/pdf"
                onChange={handleFileUploadPreview}
                className="sr-only"
              />
            </label>
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

        {/* Certificate Grid or Clean Empty State */}
        {filteredCertificates.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
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
                  Belum ada sertifikat pada kategori {activeCategory}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-[#626262]">
                  Saat ini belum ada sertifikat yang tercatat untuk kategori{' '}
                  <span className="font-medium text-[#171717]">{activeCategory}</span>. Anda dapat memilih kategori lain, mengunggah pratinjau lokal sementara, atau menambahkan berkas gambar/PDF asli ke{' '}
                  <span className="font-mono-tech text-[#171717]">public/certificates/</span> dan mendaftarkannya di{' '}
                  <span className="font-mono-tech text-[#171717]">src/data/certificates.ts</span>.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveCategory('All')}
                className="min-h-[44px] border border-[#C8C5BA] bg-white px-5 py-2.5 text-xs font-medium text-[#171717] transition-colors hover:border-[#171717] whitespace-nowrap shrink-0 cursor-pointer"
              >
                Tampilkan Semua Sertifikat
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
