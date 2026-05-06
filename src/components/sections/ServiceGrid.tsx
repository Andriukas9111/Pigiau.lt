import { Container } from "@/components/primitives/Container";
import { ServiceCard } from "@/components/service/ServiceCard";
import { services } from "@/content/services";
import { useTranslations } from "next-intl";

export function ServiceGrid({ limit }: { limit?: number }) {
  const t = useTranslations("home");
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section className="section-md">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="text-mono uppercase text-[var(--color-ink)]/60">02 / Paslaugos</span>
            <h2 className="text-display-lg mt-2">{t("servicesTitle")}</h2>
            <p className="text-body-lg text-[var(--color-ink)]/70 mt-4">{t("servicesLede")}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {list.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
