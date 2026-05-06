"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export function BeforeAfterSlider({
  before,
  after,
  alt,
  caption,
}: {
  before: string;
  after: string;
  alt?: string;
  caption?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const t = useTranslations("common");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let dragging = false;
    const setFromClientX = (clientX: number) => {
      const r = el.getBoundingClientRect();
      const x = Math.max(0, Math.min(r.width, clientX - r.left));
      setPos((x / r.width) * 100);
    };
    const onDown = (e: PointerEvent) => {
      dragging = true;
      el.setPointerCapture(e.pointerId);
      setFromClientX(e.clientX);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      setFromClientX(e.clientX);
    };
    const onUp = (e: PointerEvent) => {
      dragging = false;
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {}
    };
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
  }, []);

  const onKey = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 5;
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - step));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + step));
  };

  return (
    <figure className="space-y-3">
      <div
        ref={ref}
        role="slider"
        tabIndex={0}
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Before / After"
        onKeyDown={onKey}
        className="relative aspect-[3/2] w-full overflow-hidden bg-[var(--color-mist)] hairline select-none touch-none cursor-ew-resize"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={after}
          alt={alt ?? ""}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={before}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>
        <span className="absolute top-3 left-3 text-mono uppercase text-[var(--color-bone)] mix-blend-difference">
          {t("before")}
        </span>
        <span className="absolute top-3 right-3 text-mono uppercase text-[var(--color-bone)] mix-blend-difference">
          {t("after")}
        </span>
        <div
          className="absolute top-0 bottom-0"
          style={{ left: `${pos}%`, transform: "translateX(-1px)" }}
          aria-hidden
        >
          <div className="w-[2px] h-full bg-[var(--color-aqua)]" />
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[var(--color-aqua)] grid place-items-center text-[var(--color-ink)]"
            style={{ left: 0 }}
          >
            <span className="text-mono">‹›</span>
          </div>
        </div>
      </div>
      {caption ? (
        <figcaption className="text-body-sm text-[var(--color-ink)]/70">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
