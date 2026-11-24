import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { skillGroups } from '../data/skills';
import { Reveal } from './Reveal';

const SWISS_EASE = [0.16, 1, 0.3, 1] as const;

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const prefersReduced = useReducedMotion();

  const categoryTabs = ['All', ...skillGroups.map((group) => group.category)];

  const visibleGroups =
    selectedCategory === 'All'
      ? skillGroups
      : skillGroups.filter((group) => group.category === selectedCategory);

  return (
    <section
      id="skills"
      className="border-b border-[#E2E0D8] transition-colors duration-300 dark:border-[#282C34]"
    >
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16 lg:px-10">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col justify-between gap-4 border-b border-[#E2E0D8] pb-6 dark:border-[#282C34] md:flex-row md:items-end">
            <div>
              <span className="font-mono-tech text-xs text-[#425D78] dark:text-[#7E9BB8]">04</span>
              <h2 className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-[#171717] dark:text-[#F1F0EA] md:text-3xl">
                Technical Skills
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#626262] dark:text-[#B4B2AA]">
                Keterampilan teknis dasar yang sedang dipelajari dan dipraktikkan pada level{' '}
                <span className="font-medium text-[#171717] dark:text-[#F1F0EA]">
                  Beginner / Basic
                </span>
                .
              </p>
            </div>

            <span className="font-mono-tech text-xs text-[#425D78] dark:text-[#7E9BB8] shrink-0">
              Level: Beginner / Basic
            </span>
          </div>
        </Reveal>

        {/* Category Filter Tabs */}
        <Reveal delay={0.05}>
          <div
            role="tablist"
            aria-label="Filter kategori keterampilan teknis"
            className="mt-6 flex flex-wrap items-center gap-2"
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
                  className={`min-h-[38px] border px-3.5 py-1.5 text-xs font-medium transition-all duration-150 active:scale-[0.97] whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'border-[#171717] bg-[#171717] text-[#F7F6F2] dark:border-[#F1F0EA] dark:bg-[#F1F0EA] dark:text-[#0F1114]'
                      : 'border-[#E2E0D8] bg-white text-[#626262] hover:border-[#171717] hover:text-[#171717] dark:border-[#282C34] dark:bg-[#1A1D23] dark:text-[#B4B2AA] dark:hover:border-[#7E9BB8] dark:hover:text-[#F1F0EA]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Compact 4-Column Desktop / 2-Column Tablet Swiss Grid */}
        <div
          className={`mt-8 grid grid-cols-1 border-t border-l border-[#E2E0D8] dark:border-[#282C34] ${
            visibleGroups.length > 1 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'
          }`}
        >
          {visibleGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={prefersReduced ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.4,
                delay: prefersReduced ? 0 : groupIndex * 0.06,
                ease: SWISS_EASE,
              }}
              className="flex flex-col justify-between border-r border-b border-[#E2E0D8] bg-white p-5 transition-colors duration-200 hover:bg-[#FAF9F6] dark:border-[#282C34] dark:bg-[#1A1D23] dark:hover:bg-[#1E222A]"
            >
              <div>
                <div className="flex items-baseline justify-between gap-2 border-b border-[#E2E0D8] pb-3 dark:border-[#282C34]">
                  <div>
                    <span className="font-mono-tech text-[11px] text-[#777777] dark:text-[#8C8B84]">
                      {String(groupIndex + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-0.5 font-display text-base font-semibold text-[#171717] dark:text-[#F1F0EA]">
                      {group.category}
                    </h3>
                  </div>
                  <span className="font-mono-tech text-[11px] text-[#777777] dark:text-[#8C8B84] shrink-0">
                    {group.skills.length}
                  </span>
                </div>

                <ul className="mt-4 divide-y divide-[#E2E0D8] dark:divide-[#282C34]">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="py-2.5 first:pt-0 last:pb-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-sm font-medium text-[#171717] dark:text-[#F1F0EA]">
                          {skill.name}
                        </span>
                        <span className="font-mono-tech text-[11px] text-[#425D78] dark:text-[#7E9BB8] shrink-0">
                          {skill.status}
                        </span>
                      </div>
                      {skill.focusNote && (
                        <p className="mt-1 text-xs leading-relaxed text-[#777777] dark:text-[#8C8B84]">
                          {skill.focusNote}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
