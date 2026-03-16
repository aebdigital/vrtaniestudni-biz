import type { Metadata } from "next";
import homeSchema from "@/lib/seo-schemas/home.json";
import informacieSchema from "@/lib/seo-schemas/informacie.json";
import fotogaleriaSchema from "@/lib/seo-schemas/fotogaleria.json";
import cenaSchema from "@/lib/seo-schemas/cena.json";
import kontaktSchema from "@/lib/seo-schemas/kontakt.json";
import mesta1Schema from "@/lib/seo-schemas/mesta1.json";
import mesta2Schema from "@/lib/seo-schemas/mesta2.json";

export type SeoConfig = {
  title: string;
  description?: string;
  robots: string;
  canonical: string;
  ogLocale: string;
  ogSiteName: string;
  ogType: "website" | "article";
  ogTitle: string;
  ogDescription?: string;
  ogUrl: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription?: string;
  schema: Record<string, unknown>;
};

const shared = {
  robots: "max-image-preview:large",
  ogLocale: "sk_SK",
  ogSiteName: "studne.biz",
  twitterCard: "summary",
} as const;

export const seo = {
  home: {
    ...shared,
    title: "Vŕtanie studní Banská Bystrica Zvolen Detva Brezno",
    description: "Vŕtanie studní LACNO. Dopravu neúčtujeme! Garancia nájdenia vody.",
    canonical: "https://www.vrtaniestudni.biz/",
    ogType: "website",
    ogTitle: "Vŕtanie studní Banská Bystrica Zvolen Detva Brezno",
    ogDescription: "Vŕtanie studní LACNO. Dopravu neúčtujeme! Garancia nájdenia vody.",
    ogUrl: "https://www.vrtaniestudni.biz/",
    twitterTitle: "Vŕtanie studní Banská Bystrica Zvolen Detva Brezno",
    twitterDescription: "Vŕtanie studní LACNO. Dopravu neúčtujeme! Garancia nájdenia vody.",
    schema: homeSchema as Record<string, unknown>,
  },
  informacie: {
    ...shared,
    title: "Vŕtanie studní informácie o vŕtaní studní",
    description: "Vŕtanie studní informácie o vŕtaní studní",
    canonical: "https://www.vrtaniestudni.biz/informacie-o-vrtani-studni/",
    ogType: "article",
    ogTitle: "Vŕtanie studní informácie o vŕtaní studní",
    ogDescription: "Vŕtanie studní informácie o vŕtaní studní",
    ogUrl: "https://www.vrtaniestudni.biz/informacie-o-vrtani-studni/",
    twitterTitle: "Vŕtanie studní informácie o vŕtaní studní",
    twitterDescription: "Vŕtanie studní informácie o vŕtaní studní",
    schema: informacieSchema as Record<string, unknown>,
  },
  fotogaleria: {
    ...shared,
    title: "Vŕtanie studní fotogaléria",
    description: "Vŕtanie studní fotogaléria",
    canonical: "https://www.vrtaniestudni.biz/vrtanie-studni-referencie-fotogaleria/",
    ogType: "article",
    ogTitle: "Vŕtanie studní fotogaléria",
    ogDescription: "Vŕtanie studní fotogaléria",
    ogUrl: "https://www.vrtaniestudni.biz/vrtanie-studni-referencie-fotogaleria/",
    twitterTitle: "Vŕtanie studní fotogaléria",
    twitterDescription: "Vŕtanie studní fotogaléria",
    schema: fotogaleriaSchema as Record<string, unknown>,
  },
  cena: {
    ...shared,
    title: "Vŕtanie studní cena cenník",
    description: "Vŕtanie studní cena cenník",
    canonical: "https://www.vrtaniestudni.biz/vrtanie-studni-cena/",
    ogType: "article",
    ogTitle: "Vŕtanie studní cena cenník",
    ogDescription: "Vŕtanie studní cena cenník",
    ogUrl: "https://www.vrtaniestudni.biz/vrtanie-studni-cena/",
    twitterTitle: "Vŕtanie studní cena cenník",
    twitterDescription: "Vŕtanie studní cena cenník",
    schema: cenaSchema as Record<string, unknown>,
  },
  kontakt: {
    ...shared,
    title: "Vŕtanie studní kontakt",
    description: "Vŕtanie studní kontakt",
    canonical: "https://www.vrtaniestudni.biz/vrtanie-studni-kontakt/",
    ogType: "article",
    ogTitle: "Vŕtanie studní kontakt",
    ogDescription: "Vŕtanie studní kontakt",
    ogUrl: "https://www.vrtaniestudni.biz/vrtanie-studni-kontakt/",
    twitterTitle: "Vŕtanie studní kontakt",
    twitterDescription: "Vŕtanie studní kontakt",
    schema: kontaktSchema as Record<string, unknown>,
  },
  mesta1: {
    ...shared,
    title: "Vŕtanie studní Žiar nad Hronom, Žarnovica, Banská Štiavnica",
    description: "Vŕtanie studní Žiar nad Hronom, Žarnovica, Banská Štiavnica",
    canonical: "https://www.vrtaniestudni.biz/mesta1/",
    ogType: "article",
    ogTitle: "Vŕtanie studní Žiar nad Hronom, Žarnovica, Banská Štiavnica",
    ogDescription: "Vŕtanie studní Žiar nad Hronom, Žarnovica, Banská Štiavnica",
    ogUrl: "https://www.vrtaniestudni.biz/mesta1/",
    twitterTitle: "Vŕtanie studní Žiar nad Hronom, Žarnovica, Banská Štiavnica",
    twitterDescription: "Vŕtanie studní Žiar nad Hronom, Žarnovica, Banská Štiavnica",
    schema: mesta1Schema as Record<string, unknown>,
  },
  mesta2: {
    ...shared,
    title: "Vŕtanie studní Lučenec, Rimavská Sobota",
    description: "Vŕtanie studní Lučenec, Rimavská Sobota",
    canonical: "https://www.vrtaniestudni.biz/mesta2/",
    ogType: "article",
    ogTitle: "Vŕtanie studní Lučenec, Rimavská Sobota",
    ogDescription: "Vŕtanie studní Lučenec, Rimavská Sobota",
    ogUrl: "https://www.vrtaniestudni.biz/mesta2/",
    twitterTitle: "Vŕtanie studní Lučenec, Rimavská Sobota",
    twitterDescription: "Vŕtanie studní Lučenec, Rimavská Sobota",
    schema: mesta2Schema as Record<string, unknown>,
  },
} as const satisfies Record<string, SeoConfig>;

export function toMetadata(config: SeoConfig): Metadata {
  const resolvedOgType = config.ogType === "article" ? "article" : "website";

  return {
    title: config.title,
    description: config.description || undefined,
    robots: config.robots,
    alternates: {
      canonical: config.canonical,
    },
    openGraph: {
      locale: config.ogLocale,
      siteName: config.ogSiteName,
      type: resolvedOgType,
      title: config.ogTitle,
      description: config.ogDescription || undefined,
      url: config.ogUrl,
    },
    twitter: {
      card: config.twitterCard as "summary",
      title: config.twitterTitle,
      description: config.twitterDescription || undefined,
    },
  };
}
