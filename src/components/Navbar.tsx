import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

interface NavbarProps {
  onNavigateSection: (sectionId: string) => void;
  isDetailPage?: boolean;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const;

export function Navbar({ onNavigateSection, isDetailPage = false }: NavbarProps) {
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
    <header className="sticky top-0 z-40 border-b border-[#E2E0D8] bg-[#F7F6F2]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6 lg:px-10">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="font-display text-base font-semibold tracking-tight text-[#171717] transition-colors hover:text-[#425D78] whitespace-nowrap shrink-0"
        >
          {profile.name}
        </a>

        {/* Zone 2: Single-line Navigation Links */}
        <nav aria-label="Navigasi utama" className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={isDetailPage ? `/#${item.id}` : `#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.id);
              }}
              className="relative py-1 text-sm font-medium text-[#626262] transition-colors duration-150 hover:text-[#171717] whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#425D78] after:transition-all after:duration-200 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action / Mobile Trigger */}
        <div className="flex items-center shrink-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact');
            }}
            className="hidden md:inline-flex items-center justify-center border border-[#171717] bg-[#171717] px-4 py-2 text-xs font-medium tracking-wide text-[#F7F6F2] transition-colors duration-150 hover:border-[#425D78] hover:bg-[#425D78] whitespace-nowrap shrink-0"
          >
            Contact Me
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="inline-flex h-11 w-11 items-center justify-center border border-[#E2E0D8] text-[#171717] transition-colors hover:border-[#171717] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Navigasi seluler"
          className="border-t border-[#E2E0D8] bg-[#F7F6F2] px-6 py-4 md:hidden"
        >
          <ul className="divide-y divide-[#E2E0D8]">
            {NAV_ITEMS.map((item, idx) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                  className="flex min-h-[44px] items-center justify-between py-2.5 text-sm font-medium text-[#171717] transition-colors hover:text-[#425D78]"
                >
                  <span>{item.label}</span>
                  <span className="font-mono-tech text-xs text-[#777777]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
