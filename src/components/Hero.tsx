import { useState } from 'react';
import { ArrowDownRight, ArrowRight, User } from 'lucide-react';
import { profile } from '../data/profile';

interface HeroProps {
  onExploreWork: () => void;
  onContact: () => void;
  onJumpTo: (sectionId: string) => void;
}

const INDEX_LINKS = [
  { num: '01', label: 'Certifications', target: 'certifications' },
  { num: '02', label: 'Projects & Lab', target: 'projects' },
  { num: '03', label: 'Technical Skills', target: 'skills' },
  { num: '04', label: 'Learning Journey', target: 'journey' },
] as const;

export function Hero({ onExploreWork, onContact, onJumpTo }: HeroProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = Boolean(profile.photoUrl) && !imgError;

  return (
    <section id="home" className="border-b border-[#E2E0D8]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 lg:px-10 lg:py-28">
        {/* Identity Meta Strip (Unboxed typographic metadata) */}
        <div className="mb-10 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#626262]">
          <span className="font-medium text-[#171717]">{profile.name}</span>
          <span aria-hidden="true" className="text-[#C8C5BA]">
            /
          </span>
          <span>{profile.title}</span>
          <span aria-hidden="true" className="text-[#C8C5BA]">
            /
          </span>
          <span>{profile.location}</span>
        </div>

        {/* Main 12-Column Swiss Split */}
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col justify-between lg:col-span-8">
            <div>
              <h1 className="font-display text-[clamp(2.5rem,5.4vw,4.5rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-[#171717]">
                {profile.heroHeading}
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#626262] md:text-lg">
                {profile.heroSupportText}
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#777777]">
                {profile.shortIntro}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onExploreWork}
                className="inline-flex min-h-[44px] items-center gap-2.5 bg-[#425D78] px-6 py-3 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#334A60] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onContact}
                className="inline-flex min-h-[44px] items-center gap-2.5 border border-[#C8C5BA] bg-transparent px-6 py-3 text-sm font-medium text-[#171717] transition-colors duration-150 hover:border-[#171717] hover:bg-[#F0EFE9] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Contact Me</span>
              </button>
            </div>
          </div>

          {/* Right Column: Neutral Replaceable Portrait Placeholder */}
          <div className="lg:col-span-4">
            <div className="flex h-full min-h-[300px] flex-col justify-between border border-[#E2E0D8] bg-[#F0EFE9] p-6">
              <div className="flex items-center justify-between text-xs text-[#777777]">
                <span className="font-mono-tech">PORTRAIT SLOT</span>
                <span className="font-mono-tech">01 : 01</span>
              </div>

              {showImage ? (
                <div className="my-5 overflow-hidden border border-[#E2E0D8] bg-[#E8E6DF] aspect-[4/5]">
                  <img
                    src={profile.photoUrl as string}
                    alt={profile.photoAlt}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="my-6 flex flex-1 flex-col items-center justify-center border border-dashed border-[#C8C5BA] bg-[#F7F6F2] px-6 py-10 text-center">
                  <div className="flex h-16 w-16 items-center justify-center border border-[#E2E0D8] bg-[#F0EFE9] text-[#425D78]">
                    <User className="h-7 w-7 stroke-[1.5]" aria-hidden="true" />
                  </div>
                  <p className="mt-4 font-display text-sm font-medium text-[#171717]">
                    {profile.name}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#777777]">
                    Placeholder foto profil netral. Dapat diganti melalui{' '}
                    <span className="font-mono-tech text-[#425D78]">public/images/</span>.
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between border-t border-[#E2E0D8] pt-3 text-xs text-[#626262]">
                <span>{profile.location}</span>
                <span className="font-mono-tech text-[#425D78]">TKJ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Structural Index Row */}
        <div className="mt-14 grid grid-cols-2 border-t border-l border-[#E2E0D8] md:grid-cols-4">
          {INDEX_LINKS.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => onJumpTo(item.target)}
              className="group flex items-center justify-between border-r border-b border-[#E2E0D8] bg-transparent px-4 py-4 text-left transition-colors duration-150 hover:bg-[#F0EFE9] cursor-pointer"
            >
              <div>
                <span className="block font-mono-tech text-xs text-[#777777]">{item.num}</span>
                <span className="mt-0.5 block text-sm font-medium text-[#171717] group-hover:text-[#425D78]">
                  {item.label}
                </span>
              </div>
              <ArrowDownRight
                className="h-4 w-4 text-[#777777] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-[#425D78]"
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
