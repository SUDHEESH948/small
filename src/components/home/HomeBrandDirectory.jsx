import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Store, 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  Utensils, 
  Film, 
  ShoppingBag, 
  Scissors,
  Gamepad2,
  ChevronRight
} from "lucide-react";

const STORES = [
  {
    id: "magic-frames",
    name: "Magic Frames Cinemas",
    category: "Entertainment",
    floor: "Level 2",
    tagline: "Premier Multi-Screen Blockbuster Experience",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    fallback: "/images/entertainment.webp",
    badge: "Now Showing",
    badgeColor: "bg-[#F9B00C] text-slate-950",
    link: "/experiences",
  },
  {
    id: "kfc",
    name: "KFC",
    category: "Dining",
    floor: "Ground Floor",
    tagline: "Fresh Hot Chicken, Burgers & Treats",
    image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&w=800&q=80",
    fallback: "/images/dining.webp",
    badge: "Open Daily",
    badgeColor: "bg-red-600 text-white",
    link: "/experiences",
  },
  {
    id: "jewellery",
    name: "Jewellery Concourse",
    category: "Shopping",
    floor: "Ground Floor",
    tagline: "Bridal Gold, Diamond & Contemporary Jewels",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    fallback: "/images/shopping.webp",
    badge: "Front Entrance",
    badgeColor: "bg-amber-100 text-amber-900 border border-amber-300",
    link: "/explore",
  },
  {
    id: "boutiques",
    name: "Fashion Boutiques",
    category: "Shopping",
    floor: "First Floor",
    tagline: "Designer Ethnic Wear & Modern Apparel",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80",
    fallback: "/images/shopping-480.webp",
    badge: "Fashion Avenue",
    badgeColor: "bg-blue-100 text-[#0E5EC8] border border-blue-200",
    link: "/explore",
  },
  {
    id: "toys-store",
    name: "Toys Store",
    category: "Entertainment",
    floor: "Level 2",
    tagline: "Joyful Toys, Puzzles & Gifts for Kids",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80",
    fallback: "/images/experience.webp",
    badge: "Kids & Family",
    badgeColor: "bg-emerald-100 text-emerald-800 border border-emerald-300",
    link: "/experiences",
  },
  {
    id: "premium-salon",
    name: "Premium Salon & Spa",
    category: "Lifestyle",
    floor: "Level 2",
    tagline: "Hair Styling, Skincare & Bridal Grooming",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    fallback: "/images/about.webp",
    badge: "Self-Care",
    badgeColor: "bg-purple-100 text-purple-800 border border-purple-300",
    link: "/experiences",
  },
  {
    id: "food-court",
    name: "Multi-Cuisine Food Court",
    category: "Dining",
    floor: "Level 2",
    tagline: "Authentic Malabar, Continental & Quick Bites",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    fallback: "/images/dining-800.webp",
    badge: "Coming Soon",
    badgeColor: "bg-amber-500 text-slate-950",
    link: "/experiences",
  },
  {
    id: "supermarket",
    name: "Anchor Supermarket",
    category: "Shopping",
    floor: "First Floor",
    tagline: "Fresh Produce, Groceries & Daily Needs",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80",
    fallback: "/images/shopping-800.webp",
    badge: "Coming Soon",
    badgeColor: "bg-sky-500 text-white",
    link: "/explore",
  },
  {
    id: "gaming-zone",
    name: "Family Gaming & Arcade",
    category: "Entertainment",
    floor: "Level 2",
    tagline: "VR Simulations, Racing & Arcade Fun",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    fallback: "/images/entertainment-800.webp",
    badge: "Coming Soon",
    badgeColor: "bg-indigo-600 text-white",
    link: "/experiences",
  },
];

const CATEGORIES = ["All Brands", "Shopping", "Dining", "Entertainment", "Lifestyle"];

export default function HomeBrandDirectory() {
  const [selectedCategory, setSelectedCategory] = useState("All Brands");

  const filteredStores = STORES.filter((store) => {
    if (selectedCategory === "All Brands") return true;
    return store.category === selectedCategory;
  });

  return (
    <section id="brand-directory" className="py-20 sm:py-28 bg-[#F5F7FA] border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Forum Kochi Store Finder Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#0E5EC8] bg-[#0E5EC8]/10 px-3.5 py-1.5 rounded-full mb-3"
            >
              <Store className="w-3.5 h-3.5 text-[#F9B00C]" />
              <span>Stores & Directory</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            >
              Featured Brands <br />
              <span className="text-[#0E5EC8]">& Outlets at S Mall.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
            >
              Browse marquee cinema, world-class fast food, jewellery, and fashion labels across our three retail levels.
            </motion.p>
          </div>

          {/* Right Action Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 bg-[#0E5EC8] hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-95 group cursor-pointer"
            >
              <span>View Full Directory</span>
              <ArrowRight className="w-4 h-4 text-[#F9B00C] transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#0E5EC8] text-white shadow-md shadow-blue-900/15"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stores Grid (Forum Kochi Brand Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredStores.map((store) => (
              <motion.div
                key={store.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Store Cover Image */}
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-900">
                    <img
                      src={store.image}
                      alt={store.name}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = store.fallback;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-3.5 right-3.5">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs ${store.badgeColor}`}>
                        {store.badge}
                      </span>
                    </div>

                    {/* Floor Tag */}
                    <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                      <MapPin className="w-3.5 h-3.5 text-[#F9B00C]" />
                      <span>{store.floor}</span>
                    </div>
                  </div>

                  {/* Store Info */}
                  <div className="p-6 space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0E5EC8] block">
                      {store.category}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-[#0E5EC8] transition-colors">
                      {store.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                      {store.tagline}
                    </p>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={store.link}
                    className="text-xs font-bold text-[#0E5EC8] hover:text-blue-800 inline-flex items-center gap-1.5 group/btn cursor-pointer"
                  >
                    <span>View Store Details</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>

                  <span className="text-[11px] font-semibold text-slate-400">
                    S Mall Edakkara
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

