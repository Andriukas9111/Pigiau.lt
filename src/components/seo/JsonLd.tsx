import { BRAND } from "@/config/brand";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: required for JSON-LD
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://${BRAND.domain}#org`,
    name: BRAND.name,
    legalName: BRAND.legalName,
    url: `https://${BRAND.domain}`,
    telephone: BRAND.phoneE164,
    email: BRAND.email,
    address: { "@type": "PostalAddress", addressLocality: "Vilnius", addressCountry: "LT" },
    areaServed: ["Lithuania"],
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "16:00" },
    ],
  };
}

export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceLd({
  name,
  description,
  url,
  pricePerM2,
  currency = "EUR",
}: {
  name: string;
  description: string;
  url: string;
  pricePerM2: number;
  currency?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: { "@type": "LocalBusiness", "@id": `https://${BRAND.domain}#org` },
    areaServed: ["Lithuania"],
    offers: {
      "@type": "Offer",
      priceCurrency: currency,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: pricePerM2,
        priceCurrency: currency,
        unitCode: "MTK",
      },
    },
  };
}

export function faqLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}
