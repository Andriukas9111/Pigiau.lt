// Placeholder imagery via Lorem Picsum (free for any use). Each URL uses a
// stable seed so the same image renders every visit. Swap these for the
// owner's real photography by replacing values here only — every component
// reads through this map.

const W = 1600;
const H = 1100;

const pic = (seed: string, w = W, h = H) => `https://picsum.photos/seed/pigiau-${seed}/${w}/${h}`;

export const IMG = {
  // Hero background (used on the home page hero)
  hero: pic("hero-pressure-1", 2400, 1500),
  heroPortrait: pic("hero-pressure-1", 1200, 1500),

  // Per-service hero image
  serviceHero: {
    "driveway-paver-cleaning": pic("driveway-1"),
    "terrace-cleaning": pic("terrace-1"),
    "facade-cleaning": pic("facade-1"),
    "roof-cleaning": pic("roof-1"),
    "fence-cleaning": pic("fence-1"),
    "oil-stain-removal": pic("oil-1"),
    "commercial-forecourt": pic("forecourt-1"),
    "industrial-floor-cleaning": pic("industrial-1"),
  } as const satisfies Record<string, string>,

  // Before/after pairs per service. Three pairs per service to populate the
  // detail page carousel + the home signature work + the work gallery.
  beforeAfter: {
    "driveway-paver-cleaning": [
      { before: pic("driveway-b1"), after: pic("driveway-a1"), location: "Vilnius, Pilaitė" },
      { before: pic("driveway-b2"), after: pic("driveway-a2"), location: "Kaunas, Aleksotas" },
      { before: pic("driveway-b3"), after: pic("driveway-a3"), location: "Klaipėda, Melnragė" },
    ],
    "terrace-cleaning": [
      { before: pic("terrace-b1"), after: pic("terrace-a1"), location: "Vilnius, Antakalnis" },
      { before: pic("terrace-b2"), after: pic("terrace-a2"), location: "Kaunas, Žaliakalnis" },
      { before: pic("terrace-b3"), after: pic("terrace-a3"), location: "Palanga" },
    ],
    "facade-cleaning": [
      { before: pic("facade-b1"), after: pic("facade-a1"), location: "Vilnius, Užupis" },
      { before: pic("facade-b2"), after: pic("facade-a2"), location: "Kaunas, centras" },
      { before: pic("facade-b3"), after: pic("facade-a3"), location: "Klaipėda, senamiestis" },
    ],
    "roof-cleaning": [
      { before: pic("roof-b1"), after: pic("roof-a1"), location: "Vilnius, Valakampiai" },
      { before: pic("roof-b2"), after: pic("roof-a2"), location: "Kaunas, Eiguliai" },
      { before: pic("roof-b3"), after: pic("roof-a3"), location: "Trakai" },
    ],
    "fence-cleaning": [
      { before: pic("fence-b1"), after: pic("fence-a1"), location: "Vilnius, Pavilnys" },
      { before: pic("fence-b2"), after: pic("fence-a2"), location: "Kaunas, Šilainiai" },
      { before: pic("fence-b3"), after: pic("fence-a3"), location: "Klaipėda" },
    ],
    "oil-stain-removal": [
      { before: pic("oil-b1"), after: pic("oil-a1"), location: "Vilnius, degalinė" },
      { before: pic("oil-b2"), after: pic("oil-a2"), location: "Kaunas, autoservisas" },
      { before: pic("oil-b3"), after: pic("oil-a3"), location: "Klaipėda, aikštelė" },
    ],
    "commercial-forecourt": [
      { before: pic("forecourt-b1"), after: pic("forecourt-a1"), location: "Vilnius, degalinė" },
      { before: pic("forecourt-b2"), after: pic("forecourt-a2"), location: "Kaunas, restoranas" },
      { before: pic("forecourt-b3"), after: pic("forecourt-a3"), location: "Klaipėda, prekybos centras" },
    ],
    "industrial-floor-cleaning": [
      { before: pic("industrial-b1"), after: pic("industrial-a1"), location: "Vilnius, sandėlis" },
      { before: pic("industrial-b2"), after: pic("industrial-a2"), location: "Kaunas, gamykla" },
      { before: pic("industrial-b3"), after: pic("industrial-a3"), location: "Klaipėda, angaras" },
    ],
  } as const satisfies Record<string, { before: string; after: string; location: string }[]>,

  // About page imagery
  about: {
    crew: pic("crew-1", 1600, 1100),
    equipment: pic("equipment-1", 1600, 1100),
  },

  // Trust strip — placeholder client logos (we render them as monochrome SVGs
  // in the component itself; this is just labels)
} as const;
