import { useState } from 'react';
import { ArrowRight, Download, User } from 'lucide-react';
import { motion } from 'motion/react';
import { certificates } from '../data/certificates';
import { profile } from '../data/profile';
import { projects } from '../data/projects';

interface HeroProps {
  onViewProjects: () => void;
  onContact: () => void;
}

const SWISS_EASE = [0.16, 1, 0.3, 1] as const;

export function Hero({ onViewProjects, onContact }: HeroProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = Boolean(profile.photoUrl) && !imgError;

  return (
    <section
      id="home"
      className="border-b border-[#E2E0D8] transition-colors duration-300 dark:border-[#282C34]"
    >
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14 lg:px-10 lg:py-16">
        {/* Identity Meta Strip (Stagger 1) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0, ease: SWISS_EASE }}
          className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#626262] dark:text-[#B4B2AA] sm:text-sm"
        >
          <span className="font-medium text-[#171717] dark:text-[#F1F0EA]">
            {profile.name}
          </span>
          <span aria-hidden="true" className="text-[#C8C5BA] dark:text-[#3B414D]">
            /
          </span>
          <span>{profile.title}</span>
          <span aria-hidden="true" className="text-[#C8C5BA] dark:text-[#3B414D]">
            /
          </span>
          <span>{profile.location}</span>
        </motion.div>

        {/* Compact 12-Column Swiss Split */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col justify-between lg:col-span-8">
            <div>
              {/* Headline (Stagger 2) */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease: SWISS_EASE }}
                className="font-display text-[clamp(2.2rem,4.6vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#171717] dark:text-[#F1F0EA]"
              >
                {profile.heroHeading}
              </motion.h1>

              {/* Description (Stagger 3) */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16, ease: SWISS_EASE }}
              >
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#626262] dark:text-[#B4B2AA] md:text-base">
                  {profile.heroSupportText}
                </p>

                <p className="mt-3 text-xs text-[#626262] dark:text-[#B4B2AA]">
                  <span className="font-mono-tech text-[#425D78] dark:text-[#7E9BB8]">
                    Career Interests:
                  </span>{' '}
                  <span className="font-medium text-[#171717] dark:text-[#F1F0EA]">
                    {profile.careerInterests.join(' · ')}
                  </span>
                </p>
              </motion.div>
            </div>

            {/* Buttons (Stagger 4) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24, ease: SWISS_EASE }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <button
                type="button"
                onClick={onViewProjects}
                className="group inline-flex min-h-[44px] items-center gap-2 bg-[#425D78] px-5 py-2.5 text-sm font-medium text-white transition-all duration-150 hover:bg-[#334A60] active:scale-[0.98] dark:bg-[#7E9BB8] dark:text-[#0F1114] dark:hover:bg-[#96B0CA] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                onClick={onContact}
                className="inline-flex min-h-[44px] items-center gap-2 border border-[#C8C5BA] bg-white px-5 py-2.5 text-sm font-medium text-[#171717] transition-all duration-150 hover:border-[#171717] hover:bg-[#F0EFE9] active:scale-[0.98] dark:border-[#3B414D] dark:bg-[#1A1D23] dark:text-[#F1F0EA] dark:hover:border-[#7E9BB8] dark:hover:bg-[#22262E] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Contact Me</span>
              </button>

              {profile.cvUrl && (
                <a
                  href={profile.cvUrl}
                  download
                  className="inline-flex min-h-[44px] items-center gap-2 border border-[#E2E0D8] bg-transparent px-4 py-2.5 text-sm font-medium text-[#171717] transition-all duration-150 hover:border-[#171717] active:scale-[0.98] dark:border-[#282C34] dark:text-[#F1F0EA] dark:hover:border-[#7E9BB8] whitespace-nowrap shrink-0"
                >
                  <Download
                    className="h-4 w-4 text-[#425D78] dark:text-[#7E9BB8]"
                    aria-hidden="true"
                  />
                  <span>Download CV</span>
                </a>
              )}
            </motion.div>
          </div>

          {/* Right Column: Compact Swiss Profile Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: SWISS_EASE }}
            className="lg:col-span-4"
          >
            <div className="flex h-full flex-col justify-between border border-[#E2E0D8] bg-white p-4 transition-colors duration-300 dark:border-[#282C34] dark:bg-[#1A1D23]">
              <div>
                {showImage ? (
                  <div className="group mb-4 aspect-[16/10] w-full overflow-hidden border border-[#E2E0D8] bg-[#F0EFE9] dark:border-[#282C34] dark:bg-[#15181D]">
                    <img
                      src={profile.photoUrl as string}
                      alt={profile.photoAlt}
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="h-full w-full origin-[35%_52%] scale-[1.2] object-cover object-[40%_54%] transition-transform duration-300 ease-out group-hover:scale-[1.24]"
                    />
                  </div>
                ) : (
                  <div className="mb-4 flex aspect-[16/10] w-full items-center justify-center border border-[#E2E0D8] bg-[#F0EFE9] text-[#425D78] dark:border-[#282C34] dark:bg-[#15181D] dark:text-[#7E9BB8]">
                    <User className="h-8 w-8 stroke-[1.5]" aria-hidden="true" />
                  </div>
                )}

                <div className="border-b border-[#E2E0D8] pb-3 dark:border-[#282C34]">
                  <p className="truncate font-display text-sm font-semibold text-[#171717] dark:text-[#F1F0EA]">
                    {profile.name}
                  </p>
                  <div className="mt-0.5 flex items-center justify-between gap-2">
                    <p className="truncate text-xs text-[#626262] dark:text-[#B4B2AA]">
                      {profile.school}
                    </p>
                    <p className="font-mono-tech text-[11px] text-[#425D78] dark:text-[#7E9BB8] shrink-0">
                      {profile.grade}
                    </p>
                  </div>
                </div>
              </div>

              <dl className="mt-1 divide-y divide-[#E2E0D8] text-xs dark:divide-[#282C34]">
                <div className="flex items-center justify-between py-2">
                  <dt className="text-[#777777] dark:text-[#8C8B84]">Fokus Minat</dt>
                  <dd className="font-medium text-[#171717] dark:text-[#F1F0EA] text-right">
                    {profile.careerInterests.join(' · ')}
                  </dd>
                </div>
                <div className="flex items-center justify-between py-2">
                  <dt className="text-[#777777] dark:text-[#8C8B84]">Featured Project</dt>
                  <dd className="font-medium text-[#171717] dark:text-[#F1F0EA]">
                    {projects[0]?.title ?? '—'}
                  </dd>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <dt className="text-[#777777] dark:text-[#8C8B84]">Sertifikat Terverifikasi</dt>
                  <dd className="font-mono-tech font-medium text-[#425D78] dark:text-[#7E9BB8]">
                    {certificates.length} Dokumen
                  </dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
