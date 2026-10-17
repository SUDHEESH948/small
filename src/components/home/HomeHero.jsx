import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Film, Utensils, Layers } from "lucide-react";

import heroImagePng from "../../assets/homepage/heroimage.png";
import heroJpeg from "../../assets/homepage/hero.jpeg";
import hroic2Jpeg from "../../assets/homepage/hero2.png";

const HERO_SLIDES = [
  {
    url: heroImagePng,
    fallback: "/images/heroimage.png",
    badge: "Edakkara's Landmark Mall",
    tagline: "Grand Architecture & Entrance",
    alt: "S Mall Edakkara Flagship Exterior",
  },
  {
    url: heroJpeg,
    fallback: "/images/hero.jpeg",
    badge: "Shopping & Lifestyle Hub",
    tagline: "Multi-Tier Shopping & Experience Concourse",
    alt: "S Mall Concourse & Shopping",
  },
  {
    url: hroic2Jpeg,
    fallback: "/images/hroic2.jpeg",
    badge: "Dual Highway Frontage",
    tagline: "State Highway & Malayora Highway Confluence",
    alt: "S Mall Highway Access",
  },
];

export default function HomeHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[92vh] w-full flex-col justify-between overflow-hidden bg-slate-950 sm:min-h-screen">
      {/* Background Slideshow - Original Image Colours */}
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
              src={HERO_SLIDES[currentIndex].url}
              alt={HERO_SLIDES[currentIndex].alt}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = HERO_SLIDES[currentIndex].fallback;
              }}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 my-auto mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <div className="max-w-3xl space-y-6 sm:space-y-7">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex max-w-full flex-wrap items-center gap-2.5 rounded-full border border-white/30 bg-slate-950/60 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md"
          >
            <span className="flex h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#F9B00C]" />

            <span className="text-[11px] font-black uppercase tracking-wider text-[#F9B00C]">
              {HERO_SLIDES[currentIndex].badge}
            </span>

            <span className="text-white/60">|</span>

            <span className="text-slate-100">Main Road Edakkara</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="space-y-2"
          >
            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] sm:text-6xl lg:text-7xl">
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
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="max-w-2xl text-base font-medium leading-relaxed text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] sm:text-xl"
          >
            Shopping, entertainment, dining, and memorable experiences — all in
            one premier destination in Edakkara.
          </motion.p>

          {/* Action Buttons Removed */}
        </div>
      </div>

      {/* Quick Stats / Highlights Bar */}
      <div className="relative z-20 w-full border-t border-white/20 py-4 sm:py-5">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 text-white sm:px-6 md:grid-cols-3 lg:px-8">
          {/* Retail */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-[#F9B00C]">
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
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-[#F9B00C]">
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
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-[#F9B00C]">
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
