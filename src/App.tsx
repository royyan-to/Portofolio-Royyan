/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { About } from './components/About';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { LearningJourney } from './components/LearningJourney';
import { Navbar } from './components/Navbar';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { projects } from './data/projects';

function parseProjectSlug(pathname: string): string | null {
  const match = pathname.match(/^\/projects\/([^/]+)\/?$/);
  return match ? decodeURIComponent(match[1]) : null;
}

export default function App() {
  const [activeProjectSlug, setActiveProjectSlug] = useState<string | null>(() =>
    parseProjectSlug(window.location.pathname)
  );

  useEffect(() => {
    const handlePopState = () => {
      setActiveProjectSlug(parseProjectSlug(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToSection = (sectionId: string) => {
    if (activeProjectSlug !== null) {
      window.history.pushState({}, '', `/#${sectionId}`);
      setActiveProjectSlug(null);
      window.setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 40);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToProject = (slug: string) => {
    window.history.pushState({}, '', `/projects/${encodeURIComponent(slug)}`);
    setActiveProjectSlug(slug);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleBackToProjects = () => {
    window.history.pushState({}, '', '/#projects');
    setActiveProjectSlug(null);
    window.setTimeout(() => {
      const element = document.getElementById('projects');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 40);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedProject = activeProjectSlug
    ? projects.find((item) => item.slug === activeProjectSlug) ?? null
    : null;

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#171717]">
      <Navbar
        onNavigateSection={navigateToSection}
        isDetailPage={activeProjectSlug !== null}
      />

      {activeProjectSlug !== null ? (
        <ProjectDetailPage
          project={selectedProject}
          onBackToProjects={handleBackToProjects}
        />
      ) : (
        <main>
          <Hero
            onExploreWork={() => navigateToSection('projects')}
            onContact={() => navigateToSection('contact')}
            onJumpTo={navigateToSection}
          />
          <About />
          <Certifications />
          <Projects onSelectProject={navigateToProject} />
          <Skills />
          <LearningJourney />
          <Contact />
        </main>
      )}

      <Footer onBackToTop={handleBackToTop} />
    </div>
  );
}
