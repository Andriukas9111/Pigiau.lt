import { LegalDoc, LegalH, LegalP, LegalUl } from "@/components/sections/LegalDoc";
import { Email } from "@/components/ui/Email";
import { BRAND } from "@/lib/data";
import { type Locale, trFor } from "@/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const lt = lang === "lt";
  return {
    title: lt ? "Privatumo politika" : "Privacy Policy",
    description: lt
      ? "Kaip NordWash renka, naudoja, dalijasi ir saugo jūsų asmens duomenis užsakant skalbimą ir cheminį valymą visoje Lietuvoje, ir jūsų teisės pagal BDAR."
      : "How NordWash collects, uses, shares and protects your personal data when you book laundry & dry cleaning across Lithuania, and your rights under GDPR.",
    alternates: {
      canonical: `/${lang}/privacy`,
      languages: { lt: "/lt/privacy", en: "/en/privacy", "x-default": "/lt/privacy" },
    },
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l: Locale = lang === "lt" ? "lt" : "en";
  const tr = trFor(l);
  return (
    <LegalDoc
      title={tr("Privacy Policy", "Privatumo politika")}
      updated={tr("June 2026", "2026 m. birželis")}
    >
      <LegalP>
        {tr(
          `NordWash ("we", "us", "our") respects your privacy. This policy explains what personal data we collect when you use ${BRAND.web} or book our laundry and dry-cleaning services, how we use it, who we share it with, and the rights you have under the EU General Data Protection Regulation (GDPR).`,
          `NordWash („mes", „mus", „mūsų") gerbia jūsų privatumą. Ši politika paaiškina, kokius asmens duomenis renkame, kai naudojatės ${BRAND.web} ar užsisakote mūsų skalbimo ir cheminio valymo paslaugas, kaip juos naudojame, su kuo dalijamės ir kokias teises turite pagal ES Bendrąjį duomenų apsaugos reglamentą (BDAR).`,
        )}
      </LegalP>

      <LegalH>{tr("Information we collect", "Kokius duomenis renkame")}</LegalH>
      <LegalUl
        items={[
          tr(
            "Contact details — your name, email address and phone number.",
            "Kontaktinius duomenis — vardą, el. pašto adresą ir telefono numerį.",
          ),
          tr(
            "Pickup & delivery details — your address, access notes and chosen time slot.",
            "Paėmimo ir pristatymo duomenis — adresą, prieigos pastabas ir pasirinktą laiką.",
          ),
          tr(
            "Order details — the services, options and items you book.",
            "Užsakymo duomenis — paslaugas, pasirinkimus ir daiktus, kuriuos užsakote.",
          ),
          tr(
            "Payment information — processed securely by our payment providers; we do not store full card numbers.",
            "Mokėjimo informaciją — saugiai tvarkomą mokėjimo paslaugų teikėjų; pilnų kortelės numerių nesaugome.",
          ),
          tr(
            "Messages — anything you send us via the contact form, email or chat.",
            "Žinutes — viską, ką siunčiate per kontaktų formą, el. paštą ar pokalbį.",
          ),
        ]}
      />

      <LegalH>{tr("How we use your data", "Kaip naudojame jūsų duomenis")}</LegalH>
      <LegalUl
        items={[
          tr(
            "To collect, clean and deliver your laundry and fulfil your orders.",
            "Kad paimtume, išvalytume ir pristatytume jūsų skalbinius bei įvykdytume užsakymus.",
          ),
          tr(
            "To process payments and apply discounts.",
            "Kad apdorotume mokėjimus ir pritaikytume nuolaidas.",
          ),
          tr(
            "To communicate with you about bookings, pickups and support requests.",
            "Kad galėtume bendrauti dėl užsakymų, paėmimų ir pagalbos užklausų.",
          ),
          tr(
            "To improve our services and prevent fraud.",
            "Kad tobulintume paslaugas ir užkirstume kelią sukčiavimui.",
          ),
          tr(
            "To meet our legal and accounting obligations.",
            "Kad vykdytume teisinius ir apskaitos įsipareigojimus.",
          ),
        ]}
      />
      <LegalP>
        {tr(
          "Our legal bases are performance of our contract with you, our legitimate interests in running and improving the service, your consent where required, and compliance with legal obligations.",
          "Mūsų teisiniai pagrindai yra sutarties su jumis vykdymas, teisėtas interesas teikti ir tobulinti paslaugą, jūsų sutikimas, kai jis reikalingas, ir teisinių prievolių laikymasis.",
        )}
      </LegalP>

      <LegalH>{tr("Who we share it with", "Su kuo dalijamės")}</LegalH>
      <LegalP>
        {tr(
          "We share data only as needed to provide the service: with our delivery couriers, payment processors and IT/hosting providers, and where required by law. We do not sell your personal data.",
          "Duomenimis dalijamės tik tiek, kiek reikia paslaugai teikti: su kurjeriais, mokėjimų tvarkytojais ir IT / prieglobos teikėjais bei kai to reikalauja įstatymai. Jūsų asmens duomenų neparduodame.",
        )}
      </LegalP>

      <LegalH>{tr("Data retention", "Duomenų saugojimas")}</LegalH>
      <LegalP>
        {tr(
          "We keep your data only as long as necessary to provide the service and to meet legal, tax and accounting requirements, after which it is securely deleted or anonymised.",
          "Jūsų duomenis saugome tik tiek, kiek reikia paslaugai teikti bei teisiniams, mokestiniams ir apskaitos reikalavimams įvykdyti, o vėliau juos saugiai ištriname arba nuasmeniname.",
        )}
      </LegalP>

      <LegalH>{tr("Cookies", "Slapukai")}</LegalH>
      <LegalP>
        {tr(
          "The website uses only essential cookies needed for it to function. We do not currently use advertising or cross-site tracking cookies.",
          "Svetainė naudoja tik būtinuosius slapukus, reikalingus jai veikti. Šiuo metu nenaudojame reklamos ar tarpsvetaininio sekimo slapukų.",
        )}
      </LegalP>

      <LegalH>{tr("Your rights", "Jūsų teisės")}</LegalH>
      <LegalP>
        {tr(
          "Under GDPR you may request access to, correction or deletion of your data, restrict or object to processing, and request data portability. You may also lodge a complaint with the State Data Protection Inspectorate of Lithuania (Valstybinė duomenų apsaugos inspekcija).",
          "Pagal BDAR galite prašyti susipažinti su savo duomenimis, juos ištaisyti ar ištrinti, apriboti ar nesutikti su tvarkymu bei prašyti perkelti duomenis. Taip pat galite pateikti skundą Valstybinei duomenų apsaugos inspekcijai.",
        )}
      </LegalP>

      <LegalH>{tr("Contact", "Kontaktai")}</LegalH>
      <LegalP>
        {tr("For any privacy request, contact us at", "Dėl bet kokios privatumo užklausos rašykite")}{" "}
        <Email /> {tr("or", "arba skambinkite")} {BRAND.phone}.
      </LegalP>
    </LegalDoc>
  );
}
