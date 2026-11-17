"use client";

import type { ReactNode } from "react";
import { brand } from "@/data/content";
import { useLang } from "@/lib/i18n";
import Wave from "./Wave";

export default function Footer({ logo }: { logo: ReactNode }) {
  const { t } = useLang();

  return (
    <footer className="relative bg-cocoa pb-[calc(5rem+env(safe-area-inset-bottom))] pt-6 text-cream md:pb-0">
      <Wave className="text-cocoa" />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between">
          <div>
            {logo}
            <p className="mt-4 font-serif text-2xl italic text-cream/85">{brand.tagline}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream/65">
              {t.footer.about}
            </p>
          </div>
          <p className="text-sm text-cream/65">{t.footer.watermark}</p>
        </div>

        <div className="flex flex-col gap-1 border-t border-cream/15 py-5 text-xs text-cream/55 sm:flex-row sm:justify-between">
          <p>
            &copy; {brand.copyrightYear} {brand.name}. {t.footer.rights}
          </p>
          <p>{t.footer.photoNote}</p>
        </div>
      </div>
    </footer>
  );
}
