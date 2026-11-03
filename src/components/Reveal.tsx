"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Adds .is-visible the first time the element enters the viewport. The
 * motion itself lives in globals.css (.reveal, .scale-tick, .strip-draw),
 * which collapses to a plain fade under prefers-reduced-motion.
 * Pass plain={true} to arm child animations without fading the wrapper.
 */
export default function Reveal({
  children,
  delay = 0,
  plain = false,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  plain?: boolean;
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
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${plain ? "" : "reveal "}${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
