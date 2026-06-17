import type { IconName } from "@/components/icons";
import type { IllustrationName } from "@/components/illustrations";
import { T, type Tx } from "@/lib/i18n";

/* ---------------------------------------------------------------- brand --- */
export const BRAND = {
  name: "NordWash",
  domainLabel: ".lt",
  tagline: T("COSMIC CLEAN. EARTH READY.", "KOSMINĖ ŠVARA. PARUOŠTA ŽEMEI."),
  phone: "+370 681 25504",
  phoneHref: "+37068125504",
  email: "hello@nordwash.lt",
  web: "www.nordwash.lt",
  hours: [
    { d: T("Mon – Fri", "Pir – Pen"), h: "08:00 – 20:00" },
    { d: T("Saturday", "Šeštadienis"), h: "09:00 – 18:00" },
    { d: T("Sunday", "Sekmadienis"), h: "10:00 – 16:00" },
  ],
  copyright: T(
    "© 2026 NordWash.lt — Intergalactic Laundry Services. All rights reserved.",
    "© 2026 NordWash.lt — Tarpgalaktinės skalbimo paslaugos. Visos teisės saugomos.",
  ),
} as const;

/* --------------------------------------------------------------- routes --- */
export interface NavItem {
  label: Tx;
  href: string;
}
export const NAV: NavItem[] = [
  { label: T("Services", "Paslaugos"), href: "/services" },
  { label: T("How It Works", "Kaip tai veikia"), href: "/#how" },
  { label: T("Prices", "Kainos"), href: "/prices" },
  { label: T("Locations", "Skyriai"), href: "/locations" },
  { label: T("About Us", "Apie mus"), href: "/about" },
  { label: T("Contact", "Kontaktai"), href: "/contact" },
];

/* ------------------------------------------------------------- services --- */
export interface Service {
  key: string;
  title: Tx;
  img: IllustrationName;
  desc: Tx;
  quote: Tx;
  price: number;
}
export const SERVICES: Service[] = [
  {
    key: "wash",
    title: T("North Star Wash", "Šiaurinės žvaigždės skalbimas"),
    img: "wash",
    desc: T(
      "Deep clean with Arctic-ion bubbles. Bright. Fresh. Stellar.",
      "Gilus skalbimas su Arkties burbuliukais. Drabužiai grįžta švieži, purūs ir spindintys.",
    ),
    quote: T("Out-of-this-world clean.", "Švaru taip, kad net ateiviai pavydi."),
    price: 17.5,
  },
  {
    key: "press",
    title: T("Steam Beam Press", "Garų spindulio lyginimas"),
    img: "press",
    desc: T(
      "Wrinkle? What wrinkle? Precision steam for perfect results.",
      "Raukšlės? Kokios raukšlės? Tikslūs garai tobulam rezultatui.",
    ),
    quote: T("So smooth, it's illegal.", "Po mūsų garų nė viena raukšlė neišgyvena."),
    price: 14.0,
  },
  {
    key: "disguise",
    title: T("Disguise Dry Clean", "Maskuotės cheminis valymas"),
    img: "disguise",
    desc: T(
      "From human suits to invisible cloaks. We clean it all.",
      "Nuo žmogiškų kostiumų iki nematomų apsiaustų. Išvalome viską.",
    ),
    quote: T("Blend in. (Literally.)", "Tobula priedanga. (Tiesiogine prasme.)"),
    price: 19.9,
  },
  {
    key: "stain",
    title: T("Emergency Stain Rescue", "Skubus dėmių gelbėjimas"),
    img: "stain",
    desc: T(
      "Coffee. Ketchup. Meteor dust. We have got you.",
      "Kava, kečupas ar meteorų dulkės — dar nesutikome dėmės, kurios neįveiktume.",
    ),
    quote: T("Stains don't stand a chance.", "Dėmės, mus pamačiusios, sprunka."),
    price: 12.0,
  },
  {
    key: "blanket",
    title: T("Space Blanket Refresh", "Kosminių antklodžių gaiva"),
    img: "blanket",
    desc: T(
      "Quilts, duvets & even cosmic sleeping bags. Fluffy again.",
      "Antklodės, patalai ir net kosminiai miegmaišiai. Vėl minkšti ir purūs.",
    ),
    quote: T("Nap like a nebula.", "Tokie purūs, kad iš lovos nebenorėsite keltis."),
    price: 18.5,
  },
  {
    key: "fold",
    title: T("Express Fold & Beam", "Greitas lankstymas ir pristatymas"),
    img: "fold",
    desc: T(
      "Folded with precision. Beamed to your door. Neat as a nebula.",
      "Tiksliai sulankstyta ir pristatyta prie durų. Nepriekaištinga tvarka.",
    ),
    quote: T("Folded. Fast. Flawless.", "Sulankstyta taip dailiai, kad net gaila ardyti."),
    price: 11.0,
  },
  {
    key: "pickup",
    title: T("Pickup & Delivery", "Paėmimas ir pristatymas"),
    img: "pickup",
    desc: T(
      "We pick up, clean, and deliver across Lithuania. No teleport required.",
      "Paimame, išvalome ir pristatome visoje Lietuvoje. Teleportacijos nereikia.",
    ),
    quote: T("You relax. We zoom.", "Jūs ilsitės. Mes skriejame."),
    price: 4.5,
  },
  {
    key: "suit",
    title: T("Deluxe Human Suit Refresh", "Prabangaus žmogiškojo kostiumo gaiva"),
    img: "suit",
    desc: T(
      "For meetings, dates, and definitely-not-cover-story emergencies.",
      "Susitikimams, pasimatymams ir kitoms (visai ne slaptoms) progoms.",
    ),
    quote: T("Look human. Smell stellar.", "Atrodykite kaip žmogus, kvepėkite kaip žvaigždė."),
    price: 24.0,
  },
];

