import { BRAND } from "@/lib/data";
import type { Locale } from "@/lib/i18n";

const SITE = "https://www.nordwash.lt";

const buildData = (lang: Locale) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE}/#business`,
  name: "NordWash",
  description:
    lang === "lt"
      ? "Premium skalbimas, cheminis valymas ir kosminė priežiūra visoje Lietuvoje."
      : "Premium laundry, dry cleaning & cosmic care delivered across Lithuania.",
  inLanguage: lang === "lt" ? "lt" : "en",
  url: `${SITE}/${lang}`,
  image: `${SITE}/og.png`,
  logo: `${SITE}/icon.svg`,
  telephone: BRAND.phone,
  email: "hello@nordwash.lt",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Liepojos g. 82",
    addressLocality: "Klaipėda",
    addressCountry: "LT",
  },
  areaServed: ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "16:00" },
  ],
});

export function JsonLd({ lang }: { lang: Locale }) {
  const json = JSON.stringify(buildData(lang));
  return (
    // biome-ignore lint/security/noDangerouslySetInnerHtml: static structured data, no user input
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}
