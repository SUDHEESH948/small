import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  MapPin, 
  Film,
  ShoppingBag,
  Utensils,
  Car,
  Layers
} from "lucide-react";

import heroImagePng from "../../assets/homepage/heroimage.png";
import heroJpeg from "../../assets/homepage/hero.jpeg";
import hroic2Jpeg from "../../assets/homepage/hroic2.jpeg";

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
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? HERO_SLIDES.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full overflow-hidden bg-slate-950 flex flex-col justify-between">
      {/* Background Slides with AnimatePresence */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
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
            {/* Ambient Overlays for superior contrast and readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative Accent Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#0E5EC8]/20 rounded-full blur-3xl pointer-events-none z-10" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#F9B00C]/15 rounded-full blur-3xl pointer-events-none z-10" />

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-12 w-full my-auto">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Top Pill / Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md border border-white/15 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#F9B00C] animate-pulse" />
            <span className="text-[#F9B00C] font-black uppercase tracking-wider text-[11px]">
              {HERO_SLIDES[currentIndex].badge}
            </span>
            <span className="text-white/40">|</span>
            <span className="text-slate-200">Main Road Edakkara</span>
          </motion.div>

          {/* Primary Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
              Discover More <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9B00C] via-amber-300 to-yellow-400">
                at S Mall.
              </span>
            </h1>
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl"
          >
            Shopping, entertainment, dining, and memorable experiences — all in one premier destination in Edakkara.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              onClick={() => scrollToSection("mall-highlights")}
              className="inline-flex items-center justify-center gap-2.5 bg-[#F9B00C] hover:bg-[#e5a007] text-slate-950 font-black px-7 py-4 rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 active:scale-95 transition-all group cursor-pointer"
            >
              <span>Explore the Mall</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollToSection("plan-your-visit")}
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-4 rounded-xl text-sm tracking-wide border border-white/20 backdrop-blur-md hover:border-white/40 active:scale-95 transition-all cursor-pointer"
            >
              <Clock className="w-4 h-4 text-[#F9B00C]" />
              <span>Plan Your Visit</span>
            </button>
          </motion.div>

        </div>
      </div>

      {/* Quick Stats / Highlights Bar */}
      <div className="relative z-20 w-full border-t border-white/10 bg-slate-950/70 backdrop-blur-md py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
          
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F9B00C] shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Retail Spread</div>
              <div className="text-sm font-bold text-white">3 Commercial Floors</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F9B00C] shrink-0">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Cinema Experience</div>
              <div className="text-sm font-bold text-white">Magic Frames Multiplex</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F9B00C] shrink-0">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Gastronomy</div>
              <div className="text-sm font-bold text-white">KFC & Food Court</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F9B00C] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Operating Hours</div>
              <div className="text-sm font-bold text-white">10 AM – 10 PM (Daily)</div>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="pointer-events-none absolute inset-x-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-between md:inset-x-8">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous slide"
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-slate-950/40 text-white backdrop-blur-md transition-all duration-200 hover:bg-[#F9B00C] hover:text-slate-950 active:scale-90 cursor-pointer"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next slide"
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-slate-950/40 text-white backdrop-blur-md transition-all duration-200 hover:bg-[#F9B00C] hover:text-slate-950 active:scale-90 cursor-pointer"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Slide Dot Indicators */}
      <div className="absolute inset-x-0 bottom-24 z-20 flex items-center justify-center gap-2.5">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex
                ? "h-2 w-8 bg-[#F9B00C]"
                : "h-2 w-2 bg-white/40 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
