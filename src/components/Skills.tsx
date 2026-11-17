import { useState } from 'react';
import { skillGroups } from '../data/skills';
import type { SkillStatus } from '../data/types';

type StatusFilter = 'All' | SkillStatus;

const STATUS_DESCRIPTIONS: Record<SkillStatus, string> = {
  Learning: 'Sedang dipelajari secara aktif melalui materi & latihan dasar.',
  Practiced: 'Sudah dipraktikkan langsung di laboratorium atau simulasi.',
  Familiar: 'Memahami konsep dasar dan terbiasa menggunakannya dalam tugas.',
};

export function Skills() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('All');

  const statusTabs: StatusFilter[] = ['All', 'Practiced', 'Familiar', 'Learning'];

  return (
    <section id="skills" className="border-b border-[#E2E0D8]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#E2E0D8] pb-8 md:flex-row md:items-end">
          <div>
            <span className="font-mono-tech text-xs text-[#425D78]">04</span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#171717] md:text-4xl">
              Technical Skills
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#626262] md:text-base">
              Ringkasan topik teknis yang sedang dipelajari dan dipraktikkan. Setiap entri merepresentasikan tingkat pemahaman saat ini—bukan klaim penguasaan penuh—dan dapat diperbarui di{' '}
              <span className="font-mono-tech text-[#171717]">src/data/skills.ts</span>.
            </p>
          </div>

          {/* Interactive Status Filter */}
          <div
            role="tablist"
            aria-label="Filter status pemahaman keterampilan"
            className="flex flex-wrap items-center gap-1.5 shrink-0"
          >
            {statusTabs.map((status) => {
              const isActive = statusFilter === status;
              return (
                <button
                  key={status}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setStatusFilter(status)}
                  className={`min-h-[36px] border px-3.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'border-[#171717] bg-[#171717] text-[#F7F6F2]'
                      : 'border-[#E2E0D8] bg-white text-[#626262] hover:border-[#171717] hover:text-[#171717]'
                  }`}
                >
                  {status}
                </button>
              );
            })}
          </div>
        </div>

        {/* Status Legend (Unboxed typographic row) */}
        <div className="mt-6 grid grid-cols-1 gap-4 border-b border-[#E2E0D8] pb-6 text-xs text-[#626262] md:grid-cols-3">
          {(['Practiced', 'Familiar', 'Learning'] as const).map((status) => (
            <div key={status} className="flex items-baseline gap-2.5">
              <span className="font-mono-tech font-medium text-[#425D78] shrink-0">
                {status}:
              </span>
              <span>{STATUS_DESCRIPTIONS[status]}</span>
            </div>
          ))}
        </div>

        {/* 2x2 Swiss Architectural Skills Grid */}
        <div className="mt-10 grid grid-cols-1 border-t border-l border-[#E2E0D8] md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => {
            const visibleSkills =
              statusFilter === 'All'
                ? group.skills
                : group.skills.filter((s) => s.status === statusFilter);

            return (
              <div
                key={group.category}
                className="flex flex-col justify-between border-r border-b border-[#E2E0D8] bg-white p-6 md:p-8"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-[#E2E0D8] pb-4">
                    <div>
                      <span className="font-mono-tech text-xs text-[#777777]">
                        {String(groupIndex + 1).padStart(2, '0')}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-semibold text-[#171717]">
                        {group.category}
                      </h3>
                    </div>
                    <span className="font-mono-tech text-xs text-[#777777] shrink-0">
                      {visibleSkills.length} item
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-[#626262]">{group.subtitle}</p>

                  {visibleSkills.length > 0 ? (
                    <ul className="mt-6 divide-y divide-[#E2E0D8]">
                      {visibleSkills.map((skill) => (
                        <li key={skill.name} className="py-3.5 first:pt-0 last:pb-0">
                          <div className="flex items-baseline justify-between gap-4">
                            <span className="text-sm font-medium text-[#171717]">
                              {skill.name}
                            </span>
                            <span
                              className={`font-mono-tech text-xs shrink-0 ${
                                skill.status === 'Practiced'
                                  ? 'font-medium text-[#425D78]'
                                  : skill.status === 'Familiar'
                                    ? 'text-[#171717]'
                                    : 'text-[#777777]'
                              }`}
                            >
                              {skill.status}
                            </span>
                          </div>
                          {skill.focusNote && (
                            <p className="mt-1 text-xs leading-relaxed text-[#777777]">
                              {skill.focusNote}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-6 text-xs text-[#777777]">
                      Tidak ada entri dengan status {statusFilter} pada kategori ini.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
