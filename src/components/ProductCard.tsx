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
      className={`group flex flex-col overflow-hidden rounded-[1.75rem] bg-cream-light shadow-[0_18px_40px_-28px_rgba(53,37,42,0.55)] ${className}`}
    >
      <div className="relative aspect-[5/4] overflow-hidden bg-blush lg:aspect-[4/5]">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <PhotoImage
            photo={photo}
            lang={lang}
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 46vw, 82vw"
          />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-cream-light/95 px-3.5 py-1.5 text-xs font-medium tracking-wide text-cocoa">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-serif text-[1.9rem] font-semibold leading-none">
          {product.name}
        </h3>
        <p className="mt-2 text-cocoa-soft">
          {t.products[product.slug]?.description}
        </p>

        <div className="mt-5">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-cherry-deep">
            {t.collection.specialLabel}
          </p>
          <p className="mt-1 flex flex-wrap items-baseline gap-x-3">
            <span className="font-serif text-[2.1rem] font-semibold leading-none">
              <span className="sr-only">{t.collection.openingPrice}: </span>
              {formatRupiah(product.price)}
            </span>
            <s className="text-sm text-cocoa-soft">
              <span className="sr-only">{t.collection.regularPrice}: </span>
              {formatRupiah(product.originalPrice)}
            </s>
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-2.5">
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
            variant="secondary"
          >
            {t.collection.livePreview}
            <ExternalLink size={15} aria-hidden />
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
