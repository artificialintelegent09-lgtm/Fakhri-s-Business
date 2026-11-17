import { products } from "@/data/products";
import { generalInquiryUrl } from "@/lib/whatsapp";
import ButtonLink from "./ButtonLink";
import ProductVisual from "./ProductVisual";

export default function Hero() {
  const [classic, modern] = products;

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-14 md:pb-28 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-8"
    >
      <div>
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-muted">
          Undangan Pernikahan Digital
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          A beautiful beginning, made personal.
        </h1>
        <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">
          Celebrate your special moments with an elegant digital invitation,
          thoughtfully designed for your love story.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="#collection">Explore Collection</ButtonLink>
          <ButtonLink href={generalInquiryUrl} external variant="secondary">
            Contact Us
          </ButtonLink>
        </div>
      </div>

      <div className="relative mx-auto aspect-[5/6] w-full max-w-md lg:max-w-none">
        <div
          aria-hidden
          className="absolute right-0 top-8 h-[88%] w-[62%] border border-champagne"
        />
        <div className="absolute right-4 top-0 w-[58%] shadow-[0_20px_50px_-20px_rgba(48,45,41,0.35)]">
          <ProductVisual theme={classic.theme} />
        </div>
        <div className="absolute bottom-0 left-0 w-[46%] border-[6px] border-ivory shadow-[0_20px_50px_-20px_rgba(48,45,41,0.35)]">
          <ProductVisual theme={modern.theme} />
        </div>
      </div>
    </section>
  );
}
