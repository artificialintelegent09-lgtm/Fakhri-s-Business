import { navLinks } from "@/data/content";
import { generalInquiryUrl } from "@/lib/whatsapp";
import ButtonLink from "./ButtonLink";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/95 backdrop-blur-sm">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-charcoal focus:px-4 focus:py-2 focus:text-ivory"
      >
        Lewati ke konten utama
      </a>
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20">
        <a href="#home" aria-label="RiWed — kembali ke atas">
          <Logo />
        </a>

        <nav aria-label="Navigasi utama" className="hidden md:block">
          <ul className="flex items-center gap-10 text-sm">
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

        <ButtonLink
          href={generalInquiryUrl}
          external
          className="hidden px-5! py-2.5! md:inline-flex"
        >
          Chat WhatsApp
        </ButtonLink>

        <MobileMenu />
      </div>
    </header>
  );
}
