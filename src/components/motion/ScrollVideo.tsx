"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  framesBase: string;
  totalFrames: number;
  posterIndex?: number;
  format?: "avif" | "webp";
};

export function ScrollVideo({ framesBase, totalFrames, posterIndex = 90, format = "avif" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const conn = (navigator as Navigator & { connection?: { effectiveType?: string; saveData?: boolean } })
      .connection;
    if (conn?.saveData || conn?.effectiveType === "2g") return;

    const frame = (i: number) => `${framesBase}/hero-${String(i).padStart(4, "0")}.${format}`;
    const images: HTMLImageElement[] = new Array(totalFrames);
    let loaded = 0;

    const preloadBatch = (start: number, count: number) => {
      for (let i = start; i < Math.min(start + count, totalFrames); i++) {
        const img = new Image();
        img.decoding = "async";
        img.src = frame(i);
        img.onload = () => {
          loaded++;
        };
        images[i] = img;
      }
    };

    preloadBatch(0, 30);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (idx: number) => {
      const img = images[idx];
      if (!img || !img.complete) return;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    let lastIdx = -1;
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / total));
      const idx = Math.min(totalFrames - 1, Math.floor(progress * totalFrames));
      if (idx !== lastIdx) {
        lastIdx = idx;
        if (idx > loaded - 5) preloadBatch(idx, 30);
        draw(idx);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, [framesBase, totalFrames, format, reduced]);

  return (
    <div ref={sectionRef} className="relative" style={{ minHeight: "300vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {reduced ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${framesBase}/hero-${String(posterIndex).padStart(4, "0")}.${format}`}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        )}
      </div>
    </div>
  );
}
