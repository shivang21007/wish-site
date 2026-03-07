"use client";

import { useMemo, useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { FloatingFlowers } from "@/components/floating-flowers";
import { HorizontalImageCarousel } from "@/components/horizontal-image-carousel";
import { IntroSequence } from "@/components/intro-sequence";
import { VerticalBlurCarousel } from "@/components/vertical-blur-carousel";
import { PartyFlares } from "@/components/party-flares";
import { siteConfig } from "../app.config";

const IMAGES = siteConfig.images.useCdn
  ? siteConfig.images.cdnUrls
  : Array.from({ length: siteConfig.images.local.totalImages }, (_, i) => `${siteConfig.images.local.basePath}${i + 1}${siteConfig.images.local.extension}`);

export default function HomePage() {
  const [introDone, setIntroDone] = useState(false);
  const images = useMemo(() => IMAGES, []);

  useEffect(() => {
    if (introDone) {
      const duration = siteConfig.theme.confetti.durationMs;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: siteConfig.theme.confetti.colors
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: siteConfig.theme.confetti.colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [introDone]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-white dark:bg-black">
      {/* Aceternity UI Dot Background */}
      <div className={`absolute inset-0 pointer-events-none flex items-center justify-center ${siteConfig.theme.background.lightStyle} ${siteConfig.theme.background.darkStyle}`}>
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none"></div>
      </div>
      
      {/* Existing dark shade overlay */}
      <div className="dark-shade pointer-events-none" />

      {/* Floating Flowers Animation */}
      <FloatingFlowers />

      {/* Continuous Vertical Blur Carousel background (starts after intro) */}
      {introDone && <VerticalBlurCarousel images={images} />}

      {!introDone ? (
        <IntroSequence previewImages={images} onComplete={() => setIntroDone(true)} />
      ) : (
        <section className="relative z-10 flex min-h-screen flex-col items-center justify-start pt-[10vh] gap-8 px-4 pb-12 sm:pt-[15vh]">
          <PartyFlares active />

          {/* Top Header Section */}
          <header className="w-full max-w-5xl text-center space-y-2 mb-4 mt-[-4vh] sm:mt-0">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 sm:text-sm fade-pop">
              {siteConfig.date}
            </p>
            <h1 className="font-romantic text-5xl leading-tight text-slate-900 sm:text-6xl md:text-7xl fade-pop drop-shadow-sm">
              Happy {siteConfig.occasion} <br className="hidden sm:block" />
              <span className={`bg-gradient-to-r ${siteConfig.theme.textGradients.partner1} bg-clip-text text-transparent px-2`}>{siteConfig.names.partner1}</span>
              {siteConfig.names.partner2 && (
                <>
                  <span className="text-slate-500 px-1 font-sans text-3xl sm:text-4xl font-light">{siteConfig.names.separator}</span>
                  <span className={`bg-gradient-to-r ${siteConfig.theme.textGradients.partner2} bg-clip-text text-transparent px-2`}>{siteConfig.names.partner2}</span>
                </>
              )}
            </h1>
          </header>

          {/* Center Swipable Carousel */}
          <div className="flex-1 w-full flex items-center justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <HorizontalImageCarousel images={images} />
          </div>
        </section>
      )}
    </main>
  );
}
