import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Sparkles,
  Utensils,
  Gamepad2,
  ArrowRight,
  Check,
  Eye,
} from "lucide-react";

const HIGHLIGHTS = [
  {
    id: "shopping",
    badge: "Shopping & Retail",
    pillar: "Shop",
    title: "World of Retail & Everyday Essentials",
    icon: ShoppingBag,
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80",
    fallback: "/images/shopping.webp",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
        fallback: "/images/shopping-1.webp",
        alt: "Shopping & Retail preview 1 - Retail Concourse",
        label: "Retail Concourse",
      },
      {
        src: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
        fallback: "/images/shopping-2.webp",
        alt: "Shopping & Retail preview 2 - Brand Outlets",
        label: "Brand Outlets",
      },
      {
        src: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=800&q=80",
        fallback: "/images/shopping-3.webp",
        alt: "Shopping & Retail preview 3 - Mall Walkways",
        label: "Mall Walkways",
      },
    ],
    features: [
      "Curated high-street fashion & lifestyle stores",
      "Electronics, mobile accessories & daily goods",
      "Spacious air-conditioned corridors with easy access",
    ],
    actionText: "Explore Retail Directory",
    actionLink: "/explore",
  },
  {
    id: "fashion",
    badge: "Fashion & Lifestyle",
    pillar: "Style",
    title: "Trendsetting Fashion & Jewellery Concourse",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    fallback: "/images/about.webp",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80",
        fallback: "/images/fashion-1.webp",
        alt: "Fashion & Lifestyle preview 1 - Boutique & Apparel",
        label: "Boutiques",
      },
      {
        src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
        fallback: "/images/fashion-2.webp",
        alt: "Fashion & Lifestyle preview 2 - Jewellery Concourse",
        label: "Jewellery Concourse",
      },
      {
        src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
        fallback: "/images/fashion-3.webp",
        alt: "Fashion & Lifestyle preview 3 - Salon & Grooming",
        label: "Salon & Styling",
      },
    ],
    features: [
      "Dedicated ground-floor Jewellery Concourse",
      "First-floor designer boutiques & ethnic fashion",
      "Premium cosmetics, salon & personal styling",
    ],
    actionText: "View Fashion Stores",
    actionLink: "/explore",
  },
  {
    id: "dining",
    badge: "Food & Dining",
    pillar: "Dine",
    title: "Irresistible Cuisines & Family Dining",
    icon: Utensils,
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    fallback: "/images/dining.webp",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
        fallback: "/images/dining-1.webp",
        alt: "Food & Dining preview 1 - Food Court Delicacies",
        label: "Food Court",
      },
      {
        src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
        fallback: "/images/dining-2.webp",
        alt: "Food & Dining preview 2 - Cafe & Outdoor Patio",
        label: "Cafe Patio",
      },
      {
        src: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&w=800&q=80",
        fallback: "/images/dining-3.webp",
        alt: "Food & Dining preview 3 - KFC Meals",
        label: "KFC Outlet",
      },
    ],
    features: [
      "KFC outlet serving freshly prepared hot chicken",
      "Multi-cuisine food court serving Kerala & continental flavours",
      "Outdoor roadside seating & cafe patio for travelers",
    ],
    actionText: "Discover Dining Choices",
    actionLink: "/experiences",
  },
  {
    id: "family",
    badge: "Family Experiences",
    pillar: "Play",
    title: "Blockbuster Movies & Joyful Outings",
    icon: Gamepad2,
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    fallback: "/images/entertainment.webp",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80",
        fallback: "/images/family-1.webp",
        alt: "Family Experiences preview 1 - Magic Frames Cinemas",
        label: "Magic Frames",
      },
      {
        src: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80",
        fallback: "/images/family-2.webp",
        alt: "Family Experiences preview 2 - Kids Toys & Fun",
        label: "Kids & Toys",
      },
      {
        src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
        fallback: "/images/family-3.webp",
        alt: "Family Experiences preview 3 - Entertainment Concourse",
        label: "Gaming & VR",
      },
    ],
    features: [
      "Magic Frames Multiplex Cinemas with immersive sound",
      "Delightful kids' toy store & gift boutique",
      "Upcoming family entertainment & gaming zone",
    ],
    actionText: "Explore Cinema & Fun",
    actionLink: "/experiences",
  },
];

