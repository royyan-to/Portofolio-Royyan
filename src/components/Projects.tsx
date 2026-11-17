import { useMemo, useState } from 'react';
import { FolderOpen } from 'lucide-react';
import { PROJECT_CATEGORIES, projects } from '../data/projects';
import type { ProjectCategory } from '../data/types';
import { ProjectCard } from './ProjectCard';

type ProjectFilter = 'All' | ProjectCategory;

interface ProjectsProps {
  onSelectProject: (slug: string) => void;
}

export function Projects({ onSelectProject }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectFilter>('All');

  const filterTabs: ProjectFilter[] = ['All', ...PROJECT_CATEGORIES];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects;
    }
    return projects.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="border-b border-[#E2E0D8]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#E2E0D8] pb-8 md:flex-row md:items-end">
          <div>
            <span className="font-mono-tech text-xs text-[#425D78]">03</span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#171717] md:text-4xl">
              Projects &amp; Practical Work
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#626262] md:text-base">
              Dokumentasi proyek yang sedang dikembangkan dan praktik teknis dengan keterangan peran serta kontribusi secara jujur.
            </p>
          </div>

          <div className="font-mono-tech text-xs text-[#626262] shrink-0">
            Proyek tercatat: {projects.length}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter kategori proyek"
          className="mt-8 flex flex-wrap items-center gap-2"
        >
          {filterTabs.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
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

        {/* Projects Grid or Honest Empty State */}
        {filteredProjects.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                onSelectProject={onSelectProject}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 border border-[#E2E0D8] bg-[#F0EFE9] p-8 md:p-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex h-11 w-11 items-center justify-center border border-[#C8C5BA] bg-[#F7F6F2] text-[#425D78]">
                  <FolderOpen className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-[#171717]">
                  Belum ada proyek pada kategori {activeCategory}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#626262]">
                  Belum ada proyek yang tercatat untuk kategori{' '}
                  <span className="font-medium text-[#171717]">{activeCategory}</span>. Anda dapat memilih kategori lain atau menambahkan proyek baru pada{' '}
                  <span className="font-mono-tech text-[#171717]">src/data/projects.ts</span>.
                </p>
              </div>

              {activeCategory !== 'All' && (
                <button
                  type="button"
                  onClick={() => setActiveCategory('All')}
                  className="min-h-[44px] border border-[#C8C5BA] bg-white px-5 py-2.5 text-xs font-medium text-[#171717] transition-colors hover:border-[#171717] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Tampilkan Semua Proyek
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