export interface CalcService {
  name: Tx;
  base: number;
}
export const CALC_SERVICES: CalcService[] = [
  { name: T("Standard Wash & Fold", "Standartinis skalbimas ir lankstymas"), base: 12 },
  { name: T("Steam Press", "Garų lyginimas"), base: 14 },
  { name: T("Disguise Dry Clean", "Maskuotės cheminis valymas"), base: 19.9 },
  { name: T("Emergency Stain Rescue", "Skubus dėmių gelbėjimas"), base: 12 },
  { name: T("Space Blanket Refresh", "Kosminių antklodžių gaiva"), base: 18.5 },
  { name: T("Express Fold & Beam", "Greitas lankstymas ir pristatymas"), base: 11 },
];

/* -------------------------------------------------------------- reviews --- */
export interface Review {
  quote: Tx;
  name: string;
  city: string;
  kind: "user" | "alien";
  bg: string;
}
export const REVIEWS: Review[] = [
  {
    quote: T(
      "My shirts have never been this fresh — even my soul.",
      "Marškiniai dar niekada taip nekvepėjo — net kaimynai per laiptinę užuodė.",
    ),
    name: "Mantas",
    city: "Vilnius",
    kind: "user",
    bg: "#E2F0D6",
  },
  {
    quote: T(
      "They cleaned my disguise perfectly. 10/10 would infiltrate again.",
      "Jie puikiai išvalė mano maskuotę. 10/10, vėl įsiskverbčiau.",
    ),
    name: "Ziggy Z.",
    city: "Kaunas",
    kind: "alien",
    bg: "#D6E6FB",
  },
  {
    quote: T(
      "Fast, friendly and absolutely out of this world!",
      "Greita, draugiška ir — o stebukle! — grąžino visas kojines iki vienos.",
    ),
    name: "Eglė",
    city: "Klaipėda",
    kind: "user",
    bg: "#F3DCE7",
  },
];

export interface City {
  name: string;
  hub: Tx;
  color: string;
}
export const CITIES: City[] = [
  { name: "Vilnius", hub: T("North Star Hub", "Šiaurinės žvaigždės centras"), color: "#76C043" },
  { name: "Kaunas", hub: T("Alien Beam Station", "Ateivių spindulio stotis"), color: "#7C5BD6" },
  { name: "Klaipėda", hub: T("Coastal Clean Base", "Pajūrio švaros bazė"), color: "#1E8BE8" },
];

/* ------------------------------------------------------ calculator data --- */
export interface Extra {
  key: string;
  name: Tx;
  price: number;
}
export const CALC_EXTRAS: Extra[] = [
  { key: "stain", name: T("Stain Treatment", "Dėmių valymas"), price: 2 },
  { key: "hypo", name: T("Hypoallergenic", "Hipoalerginis"), price: 2 },
  { key: "scent", name: T("Scent Booster", "Kvapo stiprintuvas"), price: 1.5 },
  { key: "steam", name: T("Steam Press", "Garų lyginimas"), price: 2 },
  { key: "eco", name: T("Eco Wash", "Ekologiškas skalbimas"), price: 1 },
];

