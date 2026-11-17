"use client";

import { ExternalLink } from "lucide-react";
import type { Product } from "@/data/products";
import { useLang } from "@/lib/i18n";
import { formatRupiah, productOrderUrl } from "@/lib/whatsapp";
import ButtonLink from "./ButtonLink";
import Parallax from "./Parallax";
import ProductVisual from "./ProductVisual";
import Reveal from "./Reveal";

type ProductCardProps = {
  product: Product;
  index: number;
  total: number;
  coverSrc: string | null;
  className?: string;
};

export default function ProductCard({
  product,
  index,
  total,
  coverSrc,
  className = "",
}: ProductCardProps) {
  const { lang, t } = useLang();
  const description = t.products[product.slug]?.description ?? "";

  return (
    <Reveal as="div" className={className}>
      <article className="group flex h-full flex-col">
        <Parallax speed={index === 1 ? -0.04 : 0.025}>
          <Reveal variant="image" className="relative overflow-hidden bg-cream-light">
            <div className="aspect-[4/5]">
              <div className="size-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                <ProductVisual
                  theme={product.theme}
                  imageSrc={coverSrc}
                  alt={t.collection.previewAlt(product.name)}
                />
              </div>
            </div>
          </Reveal>
        </Parallax>

        <div className="mt-6 flex flex-1 flex-col">
          <p className="flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-pandan-deep">
            <span>
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <span aria-hidden className="h-px flex-1 bg-espresso/15" />
          </p>

          <h3 className="mt-4 font-serif text-[2rem] font-medium leading-none md:text-4xl">
            {product.name}
          </h3>
          <p className="mt-3 text-espresso-soft">{description}</p>

          <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-serif text-4xl font-medium leading-none">
              <span className="sr-only">{t.collection.openingPrice}: </span>
              {formatRupiah(product.price)}
            </span>
            <s className="text-sm text-espresso-soft">
              <span className="sr-only">{t.collection.regularPrice}: </span>
              {formatRupiah(product.originalPrice)}
            </s>
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <ButtonLink
              href={productOrderUrl(product, lang)}
              external
              externalLabel={t.collection.newTab}
              className="flex-1"
            >
              {t.collection.orderNow}
            </ButtonLink>
            <ButtonLink
              href={product.demoUrl}
              external
              externalLabel={t.collection.newTab}
              variant="secondary"
              className="flex-1"
            >
              {t.collection.livePreview}
              <ExternalLink size={15} aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
