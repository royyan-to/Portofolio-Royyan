import { useState } from 'react';
import { ArrowLeft, Network } from 'lucide-react';
import type { ProjectItem } from '../data/types';

interface ProjectDetailPageProps {
  project: ProjectItem | null;
  onBackToProjects: () => void;
}

export function ProjectDetailPage({ project, onBackToProjects }: ProjectDetailPageProps) {
  const [imgError, setImgError] = useState(false);

  if (!project) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <button
          type="button"
          onClick={onBackToProjects}
          className="inline-flex min-h-[40px] items-center gap-2 text-sm font-medium text-[#171717] transition-colors hover:text-[#425D78] cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Kembali ke Projects</span>
        </button>

        <div className="mt-10 border border-[#E2E0D8] bg-white p-10">
          <h1 className="font-display text-2xl font-semibold text-[#171717]">
            Proyek tidak ditemukan
          </h1>
          <p className="mt-2 text-sm text-[#626262]">
            Dokumentasi proyek yang diminta belum tersedia atau URL slug telah berubah.
          </p>
        </div>
      </main>
    );
  }

  const hasImage = Boolean(project.image) && !imgError;

  return (
    <main className="mx-auto max-w-5xl px-6 py-14 md:py-20 lg:px-10">
      <button
        type="button"
        onClick={onBackToProjects}
        className="inline-flex min-h-[40px] items-center gap-2 border border-[#E2E0D8] bg-white px-4 py-2 text-xs font-medium text-[#171717] transition-colors hover:border-[#171717] cursor-pointer"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
        <span>Kembali ke Projects</span>
      </button>

      {project.isSamplePlaceholder && (
        <div className="mt-8 border border-dashed border-[#425D78] bg-[#F0EFE9] px-5 py-4 text-sm text-[#171717]">
          <span className="font-semibold">Sample Placeholder:</span> Halaman ini memperlihatkan struktur dokumentasi detail proyek. Data contoh di bawah bukan merupakan proyek nyata yang diklaim telah diselesaikan.
        </div>
      )}

      {/* Header */}
      <header className="mt-8 border-b border-[#E2E0D8] pb-8">
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#626262]">
          <span className="font-medium text-[#425D78]">{project.category}</span>
          <span aria-hidden="true" className="text-[#C8C5BA]">
            ·
          </span>
          <span>Status: {project.status}</span>
          {project.dateLabel && (
            <>
              <span aria-hidden="true" className="text-[#C8C5BA]">
                ·
              </span>
              <span className="font-mono-tech">{project.dateLabel}</span>
            </>
          )}
        </div>

        <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-[#171717] md:text-4xl">
          {project.title}
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#626262]">
          {project.shortDescription}
        </p>
      </header>

      {/* Media / Topology Visual */}
      <div className="mt-10 border border-[#E2E0D8] bg-white p-3 md:p-4">
        {hasImage ? (
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="max-h-[480px] w-full object-contain bg-[#F7F6F2]"
          />
        ) : (
          <div className="flex min-h-[240px] flex-col items-center justify-center bg-[#F0EFE9] px-6 py-12 text-center">
            <Network className="h-9 w-9 text-[#425D78] stroke-[1.5]" aria-hidden="true" />
            <p className="mt-3 font-display text-sm font-medium text-[#171717]">
              Area Screenshot atau Diagram Topologi
            </p>
            <p className="mt-1 max-w-md text-xs leading-relaxed text-[#626262]">
              Simpan gambar topologi atau tangkapan layar konfigurasi di{' '}
              <span className="font-mono-tech">public/projects/</span> lalu tautkan melalui properti{' '}
              <span className="font-mono-tech">image</span> pada{' '}
              <span className="font-mono-tech">src/data/projects.ts</span>.
            </p>
          </div>
        )}
      </div>

      {/* Technical Breakdown Grid */}
      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="space-y-10 lg:col-span-8">
          <section aria-labelledby="project-objective-heading">
            <h2
              id="project-objective-heading"
              className="font-display text-lg font-semibold text-[#171717]"
            >
              Masalah &amp; Tujuan
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#4A4A4A]">
              {project.objective}
            </p>
          </section>

          <section
            aria-labelledby="project-implementation-heading"
            className="border-t border-[#E2E0D8] pt-8"
          >
            <h2
              id="project-implementation-heading"
              className="font-display text-lg font-semibold text-[#171717]"
            >
              Ringkasan Implementasi
            </h2>
            <ol className="mt-4 space-y-3">
              {project.implementationOverview.map((step, index) => (
                <li key={index} className="flex items-start gap-4 text-sm leading-relaxed text-[#4A4A4A] md:text-base">
                  <span className="font-mono-tech pt-0.5 text-xs text-[#425D78] shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section
            aria-labelledby="project-outcomes-heading"
            className="border-t border-[#E2E0D8] pt-8"
          >
            <h2
              id="project-outcomes-heading"
              className="font-display text-lg font-semibold text-[#171717]"
            >
              Hasil Pembelajaran
            </h2>
            <ul className="mt-4 space-y-2.5">
              {project.learningOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3 text-sm leading-relaxed text-[#4A4A4A] md:text-base">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 bg-[#425D78] shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Column Specifications */}
        <aside className="lg:col-span-4">
          <div className="border border-[#E2E0D8] bg-white p-6">
            <h2 className="font-display text-sm font-semibold text-[#171717]">
              Spesifikasi Proyek
            </h2>
            <dl className="mt-5 divide-y divide-[#E2E0D8] text-sm">
              <div className="py-3">
                <dt className="text-xs text-[#777777]">Kategori</dt>
                <dd className="mt-1 font-medium text-[#171717]">{project.category}</dd>
              </div>
              <div className="py-3">
                <dt className="text-xs text-[#777777]">Status</dt>
                <dd className="mt-1 font-medium text-[#171717]">{project.status}</dd>
              </div>
              <div className="py-3">
                <dt className="text-xs text-[#777777]">Teknologi &amp; Perangkat</dt>
                <dd className="mt-2 space-y-1 font-mono-tech text-xs text-[#425D78]">
                  {project.technologies.map((tech) => (
                    <div key={tech}>{tech}</div>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </main>
  );
}
