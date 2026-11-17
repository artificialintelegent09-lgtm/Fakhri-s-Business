"use client";

import { ArrowRight, Sparkle } from "lucide-react";
import type { CSSProperties } from "react";
import { heroBouquet, heroCouple } from "@/data/images";
import { useLang } from "@/lib/i18n";
import { generalInquiryUrl } from "@/lib/whatsapp";
import ButtonLink from "./ButtonLink";
import Parallax from "./Parallax";
import PhotoImage from "./Photo";

const rise = (delay: number) => ({ "--d": `${delay}ms` }) as CSSProperties;

export default function Hero() {
  const { lang, t } = useLang();

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-24 pt-4 md:pb-32 md:pt-8"
    >
      {/* Soft colour fields behind the content. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-24 size-72 rounded-full bg-blush/70 md:-left-20 md:size-[26rem]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8 lg:grid lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-6">
          <h1
            id="hero-title"
            className="hero-rise font-serif text-[2.6rem] font-normal italic leading-[1.04] sm:text-6xl lg:text-[4.5rem]"
            style={rise(0)}
          >
            {t.hero.titleBefore}
            <span className="text-cherry-deep">{t.hero.titleEmphasis}</span>
            {t.hero.titleAfter}
          </h1>

          <p
            className="hero-rise mt-5 max-w-sm text-lg leading-relaxed text-cocoa-soft"
            style={rise(140)}
          >
            {t.hero.text}
          </p>

          <div
            className="hero-rise mt-7 flex flex-col gap-3 sm:flex-row"
            style={rise(280)}
          >
            <ButtonLink href="#collection">
              {t.hero.ctaPrimary}
              <ArrowRight size={18} aria-hidden />
            </ButtonLink>
            <ButtonLink
              href={generalInquiryUrl(lang)}
              external
              externalLabel={t.collection.newTab}
              variant="secondary"
            >
              {t.hero.ctaSecondary}
            </ButtonLink>
          </div>
        </div>

        {/* Photo composition: a tall arched portrait with a detail photo layered on top. */}
        <div
          className="hero-rise relative mx-auto mt-10 w-[86%] max-w-sm sm:max-w-md lg:col-span-6 lg:mt-0 lg:w-full lg:max-w-lg lg:justify-self-end"
          style={rise(200)}
        >
          <div
            aria-hidden
            className="absolute -right-5 -top-5 size-28 rounded-full bg-butter/70 sm:size-36 lg:-right-8 lg:-top-8 lg:size-44"
          />
          <Parallax speed={-0.05}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-blush shadow-[0_30px_60px_-30px_rgba(53,37,42,0.55)]">
              <PhotoImage
                photo={heroCouple}
                lang={lang}
                priority
                sizes="(min-width: 1024px) 512px, (min-width: 640px) 448px, 86vw"
              />
            </div>
          </Parallax>

          <Parallax
            speed={-0.12}
            className="absolute -bottom-6 -left-5 z-10 w-[40%] sm:-left-8"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border-4 border-cream shadow-[0_20px_40px_-20px_rgba(53,37,42,0.6)]">
              <PhotoImage
                photo={heroBouquet}
                lang={lang}
                priority
                sizes="(min-width: 640px) 180px, 34vw"
              />
            </div>
          </Parallax>

          <Sparkle
            aria-hidden
            size={30}
            strokeWidth={1.5}
            className="absolute -right-3 top-[18%] fill-butter text-cherry"
          />
          <Sparkle
            aria-hidden
            size={16}
            strokeWidth={1.5}
            className="absolute -right-5 top-[26%] fill-cherry text-cherry"
          />
        </div>
      </div>
    </section>
  );
}
