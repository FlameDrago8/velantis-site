import Link from "next/link";

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/license", label: "License" },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <span className="font-display text-xs font-bold tracking-[0.3em] text-muted">
          VELANTIS
        </span>
        <nav className="flex gap-7 font-mono text-[11px] tracking-[0.18em] uppercase">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <span className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">
          © 2026 Velantis
        </span>
      </div>
    </footer>
  );
}
