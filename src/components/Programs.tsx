import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

/*
 * Program registry. Status is shown by how full the square is, never by
 * a score colour: those stay reserved for how someone drove.
 */
type Status = "Shipping" | "In development" | "In training" | "Horizon";

const programs: { id: string; name: string; body: string; status: Status }[] = [
  {
    id: "DRV-01",
    name: "Drive",
    body: "An AI driving coach for iPhone. It scores every trip and coaches one habit at a time.",
    status: "Shipping",
  },
  {
    id: "DSH-02",
    name: "Dash",
    body: "A dashboard for driving schools. Instructors see the same telemetry their students record.",
    status: "In development",
  },
  {
    id: "PRC-03",
    name: "Perception",
    body: "Road-understanding models trained in-house on simulated and open driving data, then exported to run on the phone.",
    status: "In training",
  },
  {
    id: "HZN-04",
    name: "Beyond the car",
    body: "The same loop of sensing, scoring and coaching, applied to other physical skills.",
    status: "Horizon",
  },
];

function StatusSquare({ status }: { status: Status }) {
  const fill = { Shipping: 1, "In development": 0.5, "In training": 0.2, Horizon: 0 }[status];
  return (
    <span className="relative inline-block h-2.5 w-2.5 border border-ink" aria-hidden="true">
      <span className="absolute inset-y-0 left-0 bg-ink" style={{ width: `${fill * 100}%` }} />
    </span>
  );
}

export default function Programs() {
  return (
    <section id="programs" className="scroll-mt-14 border-b border-rule">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32">
        <SectionHead index="03" name="Programs" designation="VLN-REG" />

        <div className="mt-12 grid gap-8 md:grid-cols-12">
          <Reveal delay={60} className="md:col-span-7">
            <h2 className="display text-[clamp(2rem,5vw,4rem)]">
              One loop.
              <br />
              Many machines.
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5 md:self-end">
            <p className="max-w-md leading-relaxed text-muted">
              Drive proves the approach. Everything that follows uses the same
              stack: our data, our models, and inference that runs where the
              sensors are.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-rule" role="table" aria-label="Velantis programs">
          <div role="row" className="hidden grid-cols-[7rem_12rem_1fr_10rem] gap-6 border-b border-rule py-3 md:grid">
            {["ID", "Program", "Scope", "Status"].map((h) => (
              <span key={h} role="columnheader" className="label text-faint">
                {h}
              </span>
            ))}
          </div>
          {programs.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <div
                role="row"
                className="row-arm grid gap-2 border-b border-rule py-6 md:grid-cols-[7rem_12rem_1fr_10rem] md:items-baseline md:gap-6 md:pl-0"
              >
                <span role="cell" className="label text-faint tabular">
                  {p.id}
                </span>
                <span role="cell" className="text-xl font-semibold [font-variation-settings:'wdth'_112]">
                  {p.name}
                </span>
                <span role="cell" className="max-w-xl leading-relaxed text-muted">
                  {p.body}
                </span>
                <span role="cell" className="label mt-2 flex items-center gap-2.5 text-ink md:mt-0">
                  <StatusSquare status={p.status} />
                  {p.status}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
