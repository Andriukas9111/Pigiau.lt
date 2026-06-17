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

/**
 * Descriptive default alt text per illustration (helps SEO & screen readers).
 * Pass alt="" at a call site to mark a purely decorative usage instead.
 * `star` defaults to decorative because it is used as sparkle ornamentation.
 */
const ALT: Record<IllustrationName, string> = {
  wash: "NordWash alien washing fresh laundry",
  press: "NordWash alien steam-pressing a shirt",
  disguise: "NordWash alien in a human disguise suit",
  stain: "NordWash alien removing a tough stain",
  blanket: "NordWash alien with a freshly cleaned blanket",
  fold: "NordWash alien neatly folding laundry",
  pickup: "NordWash pickup and delivery alien",
  suit: "NordWash alien in a freshly cleaned suit",
  van: "NordWash laundry delivery van",
  phone: "NordWash alien answering the phone",
  stopwatch: "Fast laundry turnaround stopwatch",
  shield: "Gentle fabric care and safety shield",
  deliver: "NordWash alien delivering clean laundry",
  basket: "Basket of fresh, clean laundry",
  tshirt: "Freshly cleaned t-shirt",
  ufo: "Friendly NordWash UFO",
  alien: "Friendly NordWash alien mascot",
  star: "",
  map: "Map of Lithuania showing NordWash coverage",
};

export function Illustration({
  name,
  alt,
  style,
  className,
}: {
  name: IllustrationName;
  alt?: string;
  style?: CSSProperties;
  className?: string;
}) {
  const altText = alt ?? ALT[name];
  return (
    <img
      src={`/assets/${FILE[name]}.webp`}
      alt={altText}
      aria-hidden={altText === "" ? true : undefined}
      loading="lazy"
      decoding="async"
      className={className}
      style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", ...style }}
    />
  );
}
