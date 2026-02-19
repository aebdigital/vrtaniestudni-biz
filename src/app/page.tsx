import Image from "next/image";
import Link from "next/link";
import ParallaxHero from "@/components/ParallaxHero";

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
      {/* Hero Section */}
      <ParallaxHero
        imageSrc="/images/vrtanie-studni-8.jpg"
        imageAlt="Vŕtanie studní"
      >
        <div className="relative max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Vŕtanie studní lacno.
            <br />
            <span className="text-primary">Dopravu neúčtujeme!</span>
            <br />
            Garancia nájdenia vody.
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Profesionálne vŕtanie studní po celom Slovensku od 65 EUR za 1
            bežný meter
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-md text-lg transition-colors shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)]"
          >
            Kontaktujte nás
          </Link>
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
              "vrtanie-studni-6.jpg",
              "vrtanie-studni-7.jpg",
              "vrtanie-studni-8.jpg",
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
              href="/galeria"
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
                className="bg-white rounded-md p-6 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <span className="bg-primary text-white rounded-full w-7 h-7 flex items-center justify-center shrink-0 font-bold text-xs">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-dark text-lg mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
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
      <section className="py-16 bg-primary">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            4 dôvody prečo vŕtať s nami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-md p-6 text-center text-white hover:bg-white/20 transition-colors"
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
              href="/kontakt"
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
          </div>
        </div>
      </section>
    </>
  );
}
