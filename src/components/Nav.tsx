"use client";

import { useEffect, useState } from "react";

// "What's Next" drops out below sm so the row fits a phone without a menu.
const links = [
  { href: "#drive", label: "Drive", mobile: true },
  { href: "#next", label: "What's Next", mobile: false },
  { href: "#about", label: "About", mobile: true },
  { href: "#contact", label: "Contact", mobile: true },
];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // The section closest to the top edge wins, so the label tracks
        // reading position rather than flickering between neighbours.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-hairline bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-sm font-bold tracking-[0.3em] transition-colors duration-200 hover:text-accent"
        >
          VELANTIS
        </a>
        <div className="flex items-center gap-4 font-mono text-[11px] tracking-[0.18em] uppercase sm:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "true" : undefined}
              className={`${link.mobile ? "" : "hidden sm:inline "}relative transition-colors duration-200 ${
                active === link.href ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
              <span
                aria-hidden="true"
                className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-accent transition-transform duration-300 [transition-timing-function:var(--ease-out)] ${
                  active === link.href ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
