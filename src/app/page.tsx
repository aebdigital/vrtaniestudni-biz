import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ParallaxHero from "@/components/ParallaxHero";
import SeoSchema from "@/components/SeoSchema";
import { seo, toMetadata } from "@/lib/seo";

export const metadata: Metadata = toMetadata(seo.home);

const benefits = [
  {
    icon: "/images/1.svg",
    text: "Neplatíte žiadne celoživotné náklady za spotrebu vody",
  },
  {
    icon: "/images/2.svg",
    text: "Dostatočné množstvo vody aj v suchých letných mesiacoch",
  },
  {
    icon: "/images/3-1.svg",
    text: "Získate kvalitný zdroj pitnej a úžitkovej vody",
  },
  {
    icon: "/images/4.svg",
    text: "Nezávislosť od miestneho vodovodu",
  },
];

const advantages = [
  {
    title: "Nezávislosť od verejného vodovodu",
    description:
      "S vlastnou vŕtanou studňou nie ste závislí od verejného rozvodu vody ani od dodávateľov.",
  },
  {
    title: "Nízke prevádzkové náklady",
    description:
      "Po počiatočnej investícii sú prevádzkové náklady na vlastnú studňu minimálne.",
  },
  {
    title: "Stabilná a kvalitná podzemná voda",
    description:
      "Podzemná voda z hĺbkového vrtu je prirodne filtrovaná a čistá.",
  },
  {
    title: "Spoľahlivosť aj počas suchých období",
    description:
      "Hlboké vrty zaistia stabilný prietok vody aj v najsuchších letných mesiacoch.",
  },
  {
    title: "Minimálne priestorové nároky",
    description:
      "Vŕtaná studňa zaberá minimum priestoru na Vašom pozemku oproti kopanej studni.",
  },
  {
    title: "Dlhá životnosť s minimálnou údržbou",
    description:
      "Správne vybudovaná vŕtaná studňa slúži desiatky rokov s minimálnou údržbou.",
  },
];

const advantageCardImages = [
  "gallery/external-new/vrtanie-studni01.jpg",
  "gallery/external-new/vrtanie-studni03.jpg",
  "gallery/external-new/vrtanie-studni04.jpg",
  "gallery/external-new/vrtanie-studni06.jpg",
  "gallery/external-new/vrtanie-studni10.jpg",
  "gallery/external-new/vrtanie-studni12.jpg",
];

const processSteps = [
  {
    step: 1,
    title: "Obhliadka miesta a posúdenie",
    description: "Osobná návšteva a zhodnotenie podmienok na Vašom pozemku.",
  },
  {
    step: 2,
    title: "Výber vhodného miesta na vŕtanie",
    description:
      "Určenie optimálneho miesta pre vrt na základe geologických podmienok.",
  },
  {
    step: 3,
    title: "Samotné vŕtacie práce",
    description: "Profesionálne vŕtanie s použitím modernej technológie.",
  },
  {
    step: 4,
    title: "Inštalácia rúr (PVC alebo oceľ)",
    description: "Osadenie kvalitných rúr pre dlhú životnosť studne.",
  },
  {
    step: 5,
    title: "Zásyp a cementácia",
    description: "Zabezpečenie studne proti povrchovej kontaminácii.",
  },
  {
    step: 6,
    title: "Čerpanie a čistenie",
    description: "Odčerpanie kalnej vody až po čistý zdroj.",
  },
  {
    step: 7,
    title: "Inštalácia čerpadla a systému",
    description: "Montáž čerpacej techniky a napojenie na rozvody.",
  },
  {
    step: 8,
    title: "Odovzdanie a testovanie",
    description: "Finálne testy a odovzdanie plne funkčnej studne.",
  },
];

const reasons = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Od 65 Eur",
    description: "Najlacnejšie touto technológiou na trhu",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Garancia nájdenia vody",
    description: "S nami sa Vám nestane, že zostanete bez vody",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
    title: "Doprava zdarma",
    description: "Doprava zdarma po celom Slovensku",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
        />
      </svg>
    ),
    title: "Studňa na kľúč",
    description: "Kompletné riešenie vrátane šachty a napojenia na budovu",
  },
];

