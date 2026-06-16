import type { CSSProperties } from "react";

/**
 * The original NordWash 3D alien illustrations (optimised WebP in /public/assets).
 * Semantic name → asset file mapping so call sites stay readable.
 */
export type IllustrationName =
  | "wash"
  | "press"
  | "disguise"
  | "stain"
  | "blanket"
  | "fold"
  | "pickup"
  | "suit"
  | "van"
  | "phone"
  | "stopwatch"
  | "shield"
  | "deliver"
  | "basket"
  | "tshirt"
  | "ufo"
  | "alien"
  | "star"
  | "map";

const FILE: Record<IllustrationName, string> = {
  wash: "svc_wash",
  press: "svc_press",
  disguise: "svc_disguise",
  stain: "svc_stain",
  blanket: "svc_blanket",
  fold: "svc_fold",
  pickup: "svc_pickup",
  suit: "svc_suit",
  van: "van",
  phone: "il_phone",
  stopwatch: "il_stopwatch",
  shield: "il_shield",
  deliver: "il_deliver",
  basket: "il_basket",
  tshirt: "il_tshirt",
  ufo: "cta_ufo",
  alien: "cta_alien",
  star: "star",
  map: "map_lt",
};

export function Illustration({
  name,
  alt = "",
  style,
  className,
}: {
  name: IllustrationName;
  alt?: string;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <img
      src={`/assets/${FILE[name]}.webp`}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", ...style }}
    />
  );
}
