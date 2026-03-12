import type { Viewport } from "next";
import { Merriweather, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import OptInPopup from "@/components/OptInPopup";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#5891e8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className={`${sourceSans.variable} ${merriweather.variable} antialiased font-sans`}>
        <SmoothScroll>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <OptInPopup />
        </SmoothScroll>
      </body>
    </html>
  );
}
