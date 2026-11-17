import { MessageCircle } from "lucide-react";
import { brand } from "@/data/content";
import { generalInquiryUrl } from "@/lib/whatsapp";
import ButtonLink from "./ButtonLink";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-beige px-6 py-24 text-center md:py-32"
    >
      <div className="mx-auto max-w-2xl">
        <div aria-hidden className="mx-auto mb-8 h-px w-16 bg-champagne" />
        <h2
          id="contact-title"
          className="font-serif text-4xl font-medium leading-tight sm:text-5xl md:text-6xl"
        >
          Let&apos;s make your special day unforgettable.
        </h2>
        <p className="mx-auto mt-6 max-w-lg leading-relaxed text-muted">
          Have a design in mind? Let&apos;s create a beautiful invitation for
          your special moment.
        </p>
        <ButtonLink
          href={generalInquiryUrl}
          external
          className="mt-10 px-8!"
        >
          <MessageCircle size={18} aria-hidden />
          Order via WhatsApp
        </ButtonLink>
        <p className="mt-5 text-sm text-muted">
          WhatsApp: {brand.whatsappDisplay}
        </p>
      </div>
    </section>
  );
}
