import { useEffect, useState } from 'react';
import { Award, ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { CertificateItem } from '../data/types';

interface CertificateLightboxProps {
  certificate: CertificateItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasNavigation?: boolean;
}

const SWISS_EASE = [0.16, 1, 0.3, 1] as const;

export function CertificateLightbox({
  certificate,
  onClose,
  onPrev,
  onNext,
  hasNavigation = false,
}: CertificateLightboxProps) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [certificate?.id]);

  useEffect(() => {
    if (!certificate) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft' && hasNavigation && onPrev) {
        onPrev();
      } else if (event.key === 'ArrowRight' && hasNavigation && onNext) {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, hasNavigation, onClose, onNext, onPrev]);

  const hasImage = Boolean(certificate?.image) && !imgError;
  const hasPdf = Boolean(certificate?.pdfUrl);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          key="certificate-lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-certificate-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#171717]/85 p-4 backdrop-blur-[2px] md:p-8"
          onClick={onClose}
        >
          <motion.div
            key="certificate-lightbox-panel"
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 6 }}
            transition={{ duration: 0.24, ease: SWISS_EASE }}
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden border border-[#E2E0D8] bg-[#F7F6F2] dark:border-[#282C34] dark:bg-[#0F1114]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between gap-4 border-b border-[#E2E0D8] bg-white px-5 py-3.5 dark:border-[#282C34] dark:bg-[#1A1D23] md:px-6">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-2 text-xs text-[#626262] dark:text-[#B4B2AA]">
                  <span className="font-medium text-[#425D78] dark:text-[#7E9BB8]">
                    {certificate.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono-tech">{certificate.issueDate}</span>
                </div>
                <h3
                  id="lightbox-certificate-title"
                  className="mt-0.5 truncate font-display text-base font-semibold text-[#171717] dark:text-[#F1F0EA] md:text-lg"
                >
                  {certificate.name}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {hasNavigation && onPrev && onNext && (
                  <>
                    <button
                      type="button"
                      onClick={onPrev}
                      aria-label="Sertifikat sebelumnya"
                      className="inline-flex h-10 w-10 items-center justify-center border border-[#E2E0D8] bg-[#F7F6F2] text-[#171717] transition-all duration-150 hover:border-[#171717] active:scale-95 dark:border-[#282C34] dark:bg-[#15181D] dark:text-[#F1F0EA] dark:hover:border-[#7E9BB8] cursor-pointer"
                    >
                      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={onNext}
                      aria-label="Sertifikat berikutnya"
                      className="inline-flex h-10 w-10 items-center justify-center border border-[#E2E0D8] bg-[#F7F6F2] text-[#171717] transition-all duration-150 hover:border-[#171717] active:scale-95 dark:border-[#282C34] dark:bg-[#15181D] dark:text-[#F1F0EA] dark:hover:border-[#7E9BB8] cursor-pointer"
                    >
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </>
                )}

                {hasPdf && (
                  <a
                    href={certificate.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex h-10 items-center gap-1.5 border border-[#E2E0D8] bg-[#F7F6F2] px-3.5 text-xs font-medium text-[#171717] transition-colors hover:border-[#171717] dark:border-[#282C34] dark:bg-[#15181D] dark:text-[#F1F0EA] dark:hover:border-[#7E9BB8]"
                  >
                    <span>Open PDF</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close certificate lightbox"
                  className="inline-flex h-10 items-center gap-1.5 border border-[#171717] bg-[#171717] px-3.5 text-xs font-medium text-white transition-all duration-150 hover:border-[#425D78] hover:bg-[#425D78] active:scale-[0.97] dark:border-[#F1F0EA] dark:bg-[#F1F0EA] dark:text-[#0F1114] dark:hover:border-[#7E9BB8] dark:hover:bg-[#7E9BB8] cursor-pointer"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                  <span>Close</span>
                </button>
              </div>
            </div>

            {/* Certificate Image Viewport (clicking outside the image closes modal too) */}
            <div
              className="flex flex-1 items-center justify-center overflow-auto bg-[#EFECE6] p-4 dark:bg-[#15181D] md:p-6"
              onClick={onClose}
            >
              <div
                className="mx-auto flex max-w-4xl items-center justify-center border border-[#E2E0D8] bg-white p-2 dark:border-[#282C34] dark:bg-[#1A1D23] md:p-3"
                onClick={(e) => e.stopPropagation()}
              >
                {hasImage ? (
                  <motion.img
                    key={certificate.id}
                    src={certificate.image}
                    alt={`${certificate.name} — ${certificate.organization}`}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="max-h-[65vh] w-auto object-contain"
                  />
                ) : hasPdf ? (
                  <iframe
                    title={`Dokumen sertifikat ${certificate.name}`}
                    src={`${certificate.pdfUrl}#view=FitH`}
                    className="h-[65vh] w-full min-w-[300px] border-0 bg-white md:min-w-[680px]"
                  />
                ) : (
                  <div className="flex min-h-[260px] w-full flex-col items-center justify-center bg-[#F7F6F2] p-8 text-center dark:bg-[#15181D]">
                    <Award
                      className="h-10 w-10 text-[#425D78] stroke-[1.5] dark:text-[#7E9BB8]"
                      aria-hidden="true"
                    />
                    <p className="mt-3 font-display text-sm font-semibold text-[#171717] dark:text-[#F1F0EA]">
                      Belum ada berkas gambar atau PDF sertifikat yang dilampirkan
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Metadata Bar */}
            <div className="border-t border-[#E2E0D8] bg-white px-5 py-3.5 dark:border-[#282C34] dark:bg-[#1A1D23] md:px-6">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <p className="text-sm font-medium text-[#171717] dark:text-[#F1F0EA]">
                    Penerbit: {certificate.organization}
                  </p>
                  {certificate.description && (
                    <p className="mt-0.5 text-xs leading-relaxed text-[#626262] dark:text-[#B4B2AA]">
                      {certificate.description}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  {hasPdf && (
                    <a
                      href={certificate.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#425D78] hover:text-[#171717] dark:text-[#7E9BB8] dark:hover:text-[#F1F0EA] sm:hidden"
                    >
                      <span>Open PDF</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                  <p className="font-mono-tech text-xs text-[#777777] dark:text-[#8C8B84]">
                    ESC atau klik di luar gambar untuk menutup
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
