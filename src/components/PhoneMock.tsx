/**
 * Flat vector mock of Drive's trip-summary screen, built from the tokens in
 * Desktop/Drive/DESIGN_LANGUAGE.md (bg #0A0A0F, card #1A1A1F, accent
 * #1E96FF, scoreGreat #2ED180, mono data). Swap the inner screen for a real
 * <Image> screenshot when App Store assets are final.
 */
const RING_RADIUS = 62;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const SCORE = 92; // grade A per Drive's shared mapping

export default function PhoneMock() {
  return (
    <div className="w-[280px] rounded-[44px] border border-hairline-strong bg-[#0A0A0F] p-3">
      <div className="flex flex-col gap-4 rounded-[34px] border border-white/5 px-5 pt-6 pb-5">
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.18em] text-[#8E8E9A] uppercase">
          <span>Trip Summary</span>
          <span>18:42</span>
        </div>

        <div className="relative mx-auto my-2 h-40 w-40">
          {/* Ring starts at 12 o'clock: rotate(-90) from SVG's 3 o'clock origin */}
          <svg viewBox="0 0 160 160" className="h-full w-full">
            <circle
              cx="80"
              cy="80"
              r={RING_RADIUS}
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="9"
            />
            <circle
              cx="80"
              cy="80"
              r={RING_RADIUS}
              fill="none"
              stroke="#2ED180"
              strokeWidth="9"
              strokeLinecap="round"
              strokeDasharray={`${(SCORE / 100) * RING_CIRCUMFERENCE} ${RING_CIRCUMFERENCE}`}
              transform="rotate(-90 80 80)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-mono text-5xl font-extrabold tracking-tight text-white tabular-nums">
              {SCORE}
            </span>
            <span className="mt-1 font-mono text-[9px] tracking-[0.22em] text-[#8E8E9A] uppercase">
              Drive Score · A
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-white/5 rounded-2xl border border-white/8 bg-[#1A1A1F] py-3">
          {[
            ["Brake", "94"],
            ["Corner", "89"],
            ["Focus", "93"],
          ].map(([label, value]) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="font-mono text-lg font-bold text-white tabular-nums">
                {value}
              </span>
              <span className="font-mono text-[8px] tracking-[0.2em] text-[#8E8E9A] uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/8 bg-[#1A1A1F] p-4">
          <span className="font-mono text-[8px] tracking-[0.2em] text-[#1E96FF] uppercase">
            Coach
          </span>
          <p className="mt-1.5 text-[13px] leading-snug text-white/85">
            Smooth stop at Fairfax — good anticipation.
          </p>
        </div>

        <div className="rounded-[14px] border border-[#1E96FF]/55 py-3 text-center text-sm font-medium text-[#1E96FF]">
          Start Drive
        </div>
      </div>
    </div>
  );
}
