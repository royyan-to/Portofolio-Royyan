import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onBackToTop: () => void;
}

export function Footer({ onBackToTop }: FooterProps) {
  return (
    <footer className="bg-[#F7F6F2] transition-colors duration-300 dark:bg-[#0F1114]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-6 sm:flex-row sm:items-center lg:px-10">
        <p className="text-xs text-[#626262] dark:text-[#B4B2AA] sm:text-sm">
          © 2026 Royyan Abdurrahman. All rights reserved.
        </p>

        <button
          type="button"
          onClick={onBackToTop}
          className="group inline-flex min-h-[40px] items-center gap-2 text-xs font-medium text-[#171717] transition-colors hover:text-[#425D78] dark:text-[#F1F0EA] dark:hover:text-[#7E9BB8] sm:text-sm cursor-pointer"
        >
          <span>Kembali ke atas</span>
          <ArrowUp
            className="h-4 w-4 transition-transform duration-150 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </button>
      </div>
    </footer>
  );
}
