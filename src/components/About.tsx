import { profile } from '../data/profile';

export function About() {
  return (
    <section id="about" className="border-b border-[#E2E0D8]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Section Index & Title */}
          <div className="lg:col-span-4">
            <span className="font-mono-tech text-xs text-[#425D78]">01</span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#171717] md:text-4xl">
              About Me
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#777777]">
              Siswa kelas XI Teknik Komputer dan Jaringan (TKJ) di SMK Madinatulquran dengan minat karier di bidang Cybersecurity dan System Administration.
            </p>
          </div>

          {/* Right Column: Narrative & Core Focus Areas */}
          <div className="lg:col-span-8">
            <div className="space-y-5 text-base leading-[1.75] text-[#171717]">
              {profile.aboutParagraphs.map((paragraph, index) => (
                <p key={index} className={index > 0 ? 'text-[#4A4A4A]' : 'text-[#171717]'}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 border-t border-[#E2E0D8] pt-6">
              <p className="text-xs text-[#777777]">
                <span className="font-mono-tech text-[#425D78]">Career Interests:</span>{' '}
                <span className="font-medium text-[#171717]">
                  {profile.careerInterests.join(' · ')}
                </span>
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 border-t border-[#E2E0D8] pt-8 sm:grid-cols-3 sm:gap-8 gap-6">
              {profile.aboutFocusAreas.map((area) => (
                <div key={area.label}>
                  <h3 className="font-display text-sm font-semibold text-[#171717]">
                    {area.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#626262]">{area.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
