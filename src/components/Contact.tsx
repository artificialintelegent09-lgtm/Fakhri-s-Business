"use client";

import { MessageCircle } from "lucide-react";
import { brand } from "@/data/content";
import { ctaPhoto } from "@/data/images";
import { useLang } from "@/lib/i18n";
import { generalInquiryUrl } from "@/lib/whatsapp";
import ButtonLink from "./ButtonLink";
import PhotoImage from "./Photo";
import Reveal from "./Reveal";

export default function Contact() {
  const { lang, t } = useLang();

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative -mt-8 rounded-t-[2.5rem] bg-cocoa py-16 text-cream md:-mt-12 md:rounded-t-[4rem] md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-12 lg:items-center lg:gap-16">
        <Reveal variant="image" className="lg:order-2 lg:col-span-5">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-[2rem] rounded-tl-[6rem] bg-cocoa-soft lg:aspect-[4/5] lg:max-w-none lg:rounded-tl-[9rem]">
            <PhotoImage
              photo={ctaPhoto}
              lang={lang}
              sizes="(min-width: 1024px) 440px, 90vw"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal
            as="h2"
            className="font-serif text-[2.4rem] font-normal italic leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            <span id="contact-title">{t.cta.title}</span>
          </Reveal>
          <Reveal as="p" delay={100} className="mt-5 max-w-md text-lg leading-relaxed text-cream/75">
            {t.cta.text}
          </Reveal>
          <Reveal delay={200} className="mt-8 flex flex-col items-start gap-4">
            <ButtonLink
              href={generalInquiryUrl(lang)}
              external
              externalLabel={t.collection.newTab}
              variant="gold"
              className="w-full sm:w-auto sm:px-9!"
            >
              <MessageCircle size={19} aria-hidden />
              {t.cta.button}
            </ButtonLink>
            <p className="text-sm text-cream/65">
              {t.cta.numberLabel}: {brand.whatsappDisplay}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
