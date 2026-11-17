"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

let observer: IntersectionObserver | null = null;

function getObserver() {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer?.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );
  return observer;
}

type RevealProps = {
  as?: "div" | "li" | "p" | "h2" | "h3" | "span" | "dl" | "ul" | "ol";
  /** up: fade + rise · fade: opacity only · image: fade + settle zoom · line: draws a hairline */
  variant?: "up" | "fade" | "image" | "line" | "line-y";
  /** Stagger delay in ms. */
  delay?: number;
  className?: string;
  children?: ReactNode;
};

const variantClass = {
  up: "",
  fade: "reveal-fade",
  image: "reveal-image",
  line: "reveal-line",
  "line-y": "reveal-line-y",
} as const;

/** Scroll-triggered reveal. Toggles a class directly, so it never re-renders. */
export default function Reveal({
  as = "div",
  variant = "up",
  delay = 0,
  className = "",
  children,
}: RevealProps) {
  const Component = as as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const io = getObserver();
    io.observe(element);
    return () => io.unobserve(element);
  }, []);

  return (
    <Component
      ref={ref}
      className={`reveal ${variantClass[variant]} ${className}`}
      style={delay ? ({ "--d": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Component>
  );
}
