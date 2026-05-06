import { BookingStrip } from "@/components/sections/BookingStrip";
import { CalcTeaser } from "@/components/sections/CalcTeaser";
import { CoverageMap } from "@/components/sections/CoverageMap";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { HeroScrollVideo } from "@/components/sections/HeroScrollVideo";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { PromiseSection } from "@/components/sections/PromiseSection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { SignatureWork } from "@/components/sections/SignatureWork";
import { TestimonialsRow } from "@/components/sections/TestimonialsRow";
import { pageMetadata } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.home" });
  return pageMetadata({ title: t("title"), description: t("description"), path: "/", locale });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroScrollVideo />
      <PromiseSection />
      <ServiceGrid limit={6} />
      <SignatureWork />
      <ProcessTimeline />
      <CoverageMap />
      <CalcTeaser />
      <TestimonialsRow />
      <BookingStrip />
      <FaqPreview />
    </>
  );
}
