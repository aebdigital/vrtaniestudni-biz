import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SeoSchema from "@/components/SeoSchema";
import { seo, toMetadata } from "@/lib/seo";

export const metadata: Metadata = toMetadata(seo.mesta2);

const benefits = [
  {
    title: "Riešenie šetrné k životnému prostrediu",
    description: "Voda zo studne je energeticky menej náročná",
  },
  {
    title: "Rýchla návratnosť investícií",
    description: "Nedoplatky za vodu už zostanú iba minulosťou",
  },
  {
    title: "Investícia do zdravia",
    description: "Čistá, pramenitá voda bez prídavných látok",
  },
];

export default function Mesta2Page() {
  return (
    <>
      <SeoSchema schema={seo.mesta2.schema} />

      {/* Hero Banner */}
      <section className="relative min-h-[320px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/external-new/vrtanie-studni12.jpg"
            alt="Vŕtanie studní Lučenec, Rimavská Sobota"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(182,106,47,0.35),transparent_40%),linear-gradient(112deg,rgba(10,8,7,0.9)_0%,rgba(22,18,14,0.82)_48%,rgba(45,32,22,0.62)_100%)]" />
        </div>
        <div className="relative z-10 max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 pt-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Vŕtanie studní Lučenec, Rimavská Sobota
          </h1>
        </div>
      </section>

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main content */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Voda je komoditou, bez ktorej si nevieme predstaviť život. Je pre
                nás prirodzenou súčasťou života a aj dnes, podobne ako v minulosti,
                si mnohí v snahe čo najväčšej samostatnosti budujú vlastné studne.
                To, čo bolo kedysi bežnou súčasťou rodinných domov sa navracia a
                niet sa tomu čo čudovať.
              </p>
              <p>
                Mať vlastnú studňu so sebou prináša hneď niekoľko výhod. Azda tou
                najväčšou je šetrenie nákladov aj prostredia. Okrem toho, že ide o
                investíciu finančnú, ide o riešenie, ktoré vydrží. Okrem toho
                poskytuje:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Úplnú nezávislosť, vlastnú spotrebu vody máte plne pod
                  kontrolou
                </li>
                <li>
                  Dostatok vody aj v prípade nepriaznivých podmienok, ako je
                  napríklad dlhodobé sucho
                </li>
              </ul>
              <p>
                Ide o vskutku moderné a ideálne riešenie tak pre domácnosti, ako
                aj firmy či poľnohospodárov, ktorých práca si vyžaduje obsiahle
                závlahové systémy. Naviac, voda zo studne je čistá, bez primesí či
                pridaných látok. Nič viac, len čistá voda priamo zo zeme.
              </p>
              <p>
                Vŕtané studne tak poskytujú dokonalé riešenie, ktoré je
                ekologické, ekonomické a spoľahlivé. Naviac, sú celkom bezpečné a
                eliminujú riziko pádu, prípadne iného zdravie ohrozujúceho úrazu.
              </p>
              <p>
                Náš skúsený tím je vám k dispozícii a poskytne poradenstvo úplne
                zdarma. U nás nájdete kompletný servis a služby od príprav až po
                realizáciu, ktorá obvykle netrvá dlhšie ako pár dní. Naše služby
                sú pre vás dostupné v mestách ako{" "}
                <strong>Lučenec a Rimavská Sobota</strong>, ako aj v blízkych
                mestečkách a obciach v daných okresoch, napr. Halič, Tomášovce,
                Lenartovce, Neporadza, Čakanovce.
              </p>
            </div>
            <div className="relative h-[500px] rounded-md overflow-hidden shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] lg:sticky lg:top-24">
              <Image
                src="/images/gallery/vrtanie-studni-14.jpg"
                alt="Vŕtanie studní Lučenec"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 3x Ano */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">
            Vlastná studňa? 3x áno
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-light rounded-md p-6 text-center"
              >
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
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
