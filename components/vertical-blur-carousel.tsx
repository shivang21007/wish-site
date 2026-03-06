"use client";

import Image from "next/image";

type VerticalBlurCarouselProps = {
  images: string[];
};

function ImageStrip({ images, reverse = false }: { images: string[]; reverse?: boolean }) {
  const list = [...images, ...images];

  return (
    <div className="relative h-[72vh] w-[32%] overflow-hidden rounded-3xl bg-white/30 shadow-soft backdrop-blur-sm">
      <div
        className="flex flex-col gap-4 p-3"
        style={{
          animation: `marqueeUp ${reverse ? 26 : 22}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal"
        }}
      >
        {list.map((src, index) => (
          <div key={`${src}-${index}`} className="relative h-36 w-full overflow-hidden rounded-2xl">
            <Image src={src} alt="Anniversary memory" fill className="object-cover" />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white via-white/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </div>
  );
}

export function VerticalBlurCarousel({ images }: VerticalBlurCarouselProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden items-center justify-center gap-4 px-6 md:flex">
      <ImageStrip images={images.slice(0, 6)} />
      <ImageStrip images={images.slice(1, 7)} reverse />
      <ImageStrip images={images.slice(2, 8)} />
    </div>
  );
}
