"use client";

import { MessageCircle } from "lucide-react";
import { brand } from "@/data/content";
import { ctaPhoto } from "@/data/images";
import { useLang } from "@/lib/i18n";
import { generalInquiryUrl } from "@/lib/whatsapp";
import ButtonLink from "./ButtonLink";
import Floral from "./Floral";
import PhotoImage from "./Photo";
import Reveal from "./Reveal";
import Wave from "./Wave";

export default function Contact() {
  const { lang, t } = useLang();

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative bg-blush-light px-5 pb-16 pt-14 md:px-8 md:pb-28 md:pt-24"
    >
      <Wave className="text-blush-light" variant={1} />
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <Reveal variant="image" className="relative lg:order-2 lg:col-span-5">
          {/* A dried branch tucked behind the photo, peeking out of its corner. */}
          <Floral
            name="driedBranch"
            flip
            sway
            origin="0% 0%"
            sizes="(min-width: 1024px) 220px, 55vw"
            className="absolute right-0 -top-9 z-0 w-[46%] max-w-[15rem] lg:-right-10 lg:-top-12 lg:[mask-image:linear-gradient(to_left,transparent_0%,#000_26%)]"
          />
          <div className="relative z-10 mx-auto max-w-md pb-3 pr-3 lg:max-w-none">
            <div
              aria-hidden
              className="absolute inset-0 rounded-[1.5rem] rounded-tl-[6rem] bg-cream/80 lg:rounded-tl-[9rem]"
              style={{ top: "0.75rem", left: "0.75rem" }}
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] rounded-tl-[6rem] bg-blush lg:aspect-[4/5] lg:rounded-tl-[9rem]">
              <PhotoImage photo={ctaPhoto} lang={lang} sizes="(min-width: 1024px) 440px, 90vw" />
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal
            as="h2"
            className="font-serif text-[2.4rem] font-normal italic leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            <span id="contact-title">{t.cta.title}</span>
          </Reveal>
          <Reveal as="p" delay={100} className="mt-5 max-w-md text-lg leading-relaxed text-cocoa-soft">
            {t.cta.text}
          </Reveal>
          <Reveal delay={200} className="mt-8 flex flex-col items-start gap-4">
            <ButtonLink
              href={generalInquiryUrl(lang)}
              external
              externalLabel={t.collection.newTab}
              className="w-full sm:w-auto sm:px-9!"
            >
              <MessageCircle size={19} aria-hidden />
              {t.cta.button}
            </ButtonLink>
            <p className="text-sm text-cocoa-soft">
              {t.cta.numberLabel}: {brand.whatsappDisplay}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
