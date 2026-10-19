import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Film, Utensils, Layers } from "lucide-react";

import heroImagePng from "../../assets/homepage/heroimage.png";
import heroJpeg from "../../assets/homepage/hero.jpeg";
import hero2Png from "../../assets/homepage/hero2.png";

const HERO_SLIDES = [
  {
    url: heroImagePng,
    fallback: "/images/heroimage.png",
    badge: "Edakkara's Landmark Mall",
    tagline: "Grand Architecture & Entrance",
    alt: "S Mall Edakkara flagship exterior",
  },
  {
    url: heroJpeg,
    fallback: "/images/hero.jpeg",
    badge: "Shopping & Lifestyle Hub",
    tagline: "Multi-Tier Shopping & Experience Concourse",
    alt: "S Mall shopping concourse",
  },
  {
    url: hero2Png,
    fallback: "/images/hero2.png",
    badge: "Dual Highway Frontage",
    tagline: "State Highway & Malayora Highway Confluence",
    alt: "S Mall Edakkara highway access",
  },
];

export default function HomeHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section className="relative flex min-h-[92vh] w-full flex-col justify-between overflow-hidden bg-slate-950 sm:min-h-screen">
      {/* Full-colour Cinematic Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 6, ease: "linear" },
            }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.url}
              alt={currentSlide.alt}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = currentSlide.fallback;
              }}
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle left gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

        {/* Bottom gradient behind the highlights */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 my-auto mx-auto w-full max-w-7xl px-3 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <div className="max-w-3xl space-y-5 sm:space-y-7">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/40 bg-black/25 px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-white shadow-lg backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#F9B00C]" />

            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#F9B00C]">
              Edakkara's Landmark Mall
            </span>

            <span className="text-white/70">|</span>

            <span className="text-slate-100">Main Road Edakkara</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Discover More
              <br />
              <span className="text-[#F9B00C] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                at S Mall.
              </span>
            </h1>
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl text-base font-medium leading-relaxed text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] sm:text-xl"
          >
            Shopping, entertainment, dining, and memorable experiences — all in
            one premier destination in Edakkara.
          </motion.p>
        </div>
      </div>

      {/* Highlights Bar */}
      <div className="relative z-20 w-full border-t border-white/20 bg-black/10 py-4 backdrop-blur-[2px] sm:py-5">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 text-white sm:grid-cols-2 sm:px-6 md:grid-cols-3 lg:px-8">
          {/* Retail */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/15 text-[#F9B00C]">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-medium text-slate-200">
                Retail Spread
              </div>
              <div className="text-sm font-bold text-white">
                3 Commercial Floors
              </div>
            </div>
          </div>

          {/* Cinema */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/15 text-[#F9B00C]">
              <Film className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-medium text-slate-200">
                Cinema Experience
              </div>
              <div className="text-sm font-bold text-white">
                Magic Frames Multiplex
              </div>
            </div>
          </div>

          {/* Dining */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/15 text-[#F9B00C]">
              <Utensils className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-medium text-slate-200">
                Gastronomy
              </div>
              <div className="text-sm font-bold text-white">
                KFC &amp; Food Court
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
