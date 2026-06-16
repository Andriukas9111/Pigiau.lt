import type { CSSProperties } from "react";

/**
 * Inline line-icon set ported 1:1 from the NordWash design prototype.
 * Each icon is a list of SVG child elements drawn on a 24x24 viewBox.
 */
type El = [string, Record<string, string | number>];

const ICONS: Record<string, El[]> = {
  rocket: [
    [
      "path",
      { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" },
    ],
    [
      "path",
      {
        d: "M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
      },
    ],
    ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }],
    ["path", { d: "M15 12v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" }],
  ],
  truck: [
    ["path", { d: "M14 17V5a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12" }],
    ["path", { d: "M14 9h4l3 3.5V17h-7" }],
    ["circle", { cx: 6, cy: 18, r: 2 }],
    ["circle", { cx: 18, cy: 18, r: 2 }],
  ],
  bolt: [["path", { d: "M13 2 4 14h7l-1 8 9-12h-7l1-8z" }]],
  ufo: [
    ["ellipse", { cx: 12, cy: 10, rx: 9, ry: 3.2 }],
    ["path", { d: "M7.5 8.2C8 5.4 9.8 3.5 12 3.5s4 1.9 4.5 4.7" }],
    ["path", { d: "M5 12l-1.5 3M19 12l1.5 3M12 13.2V17" }],
    ["circle", { cx: 8, cy: 10, r: 0.6, _fill: 1 }],
    ["circle", { cx: 12, cy: 10.4, r: 0.6, _fill: 1 }],
    ["circle", { cx: 16, cy: 10, r: 0.6, _fill: 1 }],
  ],
  phone: [
    [
      "path",
      {
        d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z",
      },
    ],
  ],
  mail: [
    ["rect", { x: 2, y: 4, width: 20, height: 16, rx: 2 }],
    ["path", { d: "m2 6 10 7L22 6" }],
  ],
  globe: [
    ["circle", { cx: 12, cy: 12, r: 9 }],
    ["path", { d: "M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" }],
  ],
  chat: [["path", { d: "M21 11.5a8 8 0 0 1-11.5 7.2L3 21l2.3-6.5A8 8 0 1 1 21 11.5z" }]],
  pin: [
    ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" }],
    ["circle", { cx: 12, cy: 10, r: 3 }],
  ],
  star: [["path", { d: "m12 2 3 6.5 7 .8-5.2 4.8L18.5 21 12 17.3 5.5 21 7.2 14 2 9.3l7-.8z" }]],
  shield: [
    ["path", { d: "M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5z" }],
    ["path", { d: "m9 12 2 2 4-4" }],
  ],
  leaf: [
    ["path", { d: "M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 11-4 16-9 16z" }],
    ["path", { d: "M4 20c4-6 8-8 12-9" }],
  ],
  atom: [
    ["circle", { cx: 12, cy: 12, r: 1.4, _fill: 1 }],
    ["ellipse", { cx: 12, cy: 12, rx: 9, ry: 3.6 }],
    ["ellipse", { cx: 12, cy: 12, rx: 9, ry: 3.6, transform: "rotate(60 12 12)" }],
    ["ellipse", { cx: 12, cy: 12, rx: 9, ry: 3.6, transform: "rotate(120 12 12)" }],
  ],
  smile: [
    ["circle", { cx: 12, cy: 12, r: 9 }],
    ["path", { d: "M8 14a4.5 4.5 0 0 0 8 0" }],
    ["path", { d: "M9 9h.01M15 9h.01", sw: 2.4 }],
  ],
  basket: [
    ["path", { d: "m5 11 1.5 9.5a1.5 1.5 0 0 0 1.5 1.3h8a1.5 1.5 0 0 0 1.5-1.3L19 11z" }],
    ["path", { d: "M3 11h18" }],
    ["path", { d: "m8 11 2-6M16 11l-2-6" }],
  ],
  calc: [
    ["rect", { x: 4, y: 2, width: 16, height: 20, rx: 2 }],
    ["path", { d: "M8 6h8" }],
    [
      "path",
      {
        d: "M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01",
        sw: 2.4,
      },
    ],
  ],
  check: [["path", { d: "m20 6-11 11-5-5" }]],
  lock: [
    ["rect", { x: 4, y: 11, width: 16, height: 10, rx: 2 }],
    ["path", { d: "M8 11V7a4 4 0 0 1 8 0v4" }],
  ],
  tag: [
    ["path", { d: "M20.6 13.4 12 22l-9-9V3h10z" }],
    ["circle", { cx: 7.5, cy: 7.5, r: 1.3, _fill: 1 }],
  ],
  arrow: [["path", { d: "M5 12h14M13 6l6 6-6 6" }]],
  droplet: [["path", { d: "M12 2.7S5 10 5 14a7 7 0 0 0 14 0c0-4-7-11.3-7-11.3z" }]],
  wind: [
    [
      "path",
      { d: "M3 8h11a2.5 2.5 0 1 0-2.5-2.5M3 12h16a2.5 2.5 0 1 1-2.5 2.5M3 16h9a2.5 2.5 0 1 1-2.5 2.5" },
    ],
  ],
  snow: [["path", { d: "M12 2v20M4 6l16 12M20 6 4 18M2 12h20" }]],
  shirt: [
    [
      "path",
      { d: "M16 3 21 7l-3 3-1-1v11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V9L6 10 3 7l5-4 1.5 1.5a3.5 3.5 0 0 0 5 0z" },
    ],
  ],
  sparkles: [
    ["path", { d: "M12 3l1.8 4.5L18 9l-4.2 1.5L12 15l-1.8-4.5L6 9l4.2-1.5z" }],
    ["path", { d: "M18 14l.9 2.2L21 17l-2.1.8L18 20l-.9-2.2L15 17l2.1-.8z" }],
  ],
  mask: [
    ["path", { d: "M3 7c5-1 13-1 18 0 0 5-1 8-3 9-1.5.8-2.5-1-3-1s-1.5 1.8-3 1-3-4-3-9z" }],
    ["circle", { cx: 8.5, cy: 11, r: 1, _fill: 1 }],
    ["circle", { cx: 15.5, cy: 11, r: 1, _fill: 1 }],
  ],
  satellite: [
    ["path", { d: "m7 11 4-4M9 9l6 6M13 13l-4 4" }],
    ["rect", { x: 2.5, y: 6.5, width: 4, height: 4, rx: 1, transform: "rotate(45 4.5 8.5)" }],
    ["rect", { x: 15.5, y: 13.5, width: 4, height: 4, rx: 1, transform: "rotate(45 17.5 15.5)" }],
    ["path", { d: "M16 8a4 4 0 0 1 0 8" }],
  ],
  user: [
    ["circle", { cx: 12, cy: 8, r: 4 }],
    ["path", { d: "M4 21a8 8 0 0 1 16 0" }],
  ],
  alien: [
    ["path", { d: "M12 2c5 0 8 3.5 8 8 0 5-4 8-8 12-4-4-8-7-8-12 0-4.5 3-8 8-8z" }],
    [
      "path",
      { d: "M8.5 10c.6 1.4 1.6 2.2 3.5 2.2S15 11.4 15.5 10c-1-.5-2-.6-3.5-.6s-2.5.1-3.5.6z", _fill: 1 },
    ],
  ],
  clock: [
    ["circle", { cx: 12, cy: 12, r: 9 }],
    ["path", { d: "M12 7v5l3.5 2" }],
  ],
  map: [
    ["path", { d: "M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2z" }],
    ["path", { d: "M9 4v14M15 6v14" }],
  ],
  search: [
    ["circle", { cx: 11, cy: 11, r: 7 }],
    ["path", { d: "m21 21-4.3-4.3" }],
  ],
  save: [
    ["path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" }],
    ["path", { d: "M17 21v-8H7v8M7 3v5h8" }],
  ],
  facebook: [
    [
      "path",
      {
        d: "M14 9V7c0-1 .5-1.5 1.5-1.5H17V2.5h-2.5C12 2.5 10.5 4 10.5 7v2H8v3h2.5v9.5h3.5V12H17l.5-3z",
        _fill: 1,
        _nostroke: 1,
      },
    ],
  ],
  instagram: [
    ["rect", { x: 3, y: 3, width: 18, height: 18, rx: 5 }],
    ["circle", { cx: 12, cy: 12, r: 4 }],
    ["circle", { cx: 17, cy: 7, r: 1, _fill: 1 }],
  ],
  tiktok: [
    [
      "path",
      {
        d: "M15 4c.5 2.3 2 3.7 4.3 3.9V11c-1.7.1-3.1-.4-4.3-1.2V15a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v3.1a2.4 2.4 0 1 0 1.7 2.3V4z",
      },
    ],
  ],
  youtube: [
    ["rect", { x: 2, y: 5, width: 20, height: 14, rx: 4 }],
    ["path", { d: "m10 9 5 3-5 3z", _fill: 1, _strokefill: 1 }],
  ],
};

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  c = "#1E8BE8",
  size = 22,
  sw = 1.9,
  fill = "none",
  style,
  className,
}: {
  name: IconName;
  c?: string;
  size?: number;
  sw?: number;
  fill?: string;
  style?: CSSProperties;
  className?: string;
}) {
  const els = ICONS[name] ?? [];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={c}
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ flex: "none", display: "inline-block", verticalAlign: "middle", ...style }}
      aria-hidden="true"
    >
      {els.map(([tag, a], i) => {
        const { sw: localSw, _fill, _nostroke, _strokefill, ...rest } = a as Record<string, string | number>;
        const props: Record<string, string | number> = { ...rest };
        if (localSw != null) props.strokeWidth = localSw;
        if (_fill) props.fill = c;
        if (_fill && !_strokefill) props.stroke = "none";
        if (_nostroke) props.stroke = "none";
        if (_strokefill) props.stroke = c;
        const Tag = tag as "path";
        return <Tag key={i} {...props} />;
      })}
    </svg>
  );
}
