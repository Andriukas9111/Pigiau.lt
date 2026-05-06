import { BRAND } from "@/config/brand";
import type { Metadata } from "next";

export type SeoPage = "default" | "home" | "services" | "calculator" | "work" | "about" | "contact" | "faq";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${BRAND.domain}`;

export function pageMetadata({
  title,
  description,
  path,
  locale,
  ogImage,
}: {
  title: string;
  description: string;
  path: string;
  locale: string;
  ogImage?: string;
}): Metadata {
  const url = `${SITE_URL}${locale === "lt" ? "" : `/${locale}`}${path}`;
  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        lt: `${SITE_URL}${path}`,
        ru: `${SITE_URL}/ru${path}`,
        en: `${SITE_URL}/en${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND.name,
      locale,
      type: "website",
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
    robots: { index: true, follow: true },
  };
}