export interface Urgency {
  key: string;
  name: Tx;
  sub: string;
  price: number;
}
export const URGENCY: Urgency[] = [
  { key: "standard", name: T("Standard", "Standartinis"), sub: "48–72h", price: 0 },
  { key: "priority", name: T("Priority", "Prioritetinis"), sub: "24h", price: 3 },
  { key: "express", name: T("Express", "Ekspresas"), sub: "12h", price: 6 },
];

export interface CType {
  key: string;
  name: Tx;
  mult: number;
}
export const CTYPES: CType[] = [
  { key: "everyday", name: T("Everyday", "Kasdienis"), mult: 1 },
  { key: "mixed", name: T("Mixed", "Mišrus"), mult: 1.05 },
  { key: "delicate", name: T("Delicate", "Subtilus"), mult: 1.2 },
  { key: "bedding", name: T("Bedding", "Patalynė"), mult: 1.15 },
];
export const HOME_TYPES: { key: string; name: Tx }[] = [
  { key: "everyday", name: T("Everyday", "Kasdienis") },
  { key: "mixed", name: T("Mixed Load", "Mišrus krūvis") },
  { key: "delicate", name: T("Delicate", "Subtilus") },
  { key: "bedding", name: T("Bedding", "Patalynė") },
];

/* ------------------------------------------------------------- packages --- */
export interface Pkg {
  name: Tx;
  price: number;
  tag: Tx | "";
  color: string;
  feats: Tx[];
}
export const PACKAGES: Pkg[] = [
  {
    name: T("Basic Wash", "Bazinis skalbimas"),
    price: 16,
    tag: "",
    color: "#1E8BE8",
    feats: [
      T("Up to 6kg wash & fold", "Iki 6 kg skalbimas ir lankstymas"),
      T("Standard 48–72h", "Standartinis 48–72 val."),
      T("Free pickup & delivery", "Nemokamas paėmimas ir pristatymas"),
      T("Fresh scent included", "Šviežias kvapas įskaičiuotas"),
    ],
  },
  {
    name: T("Steam & Press", "Garai ir lyginimas"),
    price: 21,
    tag: T("POPULAR", "POPULIARU"),
    color: "#76C043",
    feats: [
      T("Wash + precision steam press", "Skalbimas + tikslus garų lyginimas"),
      T("Up to 6kg", "Iki 6 kg"),
      T("Priority 24h option", "Prioritetas per 24 val."),
      T("Wrinkle-free guarantee", "Garantija be raukšlių"),
    ],
  },
  {
    name: T("Family Load", "Šeimos krūvis"),
    price: 42,
    tag: T("BEST VALUE", "GERIAUSIA KAINA"),
    color: "#7C5BD6",
    feats: [
      T("Up to 18kg mixed load", "Iki 18 kg mišrus krūvis"),
      T("Wash, fold & press", "Skalbimas, lankstymas ir lyginimas"),
      T("Free pickup & delivery", "Nemokamas paėmimas ir pristatymas"),
      T("Stain treatment included", "Dėmių valymas įskaičiuotas"),
    ],
  },
  {
    name: T("Express 24h", "Ekspresas 24 val."),
    price: 39,
    tag: T("FAST", "GREITAI"),
    color: "#F2A53B",
    feats: [
      T("Guaranteed 24h turnaround", "Garantuotas atlikimas per 24 val."),
      T("Up to 8kg", "Iki 8 kg"),
      T("Priority handling", "Prioritetinis aptarnavimas"),
      T("Real-time tracking", "Stebėjimas realiu laiku"),
    ],
  },
  {
    name: T("Alien Disguise Rescue", "Ateivių maskuotės gelbėjimas"),
    price: 28,
    tag: "",
    color: "#2BB1A8",
    feats: [
      T("Special items · 24–48h", "Ypatingi daiktai · 24–48 val."),
      T("Stain rescue included", "Dėmių gelbėjimas įskaičiuotas"),
      T("Delicate cosmic care", "Subtili kosminė priežiūra"),
      T("Steam finish", "Garų apdaila"),
    ],
  },
];

