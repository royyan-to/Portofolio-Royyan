import { useState } from 'react';
import { skillGroups } from '../data/skills';

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoryTabs = ['All', ...skillGroups.map((group) => group.category)];

  const visibleGroups =
    selectedCategory === 'All'
      ? skillGroups
      : skillGroups.filter((group) => group.category === selectedCategory);

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
              Teknologi, alat, dan topik dasar yang sedang dipelajari dan dipraktikkan pada tingkat{' '}
              <span className="font-medium text-[#171717]">Beginner / Basic</span> tanpa persentase atau klaim penguasaan berlebihan.
            </p>
          </div>

          <div className="font-mono-tech text-xs text-[#425D78] shrink-0">
            Level saat ini: Beginner / Basic
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter kategori keterampilan teknis"
          className="mt-8 flex flex-wrap items-center gap-2"
        >
          {categoryTabs.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category)}
                className={`min-h-[40px] border px-4 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'border-[#171717] bg-[#171717] text-[#F7F6F2]'
                    : 'border-[#E2E0D8] bg-white text-[#626262] hover:border-[#171717] hover:text-[#171717]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* 2x2 Swiss Architectural Skills Grid */}
        <div
          className={`mt-10 grid grid-cols-1 border-t border-l border-[#E2E0D8] ${
            visibleGroups.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1'
          }`}
        >
          {visibleGroups.map((group, groupIndex) => (
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
                    {group.skills.length} item
                  </span>
                </div>

                <p className="mt-3 text-sm text-[#626262]">{group.subtitle}</p>

                <ul className="mt-6 divide-y divide-[#E2E0D8]">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="py-3.5 first:pt-0 last:pb-0">
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-sm font-medium text-[#171717]">
                          {skill.name}
                        </span>
                        <span className="font-mono-tech text-xs text-[#425D78] shrink-0">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
