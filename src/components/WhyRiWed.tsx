import { benefits } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function WhyRiWed() {
  return (
    <section
      aria-labelledby="why-title"
      className="mx-auto max-w-6xl px-6 py-20 md:py-28"
    >
      <SectionHeading
        id="why-title"
        eyebrow="Why RiWed"
        title="Simple, elegant, and personal."
      />

      <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ icon: Icon, title, text }) => (
          <li key={title} className="border-t border-champagne pt-6">
            <Icon size={26} strokeWidth={1.25} aria-hidden className="text-brown" />
            <h3 className="mt-5 font-serif text-2xl font-medium">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
