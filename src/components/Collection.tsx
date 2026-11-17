"use client";

import { ChevronsRight } from "lucide-react";
import { useRef, useState } from "react";
import { products } from "@/data/products";
import { useLang } from "@/lib/i18n";
import Floral from "./Floral";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import Wave from "./Wave";

// Asymmetric offsets on large screens; stacked/swiped and aligned on mobile.
const offsets = ["", "lg:mt-20", "lg:mt-8"];

export default function Collection() {
  const { t } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const cards = () => Array.from(trackRef.current?.children ?? []) as HTMLElement[];

  // Slides are centered with equal padding, so scroll position maps evenly to an index.
  const onScroll = () => {
    const [first, second] = cards();
    if (!trackRef.current || !second) return;
    const step = second.offsetLeft - first.offsetLeft;
    const next = Math.round(trackRef.current.scrollLeft / step);
    setCurrent((prev) => (prev === next ? prev : next));
  };

  const goTo = (index: number) => {
    const list = cards();
    if (!trackRef.current || !list[index]) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    trackRef.current.scrollTo({
      left: list[index].offsetLeft - list[0].offsetLeft,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="collection"
      aria-labelledby="collection-title"
      className="relative bg-cream-light pb-16 pt-12 md:pb-28 md:pt-20"
    >
      <Wave className="text-cream-light" />
      {/* Pink wash in one corner; the section stays butter cream. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 22% at 100% 0%, rgb(245 184 184 / 0.4), transparent 72%), radial-gradient(50% 18% at 0% 100%, rgb(245 184 184 / 0.28), transparent 72%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="relative max-w-xl pr-16 sm:pr-0">
          <p className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-cherry-deep">
            <span aria-hidden className="size-1.5 rotate-45 bg-cherry" />
            {t.collection.specialLabel}
          </p>
          <h2
            id="collection-title"
            className="mt-3 font-serif text-[2.5rem] font-normal italic leading-none sm:text-6xl"
          >
            {t.collection.title}
          </h2>
          <p className="mt-3 text-lg text-cocoa-soft">{t.collection.text}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-cocoa-soft/90">
            {t.collection.specialNote}
          </p>
        </Reveal>
      </div>
      {/* Blooms growing in from the screen edge, so the stems always meet the edge. */}
      <Floral
        name="ranunculus"
        flip
        sway
        origin="0% 50%"
        sizes="160px"
        className="absolute right-0 top-10 w-[22%] max-w-[7rem] md:top-24 md:max-w-[10rem]"
      />

      {/* Swipeable on phones/tablets (the next plate peeks in); a 3-column grid on desktop. */}
      <Reveal variant="fade" delay={120} className="relative mt-10 md:mt-14 lg:mx-auto lg:max-w-6xl lg:px-8">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="swipe-track flex snap-x snap-mandatory gap-5 overflow-x-auto px-[12%] pb-2 pt-1 md:px-[27%] lg:grid lg:snap-none lg:grid-cols-3 lg:gap-10 lg:overflow-visible lg:px-0 lg:pb-0 lg:pt-0"
        >
          {products.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              index={index}
              total={products.length}
              className={`w-full shrink-0 snap-center lg:shrink ${offsets[index] ?? ""}`}
            />
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 lg:hidden">
          <div className="flex items-center gap-2">
            {products.map((product, index) => (
              <button
                key={product.slug}
                type="button"
                onClick={() => goTo(index)}
                aria-label={t.collection.goTo(product.name)}
                aria-current={current === index ? "true" : undefined}
                className="flex size-6 items-center justify-center"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ${
                    current === index ? "w-6 bg-cherry-deep" : "w-2 bg-cocoa/25"
                  }`}
                />
              </button>
            ))}
          </div>
          <p className="flex items-center gap-1.5 text-xs text-cocoa-soft">
            {t.collection.swipeHint}
            <ChevronsRight size={14} aria-hidden />
          </p>
        </div>
      </Reveal>
    </section>
  );
}
