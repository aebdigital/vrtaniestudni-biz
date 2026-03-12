import Link from "next/link";

export default function Footer() {
  return (
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
  );
}
