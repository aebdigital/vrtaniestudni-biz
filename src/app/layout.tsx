import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "Vŕtanie studní | MQM stavebno obchodná spoločnosť",
    template: "%s | Vŕtanie studní",
  },
  description:
    "Vŕtanie studní lacno. Dopravu neúčtujeme! Garancia nájdenia vody. Profesionálne vŕtanie studní po celom Slovensku od 65 EUR za 1 bm.",
  keywords: [
    "vŕtanie studní",
    "studňa",
    "vŕtaná studňa",
    "vŕtanie studní cena",
    "studňa na kľúč",
    "voda",
    "podzemná voda",
    "Slovensko",
    "Detva",
  ],
  openGraph: {
    title: "Vŕtanie studní | MQM stavebno obchodná spoločnosť",
    description:
      "Vŕtanie studní lacno. Dopravu neúčtujeme! Garancia nájdenia vody.",
    type: "website",
    locale: "sk_SK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className={`${montserrat.variable} antialiased font-sans`}>
        <SmoothScroll>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
