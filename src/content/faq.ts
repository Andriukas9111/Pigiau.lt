export type FaqGroupKey = "services" | "pricing" | "process" | "payment" | "warranty";

export type FaqItem = {
  id: string;
  group: FaqGroupKey;
  i18nKey: string;
};

export const faqItems: FaqItem[] = [
  { id: "f-001", group: "services", i18nKey: "whatSurfaces" },
  { id: "f-002", group: "services", i18nKey: "winterWork" },
  { id: "f-003", group: "services", i18nKey: "ownWater" },
  { id: "f-004", group: "services", i18nKey: "chemicals" },
  { id: "f-005", group: "services", i18nKey: "smallJobs" },
  { id: "f-006", group: "pricing", i18nKey: "minimumOrder" },
  { id: "f-007", group: "pricing", i18nKey: "writtenQuote" },
  { id: "f-008", group: "pricing", i18nKey: "vatHandling" },
  { id: "f-009", group: "pricing", i18nKey: "travelFees" },
  { id: "f-010", group: "pricing", i18nKey: "addonPricing" },
  { id: "f-011", group: "process", i18nKey: "howLong" },
  { id: "f-012", group: "process", i18nKey: "weatherDelay" },
  { id: "f-013", group: "process", i18nKey: "presenceRequired" },
  { id: "f-014", group: "process", i18nKey: "noiseLevels" },
  { id: "f-015", group: "process", i18nKey: "wastewater" },
  { id: "f-016", group: "payment", i18nKey: "paymentMethods" },
  { id: "f-017", group: "payment", i18nKey: "invoiceTimeline" },
  { id: "f-018", group: "payment", i18nKey: "deposit" },
  { id: "f-019", group: "payment", i18nKey: "vatInvoice" },
  { id: "f-020", group: "payment", i18nKey: "businessClients" },
  { id: "f-021", group: "warranty", i18nKey: "qualityGuarantee" },
  { id: "f-022", group: "warranty", i18nKey: "insurance" },
  { id: "f-023", group: "warranty", i18nKey: "damagedTile" },
  { id: "f-024", group: "warranty", i18nKey: "regrowthMoss" },
  { id: "f-025", group: "warranty", i18nKey: "complaints" },
];
