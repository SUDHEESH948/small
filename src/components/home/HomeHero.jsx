import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Clock,
  Film,
  Utensils,
} from "lucide-react";

const HERO_SLIDES = [
  {
    url: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1920&q=80",
    fallback: "/images/hero-1600.webp",
    badge: "Welcome to S Mall",
    alt: "Mall interior",
  },
  {
    url: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1920&q=80",
    fallback: "/images/shopping.webp",
    badge: "Shopping",
    alt: "Shopping area",
  },
  {
    url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80",
    fallback: "/images/dining.webp",
    badge: "Food & Dining",
    alt: "Restaurant and dining area",
  },
  {
    url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80",
    fallback: "/images/entertainment.webp",
    badge: "Movies & Entertainment",
    alt: "Cinema interior",
  },
];

export default function HomeHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((index) =>
      index === 0 ? HERO_SLIDES.length - 1 : index - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((index) => (index + 1) % HERO_SLIDES.length);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative flex min-h-[85vh] sm:min-h-screen w-full flex-col justify-between overflow-hidden bg-slate-900">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={HERO_SLIDES[currentIndex].url}
              alt={HERO_SLIDES[currentIndex].alt}
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = HERO_SLIDES[currentIndex].fallback;
              }}
              className="h-full w-full object-cover"
            />

            {/* Soft overlays for readable text */}
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main content */}
      <div className="relative z-10 my-auto w-full px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl space-y-6 sm:space-y-7">
            {/* Simple location label */}
            <motion.div
              key={`badge-${currentIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-4 py-2 text-sm text-white backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#F9B00C]" />
              <span>{HERO_SLIDES[currentIndex].badge}</span>
              <span className="text-white/50">·</span>
              <span className="text-white/80">Edakkara</span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                Welcome to
                <br />
                <span className="text-[#F9B00C]">S Mall.</span>
              </h1>
            </motion.div>

            {/* Natural, straightforward description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-xl text-base font-normal leading-relaxed text-white/90 sm:text-lg"
            >
              Shop, enjoy a meal, watch a movie, and spend time with family at S
              Mall, Edakkara.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <button
                type="button"
                onClick={() => scrollToSection("mall-highlights")}
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#F9B00C] px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-[#e9a60b] active:scale-[0.98]"
              >
                <span>Explore S Mall</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("plan-your-visit")}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/50 bg-black/20 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15 active:scale-[0.98]"
              >
                <Clock className="h-4 w-4" />
                <span>Plan Your Visit</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Simple information bar */}
      <div className="relative z-10 w-full border-t border-white/15 bg-black/40 py-4 backdrop-blur-sm sm:py-5">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 text-white sm:grid-cols-3 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
              <Film className="h-5 w-5 text-[#F9B00C]" />
            </div>
            <div>
              <p className="text-xs text-white/65">Cinema</p>
              <p className="text-sm font-semibold">Magic Frames Multiplex</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
              <Utensils className="h-5 w-5 text-[#F9B00C]" />
            </div>
            <div>
              <p className="text-xs text-white/65">Food & Dining</p>
              <p className="text-sm font-semibold">KFC & Food Court</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
              <Clock className="h-5 w-5 text-[#F9B00C]" />
            </div>
            <div>
              <p className="text-xs text-white/65">Opening Hours</p>
              <p className="text-sm font-semibold">10 AM – 10 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Previous and next controls */}
      <div className="pointer-events-none absolute inset-x-4 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-between sm:flex md:inset-x-8">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous slide"
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-slate-900"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next slide"
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-slate-900"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-[190px] left-0 right-0 z-20 flex justify-center gap-2 sm:bottom-[120px]">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.badge}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : undefined}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-6 bg-[#F9B00C]"
                : "w-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
