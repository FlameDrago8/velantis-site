import AppStoreBadge from "@/components/AppStoreBadge";
import Eyebrow from "@/components/Eyebrow";
import PhoneMock from "@/components/PhoneMock";
import Reveal from "@/components/Reveal";

const features = [
  {
    n: "01",
    title: "Real-time coaching",
    body: "Spoken guidance in the moment — braking, spacing, attention — not a report card after the fact.",
  },
  {
    n: "02",
    title: "Telemetry-grade scoring",
    body: "Every trip distilled into a score you can trust, from the same signals racing teams watch.",
  },
  {
    n: "03",
    title: "Models we own",
    body: "Coaching runs on Velantis-trained models, on your phone. Fast, private, ours.",
  },
];

export default function DriveSection() {
  return (
    <section id="drive" className="scroll-mt-16 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
        <Reveal>
          <Eyebrow n="01">Flagship</Eyebrow>
        </Reveal>

        <div className="mt-8 grid items-center gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
          <div>
            <Reveal delay={80}>
              <h2 className="font-display text-6xl font-bold tracking-tight md:text-8xl">
                Drive
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-md text-xl leading-snug text-ink/90 md:text-2xl">
                An AI driving coach that rides with you.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-md leading-relaxed text-muted">
                Drive watches the road with you — real-time coaching as you
                drive, and a telemetry-grade score for every trip. Built for
                new drivers becoming great ones.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <AppStoreBadge />
                <span className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">
                  For iPhone
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="justify-self-center md:justify-self-end">
            <PhoneMock />
          </Reveal>
        </div>

        <div className="mt-24 grid gap-12 border-t border-hairline pt-14 md:grid-cols-3 md:gap-8">
          {features.map((feature, i) => (
            <Reveal key={feature.n} delay={i * 90}>
              <span className="font-mono text-[11px] tracking-[0.22em] text-faint">
                {feature.n}
              </span>
              <h3 className="mt-3 font-display text-xl font-medium tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {feature.body}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Swap this panel for the real demo film (<video> or embed) when it's ready. */}
        <Reveal className="mt-24">
          <div className="flex aspect-video items-center justify-center rounded-3xl border border-hairline bg-surface md:aspect-[21/9]">
            <div className="flex flex-col items-center gap-5">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-hairline-strong">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="ml-1 h-5 w-5 fill-muted"
                >
                  <path d="M6 4.5v15l13-7.5z" />
                </svg>
              </span>
              <span className="font-mono text-[11px] tracking-[0.3em] text-faint uppercase">
                Demo film — coming soon
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
