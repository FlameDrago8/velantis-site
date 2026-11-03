import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

const facts = [
  { k: "Entity", v: "Velantis LLC" },
  { k: "Founder", v: "Venkat" },
  { k: "Disciplines", v: "Models, software, design" },
  { k: "Stack", v: "Swift, Core ML, PyTorch" },
];

export default function Company() {
  return (
    <section id="company" className="scroll-mt-14 border-b border-rule">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32">
        <SectionHead index="04" name="Company" designation="VLN-CO" />

        <Reveal delay={60}>
          <h2 className="display mt-12 text-[clamp(2rem,5vw,4rem)]">
            Founder-built,
            <br />
            end to end.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <Reveal delay={140}>
              <dl className="border-t border-rule">
                {facts.map((f) => (
                  <div key={f.k} className="grid grid-cols-[9rem_1fr] gap-4 border-b border-rule py-3.5">
                    <dt className="label pt-0.5 text-faint">{f.k}</dt>
                    <dd className="font-medium">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={120} className="space-y-5 md:col-span-5 md:col-start-8">
            <p className="text-xl leading-snug font-medium [font-variation-settings:'wdth'_108]">
              Learning to drive hasn&apos;t changed in fifty years.
            </p>
            <p className="leading-relaxed text-muted">
              You get a clipboard, a nervous parent and a few hours of feedback
              for a skill you&apos;ll use for life. Telemetry, review and a coach
              in your ear are normal in most other crafts. They never made it to
              the driver&apos;s seat.
            </p>
            <p className="leading-relaxed text-muted">
              Velantis builds them: the models, the product and the design, under
              one roof. It&apos;s small on purpose, and it&apos;s been AI-native
              from the first commit.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
