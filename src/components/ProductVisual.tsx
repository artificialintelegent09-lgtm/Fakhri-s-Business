import Image from "next/image";
import type { ProductTheme } from "@/data/products";

type ProductVisualProps = {
  theme: ProductTheme;
  /** Real preview image (public/images/<slug>/cover.*); falls back to CSS art. */
  imageSrc?: string | null;
  alt?: string;
  sizes?: string;
};

/**
 * Fills its parent (which sets the aspect ratio). Without a real preview image
 * this renders placeholder invitation artwork built from CSS only, sized in
 * container units (cqw) so it scales with whatever width it is given.
 */
export default function ProductVisual({
  theme,
  imageSrc,
  alt = "",
  sizes = "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw",
}: ProductVisualProps) {
  if (imageSrc) {
    return (
      <div className="relative size-full overflow-hidden">
        <Image src={imageSrc} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className="@container relative size-full overflow-hidden"
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
    >
      {theme === "classic" && <Classic />}
      {theme === "modern" && <Modern />}
      {theme === "botanical" && <Botanical />}
    </div>
  );
}

/** Cream paper, arched double frame, serif monogram. */
function Classic() {
  return (
    <div className="absolute inset-0 bg-cream-light">
      <div className="absolute inset-x-[10cqw] bottom-[8cqw] top-[8cqw] rounded-t-full border border-espresso/70" />
      <div className="absolute inset-x-[13cqw] bottom-[11cqw] top-[11cqw] rounded-t-full border border-pandan" />
      <div className="absolute inset-x-[13cqw] bottom-[11cqw] top-[11cqw] flex flex-col items-center justify-center pt-[8cqw] text-center text-espresso">
        <p className="text-[2.6cqw] uppercase tracking-[0.35em] text-espresso-soft">
          The Wedding of
        </p>
        <p className="mt-[4cqw] font-serif text-[21cqw] leading-[0.85]">A</p>
        <p className="font-serif text-[9cqw] italic leading-none text-pandan-deep">
          &amp;
        </p>
        <p className="font-serif text-[21cqw] leading-[0.85]">R</p>
        <div className="mt-[5cqw] h-px w-[12cqw] bg-espresso/50" />
        <p className="mt-[3.5cqw] text-[2.6cqw] uppercase tracking-[0.35em] text-espresso-soft">
          Save the Date
        </p>
      </div>
    </div>
  );
}

/** Espresso field, oversized light sans letters, a pandan block as accent. */
function Modern() {
  return (
    <div className="absolute inset-0 bg-espresso text-cream">
      <div className="absolute inset-x-[9cqw] top-[9cqw] flex justify-between text-[2.5cqw] uppercase tracking-[0.3em] text-cream/70">
        <span>Wedding</span>
        <span>Invitation</span>
      </div>
      <div className="absolute right-[9cqw] top-[20cqw] h-[34cqw] w-[26cqw] bg-pandan" />
      <div className="absolute inset-x-[9cqw] bottom-[9cqw]">
        <p className="text-[27cqw] font-light leading-[0.88] tracking-tight">A</p>
        <p className="text-[27cqw] font-light leading-[0.88] tracking-tight">+ R</p>
        <div className="mt-[5cqw] h-px w-full bg-cream/40" />
        <p className="mt-[3cqw] text-[2.5cqw] uppercase tracking-[0.3em] text-cream/70">
          We&apos;re getting married
        </p>
      </div>
    </div>
  );
}

function Leaf({ className }: { className: string }) {
  return <span aria-hidden className={`absolute rounded-[0_100%_0_100%] ${className}`} />;
}

/** Pandan field with layered leaves around a cream panel. */
function Botanical() {
  return (
    <div className="absolute inset-0 bg-pandan">
      <Leaf className="-left-[8cqw] top-[2cqw] h-[38cqw] w-[22cqw] rotate-[20deg] bg-pandan-deep" />
      <Leaf className="left-[8cqw] -top-[6cqw] h-[30cqw] w-[17cqw] rotate-[50deg] bg-pandan-mist/80" />
      <Leaf className="-left-[5cqw] top-[28cqw] h-[26cqw] w-[15cqw] -rotate-[10deg] bg-pandan-mist/70" />
      <Leaf className="-right-[8cqw] bottom-[2cqw] h-[38cqw] w-[22cqw] rotate-[200deg] bg-pandan-deep" />
      <Leaf className="-bottom-[6cqw] right-[8cqw] h-[30cqw] w-[17cqw] rotate-[230deg] bg-pandan-mist/80" />
      <Leaf className="-right-[5cqw] bottom-[28cqw] h-[26cqw] w-[15cqw] rotate-[170deg] bg-pandan-mist/70" />
      <div className="absolute inset-x-[17cqw] inset-y-[24cqw] flex flex-col items-center justify-center bg-cream-light text-center text-espresso">
        <p className="text-[2.4cqw] uppercase tracking-[0.3em] text-espresso-soft">
          Save the Date
        </p>
        <p className="mt-[3cqw] font-serif text-[11cqw] italic leading-none">A &amp; R</p>
        <div className="mt-[4cqw] h-px w-[10cqw] bg-pandan" />
      </div>
    </div>
  );
}
