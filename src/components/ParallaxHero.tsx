"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface ParallaxHeroProps {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
}

export default function ParallaxHero({
  imageSrc,
  imageAlt,
  children,
}: ParallaxHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;

    let rafId: number;

    function onScroll() {
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const offset = scrollY * 0.2;
        image!.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[680px] flex items-center overflow-hidden"
    >
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(182,106,47,0.35),transparent_40%),linear-gradient(112deg,rgba(10,8,7,0.9)_0%,rgba(22,18,14,0.82)_48%,rgba(45,32,22,0.62)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:88px_88px] opacity-[0.12]" />
      </div>
      {children}
    </section>
  );
}
