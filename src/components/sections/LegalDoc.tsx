import { Card, Section } from "@/components/ui/Container";
import type { ReactNode } from "react";

/** Shared layout for legal / policy documents. */
export function LegalDoc({
  title,
  updated,
  children,
}: { title: string; updated: string; children: ReactNode }) {
  return (
    <div className="nw-fade">
      <Section mt={20} pb={50} style={{ maxWidth: 880 }}>
        <Card pad={46}>
          <h1
            className="fh"
            style={{
              fontWeight: 800,
              fontSize: 34,
              color: "#09245B",
              margin: "0 0 6px",
              letterSpacing: "-.5px",
            }}
          >
            {title}
          </h1>
          <p style={{ fontSize: 13, color: "#8AA0C0", margin: "0 0 26px" }}>Last updated {updated}</p>
          <div style={{ fontSize: 15, lineHeight: 1.7, color: "#48618A" }}>{children}</div>
        </Card>
      </Section>
    </div>
  );
}

export function LegalH({ children }: { children: ReactNode }) {
  return (
    <h2 className="fh" style={{ fontWeight: 800, fontSize: 19, color: "#09245B", margin: "28px 0 10px" }}>
      {children}
    </h2>
  );
}

export function LegalP({ children }: { children: ReactNode }) {
  return <p style={{ margin: "0 0 12px" }}>{children}</p>;
}

export function LegalUl({ items }: { items: ReactNode[] }) {
  return (
    <ul style={{ margin: "0 0 12px", paddingLeft: 22 }}>
      {items.map((it, i) => (
        <li key={i} style={{ marginBottom: 6 }}>
          {it}
        </li>
      ))}
    </ul>
  );
}
