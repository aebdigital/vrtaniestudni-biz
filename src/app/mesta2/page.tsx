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

export default function Mesta2Page() {
  return (
    <>
      <SeoSchema schema={seo.mesta2.schema} />

      {/* Hero Banner */}
      <section className="hero-band py-16 pt-24">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Vŕtanie studní Lučenec, Rimavská Sobota
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            Pre rodiny, firmy aj záhradkárov
          </p>
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
