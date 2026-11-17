"use client";

import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import { heroCouple } from "@/data/images";
import { useLang } from "@/lib/i18n";
import { generalInquiryUrl } from "@/lib/whatsapp";
import ButtonLink from "./ButtonLink";
import Floral from "./Floral";
import Parallax from "./Parallax";
import PhotoImage from "./Photo";

const rise = (delay: number) => ({ "--d": `${delay}ms` }) as CSSProperties;

const toCream = "var(--color-cream)";

export default function Hero() {
  const { lang, t } = useLang();

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-cream pb-20 md:pb-28"
    >
      {/* A single soft pink wash (not a shape) so the photo, flowers and page colour share one tone. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 38% at 90% 12%, rgb(245 184 184 / 0.5), transparent 72%), radial-gradient(60% 30% at 0% 62%, rgb(245 184 184 / 0.32), transparent 70%)",
        }}
      />

      {/* Photo: full-bleed on phones, bleeding off the right edge on desktop. It dissolves into the page colour. */}
      <div className="hero-rise relative h-[min(24rem,48svh)] sm:h-[32rem] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[54%]" style={rise(0)}>
        <PhotoImage
          photo={heroCouple}
          lang={lang}
          priority
          sizes="(min-width: 1024px) 54vw, 100vw"
          className="[filter:sepia(0.16)_saturate(1.06)_brightness(1.02)]"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${toCream} 0%, rgb(255 242 204 / 0.82) 20%, transparent 52%), linear-gradient(to bottom, ${toCream} 0%, transparent 22%)`,
          }}
        />
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 hidden w-2/5 lg:block"
          style={{ background: `linear-gradient(to right, ${toCream} 8%, transparent)` }}
        />

        {/* Floral accents: one cherry-toned branch entering the top corner, one small bouquet leaning on the edge. */}
        <Parallax
          speed={-0.05}
          className="absolute -left-[9%] top-9 w-[40%] sm:-left-[5%] sm:w-[32%] lg:left-[6%] lg:top-16 lg:w-[26%] lg:[mask-image:linear-gradient(to_right,transparent_0%,#000_26%)]"
        >
          <Floral name="driedBranch" sway origin="0% 0%" sizes="(min-width: 1024px) 24vw, 40vw" />
        </Parallax>
        <Parallax
          speed={-0.1}
          className="absolute bottom-[4.75rem] right-[1%] z-10 w-[15%] sm:bottom-24 sm:w-[11%] lg:bottom-[12%] lg:right-[3%] lg:w-[9%]"
        >
          <Floral name="bouquet" sway sizes="(min-width: 1024px) 10vw, 16vw" />
        </Parallax>
      </div>

      <div className="relative z-10 mx-auto -mt-16 max-w-6xl px-5 sm:-mt-24 md:px-8 lg:mt-0 lg:flex lg:min-h-[44rem] lg:items-center">
        <div className="lg:w-[47%] lg:py-24">
          <h1
            id="hero-title"
            className="hero-rise font-serif text-[2.45rem] font-normal italic leading-[1.05] sm:text-6xl lg:text-[4.2rem]"
            style={rise(120)}
          >
            {t.hero.titleBefore}
            <span className="text-cherry-deep">{t.hero.titleEmphasis}</span>
            {t.hero.titleAfter}
          </h1>

          <p
            className="hero-rise mt-4 max-w-sm text-[1.05rem] leading-relaxed text-cocoa-soft"
            style={rise(240)}
          >
            {t.hero.text}
          </p>

          <div
            className="hero-rise mt-6 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4"
            style={rise(360)}
          >
            <ButtonLink href="#collection">
              {t.hero.ctaPrimary}
              <ArrowRight size={18} aria-hidden />
            </ButtonLink>
            <ButtonLink
              href={generalInquiryUrl(lang)}
              external
              externalLabel={t.collection.newTab}
              variant="link"
            >
              {t.hero.ctaSecondary}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
