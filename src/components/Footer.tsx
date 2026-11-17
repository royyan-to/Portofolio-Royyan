import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onBackToTop: () => void;
}

export function Footer({ onBackToTop }: FooterProps) {
  return (
    <footer className="bg-[#F7F6F2]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center lg:px-10">
        <p className="text-sm text-[#626262]">
          © 2026 Royyan Abdurrahman. All rights reserved.
        </p>

        <button
          type="button"
          onClick={onBackToTop}
          className="inline-flex min-h-[40px] items-center gap-2 text-sm font-medium text-[#171717] transition-colors hover:text-[#425D78] cursor-pointer"
        >
          <span>Kembali ke atas</span>
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
