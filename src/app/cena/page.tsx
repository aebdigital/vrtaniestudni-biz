import type { Metadata } from "next";
import Image from "next/image";
import SeoSchema from "@/components/SeoSchema";
import { seo, toMetadata } from "@/lib/seo";

export const metadata: Metadata = toMetadata(seo.cena);

export default function CenaPage() {
  return (
    <>
      <SeoSchema schema={seo.cena.schema} />

      {/* Hero Banner */}
      <section className="relative min-h-[320px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/external-new/vrtanie-studni01.jpg"
            alt="Cena vŕtanej studne"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(182,106,47,0.35),transparent_40%),linear-gradient(112deg,rgba(10,8,7,0.9)_0%,rgba(22,18,14,0.82)_48%,rgba(45,32,22,0.62)_100%)]" />
        </div>
        <div className="relative z-10 max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 pt-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Cena
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Cena vŕtanej studne sa pohybuje od 65 eur v závislosti od geologických podlaží vrtu.
              </p>
              <p>
                Vŕtanie studní realizujeme na strednom Slovensku, cestu neúčtujeme!
              </p>
              <p>
                Pre presnú cenovú ponuku nás prosím neváhajte kontaktovať na mailovej adrese{" "}
                <a href="mailto:kralik.mato@gmail.com" className="text-primary hover:text-primary-dark underline">
                  kralik.mato@gmail.com
                </a>
                , alebo telefonicky na čísle:{" "}
                <a href="tel:+421907872591" className="text-primary hover:text-primary-dark underline">
                  0907 872 591
                </a>
                {" "}alebo{" "}
                <a href="tel:+421902681203" className="text-primary hover:text-primary-dark underline">
                  0902 681 203
                </a>
                .
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/gallery/external-new/vrtanie-studni03.jpg"
                alt="Vŕtanie studní - cena"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
