"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/content";

/** Id of the nav section currently in view (the last one scrolled into the reading band). */
export function useActiveSection(): string {
  const [active, setActive] = useState<string>(navItems[0].href.slice(1));

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, []);

  return active;
}
