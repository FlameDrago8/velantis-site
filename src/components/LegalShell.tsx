import Link from "next/link";
import type { ReactNode } from "react";

export default function LegalShell({
  title,
  children,
}: {
  title: string;
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
      <h1 className="mt-12 font-display text-4xl font-bold tracking-tight">
        {title}
      </h1>
      <div className="legal-prose mt-10">{children}</div>
    </main>
  );
}
