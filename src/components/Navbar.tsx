import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { profile } from '../data/profile';

interface NavbarProps {
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
  isScrolled: boolean;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const;

export function Navbar({
  activeSection,
  onNavigateSection,
  isScrolled,
  theme,
  onToggleTheme,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = (sectionId: string) => {
    setMobileOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 backdrop-blur-md ${
        isScrolled
          ? 'border-[#E2E0D8] bg-[#F7F6F2]/95 dark:border-[#282C34] dark:bg-[#0F1114]/95'
          : 'border-[#E2E0D8]/70 bg-[#F7F6F2]/75 dark:border-[#282C34]/70 dark:bg-[#0F1114]/75'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6 lg:px-10">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="font-display text-base font-semibold tracking-tight text-[#171717] transition-colors hover:text-[#425D78] dark:text-[#F1F0EA] dark:hover:text-[#7E9BB8] whitespace-nowrap shrink-0"
        >
          {profile.name}
        </a>

        {/* Zone 2: Single-line Navigation Links with Active Indicator */}
        <nav aria-label="Navigasi utama" className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'location' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className={`relative py-1.5 text-sm transition-colors duration-150 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'font-semibold text-[#171717] dark:text-[#F1F0EA]'
                    : 'font-medium text-[#626262] hover:text-[#171717] dark:text-[#B4B2AA] dark:hover:text-[#F1F0EA]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                    className="absolute right-0 bottom-0 left-0 h-[1.5px] bg-[#425D78] dark:bg-[#7E9BB8]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Theme Toggle, Primary Action / Mobile Trigger */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              theme === 'dark' ? 'Aktifkan mode terang (Light Mode)' : 'Aktifkan mode gelap (Dark Mode)'
            }
            title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            className="inline-flex h-10 w-10 items-center justify-center border border-[#E2E0D8] bg-white text-[#171717] transition-all duration-150 hover:border-[#171717] active:scale-95 dark:border-[#282C34] dark:bg-[#1A1D23] dark:text-[#F1F0EA] dark:hover:border-[#7E9BB8] cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-[#7E9BB8]" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4 text-[#425D78]" aria-hidden="true" />
            )}
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact');
            }}
            className="hidden md:inline-flex items-center justify-center border border-[#171717] bg-[#171717] px-4 py-2 text-xs font-medium tracking-wide text-[#F7F6F2] transition-all duration-150 hover:border-[#425D78] hover:bg-[#425D78] active:scale-[0.98] dark:border-[#F1F0EA] dark:bg-[#F1F0EA] dark:text-[#0F1114] dark:hover:border-[#7E9BB8] dark:hover:bg-[#7E9BB8] whitespace-nowrap shrink-0"
          >
            Contact Me
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="inline-flex h-10 w-10 items-center justify-center border border-[#E2E0D8] bg-white text-[#171717] transition-colors hover:border-[#171717] dark:border-[#282C34] dark:bg-[#1A1D23] dark:text-[#F1F0EA] md:hidden cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-navigation-drawer"
            aria-label="Navigasi seluler"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-[#E2E0D8] bg-[#F7F6F2] px-6 py-3 dark:border-[#282C34] dark:bg-[#0F1114] md:hidden"
          >
            <ul className="divide-y divide-[#E2E0D8] dark:divide-[#282C34]">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'location' : undefined}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.id);
                      }}
                      className={`flex min-h-[44px] items-center justify-between py-2 text-sm transition-colors ${
                        isActive
                          ? 'font-semibold text-[#425D78] dark:text-[#7E9BB8]'
                          : 'font-medium text-[#171717] hover:text-[#425D78] dark:text-[#F1F0EA] dark:hover:text-[#7E9BB8]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="font-mono-tech text-xs text-[#777777] dark:text-[#8C8B84]">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
