import Reveal from "@/components/Reveal";

/**
 * Section header in the style of a drawing-sheet title block: index and
 * name on the left, a designation on the right, one rule between them.
 */
export default function SectionHead({
  index,
  name,
  designation,
}: {
  index: string;
  name: string;
  designation: string;
}) {
  return (
    <Reveal>
      <div className="flex items-center gap-4 text-muted">
        <span className="label text-ink tabular">{index}</span>
        <span className="label">{name}</span>
        <span className="h-px flex-1 bg-rule" aria-hidden="true" />
        <span className="label text-faint">{designation}</span>
      </div>
    </Reveal>
  );
}
