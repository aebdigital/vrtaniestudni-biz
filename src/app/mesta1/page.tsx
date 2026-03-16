import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SeoSchema from "@/components/SeoSchema";
import { seo, toMetadata } from "@/lib/seo";

export const metadata: Metadata = toMetadata(seo.mesta1);

const services = [
  "Osobný prístup a bezplatné poradenstvo",
  "Hľadanie vody prútikárom",
  "Vybudovanie studne „šitej" na mieru",
];

const reasons = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Od 65 Eur",
    description: "Vŕtanie už od 65 Eur, najlacnejšie touto technológiou na trhu",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Garancia nájdenia",
    description: "Garantujeme nájdenie vody — s nami sa Vám nestane, že zostanete bez vody",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Doprava zdarma",
    description: "Privezieme aj odvezieme všetko potrebné k vŕtaniu v rámci celého Slovenska zdarma",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    title: "Studňa na kľúč",
    description: "Vyvŕtame studňu, urobíme šachtu a tiež prípojku do objektu",
  },
];

export default function Mesta1Page() {
  return (
    <>
      <SeoSchema schema={seo.mesta1.schema} />

      {/* Hero Banner */}
      <section className="hero-band py-16 pt-24">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Vŕtanie studní Žiar nad Hronom, Žarnovica, Banská Štiavnica
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            Ekologické, ekonomické a spoľahlivé riešenie
          </p>
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

      {/* 4 Reasons Section */}
      <section className="relative overflow-hidden py-16 bg-[linear-gradient(140deg,#7f4520_0%,#b66a2f_46%,#5f3218_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_24%,rgba(255,236,210,0.28),transparent_40%),radial-gradient(circle_at_86%_78%,rgba(0,0,0,0.36),transparent_48%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(16,11,8,0.64),rgba(182,106,47,0.35),rgba(16,11,8,0.72))]" />
        <div className="relative max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            4 dôvody prečo vŕtať s nami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white/12 border border-white/20 backdrop-blur-sm rounded-md p-6 text-center text-white hover:bg-white/20 transition-colors"
              >
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h3 className="font-bold text-xl mb-2">{reason.title}</h3>
                <p className="text-white/80 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
