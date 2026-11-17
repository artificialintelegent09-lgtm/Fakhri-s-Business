"use client";

import { ExternalLink } from "lucide-react";
import { productPhotos } from "@/data/images";
import type { Product } from "@/data/products";
import { useLang } from "@/lib/i18n";
import { formatRupiah, productOrderUrl } from "@/lib/whatsapp";
import ButtonLink from "./ButtonLink";
import PhotoImage from "./Photo";

type ProductCardProps = {
  product: Product;
  index: number;
  total: number;
  className?: string;
};

// Each preview gets its own silhouette so the three read as a set, not as a grid of identical tiles.
const frames = [
  "rounded-t-[999px] rounded-b-[1.25rem]",
  "rounded-[1.5rem]",
  "rounded-t-[999px] rounded-b-[1.25rem]",
];

/** One template, presented like a stationery plate: a mounted preview with the details set underneath. */
export default function ProductCard({
  product,
  index,
  total,
  className = "",
}: ProductCardProps) {
  const { lang, t } = useLang();
  const photo = productPhotos[product.slug];

  return (
    <article
      aria-label={`${product.name}. ${t.collection.productPosition(index + 1, total)}`}
      className={`group ${className}`}
    >
      {/* Preview on a soft pink mount. */}
      <div className="relative pb-3 pr-3">
        <div
          aria-hidden
          className={`absolute inset-0 translate-x-0 bg-blush/55 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5 ${frames[index]}`}
          style={{ top: "0.75rem", left: "0.75rem" }}
        />
        <div
          className={`relative aspect-[4/5] overflow-hidden bg-blush-light shadow-[0_24px_40px_-28px_rgba(53,37,42,0.6)] ${frames[index]}`}
        >
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
            <PhotoImage
              photo={photo}
              lang={lang}
              sizes="(min-width: 1024px) 360px, (min-width: 768px) 46vw, 76vw"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 pr-3">
        <p className="flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-cherry-deep">
          {String(index + 1).padStart(2, "0")}
          <span aria-hidden className="h-px flex-1 bg-cocoa/15" />
        </p>
        <h3 className="mt-3 font-serif text-[2rem] font-semibold leading-none md:text-[2.2rem]">
          {product.name}
        </h3>
        <p className="mt-2 text-cocoa-soft">{t.products[product.slug]?.description}</p>

        <div className="mt-4 flex items-end justify-between gap-3">
          <p>
            <span className="block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-cherry-deep">
              {t.collection.specialLabel}
            </span>
            <span className="mt-0.5 flex flex-wrap items-baseline gap-x-2.5">
              <span className="font-serif text-[2rem] font-semibold leading-none">
                <span className="sr-only">{t.collection.openingPrice}: </span>
                {formatRupiah(product.price)}
              </span>
              <s className="text-sm text-cocoa-soft">
                <span className="sr-only">{t.collection.regularPrice}: </span>
                {formatRupiah(product.originalPrice)}
              </s>
            </span>
          </p>
        </div>

        <div className="mt-5 flex flex-col items-stretch gap-1 sm:flex-row sm:items-center sm:gap-3">
          <ButtonLink
            href={productOrderUrl(product, lang)}
            external
            externalLabel={t.collection.newTab}
          >
            {t.collection.orderNow}
          </ButtonLink>
          <ButtonLink
            href={product.demoUrl}
            external
            externalLabel={t.collection.newTab}
            variant="link"
          >
            {t.collection.livePreview}
            <ExternalLink size={14} aria-hidden />
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
