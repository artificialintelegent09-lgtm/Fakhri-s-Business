"use client";

import { useLang } from "@/lib/i18n";
import BotanicalSprig from "./Botanical";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function ServiceInfo() {
  const { t } = useLang();

  return (
    <section
      aria-labelledby="service-title"
      className="px-5 py-20 md:px-8 md:py-28"
    >
      {/* Terms presented like an invitation card: paper, double frame, ornament. */}
      <Reveal className="relative mx-auto max-w-4xl bg-cream-light p-2.5 shadow-[0_30px_60px_-40px_rgba(43,27,19,0.5)] md:p-4">
        <div className="relative overflow-hidden border border-espresso/50 px-5 py-12 md:px-14 md:py-20">
          <BotanicalSprig className="pointer-events-none absolute -left-5 -top-4 h-36 w-24 -rotate-12 text-pandan/60 md:h-52 md:w-36" />
          <BotanicalSprig
            flip
            className="pointer-events-none absolute -right-5 -top-4 h-36 w-24 rotate-12 text-pandan/60 md:h-52 md:w-36"
          />

          <div className="relative">
            <SectionHeading
              id="service-title"
              align="center"
              eyebrow={t.service.eyebrow}
              title={t.service.title}
              text={t.service.text}
            />
          </div>

          <dl className="relative mt-12 grid gap-x-12 md:mt-16 md:grid-cols-2">
            {t.service.items.map((item, index) => (
              <Reveal
                key={item.title}
                delay={(index % 2) * 100}
                className="border-t border-espresso/20 py-5"
              >
                <dt className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-pandan-deep">
                  <span aria-hidden className="size-1.5 rotate-45 bg-pandan" />
                  {item.title}
                </dt>
                <dd className="mt-2 leading-relaxed">{item.text}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
