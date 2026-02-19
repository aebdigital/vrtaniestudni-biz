import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Informácie o vŕtaní studní",
  description:
    "Všetko, čo potrebujete vedieť o vŕtaní studní - hĺbka, kvalita vody, výhody vŕtanej studne oproti kopanej a postup prác.",
};

const drilledAdvantages = [
  "Čistejšia a kvalitnejšia voda",
  "Kratšie trvanie vŕtania",
  "Silnejší zdroj vody s väčším výdajom",
  "Minimálne priestorové nároky",
  "Rýchla realizácia: 1-2 dni",
  "Lepšie utesnenie proti povrchovej vode pomocou bentonitu",
  "Nezávislosť od verejného vodovodu a úspora nákladov",
];

export default function InformaciePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary py-16 pt-20">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Informácie o vŕtaní studní
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            Všetko, čo potrebujete vedieť pred tým, než sa rozhodnete pre vlastnú
            studňu
          </p>
        </div>
      </section>

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Studna + Hlbka section with photo */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-4 border-l-2 border-primary pl-4">
                  Studňa
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Je zariadenie na zachytávanie podzemnej vody. Studne sa budujú už od
                  staroveku. Studne kopali, hĺbili banícnym spôsobom alebo narážali.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-dark mb-4 border-l-2 border-primary pl-4">
                  Do akej hĺbky je treba studňu vŕtať
                </h2>
                <div className="bg-gray-light rounded-md p-6 mb-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3">
                      <div className="text-3xl font-bold text-primary mb-1">
                        8 - 45 m
                      </div>
                      <p className="text-gray-600 text-xs">Rozsah hĺbky vŕtania</p>
                    </div>
                    <div className="text-center p-3">
                      <div className="text-3xl font-bold text-primary mb-1">
                        20+ m
                      </div>
                      <p className="text-gray-600 text-xs">
                        Minimum pre celoročné používanie
                      </p>
                    </div>
                    <div className="text-center p-3">
                      <div className="text-3xl font-bold text-primary mb-1">
                        30+ m
                      </div>
                      <p className="text-gray-600 text-xs">
                        Pre komerčné účely
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Hĺbka vŕtania studne sa pohybuje od 8 do 45 metrov v závislosti od
                    geologických podmienok a účelu použitia.
                  </p>
                  <p>
                    Pre dlhodobé celoročné použitie odporúčame minimum 20 metrov. Pre
                    víkendové použitie môže byť hĺbka aj menšia.
                  </p>
                  <p>
                    Pre komerčné účely je vhodná hĺbka nad 30 metrov.
                  </p>
                  <p>
                    <strong>
                      Väčšinou sa nám podarí vodu nájsť do hĺbky 30 metrov.
                    </strong>
                  </p>
                  <p className="bg-primary-light p-4 rounded-md border-l-4 border-primary">
                    Podľa aktuálnej legislatívy nie sú do hĺbky 30 metrov potrebné
                    žiadne administratívne povolenia.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-md overflow-hidden shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] lg:sticky lg:top-24">
              <Image
                src="/images/gallery/vrtanie-studni-14.jpg"
                alt="Vŕtanie studní - vŕtacia súprava"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Kvalita vody + Vrtana studna with photo */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="relative h-[450px] rounded-md overflow-hidden shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] lg:sticky lg:top-24">
              <Image
                src="/images/gallery/vrtanie-studni-5-1.jpg"
                alt="Vŕtanie studní - práca v teréne"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-4 border-l-2 border-primary pl-4">
                  Od čoho závisí kvalita vody
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Kvalita vody závisí predovšetkým od lokality a zloženia hornín, cez
                    ktoré voda prechádza. Podzemná voda sa prirodne filtruje pri prechode
                    cez rôzne geologické vrstvy.
                  </p>
                  <p>
                    Znečistenie môže spôsobiť blízkosť septických jám, používanie
                    chemických hnojív v poľnohospodárstve alebo priemyselná činnosť v
                    okolí.
                  </p>
                  <p>
                    Pri vŕtaní studne je dôležité dodržať dostatočnú vzdialenosť od
                    potenciálnych zdrojov kontaminácie, aby bola zabezpečená čo
                    najvyššia kvalita získanej vody.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-dark mb-4 border-l-2 border-primary pl-4">
                  Vŕtaná studňa
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Vŕtaná studňa je najrozšírenejší typ studne. Vŕtané studne dosahujú
                    hĺbky väčšie ako 8 metrov s priemerom 100 až 300 mm.
                  </p>
                  <p>
                    Hlavné časti vŕtanej studne sú: pažnica (obkladová rúra),
                    perforácia (filtrová časť), kalník (usadzovacia zóna) a
                    stabilizačná vrstva (štrkový obsyp).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vyhody section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-dark mb-4 border-l-2 border-primary pl-4">
            Výhody vŕtanej studne oproti studni kopanej
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {drilledAdvantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-gray-light rounded-md p-4"
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
                  <span className="text-dark font-medium">{advantage}</span>
                </div>
              ))}
            </div>
            <div className="relative h-[400px] rounded-md overflow-hidden shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/gallery/vrtanie-studni-8-1.jpg"
                alt="Vŕtanie studní - hotová studňa"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Postup section with photo */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-dark mb-6 border-l-2 border-primary pl-4">
            Postup vŕtanej studne
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0 font-bold">
                  1
                </span>
                <div>
                  <h3 className="font-bold text-dark text-lg">
                    Kontakt telefonicky alebo emailom
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Prvý krok je kontaktovať nás telefonicky na čísle 0907 872 591
                    alebo emailom na kralik.mato@gmail.com. Radi Vám zodpovieme
                    všetky otázky.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0 font-bold">
                  2
                </span>
                <div>
                  <h3 className="font-bold text-dark text-lg">
                    Prípravné práce
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Obhliadka miesta, lokalizácia vhodného miesta na vŕtanie a
                    vybavenie potrebných povolení. Posúdime geologické podmienky a
                    navrhneme optimálne riešenie.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0 font-bold">
                  3
                </span>
                <div>
                  <h3 className="font-bold text-dark text-lg">
                    Realizácia studne
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Samotné vŕtacie práce, inštalácia rúr, zásyp, čerpanie a
                    čistenie. Kompletná realizácia trvá zvyčajne 1-2 dni.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-md overflow-hidden shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/gallery/20160720_115757.jpg"
                alt="Vŕtanie studní - postup prác"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary rounded-md p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Máte otázky o vŕtaní studní?
          </h2>
          <p className="text-white/80 mb-6">
            Neváhajte nás kontaktovať. Radi Vám poradíme a pripravíme cenovú
            ponuku na mieru.
          </p>
          <a
            href="tel:+421907872591"
            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors"
          >
            Zavolajte nám: 0907 872 591
          </a>
        </section>
      </div>
    </>
  );
}
