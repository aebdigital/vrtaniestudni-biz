import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SeoSchema from "@/components/SeoSchema";
import { seo, toMetadata } from "@/lib/seo";

export const metadata: Metadata = toMetadata(seo.mesta1);

const services = [
  "Osobný prístup a bezplatné poradenstvo",
  "Hľadanie vody prútikárom",
  "Vybudovanie studne \u201Ešitej\u201C na mieru",
];

export default function Mesta1Page() {
  return (
    <>
      <SeoSchema schema={seo.mesta1.schema} />

      {/* Hero Banner */}
      <section className="relative min-h-[320px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/external-new/vrtanie-studni10.jpg"
            alt="Vŕtanie studní Žiar nad Hronom, Žarnovica, Banská Štiavnica"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(182,106,47,0.35),transparent_40%),linear-gradient(112deg,rgba(10,8,7,0.9)_0%,rgba(22,18,14,0.82)_48%,rgba(45,32,22,0.62)_100%)]" />
        </div>
        <div className="relative z-10 max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 pt-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Vŕtanie studní Žiar nad Hronom, Žarnovica, Banská Štiavnica
          </h1>
        </div>
      </section>

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main content */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Mať v dnešnej dobe vlastnú studňu nie je ničím výnimočným, práve
                naopak. Ide o ideálne a moderné riešenie nielen pre rodinné domy a
                záhrady, ale aj závlahové systémy, ktoré dokáže ušetriť nemalé
                financie a odmenou je čistá, pramenitá voda bez primesí priamo z
                hlbín zeme.
              </p>
              <p>
                Voda je „život", je nepostrádateľná v každej domácnosti a snaha
                ušetriť na tejto cennej komodite je na mieste, obzvlášť v čase,
                kedy ceny navôkol rastú. Práve vybudovanie vŕtanej studne ponúka
                efektívne riešenie pre každého — čerpanie vody z takejto studne za
                pomoci ponorného čerpadla je efektívne a zabezpečuje väčší prítok
                vody s malými stratami.
              </p>
              <p>
                Prvotné náklady sa môžu zdať o niečo vyššie, avšak z dlhodobého
                hľadiska sa úvodná investícia vyplatí, takáto studňa vám vydrží
                dlhé roky a ušetrí koniec-koncov nemalé náklady. Pokiaľ žijete v
                suchšej oblasti, alebo sa obávate sucha a horúcich letných
                mesiacov, vaše starosti opadnú. Vydatnosť vody je v prípade
                vŕtanej studne samozrejmosťou.
              </p>
              <p>
                Čím hlbšia je studňa, tým čistejšia je voda. Vrt prechádza cez
                povrchové vody, ktoré bývajú vplyvom prostredia často znečistené a
                dostáva sa až k nižšie položeným vodným ložiskám, ktoré poskytujú
                vodu, ktorá je pitná.
              </p>
              <p>
                Aby sa váš sen o vlastnej studni stal realitou už za pár dní,
                kontaktujte nás! Profesionálny tím s bohatými skúsenosťami sa
                postará o kompletný servis vŕtania studní od A po Zet, a to
                všetko za skvelé ceny.
              </p>
              <p>
                Vŕtanie studní zabezpečujeme v okolí miest{" "}
                <strong>
                  Žiar nad Hronom, Žarnovica a Banská Štiavnica
                </strong>
                , rovnaké služby vieme zabezpečiť aj v okolitých obciach ako sú
                Vyhne, Bartošova Lehôtka, Ľucky, Pila, Hodruša-Hámre, Počúvadlo
                či Podhorie.
              </p>
            </div>
            <div className="relative h-[500px] rounded-md overflow-hidden shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] lg:sticky lg:top-24">
              <Image
                src="/images/gallery/vrtanie-studni-13.jpg"
                alt="Vŕtanie studní Žiar nad Hronom"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">
            U nás nájdete
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-gray-light rounded-md p-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-dark font-medium">{service}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">
            Máte záujem o vŕtanie studne?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Kontaktujte nás pre bezplatnú konzultáciu a cenovú ponuku na mieru.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/vrtanie-studni-kontakt"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-md text-lg transition-colors"
            >
              Kontaktujte nás
            </Link>
            <a
              href="tel:+421907872591"
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-10 rounded-md text-lg transition-colors"
            >
              0907 872 591
            </a>
            <a
              href="tel:+421902681203"
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-10 rounded-md text-lg transition-colors"
            >
              0902 681 203
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
