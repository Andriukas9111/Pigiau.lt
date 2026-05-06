import { CheckIcon } from "@/components/icons";
import { Accordion, AccordionItem } from "@/components/primitives/Accordion";
import { Container } from "@/components/primitives/Container";
import { LinkButton } from "@/components/primitives/LinkButton";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { BookingStrip } from "@/components/sections/BookingStrip";
import { JsonLd, breadcrumbLd, faqLd, serviceLd } from "@/components/seo/JsonLd";
import { BRAND } from "@/config/brand";
import { type Service, getServiceBySlug, services } from "@/content/services";
import type { ServiceI18nKey } from "@/content/services";
import { Link } from "@/i18n/navigation";
import { pageMetadata } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return services.flatMap((s) =>
    (["lt", "ru", "en"] as const).map((locale) => ({ locale, slug: s.slugs[locale] })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const svc = getServiceBySlug(slug, locale as "lt" | "ru" | "en");
  if (!svc) return {};
  const t = await getTranslations({ locale, namespace: `serviceDetail.${svc.i18nKey}` });
  return pageMetadata({
    title: `${t("title")} | ${BRAND.name}`,
    description: t("lede"),
    path: `/services/${slug}`,
    locale,
  });
}

type DetailFaq = { q: string; a: string };
type DetailProcess = { title: string; body: string };

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const svc = getServiceBySlug(slug, locale as "lt" | "ru" | "en");
  if (!svc) notFound();

  const t = await getTranslations({ locale, namespace: `serviceDetail.${svc.i18nKey}` });
  const tDet = await getTranslations({ locale, namespace: "serviceDetail" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  const included = t.raw("included") as string[];
  const process = t.raw("process") as DetailProcess[];
  const surfaces = t.raw("surfaces") as string[];
  const contraindications = t.raw("contraindications") as string[];
  const faq = t.raw("faq") as DetailFaq[];
  const url = `https://${BRAND.domain}${locale === "lt" ? "" : `/${locale}`}/${svc.slugs[locale as "lt" | "ru" | "en"]}`;

  const tier = svc.pricingTiers?.[svc.pricingTiers.length - 1].pricePerM2 ?? svc.basePricePerM2;

  return (
    <>
      <section className="section-sm hairline-bottom">
        <Container>
          <nav className="text-mono uppercase text-[var(--color-ink)]/60 mb-8">
            <Link href="/services" className="hover:text-[var(--color-ink)]">
              {tDet("breadcrumbServices")}
            </Link>
            <span className="mx-2">/</span>
            <span>{t("title")}</span>
          </nav>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5 flex flex-col">
              <h1 className="text-display-lg">{t("title")}</h1>
              <p className="text-body-lg text-[var(--color-ink)]/70 mt-6">{t("lede")}</p>
              <div className="hairline px-4 py-2 inline-flex w-fit text-mono uppercase mt-8">
                {t("priceFrom")}
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <LinkButton href="/calculator" variant="primary">
                  {tDet("ctaCalculate")}
                </LinkButton>
                <LinkButton href="/contact" variant="secondary">
                  {tDet("ctaBook")}
                </LinkButton>
              </div>
            </div>
            <div className="md:col-span-7">
              <div
                className="aspect-[4/3] bg-[var(--color-mist)] hairline bg-cover bg-center"
                style={{ backgroundImage: `url(${svc.hero.src})` }}
                role="img"
                aria-label={t("title")}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-md">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <h2 className="md:col-span-4 text-display-md">{tDet("includedTitle")}</h2>
            <ul className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
              {included.map((item) => (
                <li key={item} className="flex gap-3 hairline-top pt-4">
                  <CheckIcon className="text-[var(--color-aqua-deep)] mt-1 shrink-0" />
                  <span className="text-body-md">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="section-md surface-paper hairline-top hairline-bottom">
        <Container>
          <h2 className="text-display-md mb-12">{tDet("processTitle")}</h2>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <li key={p.title} className="hairline-top pt-5">
                <span className="text-mono text-[var(--color-ink)]/60">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-heading-lg mt-2">{p.title}</h3>
                <p className="text-body-md text-[var(--color-ink)]/70 mt-3">{p.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section-md">
        <Container>
          <h2 className="text-display-md mb-12">{tDet("beforeAfterTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {svc.beforeAfter.slice(0, 3).map((p) => (
              <BeforeAfterSlider key={p.location} before={p.before} after={p.after} caption={p.location} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-md surface-paper hairline-top hairline-bottom">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <h2 className="md:col-span-4 text-display-md">{tDet("pricingTitle")}</h2>
            <div className="md:col-span-8">
              <table className="w-full text-body-md">
                <thead className="text-mono uppercase text-[var(--color-ink)]/60">
                  <tr className="hairline-bottom">
                    <th className="text-left py-3">{tDet("pricingTableArea")}</th>
                    <th className="text-right py-3">{tDet("pricingTableUnit")}</th>
                  </tr>
                </thead>
                <tbody className="font-mono tabular-nums">
                  {(
                    svc.pricingTiers ?? [{ upTo: Number.POSITIVE_INFINITY, pricePerM2: svc.basePricePerM2 }]
                  ).map((row) => (
                    <tr key={row.upTo} className="hairline-bottom">
                      <td className="py-3">
                        {row.upTo === Number.POSITIVE_INFINITY
                          ? `> ${svc.pricingTiers?.[svc.pricingTiers.length - 2]?.upTo ?? 0} m²`
                          : `≤ ${row.upTo} m²`}
                      </td>
                      <td className="py-3 text-right">{row.pricePerM2.toFixed(2).replace(".", ",")} €/m²</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-body-sm text-[var(--color-ink)]/60 mt-4">Min. {svc.minimumOrder} €</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-md">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-6">
              <h2 className="text-display-md mb-6">{tDet("surfacesTitle")}</h2>
              <div className="flex flex-wrap gap-2">
                {surfaces.map((s) => (
                  <span key={s} className="hairline px-3 py-1 text-body-sm bg-[var(--color-paper)]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-6">
              <h2 className="text-display-md mb-6">{tDet("contraindicationsTitle")}</h2>
              <ul className="space-y-3">
                {contraindications.map((c) => (
                  <li key={c} className="text-body-md hairline-top pt-3">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-md surface-paper hairline-top">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <h2 className="md:col-span-4 text-display-md">{tDet("faqTitle")}</h2>
            <div className="md:col-span-8">
              <Accordion>
                {faq.map((f, i) => (
                  <AccordionItem key={f.q} question={f.q} defaultOpen={i === 0}>
                    {f.a}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </section>

      <RelatedServices
        current={svc}
        locale={locale as "lt" | "ru" | "en"}
        title={tDet("relatedTitle")}
        more={tNav("services")}
      />

      <BookingStrip />

      <JsonLd
        data={breadcrumbLd([
          { name: BRAND.name, url: `https://${BRAND.domain}` },
          { name: tDet("breadcrumbServices"), url: `https://${BRAND.domain}/services` },
          { name: t("title"), url },
        ])}
      />
      <JsonLd
        data={serviceLd({
          name: t("title"),
          description: t("lede"),
          url,
          pricePerM2: tier,
        })}
      />
      <JsonLd data={faqLd(faq.map((f) => ({ question: f.q, answer: f.a })))} />
    </>
  );
}

function RelatedServices({
  current,
  locale,
  title,
  more,
}: {
  current: Service;
  locale: "lt" | "ru" | "en";
  title: string;
  more: string;
}) {
  const others = services.filter((s) => s.id !== current.id).slice(0, 3);
  return (
    <section className="section-md hairline-top">
      <Container>
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-display-md">{title}</h2>
          <Link href="/services" className="text-body-md underline underline-offset-4">
            {more}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map((s) => (
            <Link
              key={s.id}
              href={{ pathname: "/services/[slug]", params: { slug: s.slugs[locale] } }}
              className="group hairline bg-[var(--color-paper)] block"
            >
              <div
                className="aspect-[16/11] bg-[var(--color-mist)] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                style={{ backgroundImage: `url(${s.hero.src})` }}
              />
              <div className="p-6">
                <div className="text-heading-md">{s.id}</div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
