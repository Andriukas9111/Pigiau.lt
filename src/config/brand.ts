export const BRAND = {
  name: "Pigiau.lt",
  legalName: "{{LEGAL_NAME}}",
  vatNumber: "{{VAT_NUMBER}}",
  companyCode: "{{COMPANY_CODE}}",
  domain: "pigiau.lt",
  phoneE164: "{{PHONE_E164}}",
  phoneHuman: "{{PHONE_HUMAN}}",
  email: "{{EMAIL}}",
  address: "Vilnius, Lietuva",
  iban: "{{IBAN}}",
  workingHours: { weekdays: "08:00-19:00", saturday: "09:00-16:00", sunday: "Uždaryta" },
  social: {
    facebook: "{{FB_URL}}",
    instagram: "{{IG_URL}}",
    tiktok: "{{TT_URL}}",
  },
  cal: {
    username: "{{CAL_USERNAME}}",
    consultationSlug: "15-min-konsultacija",
    onSiteSlug: "vietos-apziura",
  },
  vatRegistered: true,
  vatRate: 0.21,
} as const;

export const PROJECTS_COMPLETED: number | null = null;
export const M2_THIS_YEAR: number | null = null;
export const AVERAGE_RATING: number | null = null;
