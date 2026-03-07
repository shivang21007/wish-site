"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PartyFlares } from "@/components/party-flares";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "../app.config";

type IntroSequenceProps = {
  previewImages: string[];
  onComplete: () => void;
};

const STEPS = {
  firstText: 0,
  secondText: 1,
  emoji: 2,
  popups: 3,
  finalWish: 4,
  done: 5,
} as const;

export function IntroSequence({ previewImages, onComplete }: IntroSequenceProps) {
  const [step, setStep] = useState<number>(STEPS.firstText);
  const [visiblePopups, setVisiblePopups] = useState<number>(0);

  const popupImages = useMemo(() => previewImages.slice(0, 4), [previewImages]);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Timing sequence for animations from config
    timers.push(setTimeout(() => setStep(STEPS.secondText), siteConfig.intro.timings.secondTextStart));
    timers.push(setTimeout(() => setStep(STEPS.emoji), siteConfig.intro.timings.emojiStart)); 
    timers.push(setTimeout(() => setStep(STEPS.popups), siteConfig.intro.timings.popupsStart));
    timers.push(setTimeout(() => setStep(STEPS.finalWish), siteConfig.intro.timings.finalWishStart));
    timers.push(setTimeout(() => {
      setStep(STEPS.done);
      onComplete();
    }, siteConfig.intro.timings.introComplete));

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [onComplete]);

  useEffect(() => {
    if (step !== STEPS.popups) {
      return;
    }

    const timer = setInterval(() => {
      setVisiblePopups((prev) => {
        if (prev >= popupImages.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 600); // 600ms between each popup

    return () => clearInterval(timer);
  }, [step, popupImages.length]);

  return (
    <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-4 text-center">
      <PartyFlares active={step >= STEPS.popups} />

      <AnimatePresence mode="wait">
        {step === STEPS.firstText && (
          <motion.h1
            key="firstText"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-2xl font-semibold text-slate-800 md:text-5xl"
          >
            {siteConfig.intro.firstText}
          </motion.h1>
        )}

        {step === STEPS.secondText && (
          <motion.h2
            key="secondText"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-2xl font-medium text-slate-700 md:text-4xl"
          >
            {siteConfig.intro.secondText}
          </motion.h2>
        )}

        {step === STEPS.emoji && (
          <motion.p
            key="emoji"
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="text-7xl md:text-9xl"
          >
            {siteConfig.intro.thinkingEmoji}
          </motion.p>
        )}

        {step === STEPS.popups && (
          <motion.div
            key="popups"
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="grid w-full max-w-3xl grid-cols-2 gap-3 sm:gap-5"
          >
            {popupImages.map((src, idx) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ 
                  opacity: idx < visiblePopups ? 1 : 0, 
                  scale: idx < visiblePopups ? 1 : 0.5,
                  y: idx < visiblePopups ? 0 : 50
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
              >
                <Card className="overflow-hidden border-slate-200 bg-white/75 shadow-lg backdrop-blur">
                  <CardContent className="p-2 sm:p-3">
                    <div className="relative h-40 sm:h-56">
                      <Image 
                        src={src} 
                        alt={`Celebration ${idx + 1}`} 
                        fill 
                        className="rounded-md object-cover" 
                        priority={idx === 0} 
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {step === STEPS.finalWish && (
          <motion.div
            key="finalWish"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ type: "spring", stiffness: 100, damping: 12 }}
            className="space-y-4"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500 font-bold">{siteConfig.intro.subtitle}</p>
            <h2 className="text-4xl font-extrabold text-slate-900 md:text-6xl drop-shadow-md">
              {siteConfig.intro.finalHeading}
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
