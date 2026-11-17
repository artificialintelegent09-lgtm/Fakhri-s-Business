import { serviceInfo } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function ServiceInfo() {
  return (
    <section
      aria-labelledby="service-title"
      className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1fr_1.4fr] lg:gap-20"
    >
      <SectionHeading
        id="service-title"
        eyebrow="Informasi Layanan"
        title="Good to know before you order."
        text="Ketentuan layanan RiWed, kami rangkum agar proses pemesanan terasa jelas dan nyaman."
        align="left"
      />

      <dl className="grid gap-x-10 sm:grid-cols-2">
        {serviceInfo.map((item) => (
          <div key={item.title} className="border-t border-charcoal/15 py-6">
            <dt className="text-xs font-medium uppercase tracking-[0.2em] text-brown">
              {item.title}
            </dt>
            <dd className="mt-2 leading-relaxed">{item.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