export const COMPARE_COLS: Tx[] = [
  T("Basic Wash", "Bazinis skalbimas"),
  T("Steam & Press", "Garai ir lyginimas"),
  T("Family Load", "Šeimos krūvis"),
  T("Express 24h", "Ekspresas 24 val."),
  T("Disguise Rescue", "Maskuotės gelbėjimas"),
];
export interface CompareRow {
  label: Tx;
  cells: (Tx | string)[];
}
export const COMPARE_ROWS: CompareRow[] = [
  { label: T("Wash", "Skalbimas"), cells: ["y", "y", "y", "y", "y"] },
  { label: T("Dry", "Džiovinimas"), cells: ["y", "y", "y", "y", "y"] },
  { label: T("Fold", "Lankstymas"), cells: ["y", "y", "y", "y", "—"] },
  { label: T("Steam Press", "Garų lyginimas"), cells: ["—", "y", "y", "y", "y"] },
  { label: T("Stain Treatment", "Dėmių valymas"), cells: ["—", "—", "y", "—", "y"] },
  {
    label: T("Max Weight", "Maks. svoris"),
    cells: ["6kg", "6kg", "18kg", "8kg", T("Per item", "Už vienetą")],
  },
  {
    label: T("Turnaround", "Atlikimo laikas"),
    cells: [
      T("48–72h", "48–72 val."),
      T("24h", "24 val."),
      T("48–72h", "48–72 val."),
      T("24h", "24 val."),
      T("24–48h", "24–48 val."),
    ],
  },
  {
    label: T("Pickup & Delivery", "Paėmimas ir pristatymas"),
    cells: [
      T("+€4.50", "+4,50 €"),
      T("+€4.50", "+4,50 €"),
      T("Free", "Nemokamai"),
      T("Free", "Nemokamai"),
      T("+€4.50", "+4,50 €"),
    ],
  },
];

export interface FaqItem {
  q: Tx;
  a: Tx;
}
export const PRICE_FAQ: FaqItem[] = [
  {
    q: T("How is the price calculated?", "Kaip apskaičiuojama kaina?"),
    a: T(
      "We combine your service, weight, urgency and extras. Pickup & delivery is free in most zones. The live total updates as you choose.",
      "Sujungiame paslaugą, svorį, skubumą ir priedus. Paėmimas ir pristatymas daugumoje zonų nemokamas. Bendra suma atsinaujina realiu laiku.",
    ),
  },
  {
    q: T("Are there any hidden fees?", "Ar yra paslėptų mokesčių?"),
    a: T(
      "None. No asteroids, no surprises. The total you see is the total you pay.",
      "Jokių. Jokių asteroidų, jokių staigmenų. Matoma suma yra ta, kurią sumokate.",
    ),
  },
  {
    q: T("Do you offer discounts?", "Ar taikote nuolaidas?"),
    a: T(
      "Yes — first orders get 10% off with code HELLOEARTH, and Star Members save 10% on every order.",
      "Taip — pirmiems užsakymams 10 % nuolaida su kodu HELLOEARTH, o „Star“ nariai sutaupo 10 % kiekvienam užsakymui.",
    ),
  },
  {
    q: T("What if my load is heavier than estimated?", "O jei krūvis sunkesnis nei numatyta?"),
    a: T(
      "We weigh on pickup and only adjust if it's significantly different — and we'll always message you first.",
      "Pasveriame paimdami ir koreguojame tik tada, jei svoris gerokai skiriasi — ir visada pirma jums pranešame.",
    ),
  },
];

/* ------------------------------------------------------------ locations --- */
export interface Station {
  city: string;
  name: Tx;
  addr: string;
  hours: string;
  color: string;
  img: IllustrationName;
  tags: Tx[];
  rating: string;
}
export const STATIONS: Station[] = [
  {
    city: "Vilnius",
    name: T("North Star Hub", "Šiaurinės žvaigždės centras"),
    addr: "Gedimino pr. 24, Vilnius",
    hours: "08:00 – 20:00",
    color: "#76C043",
    img: "wash",
    tags: [
      T("Wash & Fold", "Skalbimas ir lankstymas"),
      T("Dry Clean", "Cheminis valymas"),
      T("Express", "Ekspresas"),
    ],
    rating: "4.9",
  },
  {
    city: "Kaunas",
    name: T("Alien Beam Station", "Ateivių spindulio stotis"),
    addr: "Laisvės al. 60, Kaunas",
    hours: "08:00 – 20:00",
    color: "#7C5BD6",
    img: "press",
    tags: [
      T("Wash & Fold", "Skalbimas ir lankstymas"),
      T("Steam Press", "Garų lyginimas"),
      T("Pickup", "Paėmimas"),
    ],
    rating: "4.8",
  },
  {
    city: "Klaipėda",
    name: T("Coastal Clean Base", "Pajūrio švaros bazė"),
    addr: "Taikos pr. 32, Klaipėda",
    hours: "09:00 – 19:00",
    color: "#1E8BE8",
    img: "blanket",
    tags: [T("Wash & Fold", "Skalbimas ir lankstymas"), T("Blankets", "Antklodės"), T("Pickup", "Paėmimas")],
    rating: "4.9",
  },
  {
    city: "Šiauliai",
    name: T("Northern Lights Point", "Šiaurės pašvaistės taškas"),
    addr: "Vilniaus g. 141, Šiauliai",
    hours: "09:00 – 18:00",
    color: "#F2A53B",
    img: "stain",
    tags: [T("Wash & Fold", "Skalbimas ir lankstymas"), T("Dry Clean", "Cheminis valymas")],
    rating: "4.7",
  },
  {
    city: "Panevėžys",
    name: T("Meteor Drop Stop", "Meteorų nusileidimo stotelė"),
    addr: "Respublikos g. 40, Panevėžys",
    hours: "09:00 – 18:00",
    color: "#E0608A",
    img: "suit",
    tags: [T("Wash & Fold", "Skalbimas ir lankstymas"), T("Pickup", "Paėmimas")],
    rating: "4.8",
  },
];

