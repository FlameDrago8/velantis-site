import Reveal from "@/components/Reveal";
import RoadLayer from "@/components/RoadLayer";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6"
    >
      <RoadLayer />

      {/* Lifted clear of the horizon line so the road never crosses the copy. */}
      <div className="relative flex -translate-y-[9svh] flex-col items-center text-center">
        <Reveal variant="wipe">
          <h1 className="font-display text-[clamp(4rem,14vw,11rem)] leading-none font-bold tracking-[-0.03em]">
            Velantis<span className="text-accent">.</span>
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            Building AI-native products, starting with how people learn to
            drive.
          </p>
        </Reveal>
      </div>

      <a
        href="#drive"
        className="group absolute bottom-8 flex flex-col items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-faint uppercase transition-colors duration-200 hover:text-muted"
      >
        Scroll
        <span className="relative block h-8 w-px overflow-hidden bg-hairline-strong">
          {/* Ember runs the length of the tick on hover — the page's one
              invitation to move. */}
          <span className="absolute inset-0 origin-top scale-y-0 bg-accent transition-transform duration-500 [transition-timing-function:var(--ease-out)] group-hover:scale-y-100" />
        </span>
      </a>
    </section>
  );
}
