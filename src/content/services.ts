import { IMG } from "./images";

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

type ServiceId = keyof typeof IMG.serviceHero;

const make = (id: ServiceId, data: Omit<Service, "id" | "hero" | "beforeAfter">): Service => ({
  id,
  hero: { src: IMG.serviceHero[id] },
  beforeAfter: IMG.beforeAfter[id],
  ...data,
});

export const services: Service[] = [
  make("driveway-paver-cleaning", {
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
    i18nKey: "paverCleaning",
  }),
  make("terrace-cleaning", {
    slugs: { lt: "terasos-plovimas", ru: "mojka-terras", en: "terrace-cleaning" },
    category: "residential",
    basePricePerM2: 2.2,
    minimumOrder: 80,
    surfaces: ["Mediena", "Kompozitas", "Betoninės plokštės", "Akmens plytelės"],
    i18nKey: "terraceCleaning",
  }),
  make("facade-cleaning", {
    slugs: { lt: "fasado-plovimas", ru: "mojka-fasada", en: "facade-cleaning" },
    category: "residential",
    basePricePerM2: 2.5,
    minimumOrder: 200,
    surfaces: ["Tinkas", "Klinkeris", "Betonas", "Medinės dailylentės"],
    i18nKey: "facadeCleaning",
  }),
  make("roof-cleaning", {
    slugs: { lt: "stogo-plovimas", ru: "mojka-kryshi", en: "roof-cleaning" },
    category: "residential",
    basePricePerM2: 2.8,
    minimumOrder: 250,
    surfaces: ["Čerpės", "Skarda", "Bituminė danga"],
    i18nKey: "roofCleaning",
  }),
  make("fence-cleaning", {
    slugs: { lt: "tvoros-plovimas", ru: "mojka-zabora", en: "fence-cleaning" },
    category: "residential",
    basePricePerM2: 1.6,
    minimumOrder: 60,
    surfaces: ["Mediena", "Metalas", "Betonas", "Plastikas"],
    i18nKey: "fenceCleaning",
  }),
  make("oil-stain-removal", {
    slugs: { lt: "tepalo-demiu-valymas", ru: "udalenie-maslyanyh-pyaten", en: "oil-stain-removal" },
    category: "commercial",
    basePricePerM2: 4.5,
    minimumOrder: 120,
    surfaces: ["Betonas", "Asfaltas", "Trinkelės"],
    i18nKey: "oilStainRemoval",
  }),
  make("commercial-forecourt", {
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
    i18nKey: "commercialForecourt",
  }),
  make("industrial-floor-cleaning", {
    slugs: {
      lt: "pramoniniu-grindu-plovimas",
      ru: "mojka-promyshlennyh-polov",
      en: "industrial-floor-cleaning",
    },
    category: "industrial",
    basePricePerM2: 1.2,
    minimumOrder: 600,
    surfaces: ["Pramoninis betonas", "Epoksidinė danga", "Skystas akmuo"],
    i18nKey: "industrialFloor",
  }),
];

export function getServiceById(id: string) {
  return services.find((s) => s.id === id);
}

export function getServiceBySlug(slug: string, locale: "lt" | "ru" | "en") {
  return services.find((s) => s.slugs[locale] === slug);
}
