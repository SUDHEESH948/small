
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MALL_IMAGES = [
  {
    url: "/images/hero-1600.webp",
    alt: "Small Mall Grand Atrium",
    label: "Central Galleria",
  },
  {
    url: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1920&q=80",
    alt: "Modern Retail Shopping Corridor",
    label: "North Wing Promenade",
  },
  {
    url: "https://images.unsplash.com/photo-1567449303078-57ad995bd301?auto=format&fit=crop&w=1920&q=80",
    alt: "Commercial Mall Complex Interior",
    label: "South Avenue Plaza",
  },
  {
    url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1920&q=80",
    alt: "Luxury Retail Arcade",
    label: "East Gate Arcade",
  },
];

export default function HomeHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % MALL_IMAGES.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        prevIndex === 0 ? MALL_IMAGES.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % MALL_IMAGES.length
    );
  };

  return (
    <section className="relative h-screen min-h-screen w-full overflow-hidden bg-slate-950">
      {/* Background Slides */}
      {MALL_IMAGES.map((image, index) => {
        const isActive = index === currentIndex;

        return (
          <div
            key={image.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive
                ? "z-10 opacity-100"
                : "pointer-events-none z-0 opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className={`h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />

            {/* Ambient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
            <div className="absolute inset-0 bg-slate-950/20" />
          </div>
        );
      })}

      {/* Slide Location Indicator */}
      <div className="absolute left-6 top-8 z-20 md:left-12">
        <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-[#F9B00C]">
          Featured Mall Complex
        </span>

        <h2 className="text-xl font-black tracking-tight text-white md:text-2xl">
          {MALL_IMAGES[currentIndex].label}
        </h2>
      </div>

      {/* Navigation Arrows */}
      <div className="pointer-events-none absolute inset-x-4 inset-y-0 z-20 flex items-center justify-between md:inset-x-8">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous slide"
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-200 hover:bg-[#F9B00C] hover:text-[#1F2937] active:scale-90"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next slide"
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-200 hover:bg-[#F9B00C] hover:text-[#1F2937] active:scale-90"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Slide Dot Indicators */}
      <div className="absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-2">
        {MALL_IMAGES.map((image, index) => (
          <button
            key={image.url}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : undefined}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "h-2 w-8 bg-[#F9B00C]"
                : "h-2 w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}