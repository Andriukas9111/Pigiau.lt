import { MailIcon, PhoneIcon } from "@/components/icons";
import { Container } from "@/components/primitives/Container";
import { Tabs } from "@/components/primitives/Tabs";
import { BRAND } from "@/config/brand";
import { pageMetadata } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactForm } from "./ContactForm";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.contact" });
  return pageMetadata({ title: t("title"), description: t("description"), path: "/contact", locale });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <>
      <section className="section-sm hairline-bottom">
        <Container>
          <h1 className="text-display-xl">{t("title")}</h1>
          <p className="text-body-lg text-[var(--color-ink)]/70 mt-6 max-w-xl">{t("lede")}</p>
        </Container>
      </section>

      <section className="section-md">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <aside className="lg:col-span-4 space-y-8">
              <Block label={t("phoneLabel")}>
                <a href={`tel:${BRAND.phoneE164}`} className="text-heading-lg flex items-center gap-3">
                  <PhoneIcon /> {BRAND.phoneHuman}
                </a>
              </Block>
              <Block label={t("emailLabel")}>
                <a href={`mailto:${BRAND.email}`} className="text-heading-md flex items-center gap-3">
                  <MailIcon /> {BRAND.email}
                </a>
              </Block>
              <Block label={t("addressLabel")}>
                <p className="text-body-md">{BRAND.address}</p>
              </Block>
              <Block label={t("hoursLabel")}>
                <ul className="text-body-md space-y-1">
                  <li>{t("hoursWeekdays", { hours: BRAND.workingHours.weekdays })}</li>
                  <li>{t("hoursSaturday", { hours: BRAND.workingHours.saturday })}</li>
                  <li>{t("hoursSunday", { hours: BRAND.workingHours.sunday })}</li>
                </ul>
              </Block>
            </aside>

            <div className="lg:col-span-8">
              <Tabs
                tabs={[
                  {
                    label: t("tabs.consultation"),
                    content: (
                      <CalEmbedFallback slug={BRAND.cal.consultationSlug} username={BRAND.cal.username} />
                    ),
                  },
                  {
                    label: t("tabs.onSite"),
                    content: <CalEmbedFallback slug={BRAND.cal.onSiteSlug} username={BRAND.cal.username} />,
                  },
                  { label: t("tabs.message"), content: <ContactForm /> },
                ]}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="hairline-top pt-4">
      <div className="text-mono uppercase text-[var(--color-ink)]/60 mb-2">{label}</div>
      {children}
    </div>
  );
}

function CalEmbedFallback({ slug, username }: { slug: string; username: string }) {
  return (
    <div className="hairline p-8 bg-[var(--color-paper)]">
      <p className="text-body-lg">
        Bookings handled by Cal.com. Open{" "}
        <a
          href={`https://cal.com/${username}/${slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          {`cal.com/${username}/${slug}`}
        </a>
      </p>
      <p className="text-body-sm text-[var(--color-ink)]/60 mt-3">
        The inline embed is loaded only on the client; until {`{{CAL_USERNAME}}`} is configured the link above
        falls back to a direct booking page.
      </p>
    </div>
  );
}
