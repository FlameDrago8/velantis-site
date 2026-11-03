import AppStoreBadge from "@/components/AppStoreBadge";
import DriveStrip from "@/components/drive/DriveStrip";
import { DiamondPlate } from "@/components/drive/Plates";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

/* Sample report. A numeral is always ink; only the grade carries band colour. */
const subScores = [
  { name: "Braking", value: 82 },
  { name: "Acceleration", value: 91 },
  { name: "Cornering", value: 87 },
  { name: "Smoothness", value: 90 },
];

const chain = [
  {
    stage: "Sense",
    nodes: [
      { title: "Camera", body: "The road ahead, read frame by frame." },
      { title: "IMU + GPS", body: "Motion and position, sampled at 20 Hz." },
    ],
  },
  {
    stage: "Score",
    nodes: [
      { title: "Vision model", body: "Our CoreML model, on the phone: events and context." },
      { title: "Sensor physics", body: "Braking, acceleration, cornering and smoothness." },
    ],
  },
  {
    stage: "Coach",
    nodes: [
      { title: "Score, 0–100", body: "A grade for the drive, and the moments behind it." },
      { title: "One job", body: "A single thing to fix on the next drive." },
    ],
  },
];

function GradePlate({ grade, h }: { grade: string; h: number }) {
  return (
    <span
      className="inline-flex items-center justify-center bg-great px-3 font-bold text-[var(--marker-ink)]"
      style={{ height: h, borderRadius: 0.28 * h, fontSize: h * 0.56 }}
    >
      {grade}
    </span>
  );
}

export default function DriveSection() {
  return (
    <section id="drive" className="scroll-mt-14 border-b border-rule">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32">
        <SectionHead index="02" name="Flagship" designation="DRV-01" />

        <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal delay={60}>
              <h2 className="display text-[clamp(3.5rem,9vw,7.5rem)]">Drive</h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-2xl leading-snug font-medium [font-variation-settings:'wdth'_108]">
                An AI driving coach that rides with you.
              </p>
              <p className="mt-5 max-w-md leading-relaxed text-muted">
                Drive watches the road and the car&apos;s motion together, scores
                every trip, and hands you one job to work on next time. It&apos;s
                built for new drivers on their way to becoming good ones. Every
                model runs on the phone.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <AppStoreBadge />
                <span className="label text-faint">For iPhone</span>
              </div>
            </Reveal>
          </div>

          {/* Instrument: a sample drive report */}
          <Reveal delay={120} className="lg:col-span-7">
            <div className="registered border border-rule bg-card">
              <div className="flex items-center justify-between border-b border-rule px-5 py-3">
                <span className="label text-muted">Drive report</span>
                <span className="label text-faint">Sample · Tue</span>
              </div>

              <div className="grid gap-8 p-5 sm:grid-cols-[auto_1fr] sm:gap-10 sm:p-8">
                <div>
                  <span className="label text-faint">Score</span>
                  <div className="mt-2 flex items-end gap-4">
                    <span className="text-[104px] leading-[0.86] font-bold tracking-[-0.04em] tabular">
                      88
                    </span>
                    <span className="mb-2">
                      <GradePlate grade={"A\u2212"} h={40} />
                    </span>
                  </div>
                  <p className="mt-4 text-[15px] text-muted tabular">8.3 mi · 19 min</p>
                </div>

                <dl className="space-y-3 self-end">
                  {subScores.map((s) => (
                    <div key={s.name} className="grid grid-cols-[7.5rem_1fr_2rem] items-center gap-3">
                      <dt className="text-[13px] text-muted">{s.name}</dt>
                      <div className="h-1.5 bg-card2" aria-hidden="true">
                        <div
                          className="h-full"
                          style={{
                            width: `${s.value}%`,
                            background: s.value >= 85 ? "var(--paint)" : "var(--okay)",
                          }}
                        />
                      </div>
                      <dd className="text-right text-[15px] font-semibold tabular">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <Reveal plain className="border-t border-rule px-5 pt-6 pb-4 sm:px-8">
                <span className="label text-faint">Drive strip · one bar per 20 s</span>
                <div className="mt-4">
                  <DriveStrip />
                </div>
              </Reveal>

              {/* The Focus Sign: the only yellow object, as in the app. */}
              <div className="flex items-start gap-5 border-t border-rule p-5 sm:p-8">
                <svg viewBox="0 0 64 64" className="h-14 w-14 shrink-0" aria-hidden="true">
                  <DiamondPlate x={0} y={0} s={64} fill="var(--sign)" ink="var(--sign-ink)" legend="stopAhead" />
                </svg>
                <div>
                  <span className="label text-faint">Your one job</span>
                  <p className="mt-1.5 text-xl font-semibold">Ease into stops.</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink/90">
                    Start braking a car length earlier and let the car settle
                    before the line.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Signal chain */}
        <div className="mt-24">
          <Reveal>
            <div className="flex items-baseline justify-between gap-6">
              <h3 className="display text-2xl md:text-3xl">Signal chain</h3>
              <span className="label hidden text-faint sm:inline">All stages on-device</span>
            </div>
          </Reveal>
          <div className="mt-8 grid border-t border-l border-rule md:grid-cols-3">
            {chain.map((col, ci) => (
              <Reveal key={col.stage} delay={ci * 80} className="relative border-r border-b border-rule">
                <div className="flex items-center justify-between border-b border-rule px-5 py-3">
                  <span className="label text-ink">
                    <span className="text-faint tabular">{`0${ci + 1}`}</span>&nbsp;&nbsp;{col.stage}
                  </span>
                  {ci < chain.length - 1 ? (
                    <span className="label text-paint" aria-hidden="true">
                      <span className="hidden md:inline">&rarr;</span>
                      <span className="md:hidden">&darr;</span>
                    </span>
                  ) : null}
                </div>
                <ul>
                  {col.nodes.map((n) => (
                    <li key={n.title} className="border-b border-rule px-5 py-5 last:border-b-0">
                      <p className="font-semibold">{n.title}</p>
                      <p className="mt-1 text-[15px] leading-relaxed text-muted">{n.body}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
