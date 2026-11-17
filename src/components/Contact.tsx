"use client";

import { MessageCircle } from "lucide-react";
import { brand } from "@/data/content";
import { useLang } from "@/lib/i18n";
import { generalInquiryUrl } from "@/lib/whatsapp";
import BotanicalSprig from "./Botanical";
import ButtonLink from "./ButtonLink";
import Reveal from "./Reveal";

export default function Contact() {
  const { lang, t } = useLang();

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-cream-deep px-5 pb-24 pt-20 md:px-8 md:pb-32 md:pt-28"
    >
      {/* Arched frame echoing the hero and the invitation artwork. */}
      <Reveal
        variant="fade"
        className="mx-auto max-w-3xl rounded-t-[10rem] border border-espresso/30 px-6 pb-14 pt-12 text-center md:rounded-t-[18rem] md:px-16 md:pb-20 md:pt-20"
      >
        <BotanicalSprig className="mx-auto h-20 w-14 text-pandan md:h-28 md:w-20" />

        <Reveal
          as="h2"
          delay={100}
          className="mt-6 font-serif text-[2.4rem] font-light leading-[1.05] sm:text-5xl md:text-6xl"
        >
          <span id="contact-title">{t.contact.title}</span>
        </Reveal>
        <Reveal
          as="p"
          delay={200}
          className="mx-auto mt-6 max-w-md leading-relaxed text-espresso-soft md:text-lg"
        >
          {t.contact.text}
        </Reveal>
        <Reveal delay={300} className="mt-9 flex flex-col items-center gap-4">
          <ButtonLink
            href={generalInquiryUrl(lang)}
            external
            externalLabel={t.collection.newTab}
            className="w-full sm:w-auto sm:px-10"
          >
            <MessageCircle size={19} aria-hidden />
            {t.contact.cta}
          </ButtonLink>
          <p className="text-sm text-espresso-soft">
            {t.contact.numberLabel}: {brand.whatsappDisplay}
          </p>
        </Reveal>
      </Reveal>
    </section>
  );
}