export interface Route {
  name: Tx;
  days: Tx;
  cities: string;
  color: string;
}
export const ROUTES: Route[] = [
  {
    name: T("Route North", "Šiaurės maršrutas"),
    days: T("Mon / Thu", "Pir / Ket"),
    cities: "Vilnius · Utena · Panevėžys · Šiauliai",
    color: "#76C043",
  },
  {
    name: T("Route Central", "Centrinis maršrutas"),
    days: T("Tue / Fri", "Ant / Pen"),
    cities: "Vilnius · Kaunas · Alytus · Marijampolė",
    color: "#1E8BE8",
  },
  {
    name: T("Route West", "Vakarų maršrutas"),
    days: T("Wed / Sat", "Tre / Šeš"),
    cities: "Kaunas · Klaipėda · Palanga · Kretinga",
    color: "#7C5BD6",
  },
  {
    name: T("Route South", "Pietų maršrutas"),
    days: T("Tue / Sat", "Ant / Šeš"),
    cities: "Kaunas · Prienai · Alytus · Druskininkai",
    color: "#E0608A",
  },
];

export interface BranchChar {
  name: string;
  role: Tx;
  city: string;
  img: IllustrationName;
  color: string;
}
export const BRANCH_CHARS: BranchChar[] = [
  {
    name: "Vili",
    role: T("Chief Clean Officer", "Vyriausiasis švaros vadovas"),
    city: "Vilnius",
    img: "wash",
    color: "#76C043",
  },
  {
    name: "Beammy",
    role: T("Laundry Technician", "Putų burtininkas"),
    city: "Kaunas",
    img: "press",
    color: "#7C5BD6",
  },
  {
    name: "Klapio",
    role: T("Wave Wrangler", "Bangų sutramdytojas"),
    city: "Klaipėda",
    img: "blanket",
    color: "#1E8BE8",
  },
  {
    name: "Solaris",
    role: T("Spin Scientist", "Sukimosi mokslininkas"),
    city: "Šiauliai",
    img: "fold",
    color: "#F2A53B",
  },
  {
    name: "Orbi",
    role: T("Steam Specialist", "Garų specialistas"),
    city: "Panevėžys",
    img: "suit",
    color: "#E0608A",
  },
];

/* ---------------------------------------------------------------- about --- */
export interface Crew {
  name: string;
  role: Tx;
  img: IllustrationName;
  color: string;
  bio: Tx;
}
export const CREW: Crew[] = [
  {
    name: "Zygz",
    role: T("Wash Operator", "Skalbimo operatorius"),
    img: "wash",
    color: "#76C043",
    bio: T(
      "Master of Arctic-ion bubbles. Has never met a stain he respects.",
      "Arkties burbuliukų meistras. Dar nesutiko dėmės, kuri jam atsispirtų.",
    ),
  },
  {
    name: "Luna",
    role: T("Steam Specialist", "Garų specialistė"),
    img: "press",
    color: "#7C5BD6",
    bio: T(
      "Turns wrinkles into distant memories with one steam beam.",
      "Vienu garų spinduliu raukšles paverčia tolimais prisiminimais.",
    ),
  },
  {
    name: "E.Tiketas",
    role: T("Disguise Consultant", "Maskuotės konsultantas"),
    img: "disguise",
    color: "#1E8BE8",
    bio: T(
      "Keeps your human suit convincingly human. Mustache optional.",
      "Pasirūpina, kad žmogiškas kostiumas atrodytų įtikinamai žmogiškai. Ūsai – pasirinktinai.",
    ),
  },
  {
    name: "Foldor",
    role: T("Folding Expert", "Lankstymo ekspertas"),
    img: "fold",
    color: "#2E74D0",
    bio: T(
      "Folds with mathematical precision. Dreams in perfect squares.",
      "Lanksto matematiniu tikslumu. Sapnuoja tobulai sulankstytus rankšluosčius.",
    ),
  },
];

