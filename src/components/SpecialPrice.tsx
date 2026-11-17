"use client";

import { products } from "@/data/products";
import { useLang } from "@/lib/i18n";
import { formatRupiah } from "@/lib/whatsapp";
import BotanicalSprig from "./Botanical";
import Reveal from "./Reveal";

export default function SpecialPrice() {
  const { t } = useLang();

  return (
    <section
      aria-labelledby="special-price-title"
      className="relative overflow-hidden bg-espresso py-20 text-cream md:py-28"
    >
      <BotanicalSprig className="pointer-events-none absolute -right-6 -top-4 h-64 w-40 text-pandan/25 md:right-10 md:h-96 md:w-60" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-20">
        <div>
          <Reveal
            as="h2"
            className="font-serif text-[2.4rem] font-light uppercase leading-[1.05] tracking-[0.1em] sm:text-6xl"
          >
            <span id="special-price-title">{t.special.title}</span>
          </Reveal>
          <Reveal variant="line" delay={150} className="mt-6 h-px w-20 bg-pandan" />
          <Reveal
            as="p"
            delay={200}
            className="mt-6 max-w-md text-lg leading-relaxed text-cream/85"
          >
            {t.special.text}
          </Reveal>
          <Reveal
            as="p"
            delay={300}
            className="mt-4 max-w-md text-sm leading-relaxed text-cream/60"
          >
            {t.special.note}
          </Reveal>
        </div>

        <ul className="border-t border-cream/20">
          {products.map((product, index) => (
            <Reveal
              key={product.slug}
              as="li"
              delay={index * 120}
              className="flex items-baseline justify-between gap-4 border-b border-cream/20 py-5 md:py-6"
            >
              <span className="font-serif text-2xl md:text-3xl">{product.name}</span>
              <span className="flex items-baseline gap-3">
                <s className="text-sm text-cream/55">
                  <span className="sr-only">{t.collection.regularPrice}: </span>
                  {formatRupiah(product.originalPrice)}
                </s>
                <span className="font-serif text-3xl text-pandan md:text-4xl">
                  <span className="sr-only">{t.collection.openingPrice}: </span>
                  {formatRupiah(product.price)}
                </span>
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
