"use client";

import { useEffect } from "react";
import type { Lang } from "@/data/dictionaries";
import { useLang } from "@/lib/i18n";

const options: { value: Lang; label: string; name: string }[] = [
  { value: "id", label: "ID", name: "Bahasa Indonesia" },
  { value: "en", label: "EN", name: "English" },
];

export default function LanguageSwitch({ className = "" }: { className?: string }) {
  const { lang, t, setLang } = useLang();

  // Keep <html lang> in sync for screen readers and translation tools.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={`inline-flex items-center rounded-full border border-espresso/25 p-0.5 text-xs font-medium ${className}`}
    >
      {options.map((option) => {
        const selected = lang === option.value;
        return (
          <button
            key={option.value}
            type="button"
            lang={option.value}
            aria-pressed={selected}
            aria-label={option.name}
            onClick={() => setLang(option.value)}
            className={`min-h-9 min-w-10 rounded-full px-2.5 tracking-wider transition-colors duration-200 ${
              selected
                ? "bg-espresso text-cream"
                : "text-espresso-soft hover:text-espresso"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
