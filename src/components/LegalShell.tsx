import Link from "next/link";
import type { ReactNode } from "react";

import { Mark, Wordmark } from "@/components/brand/Logo";

const legalPages = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/license", label: "License" },
];

export default function LegalShell({
  title,
  effectiveDate,
  current,
  children,
}: {
  title: string;
  effectiveDate?: string;
  current?: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="border-b border-rule">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3" aria-label="Velantis home">
            <Mark className="h-5 w-auto text-ink" />
            <Wordmark cut="small" className="h-[11px] w-auto text-ink" />
          </Link>
          <nav className="flex gap-6">
            {legalPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                aria-current={page.href === current ? "page" : undefined}
                className={`label transition-colors ${
                  page.href === current ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {page.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 md:py-24">
        <span className="label text-faint">Legal</span>
        <h1 className="display mt-6 text-balance text-3xl md:text-4xl">{title}</h1>
        {effectiveDate ? (
          <p className="label mt-5 text-muted">Effective {effectiveDate}</p>
        ) : null}
        <div className="legal-prose mt-12">{children}</div>
        <div className="mt-20 border-t border-rule pt-6">
          <Link href="/" className="label text-muted transition-colors hover:text-ink">
            &larr; Velantis
          </Link>
        </div>
      </main>
    </>
  );
}
