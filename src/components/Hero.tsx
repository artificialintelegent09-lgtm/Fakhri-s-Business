"use client";

import type { CSSProperties } from "react";
import { products } from "@/data/products";
import { useLang } from "@/lib/i18n";
import { generalInquiryUrl } from "@/lib/whatsapp";
import BotanicalSprig from "./Botanical";
import ButtonLink from "./ButtonLink";
import Parallax from "./Parallax";
import ProductVisual from "./ProductVisual";

const rise = (delay: number) => ({ "--d": `${delay}ms` }) as CSSProperties;

export default function Hero() {
  const { lang, t } = useLang();
  const [classic, modern, botanical] = products;

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative mx-auto max-w-6xl px-5 pb-28 pt-8 md:px-8 md:pb-32 md:pt-14 lg:grid lg:grid-cols-12 lg:items-center lg:gap-6 lg:pt-10"
    >
      <div className="lg:col-span-6">
        <p
          className="hero-rise mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-pandan-deep"
          style={rise(0)}
        >
          <span aria-hidden className="h-px w-8 bg-pandan" />
          {t.hero.eyebrow}
        </p>

        <h1
          id="hero-title"
          className="hero-rise font-serif text-[2.75rem] font-light leading-[1.02] sm:text-6xl lg:text-[4.75rem]"
          style={rise(120)}
        >
          {t.hero.titleBefore}
          <em className="font-medium italic text-pandan-deep">{t.hero.titleEmphasis}</em>
          {t.hero.titleAfter}
        </h1>

        <p
          className="hero-rise mt-6 max-w-md text-base leading-relaxed text-espresso-soft md:text-lg"
          style={rise(260)}
        >
          {t.hero.text}
        </p>

        <div
          className="hero-rise mt-8 flex flex-col gap-3 sm:flex-row"
          style={rise(400)}
        >
          <ButtonLink href="#collection" variant="dark">
            {t.hero.ctaPrimary}
          </ButtonLink>
          <ButtonLink
            href={generalInquiryUrl(lang)}
            external
            externalLabel={t.collection.newTab}
            variant="primary"
          >
            {t.hero.ctaSecondary}
          </ButtonLink>
        </div>

        <dl
          className="hero-rise mt-10 grid max-w-md grid-cols-3 border-t border-espresso/20 pt-5"
          style={rise(540)}
        >
          {t.hero.facts.map((fact) => (
            <div key={fact.label} className="flex flex-col pr-3">
              <dt className="order-2 mt-1 text-[0.7rem] uppercase leading-snug tracking-[0.12em] text-espresso-soft">
                {fact.label}
              </dt>
              <dd className="font-serif text-2xl leading-none md:text-3xl">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Layered invitation composition. Layers drift at different speeds on desktop. */}
      <div
        className="hero-rise relative mx-auto mt-14 h-[26rem] w-full max-w-md sm:h-[32rem] lg:col-span-6 lg:mt-0 lg:h-[39rem] lg:max-w-none"
        style={rise(300)}
        aria-hidden
      >
        <Parallax speed={0.05} className="absolute inset-y-0 right-[4%] w-[68%]">
          <div className="size-full rounded-t-full border border-pandan bg-pandan/10" />
        </Parallax>

        <Parallax speed={-0.06} className="absolute left-0 top-[16%] w-[34%]">
          <div className="-rotate-6 shadow-[0_24px_40px_-24px_rgba(43,27,19,0.5)]">
            <div className="aspect-[3/4]">
              <ProductVisual theme={botanical.theme} />
            </div>
          </div>
        </Parallax>

        <Parallax speed={-0.1} className="absolute right-[9%] top-[5%] z-10 w-[50%]">
          <div className="shadow-[0_30px_50px_-28px_rgba(43,27,19,0.55)]">
            <div className="aspect-[3/4]">
              <ProductVisual theme={classic.theme} />
            </div>
          </div>
        </Parallax>

        <Parallax speed={-0.18} className="absolute bottom-0 left-[12%] z-20 w-[37%]">
          <div className="rotate-3 border-4 border-cream shadow-[0_24px_40px_-24px_rgba(43,27,19,0.55)] sm:border-[6px]">
            <div className="aspect-[3/4]">
              <ProductVisual theme={modern.theme} />
            </div>
          </div>
        </Parallax>

        <Parallax speed={0.1} className="absolute -right-3 bottom-2 z-30 h-36 w-24 sm:h-48 sm:w-32">
          <BotanicalSprig className="size-full text-pandan" />
        </Parallax>
      </div>
    </section>
  );
}
