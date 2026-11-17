import { useState } from 'react';
import { ArrowUpRight, ExternalLink, ImageOff } from 'lucide-react';
import type { ProjectItem } from '../data/types';

interface ProjectCardProps {
  project: ProjectItem;
  onSelectProject: (slug: string) => void;
}

export function ProjectCard({ project, onSelectProject }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(project.image) && !imgError;

  return (
    <article className="group flex flex-col justify-between border border-[#E2E0D8] bg-white transition-colors duration-150 hover:border-[#425D78]">
      <div>
        {/* Media / Screenshot Slot with Honest Empty State */}
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
            <div className="flex h-full w-full flex-col justify-between p-6">
              <div className="flex items-center justify-between font-mono-tech text-[11px] text-[#777777]">
                <span>{project.category}</span>
                <span>NO SCREENSHOT ATTACHED</span>
              </div>
              <div className="flex flex-col items-center justify-center py-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center border border-[#C8C5BA] bg-[#F7F6F2] text-[#425D78]">
                  <ImageOff className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
                </div>
                <span className="mt-3 text-xs font-medium text-[#626262]">
                  Belum ada tangkapan layar proyek
                </span>
              </div>
              <div className="font-mono-tech text-[11px] text-[#777777]">
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
          </div>

          <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-[#171717]">
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

          {/* Honest Contribution Summary */}
          <div className="mt-5 border-t border-[#E2E0D8] pt-4">
            <p className="font-mono-tech text-[11px] text-[#425D78]">
              {project.contributionHeading ?? 'Kontribusi'}
            </p>
            <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-[#4A4A4A]">
              {project.implementationOverview.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-1.5 h-1 w-1 bg-[#425D78] shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer CTAs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E2E0D8] px-6 py-3.5">
        <button
          type="button"
          onClick={() => onSelectProject(project.slug)}
          className="inline-flex min-h-[36px] items-center gap-2 text-xs font-medium text-[#171717] transition-colors hover:text-[#425D78] cursor-pointer"
        >
          <span>Lihat Detail Proyek</span>
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[36px] items-center gap-1.5 text-xs font-medium text-[#425D78] transition-colors hover:text-[#171717]"
          >
            <span>GitHub Repository</span>
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
