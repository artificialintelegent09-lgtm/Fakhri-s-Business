"use client";

import { Gem, Heart, Send, type LucideIcon } from "lucide-react";
import { whyPhoto } from "@/data/images";
import { useLang } from "@/lib/i18n";
import Parallax from "./Parallax";
import PhotoImage from "./Photo";
import Reveal from "./Reveal";

const icons: LucideIcon[] = [Gem, Heart, Send];

export default function WhyRiWed() {
  const { lang, t } = useLang();

  return (
    <section
      aria-labelledby="why-title"
      className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-28 lg:grid-cols-12 lg:items-center lg:gap-20"
    >
      <Reveal variant="image" className="lg:col-span-5">
        <Parallax speed={0.04}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] rounded-tr-[6rem] bg-blush lg:aspect-[4/5] lg:rounded-tr-[9rem]">
            <PhotoImage
              photo={whyPhoto}
              lang={lang}
              sizes="(min-width: 1024px) 440px, 90vw"
            />
          </div>
        </Parallax>
      </Reveal>

      <div className="lg:col-span-7">
        <Reveal
          as="h2"
          className="font-serif text-[2.4rem] font-normal italic leading-none sm:text-6xl"
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
                className="flex items-start gap-4 border-t border-cocoa/15 py-5 md:gap-6 md:py-7"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blush text-cherry-deep md:size-14">
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
    </section>
  );
}
