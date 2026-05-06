import type { Easing, Variants } from "framer-motion";

export const ease = {
  out: [0.22, 1, 0.36, 1] as Easing,
  inOut: [0.83, 0, 0.17, 1] as Easing,
};

export const blockReveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(2px)" },
  shown: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: ease.out },
  },
};

export const stagger: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

export const wordReveal: Variants = {
  hidden: { y: "110%", opacity: 0 },
  shown: { y: "0%", opacity: 1, transition: { duration: 0.7, ease: ease.out } },
};
