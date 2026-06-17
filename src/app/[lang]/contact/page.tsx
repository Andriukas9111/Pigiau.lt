import { Icon } from "@/components/icons";
import { Illustration } from "@/components/illustrations";
import { PageBanner, PromoBanner } from "@/components/sections/Banners";
import { ContactForm } from "@/components/sections/ContactForm";
import { Btn } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import { Email } from "@/components/ui/Email";
import { BRAND } from "@/lib/data";
import { type Locale, localePath, trFor } from "@/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const lt = lang === "lt";
  return {
    title: lt ? "Kontaktai" : "Contact",
    description: lt
      ? "Susisiekite su NordWash — skambinkite +370 681 25504 arba rašykite hello@nordwash.lt. Klausimai, pasiūlymai ir verslo užklausos dėl skalbimo visoje Lietuvoje."
      : "Get in touch with NordWash — call +370 681 25504 or email hello@nordwash.lt. Questions, quotes and business enquiries for laundry across Lithuania.",
    alternates: {
      canonical: `/${lang}/contact`,
      languages: { lt: "/lt/contact", en: "/en/contact", "x-default": "/lt/contact" },
    },
  };
}

function InfoRow({
  icon,
  label,
  value,
}: { icon: "phone" | "mail" | "clock"; label: string; value: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span
        style={{
          width: 40,
          height: 40,
          borderRadius: 12,
          background: "rgba(255,255,255,.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "none",
        }}
      >
        <Icon name={icon} c="#B8F35A" size={18} />
      </span>
      <span>
        <span style={{ display: "block", color: "#9Fc2f5", fontSize: 12 }}>{label}</span>
        <b>{value}</b>
      </span>
    </div>
  );
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Locale;
  const tr = trFor(l);
  return (
    <div className="nw-fade">
      <PageBanner
        image="hero_contact"
        title={tr("Contact NordWash", "Susisiekite su NordWash")}
        alt={tr(
          "Contact NordWash — our crew replies faster than light",
          "Susisiekite su NordWash — mūsų komanda atsako greičiau nei šviesa",
        )}
      />

      <Section pb={50}>
        <div
          className="nw-two"
          style={{ display: "grid", gridTemplateColumns: "1.25fr .85fr", gap: 22, alignItems: "start" }}
        >
          <ContactForm />

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              className="nw-pad"
              style={{
                background: "radial-gradient(130% 120% at 80% 0%, #143a86 0%, #0a1f4d 65%)",
                borderRadius: 26,
                boxShadow: "0 18px 50px rgba(10,31,77,.25)",
                padding: 30,
                color: "#fff",
              }}
            >
              <h3 className="fh" style={{ fontWeight: 800, fontSize: 18, margin: "0 0 18px" }}>
                {tr("Reach us directly", "Susisiekite tiesiogiai")}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 14 }}>
                <InfoRow icon="phone" label={tr("Phone", "Telefonas")} value={BRAND.phone} />
                <InfoRow icon="mail" label={tr("Email", "El. paštas")} value={<Email />} />
                <InfoRow
                  icon="clock"
                  label={tr("Hours", "Darbo laikas")}
                  value={tr("Mon–Sun · 08:00 – 20:00", "Pir–Sek · 08:00 – 20:00")}
                />
              </div>
            </div>
            <div
              className="nw-pad"
              style={{
                background: "#fff",
                border: "1px solid #E9F1FB",
                borderRadius: 26,
                boxShadow: "0 14px 44px rgba(31,109,200,.07)",
                padding: 24,
              }}
            >
              <h3
                className="fh"
                style={{ fontWeight: 800, fontSize: 16, color: "#09245B", margin: "0 0 6px" }}
              >
                {tr("Business enquiries", "Verslo užklausos")}
              </h3>
              <p style={{ fontSize: 13, color: "#6E86A8", lineHeight: 1.55, margin: "0 0 14px" }}>
                {tr(
                  "Hotels, gyms, studios? We offer cosmic rates for recurring volume.",
                  "Viešbučiai, sporto klubai, studijos? Siūlome kosmiškas kainas reguliariems kiekiams.",
                )}
              </p>
              <Btn href={localePath("/booking", l)} variant="ghost" fontSize={13} padding="11px 20px">
                {tr("Request a quote", "Gauti pasiūlymą")}
              </Btn>
            </div>
          </div>
        </div>
      </Section>

      <Section mt={22}>
        <div
          className="nw-two"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, alignItems: "stretch" }}
        >
          <div
            className="nw-pad"
            style={{
              background: "#fff",
              border: "1px solid #E9F1FB",
              borderRadius: 30,
              boxShadow: "0 14px 44px rgba(31,109,200,.07)",
              padding: 32,
            }}
          >
            <div
              className="fh"
              style={{
                fontWeight: 800,
                color: "#1E8BE8",
                fontSize: 14,
                letterSpacing: "1px",
                marginBottom: 16,
              }}
            >
              {tr("OUR LOCATION", "MŪSŲ VIETA")}&nbsp;<span style={{ color: "#7FD0F5" }}>✦</span>
            </div>
            <div
              style={{
                position: "relative",
                borderRadius: 18,
                overflow: "hidden",
                background: "linear-gradient(135deg,#EAF4FF,#DBEEFF)",
                border: "1px solid #DCEBFB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 16px",
              }}
            >
              <span style={{ width: "100%", maxWidth: 380, display: "block" }}>
                <Illustration
                  name="map"
                  alt={tr("NordWash locations across Lithuania", "NordWash skyriai visoje Lietuvoje")}
                />
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 14,
                marginTop: 18,
                flexWrap: "wrap",
              }}
            >
              <div>
                <b className="fh" style={{ fontSize: 15, color: "#09245B" }}>
                  {tr("NordWash HQ — North Star Hub", "NordWash būstinė — Šiaurinės žvaigždės centras")}
                </b>
                <div style={{ fontSize: 13, color: "#6E86A8", marginTop: 4 }}>
                  {tr("Liepojos g. 82, Klaipėda, Lithuania", "Liepojos g. 82, Klaipėda, Lietuva")}
                </div>
              </div>
              <Btn
                href={localePath("/locations", l)}
                variant="ghost"
                fontSize={12.5}
                padding="11px 18px"
                icon="pin"
              >
                {tr("All locations", "Visi skyriai")}
              </Btn>
            </div>
          </div>

          <div
            className="nw-pad"
            style={{
              background: "#fff",
              border: "1px solid #E9F1FB",
              borderRadius: 30,
              boxShadow: "0 14px 44px rgba(31,109,200,.07)",
              padding: 32,
              display: "flex",
              gap: 18,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <span style={{ width: 150, flex: "none", display: "block" }}>
              <Illustration name="pickup" />
            </span>
            <div style={{ flex: "1 1 200px", minWidth: 0 }}>
              <div
                className="fh"
                style={{
                  fontWeight: 800,
                  color: "#1E8BE8",
                  fontSize: 14,
                  letterSpacing: "1px",
                  marginBottom: 8,
                }}
              >
                {tr("BUSINESS & PICKUP SUPPORT", "VERSLO IR PAĖMIMO PAGALBA")}
              </div>
              <p style={{ fontSize: 14, color: "#48618A", lineHeight: 1.55, margin: "0 0 14px" }}>
                {tr(
                  "Business account, bulk order, or recurring pickups? We offer custom solutions for offices, hotels, rentals and gyms across Lithuania.",
                  "Verslo paskyra, didelis užsakymas ar reguliarus paėmimas? Siūlome individualius sprendimus biurams, viešbučiams, nuomos objektams ir sporto klubams visoje Lietuvoje.",
                )}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  fontSize: 13,
                  color: "#3C5A85",
                  marginBottom: 16,
                }}
              >
                {[
                  tr("Scheduled pickups", "Suplanuoti paėmimai"),
                  tr("Volume discounts & priority support", "Nuolaidos už kiekį ir prioritetinė pagalba"),
                  tr("Flexible invoicing", "Lankstus sąskaitų išrašymas"),
                ].map((x) => (
                  <span key={x} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "#76C043" }}>✦</span> {x}
                  </span>
                ))}
              </div>
              <Btn href={localePath("/booking", l)} fontSize={13} padding="13px 22px">
                {tr("Business inquiries", "Verslo užklausos")}
              </Btn>
            </div>
          </div>
        </div>
      </Section>

      <PromoBanner lang={l} />
    </div>
  );
}