export interface StoryItem {
  icon: IconName;
  year: Tx;
  title: Tx;
  desc: Tx;
}
export const STORY: StoryItem[] = [
  {
    icon: "globe",
    year: T("Light Years Ago", "Prieš šviesmečius"),
    title: T("A Tidy Home Planet", "Tvarkinga gimtoji planeta"),
    desc: T(
      "Near the North Star, laundry was a science and freshness a duty.",
      "Prie Šiaurinės žvaigždės skalbimas buvo mokslas, o šviežumas – pareiga.",
    ),
  },
  {
    icon: "rocket",
    year: T("Year 0", "Nuliniai metai"),
    title: T("We Packed Up", "Susikrovėme lagaminus"),
    desc: T(
      "We found Earthlings struggle with laundry. So we came to help.",
      "Pamatėme, kad žemiečiai kankinasi su skalbiniais ir nuolat pameta kojines. Tad atskridome į pagalbą.",
    ),
  },
  {
    icon: "ufo",
    year: T("Year 1", "1-ieji metai"),
    title: T("First Landing", "Pirmasis nusileidimas"),
    desc: T(
      "Landed. Studied socks. Understood stains. Built NordWash.",
      "Nusileidome. Ištyrėme kojines. Supratome dėmes. Sukūrėme NordWash.",
    ),
  },
  {
    icon: "droplet",
    year: T("Year 2", "2-ieji metai"),
    title: T("First Earth Hub", "Pirmasis centras Žemėje"),
    desc: T(
      "Opened our first Earth laundry hub. Humans were… impressed.",
      "Atidarėme pirmąjį skalbimo centrą Žemėje. Žmonės buvo… sužavėti.",
    ),
  },
  {
    icon: "star",
    year: T("Year 3+", "3+ metai"),
    title: T("Going Cosmic", "Plečiamės kosmiškai"),
    desc: T(
      "More locations, more freshness, more happy humans every day.",
      "Vis daugiau skyrių, daugiau šviežumo ir laimingų žmonių kasdien.",
    ),
  },
  {
    icon: "sparkles",
    year: T("The Future", "Ateitis"),
    title: T("Across the Galaxy", "Per visą galaktiką"),
    desc: T(
      "Expanding across the planet. Maybe the galaxy. One load at a time.",
      "Plečiamės po visą planetą. Galbūt ir galaktiką. Po vieną krūvį.",
    ),
  },
];

export interface ValueItem {
  icon: IconName;
  title: Tx;
  desc: Tx;
}
export const VALUES: ValueItem[] = [
  {
    icon: "leaf",
    title: T("Planet First", "Pirma – planeta"),
    desc: T(
      "Eco detergents and low-water cycles on every load.",
      "Ekologiškos priemonės ir mažo vandens naudojimo ciklai kiekvienam krūviui.",
    ),
  },
  {
    icon: "shield",
    title: T("Care & Safety", "Priežiūra ir sauga"),
    desc: T(
      "Gentle, fabric-specific programs. No abductions.",
      "Švelnios, audiniui pritaikytos programos. Jokių pagrobimų.",
    ),
  },
  {
    icon: "bolt",
    title: T("Always Fast", "Visada greitai"),
    desc: T(
      "Express options that feel genuinely intergalactic.",
      "Ekspreso galimybės, kurios atrodo tikrai tarpgalaktiškai.",
    ),
  },
  {
    icon: "smile",
    title: T("Human (ish) Touch", "Beveik žmogiškas rūpestis"),
    desc: T(
      "Friendly crew, real support, happy customers.",
      "Draugiška komanda, tikra pagalba, laimingi klientai.",
    ),
  },
];

export interface Stat {
  num: string;
  label: Tx;
}
export const STATS: Stat[] = [
  { num: "25,000+", label: T("Happy Humans", "Laimingi žmonės") },
  { num: "1.2M+", label: T("Loads Washed", "Išskalbti krūviai") },
  { num: "98.7%", label: T("Satisfaction Rate", "Pasitenkinimo lygis") },
  { num: "24", label: T("Earth Locations", "Vietos Žemėje") },
  { num: "4.9★", label: T("Average Rating", "Vidutinis įvertinimas") },
];

