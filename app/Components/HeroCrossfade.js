"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const HERO_WIDTH = 1920;
const HERO_HEIGHT = 1080;
const SIZES = "(max-width: 640px) 100vw, 42rem";

/**
 * Crossfades between images with the same timing as the former react-crossfade-image usage.
 * Uses next/image for responsive WebP/AVIF and viewport-aware srcset.
 */
export default function HeroCrossfade({
  images,
  duration = 2000,
  timingFunction = "ease-in-out",
  style = {},
  alt = "",
  zoomDurationSec = 10,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 12000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src={images[0]}
        alt=""
        width={HERO_WIDTH}
        height={HERO_HEIGHT}
        sizes={SIZES}
        className="w-full h-auto pointer-events-none opacity-0 select-none"
        aria-hidden
        priority
      />
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          width={HERO_WIDTH}
          height={HERO_HEIGHT}
          sizes={SIZES}
          alt={i === index ? alt : ""}
          aria-hidden={i !== index}
          className="absolute left-0 top-0 w-full h-auto object-cover"
          style={{
            opacity: i === index ? 1 : 0,
            transition: `opacity ${duration}ms ${timingFunction}`,
            animation:
              i === index
                ? `heroZoomInOut ${zoomDurationSec}s ease-in-out infinite`
                : "none",
            pointerEvents: "none",
            ...style,
          }}
        />
      ))}
    </div>
  );
}
