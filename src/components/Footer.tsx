import Link from "next/link";

import { Wordmark } from "@/components/brand/Logo";

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/license", label: "License" },
];

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6">
        <Wordmark className="h-auto w-full text-ink" />
        <div className="mt-12 flex flex-col gap-6 border-t border-rule pt-6 md:flex-row md:items-center md:justify-between">
          <span className="label text-faint">&copy; 2026 Velantis LLC</span>
          <nav className="flex gap-7">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="label text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <span className="label text-faint">velantisco.com</span>
        </div>
      </div>
    </footer>
  );
}
