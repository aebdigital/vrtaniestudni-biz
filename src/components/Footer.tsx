import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* 4 dôvody prečo vŕtať s nami */}
      <section className="relative overflow-hidden py-16 bg-[linear-gradient(140deg,#7f4520_0%,#b66a2f_46%,#5f3218_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(16,11,8,0.64),rgba(182,106,47,0.35),rgba(16,11,8,0.72))]" />
        <div className="relative max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            4 dôvody prečo vŕtať s nami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Od 65 Eur",
                desc: "vŕtanie už od 65 Eur, najlacnejšie touto technológiou na trhu",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Garancia nájdenia",
                desc: "garantujeme nájdenie vody \u2013 s nami sa Vám nestane že zostanete bez vody",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Doprava zdarma",
                desc: "privezieme aj odvezieme všetko potrebné k vŕtaniu v rámci celého Slovenska zdarma",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                ),
              },
              {
                title: "Studňa na kľúč",
                desc: "vyvŕtame studňu, urobíme šachtu a tiež prípojku do objektu",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/12 border border-white/20 backdrop-blur-sm rounded-md p-6 text-center text-white hover:bg-white/20 transition-colors"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient transition */}
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/images/gallery/external-new/vrtanie-studni05.jpg"
          alt="Vŕtanie studní"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14110f] via-[#14110f]/68 to-transparent" />
      </section>

    <footer className="relative overflow-hidden bg-[#14110f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(182,106,47,0.2),transparent_46%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_32%)]" />
      <div className="relative max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="rounded-md border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-bold mb-4 text-white">
              MQM stavebno obchodná spoločnosť s.r.o.
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Profesionálne vŕtanie studní po celom Slovensku. Garancia
              nájdenia vody, doprava zdarma.
            </p>
          </div>

          <div className="rounded-md border border-white/10 bg-white/5 p-6">
            <h3 className="text-sm font-bold mb-4 text-primary-light uppercase tracking-[0.16em]">
              Rýchle odkazy
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-primary-light text-sm"
                >
                  Vŕtanie studní
                </Link>
              </li>
              <li>
                <Link
                  href="/informacie-o-vrtani-studni"
                  className="text-gray-300 hover:text-primary-light text-sm"
                >
                  Informácie o vŕtaní studní
                </Link>
              </li>
              <li>
                <Link
                  href="/vrtanie-studni-referencie-fotogaleria"
                  className="text-gray-300 hover:text-primary-light text-sm"
                >
                  Fotogaléria
                </Link>
              </li>
              <li>
                <Link
                  href="/vrtanie-studni-cena"
                  className="text-gray-300 hover:text-primary-light text-sm"
                >
                  Cena
                </Link>
              </li>
              <li>
                <Link
                  href="/vrtanie-studni-kontakt"
                  className="text-gray-300 hover:text-primary-light text-sm"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/mesta1"
                  className="text-gray-300 hover:text-primary-light text-sm"
                >
                  Vŕtanie studní Banská Štiavnica, Žarnovica a Žiar nad Hronom
                </Link>
              </li>
              <li>
                <Link
                  href="/mesta2"
                  className="text-gray-300 hover:text-primary-light text-sm"
                >
                  Vŕtanie studní Lučenec a Rimavská Sobota
                </Link>
              </li>
            </ul>
          </div>

          <div className="rounded-md border border-white/10 bg-white/5 p-6">
            <h3 className="text-sm font-bold mb-4 text-primary-light uppercase tracking-[0.16em]">
              Kontakt
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary shrink-0 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Vimperská 938/5, 962 12 Detva, Slovenská republika
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a
                  href="tel:+421907872591"
                  className="hover:text-primary-light"
                >
                  0907 872 591
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a
                  href="tel:+421902681203"
                  className="hover:text-primary-light"
                >
                  0902 681 203
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:kralik.mato@gmail.com"
                  className="hover:text-primary-light"
                >
                  kralik.mato@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                Matúš Králik
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} MQM stavebno obchodná spoločnosť
            s.r.o. Všetky práva vyhradené.
          </p>
          <p className="mt-1">IČO: 47440678</p>
        </div>
      </div>
    </footer>
    </>
  );
}
