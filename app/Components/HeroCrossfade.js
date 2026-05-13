"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";

const HERO_WIDTH = 1920;
const HERO_HEIGHT = 1080;
const SIZES = "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 42rem";

function normalizeSlides(images, fallbackAlt) {
  if (!images?.length) return [];
  return images.map((entry, i) => {
    if (typeof entry === "string") {
      return {
        src: entry,
        alt: fallbackAlt || `Architecture photography ${i + 1} for RK Architect, P.A.`,
      };
    }
    return {
      src: entry.src,
      alt: entry.alt || fallbackAlt || `Architecture photography ${i + 1} for RK Architect, P.A.`,
    };
  });
}

/**
 * Crossfades hero slides. Pass `images` as strings or `{ src, alt }` for descriptive alts.
 * Uses next/image for responsive WebP/AVIF; non-first slides lazy-load.
 */
export default function HeroCrossfade({
  images,
  duration = 2000,
  timingFunction = "ease-in-out",
  style = {},
  alt = "",
  zoomDurationSec = 10,
}) {
  const slides = useMemo(() => normalizeSlides(images, alt), [images, alt]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return undefined;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 12000);
    return () => clearInterval(interval);
  }, [slides.length]);

  if (!slides.length) return null;

  return (
    <div className="relative aspect-[16/9] w-full max-h-[70vh] overflow-hidden bg-black">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          width={HERO_WIDTH}
          height={HERO_HEIGHT}
          sizes={SIZES}
          alt={slide.alt}
          priority={i === 0}
          loading={i === 0 ? "eager" : "lazy"}
          className="absolute left-0 top-0 h-full w-full object-cover"
          style={{
            opacity: i === index ? 1 : 0,
            transition: `opacity ${duration}ms ${timingFunction}`,
            animation: i === index ? `heroZoomInOut ${zoomDurationSec}s ease-in-out infinite` : "none",
            pointerEvents: "none",
            ...style,
          }}
        />
      ))}
    </div>
  );
}
