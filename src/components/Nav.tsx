"use client";

import { useEffect, useState } from "react";

import { Mark, Wordmark } from "@/components/brand/Logo";

const links = [
  { href: "#drive", label: "Drive" },
  { href: "#programs", label: "Programs" },
  { href: "#company", label: "Company" },
];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = [...links, { href: "#contact" }]
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-rule bg-bg">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label="Velantis, back to top"
        >
          <Mark className="h-5 w-auto text-ink" />
          <Wordmark cut="small" className="hidden h-[11px] w-auto text-ink sm:block" />
        </a>

        <div className="flex items-center gap-5 sm:gap-8">
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                className={`label transition-colors duration-200 ${
                  active === link.href ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="pressable label border border-rule-strong px-3.5 py-2 text-ink hover:border-tint hover:text-tint"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
