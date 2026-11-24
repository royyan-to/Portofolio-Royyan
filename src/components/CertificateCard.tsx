import { useState } from 'react';
import { Award, ExternalLink, Maximize2 } from 'lucide-react';
import type { CertificateItem } from '../data/types';

interface CertificateCardProps {
  certificate: CertificateItem;
  onOpenLightbox: (certificate: CertificateItem) => void;
}

export function CertificateCard({ certificate, onOpenLightbox }: CertificateCardProps) {
  const [imgError, setImgError] = useState(false);

  const hasImage = Boolean(certificate.image) && !imgError;

  return (
    <article className="group flex w-full flex-col justify-between border border-[#E2E0D8] bg-white transition-colors duration-200 hover:border-[#425D78] dark:border-[#282C34] dark:bg-[#1A1D23] dark:hover:border-[#7E9BB8]">
      <div>
        {/* Clickable Image Preview with light hover scale */}
        <button
          type="button"
          onClick={() => onOpenLightbox(certificate)}
          aria-label={`Perbesar sertifikat ${certificate.name}`}
          className="relative block aspect-[4/3] w-full overflow-hidden border-b border-[#E2E0D8] bg-[#F7F6F2] text-left dark:border-[#282C34] dark:bg-[#15181D] cursor-pointer"
        >
          {hasImage ? (
            <img
              src={certificate.image}
              alt={`${certificate.name} — ${certificate.organization}`}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="h-full w-full object-contain p-2 transition-transform duration-300 ease-out group-hover:scale-[1.035]"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-[#F0EFE9] px-4 text-center dark:bg-[#15181D]">
              <Award
                className="h-7 w-7 text-[#425D78] stroke-[1.5] dark:text-[#7E9BB8]"
                aria-hidden="true"
              />
              <span className="mt-2 font-mono-tech text-[11px] text-[#626262] dark:text-[#B4B2AA]">
                Gambar belum tersedia
              </span>
            </div>
          )}
        </button>

        {/* Card Body */}
        <div className="p-4">
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[11px] text-[#626262] dark:text-[#B4B2AA]">
            <span className="font-medium text-[#425D78] dark:text-[#7E9BB8]">
              {certificate.category}
            </span>
            <span aria-hidden="true" className="text-[#C8C5BA] dark:text-[#3B414D]">
              ·
            </span>
            <span className="font-mono-tech">{certificate.issueDate}</span>
          </div>

          <h3 className="mt-2 font-display text-sm font-semibold leading-snug text-[#171717] dark:text-[#F1F0EA]">
            <button
              type="button"
              onClick={() => onOpenLightbox(certificate)}
              className="text-left transition-colors hover:text-[#425D78] dark:hover:text-[#7E9BB8] cursor-pointer"
            >
              {certificate.name}
            </button>
          </h3>

          <p className="mt-1 text-xs text-[#626262] dark:text-[#B4B2AA]">
            {certificate.organization}
          </p>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="flex items-center justify-between gap-2 border-t border-[#E2E0D8] px-4 py-2.5 dark:border-[#282C34]">
        <button
          type="button"
          onClick={() => onOpenLightbox(certificate)}
          className="inline-flex min-h-[34px] items-center gap-1.5 text-xs font-medium text-[#171717] transition-all duration-150 hover:text-[#425D78] active:scale-[0.97] dark:text-[#F1F0EA] dark:hover:text-[#7E9BB8] cursor-pointer"
        >
          <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Perbesar</span>
        </button>

        {certificate.pdfUrl && (
          <a
            href={certificate.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[34px] items-center gap-1 text-xs font-medium text-[#425D78] transition-colors hover:text-[#171717] dark:text-[#7E9BB8] dark:hover:text-[#F1F0EA]"
          >
            <span>PDF</span>
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