export default function HomePage() {
  return (
    <>
      <SeoSchema schema={seo.home.schema} />

      {/* Hero Section */}
      <ParallaxHero
        imageSrc="/images/gallery/external-new/vrtanie-studni05.jpg"
        imageAlt="Vŕtanie studní"
      >
        <div className="relative max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)] gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="eyebrow inline-flex rounded-md border border-white/30 bg-black/35 px-4 py-2 text-[11px] text-white/90 mb-5">
                MQM stavebno obchodná spoločnosť s.r.o.
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.04] mb-6">
                Vŕtanie studní po celom Slovensku
                <br className="hidden sm:block" /> od{" "}
                <span className="text-primary">65 EUR / m</span>
              </h1>
              <p className="text-base sm:text-xl text-gray-200 mb-7 max-w-2xl mx-auto lg:mx-0">
                Profesionálna realizácia, doprava zdarma a garancia nájdenia
                vody. Jednoduché, rýchle a bez zbytočných poplatkov.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                {["Doprava zdarma", "Garancia vody", "Studňa na kľúč"].map(
                  (item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-white/25 bg-black/30 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.08em] text-white/90"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href="/vrtanie-studni-kontakt"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-md text-lg transition-colors shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)]"
                >
                  Kontaktujte nás
                </Link>
                <Link
                  href="/vrtanie-studni-cena"
                  className="inline-flex items-center justify-center border border-white/35 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-md text-lg transition-colors"
                >
                  Cena od 65 EUR / m
                </Link>
              </div>
            </div>

            <aside className="rounded-md border border-primary/35 bg-[linear-gradient(160deg,rgba(18,15,13,0.82),rgba(18,15,13,0.66))] p-6 sm:p-7 backdrop-blur-sm shadow-[0_30px_56px_-34px_rgba(0,0,0,0.95)]">
              <p className="eyebrow text-primary-light text-[11px] mb-3">
                Rýchla obhliadka
              </p>
              <h2 className="text-2xl sm:text-3xl text-white leading-tight mb-4">
                Nezáväzná konzultácia
                <br />
                do 24 hodín
              </h2>
              <a
                href="tel:+421902681203"
                className="inline-flex items-center justify-center w-full rounded-md border border-white/25 bg-primary/25 px-4 py-3 text-white font-bold text-lg hover:bg-primary/35"
              >
                0902 681 203
              </a>
              <ul className="mt-5 space-y-2 text-sm text-gray-200">
                <li>• Doprava zdarma v rámci realizácie</li>
                <li>• Garancia nájdenia vody</li>
                <li>• Realizujeme po celom Slovensku</li>
              </ul>
            </aside>
          </div>
        </div>
      </ParallaxHero>

      {/* Benefits Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-md border border-gray-100 p-6 text-center shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={benefit.icon}
                    alt=""
                    width={64}
                    height={64}
                    className="h-16 w-16"
                  />
                </div>
                <p className="text-dark font-medium">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-dark mb-10">
            Naše práce
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "gallery/external-new/vrtanie-studni01.jpg",
              "gallery/external-new/vrtanie-studni05.jpg",
              "gallery/external-new/vrtanie-studni11.jpg",
            ].map((img, index) => (
              <div
                key={index}
                className="relative h-64 rounded-md overflow-hidden shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-shadow"
              >
                <Image
                  src={`/images/${img}`}
                  alt={`Vŕtanie studní ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/vrtanie-studni-referencie-fotogaleria"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-md transition-colors"
            >
              Zobraziť celú galériu
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-dark mb-4">
            Výhody vŕtanej studne
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Vŕtaná studňa je moderný a spoľahlivý spôsob ako získať vlastný
            zdroj kvalitnej vody
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-md p-6 min-h-[210px] shadow-[0_2px_20px_-4px_rgba(0,0,0,0.22)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.35)] transition-shadow"
              >
                <Image
                  src={`/images/${advantageCardImages[index % advantageCardImages.length]}`}
                  alt={`Výhoda vŕtanej studne ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(170deg,rgba(0,0,0,0.28),rgba(0,0,0,0.72))]" />

                <div className="relative z-10 flex items-start gap-3">
                  <span className="rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold text-sm border border-white/65 bg-white/15 text-white">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <div className="mb-2 text-white/90">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 14c0 3.866-3.134 7-7 7s-7-3.134-7-7a7 7 0 1114 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-dark mb-4">
            Postup vŕtania studne
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Od prvej obhliadky až po odovzdanie hotovej studne
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              "gallery/external-new/vrtanie-studni04.jpg",
              "gallery/external-new/vrtanie-studni12.jpg",
            ].map((img, index) => (
              <div
                key={index}
                className="relative h-52 rounded-md overflow-hidden"
              >
                <Image
                  src={`/images/${img}`}
                  alt={`Vŕtanie studní - postup ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-md p-6 text-center shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-shadow"
              >
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Reasons Section */}
      <section className="relative overflow-hidden py-16 bg-[linear-gradient(140deg,#7f4520_0%,#b66a2f_46%,#5f3218_100%)]">
        <Image
          src="/images/gallery/external-new/vrtanie-studni07.jpg"
          alt=""
          aria-hidden
          fill
          className="object-cover opacity-25"
        />
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

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">
            Máte záujem o vŕtanie studne?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Kontaktujte nás pre bezplatnú konzultáciu a cenovú ponuku. Zavolajte
            nám alebo vyplňte kontaktný formulár.
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

      {/* Hero Fade Into Footer */}
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/images/gallery/external-new/vrtanie-studni05.jpg"
          alt="Vŕtanie studní - hero prechod do footeru"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14110f] via-[#14110f]/68 to-transparent" />
      </section>
    </>
  );
}
