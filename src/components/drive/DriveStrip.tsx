import { Car, DiamondPlate, OctagonPlate, ParkPlate } from "@/components/drive/Plates";

/*
 * The Drive Strip, v2 "lane line" form: one bucket per 20 s, calm driving is
 * an empty dashed lane line, and only incidents rise. Bars at 70–84 are
 * okay-orange, under 70 poor-red. It starts at a stop line and ends on a
 * P plate with the car parked. Sample data: a 19-minute drive.
 */
const BUCKETS = 57;
const W = 1000;
const BASE = 150;
const bw = W / BUCKETS;

type Incident = { b: number; h: number; band: "okay" | "poor" };
const incidents: Incident[] = [
  { b: 9, h: 30, band: "okay" },
  { b: 10, h: 52, band: "okay" },
  { b: 24, h: 34, band: "okay" },
  { b: 38, h: 78, band: "poor" },
  { b: 39, h: 40, band: "okay" },
  { b: 48, h: 24, band: "okay" },
];

const markers = [
  { b: 10, kind: "stop" as const },
  { b: 24, kind: "curve" as const },
  { b: 38, kind: "stop" as const },
];

export default function DriveStrip() {
  const plate = 30;
  const dashes = [];
  for (let x = 14; x < W - 64; x += 18) {
    dashes.push(<rect key={x} x={x} y={BASE - 2} width={10} height={4} rx={2} fill="var(--paint)" />);
  }

  return (
    <figure>
      <svg
        viewBox={`0 -6 ${W} 200`}
        className="block h-auto w-full"
        role="img"
        aria-label="Drive Strip for a 19 minute sample drive. Mostly calm, with two braking incidents and one cornering incident; the drive ends parked."
      >
        <g className="strip-draw">
          {/* stop line */}
          <rect x="0" y={BASE - 22} width="5" height="44" fill="var(--ink)" />
          {dashes}
          {incidents.map((i) => (
            <rect
              key={i.b}
              x={i.b * bw + 2}
              y={BASE - i.h}
              width={bw - 4}
              height={i.h}
              rx={2}
              fill={`var(--${i.band})`}
            />
          ))}
          {markers.map((m) => {
            const cx = m.b * bw + bw / 2;
            const top = BASE - Math.max(...incidents.filter((i) => Math.abs(i.b - m.b) <= 1).map((i) => i.h)) - plate - 10;
            return m.kind === "stop" ? (
              <OctagonPlate key={m.b} x={cx - plate / 2} y={top} s={plate} />
            ) : (
              <DiamondPlate key={m.b} x={cx - plate / 2} y={top} s={plate} />
            );
          })}
          <Car x={W - 104} y={BASE - 34} w={52} />
          <ParkPlate x={W - 40} y={BASE - 36} s={36} />
        </g>
        <text x="0" y={BASE + 36} fontSize="15" fill="var(--muted)" style={{ fontFamily: "var(--font-mono)" }}>
          4:12 PM
        </text>
        <text x={W} y={BASE + 36} fontSize="15" fill="var(--muted)" textAnchor="end" style={{ fontFamily: "var(--font-mono)" }}>
          4:31 PM
        </text>
      </svg>
    </figure>
  );
}
