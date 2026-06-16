import type { CSSProperties, ReactNode } from "react";

/** 1440px content column with 18px side padding (design spec). */
export function Section({
  children,
  mt = 30,
  pb = 0,
  id,
  className,
  style,
}: {
  children: ReactNode;
  mt?: number;
  pb?: number;
  id?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <section
      id={id}
      className={className}
      style={{ maxWidth: 1440, margin: `${mt}px auto 0`, padding: `0 18px ${pb}px`, ...style }}
    >
      {children}
    </section>
  );
}

/** White content card (the recurring `.nw-pad` panel). */
export function Card({
  children,
  pad = 46,
  radius = 30,
  className,
  style,
}: {
  children: ReactNode;
  pad?: number;
  radius?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`nw-pad${className ? ` ${className}` : ""}`}
      style={{
        background: "#fff",
        border: "1px solid #E9F1FB",
        borderRadius: radius,
        boxShadow: "0 14px 44px rgba(31,109,200,.07)",
        padding: pad,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
