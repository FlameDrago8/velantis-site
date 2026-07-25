import Parallax from "@/components/Parallax";
import Reveal from "@/components/Reveal";

/**
 * Hairline "road to horizon" — flat vector, static. Lane markers converge on
 * a vanishing point; the only color is a faint ember center line.
 */
function RoadHorizon() {
  const vp = { x: 600, y: 40 };
  const lanes = [-320, -40, 200, 1000, 1240, 1520];
  return (
    <svg
      viewBox="0 0 1200 400"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="h-full w-full"
    >
      <line
        x1="0"
        y1={vp.y}
        x2="1200"
        y2={vp.y}
        stroke="rgba(242,239,233,0.12)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      {lanes.map((x) => (
        <line
          key={x}
          x1={x}
          y1="400"
          x2={vp.x}
          y2={vp.y}
          stroke="rgba(242,239,233,0.05)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      ))}
      <line
        x1="600"
        y1="400"
        x2={vp.x}
        y2={vp.y}
        stroke="rgba(238,132,52,0.3)"
        strokeWidth="2"
        strokeDasharray="16 28"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6"
    >
      <Parallax
        speed={0.3}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[45svh]"
      >
        <RoadHorizon />
      </Parallax>

      <div className="relative flex flex-col items-center text-center">
        <Reveal>
          <h1 className="font-display text-[clamp(4rem,14vw,11rem)] leading-none font-bold tracking-[-0.03em]">
            Velantis<span className="text-accent">.</span>
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            Building AI-native products, starting with how people learn to
            drive.
          </p>
        </Reveal>
      </div>

      <a
        href="#drive"
        className="absolute bottom-8 flex flex-col items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-faint uppercase transition-colors hover:text-muted"
      >
        Scroll
        <span className="block h-8 w-px bg-hairline-strong" />
      </a>
    </section>
  );
}
