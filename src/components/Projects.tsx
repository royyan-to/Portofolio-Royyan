import { useState } from 'react';
import { projects } from '../data/projects';
import type { ProjectItem } from '../data/types';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Reveal } from './Reveal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featuredProject = projects.find((p) => p.featured) ?? projects[0] ?? null;
  const secondaryProjects = projects.filter((p) => p.slug !== featuredProject?.slug);

  return (
    <section
      id="projects"
      className="border-b border-[#E2E0D8] transition-colors duration-300 dark:border-[#282C34]"
    >
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16 lg:px-10">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col justify-between gap-4 border-b border-[#E2E0D8] pb-6 dark:border-[#282C34] md:flex-row md:items-end">
            <div>
              <span className="font-mono-tech text-xs text-[#425D78] dark:text-[#7E9BB8]">02</span>
              <h2 className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-[#171717] dark:text-[#F1F0EA] md:text-3xl">
                Projects &amp; Practical Work
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#626262] dark:text-[#B4B2AA]">
                Proyek utama yang sedang dikembangkan dengan dokumentasi peran dan kontribusi secara jujur.
              </p>
            </div>

            <span className="font-mono-tech text-xs text-[#626262] dark:text-[#B4B2AA] shrink-0">
              Proyek tercatat: {projects.length}
            </span>
          </div>
        </Reveal>

        {/* Featured Project */}
        {featuredProject && (
          <Reveal delay={0.08} className="mt-8">
            <ProjectCard
              project={featuredProject}
              featuredLayout
              onViewDetails={setSelectedProject}
            />
          </Reveal>
        )}

        {/* Additional Projects if added later */}
        {secondaryProjects.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {secondaryProjects.map((project, idx) => (
              <Reveal key={project.slug} delay={idx * 0.06}>
                <ProjectCard project={project} onViewDetails={setSelectedProject} />
              </Reveal>
            ))}
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
