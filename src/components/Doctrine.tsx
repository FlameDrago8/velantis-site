import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

const tenets = [
  {
    n: "01",
    title: "Own the model",
    body: "The model isn't an API call away. It's the thing we make: trained on our own data, tuned to one domain, versioned like hardware.",
  },
  {
    n: "02",
    title: "Run at the edge",
    body: "Inference happens on the device, beside the sensors. It's fast, it's private, and it keeps working when the signal drops.",
  },
  {
    n: "03",
    title: "Close the loop",
    body: "Sense, score, coach. Every product is one measured loop, and every output can be traced back to the signal that caused it.",
  },
];

export default function Doctrine() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32">
        <SectionHead index="01" name="Doctrine" designation="VLN-DOC" />

        <Reveal delay={60}>
          <h2 className="display mt-12 max-w-4xl text-[clamp(2rem,5vw,4rem)]">
            The model is the product.
          </h2>
        </Reveal>

        <div className="mt-16 grid border-t border-l border-rule md:grid-cols-3">
          {tenets.map((t, i) => (
            <Reveal
              key={t.n}
              delay={i * 70}
              className="border-r border-b border-rule p-6 md:p-8"
            >
              <span className="label text-faint tabular">{t.n}</span>
              <h3 className="mt-10 text-xl font-semibold [font-variation-settings:'wdth'_112] md:mt-16">
                {t.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{t.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
