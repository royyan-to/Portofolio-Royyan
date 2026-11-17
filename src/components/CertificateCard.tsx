import { useState } from 'react';
import { Award, Maximize2 } from 'lucide-react';
import type { CertificateItem } from '../data/types';

interface CertificateCardProps {
  certificate: CertificateItem;
  onOpenLightbox: (certificate: CertificateItem) => void;
}

export function CertificateCard({ certificate, onOpenLightbox }: CertificateCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group flex flex-col justify-between border border-[#E2E0D8] bg-white transition-colors duration-150 hover:border-[#425D78]">
      <div>
        {/* Image Preview Frame */}
        <button
          type="button"
          onClick={() => onOpenLightbox(certificate)}
          aria-label={`Perbesar sertifikat ${certificate.name}`}
          className="relative block aspect-[4/3] w-full overflow-hidden border-b border-[#E2E0D8] bg-[#F0EFE9] text-left cursor-pointer"
        >
          {!imgError ? (
            <img
              src={certificate.image}
              alt={`${certificate.name} — ${certificate.organization}`}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-[#F0EFE9] px-6 text-center">
              <Award className="h-8 w-8 text-[#425D78] stroke-[1.5]" aria-hidden="true" />
              <span className="mt-2 font-mono-tech text-xs text-[#626262]">
                Gambar belum tersedia
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
      <div className="border-t border-[#E2E0D8] px-6 py-3.5">
        <button
          type="button"
          onClick={() => onOpenLightbox(certificate)}
          className="inline-flex min-h-[36px] items-center gap-2 text-xs font-medium text-[#171717] transition-colors hover:text-[#425D78] cursor-pointer"
        >
          <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Lihat Sertifikat</span>
        </button>
      </div>
    </article>
  );
}
