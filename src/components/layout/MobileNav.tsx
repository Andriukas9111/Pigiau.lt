"use client";

import { CloseIcon, MenuIcon } from "@/components/icons";
import { BRAND } from "@/config/brand";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";

const links = [
  { href: "/services" as const, key: "services" as const },
  { href: "/calculator" as const, key: "pricing" as const },
  { href: "/work" as const, key: "work" as const },
  { href: "/about" as const, key: "about" as const },
  { href: "/contact" as const, key: "contact" as const },
  { href: "/faq" as const, key: "faq" as const },
];

export function MobileNav() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={t("openMenu")}
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="md:hidden p-2"
      >
        <MenuIcon />
      </button>
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-[var(--color-paper)] flex flex-col"
        >
          <div className="flex items-center justify-between p-6 hairline-bottom">
            <span className="text-mono uppercase">{BRAND.name}</span>
            <button type="button" aria-label={t("closeMenu")} onClick={() => setOpen(false)} className="p-2">
              <CloseIcon />
            </button>
          </div>
          <nav className="flex-1 flex flex-col p-6 gap-2">
            {links.map((l) => (
              <Link
                key={l.key}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-display-md py-3 hairline-bottom"
              >
                {t(l.key)}
              </Link>
            ))}
          </nav>
          <div className="p-6 hairline-top flex items-center justify-between">
            <LanguageSwitcher />
            <a href={`tel:${BRAND.phoneE164}`} className="text-mono uppercase">
              {BRAND.phoneHuman}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
