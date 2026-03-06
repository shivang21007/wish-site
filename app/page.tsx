"use client";

import { useMemo, useState } from "react";
import { FloatingFlowers } from "@/components/floating-flowers";
import { HorizontalImageCarousel } from "@/components/horizontal-image-carousel";
import { IntroSequence } from "@/components/intro-sequence";
import { VerticalBlurCarousel } from "@/components/vertical-blur-carousel";
import { PartyFlares } from "@/components/party-flares";

const IMAGES = [
  "/images/memory-1.svg",
  "/images/memory-2.svg",
  "/images/memory-3.svg",
  "/images/memory-4.svg",
  "/images/memory-5.svg",
  "/images/memory-6.svg",
  "/images/memory-7.svg",
  "/images/memory-8.svg"
];

export default function HomePage() {
  const [introDone, setIntroDone] = useState(false);
  const images = useMemo(() => IMAGES, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="dotted-bg" />
      <div className="dark-shade" />
      <FloatingFlowers />

      {!introDone ? (
        <IntroSequence previewImages={images} onComplete={() => setIntroDone(true)} />
      ) : (
        <section className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-8 md:gap-10 md:px-6 md:py-12">
          <VerticalBlurCarousel images={images} />
          <PartyFlares active />

          <header className="w-full max-w-4xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-sm">
              6 March 2026
            </p>
            <h1 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Happy Anniversary Shubham Bhaiya and Durga Bhabhi
            </h1>
          </header>

          <HorizontalImageCarousel images={images} />
        </section>
      )}
    </main>
  );
}
