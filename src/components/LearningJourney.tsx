import { Clock } from 'lucide-react';
import { journeyItems } from '../data/journey';

export function LearningJourney() {
  return (
    <section id="journey" className="border-b border-[#E2E0D8]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-4">
            <span className="font-mono-tech text-xs text-[#425D78]">05</span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#171717] md:text-4xl">
              Learning Journey
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#626262]">
              Linimasa kronologis pendidikan, pelatihan, kursus, dan tonggak belajar yang dicatat apa adanya.
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8">
            {journeyItems.length > 0 ? (
              <ol className="divide-y divide-[#E2E0D8] border-t border-b border-[#E2E0D8]">
                {journeyItems.map((item) => (
                  <li
                    key={item.id}
                    className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-12 sm:gap-6"
                  >
                    <div className="sm:col-span-4">
                      <span className="block font-mono-tech text-xs font-medium text-[#425D78]">
                        {item.period}
                      </span>
                      <span className="mt-1 block text-xs text-[#777777]">{item.type}</span>
                    </div>

                    <div className="sm:col-span-8">
                      <h3 className="font-display text-base font-semibold text-[#171717]">
                        {item.title}
                      </h3>
                      {item.institutionOrContext && (
                        <p className="mt-0.5 text-sm font-medium text-[#626262]">
                          {item.institutionOrContext}
                        </p>
                      )}
                      <p className="mt-2 text-sm leading-relaxed text-[#626262]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            ) : (
              <div className="border border-[#E2E0D8] bg-[#F0EFE9] p-8 md:p-10">
                <div className="inline-flex h-11 w-11 items-center justify-center border border-[#C8C5BA] bg-[#F7F6F2] text-[#425D78]">
                  <Clock className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-[#171717]">
                  Linimasa perjalanan belajar belum diisi
                </h3>
                <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-[#626262]">
                  Bagian ini dimulai dalam kondisi kosong tanpa tanggal, institusi, atau pencapaian buatan. Setiap riwayat pendidikan, pelatihan, dan milestone belajar dapat ditambahkan secara kronologis melalui berkas{' '}
                  <span className="font-mono-tech text-[#171717]">src/data/journey.ts</span>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