export default function HomeAdvantages() {
  const [activeTab, setActiveTab] = useState(0);
  const [spotlightImage, setSpotlightImage] = useState(HIGHLIGHTS[0].image);

  const current = HIGHLIGHTS[activeTab];

  const handleTabChange = (index) => {
    setActiveTab(index);
    setSpotlightImage(HIGHLIGHTS[index].image);
  };

  return (
    <section
      id="mall-highlights"
      className="py-20 sm:py-28 bg-[#F5F7FA] relative overflow-hidden"
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header (Forum Kochi Style) */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#0E5EC8] bg-[#0E5EC8]/10 px-3.5 py-1.5 rounded-full mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F9B00C]" />
            <span>Mall Highlights & Experiences</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Everything You Love, <br />
            <span className="text-[#0E5EC8]">All Under One Roof.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            Inspired by world-class shopping centers, S Mall brings together
            curated shopping, signature gastronomy, blockbuster cinemas, and
            refreshing wellness under one address in Edakkara.
          </motion.p>
        </div>

        {/* 4 Interactive Category Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {HIGHLIGHTS.map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeTab === index;

            return (
              <button
                key={item.id}
                onClick={() => handleTabChange(index)}
                className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between gap-3 cursor-pointer ${
                  isSelected
                    ? "bg-[#0E5EC8] text-white border-[#0E5EC8] shadow-lg shadow-blue-900/15 -translate-y-1"
                    : "bg-white text-slate-700 border-slate-200/80 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-white/20 text-[#F9B00C]"
                        : "bg-blue-50 text-[#0E5EC8]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs font-mono font-bold ${
                      isSelected ? "text-blue-200" : "text-slate-400"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider block ${
                      isSelected ? "text-amber-300" : "text-slate-400"
                    }`}
                  >
                    {item.badge}
                  </span>
                  <span className="text-sm sm:text-base font-black line-clamp-1">
                    {item.id === "shopping" && "Shopping & Stores"}
                    {item.id === "fashion" && "Fashion & Jewellery"}
                    {item.id === "dining" && "Dining & Cafes"}
                    {item.id === "family" && "Cinema & Family Fun"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Spotlight Card with Visual Layout */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Primary Visual Showcase */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[500px] overflow-hidden bg-slate-900 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={spotlightImage}
                  src={spotlightImage}
                  alt={current.title}
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = current.fallback;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                <span className="bg-[#F9B00C] text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {current.badge}
                </span>

                <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                  <Eye className="w-3.5 h-3.5 text-[#F9B00C]" />
                  <span>Click thumbnail to switch preview</span>
                </span>
              </div>
            </div>

            {/* Visual Thumbnails & Info */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="hidden lg:inline-flex items-center gap-2 bg-[#F9B00C]/20 border border-[#F9B00C]/40 text-amber-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>{current.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {current.title}
                </h3>
              </div>

              {/* Gallery Preview Grid with Online Google/Unsplash Images */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Gallery Preview
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Select a photo
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {current.gallery.map((item, idx) => {
                    const isActive = spotlightImage === item.src;

                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSpotlightImage(item.src)}
                        className={`relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100 border transition-all duration-200 text-left group cursor-pointer ${
                          isActive
                            ? "border-[#0E5EC8] ring-2 ring-[#0E5EC8]/30 shadow-md scale-[1.02]"
                            : "border-slate-200 hover:border-slate-300 opacity-80 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = item.fallback;
                          }}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute bottom-1.5 left-1.5 right-1.5 text-[10px] font-bold text-white line-clamp-1 pointer-events-none leading-tight drop-shadow-xs">
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="space-y-2.5 pt-1">
                {current.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  to={current.actionLink}
                  className="inline-flex items-center gap-2.5 bg-[#0E5EC8] hover:bg-blue-700 text-white font-black px-6 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 group cursor-pointer"
                >
                  <span>{current.actionText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#F9B00C]" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Image-Centric Category Cards (Forum Kochi Feature Tiles) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HIGHLIGHTS.map((item) => (
            <Link
              key={`card-${item.id}`}
              to={item.actionLink}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col group cursor-pointer"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = item.fallback;
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider bg-white/95 backdrop-blur-xs text-[#0E5EC8] px-2.5 py-1 rounded-md shadow-xs">
                  {item.badge}
                </span>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-xs font-bold line-clamp-1">
                    {item.title}
                  </span>
                  <div className="h-7 w-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 group-hover:bg-[#0E5EC8] transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
