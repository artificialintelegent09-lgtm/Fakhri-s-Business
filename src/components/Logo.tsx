import Image from "next/image";
import { brand } from "@/data/content";
import { getLogoSrc } from "@/lib/assets";

/** Uses /images/riwed-logo.png when present, otherwise a text wordmark. */
export default function Logo({ className = "" }: { className?: string }) {
  const logoSrc = getLogoSrc();

  if (logoSrc) {
    return (
      <Image
        src={logoSrc}
        alt={brand.name}
        width={0}
        height={0}
        sizes="160px"
        className={`h-9 w-auto ${className}`}
      />
    );
  }

  return (
    <span
      className={`font-serif text-3xl font-medium leading-none tracking-wide ${className}`}
    >
      {brand.name}
    </span>
  );
}