/* ------------------------------------------------------------------ faq --- */
export interface FaqCat {
  icon: IconName;
  name: Tx;
}
export const FAQ_CATS: FaqCat[] = [
  { icon: "truck", name: T("Pickup & Delivery", "Paėmimas ir pristatymas") },
  { icon: "tag", name: T("Pricing & Payment", "Kainos ir mokėjimai") },
  { icon: "shirt", name: T("Services & Fabrics", "Paslaugos ir audiniai") },
  { icon: "clock", name: T("Timing & Turnaround", "Laikas ir atlikimas") },
  { icon: "shield", name: T("Care & Safety", "Priežiūra ir sauga") },
  { icon: "chat", name: T("Account & Support", "Paskyra ir pagalba") },
];
export const FAQS: FaqItem[] = [
  {
    q: T("How does pickup and delivery work?", "Kaip vyksta paėmimas ir pristatymas?"),
    a: T(
      "Book online, pick a time slot, and our crew collects your laundry and returns it clean, folded and fresh — usually within 48–72 hours.",
      "Užsisakykite internetu, pasirinkite laiką, o mūsų komanda paims skalbinius ir grąžins juos švarius, sulankstytus ir šviežius — paprastai per 48–72 valandas.",
    ),
  },
  {
    q: T("How fast do you deliver?", "Kaip greitai pristatote?"),
    a: T(
      "Standard turnaround is 48–72 hours. Priority is 24h and Express is as fast as 12h in selected zones.",
      "Standartinis atlikimas – 48–72 valandos. Prioritetinis – 24 val., o ekspresas – net 12 val. tam tikrose zonose.",
    ),
  },
  {
    q: T("Do you clean suits and costumes?", "Ar valote kostiumus ir aprangą?"),
    a: T(
      "Yes — one of our specialities, especially when the suit looks suspiciously non-human.",
      "Taip — tai viena mūsų specialybių, ypač kai kostiumas atrodo įtartinai nežmogiškas.",
    ),
  },
  {
    q: T("Is it safe for delicate fabrics?", "Ar saugu subtiliems audiniams?"),
    a: T(
      "Absolutely. We select a gentle, fabric-specific program for every item.",
      "Be abejo. Kiekvienam daiktui parenkame švelnią, audiniui pritaikytą programą.",
    ),
  },
  {
    q: T("Which areas do you cover?", "Kokias vietoves aptarnaujate?"),
    a: T(
      "Vilnius, Kaunas, Klaipėda, Šiauliai and Panevėžys, with more beam stations landing soon.",
      "Vilnių, Kauną, Klaipėdą, Šiaulius ir Panevėžį, o netrukus nusileis dar daugiau stočių.",
    ),
  },
  {
    q: T("How do I pay?", "Kaip galiu sumokėti?"),
    a: T(
      "Card, Apple Pay, PayPal or cash on delivery. First orders get 10% off with code HELLOEARTH.",
      "Kortele, Apple Pay, PayPal arba grynais pristatant. Pirmiems užsakymams 10 % nuolaida su kodu HELLOEARTH.",
    ),
  },
  {
    q: T("What if something goes wrong?", "O jei kažkas nepavyksta?"),
    a: T(
      "We offer a free rewash, and our support crew replies faster than light. 100% satisfaction or we'll make it right.",
      "Pasiūlome nemokamą perskalbimą, o mūsų pagalbos komanda atsako greičiau nei šviesa. 100 % pasitenkinimas arba viską ištaisysime.",
    ),
  },
  {
    q: T("Can I schedule recurring pickups?", "Ar galiu užsisakyti reguliarų paėmimą?"),
    a: T(
      "Yes — Star Members can set weekly or biweekly pickups and save 10% on every order.",
      "Taip — „Star“ nariai gali nustatyti savaitinį ar kassavaitinį paėmimą ir sutaupyti 10 % kiekvienam užsakymui.",
    ),
  },
];

/* ----------------------------------------------------------- fabrics ------ */
export interface Fabric {
  icon: IconName;
  name: Tx;
  note: Tx;
}
export const FABRICS: Fabric[] = [
  { icon: "shirt", name: T("Cotton", "Medvilnė"), note: T("Soft & breathable", "Minkšta ir kvėpuojanti") },
  { icon: "wind", name: T("Linen", "Linas"), note: T("Light & airy", "Lengvas ir erdvus") },
  { icon: "snow", name: T("Wool", "Vilna"), note: T("Warm & cozy", "Šilta ir jauku") },
  { icon: "atom", name: T("Synthetics", "Sintetika"), note: T("Space-ready", "Paruošta kosmosui") },
  { icon: "droplet", name: T("Silk", "Šilkas"), note: T("Smooth & delicate", "Glotnus ir subtilus") },
  { icon: "shield", name: T("Leather", "Oda"), note: T("Tough but tender", "Tvirta, bet švelni") },
  {
    icon: "satellite",
    name: T("Tech Fabrics", "Techniniai audiniai"),
    note: T("High performance", "Aukšto našumo"),
  },
  {
    icon: "mask",
    name: T("Disguise Materials", "Maskuotės medžiagos"),
    note: T("Human-grade (mostly)", "Žmogiško lygio (beveik)"),
  },
];

