"use client";

import { cn } from "@/lib/cn";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { type ReactNode, useRef } from "react";

export function MagneticButton({
  children,
  className,
  onClick,
  href,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 220, damping: 20, mass: 0.5 });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType === "touch") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    if (Math.hypot(dx, dy) > 60) return;
    x.set(dx * 0.25);
    y.set(dy * 0.25);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Inner = (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn("inline-block", className)}
    >
      <motion.div style={{ x: sx, y: sy }} className="inline-block">
        {children}
      </motion.div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className="inline-block">
        {Inner}
      </a>
    );
  }
  return (
    <button type="button" aria-label={ariaLabel} onClick={onClick} className="inline-block">
      {Inner}
    </button>
  );
}
