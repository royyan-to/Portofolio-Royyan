import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { Reveal } from './Reveal';

export function Contact() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedLabel(label);
      window.setTimeout(() => {
        setCopiedLabel((current) => (current === label ? null : current));
      }, 2000);
    } catch {
      // Clipboard API fallback ignored silently if blocked
    }
  };

  return (
    <section
      id="contact"
      className="border-b border-[#E2E0D8] transition-colors duration-300 dark:border-[#282C34]"
    >
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <Reveal className="lg:col-span-5">
            <span className="font-mono-tech text-xs text-[#425D78] dark:text-[#7E9BB8]">05</span>
            <h2 className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-[#171717] dark:text-[#F1F0EA] md:text-3xl">
              Let&apos;s Connect.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#626262] dark:text-[#B4B2AA] md:text-base">
              Terbuka untuk terhubung, bertukar pengalaman belajar seputar jaringan komputer, keamanan siber, maupun proyek teknologi informasi.
            </p>
          </Reveal>

          {/* Right Column: Structured Contact Rows */}
          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="divide-y divide-[#E2E0D8] border border-[#E2E0D8] bg-white transition-colors duration-300 dark:divide-[#282C34] dark:border-[#282C34] dark:bg-[#1A1D23]">
              {profile.contacts.map((contact) => {
                const isCopied = copiedLabel === contact.label;
                const isMailto = Boolean(contact.href?.startsWith('mailto:'));
                const isExternal = Boolean(contact.href?.startsWith('http'));

                return (
                  <div
                    key={contact.label}
                    className="flex flex-col justify-between gap-3 px-5 py-4 transition-colors duration-150 hover:bg-[#FAF9F6] dark:hover:bg-[#1E222A] sm:flex-row sm:items-center"
                  >
                    <div className="min-w-0">
                      <span className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#777777] dark:text-[#8C8B84]">
                        {contact.label}
                      </span>

                      {contact.href && !contact.isPlaceholder ? (
                        <a
                          href={contact.href}
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          className="group mt-0.5 inline-flex items-center gap-1.5 font-display text-sm font-medium text-[#171717] transition-colors hover:text-[#425D78] dark:text-[#F1F0EA] dark:hover:text-[#7E9BB8] break-all md:text-base"
                        >
                          <span>{contact.value}</span>
                          {isMailto ? (
                            <Mail
                              className="h-4 w-4 shrink-0 text-[#425D78] transition-transform duration-150 group-hover:translate-x-0.5 dark:text-[#7E9BB8]"
                              aria-hidden="true"
                            />
                          ) : (
                            <ArrowUpRight
                              className="h-4 w-4 shrink-0 text-[#425D78] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-[#7E9BB8]"
                              aria-hidden="true"
                            />
                          )}
                        </a>
                      ) : (
                        <p className="mt-0.5 font-display text-sm font-medium text-[#171717] dark:text-[#F1F0EA] break-all md:text-base">
                          {contact.value}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleCopy(contact.label, contact.value)}
                        aria-label={`Salin ${contact.label}`}
                        className="inline-flex min-h-[38px] items-center gap-1.5 border border-[#E2E0D8] bg-[#F7F6F2] px-3.5 py-1.5 text-xs font-medium text-[#171717] transition-all duration-150 hover:border-[#171717] active:scale-[0.97] dark:border-[#282C34] dark:bg-[#15181D] dark:text-[#F1F0EA] dark:hover:border-[#7E9BB8] whitespace-nowrap cursor-pointer"
                      >
                        {isCopied ? (
                          <>
                            <Check
                              className="h-3.5 w-3.5 text-[#425D78] dark:text-[#7E9BB8]"
                              aria-hidden="true"
                            />
                            <span>Tersalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>Salin</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
