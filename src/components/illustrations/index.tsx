import type { CSSProperties, ReactNode } from "react";

/**
 * NordWash illustration set — lightweight, on-brand SVG stand-ins for the
 * AI-generated 3D alien PNGs from the prototype (which the brief asks to
 * replace before launch). Cohesive "cosmic laundry" style: soft circular
 * backdrops, rounded alien characters, friendly laundry objects.
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

function Svg({ id, children, vb = "0 0 100 100" }: { id: string; children: ReactNode; vb?: string }) {
  return (
    <svg
      viewBox={vb}
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/** soft circular backdrop shared by character illustrations */
function Backdrop({ id, from, to }: { id: string; from: string; to: string }) {
  return (
    <>
      <defs>
        <radialGradient id={`${id}-bg`} cx="38%" cy="30%" r="80%">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="47" fill={`url(#${id}-bg)`} />
    </>
  );
}

/** friendly alien face: two eyes (white + pupil + shine) and a smile */
function Face({ x, y, s = 1, smile = true }: { x: number; y: number; s?: number; smile?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <ellipse cx="-7" cy="0" rx="5" ry="6" fill="#fff" />
      <ellipse cx="7" cy="0" rx="5" ry="6" fill="#fff" />
      <circle cx="-6" cy="1.5" r="2.4" fill="#09245B" />
      <circle cx="8" cy="1.5" r="2.4" fill="#09245B" />
      <circle cx="-6.8" cy="0.4" r="0.9" fill="#fff" />
      <circle cx="7.2" cy="0.4" r="0.9" fill="#fff" />
      {smile && <path d="M-5 9 Q0 13 5 9" stroke="#09245B" strokeWidth="1.6" strokeLinecap="round" />}
    </g>
  );
}

function Antenna({ x, tip = "#B8F35A" }: { x: number; tip?: string }) {
  return (
    <g>
      <path d={`M${x} 22 q2 -8 6 -11`} stroke="#fff" strokeWidth="2.2" strokeLinecap="round" opacity="0.9" />
      <circle cx={x + 6} cy="11" r="3" fill={tip} />
    </g>
  );
}

