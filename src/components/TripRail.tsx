"use client";

import { useEffect, useRef, useState } from "react";

/** Sections the rail ticks against, in page order. */
const STOPS = [
  { id: "drive", label: "Drive" },
  { id: "next", label: "Ahead" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

/**
 * The page read as a trip. A hairline rail down the left edge fills with
 * scroll progress and ticks at each section — the site's own odometer.
 * Motion is scroll-driven only; at rest the rail is completely still.
 */
export default function TripRail() {
  const fillRef = useRef<HTMLDivElement>(null);
  const [stops, setStops] = useState<{ id: string; label: string; at: number }[]>(
    [],
  );
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const measure = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      setStops(
        STOPS.flatMap((stop) => {
          const el = document.getElementById(stop.id);
          if (!el) return [];
          const at = Math.min(
            1,
            Math.max(0, el.getBoundingClientRect().top + window.scrollY) /
              scrollable,
          );
          return [{ ...stop, at }];
        }),
      );
    };

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const scrollable = document.body.scrollHeight - window.innerHeight;
        const p = scrollable > 0 ? window.scrollY / scrollable : 0;
        const clamped = Math.min(1, Math.max(0, p));
        // Transform directly on the element — setting a CSS var on the
        // parent would recalc every child on each frame.
        if (fillRef.current) {
          fillRef.current.style.transform = `scaleY(${clamped})`;
        }
        setProgress(clamped);
      });
    };

    measure();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 bottom-0 left-5 z-30 hidden w-8 transition-opacity duration-500 md:block"
      // An empty track over the hero reads as a stray rule. The odometer
      // only exists once the trip has started.
      style={{ opacity: progress > 0.01 ? 1 : 0 }}
    >
      <div className="absolute top-24 bottom-24 left-0 w-px bg-hairline">
        <div
          ref={fillRef}
          className="absolute inset-0 origin-top bg-accent"
          style={{ transform: "scaleY(0)" }}
        />
        {stops.map((stop) => {
          const passed = progress >= stop.at - 0.001;
          return (
            <div
              key={stop.id}
              className="absolute -left-1"
              style={{ top: `${stop.at * 100}%` }}
            >
              <span
                className={`block h-px w-2.5 transition-colors duration-300 ${
                  passed ? "bg-accent" : "bg-hairline-strong"
                }`}
              />
              <span
                className={`absolute top-1/2 left-4 -translate-y-1/2 font-mono text-[9px] tracking-[0.2em] whitespace-nowrap uppercase transition-colors duration-300 ${
                  passed ? "text-muted" : "text-transparent"
                }`}
              >
                {stop.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
