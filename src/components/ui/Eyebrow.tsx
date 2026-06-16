import type { CSSProperties } from "react";

/**
 * Section "eyebrow" label — Poppins 800, 14px, +1.5px tracking, #1E8BE8,
 * flanked by light-blue sparkle glyphs. Centered by default; `align="left"`
 * renders a single trailing sparkle (used for reviews / locations headers).
 */
export function Eyebrow({
  children,
  align = "center",
  style,
}: {
  children: string;
  align?: "center" | "left";
  style?: CSSProperties;
}) {
  const spark = <span style={{ color: "#7FD0F5" }}>✦</span>;
  return (
    <div
      className="fh"
      style={{
        fontWeight: 800,
        color: "#1E8BE8",
        fontSize: 14,
        letterSpacing: align === "center" ? 1.5 : 1,
        textAlign: align,
        ...style,
      }}
    >
      {align === "center" ? (
        <>
          {spark}&nbsp;&nbsp;{children}&nbsp;&nbsp;{spark}
        </>
      ) : (
        <>
          {children}&nbsp;{spark}
        </>
      )}
    </div>
  );
}