/** generic alien body in a given color, optional accessory passed as children */
function AlienBody({ color, dark }: { color: string; dark: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`body-${color.slice(1)}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={dark} />
        </linearGradient>
      </defs>
      <path
        d="M50 24c14 0 22 10 22 24 0 16-10 26-22 26S28 64 28 48c0-14 8-24 22-24z"
        fill={`url(#body-${color.slice(1)})`}
      />
      <ellipse cx="42" cy="40" rx="7" ry="9" fill="#fff" opacity="0.18" />
    </>
  );
}

function Wrap({
  children,
  style,
  className,
}: { children: ReactNode; style?: CSSProperties; className?: string }) {
  return (
    <span
      className={className}
      style={{ display: "inline-flex", width: "100%", height: "100%", ...style }}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

const RENDER: Record<IllustrationName, () => ReactNode> = {
  // washing machine with alien in the porthole
  wash: () => (
    <Svg id="wash">
      <Backdrop id="wash" from="#F2FBEC" to="#D9F0C6" />
      <rect x="28" y="22" width="44" height="56" rx="9" fill="#fff" stroke="#CFE2F7" strokeWidth="2" />
      <rect x="34" y="28" width="32" height="6" rx="3" fill="#EAF4FF" />
      <circle cx="60" cy="31" r="2.4" fill="#76C043" />
      <circle cx="50" cy="55" r="17" fill="#EAF4FF" stroke="#CFE2F7" strokeWidth="2" />
      <circle cx="50" cy="55" r="12" fill="#D6ECFB" />
      <Face x={50} y={52} s={0.8} />
      <circle cx="40" cy="69" r="2.6" fill="#B8F35A" />
      <circle cx="46" cy="73" r="1.8" fill="#7FD0F5" />
      <circle cx="34" cy="64" r="1.6" fill="#7FD0F5" />
    </Svg>
  ),
  // steam iron with sparkles
  press: () => (
    <Svg id="press">
      <Backdrop id="press" from="#F3EFFC" to="#E0D4F6" />
      <path d="M24 60h44c4 0 6-3 4-7-4-9-13-15-26-15-9 0-15 4-19 9z" fill="#7C5BD6" />
      <path d="M24 60h44v5a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4z" fill="#5B3FB0" />
      <rect x="36" y="30" width="20" height="7" rx="3.5" fill="#fff" opacity="0.85" />
      <Face x={46} y={50} s={0.6} />
      <path
        d="M30 26c-3 3-3 6 0 9M40 22c-3 3-3 6 0 9M50 26c-3 3-3 6 0 9"
        stroke="#B8F35A"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path d="M70 40l1.6 4 4 1.6-4 1.6L70 51l-1.6-3.8-4-1.6 4-1.6z" fill="#FFB72B" />
    </Svg>
  ),
  // disguised alien (glasses + moustache)
  disguise: () => (
    <Svg id="disguise">
      <Backdrop id="disg" from="#EAF4FF" to="#CFE6FB" />
      <Antenna x={50} />
      <AlienBody color="#2E9BEE" dark="#1E6FC0" />
      <Face x={50} y={46} s={0.95} smile={false} />
      <circle cx="44" cy="47" r="6.5" fill="none" stroke="#09245B" strokeWidth="2" />
      <circle cx="57" cy="47" r="6.5" fill="none" stroke="#09245B" strokeWidth="2" />
      <path d="M50.5 47h0M37.5 46h-3M63.5 46h3" stroke="#09245B" strokeWidth="2" strokeLinecap="round" />
      <path d="M43 58c3 3 11 3 14 0-2 4-12 4-14 0z" fill="#09245B" />
    </Svg>
  ),
  // t-shirt with a stain + target
  stain: () => (
    <Svg id="stain">
      <Backdrop id="stain" from="#FFF3E6" to="#FBD9B5" />
      <path
        d="M38 30 28 38l6 7 4-3v28h24V42l4 3 6-7-10-8-5 4a8 8 0 0 1-14 0z"
        fill="#fff"
        stroke="#E0608A"
        strokeWidth="2"
      />
      <circle cx="55" cy="58" r="6" fill="#E0608A" opacity="0.85" />
      <circle cx="55" cy="58" r="9.5" fill="none" stroke="#F2A53B" strokeWidth="1.6" strokeDasharray="3 3" />
      <path d="M62 49l5-5M67 44h-4M67 44v4" stroke="#F2A53B" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  ),
  // folded fluffy blanket with stars
  blanket: () => (
    <Svg id="blanket">
      <Backdrop id="blank" from="#EAF4FF" to="#CFE6FB" />
      <rect x="24" y="44" width="52" height="30" rx="8" fill="#2E9BEE" />
      <rect x="24" y="44" width="52" height="11" rx="6" fill="#5BB4F5" />
      <path d="M24 60h52M24 67h52" stroke="#1E6FC0" strokeWidth="1.6" opacity="0.5" />
      <path d="M34 33l1.6 3.8L40 38l-3.8 1.6L34 43l-1.6-3.4L28 38l4-1.2z" fill="#B8F35A" />
      <circle cx="60" cy="32" r="2.4" fill="#7FD0F5" />
      <circle cx="68" cy="38" r="1.6" fill="#FFB72B" />
    </Svg>
  ),
  // neat stack of folded clothes
  fold: () => (
    <Svg id="fold">
      <Backdrop id="fold" from="#E7FAF6" to="#C4EDE4" />
      <rect x="28" y="58" width="44" height="14" rx="5" fill="#2BB1A8" />
      <rect x="31" y="44" width="38" height="13" rx="5" fill="#37C8BE" />
      <rect x="34" y="31" width="32" height="12" rx="5" fill="#5BD9D0" />
      <path
        d="M44 37h12M42 50h16M40 64h20"
        stroke="#fff"
        strokeWidth="1.6"
        opacity="0.7"
        strokeLinecap="round"
      />
      <path d="M70 28l1.4 3.2L75 33l-3.6 1.4L70 38l-1.4-3.6L65 33l3.6-1.8z" fill="#B8F35A" />
    </Svg>
  ),
  // delivery bag / box with motion (pickup & delivery)
  pickup: () => (
    <Svg id="pickup">
      <Backdrop id="pick" from="#EAF4FF" to="#CFE6FB" />
      <path d="M36 40h28l4 30a5 5 0 0 1-5 5H37a5 5 0 0 1-5-5z" fill="#2E9BEE" />
      <path d="M36 40h28l1 6H35z" fill="#1E6FC0" />
      <path d="M43 40c0-7 3-12 7-12s7 5 7 12" stroke="#09245B" strokeWidth="2.4" fill="none" />
      <Face x={50} y={58} s={0.7} />
      <path d="M22 50h8M20 60h6M24 70h6" stroke="#7FD0F5" strokeWidth="2.2" strokeLinecap="round" />
    </Svg>
  ),
  // suit on hanger (deluxe human suit)
  suit: () => (
    <Svg id="suit">
      <Backdrop id="suit" from="#EAF0FB" to="#C9D8F2" />
      <path d="M50 24c-3 0-5 2-5 4 0 3 5 3 5 6" stroke="#09245B" strokeWidth="2" fill="none" />
      <path d="M50 34 30 46v4l20-6 20 6v-4z" fill="#0A1F4D" />
      <path d="M50 38v36" stroke="#fff" strokeWidth="1.4" opacity="0.5" />
      <path d="M40 49v25h20V49l-10 6z" fill="#13316B" />
      <path d="M50 55l-4 6 4 4 4-4z" fill="#B8F35A" />
      <circle cx="50" cy="70" r="1.6" fill="#fff" />
    </Svg>
  ),
  van: () => (
    <Svg id="van" vb="0 0 120 100">
      <Backdrop id="van" from="#F2FBEC" to="#DCEFFB" />
      <path d="M22 44h44v26H18V52a8 8 0 0 1 4-8z" fill="#2E9BEE" />
      <path d="M66 44h18l14 14v12H66z" fill="#5BB4F5" />
      <path d="M70 48h10l8 8H70z" fill="#EAF4FF" />
      <rect x="18" y="64" width="84" height="8" fill="#1E6FC0" />
      <circle cx="38" cy="74" r="9" fill="#0A1F4D" />
      <circle cx="38" cy="74" r="3.5" fill="#B8F35A" />
      <circle cx="84" cy="74" r="9" fill="#0A1F4D" />
      <circle cx="84" cy="74" r="3.5" fill="#B8F35A" />
      <path d="M30 54h16" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    </Svg>
  ),
  phone: () => (
    <Svg id="phone">
      <Backdrop id="phone" from="#EAF4FF" to="#CFE6FB" />
      <rect x="36" y="22" width="28" height="56" rx="7" fill="#0A1F4D" />
      <rect x="40" y="28" width="20" height="40" rx="3" fill="#EAF4FF" />
      <circle cx="50" cy="73" r="2.2" fill="#fff" />
      <path
        d="M44 47l4 4 8-9"
        stroke="#76C043"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="50" cy="40" r="9" fill="none" stroke="#B8F35A" strokeWidth="2" opacity="0.6" />
    </Svg>
  ),
  stopwatch: () => (
    <Svg id="stop">
      <Backdrop id="stop" from="#EAF4FF" to="#CFE6FB" />
      <rect x="44" y="16" width="12" height="6" rx="2" fill="#1E6FC0" />
      <circle cx="50" cy="54" r="24" fill="#fff" stroke="#2E9BEE" strokeWidth="3" />
      <circle
        cx="50"
        cy="54"
        r="24"
        fill="none"
        stroke="#B8F35A"
        strokeWidth="3"
        strokeDasharray="38 200"
        strokeLinecap="round"
        transform="rotate(-90 50 54)"
      />
      <path d="M50 54V40M50 54l9 5" stroke="#09245B" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="50" cy="54" r="2.6" fill="#1E8BE8" />
      <path d="M44 22h12" stroke="#1E6FC0" strokeWidth="3" strokeLinecap="round" />
    </Svg>
  ),
  shield: () => (
    <Svg id="shield">
      <Backdrop id="shield" from="#EAF7EE" to="#CDEBD6" />
      <path d="M50 24 30 31v16c0 14 9 22 20 27 11-5 20-13 20-27V31z" fill="#76C043" />
      <path d="M50 24 30 31v16c0 14 9 22 20 27V24z" fill="#86CF53" />
      <path
        d="M41 49l6 6 12-13"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  ),
  deliver: () => (
    <Svg id="deliver">
      <Backdrop id="deliver" from="#EAF4FF" to="#CFE6FB" />
      <path d="M28 44l22-9 22 9-22 9z" fill="#5BB4F5" />
      <path d="M28 44v20l22 9V53z" fill="#2E9BEE" />
      <path d="M72 44v20l-22 9V53z" fill="#1E6FC0" />
      <path d="M50 53v20" stroke="#0A1F4D" strokeWidth="1.2" opacity="0.4" />
      <path d="M60 31l2 4.6 5 .6-3.6 3.4 1 5-4.4-2.4-4.4 2.4 1-5L54 36.2l5-.6z" fill="#FFB72B" />
    </Svg>
  ),
  basket: () => (
    <Svg id="basket">
      <Backdrop id="basket" from="#EAF4FF" to="#CFE6FB" />
      <path
        d="M30 46h40l-3 28a5 5 0 0 1-5 4H38a5 5 0 0 1-5-4z"
        fill="#fff"
        stroke="#CFE2F7"
        strokeWidth="2"
      />
      <path d="M33 54h34M35 64h30" stroke="#CFE2F7" strokeWidth="2" />
      <path d="M36 46c2-9 6-14 14-14s12 5 14 14" fill="none" stroke="#2E9BEE" strokeWidth="3" />
      <circle cx="44" cy="40" r="6" fill="#B8F35A" />
      <circle cx="58" cy="38" r="5" fill="#7FD0F5" />
      <circle cx="52" cy="44" r="4" fill="#FFB72B" />
    </Svg>
  ),
  tshirt: () => (
    <Svg id="tshirt">
      <Backdrop id="tshirt" from="#EAF4FF" to="#CFE6FB" />
      <path d="M40 28 28 36l6 8 6-4v34h28V40l6 4 6-8-12-8-6 5a8 8 0 0 1-16 0z" fill="#2E9BEE" />
      <path d="M40 28 28 36l6 8 6-4v34" fill="#5BB4F5" />
      <path d="M64 50l1.6 4 4 1.6-4 1.6L64 61l-1.6-3.8-4-1.6 4-1.6z" fill="#B8F35A" />
    </Svg>
  ),
  ufo: () => (
    <Svg id="ufo">
      <Backdrop id="ufo" from="#EAF4FF" to="#CFE6FB" />
      <path d="M50 64l-14 12c8 5 20 5 28 0z" fill="#B8F35A" opacity="0.35" />
      <ellipse cx="50" cy="52" rx="26" ry="9" fill="#1E6FC0" />
      <ellipse cx="50" cy="50" rx="26" ry="9" fill="#2E9BEE" />
      <path d="M38 46c2-7 6-11 12-11s10 4 12 11a40 40 0 0 1-24 0z" fill="#D6ECFB" />
      <Face x={50} y={42} s={0.62} />
      <circle cx="36" cy="54" r="2.2" fill="#B8F35A" />
      <circle cx="50" cy="56" r="2.2" fill="#FFB72B" />
      <circle cx="64" cy="54" r="2.2" fill="#B8F35A" />
    </Svg>
  ),
  alien: () => (
    <Svg id="alien">
      <Backdrop id="alien" from="#F2FBEC" to="#D2EFBE" />
      <Antenna x={44} />
      <Antenna x={56} tip="#7FD0F5" />
      <AlienBody color="#86CF53" dark="#5BA832" />
      <Face x={50} y={47} s={1} />
    </Svg>
  ),
  // brand compass star (logo)
  star: () => (
    <Svg id="star">
      <defs>
        <linearGradient id="star-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7FD0F5" />
          <stop offset="55%" stopColor="#1E8BE8" />
          <stop offset="100%" stopColor="#0A1F4D" />
        </linearGradient>
      </defs>
      <path d="M50 6 58 42 94 50 58 58 50 94 42 58 6 50 42 42z" fill="url(#star-g)" />
      <path d="M50 26 54 46 74 50 54 54 50 74 46 54 26 50 46 46z" fill="#fff" opacity="0.9" />
      <circle cx="50" cy="50" r="5" fill="#B8F35A" />
    </Svg>
  ),
  // stylised Lithuania map with location pins
  map: () => (
    <Svg id="map" vb="0 0 160 120">
      <defs>
        <linearGradient id="map-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EAF4FF" />
          <stop offset="100%" stopColor="#CFE6FB" />
        </linearGradient>
      </defs>
      <path
        d="M30 44c6-14 22-22 40-20 14 1 22-8 38-4 14 4 22 16 18 30-3 11 6 18 2 30-4 12-22 16-40 12-12-3-18 6-34 2C36 162 36 60 30 44z"
        transform="scale(1 0.6) translate(0 8)"
        fill="url(#map-g)"
        stroke="#9DC3EE"
        strokeWidth="2"
      />
      <g>
        <circle cx="104" cy="58" r="5" fill="#76C043" />
        <circle cx="104" cy="58" r="9" fill="none" stroke="#76C043" strokeWidth="1.5" opacity="0.5" />
        <circle cx="74" cy="50" r="5" fill="#7C5BD6" />
        <circle cx="40" cy="44" r="5" fill="#1E8BE8" />
        <circle cx="86" cy="34" r="4" fill="#F2A53B" />
        <circle cx="60" cy="70" r="4" fill="#E0608A" />
      </g>
    </Svg>
  ),
};

export function Illustration({
  name,
  style,
  className,
}: {
  name: IllustrationName;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <Wrap style={style} className={className}>
      {RENDER[name]()}
    </Wrap>
  );
}
