"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Reveals content on first entry into the viewport. Motion lives in
 * globals.css, which collapses to a pure opacity fade under
 * prefers-reduced-motion.
 *
 * "rise" is the workhorse fade-up. "wipe" clips a headline up from its own
 * baseline — reserved for one line per section so it stays an event.
 */
export default function Reveal({
  children,
  delay = 0,
  variant = "rise",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  variant?: "rise" | "wipe";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${variant === "wipe" ? "reveal-wipe" : "reveal"} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
