"use client";

import { Gem, Heart, Send, type LucideIcon } from "lucide-react";
import { whyPhoto } from "@/data/images";
import { useLang } from "@/lib/i18n";
import PhotoImage from "./Photo";
import Reveal from "./Reveal";
import Wave from "./Wave";

const icons: LucideIcon[] = [Gem, Heart, Send];

export default function WhyRiWed() {
  const { lang, t } = useLang();

  return (
    <section
      aria-labelledby="why-title"
      className="relative bg-cream px-5 pb-16 pt-14 md:px-8 md:pb-28 md:pt-24"
    >
      <Wave className="text-cream" variant={1} />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:items-center lg:gap-20">
        <Reveal variant="image" className="relative lg:col-span-5">
          {/* Same pink mount as the collection previews, so the page reads as one system. */}
          <div className="relative pb-3 pr-3">
            <div
              aria-hidden
              className="absolute inset-0 rounded-[1.5rem] rounded-tr-[6rem] bg-blush/55 lg:rounded-tr-[9rem]"
              style={{ top: "0.75rem", left: "0.75rem" }}
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] rounded-tr-[6rem] bg-blush-light lg:aspect-[4/5] lg:rounded-tr-[9rem]">
              <PhotoImage photo={whyPhoto} lang={lang} sizes="(min-width: 1024px) 440px, 90vw" />
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal
            as="h2"
            className="font-serif text-[2.5rem] font-normal italic leading-none sm:text-6xl"
          >
            <span id="why-title">{t.why.title}</span>
          </Reveal>

          <ul className="mt-8 md:mt-12">
            {t.why.items.map((item, index) => {
              const Icon = icons[index];
              return (
                <Reveal
                  key={item.title}
                  as="li"
                  delay={index * 110}
                  className="flex items-start gap-4 border-t border-cocoa/12 py-5 md:gap-6 md:py-7"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blush/70 text-cherry-deep md:size-14">
                    <Icon size={22} strokeWidth={1.5} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-serif text-[1.65rem] font-semibold leading-tight md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-w-md leading-relaxed text-cocoa-soft">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
