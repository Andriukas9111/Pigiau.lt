"use client";

import { useLang } from "@/components/i18n/LangProvider";
import { Illustration } from "@/components/illustrations";
import { Btn } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import { localePath } from "@/lib/i18n";

export default function NotFound() {
  const { lang, tr } = useLang();
  return (
    <Section mt={40} pb={60}>
      <div
        className="nw-pad"
        style={{
          background: "#fff",
          border: "1px solid #E9F1FB",
          borderRadius: 30,
          boxShadow: "0 14px 44px rgba(31,109,200,.07)",
          padding: 46,
          textAlign: "center",
          maxWidth: 620,
          margin: "0 auto",
        }}
      >
        <span className="nw-float" style={{ width: 140, display: "block", margin: "0 auto 10px" }}>
          <Illustration name="ufo" />
        </span>
        <div
          className="fh"
          style={{ fontWeight: 800, fontSize: 52, color: "#1E8BE8", letterSpacing: "-1px" }}
        >
          404
        </div>
        <h1 className="fh" style={{ fontWeight: 800, fontSize: 24, color: "#09245B", margin: "6px 0 8px" }}>
          {tr("This page got abducted", "Šis puslapis buvo pagrobtas")}
        </h1>
        <p style={{ fontSize: 15, color: "#5B7194", margin: "0 auto 22px", maxWidth: 400 }}>
          {tr(
            "The page you're looking for drifted into another dimension. Let's beam you back to fresh laundry.",
            "Ieškomas puslapis nuklydo į kitą dimensiją. Grąžinkime jus prie šviežių skalbinių.",
          )}
        </p>
        <Btn href={localePath("/", lang)} icon="rocket">
          {tr("Back to home", "Į pradžią")}
        </Btn>
      </div>
    </Section>
  );
}
