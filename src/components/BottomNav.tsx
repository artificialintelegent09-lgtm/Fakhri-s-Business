"use client";

import { Info, LayoutGrid, House, MessageCircle, type LucideIcon } from "lucide-react";
import { navItems } from "@/data/content";
import { useLang } from "@/lib/i18n";
import { useActiveSection } from "@/lib/useActiveSection";
import { generalInquiryUrl } from "@/lib/whatsapp";

const icons: Record<(typeof navItems)[number]["key"], LucideIcon> = {
  home: House,
  collection: LayoutGrid,
  info: Info,
};

const itemClass =
  "relative flex min-h-14 flex-1 flex-col items-center justify-center gap-0.5 text-[0.7rem] font-medium tracking-wide transition-colors duration-200";

/** Fixed thumb-reach navigation for phones. WhatsApp opens the chat directly. */
export default function BottomNav() {
  const { lang, t } = useLang();
  const active = useActiveSection();

  return (
    <nav
      aria-label={t.nav.mobileNav}
      className="fixed inset-x-0 bottom-0 z-50 rounded-t-[1.5rem] border-t border-blush/70 bg-cream-light/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-12px_30px_-18px_rgba(53,37,42,0.35)] backdrop-blur-md md:hidden"
    >
      <ul className="mx-auto flex max-w-md items-stretch px-2 pt-1.5">
        {navItems.map((item) => {
          const Icon = icons[item.key];
          const isActive = active === item.href.slice(1);
          return (
            <li key={item.key} className="flex flex-1">
              <a
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`${itemClass} ${isActive ? "text-cherry-deep" : "text-cocoa-soft"}`}
              >
                <span
                  className={`flex h-7 w-12 items-center justify-center rounded-full transition-colors duration-300 ${
                    isActive ? "bg-blush/70" : ""
                  }`}
                >
                  <Icon size={21} aria-hidden strokeWidth={isActive ? 2.1 : 1.6} />
                </span>
                {t.nav[item.key]}
              </a>
            </li>
          );
        })}
        <li className="flex flex-1">
          <a
            href={generalInquiryUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${itemClass} text-cocoa-soft`}
          >
            <span className="flex h-7 w-12 items-center justify-center">
              <MessageCircle size={21} aria-hidden strokeWidth={1.6} />
            </span>
            {t.nav.whatsapp}
            <span className="sr-only"> ({t.collection.newTab})</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
