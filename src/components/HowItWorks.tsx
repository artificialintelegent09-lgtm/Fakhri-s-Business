import { steps } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="bg-beige/50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          id="how-title"
          eyebrow="How It Works"
          title="Three simple steps."
        />

        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {steps.map((step) => (
            <li key={step.number}>
              <p className="font-serif text-6xl font-light leading-none text-champagne">
                {step.number}
              </p>
              <h3 className="mt-6 font-serif text-2xl font-medium">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
