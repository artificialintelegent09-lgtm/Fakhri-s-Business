import Image from "next/image";
import type { ProductTheme } from "@/data/products";

type ProductVisualProps = {
  theme: ProductTheme;
  /** Real preview image (public/images/<slug>/cover.*); falls back to CSS art. */
  imageSrc?: string | null;
  alt?: string;
  className?: string;
};

/**
 * Placeholder invitation artwork built from CSS only. Everything is sized in
 * container units (cqw) so it scales with whatever width it is given.
 */
export default function ProductVisual({
  theme,
  imageSrc,
  alt = "",
  className = "",
}: ProductVisualProps) {
  const frame = `@container relative aspect-[3/4] w-full overflow-hidden ${className}`;

  if (imageSrc) {
    return (
      <div className={frame}>
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className={frame} role="img" aria-label={alt || undefined} aria-hidden={alt ? undefined : true}>
      {theme === "classic" && <Classic />}
      {theme === "modern" && <Modern />}
      {theme === "botanical" && <Botanical />}
    </div>
  );
}

function Classic() {
  return (
    <div className="absolute inset-0 bg-[#fbf8f1]">
      <div className="absolute inset-[6cqw] border border-champagne" />
      <div className="absolute inset-[8.5cqw] border border-champagne/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-charcoal">
        <p className="text-[3cqw] uppercase tracking-[0.35em] text-brown">
          The Wedding of
        </p>
        <p className="mt-[5cqw] font-serif text-[22cqw] leading-none">A</p>
        <p className="font-serif text-[9cqw] italic leading-none text-champagne">
          &amp;
        </p>
        <p className="font-serif text-[22cqw] leading-none">R</p>
        <div className="mt-[6cqw] h-px w-[14cqw] bg-champagne" />
        <p className="mt-[4cqw] text-[3cqw] uppercase tracking-[0.35em] text-brown">
          Save the Date
        </p>
      </div>
    </div>
  );
}

function Modern() {
  return (
    <div className="absolute inset-0 bg-[#dcd3c6]">
      <div className="absolute inset-x-[9cqw] top-[9cqw] flex justify-between text-[2.8cqw] uppercase tracking-[0.3em] text-charcoal/70">
        <span>Wedding</span>
        <span>Invitation</span>
      </div>
      <div className="absolute inset-x-[9cqw] bottom-[9cqw] text-charcoal">
        <p className="text-[24cqw] font-light leading-[0.9] tracking-tight">
          A
        </p>
        <p className="text-[24cqw] font-light leading-[0.9] tracking-tight">
          + R
        </p>
        <div className="mt-[6cqw] h-px w-full bg-charcoal/40" />
        <p className="mt-[3cqw] text-[2.8cqw] uppercase tracking-[0.3em] text-charcoal/70">
          We&apos;re getting married
        </p>
      </div>
      <div className="absolute right-[9cqw] top-[22cqw] h-[34cqw] w-[26cqw] bg-[#c4b8a8]" />
    </div>
  );
}

function Leaf({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`absolute rounded-[0_100%_0_100%] ${className}`}
    />
  );
}

function Botanical() {
  return (
    <div className="absolute inset-0 bg-[#cfd6c2]">
      <Leaf className="-left-[6cqw] top-[4cqw] h-[34cqw] w-[20cqw] rotate-[20deg] bg-[#8d9a7c]" />
      <Leaf className="left-[8cqw] top-[-4cqw] h-[28cqw] w-[16cqw] rotate-[50deg] bg-[#a5b093]" />
      <Leaf className="left-[-4cqw] top-[24cqw] h-[24cqw] w-[14cqw] rotate-[-10deg] bg-[#a5b093]" />
      <Leaf className="-right-[6cqw] bottom-[4cqw] h-[34cqw] w-[20cqw] rotate-[200deg] bg-[#8d9a7c]" />
      <Leaf className="bottom-[-4cqw] right-[8cqw] h-[28cqw] w-[16cqw] rotate-[230deg] bg-[#a5b093]" />
      <Leaf className="-right-[4cqw] bottom-[24cqw] h-[24cqw] w-[14cqw] rotate-[170deg] bg-[#a5b093]" />
      <div className="absolute inset-x-[16cqw] inset-y-[22cqw] flex flex-col items-center justify-center bg-[#f5f1e9] text-center text-charcoal">
        <p className="text-[2.6cqw] uppercase tracking-[0.3em] text-brown">
          Save the Date
        </p>
        <p className="mt-[3cqw] font-serif text-[11cqw] italic leading-none">
          A &amp; R
        </p>
        <div className="mt-[4cqw] h-px w-[10cqw] bg-[#8d9a7c]" />
      </div>
    </div>
  );
}
