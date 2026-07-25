import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

/* Matches the address in the legal pages — the one Velantis actually owns. */
const CONTACT_EMAIL = "velantis.app@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-hairline">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center md:py-36">
        <Reveal>
          <Eyebrow n="04">Contact</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Get in touch.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            Partnerships, press, or a driving school that wants in early —
          </p>
        </Reveal>
        <Reveal delay={200}>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-8 inline-block font-display text-2xl font-medium tracking-tight underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent md:text-4xl"
          >
            {CONTACT_EMAIL}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