export interface WhyItem {
  icon: IconName;
  title: Tx;
  desc: Tx;
}
export const WHY_CHOOSE: WhyItem[] = [
  {
    icon: "atom",
    title: T("Alien Tech", "Ateivių technologijos"),
    desc: T("Advanced cleaning beyond Earth standards.", "Pažangus valymas, pranokstantis Žemės standartus."),
  },
  {
    icon: "leaf",
    title: T("Eco Friendly", "Ekologiška"),
    desc: T("Gentle on fabrics, kind to the planet.", "Švelnu audiniams, draugiška planetai."),
  },
  {
    icon: "shield",
    title: T("Human Safe", "Saugu žmonėms"),
    desc: T("No abductions. Just fresh clothes.", "Jokių pagrobimų. Tik švieži drabužiai."),
  },
  {
    icon: "smile",
    title: T("Satisfaction", "Pasitenkinimas"),
    desc: T("100% or we'll make it right.", "100 % arba viską ištaisysime."),
  },
];

/* -------------------------------------------------------------- booking --- */
export interface Size {
  key: string;
  name: Tx;
  sub: Tx;
  adj: number;
}
export const SIZES: Size[] = [
  { key: "small", name: T("Small", "Mažas"), sub: T("up to 5kg", "iki 5 kg"), adj: 0 },
  { key: "medium", name: T("Medium", "Vidutinis"), sub: T("5–10kg", "5–10 kg"), adj: 6 },
  { key: "large", name: T("Large", "Didelis"), sub: T("10–15kg", "10–15 kg"), adj: 12 },
  { key: "xlarge", name: T("X-Large", "Labai didelis"), sub: T("15kg+", "15 kg+"), adj: 18 },
];
export const TIMES = [
  "08:00 – 10:00",
  "10:00 – 12:00",
  "12:00 – 14:00",
  "14:00 – 16:00",
  "16:00 – 18:00",
  "18:00 – 20:00",
];
export const BSTEPS: Tx[] = [
  T("Select Service", "Pasirinkite paslaugą"),
  T("Pickup Address", "Paėmimo adresas"),
  T("Date & Time", "Data ir laikas"),
  T("Extras", "Priedai"),
  T("Review & Pay", "Peržiūra ir mokėjimas"),
];
export const BSTEPS_SHORT: Tx[] = [
  T("Service", "Paslauga"),
  T("Pickup", "Paėmimas"),
  T("Schedule", "Grafikas"),
  T("Extras", "Priedai"),
  T("Review", "Peržiūra"),
];

export interface BExtra {
  key: "bHypo" | "bScent" | "bStain" | "bFold" | "bExpress";
  name: Tx;
  price: number;
}
export const BOOKING_EXTRAS: BExtra[] = [
  { key: "bHypo", name: T("Hypoallergenic", "Hipoalerginis"), price: 2 },
  { key: "bScent", name: T("Scent Booster", "Kvapo stiprintuvas"), price: 1.5 },
  { key: "bStain", name: T("Stain Treatment", "Dėmių valymas"), price: 2.5 },
  { key: "bFold", name: T("Premium Fold", "Premium lankstymas"), price: 2 },
  { key: "bExpress", name: T("Express 24h", "Ekspresas 24 val."), price: 6 },
];

export const PAY_METHODS: { key: string; name: Tx }[] = [
  { key: "card", name: T("Card", "Kortelė") },
  { key: "apple", name: T("Apple Pay", "Apple Pay") },
  { key: "paypal", name: T("PayPal", "PayPal") },
  { key: "cash", name: T("Cash on delivery", "Grynais pristatant") },
];

export const SUBJECTS: Tx[] = [
  T("General question", "Bendras klausimas"),
  T("Pricing & quotes", "Kainos ir pasiūlymai"),
  T("Pickup & delivery", "Paėmimas ir pristatymas"),
  T("A problem with my order", "Problema su užsakymu"),
  T("Business enquiry", "Verslo užklausa"),
  T("Something cosmic", "Kažkas kosmiško"),
];
