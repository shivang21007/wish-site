"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PartyFlares } from "@/components/party-flares";

type IntroSequenceProps = {
  previewImages: string[];
  onComplete: () => void;
};

const STEPS = {
  firstText: 0,
  secondText: 1,
  emoji: 2,
  popups: 3,
  finalWish: 4
} as const;

export function IntroSequence({ previewImages, onComplete }: IntroSequenceProps) {
  const [step, setStep] = useState<number>(STEPS.firstText);
  const [visiblePopups, setVisiblePopups] = useState<number>(0);

  const popupImages = useMemo(() => previewImages.slice(0, 4), [previewImages]);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    timers.push(setTimeout(() => setStep(STEPS.secondText), 2200));
    timers.push(setTimeout(() => setStep(STEPS.emoji), 4700));
    timers.push(setTimeout(() => setStep(STEPS.popups), 6000));
    timers.push(setTimeout(() => setStep(STEPS.finalWish), 9800));
    timers.push(setTimeout(onComplete, 12300));

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
    }, 700);

    return () => clearInterval(timer);
  }, [step, popupImages.length]);

  return (
    <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-4 text-center">
      <PartyFlares active={step >= STEPS.popups} />

      {step === STEPS.firstText && (
        <h1 className="text-enter text-2xl font-semibold text-slate-800 md:text-4xl">
          Today is 6th March 2026
        </h1>
      )}

      {step === STEPS.secondText && (
        <h2 className="text-enter max-w-3xl text-xl font-medium text-slate-700 md:text-3xl">
          Guess what is special just before one year ago?
        </h2>
      )}

      {step === STEPS.emoji && <p className="fade-pop text-7xl">🤔</p>}

      {step === STEPS.popups && (
        <div className="grid w-full max-w-3xl grid-cols-2 gap-3 sm:gap-5">
          {popupImages.map((src, idx) => (
            <Card
              key={src}
              className={`overflow-hidden border-slate-200 bg-white/75 backdrop-blur transition-opacity duration-500 ${
                idx < visiblePopups ? "opacity-100" : "opacity-0"
              }`}
            >
              <CardContent className="p-0">
                <div className="relative h-36 sm:h-48">
                  <Image src={src} alt={`Celebration ${idx + 1}`} fill className="object-cover" priority={idx === 0} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {step === STEPS.finalWish && (
        <div className="fade-pop space-y-3">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Celebration Time</p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">Happy Anniversary Bhaiya and Bhabhi</h2>
        </div>
      )}
    </div>
  );
}
