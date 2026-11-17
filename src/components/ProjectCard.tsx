import { useState } from 'react';
import { ArrowUpRight, Network } from 'lucide-react';
import type { ProjectItem } from '../data/types';

interface ProjectCardProps {
  project: ProjectItem;
  onSelectProject: (slug: string) => void;
}

export function ProjectCard({ project, onSelectProject }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(project.image) && !imgError;

  return (
    <article
      className={`group flex flex-col justify-between border bg-white transition-colors duration-150 hover:border-[#425D78] ${
        project.isSamplePlaceholder ? 'border-dashed border-[#C8C5BA]' : 'border-[#E2E0D8]'
      }`}
    >
      <div>
        {/* Media / Diagram Slot */}
        <button
          type="button"
          onClick={() => onSelectProject(project.slug)}
          aria-label={`Buka detail proyek ${project.title}`}
          className="relative block aspect-[16/10] w-full overflow-hidden border-b border-[#E2E0D8] bg-[#F0EFE9] text-left cursor-pointer"
        >
          {hasImage ? (
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full w-full flex-col justify-between p-5">
              <div className="flex items-center justify-between font-mono-tech text-[11px] text-[#777777]">
                <span>{project.category}</span>
                <span>{project.isSamplePlaceholder ? 'SAMPLE TEMPLATE' : 'DIAGRAM / MEDIA'}</span>
              </div>
              <div className="flex items-center justify-center py-2">
                <div className="flex h-12 w-12 items-center justify-center border border-[#C8C5BA] bg-[#F7F6F2] text-[#425D78]">
                  <Network className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
                </div>
              </div>
              <div className="font-mono-tech text-[11px] text-[#626262]">
                {project.technologies.slice(0, 3).join(' · ')}
              </div>
            </div>
          )}
        </button>

        {/* Body */}
        <div className="p-6">
          {/* Zero-pill typographic metadata */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#626262]">
            <span className="font-medium text-[#425D78]">{project.category}</span>
            <span aria-hidden="true" className="text-[#C8C5BA]">
              ·
            </span>
            <span>{project.status}</span>
            {project.dateLabel && (
              <>
                <span aria-hidden="true" className="text-[#C8C5BA]">
                  ·
                </span>
                <span className="font-mono-tech">{project.dateLabel}</span>
              </>
            )}
          </div>

          <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-[#171717]">
            <button
              type="button"
              onClick={() => onSelectProject(project.slug)}
              className="text-left transition-colors hover:text-[#425D78] cursor-pointer"
            >
              {project.title}
            </button>
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-[#626262]">
            {project.shortDescription}
          </p>

          <p className="mt-4 font-mono-tech text-xs leading-relaxed text-[#777777]">
            {project.technologies.join(' / ')}
          </p>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="border-t border-[#E2E0D8] px-6 py-3.5">
        <button
          type="button"
          onClick={() => onSelectProject(project.slug)}
          className="inline-flex min-h-[36px] items-center gap-2 text-xs font-medium text-[#171717] transition-colors hover:text-[#425D78] cursor-pointer"
        >
          <span>Lihat Detail Proyek</span>
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
