import { useState } from 'react';
import { Award, ExternalLink, FileText, Maximize2 } from 'lucide-react';
import type { CertificateItem } from '../data/types';

interface CertificateCardProps {
  certificate: CertificateItem;
  onOpenLightbox: (certificate: CertificateItem) => void;
}

export function CertificateCard({ certificate, onOpenLightbox }: CertificateCardProps) {
  const [imgError, setImgError] = useState(false);

  const hasImage = Boolean(certificate.image) && !imgError;
  const hasPdf = Boolean(certificate.pdfUrl);

  return (
    <article className="group flex flex-col justify-between border border-[#E2E0D8] bg-white transition-colors duration-150 hover:border-[#425D78]">
      <div>
        {/* Attachment Preview Frame (Image, PDF, or Empty State) */}
        <button
          type="button"
          onClick={() => onOpenLightbox(certificate)}
          aria-label={`Lihat sertifikat ${certificate.name}`}
          className="relative block aspect-[4/3] w-full overflow-hidden border-b border-[#E2E0D8] bg-[#F0EFE9] text-left cursor-pointer"
        >
          {hasImage ? (
            <img
              src={certificate.image}
              alt={`${certificate.name} — ${certificate.organization}`}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="h-full w-full bg-[#F7F6F2] object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : hasPdf ? (
            <div className="relative h-full w-full bg-[#F7F6F2]">
              {/* Base architectural PDF summary behind iframe for browsers without inline PDF iframe support */}
              <div className="flex h-full w-full flex-col justify-between p-5">
                <div className="flex items-center justify-between font-mono-tech text-[11px] text-[#777777]">
                  <span>PDF CERTIFICATE</span>
                  <span>{certificate.issueDate}</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <FileText className="h-8 w-8 text-[#425D78] stroke-[1.5]" aria-hidden="true" />
                  <span className="mt-2 font-display text-xs font-semibold text-[#171717]">
                    {certificate.name}
                  </span>
                </div>
                <div className="font-mono-tech text-[11px] text-[#626262] truncate">
                  {certificate.organization}
                </div>
              </div>

              <iframe
                title={`Pratinjau ${certificate.name}`}
                src={`${certificate.pdfUrl}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                className="pointer-events-none absolute inset-0 h-full w-full border-0 bg-white"
              />
            </div>
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-[#F0EFE9] px-6 text-center">
              <Award className="h-8 w-8 text-[#425D78] stroke-[1.5]" aria-hidden="true" />
              <span className="mt-2 font-mono-tech text-xs text-[#626262]">
                Belum ada lampiran gambar/PDF
              </span>
            </div>
          )}
        </button>

        {/* Card Body */}
        <div className="p-6">
          {/* Unboxed typographic metadata */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#626262]">
            <span className="font-medium text-[#425D78]">{certificate.category}</span>
            <span aria-hidden="true" className="text-[#C8C5BA]">
              ·
            </span>
            <span className="font-mono-tech">{certificate.issueDate}</span>
          </div>

          <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-[#171717]">
            {certificate.name}
          </h3>

          <p className="mt-1 text-sm text-[#626262]">{certificate.organization}</p>

          {certificate.description && (
            <p className="mt-3 text-sm leading-relaxed text-[#777777]">
              {certificate.description}
            </p>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E2E0D8] px-6 py-3.5">
        <button
          type="button"
          onClick={() => onOpenLightbox(certificate)}
          className="inline-flex min-h-[36px] items-center gap-2 text-xs font-medium text-[#171717] transition-colors hover:text-[#425D78] cursor-pointer"
        >
          <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Lihat Sertifikat</span>
        </button>

        {certificate.pdfUrl && (
          <a
            href={certificate.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[36px] items-center gap-1.5 text-xs font-medium text-[#425D78] transition-colors hover:text-[#171717]"
          >
            <span>Buka PDF</span>
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
