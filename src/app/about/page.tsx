import { Icon } from "@/components/icons";
import { Illustration } from "@/components/illustrations";
import { PageBanner, Starfield } from "@/components/sections/Banners";
import { Btn } from "@/components/ui/Button";
import { Card, Section } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CREW, STATS, STORY, VALUES } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="nw-fade">
      {/* 1) HERO */}
      <PageBanner
        image="hero_about"
        title="About NordWash"
        alt="About NordWash — from the North Star, with freshness"
      />

      {/* 2) MEET THE CREW */}
      <Section>
        <Card>
          <div style={{ textAlign: "center", marginBottom: 34 }}>
            <Eyebrow>MEET THE CREW</Eyebrow>
            <h2
              className="fh"
              style={{
                fontWeight: 800,
                fontSize: 30,
                color: "#09245B",
                margin: "10px 0 0",
                letterSpacing: "-.5px",
              }}
            >
              The aliens behind your fresh laundry
            </h2>
          </div>
          <div
            className="nw-grid-4 nw-slider"
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}
          >
            {CREW.map((c) => (
              <div
                key={c.name}
                style={{
                  background: "#FbFdFF",
                  border: "1px solid #EAF2FC",
                  borderRadius: 22,
                  padding: 22,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(180deg,#F2F9FF,#E9F4FF)",
                    borderRadius: 18,
                    padding: 6,
                    marginBottom: 14,
                  }}
                >
                  <span style={{ display: "block", aspectRatio: "1" }}>
                    <Illustration name={c.img} />
                  </span>
                </div>
                <h3 className="fh" style={{ fontWeight: 700, fontSize: 18, color: "#09245B", margin: 0 }}>
                  {c.name}
                </h3>
                <div
                  className="fh"
                  style={{
                    display: "inline-block",
                    background: c.color,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 10.5,
                    letterSpacing: ".5px",
                    padding: "4px 11px",
                    borderRadius: 999,
                    margin: "8px 0 10px",
                  }}
                >
                  {c.role}
                </div>
                <p style={{ fontSize: 12.5, lineHeight: 1.55, color: "#6E86A8", margin: 0 }}>{c.bio}</p>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* 3) OUR STORY */}
      <Section>
        <Card>
          <div style={{ textAlign: "center", marginBottom: 34 }}>
            <Eyebrow>OUR STORY</Eyebrow>
          </div>
          <div style={{ position: "relative" }}>
            <div
              className="nw-grid-6"
              style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 12 }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 35,
                  left: "9%",
                  right: "9%",
                  borderTop: "2px dashed #CFE2F7",
                  zIndex: 0,
                }}
              />
              {STORY.map((st) => (
                <div key={st.title} style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                  <div
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      background: "#fff",
                      border: "2px solid #E3EEFA",
                      boxShadow: "0 8px 18px rgba(31,109,200,.10)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 12px",
                    }}
                  >
                    <Icon name={st.icon} size={30} c="#1E8BE8" />
                  </div>
                  <div className="fh" style={{ fontWeight: 800, fontSize: 13.5, color: "#1E8BE8" }}>
                    {st.year}
                  </div>
                  <h4
                    className="fh"
                    style={{ fontWeight: 700, fontSize: 13.5, color: "#09245B", margin: "6px 0 6px" }}
                  >
                    {st.title}
                  </h4>
                  <p style={{ fontSize: 11.5, lineHeight: 1.5, color: "#7089AB", margin: 0 }}>{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Section>

      {/* 4) OUR VALUES */}
      <Section>
        <Card>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <Eyebrow>OUR VALUES</Eyebrow>
          </div>
          <div
            className="nw-grid-4 nw-slider"
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}
          >
            {VALUES.map((v) => (
              <div
                key={v.title}
                style={{
                  background: "#FbFdFF",
                  border: "1px solid #EAF2FC",
                  borderRadius: 20,
                  padding: 24,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: 16,
                    background: "#F2F9FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 14px",
                  }}
                >
                  <Icon name={v.icon} size={26} c="#1E8BE8" />
                </div>
                <h4
                  className="fh"
                  style={{ fontWeight: 700, fontSize: 16, color: "#09245B", margin: "0 0 7px" }}
                >
                  {v.title}
                </h4>
                <p style={{ fontSize: 12.5, lineHeight: 1.55, color: "#7089AB", margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* 5) STATS BANNER */}
      <Section>
        <div
          style={{
            position: "relative",
            background: "radial-gradient(120% 150% at 20% 0%, #143a86 0%, #0a1f4d 65%)",
            borderRadius: 30,
            overflow: "hidden",
            boxShadow: "0 22px 60px rgba(10,31,77,.3)",
            padding: "40px 30px",
          }}
        >
          <Starfield />
          <div
            className="nw-grid-5"
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "repeat(5,1fr)",
              gap: 20,
              textAlign: "center",
            }}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div
                  className="fh"
                  style={{ fontWeight: 800, fontSize: 40, color: "#B8F35A", lineHeight: 1 }}
                >
                  {s.num}
                </div>
                <div style={{ fontSize: 13.5, color: "#cfe0ff", marginTop: 8, fontWeight: 600 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 6) BOTTOM CTA */}
      <Section pb={50}>
        <div
          className="nw-pad nw-two"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: 24,
            background: "linear-gradient(120deg,#EAF4FF,#DBEEFF)",
            border: "1px solid #DCEBFB",
            borderRadius: 30,
            padding: "40px 46px",
          }}
        >
          <div>
            <h3
              className="fh"
              style={{
                fontWeight: 800,
                fontSize: 26,
                color: "#09245B",
                margin: "0 0 8px",
                letterSpacing: "-.5px",
              }}
            >
              Want to meet the crew?
            </h3>
            <p style={{ fontSize: 16, color: "#48618A", margin: "0 0 20px" }}>
              Send your laundry our way — first contact is on us, with 10% off.
            </p>
            <div className="nw-row-wrap" style={{ display: "flex", gap: 14 }}>
              <Btn href="/booking">Book a pickup</Btn>
              <Btn href="/contact" variant="ghost">
                Say hello
              </Btn>
            </div>
          </div>
          <span className="nw-float-s" style={{ width: 160, display: "block" }}>
            <Illustration name="disguise" />
          </span>
        </div>
      </Section>
    </div>
  );
}
