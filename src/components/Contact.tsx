import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { profile } from '../data/profile';

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
    <section id="contact" className="border-b border-[#E2E0D8]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <span className="font-mono-tech text-xs text-[#425D78]">06</span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#171717] md:text-4xl">
              Let&apos;s Connect.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#626262]">
              Terbuka untuk terhubung, bertukar pengalaman belajar seputar jaringan komputer, keamanan siber, maupun proyek teknologi informasi.
            </p>
          </div>

          {/* Right Column: Structured Contact Rows */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#E2E0D8] border-t border-b border-[#E2E0D8] bg-white">
              {profile.contacts.map((contact) => {
                const isCopied = copiedLabel === contact.label;
                const isMailto = Boolean(contact.href?.startsWith('mailto:'));
                const isExternal = Boolean(contact.href?.startsWith('http'));

                return (
                  <div
                    key={contact.label}
                    className="flex flex-col justify-between gap-4 px-6 py-5 sm:flex-row sm:items-center"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-xs text-[#777777]">
                        <span className="font-mono-tech uppercase tracking-wider">
                          {contact.label}
                        </span>
                      </div>

                      {contact.href && !contact.isPlaceholder ? (
                        <a
                          href={contact.href}
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          className="mt-1 inline-flex items-center gap-1.5 font-display text-base font-medium text-[#171717] transition-colors hover:text-[#425D78] break-all"
                        >
                          <span>{contact.value}</span>
                          {isMailto ? (
                            <Mail className="h-4 w-4 shrink-0 text-[#425D78]" aria-hidden="true" />
                          ) : (
                            <ArrowUpRight className="h-4 w-4 shrink-0 text-[#425D78]" aria-hidden="true" />
                          )}
                        </a>
                      ) : (
                        <p className="mt-1 font-display text-base font-medium text-[#171717] break-all">
                          {contact.value}
                        </p>
                      )}

                      <p className="mt-1 text-xs text-[#777777]">{contact.helperText}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleCopy(contact.label, contact.value)}
                        aria-label={`Salin ${contact.label}`}
                        className="inline-flex min-h-[40px] items-center gap-2 border border-[#E2E0D8] bg-[#F7F6F2] px-4 py-2 text-xs font-medium text-[#171717] transition-colors hover:border-[#171717] whitespace-nowrap cursor-pointer"
                      >
                        {isCopied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-[#425D78]" aria-hidden="true" />
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
          </div>
        </div>
      </div>
    </section>
  );
}
