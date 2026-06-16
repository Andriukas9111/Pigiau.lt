"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scroll reveal that is robust on client-side navigation and can never leave
 * content stuck hidden:
 *  - sections are visible by default (SSR / no-JS safe);
 *  - elements already in view are shown immediately (no flash);
 *  - only below-the-fold elements are hidden (off-screen) and revealed on scroll;
 *  - re-runs on every route change so freshly-rendered pages animate correctly.
 */
export function ScrollAnim() {
  const pathname = usePathname();
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the intended re-run trigger on navigation
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".nw-reveal"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      for (const el of els) el.classList.add("nw-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("nw-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -7% 0px", threshold: 0.05 },
    );
    const vh = window.innerHeight || document.documentElement.clientHeight;
    for (const el of els) {
      if (el.classList.contains("nw-in")) continue;
      if (el.getBoundingClientRect().top < vh * 0.92) {
        el.classList.add("nw-in"); // in/near view → show now (no flash, never stuck)
      } else {
        el.classList.add("nw-prep"); // below fold → hide, then reveal on scroll
        io.observe(el);
      }
    }
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
