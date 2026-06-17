import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollAnim } from "@/components/motion/ScrollAnim";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Metadata, Viewport } from "next";
import { Nunito_Sans, Poppins } from "next/font/google";
import type { ReactNode } from "react";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nordwash.lt"),
  title: {
    default: "NordWash — Cosmic Laundry for Humans & Aliens",
    template: "%s · NordWash",
  },
  description:
    "Premium laundry, dry cleaning & cosmic care delivered across Lithuania. Free pickup, 24h express, 100% satisfaction. Book a wash today.",
  keywords: ["laundry", "dry cleaning", "Lithuania", "pickup", "Vilnius", "Kaunas", "Klaipėda", "NordWash"],
  openGraph: {
    type: "website",
    siteName: "NordWash",
    title: "NordWash — Cosmic Laundry for Humans & Aliens",
    description: "Premium laundry & dry cleaning delivered across Lithuania. Free pickup, 24h express.",
    locale: "en",
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#EAF3FF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${nunito.variable}`}>
      <body>
        <a
          href="#main"
          style={{
            position: "absolute",
            left: -9999,
            top: 0,
            background: "#fff",
            padding: "10px 16px",
            borderRadius: 10,
            zIndex: 100,
          }}
          className="fh"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ScrollAnim />
        <JsonLd />
      </body>
    </html>
  );
}
