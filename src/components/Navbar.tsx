"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { navItems } from "@/data/content";
import { useLang } from "@/lib/i18n";
import { generalInquiryUrl } from "@/lib/whatsapp";
import ButtonLink from "./ButtonLink";
import LanguageSwitch from "./LanguageSwitch";

export default function Navbar({ logo }: { logo: ReactNode }) {
  const { lang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Highlight the nav link of the section currently in view.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, []);

  // While the mobile menu is open: Escape closes it and the page doesn't scroll behind it.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-espresso/10 bg-cream/95 backdrop-blur-sm">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-espresso focus:px-5 focus:py-2.5 focus:text-cream"
      >
        {t.nav.skip}
      </a>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 md:h-20 md:px-8">
        <a href="#home" aria-label={t.nav.home_aria} onClick={() => setOpen(false)}>
          {logo}
        </a>

        <nav aria-label={t.nav.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-9 text-sm">
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.key}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative py-2 transition-colors duration-200 hover:text-pandan-deep ${
                      isActive ? "text-pandan-deep" : "text-espresso-soft"
                    }`}
                  >
                    {t.nav[item.key]}
                    <span
                      aria-hidden
                      className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-pandan transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <LanguageSwitch />
          <ButtonLink
            href={generalInquiryUrl(lang)}
            external
            externalLabel={t.collection.newTab}
            className="hidden min-h-10! px-5! text-sm! md:inline-flex"
          >
            {t.nav.whatsapp}
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.menu}
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-full lg:hidden"
          >
            {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label={t.nav.mainNav}
          className="fixed inset-x-0 top-16 z-40 flex h-[calc(100dvh-4rem)] flex-col bg-cream px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-6 md:top-20 md:h-[calc(100dvh-5rem)] md:px-8 lg:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item, index) => (
              <li key={item.key} className="border-b border-espresso/10">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-5 font-serif text-4xl"
                >
                  {t.nav[item.key]}
                  <span className="font-sans text-xs tracking-widest text-pandan-deep">
                    0{index + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink
            href={generalInquiryUrl(lang)}
            external
            externalLabel={t.collection.newTab}
            className="mt-auto w-full"
          >
            <MessageCircle size={18} aria-hidden />
            {t.nav.whatsapp}
          </ButtonLink>
        </nav>
      )}
    </header>
  );
}
