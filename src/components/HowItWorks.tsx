"use client";

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="relative -mt-10 rounded-t-[2.5rem] bg-cream-light py-20 md:-mt-14 md:rounded-t-[4rem] md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading id="how-title" eyebrow={t.how.eyebrow} title={t.how.title} />

        <ol className="mt-14 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-10">
          {t.how.steps.map((step, index) => (
            <li key={step.title} className="relative pl-8 md:pl-0 md:pt-9">
              {/* Timeline: vertical on mobile, horizontal from md. */}
              {index < t.how.steps.length - 1 && (
                <Reveal
                  variant="line-y"
                  delay={index * 150}
                  className="absolute bottom-[-3rem] left-0 top-2 w-px bg-espresso/25 md:hidden"
                />
              )}
              <Reveal
                variant="line"
                delay={index * 150}
                className="absolute left-0 right-[-2.5rem] top-0 hidden h-px bg-espresso/25 md:block"
              />
              <span
                aria-hidden
                className="absolute left-[-4.5px] top-2 size-2.5 rounded-full bg-pandan md:-top-[4.5px]"
              />

              <Reveal delay={index * 150 + 100}>
                <p
                  aria-hidden
                  className="font-serif text-7xl font-light italic leading-none text-pandan-deep md:text-8xl"
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-serif text-[1.75rem] font-medium leading-tight md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-sm leading-relaxed text-espresso-soft">
                  {step.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
