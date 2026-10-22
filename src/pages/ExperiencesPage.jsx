import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Film,
  Utensils,
  Sparkles,
  ArrowRight,
  Gamepad2,
  Scissors,
  ShoppingBag,
  Languages,
  Armchair,
  Popcorn,
  Tv2,
} from "lucide-react";

import magicFramesImg from "../assets/magicframes.jpeg";
import surprezToysImg from "../assets/surpreztoys.jpeg";
import boutiqueImg from "../assets/botique.jpeg";
import heroImg from "../assets/homepage/hero.jpeg";
import hroic2Img from "../assets/homepage/hero2.png";
import AmadoBeautyParlour from "../assets/AmadoBeautyParlour.png";
export default function ExperiencesPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#F5F7FA]">
      {/* 1. Hero Section matching screenshot: "Experiences beyond shopping." */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="S mall Experiences"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Experiences <br />
              <span className="text-[#F9B00C] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                beyond shopping.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white font-medium max-w-lg leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              Movies, dining, entertainment, events and more — there's always
              something to look forward to at S mall.
            </p>
          </div>
        </div>
      </section>

      {/* 2. "At the Movies" Section matching screenshot */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              At the Movies <span className="text-[#0E5EC8]">& Cinema</span>
            </h2>
            <a
              href="https://in.bookmyshow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E5EC8] hover:text-blue-800 transition-colors"
            >
              <span>View Showtimes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Featured Cinema Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl bg-slate-950 min-h-[360px] sm:min-h-[420px] flex items-end p-6 sm:p-10 group border border-slate-800 hover:border-slate-700 transition-all duration-300"
          >
            <img
              src={magicFramesImg}
              alt="Magic Frames Cinemas"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/magicframes.jpeg";
              }}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 w-full bg-slate-950/75 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/15">
              <div className="space-y-2">
                <span className="bg-[#F9B00C] text-[#1F2937] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md inline-block">
                  Now Showing & Premieres
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white">
                  Magic Frames Cinemas
                </h3>
                <p className="text-sm text-slate-300">
                  Big Movies, Bigger Experiences.
                </p>
              </div>

              <div>
                <a
                  href="https://www.district.in/movies/magic-frames-cinemas-s-mall-edakkara-CD1088547?srsltid=AU7gw4ULPeA0teazNxAzOJ9bMmZ6q2MDw_2cf8jur613BYWOWrxFmuPI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#F9B00C] hover:bg-[#e5a007] text-[#1F2937] px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all"
                >
                  <span>BOOK TICKETS</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* 4 Feature Badges Row matching screenshot */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {[
              { icon: Film, label: "Latest Movies" },
              { icon: Languages, label: "Multiple Languages" },
              { icon: Armchair, label: "Comfortable Seating" },
              { icon: Popcorn, label: "Blockbuster Experience" },
            ].map(({ icon: Icon, label }, idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex items-center gap-3 cursor-default"
              >
                <Icon className="w-5 h-5 text-[#0E5EC8] shrink-0" />
                <span className="text-xs font-bold text-slate-800">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. "Food & Dining" Section matching screenshot */}
      <section className="py-14 sm:py-20 bg-[#F5F7FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Food & <span className="text-[#0E5EC8]">Dining</span>
            </h2>
            <button
              onClick={() => navigate("/explore")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E5EC8] hover:text-blue-800 transition-colors"
            >
              <span>View all</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* KFC */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#0E5EC8]/40 hover:-translate-y-2 transition-all duration-300 flex flex-col sm:flex-row items-center cursor-pointer"
            >
              <div className="w-full sm:w-1/2 aspect-16/10 sm:aspect-square overflow-hidden bg-slate-100">
                <img
                  src="/images/kfc.png"
                  alt="KFC"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-6 sm:w-1/2 space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#0E5EC8] tracking-wider block">
                  Fast Food & Chicken
                </span>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-[#0E5EC8] transition-colors">
                  KFC
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Great food for every mood. Fresh hot chicken and signature
                  treats.
                </p>
                <div className="pt-2 text-xs font-bold text-[#0E5EC8] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Visit Store</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>

            {/* Food Court */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#0E5EC8]/40 hover:-translate-y-2 transition-all duration-300 flex flex-col sm:flex-row items-center cursor-pointer"
            >
              <div className="w-full sm:w-1/2 aspect-16/10 sm:aspect-square overflow-hidden bg-slate-100">
                <img
                  src="/images/dining-800.webp"
                  alt="Food Court"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-6 sm:w-1/2 space-y-2">
                <span className="text-[10px] uppercase font-bold text-amber-600 tracking-wider block">
                  Multi-Cuisine
                </span>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-[#0E5EC8] transition-colors">
                  Food Court (Coming Soon)
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  A variety of cuisines under one roof, from authentic Kerala
                  delicacies to continental snacks.
                </p>
                <div className="pt-2 text-xs font-bold text-[#0E5EC8] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. "Family Fun" Section matching screenshot */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Family <span className="text-[#0E5EC8]">Fun</span>
            </h2>
            <button
              onClick={() => navigate("/explore")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E5EC8] hover:text-blue-800 transition-colors"
            >
              <span>View all</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Toys Store */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45 }}
              className="group bg-slate-50 hover:bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#0E5EC8]/40 hover:-translate-y-2 transition-all duration-300 flex flex-col sm:flex-row items-center cursor-pointer"
            >
              <div className="w-full sm:w-1/2 aspect-16/10 sm:aspect-square overflow-hidden bg-slate-200">
                <img
                  src={surprezToysImg}
                  alt="Surprez Toys Store"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/surpreztoys.jpeg";
                  }}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-6 sm:w-1/2 space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#0E5EC8] tracking-wider block">
                  Kids & Play
                </span>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-[#0E5EC8] transition-colors">
                  Surprez Toys Store
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  A world of toys, learning puzzles and smiles for little
                  explorers.
                </p>
              </div>
            </motion.div>

            {/* Gaming Zone */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="group bg-slate-50 hover:bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#0E5EC8]/40 hover:-translate-y-2 transition-all duration-300 flex flex-col sm:flex-row items-center cursor-pointer"
            >
              <div className="w-full sm:w-1/2 aspect-16/10 sm:aspect-square overflow-hidden bg-slate-200">
                <img
                  src="/images/entertainment.webp"
                  alt="Gaming Zone"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-6 sm:w-1/2 space-y-2">
                <span className="text-[10px] uppercase font-bold text-amber-600 tracking-wider block">
                  Arcade & VR
                </span>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-[#0E5EC8] transition-colors">
                  Gaming Zone (Coming Soon)
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Play, connect, enjoy arcade simulations, VR adventures, and
                  prize games.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. "Lifestyle & Wellness" Section matching screenshot */}
      <section className="py-14 sm:py-20 bg-[#F5F7FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Lifestyle & <span className="text-[#0E5EC8]">Wellness</span>
            </h2>
            <button
              onClick={() => navigate("/explore")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E5EC8] hover:text-blue-800 transition-colors"
            >
              <span>View all</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Amado Unisex Salon */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45 }}
              className="group flex flex-col items-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:border-[#0E5EC8]/40 hover:-translate-y-2 transition-all duration-300 sm:flex-row cursor-pointer"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 sm:aspect-square sm:w-1/2">
                <img
                  src={AmadoBeautyParlour}
                  alt="Amado Unisex Salon at S Mall Edakkara"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/about.webp";
                  }}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                />
              </div>

              <div className="space-y-2 p-6 sm:w-1/2">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#0E5EC8]">
                  Beauty & Grooming
                </span>

                <h3 className="text-lg font-black text-slate-900 transition-colors group-hover:text-[#0E5EC8]">
                  Amado Unisex Salon
                </h3>

                <p className="text-xs leading-relaxed text-slate-500">
                  Style, relax, rejuvenate. Professional haircuts, styling, hair
                  care, skincare, bridal makeup, and premium grooming services
                  for men and women.
                </p>
              </div>
            </motion.div>

            {/* Boutique B for U */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="group flex flex-col items-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:border-[#0E5EC8]/40 hover:-translate-y-2 transition-all duration-300 sm:flex-row cursor-pointer"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 sm:aspect-square sm:w-1/2">
                <img
                  src={boutiqueImg}
                  alt="B for U Boutique"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/botique.jpeg";
                  }}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                />
              </div>

              <div className="space-y-2 p-6 sm:w-1/2">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#0E5EC8]">
                  Fashion & Jewellery
                </span>

                <h3 className="text-lg font-black text-slate-900 transition-colors group-hover:text-[#0E5EC8]">
                  B for U
                </h3>

                <p className="text-xs leading-relaxed text-slate-500">
                  Discover stylish outfits, designer ethnic wear, bridal
                  jewellery, footwear, and fashion accessories to complement
                  every occasion.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Bottom Banner CTA: "Make more memories here." matching screenshot */}
      <section className="relative py-20 bg-slate-950 overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={hroic2Img}
            alt="S Mall Edakkara"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/images/hroic2.jpeg";
            }}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10  p-8 sm:p-12 rounded-3xl border border-white/15 shadow-2xl space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Make More Memories <br />
            <span className="text-[#F9B00C]">Here at S Mall.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed">
            From movie nights to family outings, S mall is your destination for
            moments that matter.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 bg-[#F9B00C] hover:bg-[#e5a007] text-[#1F2937] px-7 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-xl active:scale-95 transition-all"
            >
              <span>PLAN YOUR VISIT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
