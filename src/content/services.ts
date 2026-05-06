export type ServiceCategory = "residential" | "commercial" | "industrial";

export type ServiceSurface = string;

export type ServiceTier = { upTo: number; pricePerM2: number };

export type ServiceI18nKey =
  | "paverCleaning"
  | "terraceCleaning"
  | "facadeCleaning"
  | "roofCleaning"
  | "fenceCleaning"
  | "oilStainRemoval"
  | "commercialForecourt"
  | "industrialFloor";

export type Service = {
  id: string;
  slugs: { lt: string; ru: string; en: string };
  category: ServiceCategory;
  basePricePerM2: number;
  minimumOrder: number;
  pricingTiers?: ServiceTier[];
  surfaces: ServiceSurface[];
  hero: { src: string };
  beforeAfter: { before: string; after: string; location: string }[];
  i18nKey: ServiceI18nKey;
};

export const services: Service[] = [
  {
    id: "driveway-paver-cleaning",
    slugs: { lt: "trinkeliu-plovimas", ru: "mojka-trotuarnoj-plitki", en: "driveway-paver-cleaning" },
    category: "residential",
    basePricePerM2: 1.8,
    minimumOrder: 80,
    pricingTiers: [
      { upTo: 50, pricePerM2: 2.4 },
      { upTo: 150, pricePerM2: 1.8 },
      { upTo: 500, pricePerM2: 1.5 },
      { upTo: Number.POSITIVE_INFINITY, pricePerM2: 1.3 },
    ],
    surfaces: ["Trinkelės", "Klinkeris", "Betoninės plytelės"],
    hero: { src: "/work/driveway-vilnius-01-after.avif" },
    beforeAfter: [
      {
        before: "/work/driveway-vilnius-01-before.avif",
        after: "/work/driveway-vilnius-01-after.avif",
        location: "Vilnius, Pilaitė",
      },
      {
        before: "/work/driveway-kaunas-02-before.avif",
        after: "/work/driveway-kaunas-02-after.avif",
        location: "Kaunas, Aleksotas",
      },
      {
        before: "/work/driveway-klaipeda-03-before.avif",
        after: "/work/driveway-klaipeda-03-after.avif",
        location: "Klaipėda, Melnragė",
      },
    ],
    i18nKey: "paverCleaning",
  },
  {
    id: "terrace-cleaning",
    slugs: { lt: "terasos-plovimas", ru: "mojka-terras", en: "terrace-cleaning" },
    category: "residential",
    basePricePerM2: 2.2,
    minimumOrder: 80,
    surfaces: ["Mediena", "Kompozitas", "Betoninės plokštės", "Akmens plytelės"],
    hero: { src: "/work/terrace-01-after.avif" },
    beforeAfter: [
      {
        before: "/work/terrace-01-before.avif",
        after: "/work/terrace-01-after.avif",
        location: "Vilnius, Antakalnis",
      },
      {
        before: "/work/terrace-02-before.avif",
        after: "/work/terrace-02-after.avif",
        location: "Kaunas, Žaliakalnis",
      },
      {
        before: "/work/terrace-03-before.avif",
        after: "/work/terrace-03-after.avif",
        location: "Palanga",
      },
    ],
    i18nKey: "terraceCleaning",
  },
  {
    id: "facade-cleaning",
    slugs: { lt: "fasado-plovimas", ru: "mojka-fasada", en: "facade-cleaning" },
    category: "residential",
    basePricePerM2: 2.5,
    minimumOrder: 200,
    surfaces: ["Tinkas", "Klinkeris", "Betonas", "Medinės dailylentės"],
    hero: { src: "/work/facade-01-after.avif" },
    beforeAfter: [
      {
        before: "/work/facade-01-before.avif",
        after: "/work/facade-01-after.avif",
        location: "Vilnius, Užupis",
      },
      {
        before: "/work/facade-02-before.avif",
        after: "/work/facade-02-after.avif",
        location: "Kaunas, centras",
      },
      {
        before: "/work/facade-03-before.avif",
        after: "/work/facade-03-after.avif",
        location: "Klaipėda, senamiestis",
      },
    ],
    i18nKey: "facadeCleaning",
  },
  {
    id: "roof-cleaning",
    slugs: { lt: "stogo-plovimas", ru: "mojka-kryshi", en: "roof-cleaning" },
    category: "residential",
    basePricePerM2: 2.8,
    minimumOrder: 250,
    surfaces: ["Čerpės", "Skarda", "Bituminė danga"],
    hero: { src: "/work/roof-01-after.avif" },
    beforeAfter: [
      {
        before: "/work/roof-01-before.avif",
        after: "/work/roof-01-after.avif",
        location: "Vilnius, Valakampiai",
      },
      {
        before: "/work/roof-02-before.avif",
        after: "/work/roof-02-after.avif",
        location: "Kaunas, Eiguliai",
      },
      {
        before: "/work/roof-03-before.avif",
        after: "/work/roof-03-after.avif",
        location: "Trakai",
      },
    ],
    i18nKey: "roofCleaning",
  },
  {
    id: "fence-cleaning",
    slugs: { lt: "tvoros-plovimas", ru: "mojka-zabora", en: "fence-cleaning" },
    category: "residential",
    basePricePerM2: 1.6,
    minimumOrder: 60,
    surfaces: ["Mediena", "Metalas", "Betonas", "Plastikas"],
    hero: { src: "/work/fence-01-after.avif" },
    beforeAfter: [
      {
        before: "/work/fence-01-before.avif",
        after: "/work/fence-01-after.avif",
        location: "Vilnius, Pavilnys",
      },
      {
        before: "/work/fence-02-before.avif",
        after: "/work/fence-02-after.avif",
        location: "Kaunas, Šilainiai",
      },
      {
        before: "/work/fence-03-before.avif",
        after: "/work/fence-03-after.avif",
        location: "Klaipėda",
      },
    ],
    i18nKey: "fenceCleaning",
  },
  {
    id: "oil-stain-removal",
    slugs: { lt: "tepalo-demiu-valymas", ru: "udalenie-maslyanyh-pyaten", en: "oil-stain-removal" },
    category: "commercial",
    basePricePerM2: 4.5,
    minimumOrder: 120,
    surfaces: ["Betonas", "Asfaltas", "Trinkelės"],
    hero: { src: "/work/oil-01-after.avif" },
    beforeAfter: [
      {
        before: "/work/oil-01-before.avif",
        after: "/work/oil-01-after.avif",
        location: "Vilnius, degalinė",
      },
      {
        before: "/work/oil-02-before.avif",
        after: "/work/oil-02-after.avif",
        location: "Kaunas, autoservisas",
      },
      {
        before: "/work/oil-03-before.avif",
        after: "/work/oil-03-after.avif",
        location: "Klaipėda, aikštelė",
      },
    ],
    i18nKey: "oilStainRemoval",
  },
  {
    id: "commercial-forecourt",
    slugs: {
      lt: "komercines-aikšteles-plovimas",
      ru: "mojka-kommercheskih-ploshchadok",
      en: "commercial-forecourt-cleaning",
    },
    category: "commercial",
    basePricePerM2: 1.4,
    minimumOrder: 400,
    pricingTiers: [
      { upTo: 500, pricePerM2: 1.6 },
      { upTo: 1500, pricePerM2: 1.4 },
      { upTo: 5000, pricePerM2: 1.1 },
      { upTo: Number.POSITIVE_INFINITY, pricePerM2: 0.9 },
    ],
    surfaces: ["Asfaltas", "Betonas", "Trinkelės"],
    hero: { src: "/work/forecourt-01-after.avif" },
    beforeAfter: [
      {
        before: "/work/forecourt-01-before.avif",
        after: "/work/forecourt-01-after.avif",
        location: "Vilnius, degalinė",
      },
      {
        before: "/work/forecourt-02-before.avif",
        after: "/work/forecourt-02-after.avif",
        location: "Kaunas, restoranas",
      },
      {
        before: "/work/forecourt-03-before.avif",
        after: "/work/forecourt-03-after.avif",
        location: "Klaipėda, prekybos centras",
      },
    ],
    i18nKey: "commercialForecourt",
  },
  {
    id: "industrial-floor-cleaning",
    slugs: {
      lt: "pramoniniu-grindu-plovimas",
      ru: "mojka-promyshlennyh-polov",
      en: "industrial-floor-cleaning",
    },
    category: "industrial",
    basePricePerM2: 1.2,
    minimumOrder: 600,
    surfaces: ["Pramoninis betonas", "Epoksidinė danga", "Skystas akmuo"],
    hero: { src: "/work/industrial-01-after.avif" },
    beforeAfter: [
      {
        before: "/work/industrial-01-before.avif",
        after: "/work/industrial-01-after.avif",
        location: "Vilnius, sandėlis",
      },
      {
        before: "/work/industrial-02-before.avif",
        after: "/work/industrial-02-after.avif",
        location: "Kaunas, gamykla",
      },
      {
        before: "/work/industrial-03-before.avif",
        after: "/work/industrial-03-after.avif",
        location: "Klaipėda, angaras",
      },
    ],
    i18nKey: "industrialFloor",
  },
];

export function getServiceById(id: string) {
  return services.find((s) => s.id === id);
}

export function getServiceBySlug(slug: string, locale: "lt" | "ru" | "en") {
  return services.find((s) => s.slugs[locale] === slug);
}
