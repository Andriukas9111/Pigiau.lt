import type { IconName } from "@/components/icons";
import type { IllustrationName } from "@/components/illustrations";

/* ---------------------------------------------------------------- brand --- */
export const BRAND = {
  name: "NordWash",
  domainLabel: ".lt",
  tagline: "COSMIC CLEAN. EARTH READY.",
  phone: "+370 681 25504",
  phoneHref: "+37068125504",
  email: "hello@nordwash.lt",
  web: "www.nordwash.lt",
  hours: [
    { d: "Mon – Fri", h: "08:00 – 20:00" },
    { d: "Saturday", h: "09:00 – 18:00" },
    { d: "Sunday", h: "10:00 – 16:00" },
  ],
  copyright: "© 2026 NordWash.lt — Intergalactic Laundry Services. All rights reserved.",
} as const;

/* --------------------------------------------------------------- routes --- */
export const NAV = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/#how" },
  { label: "Prices", href: "/prices" },
  { label: "Locations", href: "/locations" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/* ------------------------------------------------------------- services --- */
export interface Service {
  key: string;
  title: string;
  img: IllustrationName;
  desc: string;
  quote: string;
  price: number;
}
export const SERVICES: Service[] = [
  {
    key: "wash",
    title: "North Star Wash",
    img: "wash",
    desc: "Deep clean with Arctic-ion bubbles. Bright. Fresh. Stellar.",
    quote: "Out-of-this-world clean.",
    price: 17.5,
  },
  {
    key: "press",
    title: "Steam Beam Press",
    img: "press",
    desc: "Wrinkle? What wrinkle? Precision steam for perfect results.",
    quote: "So smooth, it's illegal.",
    price: 14.0,
  },
  {
    key: "disguise",
    title: "Disguise Dry Clean",
    img: "disguise",
    desc: "From human suits to invisible cloaks. We clean it all.",
    quote: "Blend in. (Literally.)",
    price: 19.9,
  },
  {
    key: "stain",
    title: "Emergency Stain Rescue",
    img: "stain",
    desc: "Coffee. Ketchup. Meteor dust. We have got you.",
    quote: "Stains don't stand a chance.",
    price: 12.0,
  },
  {
    key: "blanket",
    title: "Space Blanket Refresh",
    img: "blanket",
    desc: "Quilts, duvets & even cosmic sleeping bags. Fluffy again.",
    quote: "Nap like a nebula.",
    price: 18.5,
  },
  {
    key: "fold",
    title: "Express Fold & Beam",
    img: "fold",
    desc: "Folded with precision. Beamed to your door. Neat as a nebula.",
    quote: "Folded. Fast. Flawless.",
    price: 11.0,
  },
  {
    key: "pickup",
    title: "Pickup & Delivery",
    img: "pickup",
    desc: "We pick up, clean, and deliver across Lithuania. No teleport required.",
    quote: "You relax. We zoom.",
    price: 4.5,
  },
  {
    key: "suit",
    title: "Deluxe Human Suit Refresh",
    img: "suit",
    desc: "For meetings, dates, and definitely-not-cover-story emergencies.",
    quote: "Look human. Smell stellar.",
    price: 24.0,
  },
];

export interface CalcService {
  name: string;
  base: number;
}
export const CALC_SERVICES: CalcService[] = [
  { name: "Standard Wash & Fold", base: 12 },
  { name: "Steam Press", base: 14 },
  { name: "Disguise Dry Clean", base: 19.9 },
  { name: "Emergency Stain Rescue", base: 12 },
  { name: "Space Blanket Refresh", base: 18.5 },
  { name: "Express Fold & Beam", base: 11 },
];

/* -------------------------------------------------------------- reviews --- */
export interface Review {
  quote: string;
  name: string;
  city: string;
  kind: "user" | "alien";
  bg: string;
}
export const REVIEWS: Review[] = [
  {
    quote: "My shirts have never been this fresh — even my soul.",
    name: "Mantas",
    city: "Vilnius",
    kind: "user",
    bg: "#E2F0D6",
  },
  {
    quote: "They cleaned my disguise perfectly. 10/10 would infiltrate again.",
    name: "Ziggy Z.",
    city: "Kaunas",
    kind: "alien",
    bg: "#D6E6FB",
  },
  {
    quote: "Fast, friendly and absolutely out of this world!",
    name: "Eglė",
    city: "Klaipėda",
    kind: "user",
    bg: "#F3DCE7",
  },
];

export interface City {
  name: string;
  hub: string;
  color: string;
}
export const CITIES: City[] = [
  { name: "Vilnius", hub: "North Star Hub", color: "#76C043" },
  { name: "Kaunas", hub: "Alien Beam Station", color: "#7C5BD6" },
  { name: "Klaipėda", hub: "Coastal Clean Base", color: "#1E8BE8" },
];

/* ------------------------------------------------------ calculator data --- */
export interface Extra {
  key: string;
  name: string;
  price: number;
}
export const CALC_EXTRAS: Extra[] = [
  { key: "stain", name: "Stain Treatment", price: 2 },
  { key: "hypo", name: "Hypoallergenic", price: 2 },
  { key: "scent", name: "Scent Booster", price: 1.5 },
  { key: "steam", name: "Steam Press", price: 2 },
  { key: "eco", name: "Eco Wash", price: 1 },
];

export interface Urgency {
  key: string;
  name: string;
  sub: string;
  price: number;
}
export const URGENCY: Urgency[] = [
  { key: "standard", name: "Standard", sub: "48–72h", price: 0 },
  { key: "priority", name: "Priority", sub: "24h", price: 3 },
  { key: "express", name: "Express", sub: "12h", price: 6 },
];

export interface CType {
  key: string;
  name: string;
  mult: number;
}
export const CTYPES: CType[] = [
  { key: "everyday", name: "Everyday", mult: 1 },
  { key: "mixed", name: "Mixed", mult: 1.05 },
  { key: "delicate", name: "Delicate", mult: 1.2 },
  { key: "bedding", name: "Bedding", mult: 1.15 },
];
export const HOME_TYPES = [
  { key: "everyday", name: "Everyday" },
  { key: "mixed", name: "Mixed Load" },
  { key: "delicate", name: "Delicate" },
  { key: "bedding", name: "Bedding" },
];

/* ------------------------------------------------------------- packages --- */
export interface Pkg {
  name: string;
  price: number;
  tag: string;
  color: string;
  feats: string[];
}
export const PACKAGES: Pkg[] = [
  {
    name: "Basic Wash",
    price: 16,
    tag: "",
    color: "#1E8BE8",
    feats: ["Up to 6kg wash & fold", "Standard 48–72h", "Free pickup & delivery", "Fresh scent included"],
  },
  {
    name: "Steam & Press",
    price: 21,
    tag: "POPULAR",
    color: "#76C043",
    feats: ["Wash + precision steam press", "Up to 6kg", "Priority 24h option", "Wrinkle-free guarantee"],
  },
  {
    name: "Family Load",
    price: 42,
    tag: "BEST VALUE",
    color: "#7C5BD6",
    feats: [
      "Up to 18kg mixed load",
      "Wash, fold & press",
      "Free pickup & delivery",
      "Stain treatment included",
    ],
  },
  {
    name: "Express 24h",
    price: 39,
    tag: "FAST",
    color: "#F2A53B",
    feats: ["Guaranteed 24h turnaround", "Up to 8kg", "Priority handling", "Real-time tracking"],
  },
  {
    name: "Alien Disguise Rescue",
    price: 28,
    tag: "",
    color: "#2BB1A8",
    feats: ["Special items · 24–48h", "Stain rescue included", "Delicate cosmic care", "Steam finish"],
  },
];

export const COMPARE_COLS = ["Basic Wash", "Steam & Press", "Family Load", "Express 24h", "Disguise Rescue"];
export interface CompareRow {
  label: string;
  cells: string[];
}
export const COMPARE_ROWS: CompareRow[] = [
  { label: "Wash", cells: ["y", "y", "y", "y", "y"] },
  { label: "Dry", cells: ["y", "y", "y", "y", "y"] },
  { label: "Fold", cells: ["y", "y", "y", "y", "—"] },
  { label: "Steam Press", cells: ["—", "y", "y", "y", "y"] },
  { label: "Stain Treatment", cells: ["—", "—", "y", "—", "y"] },
  { label: "Max Weight", cells: ["6kg", "6kg", "18kg", "8kg", "Per item"] },
  { label: "Turnaround", cells: ["48–72h", "24h", "48–72h", "24h", "24–48h"] },
  { label: "Pickup & Delivery", cells: ["+€4.50", "+€4.50", "Free", "Free", "+€4.50"] },
];

export interface FaqItem {
  q: string;
  a: string;
}
export const PRICE_FAQ: FaqItem[] = [
  {
    q: "How is the price calculated?",
    a: "We combine your service, weight, urgency and extras. Pickup & delivery is free in most zones. The live total updates as you choose.",
  },
  {
    q: "Are there any hidden fees?",
    a: "None. No asteroids, no surprises. The total you see is the total you pay.",
  },
  {
    q: "Do you offer discounts?",
    a: "Yes — first orders get 10% off with code HELLOEARTH, and Star Members save 10% on every order.",
  },
  {
    q: "What if my load is heavier than estimated?",
    a: "We weigh on pickup and only adjust if it's significantly different — and we'll always message you first.",
  },
];

/* ------------------------------------------------------------ locations --- */
export interface Station {
  city: string;
  name: string;
  addr: string;
  hours: string;
  color: string;
  img: IllustrationName;
  tags: string[];
  rating: string;
}
export const STATIONS: Station[] = [
  {
    city: "Vilnius",
    name: "North Star Hub",
    addr: "Gedimino pr. 24, Vilnius",
    hours: "08:00 – 20:00",
    color: "#76C043",
    img: "wash",
    tags: ["Wash & Fold", "Dry Clean", "Express"],
    rating: "4.9",
  },
  {
    city: "Kaunas",
    name: "Alien Beam Station",
    addr: "Laisvės al. 60, Kaunas",
    hours: "08:00 – 20:00",
    color: "#7C5BD6",
    img: "press",
    tags: ["Wash & Fold", "Steam Press", "Pickup"],
    rating: "4.8",
  },
  {
    city: "Klaipėda",
    name: "Coastal Clean Base",
    addr: "Taikos pr. 32, Klaipėda",
    hours: "09:00 – 19:00",
    color: "#1E8BE8",
    img: "blanket",
    tags: ["Wash & Fold", "Blankets", "Pickup"],
    rating: "4.9",
  },
  {
    city: "Šiauliai",
    name: "Northern Lights Point",
    addr: "Vilniaus g. 141, Šiauliai",
    hours: "09:00 – 18:00",
    color: "#F2A53B",
    img: "stain",
    tags: ["Wash & Fold", "Dry Clean"],
    rating: "4.7",
  },
  {
    city: "Panevėžys",
    name: "Meteor Drop Stop",
    addr: "Respublikos g. 40, Panevėžys",
    hours: "09:00 – 18:00",
    color: "#E0608A",
    img: "suit",
    tags: ["Wash & Fold", "Pickup"],
    rating: "4.8",
  },
];

export interface Route {
  name: string;
  days: string;
  cities: string;
  color: string;
}
export const ROUTES: Route[] = [
  {
    name: "Route North",
    days: "Mon / Thu",
    cities: "Vilnius · Utena · Panevėžys · Šiauliai",
    color: "#76C043",
  },
  {
    name: "Route Central",
    days: "Tue / Fri",
    cities: "Vilnius · Kaunas · Alytus · Marijampolė",
    color: "#1E8BE8",
  },
  {
    name: "Route West",
    days: "Wed / Sat",
    cities: "Kaunas · Klaipėda · Palanga · Kretinga",
    color: "#7C5BD6",
  },
  {
    name: "Route South",
    days: "Tue / Sat",
    cities: "Kaunas · Prienai · Alytus · Druskininkai",
    color: "#E0608A",
  },
];

export interface BranchChar {
  name: string;
  role: string;
  city: string;
  img: IllustrationName;
  color: string;
}
export const BRANCH_CHARS: BranchChar[] = [
  { name: "Vili", role: "Chief Clean Officer", city: "Vilnius", img: "wash", color: "#76C043" },
  { name: "Beammy", role: "Laundry Technician", city: "Kaunas", img: "press", color: "#7C5BD6" },
  { name: "Klapio", role: "Wave Wrangler", city: "Klaipėda", img: "blanket", color: "#1E8BE8" },
  { name: "Solaris", role: "Spin Scientist", city: "Šiauliai", img: "fold", color: "#F2A53B" },
  { name: "Orbi", role: "Steam Specialist", city: "Panevėžys", img: "suit", color: "#E0608A" },
];

/* ---------------------------------------------------------------- about --- */
export interface Crew {
  name: string;
  role: string;
  img: IllustrationName;
  color: string;
  bio: string;
}
export const CREW: Crew[] = [
  {
    name: "Zygz",
    role: "Wash Operator",
    img: "wash",
    color: "#76C043",
    bio: "Master of Arctic-ion bubbles. Has never met a stain he respects.",
  },
  {
    name: "Luna",
    role: "Steam Specialist",
    img: "press",
    color: "#7C5BD6",
    bio: "Turns wrinkles into distant memories with one steam beam.",
  },
  {
    name: "E.Tiketas",
    role: "Disguise Consultant",
    img: "disguise",
    color: "#1E8BE8",
    bio: "Keeps your human suit convincingly human. Mustache optional.",
  },
  {
    name: "Foldor",
    role: "Folding Expert",
    img: "fold",
    color: "#2E74D0",
    bio: "Folds with mathematical precision. Dreams in perfect squares.",
  },
];

export interface StoryItem {
  icon: IconName;
  year: string;
  title: string;
  desc: string;
}
export const STORY: StoryItem[] = [
  {
    icon: "globe",
    year: "Light Years Ago",
    title: "A Tidy Home Planet",
    desc: "Near the North Star, laundry was a science and freshness a duty.",
  },
  {
    icon: "rocket",
    year: "Year 0",
    title: "We Packed Up",
    desc: "We found Earthlings struggle with laundry. So we came to help.",
  },
  {
    icon: "ufo",
    year: "Year 1",
    title: "First Landing",
    desc: "Landed. Studied socks. Understood stains. Built NordWash.",
  },
  {
    icon: "droplet",
    year: "Year 2",
    title: "First Earth Hub",
    desc: "Opened our first Earth laundry hub. Humans were… impressed.",
  },
  {
    icon: "star",
    year: "Year 3+",
    title: "Going Cosmic",
    desc: "More locations, more freshness, more happy humans every day.",
  },
  {
    icon: "sparkles",
    year: "The Future",
    title: "Across the Galaxy",
    desc: "Expanding across the planet. Maybe the galaxy. One load at a time.",
  },
];

export interface ValueItem {
  icon: IconName;
  title: string;
  desc: string;
}
export const VALUES: ValueItem[] = [
  { icon: "leaf", title: "Planet First", desc: "Eco detergents and low-water cycles on every load." },
  { icon: "shield", title: "Care & Safety", desc: "Gentle, fabric-specific programs. No abductions." },
  { icon: "bolt", title: "Always Fast", desc: "Express options that feel genuinely intergalactic." },
  { icon: "smile", title: "Human (ish) Touch", desc: "Friendly crew, real support, happy customers." },
];

export interface Stat {
  num: string;
  label: string;
}
export const STATS: Stat[] = [
  { num: "25,000+", label: "Happy Humans" },
  { num: "1.2M+", label: "Loads Washed" },
  { num: "98.7%", label: "Satisfaction Rate" },
  { num: "24", label: "Earth Locations" },
  { num: "4.9★", label: "Average Rating" },
];

/* ------------------------------------------------------------------ faq --- */
export interface FaqCat {
  icon: IconName;
  name: string;
}
export const FAQ_CATS: FaqCat[] = [
  { icon: "truck", name: "Pickup & Delivery" },
  { icon: "tag", name: "Pricing & Payment" },
  { icon: "shirt", name: "Services & Fabrics" },
  { icon: "clock", name: "Timing & Turnaround" },
  { icon: "shield", name: "Care & Safety" },
  { icon: "chat", name: "Account & Support" },
];
export const FAQS: FaqItem[] = [
  {
    q: "How does pickup and delivery work?",
    a: "Book online, pick a time slot, and our crew collects your laundry and returns it clean, folded and fresh — usually within 48–72 hours.",
  },
  {
    q: "How fast do you deliver?",
    a: "Standard turnaround is 48–72 hours. Priority is 24h and Express is as fast as 12h in selected zones.",
  },
  {
    q: "Do you clean suits and costumes?",
    a: "Yes — one of our specialities, especially when the suit looks suspiciously non-human.",
  },
  {
    q: "Is it safe for delicate fabrics?",
    a: "Absolutely. We select a gentle, fabric-specific program for every item.",
  },
  {
    q: "Which areas do you cover?",
    a: "Vilnius, Kaunas, Klaipėda, Šiauliai and Panevėžys, with more beam stations landing soon.",
  },
  {
    q: "How do I pay?",
    a: "Card, Apple Pay, PayPal or cash on delivery. First orders get 10% off with code HELLOEARTH.",
  },
  {
    q: "What if something goes wrong?",
    a: "We offer a free rewash, and our support crew replies faster than light. 100% satisfaction or we'll make it right.",
  },
  {
    q: "Can I schedule recurring pickups?",
    a: "Yes — Star Members can set weekly or biweekly pickups and save 10% on every order.",
  },
];

/* ----------------------------------------------------------- fabrics ------ */
export interface Fabric {
  icon: IconName;
  name: string;
  note: string;
}
export const FABRICS: Fabric[] = [
  { icon: "shirt", name: "Cotton", note: "Soft & breathable" },
  { icon: "wind", name: "Linen", note: "Light & airy" },
  { icon: "snow", name: "Wool", note: "Warm & cozy" },
  { icon: "atom", name: "Synthetics", note: "Space-ready" },
  { icon: "droplet", name: "Silk", note: "Smooth & delicate" },
  { icon: "shield", name: "Leather", note: "Tough but tender" },
  { icon: "satellite", name: "Tech Fabrics", note: "High performance" },
  { icon: "mask", name: "Disguise Materials", note: "Human-grade (mostly)" },
];

export interface WhyItem {
  icon: IconName;
  title: string;
  desc: string;
}
export const WHY_CHOOSE: WhyItem[] = [
  { icon: "atom", title: "Alien Tech", desc: "Advanced cleaning beyond Earth standards." },
  { icon: "leaf", title: "Eco Friendly", desc: "Gentle on fabrics, kind to the planet." },
  { icon: "shield", title: "Human Safe", desc: "No abductions. Just fresh clothes." },
  { icon: "smile", title: "Satisfaction", desc: "100% or we'll make it right." },
];

/* -------------------------------------------------------------- booking --- */
export interface Size {
  key: string;
  name: string;
  sub: string;
  adj: number;
}
export const SIZES: Size[] = [
  { key: "small", name: "Small", sub: "up to 5kg", adj: 0 },
  { key: "medium", name: "Medium", sub: "5–10kg", adj: 6 },
  { key: "large", name: "Large", sub: "10–15kg", adj: 12 },
  { key: "xlarge", name: "X-Large", sub: "15kg+", adj: 18 },
];
export const TIMES = [
  "08:00 – 10:00",
  "10:00 – 12:00",
  "12:00 – 14:00",
  "14:00 – 16:00",
  "16:00 – 18:00",
  "18:00 – 20:00",
];
export const BSTEPS = ["Select Service", "Pickup Address", "Date & Time", "Extras", "Review & Pay"];
export const BSTEPS_SHORT = ["Service", "Pickup", "Schedule", "Extras", "Review"];

export interface BExtra {
  key: "bHypo" | "bScent" | "bStain" | "bFold" | "bExpress";
  name: string;
  price: number;
}
export const BOOKING_EXTRAS: BExtra[] = [
  { key: "bHypo", name: "Hypoallergenic", price: 2 },
  { key: "bScent", name: "Scent Booster", price: 1.5 },
  { key: "bStain", name: "Stain Treatment", price: 2.5 },
  { key: "bFold", name: "Premium Fold", price: 2 },
  { key: "bExpress", name: "Express 24h", price: 6 },
];

export const PAY_METHODS = [
  { key: "card", name: "Card" },
  { key: "apple", name: "Apple Pay" },
  { key: "paypal", name: "PayPal" },
  { key: "cash", name: "Cash on delivery" },
];

export const SUBJECTS = [
  "General question",
  "Pricing & quotes",
  "Pickup & delivery",
  "A problem with my order",
  "Business enquiry",
  "Something cosmic",
];
