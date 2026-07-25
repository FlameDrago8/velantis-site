import Link from "next/link";
import type { ReactNode } from "react";

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
    <main className="mx-auto max-w-2xl px-6 py-20 md:py-28">
      <Link
        href="/"
        className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase transition-colors hover:text-ink"
      >
        ← Velantis
      </Link>
      <h1 className="mt-12 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h1>
      {effectiveDate ? (
        <p className="mt-4 font-mono text-[11px] tracking-[0.18em] text-faint uppercase">
          Effective Date: {effectiveDate}
        </p>
      ) : null}
      <div className="legal-prose mt-10">{children}</div>
      <nav className="mt-20 flex flex-wrap gap-x-7 gap-y-3 border-t border-hairline pt-8 font-mono text-[11px] tracking-[0.18em] uppercase">
        {legalPages
          .filter((page) => page.href !== current)
          .map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="text-muted transition-colors hover:text-ink"
            >
              {page.label}
            </Link>
          ))}
      </nav>
    </main>
  );
}
