import { LegalDoc, LegalH, LegalP, LegalUl } from "@/components/sections/LegalDoc";
import { Email } from "@/components/ui/Email";
import { BRAND } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms for using NordWash laundry & dry-cleaning services in Lithuania — bookings, pricing, pickup & delivery, care of items, and liability.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalDoc title="Terms of Service" updated="June 2026">
      <LegalP>
        These terms govern your use of NordWash laundry and dry-cleaning services and the {BRAND.web} website.
        By booking with us you agree to them.
      </LegalP>

      <LegalH>Our services</LegalH>
      <LegalP>
        We provide washing, drying, folding, steam pressing, dry cleaning, stain treatment and related care,
        with optional pickup and delivery across Lithuania.
      </LegalP>

      <LegalH>Bookings & estimates</LegalH>
      <LegalP>
        Prices shown in the calculator are estimates. Loads are weighed on collection and the final price may
        differ slightly from the estimate; if it differs significantly we will contact you before proceeding.
      </LegalP>

      <LegalH>Pricing & payment</LegalH>
      <LegalUl
        items={[
          "Prices include applicable taxes.",
          "We accept card, Apple Pay, PayPal and cash on delivery.",
          "First orders can use code HELLOEARTH for 10% off; Star Members save 10% on every order.",
        ]}
      />

      <LegalH>Pickup & delivery</LegalH>
      <LegalP>
        You choose a time window; our courier collects and returns your items, contact-free if you prefer.
        Pickup &amp; delivery is free in most zones, otherwise a flat €4.50 applies. Please ensure items are
        accessible at the agreed time.
      </LegalP>

      <LegalH>Care & liability</LegalH>
      <LegalUl
        items={[
          "We select a fabric-appropriate program for every item and handle your laundry with care.",
          "Please remove personal belongings from pockets; we are not liable for items left inside.",
          "Report any issue within 48 hours of delivery so we can investigate and make it right.",
          "Our liability for loss or damage is limited to the value of the affected items, save where the law provides otherwise.",
          "Certain items may be declined if they cannot be cleaned safely; we will let you know.",
        ]}
      />

      <LegalH>Satisfaction</LegalH>
      <LegalP>
        If you are not happy with the result, we offer a free rewash. We aim for 100% satisfaction.
      </LegalP>

      <LegalH>Cancellations</LegalH>
      <LegalP>You may cancel or reschedule a pickup before our courier is dispatched at no charge.</LegalP>

      <LegalH>Governing law</LegalH>
      <LegalP>These terms are governed by the laws of the Republic of Lithuania.</LegalP>

      <LegalH>Changes & contact</LegalH>
      <LegalP>
        We may update these terms from time to time; the latest version is always on this page. Questions?
        Email <Email /> or call {BRAND.phone}.
      </LegalP>
    </LegalDoc>
  );
}
