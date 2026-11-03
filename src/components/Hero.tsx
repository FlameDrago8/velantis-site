import { WORDMARK, WORDMARK_TICK_X } from "@/components/brand/geometry";
import Reveal from "@/components/Reveal";

/*
 * The scale under the wordmark is an instrument dial unrolled: minor ticks
 * every 100 units, majors every 500, and the 0 index sits exactly under the
 * logo's zero tick. It draws in once on arrival and then holds still.
 */
const STEP = 100;
const SCALE_Y = 1180;
const ticks: { x: number; major: boolean; value: number }[] = [];
for (
  let x = WORDMARK_TICK_X - Math.floor(WORDMARK_TICK_X / STEP) * STEP;
  x <= WORDMARK.width;
  x += STEP
) {
  const value = Math.round((x - WORDMARK_TICK_X) / STEP);
  ticks.push({ x, major: value % 5 === 0, value });
}

const readouts = [
  { k: "Flagship", v: "Drive for iPhone" },
  { k: "Inference", v: "On-device" },
  { k: "Sensor loop", v: "IMU + GPS, 20 Hz" },
  { k: "Established", v: "2026" },
];

export default function Hero() {
  return (
    <section id="top" className="drafting relative overflow-hidden border-b border-rule pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between pt-8 text-muted md:pt-12">
          <span className="label">Velantis LLC</span>
          <span className="label hidden sm:inline">Applied intelligence</span>
          <span className="label tabular">Rev. 2026.11</span>
        </div>

        <Reveal plain className="pt-16 md:pt-24">
          <h1 className="sr-only">Velantis</h1>
          <svg
            viewBox={`0 0 ${WORDMARK.width} ${SCALE_Y + 260}`}
            className="block h-auto w-full overflow-visible text-ink"
            aria-hidden="true"
          >
            <path d={WORDMARK.word} fill="currentColor" />
            <path d={WORDMARK.tick} className="zero-tick fill-tint" />
            <g className="text-paint">
              <line
                x1="0"
                x2={WORDMARK.width}
                y1={SCALE_Y}
                y2={SCALE_Y}
                stroke="currentColor"
                strokeWidth="6"
              />
              {ticks.map((t, i) => (
                <rect
                  key={t.x}
                  className="scale-tick"
                  style={{ ["--i" as string]: i }}
                  x={t.x - (t.value === 0 ? 22 : 5)}
                  y={SCALE_Y - (t.value === 0 ? 150 : t.major ? 90 : 46)}
                  width={t.value === 0 ? 44 : 10}
                  height={t.value === 0 ? 150 : t.major ? 90 : 46}
                  fill={t.value === 0 ? "var(--ink)" : "currentColor"}
                />
              ))}
              {ticks
                .filter((t) => t.major)
                .map((t) => (
                  <text
                    key={`l${t.x}`}
                    x={t.x}
                    y={SCALE_Y + 150}
                    textAnchor="middle"
                    fontSize="88"
                    className="max-sm:hidden"
                    fill={t.value === 0 ? "var(--ink)" : "currentColor"}
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {t.value === 0 ? "0" : t.value > 0 ? `+${t.value}` : `−${-t.value}`}
                  </text>
                ))}
            </g>
          </svg>
        </Reveal>

        <div className="grid gap-10 pt-14 pb-16 md:grid-cols-12 md:pt-20 md:pb-24">
          <Reveal className="md:col-span-8">
            <p className="display text-[clamp(1.9rem,4.1vw,3.4rem)]">
              Intelligence for <br className="max-md:hidden" />
              the physical world.
            </p>
          </Reveal>
          <Reveal delay={120} className="md:col-span-4 md:self-end">
            <p className="max-w-md text-lg leading-relaxed text-muted">
              We train our own models and run them on the device in your hand,
              close to the sensors and the decision. First application: the
              driver&apos;s seat.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#drive"
                className="pressable label bg-tint-fill px-5 py-3.5 text-on-tint hover:bg-tint"
              >
                Meet Drive
              </a>
              <a
                href="#programs"
                className="pressable label border border-rule-strong px-5 py-3.5 text-ink hover:border-tint hover:text-tint"
              >
                Programs
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-rule bg-bg">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {readouts.map((r, i) => (
            <div
              key={r.k}
              className={`border-rule px-4 py-5 sm:px-6 ${i % 2 === 1 ? "border-l" : ""} ${
                i >= 2 ? "border-t md:border-t-0" : ""
              } ${i === 2 ? "md:border-l" : ""}`}
            >
              <dt className="label text-faint">{r.k}</dt>
              <dd className="mt-2 text-[15px] font-medium tabular">{r.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
