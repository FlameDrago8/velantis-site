import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-hairline">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:gap-8 md:py-32">
        <div>
          <Reveal>
            <Eyebrow n="03">About</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-8 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Founder-built,
              <br />
              end to end.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={140} className="space-y-5 self-end">
          <p className="leading-relaxed text-muted">
            Velantis is one person: Venkat — designer, engineer, and driver.
          </p>
          <p className="leading-relaxed text-muted">
            Drive started with a simple observation: learning to drive
            hasn&apos;t changed in fifty years. A clipboard, a nervous parent,
            a few hours of feedback for a skill you&apos;ll use for life. The
            tools every other craft gets — telemetry, review, a coach in your
            ear — never made it to the driver&apos;s seat.
          </p>
          <p className="leading-relaxed text-muted">
            So Velantis builds them: the models, the product, and the design,
            under one roof. Small by design. AI-native from the first commit.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
