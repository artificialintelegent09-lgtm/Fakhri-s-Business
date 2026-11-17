"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Entry = { outer: HTMLElement; inner: HTMLElement; speed: number };

// One shared passive scroll listener drives every visible parallax layer.
const active = new Set<Entry>();
let frame = 0;
let listening = false;

function render() {
  frame = 0;
  const halfViewport = window.innerHeight / 2;
  active.forEach(({ outer, inner, speed }) => {
    const rect = outer.getBoundingClientRect();
    const offset = (rect.top + rect.height / 2 - halfViewport) * speed;
    inner.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
  });
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(render);
}

function add(entry: Entry) {
  active.add(entry);
  if (!listening) {
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    listening = true;
  }
  schedule();
}

function remove(entry: Entry) {
  active.delete(entry);
  if (listening && active.size === 0) {
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
    listening = false;
  }
}

type ParallaxProps = {
  /** Fraction of the scroll distance to offset by. Negative moves against the scroll. */
  speed: number;
  className?: string;
  children: ReactNode;
};

/**
 * Moves its content vertically relative to scroll. Only active on tablet and up,
 * only while on screen, and never with reduced motion enabled.
 * `className` positions the (static) outer box; the inner box is what moves.
 */
export default function Parallax({ speed, className = "", children }: ParallaxProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const entry: Entry = { outer, inner, speed };
    const allowed = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
    );
    let visible = false;

    const sync = () => {
      if (allowed.matches && visible) {
        add(entry);
      } else {
        remove(entry);
        inner.style.transform = "";
      }
    };

    const io = new IntersectionObserver(
      ([intersection]) => {
        visible = intersection.isIntersecting;
        sync();
      },
      { rootMargin: "20% 0px" },
    );
    io.observe(outer);
    allowed.addEventListener("change", sync);

    return () => {
      io.disconnect();
      allowed.removeEventListener("change", sync);
      remove(entry);
    };
  }, [speed]);

  return (
    <div ref={outerRef} className={className}>
      <div ref={innerRef} className="h-full w-full">
        {children}
      </div>
    </div>
  );
}
