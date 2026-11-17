"use client";

import { ChevronsRight } from "lucide-react";
import { useRef, useState } from "react";
import { products } from "@/data/products";
import { useLang } from "@/lib/i18n";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

export default function Collection() {
  const { t } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const cards = () => Array.from(trackRef.current?.children ?? []) as HTMLElement[];

  // Cards are centered with equal padding, so scroll position maps evenly to an index.
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
      className="relative -mt-12 rounded-t-[2.5rem] bg-blush-light pb-16 pt-14 md:-mt-16 md:rounded-t-[4rem] md:pb-28 md:pt-24"
    >
      <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
        <Reveal className="flex items-center justify-center gap-4">
          <span aria-hidden className="h-px w-10 bg-cocoa/30 sm:w-20" />
          <h2
            id="collection-title"
            className="font-serif text-[2.4rem] font-normal italic leading-none sm:text-6xl"
          >
            {t.collection.title}
          </h2>
          <span aria-hidden className="h-px w-10 bg-cocoa/30 sm:w-20" />
        </Reveal>
        <Reveal as="p" delay={100} className="mt-3 text-lg text-cocoa-soft">
          {t.collection.text}
        </Reveal>
        <Reveal delay={200} className="mt-5 flex flex-col items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-cocoa px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-butter">
            <span aria-hidden className="size-1.5 rounded-full bg-butter" />
            {t.collection.specialLabel}
          </span>
          <p className="max-w-sm text-sm leading-relaxed text-cocoa-soft">
            {t.collection.specialNote}
          </p>
        </Reveal>
      </div>

      {/* Swipeable on phones/tablets (next card peeks in); a 3-column grid on desktop. */}
      <div className="mt-10 md:mt-14 lg:mx-auto lg:max-w-6xl lg:px-8">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="swipe-track flex snap-x snap-mandatory gap-4 overflow-x-auto px-[12%] pb-6 pt-1 md:px-[27%] lg:grid lg:snap-none lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-0 lg:pt-0"
        >
          {products.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              index={index}
              total={products.length}
              className="w-full shrink-0 snap-center lg:shrink"
            />
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 lg:hidden">
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
                    current === index ? "w-6 bg-cherry-deep" : "w-2 bg-cocoa/30"
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
      </div>
    </section>
  );
}
