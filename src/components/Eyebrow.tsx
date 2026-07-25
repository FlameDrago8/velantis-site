import type { ReactNode } from "react";

/** Telemetry-style section label: accent index, muted title, all mono. */
export default function Eyebrow({
  n,
  children,
}: {
  n: string;
  children: ReactNode;
}) {
  return (
    <p className="font-mono text-[11px] tracking-[0.22em] uppercase">
      <span className="text-accent">{n}</span>
      <span className="text-faint"> / </span>
      <span className="text-muted">{children}</span>
    </p>
  );
}
