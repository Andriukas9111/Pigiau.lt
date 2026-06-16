import { Icon } from "@/components/icons";
import { Illustration } from "@/components/illustrations";
import { PageBanner, PromoBanner } from "@/components/sections/Banners";
import { ContactForm } from "@/components/sections/ContactForm";
import { Btn } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import { Email } from "@/components/ui/Email";
import { BRAND } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

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

export default function ContactPage() {
  return (
    <div className="nw-fade">
      <PageBanner image="hero_contact" alt="Contact NordWash — our crew replies faster than light" />

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
              <h4 className="fh" style={{ fontWeight: 800, fontSize: 18, margin: "0 0 18px" }}>
                Reach us directly
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 14 }}>
                <InfoRow icon="phone" label="Phone" value={BRAND.phone} />
                <InfoRow icon="mail" label="Email" value={<Email />} />
                <InfoRow icon="clock" label="Hours" value="Mon–Sun · 08:00 – 20:00" />
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
              <h4
                className="fh"
                style={{ fontWeight: 800, fontSize: 16, color: "#09245B", margin: "0 0 6px" }}
              >
                Business enquiries
              </h4>
              <p style={{ fontSize: 13, color: "#6E86A8", lineHeight: 1.55, margin: "0 0 14px" }}>
                Hotels, gyms, studios? We offer cosmic rates for recurring volume.
              </p>
              <Btn href="/booking" variant="ghost" fontSize={13} padding="11px 20px">
                Request a quote
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
              OUR LOCATION&nbsp;<span style={{ color: "#7FD0F5" }}>✦</span>
            </div>
            <div
              style={{
                position: "relative",
                height: 200,
                borderRadius: 18,
                overflow: "hidden",
                background: "linear-gradient(135deg,#E9F4FF,#DBEEFF)",
                border: "1px solid #DCEBFB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(#cfe2f7 1px,transparent 1px),linear-gradient(90deg,#cfe2f7 1px,transparent 1px)",
                  backgroundSize: "38px 38px",
                  opacity: 0.5,
                }}
              />
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                  color: "#1E8BE8",
                }}
              >
                <Icon name="pin" c="#1E8BE8" size={34} />
                <b className="fh" style={{ fontSize: 13, color: "#09245B" }}>
                  Klaipėda
                </b>
              </div>
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
                  NordWash HQ — North Star Hub
                </b>
                <div style={{ fontSize: 13, color: "#6E86A8", marginTop: 4 }}>
                  Liepojos g. 82, Klaipėda, Lithuania
                </div>
              </div>
              <Btn href="/locations" variant="ghost" fontSize={12.5} padding="11px 18px" icon="pin">
                All locations
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
            }}
          >
            <span style={{ width: 150, flex: "none", display: "block" }}>
              <Illustration name="pickup" />
            </span>
            <div>
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
                BUSINESS & PICKUP SUPPORT
              </div>
              <p style={{ fontSize: 14, color: "#48618A", lineHeight: 1.55, margin: "0 0 14px" }}>
                Business account, bulk order, or recurring pickups? We offer custom solutions for offices,
                hotels, rentals and gyms across Lithuania.
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
                {["Scheduled pickups", "Volume discounts & priority support", "Flexible invoicing"].map(
                  (x) => (
                    <span key={x} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: "#76C043" }}>✦</span> {x}
                    </span>
                  ),
                )}
              </div>
              <Btn href="/booking" fontSize={13} padding="13px 22px">
                Business inquiries
              </Btn>
            </div>
          </div>
        </div>
      </Section>

      <PromoBanner />
    </div>
  );
}
