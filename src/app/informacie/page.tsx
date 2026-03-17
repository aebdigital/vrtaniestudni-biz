import type { Metadata } from "next";
import Image from "next/image";
import SeoSchema from "@/components/SeoSchema";
import { seo, toMetadata } from "@/lib/seo";

export const metadata: Metadata = toMetadata(seo.informacie);

const drilledAdvantages = [
  "Poväčšine čistejšia a kvalitnejšia voda",
  "Kratšia doba hĺbenia studne",
  "Silnejší zdroj vody- väčšia výdatnosť",
  "Menšie priestorové nároky studne",
  "Rýchla realizácia studne 1-2 dni",
  "Ľahšie zatesnenie vrtu proti povrchovej vode Bentonitom",
];

export default function InformaciePage() {
  return (
    <>
      <SeoSchema schema={seo.informacie.schema} />

      {/* Hero Banner */}
      <section className="relative min-h-[320px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/external-new/vrtanie-studni03.jpg"
            alt="Informácie o vŕtaní studní"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(182,106,47,0.35),transparent_40%),linear-gradient(112deg,rgba(10,8,7,0.9)_0%,rgba(22,18,14,0.82)_48%,rgba(45,32,22,0.62)_100%)]" />
        </div>
        <div className="relative z-10 max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 pt-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Informácie o vŕtaní studní
          </h1>
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
                  Je zariadenie na zachytávanie podzemnej vody. Studne sa budujú už od staroveku. Studne kopali, hĺbili baníckym spôsobom alebo narážali. Na hradoch v stredoveku studne zohrávali dôležitú úlohu v čase bojov, kedy bol hrad odrezaný od iného zdroja vody. Dnes zohrávajú studne dôležitú úlohu pre nezávislé bývanie.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-dark mb-4 border-l-2 border-primary pl-4">
                  Do akej hĺbky je treba studňu vŕtať
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Hĺbka vrtu býva od 8 do 45 metrov v závislosti na objeme čerpanej vody a lokalite. Pre studne, ktoré majú slúžiť dlhodobo sa odporúča vrt aspoň od úrovne od 20 metrov hĺbky, pre víkendovo alebo zriedkavo používané chaty postačuje aj menej, pre firmy sa odporúča nad 30 metrov. Väčšinou sa nám podarí vodu nájsť do hĺbky 30 metrov. Do tejto hĺbky podľa platnej legislatívy nie je nutné robiť administratívu a vybavovať potvrdenia na úradoch.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-md overflow-hidden shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] lg:sticky lg:top-24">
              <Image
                src="/images/gallery/external-new/vrtanie-studni01.jpg"
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
                src="/images/gallery/external-new/vrtanie-studni05.jpg"
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
                    Kvalita závislí hlavne od umiestnenia studne a tiež od zloženia horniny. Žumpa, poľnohospodárske chemikálie, priemysel a podobné zdroje môžu podzemnú vodu a vodu v studni znečisťovať, takže sa odporúča vŕtať v dostatočnej vzdialenosti od týchto objektov.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-dark mb-4 border-l-2 border-primary pl-4">
                  Vŕtaná studňa
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Vŕtaná studňa je najrozšírenejším typom studne. Vŕtaná studňa sa používa najmä vtedy ak je potrebné čerpať vodu z väčších hĺbok ako 8m. Vŕtané studne majú priemer od 100 – 300mm.
                  </p>
                  <p>
                    Vrt tvorí plášť studne a perforácia ktorá sa nachádza v zvodnelej vrstve podložia, nakonci je kalník. Stabilitu vrtu zabezpečuje aktívna časť. Perforácia sa určuje podľa geologických podmienok lokality.
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
                src="/images/gallery/external-new/vrtanie-studni11.jpg"
                alt="Vŕtanie studní - hotová studňa"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-6">
            Najväčšou výhodou vŕtanej studne je nezávislosť v zásobovaní vodou od verejného vodovou a úspora finančných prostriedkov.
          </p>
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
                    Kontaktujte nás
                  </h3>
                  <p className="text-gray-600 mt-1">
                    telefonicky alebo e-mailom
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
                  <div className="text-gray-600 mt-1 space-y-1">
                    <p>Obhliadka pozemku</p>
                    <p>Nájdenie zdroju vody</p>
                    <p>Stavebné povolenia</p>
                  </div>
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
                    Naším cieľom je spokojný zákazník.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-md overflow-hidden shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/gallery/external-new/vrtanie-studni07.jpg"
                alt="Vŕtanie studní - postup prác"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
