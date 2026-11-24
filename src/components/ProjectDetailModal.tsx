import { useEffect, useState } from 'react';
import { ExternalLink, ImageOff, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { ProjectItem } from '../data/types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

const SWISS_EASE = [0.16, 1, 0.3, 1] as const;

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [project?.slug]);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const hasImage = Boolean(project?.image) && !imgError;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#171717]/80 p-4 backdrop-blur-[2px] md:p-6"
          onClick={onClose}
        >
          <motion.div
            key="project-modal-panel"
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 6 }}
            transition={{ duration: 0.24, ease: SWISS_EASE }}
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden border border-[#E2E0D8] bg-[#F7F6F2] dark:border-[#282C34] dark:bg-[#0F1114]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-[#E2E0D8] bg-white px-5 py-4 dark:border-[#282C34] dark:bg-[#1A1D23] md:px-6">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-2 text-xs text-[#626262] dark:text-[#B4B2AA]">
                  <span className="font-medium text-[#425D78] dark:text-[#7E9BB8]">
                    {project.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{project.status}</span>
                </div>
                <h3
                  id="project-modal-title"
                  className="mt-1 font-display text-xl font-semibold text-[#171717] dark:text-[#F1F0EA] md:text-2xl"
                >
                  {project.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup detail proyek"
                className="inline-flex h-10 items-center gap-1.5 border border-[#171717] bg-[#171717] px-3.5 text-xs font-medium text-white transition-all duration-150 hover:border-[#425D78] hover:bg-[#425D78] active:scale-[0.97] dark:border-[#F1F0EA] dark:bg-[#F1F0EA] dark:text-[#0F1114] dark:hover:border-[#7E9BB8] dark:hover:bg-[#7E9BB8] shrink-0 cursor-pointer"
              >
                <X className="h-4 w-4" aria-hidden="true" />
                <span>Close</span>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-5 md:p-6">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                {/* Screenshot Area */}
                <div className="lg:col-span-5">
                  <div className="border border-[#E2E0D8] bg-white p-2 dark:border-[#282C34] dark:bg-[#1A1D23]">
                    {hasImage ? (
                      <img
                        src={project.image}
                        alt={`Screenshot ${project.title}`}
                        referrerPolicy="no-referrer"
                        onError={() => setImgError(true)}
                        className="aspect-[4/3] w-full bg-[#F7F6F2] object-contain dark:bg-[#15181D]"
                      />
                    ) : (
                      <div className="flex aspect-[4/3] w-full flex-col items-center justify-center bg-[#F0EFE9] p-6 text-center dark:bg-[#15181D]">
                        <ImageOff
                          className="h-8 w-8 text-[#425D78] stroke-[1.5] dark:text-[#7E9BB8]"
                          aria-hidden="true"
                        />
                        <p className="mt-3 font-display text-xs font-semibold text-[#171717] dark:text-[#F1F0EA]">
                          Screenshot belum tersedia
                        </p>
                        <p className="mt-1 text-[11px] leading-relaxed text-[#626262] dark:text-[#B4B2AA]">
                          Tambahkan tangkapan layar ke{' '}
                          <span className="font-mono-tech">public/projects/</span> saat aplikasi siap didokumentasikan.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Technologies List */}
                  <div className="mt-4 border border-[#E2E0D8] bg-white p-4 dark:border-[#282C34] dark:bg-[#1A1D23]">
                    <h4 className="font-mono-tech text-[11px] uppercase tracking-wider text-[#425D78] dark:text-[#7E9BB8]">
                      Teknologi &amp; Alat
                    </h4>
                    <p className="mt-2 font-mono-tech text-xs leading-relaxed text-[#171717] dark:text-[#F1F0EA]">
                      {project.technologies.join(' · ')}
                    </p>
                  </div>
                </div>

                {/* Description, Features, Contribution */}
                <div className="space-y-5 lg:col-span-7">
                  <div>
                    <h4 className="font-mono-tech text-[11px] uppercase tracking-wider text-[#425D78] dark:text-[#7E9BB8]">
                      Deskripsi Proyek
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#171717] dark:text-[#F1F0EA]">
                      {project.shortDescription}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#626262] dark:text-[#B4B2AA]">
                      {project.objective}
                    </p>
                  </div>

                  <div className="border-t border-[#E2E0D8] pt-4 dark:border-[#282C34]">
                    <h4 className="font-mono-tech text-[11px] uppercase tracking-wider text-[#425D78] dark:text-[#7E9BB8]">
                      Fokus Fitur &amp; Cakupan
                    </h4>
                    <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-[#4A4A4A] dark:text-[#D0CEC7]">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 bg-[#425D78] dark:bg-[#7E9BB8] shrink-0"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-[#E2E0D8] pt-4 dark:border-[#282C34]">
                    <h4 className="font-mono-tech text-[11px] uppercase tracking-wider text-[#425D78] dark:text-[#7E9BB8]">
                      {project.contributionHeading ?? 'Kontribusi'}
                    </h4>
                    <ol className="mt-2 space-y-1.5 text-sm leading-relaxed text-[#4A4A4A] dark:text-[#D0CEC7]">
                      {project.implementationOverview.map((step, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="font-mono-tech pt-0.5 text-xs text-[#425D78] dark:text-[#7E9BB8] shrink-0">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E2E0D8] bg-white px-5 py-3.5 dark:border-[#282C34] dark:bg-[#1A1D23] md:px-6">
              <span className="font-mono-tech text-xs text-[#777777] dark:text-[#8C8B84]">
                Tekan ESC untuk menutup
              </span>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] items-center gap-2 bg-[#425D78] px-4 py-2 text-xs font-medium text-white transition-all duration-150 hover:bg-[#334A60] active:scale-[0.98] dark:bg-[#7E9BB8] dark:text-[#0F1114] dark:hover:bg-[#96B0CA]"
                  >
                    <span>View GitHub</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex min-h-[40px] items-center border border-[#C8C5BA] bg-white px-4 py-2 text-xs font-medium text-[#171717] transition-all duration-150 hover:border-[#171717] active:scale-[0.98] dark:border-[#3B414D] dark:bg-[#15181D] dark:text-[#F1F0EA] dark:hover:border-[#7E9BB8] cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
