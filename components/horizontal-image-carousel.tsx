"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HorizontalImageCarouselProps = {
  images: string[];
};

export function HorizontalImageCarousel({ images }: HorizontalImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="mx-auto w-full max-w-3xl px-3 md:px-6">
      <div
        className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 shadow-soft backdrop-blur"
        onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
        onTouchEnd={(event) => {
          if (touchStart === null) {
            return;
          }

          const touchEnd = event.changedTouches[0]?.clientX ?? touchStart;
          const diff = touchStart - touchEnd;

          if (diff > 30) {
            setActiveIndex((prev) => (prev + 1) % images.length);
          } else if (diff < -30) {
            setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
          }

          setTouchStart(null);
        }}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((src, idx) => (
            <div key={`${src}-${idx}`} className="relative h-[300px] min-w-full sm:h-[380px] md:h-[460px]">
              <Image src={src} alt={`Memory ${idx + 1}`} fill className="object-cover" priority={idx === 0} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={`dot-${idx}`}
            aria-label={`Go to image ${idx + 1}`}
            onClick={() => setActiveIndex(idx)}
            className={`h-2.5 rounded-full transition-all ${idx === activeIndex ? "w-7 bg-slate-800" : "w-2.5 bg-slate-400"}`}
          />
        ))}
      </div>
    </div>
  );
}
