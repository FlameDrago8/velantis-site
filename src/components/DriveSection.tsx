import homeScore from "@/images/drive/home-score.png";

import AppStoreBadge from "@/components/AppStoreBadge";
import DriveScreens from "@/components/DriveScreens";
import Eyebrow from "@/components/Eyebrow";
import PhoneFrame from "@/components/PhoneFrame";
import Reveal from "@/components/Reveal";

/**
 * Each feature carries an instrument label rather than an index — the label
 * states something true about the feature (when it runs, what it outputs,
 * where it runs) instead of counting to three.
 */
const features = [
  {
    meta: "In the moment",
    title: "Real-time coaching",
    body: "Spoken guidance in the moment — braking, spacing, attention — not a report card after the fact.",
  },
  {
    meta: "0–100",
    title: "Telemetry-grade scoring",
    body: "Every trip distilled into a score you can trust, from the same signals racing teams watch.",
  },
  {
    meta: "On-device",
    title: "Models we own",
    body: "Coaching runs on Velantis-trained models, on your phone. Fast, private, ours.",
  },
];

export default function DriveSection() {
  return (
    <section
      id="drive"
      className="ground-warm scroll-mt-16 border-t border-hairline"
    >
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
        <Reveal>
          <Eyebrow n="01">Flagship</Eyebrow>
        </Reveal>

        <div className="mt-8 grid items-center gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
          <div>
            <Reveal variant="wipe" delay={80}>
              <h2 className="font-display text-6xl font-bold tracking-tight md:text-8xl">
                Drive
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-md text-xl leading-snug text-ink/90 md:text-2xl">
                An AI driving coach that rides with you.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-6 max-w-md leading-relaxed text-muted">
                Drive watches the road with you — real-time coaching as you
                drive, and a telemetry-grade score for every trip. Built for
                new drivers becoming great ones.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <AppStoreBadge />
                <span className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">
                  For iPhone
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="justify-self-center md:justify-self-end">
            <PhoneFrame
              src={homeScore}
              alt="Drive app home screen showing a drive score of 88, graded A minus, above a Start Drive button"
              sizes="272px"
              className="w-[272px]"
            />
          </Reveal>
        </div>

        <div className="mt-24 grid gap-12 border-t border-hairline pt-14 md:grid-cols-3 md:gap-8">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 60}>
              <span className="font-mono text-[11px] tracking-[0.22em] text-xenon uppercase">
                {feature.meta}
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

        <DriveScreens />
      </div>
    </section>
  );
}
