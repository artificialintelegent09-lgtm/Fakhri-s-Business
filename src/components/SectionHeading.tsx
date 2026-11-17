import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  text?: string;
  align?: "left" | "center";
  /** Use on espresso backgrounds. */
  tone?: "light" | "dark";
};

export default function SectionHeading({
  id,
  eyebrow,
  title,
  text,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <Reveal
          as="p"
          className={`mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] ${
            dark ? "text-pandan" : "text-pandan-deep"
          } ${centered ? "justify-center" : ""}`}
        >
          <span aria-hidden className="h-px w-8 bg-pandan" />
          {eyebrow}
        </Reveal>
      )}
      <Reveal
        as="h2"
        delay={100}
        className="font-serif text-[2.5rem] font-light leading-[1.05] sm:text-6xl"
      >
        <span id={id}>{title}</span>
      </Reveal>
      {text && (
        <Reveal
          as="p"
          delay={200}
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            dark ? "text-cream/75" : "text-espresso-soft"
          }`}
        >
          {text}
        </Reveal>
      )}
    </div>
  );
}
