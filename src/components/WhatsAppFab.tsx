"use client";

import { MessageCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { generalInquiryUrl } from "@/lib/whatsapp";

/** Always-reachable WhatsApp shortcut on phones; the navbar button covers larger screens. */
export default function WhatsAppFab() {
  const { lang, t } = useLang();

  return (
    <a
      href={generalInquiryUrl(lang)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.nav.whatsapp} (${t.collection.newTab})`}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex size-14 items-center justify-center rounded-full bg-pandan text-espresso shadow-[0_10px_30px_-8px_rgba(43,27,19,0.55)] transition-colors duration-300 active:scale-95 md:hidden"
    >
      <MessageCircle size={26} aria-hidden />
    </a>
  );
}
