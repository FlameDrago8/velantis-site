import { MARK, WORDMARK, WORDMARK_SMALL } from "@/components/brand/geometry";

/**
 * The Velantis "Zero tick" lockups. The letters take currentColor so they
 * follow the theme; the zero tick is always the tint, the one blue in any
 * lockup.
 */
export function Wordmark({
  cut = "display",
  className = "",
  title = "Velantis",
}: {
  cut?: "display" | "small";
  className?: string;
  title?: string;
}) {
  const g = cut === "small" ? WORDMARK_SMALL : WORDMARK;
  return (
    <svg
      viewBox={`0 0 ${g.width} ${g.height}`}
      className={className}
      role="img"
      aria-label={title}
    >
      <path d={g.word} fill="currentColor" />
      <path d={g.tick} className="fill-tint" />
    </svg>
  );
}

export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${MARK.width} ${MARK.height}`}
      className={className}
      aria-hidden="true"
    >
      <path d={MARK.glyph} fill="currentColor" />
      <path d={MARK.tick} className="fill-tint" />
    </svg>
  );
}
