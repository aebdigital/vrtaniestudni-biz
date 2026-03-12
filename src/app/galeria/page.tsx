import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import SeoSchema from "@/components/SeoSchema";
import { seo, toMetadata } from "@/lib/seo";

export const metadata: Metadata = toMetadata(seo.fotogaleria);

const galleryImages = [
  { src: "/images/gallery/IMG_7442.jpg", alt: "Vŕtanie studní - realizácia 2022" },
  { src: "/images/gallery/20150812_121112.jpg", alt: "Vŕtanie studní - realizácia 2015" },
  { src: "/images/gallery/20150813_100517.jpg", alt: "Vŕtanie studní - realizácia 2015" },
  { src: "/images/gallery/20150813_100600.jpg", alt: "Vŕtanie studní - realizácia 2015" },
  { src: "/images/gallery/20150813_104619.jpg", alt: "Vŕtanie studní - realizácia 2015" },
  { src: "/images/gallery/20150813_104720.jpg", alt: "Vŕtanie studní - realizácia 2015" },
  { src: "/images/gallery/20160711_151951.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160720_115757.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160720_115847.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160720_151834.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/vrtanie-studni-1-1.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-2-1.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-3-1.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-5-1.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-6-1.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-13.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-14.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-15.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-16.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-17.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-18.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-21.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-23.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/external-new/vrtanie-studni01.jpg", alt: "Vŕtanie studní - externá fotografia" },
  { src: "/images/gallery/external-new/vrtanie-studni03.jpg", alt: "Vŕtanie studní - externá fotografia" },
  { src: "/images/gallery/external-new/vrtanie-studni04.jpg", alt: "Vŕtanie studní - externá fotografia" },
  { src: "/images/gallery/external-new/vrtanie-studni05.jpg", alt: "Vŕtanie studní - externá fotografia" },
  { src: "/images/gallery/external-new/vrtanie-studni06.jpg", alt: "Vŕtanie studní - externá fotografia" },
  { src: "/images/gallery/external-new/vrtanie-studni07.jpg", alt: "Vŕtanie studní - externá fotografia" },
  { src: "/images/gallery/external-new/vrtanie-studni10.jpg", alt: "Vŕtanie studní - externá fotografia" },
  { src: "/images/gallery/external-new/vrtanie-studni11.jpg", alt: "Vŕtanie studní - externá fotografia" },
  { src: "/images/gallery/external-new/vrtanie-studni12.jpg", alt: "Vŕtanie studní - externá fotografia" },
];

export default function GaleriaPage() {
  return (
    <>
      <SeoSchema schema={seo.fotogaleria.schema} />

      {/* Hero Banner */}
      <section className="hero-band py-16 pt-24">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Fotogaléria
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            Pozrite si naše referencie a realizácie vŕtania studní po celom
            Slovensku
          </p>
        </div>
      </section>

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <GalleryGrid images={galleryImages} />
      </div>
    </>
  );
}
