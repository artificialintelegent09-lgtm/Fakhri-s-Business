"use client";

import { useLang } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function WhyRiWed() {
  const { t } = useLang();

  return (
    <section
      aria-labelledby="why-title"
      className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:gap-16"
    >
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-32">
          <SectionHeading id="why-title" eyebrow={t.why.eyebrow} title={t.why.title} />
        </div>
      </div>

      <ol className="lg:col-span-7">
        {t.why.items.map((item, index) => (
          <Reveal
            key={item.title}
            as="li"
            delay={index % 2 === 0 ? 0 : 100}
            className="grid grid-cols-[3.25rem_1fr] gap-x-4 border-t border-espresso/20 py-7 first:border-t-0 first:pt-0 md:grid-cols-[5rem_1fr] md:py-9"
          >
            <span
              aria-hidden
              className="font-serif text-5xl font-light italic leading-none text-pandan-deep md:text-6xl"
            >
              {index + 1}
            </span>
            <div>
              <h3 className="font-serif text-[1.7rem] font-medium leading-tight md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-2 max-w-md leading-relaxed text-espresso-soft">
                {item.text}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
