import type { Metadata } from "next";
import Image from "next/image";
import SeoSchema from "@/components/SeoSchema";
import { seo, toMetadata } from "@/lib/seo";

export const metadata: Metadata = toMetadata(seo.kontakt);

export default function KontaktPage() {
  return (
    <>
      <SeoSchema schema={seo.kontakt.schema} />

      {/* Hero Banner */}
      <section className="relative min-h-[320px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/external-new/vrtanie-studni06.jpg"
            alt="Kontakt - vŕtanie studní"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(182,106,47,0.35),transparent_40%),linear-gradient(112deg,rgba(10,8,7,0.9)_0%,rgba(22,18,14,0.82)_48%,rgba(45,32,22,0.62)_100%)]" />
        </div>
        <div className="relative z-10 max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 pt-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Kontakt
          </h1>
        </div>
      </section>

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-6">
              MQM stavebno obchodná spoločnosť s.r.o.
            </h2>

            <div className="bg-gray-light rounded-md p-6 mb-8">

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">Kontaktná osoba</p>
                    <p className="font-medium text-dark">Matúš Králik</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">Telefón</p>
                    <a
                      href="tel:+421907872591"
                      className="font-medium text-primary hover:text-primary-dark transition-colors text-lg"
                    >
                      0907 872 591
                    </a>
                    <a
                      href="tel:+421902681203"
                      className="block font-medium text-primary hover:text-primary-dark transition-colors text-lg"
                    >
                      0902 681 203
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a
                      href="mailto:kralik.mato@gmail.com"
                      className="font-medium text-primary hover:text-primary-dark transition-colors"
                    >
                      kralik.mato@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">Adresa</p>
                    <p className="font-medium text-dark">
                      Vimperská 938/5
                      <br />
                      962 12 Detva
                      <br />
                      Slovenská republika
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">IČO</p>
                    <p className="font-medium text-dark">47440678</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 font-medium">
                  Sme platcami DPH
                </p>
              </div>
            </div>

          </div>

          {/* Google Maps */}
          <div className="rounded-md overflow-hidden shadow-[0_2px_20px_-4px_rgba(0,0,0,0.1)] h-[500px]">
            <iframe
              src="https://maps.google.com/maps?q=Vimpersk%C3%A1+938%2F5%2C+962+12+Detva%2C+Slovensko&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa - Detva, Slovensko"
            />
          </div>
        </div>
      </div>
    </>
  );
}
