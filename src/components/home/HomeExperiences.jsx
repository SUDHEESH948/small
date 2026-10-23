import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Film,
  Utensils,
  Gamepad2,
  Sparkles,
  ArrowRight,
  Languages,
  Popcorn,
  Armchair,
  Scissors,
  Phone,
} from "lucide-react";

import magicFramesImg from "../../assets/magicframes.jpeg";
import surprezToysImg from "../../assets/surpreztoys.jpeg";
import AmadoBeautyParlour from "../../assets/AmadoBeautyParlour.png";

export default function HomeExperiences() {
  const navigate = useNavigate();

  return (
    <section
      id="mall-experiences"
      className="py-20 sm:py-28 bg-white border-t border-slate-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0E5EC8] bg-[#0E5EC8]/10 px-3.5 py-1.5 rounded-full mb-3"
            >
              <Film className="w-3.5 h-3.5 text-[#F9B00C]" />
              <span>Entertainment & Leisure</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            >
              Experiences <br />
              <span className="text-[#0E5EC8]">Beyond Shopping.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
            >
              Movies, signature dining, kids' joy, and wellness — discover
              activities that make every visit to S Mall memorable.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/experiences"
              className="inline-flex items-center gap-2 bg-[#0E5EC8] hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-95 group cursor-pointer"
            >
              <span>View All Experiences</span>
              <ArrowRight className="w-4 h-4 text-[#F9B00C] transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* 1. Feature Anchor: Magic Frames Cinemas (Forum Kochi PVR Model) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950 min-h-[380px] sm:min-h-[460px] flex items-end p-3.5 sm:p-8 lg:p-12 mb-8 group"
        >
          <img
            src={magicFramesImg}
            alt="Magic Frames Cinemas at S Mall Edakkara"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/images/magicframes.jpeg";
            }}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 w-full bg-slate-950/75 backdrop-blur-md p-4 sm:p-8 rounded-2xl border border-white/15">
            <div className="space-y-3 max-w-2xl">
              <span className="bg-[#F9B00C] text-slate-950 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md inline-block shadow-sm">
                Now Showing & Premieres
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Magic Frames Cinemas
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                <span className="text-white text-base sm:text-lg font-bold">Big Movies, Bigger Experiences.</span> Watch the latest blockbuster
                releases with cutting-edge digital projection, crystal-clear
                surround sound, and comfortable push-back seating right here in
                Edakkara.
              </p>

              {/* Badges Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs text-xs text-white">
                  <Film className="w-3.5 h-3.5 text-[#F9B00C] shrink-0" />
                  <span>Latest Releases</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs text-xs text-white">
                  <Languages className="w-3.5 h-3.5 text-[#F9B00C] shrink-0" />
                  <span>Multi-Language</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs text-xs text-white">
                  <Armchair className="w-3.5 h-3.5 text-[#F9B00C] shrink-0" />
                  <span>Luxury Seating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs text-xs text-white">
                  <Popcorn className="w-3.5 h-3.5 text-[#F9B00C] shrink-0" />
                  <span>Snacks & Treats</span>
                </div>
              </div>
              {/* Contact */}
              <div className="flex items-center gap-2 pt-1 text-sm text-slate-200">
                <Phone className="w-4 h-4 text-[#F9B00C] shrink-0" />
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Contact:</span>
                <a
                  href="tel:+917012036998"
                  className="font-bold text-white hover:text-[#F9B00C] transition-colors"
                >
                  +91 70120 36998
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="tel:+917012036998"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-5 py-4 rounded-xl font-bold text-xs uppercase tracking-wider border border-white/20 backdrop-blur-xs transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#F9B00C]" />
                <span>Call Now</span>
              </a>

              <a
                href="https://www.district.in/movies/magic-frames-cinemas-s-mall-edakkara-CD1088547?srsltid=AU7gw4ULPeA0teazNxAzOJ9bMmZ6q2MDw_2cf8jur613BYWOWrxFmuPI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F9B00C] hover:bg-[#e5a007] text-slate-950 px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl active:scale-95 transition-all cursor-pointer"
              >
                <span>BOOK TICKETS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/experiences"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-5 py-4 rounded-xl font-bold text-xs uppercase tracking-wider border border-white/20 backdrop-blur-xs transition-all cursor-pointer"
              >
                <span>Cinema Details</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* 3 Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Food & Dining */}
          <div className="group bg-[#F5F7FA] rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="relative aspect-16/10 overflow-hidden bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                alt="Food and Dining at S Mall"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/images/dining.webp";
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-[#0E5EC8] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                  Food & Dining
                </span>
              </div>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#0E5EC8] transition-colors">
                  KFC & Multi-Cuisine Food Court
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Savor freshly prepared meals at KFC alongside our upcoming
                  multi-cuisine food court offering Kerala delicacies,
                  continental snacks, and roadside cafes.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80">
                <Link
                  to="/experiences"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E5EC8] hover:text-blue-800 transition-colors"
                >
                  <span>Explore Dining Outlets</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Kids' Activities & Gaming */}
          <div className="group bg-[#F5F7FA] rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="relative aspect-16/10 overflow-hidden bg-slate-900">
              <img
                src={surprezToysImg}
                alt="Surprez Toys and Family Fun at S Mall"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/images/surpreztoys.jpeg";
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-amber-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                  Kids & Gaming
                </span>
              </div>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#0E5EC8] transition-colors">
                  Surprez Toys & Kids Zone
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  A wonderland for young explorers featuring Surprez Toys,
                  learning puzzles, gifts, alongside our upcoming family
                  entertainment & arcade VR zone.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80">
                <Link
                  to="/experiences"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E5EC8] hover:text-blue-800 transition-colors"
                >
                  <span>Explore Family Fun</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Beauty & Lifestyle Services */}
          <div className="group bg-[#F5F7FA] rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="relative aspect-16/10 overflow-hidden bg-slate-900">
              <img
                src={AmadoBeautyParlour}
                alt="Beauty and Lifestyle at S Mall"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/images/about.webp";
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                  Beauty & Wellness
                </span>
              </div>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-[#0E5EC8]">
                  Amado Beauty Parlour (Unisex Salon)
                </h4>

                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                  Professional haircuts, styling, hair care, skincare, bridal
                  makeup, and premium grooming services for men and women,
                  located on Level 2.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80">
                <Link
                  to="/experiences"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E5EC8] hover:text-blue-800 transition-colors"
                >
                  <span>Explore Lifestyle Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
