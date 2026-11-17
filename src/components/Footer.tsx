import { brand, navLinks } from "@/data/content";
import { generalInquiryUrl } from "@/lib/whatsapp";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 font-serif text-xl italic text-muted">
            {brand.tagline}
          </p>
        </div>

        <nav aria-label="Navigasi footer">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brown">
            Menu
          </p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted transition-colors duration-200 hover:text-charcoal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brown">
            Contact
          </p>
          <a
            href={generalInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors duration-200 hover:text-charcoal"
          >
            WhatsApp {brand.whatsappDisplay}
            <span className="sr-only"> (membuka tab baru)</span>
          </a>
        </div>
      </div>

      <div className="border-t border-charcoal/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            &copy; {brand.copyrightYear} {brand.name}. All rights reserved.
          </p>
          <p>{brand.watermark}</p>
        </div>
      </div>
    </footer>
  );
}
