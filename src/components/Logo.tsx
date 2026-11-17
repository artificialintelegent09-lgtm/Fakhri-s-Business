import Image from "next/image";
import { brand } from "@/data/content";
import { getLogoSrc } from "@/lib/assets";

/**
 * Logo badge (when `public/images/riwed-logo.*` exists) with the RiWed wordmark.
 * Falls back to the wordmark alone. Server component: pass it into client
 * components as an element (e.g. `<Navbar logo={<Logo />} />`).
 */
export default function Logo({
  size = 40,
  priority = true,
  className = "",
}: {
  size?: number;
  priority?: boolean;
  className?: string;
}) {
  const logoSrc = getLogoSrc();

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {logoSrc && (
        <Image
          src={logoSrc}
          alt=""
          width={size}
          height={size}
          sizes={`${size}px`}
          priority={priority}
          className="rounded-full object-cover ring-1 ring-cocoa/15"
          style={{ width: size, height: size }}
        />
      )}
      <span className="font-serif text-[1.7rem] font-semibold leading-none tracking-[0.12em] uppercase">
        {brand.name}
      </span>
    </span>
  );
}
