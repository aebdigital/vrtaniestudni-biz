import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cena vŕtanej studne",
  description:
    "Cena vŕtanej studne od 65 EUR za 1 bežný meter. Najlacnejšie touto technológiou na trhu. Doprava zdarma po celom Slovensku.",
};

const reasons = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
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
        className="h-12 w-12"
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
    description:
      "S nami sa Vám nestane, že zostanete bez vody",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
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
        className="h-12 w-12"
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
    description:
      "Kompletné riešenie vrátane šachty a napojenia na budovu",
  },
];

export default function CenaPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary py-16 pt-20">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Cena vŕtanej studne
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            Ponúkame najvýhodnejšie ceny vŕtania studní na Slovensku
          </p>
        </div>
      </section>

      {/* Main Price Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="bg-gray-light rounded-lg p-8 md:p-12 text-center shadow-[0_4px_40px_-8px_rgba(88,145,232,0.25)]">
              <p className="text-gray-600 text-lg mb-2">Cena vŕtania studne</p>
              <div className="text-6xl md:text-8xl font-bold text-primary mb-2">
                od 65 <span className="text-3xl md:text-4xl">EUR</span>
              </div>
              <p className="text-2xl text-dark font-medium mb-4">
                za 1 bežný meter
              </p>
              <div className="inline-block bg-primary text-white rounded-full px-6 py-2 text-sm font-bold mb-8">
                Najlacnejšie touto technológiou na trhu
              </div>
              <div className="border-t border-gray-200 pt-8">
                <p className="text-gray-600 mb-6">
                  Pre presnú cenovú ponuku nás kontaktujte. Cena závisí od
                  geologických podmienok, hĺbky vŕtania a doplnkových služieb.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/kontakt"
                    className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition-colors"
                  >
                    Žiadať o cenovú ponuku
                  </Link>
                  <a
                    href="tel:+421907872591"
                    className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-md transition-colors"
                  >
                    0907 872 591
                  </a>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-md overflow-hidden shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/gallery/vrtanie-studni-13.jpg"
                alt="Vŕtanie studní - proces"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-dark mb-10">
            Čo je zahrnuté v cene
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-[450px] rounded-md overflow-hidden shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/gallery/vrtanie-studni-3-1.jpg"
                alt="Vŕtanie studní - technika"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Obhliadka miesta a posúdenie",
                "Vŕtacie práce",
                "Inštalácia PVC alebo oceľových rúr",
                "Zásyp a cementácia",
                "Čerpanie a čistenie studne",
                "Doprava po celom Slovensku",
                "Konzultácia a poradenstvo",
                "Garancia nájdenia vody",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-md p-4 shadow-[0_1px_10px_-2px_rgba(0,0,0,0.06)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary shrink-0"
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
                  <span className="text-dark font-medium">{item}</span>
                </div>
              ))}
            </div>
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
            Zaujala Vás naša ponuka?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Kontaktujte nás pre bezplatnú konzultáciu a cenovú ponuku na mieru.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-md text-lg transition-colors"
          >
            Kontaktujte nás
          </Link>
        </div>
      </section>
    </>
  );
}
