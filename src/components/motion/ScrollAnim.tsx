"use client";

import { useEffect } from "react";

/**
 * Reveals every `.nw-reveal` element as it scrolls into view (adds `.nw-in`).
 * Respects prefers-reduced-motion and degrades to "always visible" without JS
 * (the hidden state is gated behind the `.nw-js` class set before paint).
 */
export function ScrollAnim() {
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
      { rootMargin: "0px 0px -7% 0px", threshold: 0.06 },
    );
    for (const el of els) io.observe(el);
    return () => io.disconnect();
  }, []);
  return null;
}
