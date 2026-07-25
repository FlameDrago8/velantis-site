import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

const directions = [
  {
    title: "Coaching for schools",
    body: "Driving schools working from the same telemetry their students see.",
    tag: "In motion",
  },
  {
    title: "Deeper perception",
    body: "Models that understand the road, not just the route.",
    tag: "In training",
  },
  {
    title: "Beyond the car",
    body: "The same loop — sense, score, coach — applied to new skills.",
    tag: "Horizon",
  },
];

export default function WhatsNext() {
  return (
    <section id="next" className="scroll-mt-16 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <Eyebrow n="02">The road ahead</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
            The model is the product.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            Velantis builds AI-native products — where the model isn&apos;t an
            API call away, it&apos;s the thing we make. Trained on our own
            data, tuned to one domain, running on the device in your hand.
            Drive proves the approach. What follows extends it.
          </p>
        </Reveal>

        <div className="mt-16 border-t border-hairline">
          {directions.map((direction, i) => (
            <Reveal key={direction.title} delay={i * 90}>
              <div className="flex flex-col gap-2 border-b border-hairline py-7 md:flex-row md:items-baseline md:justify-between md:gap-8">
                <h3 className="font-display text-lg font-medium tracking-tight md:w-64 md:shrink-0">
                  {direction.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted md:flex-1">
                  {direction.body}
                </p>
                <span className="font-mono text-[10px] tracking-[0.22em] text-faint uppercase md:shrink-0">
                  {direction.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
