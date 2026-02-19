import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte nás pre vŕtanie studní. MQM stavebno obchodná spoločnosť, s.r.o. Telefón: 0907 872 591, Email: kralik.mato@gmail.com",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary py-16 pt-20">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Kontakt
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            Neváhajte nás kontaktovať. Radi Vám poradíme a pripravíme cenovú
            ponuku.
          </p>
        </div>
      </section>

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-6">
              Kontaktné údaje
            </h2>

            <div className="bg-gray-light rounded-md p-6 mb-8">
              <h3 className="font-bold text-lg text-dark mb-4">
                MQM stavebno obchodná spoločnosť, s.r.o.
              </h3>

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
                      M.R.Štefánika 911/53
                      <br />
                      962 12, Detva
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

            {/* Google Maps */}
            <div className="rounded-md overflow-hidden shadow-[0_2px_20px_-4px_rgba(0,0,0,0.1)] h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10584.98426835783!2d19.41!3d48.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47153a58ac5b3b3f%3A0x400f7d1c69770f0!2sDetva!5e0!3m2!1ssk!2ssk!4v1700000000000!5m2!1ssk!2ssk"
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

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-6">
              Napíšte nám
            </h2>
            <div className="bg-gray-light rounded-md p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
