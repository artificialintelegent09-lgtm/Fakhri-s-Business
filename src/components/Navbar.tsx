"use client";

import type { ReactNode } from "react";
import { navItems } from "@/data/content";
import { useLang } from "@/lib/i18n";
import { useActiveSection } from "@/lib/useActiveSection";
import { generalInquiryUrl } from "@/lib/whatsapp";
import ButtonLink from "./ButtonLink";
import LanguageSwitch from "./LanguageSwitch";

/** Top bar: logo + language on mobile; full horizontal navigation from md. */
export default function Navbar({ logo }: { logo: ReactNode }) {
  const { lang, t } = useLang();
  const active = useActiveSection();

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-sm">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-cocoa focus:px-5 focus:py-2.5 focus:text-cream"
      >
        {t.nav.skip}
      </a>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        <a href="#home" aria-label={t.nav.homeAria}>
          {logo}
        </a>

        <nav aria-label={t.nav.mainNav} className="hidden md:block">
          <ul className="flex items-center gap-10 text-sm">
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.key}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative py-2 transition-colors duration-200 hover:text-cherry-deep ${
                      isActive ? "text-cherry-deep" : "text-cocoa-soft"
                    }`}
                  >
                    {t.nav[item.key]}
                    <span
                      aria-hidden
                      className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-cherry transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitch />
          <div className="hidden md:block">
            <ButtonLink
              href={generalInquiryUrl(lang)}
              external
              externalLabel={t.collection.newTab}
              className="min-h-10! px-5! text-sm!"
            >
              {t.nav.whatsapp}
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
