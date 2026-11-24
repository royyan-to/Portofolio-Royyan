import { useState } from 'react';
import { ArrowUpRight, ExternalLink, ImageOff } from 'lucide-react';
import type { ProjectItem } from '../data/types';

interface ProjectCardProps {
  project: ProjectItem;
  onViewDetails: (project: ProjectItem) => void;
  featuredLayout?: boolean;
}

export function ProjectCard({
  project,
  onViewDetails,
  featuredLayout = false,
}: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(project.image) && !imgError;

  if (featuredLayout) {
    return (
      <article className="group grid grid-cols-1 border border-[#E2E0D8] bg-white transition-colors duration-200 hover:border-[#425D78] dark:border-[#282C34] dark:bg-[#1A1D23] dark:hover:border-[#7E9BB8] lg:grid-cols-12">
        {/* Left: Screenshot / Media Slot with subtle scale on hover */}
        <button
          type="button"
          onClick={() => onViewDetails(project)}
          aria-label={`Lihat detail proyek ${project.title}`}
          className="group/media relative flex min-h-[240px] flex-col justify-between overflow-hidden border-b border-[#E2E0D8] bg-[#F0EFE9] p-6 text-left transition-colors duration-200 hover:bg-[#EAE8E0] dark:border-[#282C34] dark:bg-[#15181D] dark:hover:bg-[#1E222A] lg:col-span-5 lg:border-r lg:border-b-0 cursor-pointer"
        >
          {hasImage ? (
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03] group-hover/media:scale-[1.04]"
            />
          ) : (
            <>
              <div className="flex items-center justify-between font-mono-tech text-[11px] text-[#777777] dark:text-[#8C8B84]">
                <span>FEATURED PROJECT</span>
                <span>{project.status}</span>
              </div>

              <div className="my-6 flex flex-col items-center justify-center text-center transition-transform duration-300 ease-out group-hover:scale-[1.02]">
                <div className="flex h-12 w-12 items-center justify-center border border-[#C8C5BA] bg-[#F7F6F2] text-[#425D78] transition-colors duration-200 group-hover:border-[#425D78] dark:border-[#3B414D] dark:bg-[#1A1D23] dark:text-[#7E9BB8]">
                  <ImageOff className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
                </div>
                <p className="mt-3 text-xs font-medium text-[#171717] dark:text-[#F1F0EA]">
                  Screenshot proyek belum tersedia
                </p>
                <p className="mt-1 text-[11px] text-[#626262] dark:text-[#B4B2AA]">
                  Klik untuk membuka ringkasan detail proyek
                </p>
              </div>

              <div className="font-mono-tech text-[11px] text-[#626262] dark:text-[#B4B2AA]">
                {project.technologies.join(' · ')}
              </div>
            </>
          )}
        </button>

        {/* Right: Project Overview & Actions */}
        <div className="flex flex-col justify-between p-6 md:p-8 lg:col-span-7">
          <div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#626262] dark:text-[#B4B2AA]">
              <span className="font-mono-tech font-medium text-[#425D78] dark:text-[#7E9BB8]">
                Featured Project
              </span>
              <span aria-hidden="true" className="text-[#C8C5BA] dark:text-[#3B414D]">
                ·
              </span>
              <span>{project.category}</span>
              <span aria-hidden="true" className="text-[#C8C5BA] dark:text-[#3B414D]">
                ·
              </span>
              <span>{project.status}</span>
            </div>

            <h3 className="mt-2.5 font-display text-2xl font-semibold tracking-tight text-[#171717] dark:text-[#F1F0EA]">
              {project.title}
            </h3>

            <p className="mt-2.5 text-sm leading-relaxed text-[#626262] dark:text-[#B4B2AA]">
              {project.shortDescription}
            </p>

            <div className="mt-5 border-t border-[#E2E0D8] pt-4 dark:border-[#282C34]">
              <p className="font-mono-tech text-[11px] text-[#425D78] dark:text-[#7E9BB8]">
                {project.contributionHeading ?? 'Kontribusi'}
              </p>
              <ul className="mt-2 grid grid-cols-1 gap-x-6 gap-y-1.5 text-xs leading-relaxed text-[#4A4A4A] dark:text-[#D0CEC7] sm:grid-cols-2">
                {project.implementationOverview.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1 w-1 bg-[#425D78] dark:bg-[#7E9BB8] shrink-0"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#E2E0D8] pt-5 dark:border-[#282C34]">
            <button
              type="button"
              onClick={() => onViewDetails(project)}
              className="group/btn inline-flex min-h-[40px] items-center gap-2 bg-[#425D78] px-4 py-2 text-xs font-medium text-white transition-all duration-150 hover:bg-[#334A60] active:scale-[0.98] dark:bg-[#7E9BB8] dark:text-[#0F1114] dark:hover:bg-[#96B0CA] whitespace-nowrap cursor-pointer"
            >
              <span>View Details</span>
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-150 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                aria-hidden="true"
              />
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/gh inline-flex min-h-[40px] items-center gap-2 border border-[#C8C5BA] bg-white px-4 py-2 text-xs font-medium text-[#171717] transition-all duration-150 hover:border-[#171717] hover:bg-[#F7F6F2] active:scale-[0.98] dark:border-[#3B414D] dark:bg-[#15181D] dark:text-[#F1F0EA] dark:hover:border-[#7E9BB8] whitespace-nowrap"
              >
                <span>View GitHub</span>
                <ExternalLink
                  className="h-3.5 w-3.5 transition-transform duration-150 group-hover/gh:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col justify-between border border-[#E2E0D8] bg-white transition-colors duration-200 hover:border-[#425D78] dark:border-[#282C34] dark:bg-[#1A1D23] dark:hover:border-[#7E9BB8]">
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#626262] dark:text-[#B4B2AA]">
          <span className="font-medium text-[#425D78] dark:text-[#7E9BB8]">
            {project.category}
          </span>
          <span aria-hidden="true" className="text-[#C8C5BA] dark:text-[#3B414D]">
            ·
          </span>
          <span>{project.status}</span>
        </div>

        <h3 className="mt-2.5 font-display text-lg font-semibold text-[#171717] dark:text-[#F1F0EA]">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-[#626262] dark:text-[#B4B2AA]">
          {project.shortDescription}
        </p>

        <p className="mt-3 font-mono-tech text-xs text-[#777777] dark:text-[#8C8B84]">
          {project.technologies.join(' · ')}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E2E0D8] px-6 py-3.5 dark:border-[#282C34]">
        <button
          type="button"
          onClick={() => onViewDetails(project)}
          className="group/btn inline-flex min-h-[36px] items-center gap-1.5 text-xs font-medium text-[#171717] transition-colors hover:text-[#425D78] active:scale-[0.98] dark:text-[#F1F0EA] dark:hover:text-[#7E9BB8] cursor-pointer"
        >
          <span>View Details</span>
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-150 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            aria-hidden="true"
          />
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[36px] items-center gap-1.5 text-xs font-medium text-[#425D78] transition-colors hover:text-[#171717] dark:text-[#7E9BB8] dark:hover:text-[#F1F0EA]"
          >
            <span>View GitHub</span>
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
