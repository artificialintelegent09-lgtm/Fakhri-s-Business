"use client";

import type { ReactNode } from "react";
import { brand, navItems } from "@/data/content";
import { useLang } from "@/lib/i18n";
import { generalInquiryUrl } from "@/lib/whatsapp";
import LanguageSwitch from "./LanguageSwitch";

export default function Footer({ logo }: { logo: ReactNode }) {
  const { lang, t } = useLang();

  return (
    <footer className="relative overflow-hidden bg-espresso text-cream">
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-10 pt-16 md:grid-cols-[1.5fr_1fr_1fr] md:px-8 md:pt-20">
        <div>
          {logo}
          <p className="mt-5 max-w-xs font-serif text-2xl font-light italic leading-snug text-cream/85">
            {brand.tagline}
          </p>
          <LanguageSwitch className="mt-6 border-cream/30 [&_button]:text-cream/70 [&_button:hover]:text-cream [&_button[aria-pressed=true]]:bg-cream [&_button[aria-pressed=true]]:text-espresso" />
        </div>

        <nav aria-label={t.nav.mainNav}>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-pandan">
            {t.footer.menu}
          </p>
          <ul className="space-y-1 text-[0.95rem]">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="inline-block py-1.5 text-cream/75 transition-colors duration-200 hover:text-cream"
                >
                  {t.nav[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-pandan">
            {t.footer.contact}
          </p>
          <a
            href={generalInquiryUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-1.5 text-[0.95rem] text-cream/75 transition-colors duration-200 hover:text-cream"
          >
            WhatsApp {brand.whatsappDisplay}
            <span className="sr-only"> ({t.collection.newTab})</span>
          </a>
        </div>
      </div>

      {/* Oversized wordmark as a quiet editorial closing. */}
      <p
        aria-hidden
        className="pointer-events-none select-none text-center font-serif text-[27vw] font-light leading-[0.8] tracking-tight text-cream/[0.06] md:text-[19rem]"
      >
        {brand.name}
      </p>

      <div className="relative border-t border-cream/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-6 text-xs text-cream/60 sm:flex-row sm:justify-between md:px-8">
          <p>
            &copy; {brand.copyrightYear} {brand.name}. {t.footer.rights}
          </p>
          <p>{t.footer.watermark}</p>
        </div>
      </div>
    </footer>
  );
}
