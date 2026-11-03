import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

/* Matches the address in the legal pages, the one Velantis actually owns. */
const CONTACT_EMAIL = "support@velantisco.com";

const channels = ["Partnerships", "Driving schools", "Press", "Support"];

export default function Contact() {
  return (
    <section id="contact" className="drafting scroll-mt-14 border-b border-rule">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32">
        <SectionHead index="05" name="Contact" designation="VLN-COM" />

        <Reveal delay={60}>
          <h2 className="display mt-12 text-[clamp(2rem,5vw,4rem)]">Get in touch.</h2>
        </Reveal>

        <Reveal delay={140}>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group mt-10 flex flex-col gap-4 border-y border-rule-strong py-8 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="text-[clamp(1.35rem,4.2vw,3rem)] font-medium break-all [font-variation-settings:'wdth'_110] transition-colors duration-200 group-hover:text-tint">
              {CONTACT_EMAIL}
            </span>
            <span className="label text-tint">Write to us &rarr;</span>
          </a>
        </Reveal>

        <Reveal delay={200}>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {channels.map((c) => (
              <li key={c} className="label text-muted">
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
