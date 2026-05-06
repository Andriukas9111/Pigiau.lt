"use client";

import { stagger, wordReveal } from "@/lib/motion";
import { motion } from "framer-motion";
import type { ElementType } from "react";

export function RevealText({
  text,
  as: Tag = "h2",
  className,
  amount = 0.4,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  amount?: number;
}) {
  const segments = text.split(/(\s+)/);
  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount }}
        variants={stagger}
        className="inline"
      >
        {segments.map((seg, i) =>
          /^\s+$/.test(seg) ? (
            <span key={`${seg}-${i}`}>{seg}</span>
          ) : (
            <span key={`${seg}-${i}`} className="inline-block overflow-hidden align-bottom">
              <motion.span variants={wordReveal} className="inline-block">
                {seg}
              </motion.span>
            </span>
          ),
        )}
      </motion.span>
    </Tag>
  );
}
