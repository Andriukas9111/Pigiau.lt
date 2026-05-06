// Brand-decision tokens. Replace these with real values before launch.
// They are kept as plausible placeholders (not {{TOKEN}} markers) so the
// site previews cleanly during development.
export const BRAND = {
  name: "Pigiau.lt",
  legalName: "MB Pigiau",
  vatNumber: "LT100000000000",
  companyCode: "300000000",
  domain: "pigiau.lt",
  phoneE164: "+37060000000",
  phoneHuman: "+370 600 00000",
  email: "info@pigiau.lt",
  address: "Vilnius, Lietuva",
  iban: "LT000000000000000000",
  workingHours: { weekdays: "08:00-19:00", saturday: "09:00-16:00", sunday: "Uždaryta" },
  social: {
    facebook: "https://facebook.com/pigiau.lt",
    instagram: "https://instagram.com/pigiau.lt",
    tiktok: "https://tiktok.com/@pigiau.lt",
  },
  cal: {
    username: "pigiau",
    consultationSlug: "15-min-konsultacija",
    onSiteSlug: "vietos-apziura",
  },
  vatRegistered: true,
  vatRate: 0.21,
} as const;

// Plausible defaults the owner edits to real numbers before launch.
export const PROJECTS_COMPLETED: number | null = 420;
export const M2_THIS_YEAR: number | null = 125000;
export const AVERAGE_RATING: number | null = 4.9;
