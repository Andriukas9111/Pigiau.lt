import { Icon, type IconName } from "@/components/icons";
import { PageBanner } from "@/components/sections/Banners";
import { FaqClient } from "@/components/sections/FaqClient";
import { Btn } from "@/components/ui/Button";
import { Card, Section } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BRAND } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "FAQ & Help" };

const SUPPORT: { icon: IconName; color: string; bg: string; title: string; sub: string; cta: string }[] = [
  {
    icon: "chat",
    color: "#76C043",
    bg: "#EAF7EE",
    title: "Live Chat",
    sub: "Mon–Sun, faster than light.",
    cta: "Start chat",
  },
  { icon: "phone", color: "#1E8BE8", bg: "#EAF3FD", title: "Call Us", sub: BRAND.phone, cta: "Call now" },
  {
    icon: "mail",
    color: "#7C5BD6",
    bg: "#F3EEFB",
    title: "Email Us",
    sub: "hello@nordwash.lt",
    cta: "Send email",
  },
];

export default function FaqPage() {
  return (
    <div className="nw-fade">
      <PageBanner
        image="hero_faq"
        title="FAQ & Help Center"
        alt="FAQ & Help Center — answers faster than light"
      />

      <FaqClient />

      <Section pb={50}>
        <Card pad={44}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <Eyebrow>STILL NEED HELP</Eyebrow>
            <h3 className="fh" style={{ fontWeight: 800, fontSize: 26, color: "#09245B", margin: "8px 0 0" }}>
              Our crew replies faster than light
            </h3>
          </div>
          <div
            className="nw-grid-3 nw-slider"
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}
          >
            {SUPPORT.map((s) => (
              <div
                key={s.title}
                style={{
                  background: "#FbFdFF",
                  border: "1px solid #EAF2FC",
                  borderRadius: 20,
                  padding: 26,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: 16,
                    background: s.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 14px",
                  }}
                >
                  <Icon name={s.icon} c={s.color} size={26} />
                </div>
                <h4
                  className="fh"
                  style={{ fontWeight: 700, fontSize: 16, color: "#09245B", margin: "0 0 6px" }}
                >
                  {s.title}
                </h4>
                <p style={{ fontSize: 12.5, color: "#7089AB", margin: "0 0 14px" }}>{s.sub}</p>
                <Btn href="/contact" variant="ghost" fontSize={13} padding="11px 20px">
                  {s.cta}
                </Btn>
              </div>
            ))}
          </div>
        </Card>
      </Section>
    </div>
  );
}
