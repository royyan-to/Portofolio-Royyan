/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { About } from './components/About';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { ScrollProgressBar } from './components/Reveal';
import { Skills } from './components/Skills';

const SECTION_IDS = ['home', 'about', 'projects', 'certificates', 'skills', 'contact'] as const;

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  try {
    const saved = window.localStorage.getItem('portfolio-theme');
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
  } catch {
    // Ignore storage access errors
  }
  return 'light';
}

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // Ignore storage access errors
    }
  }, [theme]);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsScrolled(scrollPosition > 16);
      setShowBackToTop(scrollPosition > 340);

      if (scrollPosition + windowHeight >= documentHeight - 40) {
        setActiveSection('contact');
        return;
      }

      const offset = 120;
      let current = 'home';

      for (const id of SECTION_IDS) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top <= offset) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  const navigateToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackToTop = () => {
    setActiveSection('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#F7F6F2] text-[#171717] transition-colors duration-300 dark:bg-[#0F1114] dark:text-[#F1F0EA]">
        {/* Subtle Minimal Swiss Grid & Soft Drifting Ambient Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
          <div className="swiss-grid-bg absolute inset-0 opacity-75" />
          <div
            className="ambient-drift absolute -top-[20%] right-[-10%] h-[520px] w-[520px] rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(circle, var(--ambient-glow) 0%, transparent 70%)',
            }}
          />
        </div>

        {/* Top Scroll Progress Indicator */}
        <ScrollProgressBar />

        <div className="relative z-10">
          <Navbar
            activeSection={activeSection}
            onNavigateSection={navigateToSection}
            isScrolled={isScrolled}
            theme={theme}
            onToggleTheme={handleToggleTheme}
          />

          <main>
            <Hero
              onViewProjects={() => navigateToSection('projects')}
              onContact={() => navigateToSection('contact')}
            />
            <About />
            <Projects />
            <Certifications />
            <Skills />
            <Contact />
          </main>

          <Footer onBackToTop={handleBackToTop} />
        </div>

        {/* Floating Back to Top Button (appears after scrolling) */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              type="button"
              onClick={handleBackToTop}
              aria-label="Kembali ke atas"
              title="Kembali ke atas"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-5 bottom-5 z-30 inline-flex h-11 w-11 items-center justify-center border border-[#C8C5BA] bg-white/95 text-[#171717] backdrop-blur-sm transition-colors duration-150 hover:border-[#425D78] hover:text-[#425D78] active:scale-95 dark:border-[#3B414D] dark:bg-[#1A1D23]/95 dark:text-[#F1F0EA] dark:hover:border-[#7E9BB8] dark:hover:text-[#7E9BB8] cursor-pointer"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
