"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/content";
import { generalInquiryUrl } from "@/lib/whatsapp";
import ButtonLink from "./ButtonLink";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Tutup menu" : "Buka menu"}
        className="-mr-2 p-2"
      >
        {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Menu mobile"
          className="absolute inset-x-0 top-full border-b border-charcoal/10 bg-ivory px-6 pb-8 pt-4"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-charcoal/10 py-4 font-serif text-2xl"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink
            href={generalInquiryUrl}
            external
            className="mt-6 w-full"
          >
            Chat WhatsApp
          </ButtonLink>
        </nav>
      )}
    </div>
  );
}
