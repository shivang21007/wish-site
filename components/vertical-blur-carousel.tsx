"use client";

import Image from "next/image";
import { siteConfig } from "../app.config";

type VerticalBlurCarouselProps = {
  images: string[];
};

function ImageStrip({ 
  images, 
  reverse = false, 
  speed = 22,
  className = ""
}: { 
  images: string[]; 
  reverse?: boolean;
  speed?: number;
  className?: string;
}) {
  const list = [...images, ...images, ...images];

  return (
    <div className={`relative h-screen w-1/3 overflow-hidden bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/5 ${className}`}>
      <div
        className="flex flex-col gap-4 p-3"
        style={{
          animation: `marqueeUp ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal"
        }}
      >
        {list.map((src, index) => (
          <div key={`${src}-${index}`} className="relative h-32 sm:h-48 md:h-64 w-full overflow-hidden rounded-xl opacity-60 transition-opacity duration-500">
            <Image src={src} alt="memory" fill className="object-cover grayscale transition-all duration-700" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function VerticalBlurCarousel({ images }: VerticalBlurCarouselProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-40 mix-blend-multiply dark:mix-blend-screen scale-[1.05]">
      <div className="pointer-events-auto flex items-center justify-center gap-2 sm:gap-6 w-full h-full max-w-6xl px-4">
        <ImageStrip images={images} speed={siteConfig.carousel.verticalSpeeds.leftStrip} />
        <ImageStrip images={images.slice(2, 6).concat(images.slice(0, 2))} reverse speed={siteConfig.carousel.verticalSpeeds.centerStrip} />
        <ImageStrip images={images.slice(4, 8).concat(images.slice(0, 4))} speed={siteConfig.carousel.verticalSpeeds.rightStrip} className="hidden sm:block" />
      </div>
      
      {/* Edge Gradients for seamless blending into background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[25vh] bg-gradient-to-b from-white dark:from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-white dark:from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[20vw] bg-gradient-to-r from-white dark:from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[20vw] bg-gradient-to-l from-white dark:from-black to-transparent" />
    </div>
  );
}
