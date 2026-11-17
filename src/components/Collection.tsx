"use client";

import { products } from "@/data/products";
import { useLang } from "@/lib/i18n";
import BotanicalSprig from "./Botanical";
import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";

// Asymmetric column offsets on large screens; stacked and aligned on mobile.
const offsets = ["", "lg:mt-24", "lg:mt-10"];

export default function Collection({
  covers,
}: {
  /** Preview image path per product slug, or null to show the CSS artwork. */
  covers: Record<string, string | null>;
}) {
  const { t } = useLang();

  return (
    <section
      id="collection"
      aria-labelledby="collection-title"
      className="relative -mt-14 rounded-t-[2.5rem] bg-cream-deep pb-24 pt-20 md:-mt-20 md:rounded-t-[4rem] md:pb-32 md:pt-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative">
          <SectionHeading
            id="collection-title"
            eyebrow={t.collection.eyebrow}
            title={t.collection.title}
            text={t.collection.text}
          />
          <BotanicalSprig
            className="pointer-events-none absolute -top-6 right-0 hidden h-44 w-28 text-pandan/70 md:block"
            flip
          />
        </div>

        <div className="mt-14 grid gap-14 md:mt-20 md:grid-cols-2 md:gap-x-8 md:gap-y-20 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              index={index}
              total={products.length}
              coverSrc={covers[product.slug] ?? null}
              className={`${offsets[index] ?? ""} ${index === 2 ? "md:col-span-2 md:mx-auto md:w-1/2 lg:col-span-1 lg:mx-0 lg:w-auto" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
