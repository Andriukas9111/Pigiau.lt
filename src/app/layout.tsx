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
    default: "NordWash — Kosminė skalbykla žmonėms ir ateiviams",
    template: "%s · NordWash",
  },
  description:
    "Premium skalbimas, cheminis valymas ir kosminė priežiūra visoje Lietuvoje. Nemokamas paėmimas, 24 val. ekspresas, 100 % pasitenkinimas.",
  keywords: [
    "skalbykla",
    "cheminis valymas",
    "skalbimas",
    "Lietuva",
    "Vilnius",
    "Kaunas",
    "Klaipėda",
    "laundry",
    "dry cleaning",
    "NordWash",
  ],
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#EAF3FF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="lt" className={`${poppins.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
