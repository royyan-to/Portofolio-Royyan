import { useEffect, useState } from 'react';
import { Award, ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { CertificateItem } from '../data/types';

interface CertificateLightboxProps {
  certificate: CertificateItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasNavigation?: boolean;
}

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

  if (!certificate) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-certificate-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#171717]/85 p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden border border-[#E2E0D8] bg-[#F7F6F2]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between gap-4 border-b border-[#E2E0D8] bg-white px-5 py-3.5 md:px-6">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 text-xs text-[#626262]">
              <span className="font-medium text-[#425D78]">{certificate.category}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono-tech">{certificate.issueDate}</span>
              {certificate.isSample && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono-tech text-[#171717]">Sample Preview</span>
                </>
              )}
            </div>
            <h3
              id="lightbox-certificate-title"
              className="mt-0.5 truncate font-display text-base font-semibold text-[#171717] md:text-lg"
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
                  className="inline-flex h-10 w-10 items-center justify-center border border-[#E2E0D8] bg-[#F7F6F2] text-[#171717] transition-colors hover:border-[#171717] cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  aria-label="Sertifikat berikutnya"
                  className="inline-flex h-10 w-10 items-center justify-center border border-[#E2E0D8] bg-[#F7F6F2] text-[#171717] transition-colors hover:border-[#171717] cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </>
            )}

            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup tampilan sertifikat"
              className="inline-flex h-10 items-center gap-1.5 border border-[#171717] bg-[#171717] px-3.5 text-xs font-medium text-white transition-colors hover:bg-[#425D78] hover:border-[#425D78] cursor-pointer"
            >
              <X className="h-4 w-4" aria-hidden="true" />
              <span>Tutup</span>
            </button>
          </div>
        </div>

        {/* Certificate Media Viewport */}
        <div className="flex-1 overflow-auto bg-[#EFECE6] p-4 md:p-8">
          <div className="mx-auto flex max-w-4xl items-center justify-center border border-[#E2E0D8] bg-white p-2 md:p-4">
            {!imgError ? (
              <img
                src={certificate.image}
                alt={`${certificate.name} — ${certificate.organization}`}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="max-h-[60vh] w-auto object-contain"
              />
            ) : (
              <div className="flex min-h-[280px] w-full flex-col items-center justify-center bg-[#F7F6F2] p-8 text-center">
                <Award className="h-10 w-10 text-[#425D78] stroke-[1.5]" aria-hidden="true" />
                <p className="mt-3 font-display text-sm font-semibold text-[#171717]">
                  Berkas gambar sertifikat tidak ditemukan
                </p>
                <p className="mt-1 text-xs text-[#626262]">
                  Pastikan berkas gambar tersimpan sesuai path:{' '}
                  <span className="font-mono-tech">{certificate.image}</span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="border-t border-[#E2E0D8] bg-white px-5 py-4 md:px-6">
          <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-medium text-[#171717]">
                Penerbit: {certificate.organization}
              </p>
              {certificate.description && (
                <p className="mt-1 text-sm leading-relaxed text-[#626262]">
                  {certificate.description}
                </p>
              )}
            </div>
            <p className="font-mono-tech text-xs text-[#777777] shrink-0">
              Tekan ESC untuk menutup
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
