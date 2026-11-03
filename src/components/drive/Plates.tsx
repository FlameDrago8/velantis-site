/*
 * Drive v2 "Road Furniture" plates, drawn to the spec's geometry (§4.1).
 * Every plate is a flat fill with an inset rim in the legend colour;
 * legends sit on a 24-unit grid. Rendered here as plain SVG groups so
 * they can be placed inside larger instrument drawings.
 */

type PlateProps = {
  x: number;
  y: number;
  s: number;
  fill?: string;
  ink?: string;
};

const OCTAGON = [
  [0.29, 0], [0.71, 0], [1, 0.29], [1, 0.71],
  [0.71, 1], [0.29, 1], [0, 0.71], [0, 0.29],
];

function poly(pts: number[][], s: number, inset = 0) {
  const c = s / 2;
  return pts
    .map(([px, py]) => {
      const x = px * s, y = py * s;
      // shrink toward centre by `inset` so the rounded stroke stays inside s
      const k = (c - inset) / c;
      return `${(c + (x - c) * k).toFixed(2)},${(c + (y - c) * k).toFixed(2)}`;
    })
    .join(" ");
}

/** Legend box: a 24-unit grid scaled to `size`, centred in an s-box. */
function Legend({ s, size, children, dy = 0 }: { s: number; size: number; children: React.ReactNode; dy?: number }) {
  const k = size / 24;
  const o = (s - size) / 2;
  return <g transform={`translate(${o} ${o + dy}) scale(${k})`}>{children}</g>;
}

/** Octagon plate with the stop-line legend: braking events. */
export function OctagonPlate({ x, y, s, fill = "var(--plate)", ink = "var(--ink)" }: PlateProps) {
  const r = 0.08 * s;
  const rim = Math.max(1, 0.05 * s);
  return (
    <g transform={`translate(${x} ${y})`}>
      <polygon points={poly(OCTAGON, s, r)} fill={fill} stroke={fill} strokeWidth={2 * r} strokeLinejoin="round" />
      <polygon points={poly(OCTAGON, s, 0.06 * s + r)} fill="none" stroke={ink} strokeWidth={rim} strokeLinejoin="round" />
      <Legend s={s} size={0.6 * s}>
        <rect x="3" y="10" width="18" height="4" rx="2" fill={ink} />
      </Legend>
    </g>
  );
}

/** Diamond warning plate with a right-curve arrow: cornering events. */
export function DiamondPlate({ x, y, s, fill = "var(--plate)", ink = "var(--ink)", legend = "curve" }: PlateProps & { legend?: "curve" | "stopAhead" }) {
  const d = 0.707 * s;
  const r = 0.12 * s;
  const rim = Math.max(1, 0.05 * s);
  const o = (s - d) / 2;
  return (
    <g transform={`translate(${x} ${y})`}>
      <g transform={`rotate(45 ${s / 2} ${s / 2})`}>
        <rect x={o} y={o} width={d} height={d} rx={r} fill={fill} />
        <rect x={o + 0.06 * s} y={o + 0.06 * s} width={d - 0.12 * s} height={d - 0.12 * s} rx={r * 0.6} fill="none" stroke={ink} strokeWidth={rim} />
      </g>
      <Legend s={s} size={0.5 * s}>
        {legend === "curve" ? (
          <>
            <path d="M7 21V14Q7 7 14 7" fill="none" stroke={ink} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <polygon points="13,1 22,7 13,13" fill={ink} />
          </>
        ) : (
          <>
            <polygon points={poly(OCTAGON, 12).split(" ").map((p) => p.split(",").map(Number)).map(([a, b]) => `${a + 6},${b + 10}`).join(" ")} fill={ink} />
            <line x1="12" y1="9" x2="12" y2="5" stroke={ink} strokeWidth="3" />
            <polygon points="12,0 16.5,5 7.5,5" fill={ink} />
          </>
        )}
      </Legend>
    </g>
  );
}

/** INK-style P plate: where the drive parked. */
export function ParkPlate({ x, y, s }: { x: number; y: number; s: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={s} height={s} rx={s * 0.21} fill="var(--ink)" />
      <text
        x={s / 2}
        y={s * 0.76}
        textAnchor="middle"
        fontSize={s * 0.72}
        fontWeight={800}
        fill="var(--bg)"
        style={{ fontFamily: "var(--font-sans)", fontVariationSettings: "'wdth' 62" }}
      >
        P
      </text>
    </g>
  );
}

/** The one character: a flat side-view car, in label ink. */
export function Car({ x, y, w }: { x: number; y: number; w: number }) {
  const k = w / 48;
  return (
    <g transform={`translate(${x} ${y}) scale(${k})`} fill="var(--ink)">
      <path d="M4 14 L12 6 Q14 4 17 4 L30 4 Q33 4 35 6 L41 12 L44 12 Q48 12 48 16 L48 19 Q48 21 46 21 L2 21 Q0 21 0 19 L0 17 Q0 14 4 14 Z" />
      <path d="M15 7 L13.5 12 L22 12 L22 7 Z M25 7 L25 12 L36 12 L32.5 7 Z" fill="var(--card)" />
      <circle cx="12" cy="21" r="5" fill="var(--ink)" stroke="var(--card)" strokeWidth="2" />
      <circle cx="37" cy="21" r="5" fill="var(--ink)" stroke="var(--card)" strokeWidth="2" />
    </g>
  );
}
