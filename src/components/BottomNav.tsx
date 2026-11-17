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
  "relative flex min-h-14 flex-1 flex-col items-center justify-center gap-1 text-[0.7rem] font-medium tracking-wide transition-colors duration-200";

/** Fixed thumb-reach navigation for phones. WhatsApp opens the chat directly. */
export default function BottomNav() {
  const { lang, t } = useLang();
  const active = useActiveSection();

  return (
    <nav
      aria-label={t.nav.mobileNav}
      className="fixed inset-x-0 bottom-0 z-50 rounded-t-[1.75rem] bg-cocoa pb-[env(safe-area-inset-bottom)] shadow-[0_-10px_30px_-12px_rgba(53,37,42,0.5)] md:hidden"
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
                className={`${itemClass} ${isActive ? "text-butter" : "text-cream/70"}`}
              >
                <Icon size={22} aria-hidden strokeWidth={isActive ? 2.25 : 1.75} />
                {t.nav[item.key]}
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute bottom-1 size-1 rounded-full bg-butter"
                  />
                )}
              </a>
            </li>
          );
        })}
        <li className="flex flex-1">
          <a
            href={generalInquiryUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${itemClass} text-cream/70`}
          >
            <MessageCircle size={22} aria-hidden strokeWidth={1.75} />
            {t.nav.whatsapp}
            <span className="sr-only"> ({t.collection.newTab})</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
