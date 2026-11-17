"use client";

import { Check } from "lucide-react";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";
import Wave from "./Wave";

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="relative bg-wash pb-16 pt-14 md:pb-28 md:pt-24"
    >
      <Wave className="text-wash" />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-xl">
          <Reveal
            as="h2"
            className="font-serif text-[2.5rem] font-normal italic leading-none sm:text-6xl"
          >
            <span id="how-title">{t.how.title}</span>
          </Reveal>
          <Reveal as="p" delay={100} className="mt-4 text-lg leading-relaxed text-cocoa-soft">
            {t.how.text}
          </Reveal>
        </div>

        {/* Steps: a vertical timeline on phones, three columns from md. */}
        <ol className="mt-10 grid gap-9 md:mt-16 md:grid-cols-3 md:gap-10">
          {t.how.steps.map((step, index) => (
            <li key={step.title} className="relative flex gap-5 md:block">
              {index < t.how.steps.length - 1 && (
                <Reveal
                  variant="line-y"
                  delay={index * 150}
                  className="absolute bottom-[-2.25rem] left-[1.4rem] top-14 w-px bg-cherry/35 md:hidden"
                />
              )}
              {index < t.how.steps.length - 1 && (
                <Reveal
                  variant="line"
                  delay={index * 150}
                  className="absolute left-14 right-[-2.5rem] top-[1.4rem] hidden h-px bg-cherry/30 md:block"
                />
              )}

              <Reveal
                delay={index * 150}
                className="relative z-10 flex size-[2.9rem] shrink-0 items-center justify-center rounded-full bg-cherry-deep font-serif text-xl font-semibold text-cream-light"
              >
                <span aria-hidden>{index + 1}</span>
              </Reveal>

              <Reveal delay={index * 150 + 100} className="md:mt-6">
                <h3 className="font-serif text-[1.65rem] font-semibold leading-tight md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs leading-relaxed text-cocoa-soft">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Service terms, kept short and scannable. */}
        <div className="mt-14 border-t border-cocoa/15 pt-8 md:mt-20 md:grid md:grid-cols-12 md:gap-10 md:pt-10">
          <Reveal as="h3" className="font-serif text-3xl font-semibold md:col-span-3">
            {t.how.infoTitle}
          </Reveal>
          <ul className="mt-5 grid gap-x-10 gap-y-3 md:col-span-9 md:mt-0 md:grid-cols-2">
            {t.how.info.map((line, index) => (
              <Reveal
                key={line}
                as="li"
                delay={(index % 2) * 80}
                className="flex items-start gap-3 text-[0.95rem] leading-relaxed"
              >
                <Check size={18} strokeWidth={2.25} aria-hidden className="mt-0.5 shrink-0 text-cherry-deep" />
                {line}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
