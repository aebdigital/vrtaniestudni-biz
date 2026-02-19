import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              MQM stavebno obchodná spoločnosť, s.r.o.
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Profesionálne vŕtanie studní po celom Slovensku. Garancia
              nájdenia vody, doprava zdarma.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-gray-400 uppercase tracking-wider">
              Rýchle odkazy
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Vŕtanie studní
                </Link>
              </li>
              <li>
                <Link
                  href="/informacie"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Informácie o vŕtaní studní
                </Link>
              </li>
              <li>
                <Link
                  href="/galeria"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Fotogaléria
                </Link>
              </li>
              <li>
                <Link
                  href="/cena"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Cena
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-gray-400 uppercase tracking-wider">
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
                M.R.Štefánika 911/53, 962 12, Detva
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
                  className="hover:text-white transition-colors"
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
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:kralik.mato@gmail.com"
                  className="hover:text-white transition-colors"
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

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} MQM stavebno obchodná spoločnosť,
            s.r.o. Všetky práva vyhradené.
          </p>
          <p className="mt-1">IČO: 47440678</p>
        </div>
      </div>
    </footer>
  );
}
