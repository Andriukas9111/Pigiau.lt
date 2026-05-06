"use client";

import { PhoneIcon } from "@/components/icons";
import { LinkButton } from "@/components/primitives/LinkButton";
import { BRAND } from "@/config/brand";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";

const links = [
  { href: "/services" as const, key: "services" as const },
  { href: "/calculator" as const, key: "pricing" as const },
  { href: "/work" as const, key: "work" as const },
  { href: "/about" as const, key: "about" as const },
  { href: "/contact" as const, key: "contact" as const },
];

export function Header() {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-[var(--color-paper)]/95 backdrop-blur hairline-bottom" : "bg-transparent",
      )}
    >
      <div className="container-page flex items-center justify-between h-[72px] gap-6">
        <Link href="/" className="text-display-md tracking-tight font-medium">
          {BRAND.name}
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-body-md">
          {links.map((l) => (
            <Link key={l.key} href={l.href} className="hover:text-[var(--color-aqua-deep)] transition-colors">
              {t(l.key)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={`tel:${BRAND.phoneE164}`}
            className="hidden md:inline-flex items-center gap-2 text-body-sm tracking-tight"
            aria-label={tCommon("callUs")}
          >
            <PhoneIcon size={16} />
            <span>{BRAND.phoneHuman}</span>
          </a>
          <a href={`tel:${BRAND.phoneE164}`} className="md:hidden p-2" aria-label={tCommon("callUs")}>
            <PhoneIcon size={20} />
          </a>
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <LinkButton href="/contact" variant="primary" size="sm" className="hidden md:inline-flex">
            {tCommon("bookNow")}
          </LinkButton>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
