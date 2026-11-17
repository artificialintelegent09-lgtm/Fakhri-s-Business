import Image from "next/image";
import { florals, type FloralName } from "@/data/images";

type FloralProps = {
  name: FloralName;
  /** Placement and width (height follows the image). Applied to the wrapper. */
  className?: string;
  sizes?: string;
  /** Very slow, tiny rotation. Disabled by prefers-reduced-motion. */
  sway?: boolean;
  /** Sway pivot in the image's own (unmirrored) coordinates, e.g. "0% 0%" where the stem starts. */
  origin?: string;
  /** Mirror horizontally. */
  flip?: boolean;
};

/** Decorative flower photograph with transparent background. Hidden from assistive tech. */
export default function Floral({
  name,
  className = "",
  sizes = "200px",
  sway = false,
  origin = "50% 100%",
  flip = false,
}: FloralProps) {
  const floral = florals[name];
  return (
    <span aria-hidden className={`pointer-events-none block select-none ${className}`}>
      {/* Mirroring lives on its own element so the sway pivot isn't mirrored with it. */}
      <span className={`block ${flip ? "-scale-x-100" : ""}`}>
        <Image
          src={floral.src}
          width={floral.width}
          height={floral.height}
          alt=""
          sizes={sizes}
          className={`h-auto w-full ${sway ? "floral-sway" : ""}`}
          style={sway ? { transformOrigin: origin } : undefined}
        />
      </span>
    </span>
  );
}
