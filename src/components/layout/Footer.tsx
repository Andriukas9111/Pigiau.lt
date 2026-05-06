import { BRAND } from "@/config/brand";
import { services } from "@/content/services";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tDetail = useTranslations("serviceDetail");
  const locale = useLocale() as "lt" | "ru" | "en";

  return (
    <footer className="surface-ink relative noise mt-20">
      <div className="container-page py-20 md:py-28 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2 md:col-span-2 flex flex-col gap-4">
          <div className="text-display-md">{BRAND.name}</div>
          <p className="text-body-md text-[var(--color-bone)]/70 max-w-sm">{t("tagline")}</p>
          <div className="text-mono uppercase text-[var(--color-bone)]/60 mt-6">{BRAND.phoneHuman}</div>
          <div className="text-body-sm text-[var(--color-bone)]/60">{BRAND.email}</div>
        </div>

        <div>
          <h4 className="text-mono uppercase text-[var(--color-bone)]/60 mb-4">{t("servicesTitle")}</h4>
          <ul className="space-y-2 text-body-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.id}>
                <Link
                  href={{ pathname: "/services/[slug]", params: { slug: s.slugs[locale] } }}
                  className="text-[var(--color-bone)]/80 hover:text-[var(--color-bone)]"
                >
                  {tDetail(`${s.i18nKey}.title`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-mono uppercase text-[var(--color-bone)]/60 mb-4">{t("companyTitle")}</h4>
          <ul className="space-y-2 text-body-sm">
            <li>
              <Link href="/about" className="text-[var(--color-bone)]/80 hover:text-[var(--color-bone)]">
                {tNav("about")}
              </Link>
            </li>
            <li>
              <Link href="/work" className="text-[var(--color-bone)]/80 hover:text-[var(--color-bone)]">
                {tNav("work")}
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-[var(--color-bone)]/80 hover:text-[var(--color-bone)]">
                {tNav("faq")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[var(--color-bone)]/80 hover:text-[var(--color-bone)]">
                {tNav("contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-mono uppercase text-[var(--color-bone)]/60 mb-4">{t("legalTitle")}</h4>
          <ul className="space-y-2 text-body-sm">
            <li>
              <Link href="/privacy" className="text-[var(--color-bone)]/80 hover:text-[var(--color-bone)]">
                {t("privacy")}
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-[var(--color-bone)]/80 hover:text-[var(--color-bone)]">
                {t("cookies")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-page py-6 hairline-top border-[var(--color-bone)]/10 flex flex-col md:flex-row gap-3 md:gap-6 text-body-sm text-[var(--color-bone)]/50">
        <span>
          © {new Date().getFullYear()} {BRAND.legalName}. {t("rights")}
        </span>
        <span>PVM {BRAND.vatNumber}</span>
        <span className="md:ml-auto">{t("madeIn")}</span>
      </div>
    </footer>
  );
}
