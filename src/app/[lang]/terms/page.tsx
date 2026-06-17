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
    title: lt ? "Paslaugų sąlygos" : "Terms of Service",
    description: lt
      ? "NordWash skalbimo ir cheminio valymo paslaugų naudojimo sąlygos Lietuvoje — užsakymai, kainos, paėmimas ir pristatymas, daiktų priežiūra ir atsakomybė."
      : "The terms for using NordWash laundry & dry-cleaning services in Lithuania — bookings, pricing, pickup & delivery, care of items, and liability.",
    alternates: {
      canonical: `/${lang}/terms`,
      languages: { lt: "/lt/terms", en: "/en/terms", "x-default": "/lt/terms" },
    },
  };
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l: Locale = lang === "lt" ? "lt" : "en";
  const tr = trFor(l);
  return (
    <LegalDoc
      title={tr("Terms of Service", "Paslaugų sąlygos")}
      updated={tr("June 2026", "2026 m. birželis")}
    >
      <LegalP>
        {tr(
          `These terms govern your use of NordWash laundry and dry-cleaning services and the ${BRAND.web} website. By booking with us you agree to them.`,
          `Šios sąlygos reglamentuoja naudojimąsi NordWash skalbimo ir cheminio valymo paslaugomis bei ${BRAND.web} svetaine. Užsisakydami pas mus, su jomis sutinkate.`,
        )}
      </LegalP>

      <LegalH>{tr("Our services", "Mūsų paslaugos")}</LegalH>
      <LegalP>
        {tr(
          "We provide washing, drying, folding, steam pressing, dry cleaning, stain treatment and related care, with optional pickup and delivery across Lithuania.",
          "Teikiame skalbimo, džiovinimo, lankstymo, garų lyginimo, cheminio valymo, dėmių valymo ir susijusios priežiūros paslaugas su pasirinktiniu paėmimu ir pristatymu visoje Lietuvoje.",
        )}
      </LegalP>

      <LegalH>{tr("Bookings & estimates", "Užsakymai ir sąmatos")}</LegalH>
      <LegalP>
        {tr(
          "Prices shown in the calculator are estimates. Loads are weighed on collection and the final price may differ slightly from the estimate; if it differs significantly we will contact you before proceeding.",
          "Skaičiuoklėje rodomos kainos yra apytikslės. Krūviai pasveriami paimant, todėl galutinė kaina gali šiek tiek skirtis nuo sąmatos; jei ji skirsis reikšmingai, prieš tęsdami su jumis susisieksime.",
        )}
      </LegalP>

      <LegalH>{tr("Pricing & payment", "Kainos ir mokėjimas")}</LegalH>
      <LegalUl
        items={[
          tr("Prices include applicable taxes.", "Į kainas įskaičiuoti taikomi mokesčiai."),
          tr(
            "We accept card, Apple Pay, PayPal and cash on delivery.",
            "Priimame korteles, Apple Pay, PayPal ir grynuosius pristatant.",
          ),
          tr(
            "First orders can use code HELLOEARTH for 10% off; Star Members save 10% on every order.",
            "Pirmiems užsakymams galioja kodas HELLOEARTH 10 % nuolaidai; „Star“ nariai sutaupo 10 % kiekvienam užsakymui.",
          ),
        ]}
      />

      <LegalH>{tr("Pickup & delivery", "Paėmimas ir pristatymas")}</LegalH>
      <LegalP>
        {tr(
          "You choose a time window; our courier collects and returns your items, contact-free if you prefer. Pickup & delivery is free in most zones, otherwise a flat €4.50 applies. Please ensure items are accessible at the agreed time.",
          "Jūs pasirenkate laiko intervalą; mūsų kurjeris paima ir grąžina daiktus, jei pageidaujate — be kontakto. Paėmimas ir pristatymas daugumoje zonų nemokamas, kitu atveju taikomas fiksuotas 4,50 € mokestis. Pasirūpinkite, kad daiktai būtų pasiekiami sutartu laiku.",
        )}
      </LegalP>

      <LegalH>{tr("Care & liability", "Priežiūra ir atsakomybė")}</LegalH>
      <LegalUl
        items={[
          tr(
            "We select a fabric-appropriate program for every item and handle your laundry with care.",
            "Kiekvienam daiktui parenkame audiniui tinkamą programą ir rūpestingai elgiamės su jūsų skalbiniais.",
          ),
          tr(
            "Please remove personal belongings from pockets; we are not liable for items left inside.",
            "Prašome iš kišenių išimti asmeninius daiktus; už viduje paliktus daiktus neatsakome.",
          ),
          tr(
            "Report any issue within 48 hours of delivery so we can investigate and make it right.",
            "Apie bet kokią problemą praneškite per 48 valandas nuo pristatymo, kad galėtume ją ištirti ir ištaisyti.",
          ),
          tr(
            "Our liability for loss or damage is limited to the value of the affected items, save where the law provides otherwise.",
            "Mūsų atsakomybė už praradimą ar sugadinimą ribojama paveiktų daiktų verte, išskyrus atvejus, kai įstatymai numato kitaip.",
          ),
          tr(
            "Certain items may be declined if they cannot be cleaned safely; we will let you know.",
            "Kai kurių daiktų galime nepriimti, jei jų negalima saugiai išvalyti; apie tai jums pranešime.",
          ),
        ]}
      />

      <LegalH>{tr("Satisfaction", "Pasitenkinimas")}</LegalH>
      <LegalP>
        {tr(
          "If you are not happy with the result, we offer a free rewash. We aim for 100% satisfaction.",
          "Jei rezultatas jūsų netenkina, pasiūlysime nemokamą perskalbimą. Siekiame 100 % pasitenkinimo.",
        )}
      </LegalP>

      <LegalH>{tr("Cancellations", "Atšaukimai")}</LegalH>
      <LegalP>
        {tr(
          "You may cancel or reschedule a pickup before our courier is dispatched at no charge.",
          "Paėmimą galite nemokamai atšaukti arba perkelti, kol mūsų kurjeris dar neišsiųstas.",
        )}
      </LegalP>

      <LegalH>{tr("Governing law", "Taikoma teisė")}</LegalH>
      <LegalP>
        {tr(
          "These terms are governed by the laws of the Republic of Lithuania.",
          "Šioms sąlygoms taikoma Lietuvos Respublikos teisė.",
        )}
      </LegalP>

      <LegalH>{tr("Changes & contact", "Pakeitimai ir kontaktai")}</LegalH>
      <LegalP>
        {tr(
          "We may update these terms from time to time; the latest version is always on this page. Questions? Email",
          "Šias sąlygas kartkartėmis galime atnaujinti; naujausia versija visada yra šiame puslapyje. Klausimai? Rašykite",
        )}{" "}
        <Email /> {tr("or call", "arba skambinkite")} {BRAND.phone}.
      </LegalP>
    </LegalDoc>
  );
}
