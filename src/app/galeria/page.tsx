import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Fotogaléria",
  description:
    "Fotogaléria našich prác - vŕtanie studní po celom Slovensku. Pozrite si naše referencie a realizácie.",
};

const galleryImages = [
  { src: "/images/gallery/IMG_7514.jpg", alt: "Vŕtanie studní - realizácia 2022" },
  { src: "/images/gallery/IMG_7515.jpg", alt: "Vŕtanie studní - realizácia 2022" },
  { src: "/images/gallery/IMG_7442.jpg", alt: "Vŕtanie studní - realizácia 2022" },
  { src: "/images/gallery/20150812_121108.jpg", alt: "Vŕtanie studní - realizácia 2015" },
  { src: "/images/gallery/20150812_121112.jpg", alt: "Vŕtanie studní - realizácia 2015" },
  { src: "/images/gallery/20150813_100517.jpg", alt: "Vŕtanie studní - realizácia 2015" },
  { src: "/images/gallery/20150813_100600.jpg", alt: "Vŕtanie studní - realizácia 2015" },
  { src: "/images/gallery/20150813_104619.jpg", alt: "Vŕtanie studní - realizácia 2015" },
  { src: "/images/gallery/20150813_104720.jpg", alt: "Vŕtanie studní - realizácia 2015" },
  { src: "/images/gallery/20160711_151951.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160719_165843.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160720_115757.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160720_115836.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160720_115837.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160720_115843.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160720_115847.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160720_115849.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160720_151734.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160720_151738.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160720_151748.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160720_151831.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160720_151834.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160720_151836.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160720_151843.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160720_151844.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160720_151846.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160720_151849.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160909_081733.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160909_081803.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160909_081806.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160909_081809.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160909_082109.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160909_082121.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/20160909_082124.jpg", alt: "Vŕtanie studní - realizácia 2016" },
  { src: "/images/gallery/vrtanie-studni-1-1.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-2-1.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-3-1.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-4-1.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-5-1.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-6-1.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-7-1.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-8-1.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-9.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-13.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-14.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-15.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-16.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-17.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-18.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-19.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-20.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-21.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-22.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-23.jpg", alt: "Vŕtanie studní - referencia" },
  { src: "/images/gallery/vrtanie-studni-24.jpg", alt: "Vŕtanie studní - referencia" },
];

export default function GaleriaPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary py-16 pt-20">
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
