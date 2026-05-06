"use client";

import { blockReveal } from "@/lib/motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function RevealBlock({
  children,
  className,
  amount = 0.25,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount }}
      variants={blockReveal}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
