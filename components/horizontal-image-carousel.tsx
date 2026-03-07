"use client";

import Image from "next/image";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { siteConfig } from "../app.config";

type HorizontalImageCarouselProps = {
  images: string[];
};

export function HorizontalImageCarousel({ images }: HorizontalImageCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: siteConfig.carousel.horizontalSwipeDelay, stopOnInteraction: false })
  );

  return (
    <div className="mx-auto w-full max-w-5xl px-8 pb-12">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((src, idx) => (
            <CarouselItem key={`${src}-${idx}`} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden border-slate-200/50 bg-white/40 shadow-soft backdrop-blur-sm">
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    <div className="relative h-full w-full rounded-md overflow-hidden">
                      <Image 
                        src={src} 
                        alt={`Memory ${idx + 1}`} 
                        fill 
                        className="object-cover transition-transform duration-500 hover:scale-105" 
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious className="bg-white/70 backdrop-blur hover:bg-white" />
          <CarouselNext className="bg-white/70 backdrop-blur hover:bg-white" />
        </div>
      </Carousel>
    </div>
  );
}
