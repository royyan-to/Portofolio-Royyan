import { journeyItems } from '../data/journey';
import { profile } from '../data/profile';
import { Reveal } from './Reveal';

export function About() {
  return (
    <section
      id="about"
      className="border-b border-[#E2E0D8] transition-colors duration-300 dark:border-[#282C34]"
    >
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16 lg:px-10">
        {/* Section Heading */}
        <Reveal>
          <div className="border-b border-[#E2E0D8] pb-6 dark:border-[#282C34]">
            <span className="font-mono-tech text-xs text-[#425D78] dark:text-[#7E9BB8]">01</span>
            <h2 className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-[#171717] dark:text-[#F1F0EA] md:text-3xl">
              About &amp; Education
            </h2>
          </div>
        </Reveal>

        {/* Combined Two-Column Swiss Grid: About Me + Education */}
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: About Me & Focus Areas */}
          <Reveal delay={0.05} className="lg:col-span-7">
            <h3 className="font-mono-tech text-xs uppercase tracking-wider text-[#425D78] dark:text-[#7E9BB8]">
              About Me
            </h3>

            <div className="mt-4 space-y-4 text-sm leading-[1.75] text-[#171717] dark:text-[#F1F0EA] md:text-base">
              {profile.aboutParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index > 0
                      ? 'text-[#4A4A4A] dark:text-[#B4B2AA]'
                      : 'text-[#171717] dark:text-[#F1F0EA]'
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-1 gap-5 border-t border-[#E2E0D8] pt-6 dark:border-[#282C34] sm:grid-cols-3">
              {profile.aboutFocusAreas.map((area) => (
                <div key={area.label}>
                  <h4 className="font-display text-sm font-semibold text-[#171717] dark:text-[#F1F0EA]">
                    {area.label}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#626262] dark:text-[#B4B2AA]">
                    {area.detail}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right Column: Compact Education Timeline */}
          <Reveal delay={0.12} className="lg:col-span-5">
            <h3 className="font-mono-tech text-xs uppercase tracking-wider text-[#425D78] dark:text-[#7E9BB8]">
              Education
            </h3>

            <ol className="mt-4 divide-y divide-[#E2E0D8] border border-[#E2E0D8] bg-white transition-colors duration-300 dark:divide-[#282C34] dark:border-[#282C34] dark:bg-[#1A1D23]">
              {journeyItems.map((item) => (
                <li key={item.id} className="p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="font-display text-sm font-semibold text-[#171717] dark:text-[#F1F0EA]">
                      {item.institutionOrContext ?? item.title}
                    </h4>
                    <span className="font-mono-tech text-xs text-[#425D78] dark:text-[#7E9BB8] shrink-0">
                      {item.period}
                    </span>
                  </div>
                  {item.institutionOrContext && (
                    <p className="mt-1 text-xs font-medium text-[#4A4A4A] dark:text-[#D0CEC7]">
                      {item.title}
                    </p>
                  )}
                  <p className="mt-1.5 text-xs leading-relaxed text-[#626262] dark:text-[#B4B2AA]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
