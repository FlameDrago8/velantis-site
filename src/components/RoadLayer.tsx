"use client";

import { useEffect, useRef } from "react";

const VANISH = { x: 600, y: 40 };
const LANES = [-320, -40, 200, 1000, 1240, 1520];

/**
 * Hairline "road to horizon" — flat vector. Lane markers converge on a
 * vanishing point and the ember center line advances as you scroll, so the
 * page reads as forward motion. Nothing moves while the page is at rest.
 */
export default function RoadLayer() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const dashRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const wrap = wrapRef.current;
    const dash = dashRef.current;
    if (!wrap || !dash) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        wrap.style.transform = `translate3d(0, ${y * 0.3}px, 0)`;
        // Negative offset runs the dashes toward the viewer — driving into
        // the page rather than away from it.
        dash.style.strokeDashoffset = `${-y * 0.6}`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[45svh]"
    >
      <svg
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="h-full w-full"
      >
        <line
          x1="0"
          y1={VANISH.y}
          x2="1200"
          y2={VANISH.y}
          stroke="rgba(244,241,234,0.12)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        {LANES.map((x) => (
          <line
            key={x}
            x1={x}
            y1="400"
            x2={VANISH.x}
            y2={VANISH.y}
            stroke="rgba(244,241,234,0.05)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        {/* Stops above the scroll cue so the dashes never strike the label. */}
        <line
          ref={dashRef}
          x1="600"
          y1="285"
          x2={VANISH.x}
          y2={VANISH.y}
          stroke="rgba(238,132,52,0.3)"
          strokeWidth="2"
          strokeDasharray="16 28"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
