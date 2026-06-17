import { PageBanner } from "@/components/sections/Banners";
import { BookingFlow } from "@/components/sections/BookingFlow";
import { trFor } from "@/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const lt = lang === "lt";
  return {
    title: lt ? "Užsisakyk skalbimą" : "Book Your Wash",
    description: lt
      ? "Užsisakykite skalbinių paėmimą penkiais žingsniais. Pasirinkite paslaugą ir laiką, o mūsų komanda paims, išvalys ir pristatys visoje Lietuvoje — paėmimas nemokamas."
      : "Book a laundry pickup in five quick steps. Choose your service, pick a time, and our crew collects, cleans and delivers across Lithuania — free pickup.",
    alternates: {
      canonical: `/${lang}/booking`,
      languages: { lt: "/lt/booking", en: "/en/booking", "x-default": "/lt/booking" },
    },
  };
}

export default async function BookingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const tr = trFor(lang === "lt" ? "lt" : "en");
  return (
    <div className="nw-fade">
      <PageBanner
        image="hero_booking"
        title={tr("Book Your Wash", "Užsisakyk skalbimą")}
        alt={tr(
          "Book your wash — five quick steps to a cosmic-clean pickup",
          "Užsisakyk skalbimą — penki žingsniai iki kosmiškai švaraus paėmimo",
        )}
      />
      <BookingFlow />
    </div>
  );
}
