import { LegalDoc, LegalH, LegalP, LegalUl } from "@/components/sections/LegalDoc";
import { Email } from "@/components/ui/Email";
import { BRAND } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How NordWash collects, uses, shares and protects your personal data when you book laundry & dry cleaning across Lithuania, and your rights under GDPR.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalDoc title="Privacy Policy" updated="June 2026">
      <LegalP>
        NordWash ("we", "us", "our") respects your privacy. This policy explains what personal data we collect
        when you use {BRAND.web} or book our laundry and dry-cleaning services, how we use it, who we share it
        with, and the rights you have under the EU General Data Protection Regulation (GDPR).
      </LegalP>

      <LegalH>Information we collect</LegalH>
      <LegalUl
        items={[
          "Contact details — your name, email address and phone number.",
          "Pickup & delivery details — your address, access notes and chosen time slot.",
          "Order details — the services, options and items you book.",
          "Payment information — processed securely by our payment providers; we do not store full card numbers.",
          "Messages — anything you send us via the contact form, email or chat.",
        ]}
      />

      <LegalH>How we use your data</LegalH>
      <LegalUl
        items={[
          "To collect, clean and deliver your laundry and fulfil your orders.",
          "To process payments and apply discounts.",
          "To communicate with you about bookings, pickups and support requests.",
          "To improve our services and prevent fraud.",
          "To meet our legal and accounting obligations.",
        ]}
      />
      <LegalP>
        Our legal bases are performance of our contract with you, our legitimate interests in running and
        improving the service, your consent where required, and compliance with legal obligations.
      </LegalP>

      <LegalH>Who we share it with</LegalH>
      <LegalP>
        We share data only as needed to provide the service: with our delivery couriers, payment processors
        and IT/hosting providers, and where required by law. We do not sell your personal data.
      </LegalP>

      <LegalH>Data retention</LegalH>
      <LegalP>
        We keep your data only as long as necessary to provide the service and to meet legal, tax and
        accounting requirements, after which it is securely deleted or anonymised.
      </LegalP>

      <LegalH>Cookies</LegalH>
      <LegalP>
        The website uses only essential cookies needed for it to function. We do not currently use advertising
        or cross-site tracking cookies.
      </LegalP>

      <LegalH>Your rights</LegalH>
      <LegalP>
        Under GDPR you may request access to, correction or deletion of your data, restrict or object to
        processing, and request data portability. You may also lodge a complaint with the State Data
        Protection Inspectorate of Lithuania (Valstybinė duomenų apsaugos inspekcija).
      </LegalP>

      <LegalH>Contact</LegalH>
      <LegalP>
        For any privacy request, contact us at <Email /> or {BRAND.phone}.
      </LegalP>
    </LegalDoc>
  );
}
