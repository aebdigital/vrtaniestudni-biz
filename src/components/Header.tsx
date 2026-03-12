"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Vŕtanie studní" },
  { href: "/informacie-o-vrtani-studni", label: "Informácie o vŕtaní studní" },
  { href: "/vrtanie-studni-referencie-fotogaleria", label: "Fotogaléria" },
  { href: "/vrtanie-studni-cena", label: "Cena" },
  { href: "/vrtanie-studni-kontakt", label: "Kontakt" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navItemClass = (href: string) =>
    `px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all ${
      pathname === href
        ? "text-white border-b border-primary"
        : "text-white/75 hover:text-white"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[linear-gradient(180deg,rgba(18,15,13,0.95)_0%,rgba(18,15,13,0.88)_70%,rgba(18,15,13,0.72)_100%)] backdrop-blur-xl">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center shrink-0 rounded-md border border-white/15 bg-black/20 px-3 py-2"
          >
            <Image
              src="/images/logo-stavebne-prace.png"
              alt="MQM stavebno obchodná spoločnosť s.r.o."
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={navItemClass(item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="tel:+421907872591"
              className="flex items-center gap-2 rounded-md border border-primary/45 bg-primary/20 px-4 py-2 text-white font-bold text-sm uppercase tracking-[0.1em] hover:bg-primary/35"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              0907 872 591
            </a>
            <a
              href="tel:+421902681203"
              className="hidden lg:flex items-center gap-2 rounded-md border border-primary/45 bg-primary/20 px-4 py-2 text-white font-bold text-sm uppercase tracking-[0.1em] hover:bg-primary/35"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              0902 681 203
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md border border-white/20 bg-black/25 p-2 text-white hover:text-white/70"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Otvoriť menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-biz"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav-biz"
        className={`lg:hidden fixed inset-0 z-[70] transition-opacity duration-300 ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/65 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Zavrieť menu"
        />

        <aside
          className={`absolute left-0 top-0 h-dvh w-[90vw] max-w-sm bg-[linear-gradient(155deg,#171311,#241710)] border-r border-primary/30 shadow-[0_32px_70px_-36px_rgba(0,0,0,0.95)] transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <Image
                src="/images/logo-stavebne-prace.png"
                alt="MQM stavebno obchodná spoločnosť s.r.o."
                width={170}
                height={56}
                className="h-11 w-auto"
              />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md border border-white/20 bg-white/10 p-2 text-white"
                aria-label="Zavrieť menu"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="px-5 py-5 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-md px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] transition-colors ${
                    pathname === item.href
                      ? "text-white bg-primary/35"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto border-t border-white/10 px-5 py-5 space-y-2">
              <a
                href="tel:+421907872591"
                className="flex items-center gap-2 rounded-md border border-primary/35 bg-primary/20 px-4 py-3 text-white font-bold text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                0907 872 591
              </a>
              <a
                href="tel:+421902681203"
                className="flex items-center gap-2 rounded-md border border-primary/35 bg-primary/20 px-4 py-3 text-white font-bold text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                0902 681 203
              </a>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
