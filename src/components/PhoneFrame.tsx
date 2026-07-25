import Image, { type StaticImageData } from "next/image";

/**
 * A real Drive screenshot in a minimal device bezel.
 *
 * The screenshots already contain iOS chrome (status bar, Dynamic Island), so
 * the frame is only a bezel: a hairline body with the screen inset inside it.
 * Every dimension is expressed in container units so one component serves both
 * the flagship phone and the smaller rail — the bezel and the screen's corner
 * radius stay in the same proportion an iPhone actually has (screen radius is
 * ~15.4% of screen width) instead of going slab-cornered when scaled down.
 */
export default function PhoneFrame({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
}: {
  src: StaticImageData;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`@container ${className}`}>
      <div className="rounded-[17.1cqw] border border-hairline-strong bg-[#050507] p-[2.4cqw]">
        <div className="overflow-hidden rounded-[14.7cqw]">
          <Image
            src={src}
            alt={alt}
            sizes={sizes}
            priority={priority}
            placeholder="blur"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
