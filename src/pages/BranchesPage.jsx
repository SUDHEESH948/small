import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Search,
  ArrowRight,
  Sparkles,
  Film,
  Utensils,
  ShoppingBag,
  Scissors,
  Gamepad2,
  CheckCircle2,
  Layers,
  ChevronRight,
  X,
  Phone,
  MessageCircle,
} from "lucide-react";

import magicFramesImg from "../assets/magicframes.jpeg";
import mayoodiyaImg from "../assets/mayoodiyajewellery.jpeg";
import boutiqueImg from "../assets/botique.jpeg";
import lenoraImg from "../assets/lenorafancy.jpeg";
import surprezToysImg from "../assets/surpreztoys.jpeg";
import heroImagePng from "../assets/homepage/heroimage.png";
import AmadoBeautyParlour from "../assets/AmadoBeautyParlour.png";
export default function BranchesPage() {
  const [searchParams] = useSearchParams();
  const initialBranch = searchParams.get("id");

  // Active category filter tab
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFloor, setActiveFloor] = useState("Ground Floor");

  // Full Directory Modal State
  const [isFullDirectoryOpen, setIsFullDirectoryOpen] = useState(false);
  const [directorySearch, setDirectorySearch] = useState("");
  const [directoryFloor, setDirectoryFloor] = useState("All Floors");
  const [directoryCategory, setDirectoryCategory] = useState("All");

  // Lock scroll and handle escape key for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsFullDirectoryOpen(false);
      }
    };
    if (isFullDirectoryOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isFullDirectoryOpen]);

  const categories = [
    "All",
    "Shopping",
    "Dining",
    "Entertainment",
    "Lifestyle",
    "Services",
  ];

  const stores = [
    {
      id: "store-1",
      name: "Magic Frames Cinema",
      tagline: "Movies, More Than Movies",
      category: "Entertainment",
      image: magicFramesImg,
      fallback: "/images/magicframes.jpeg",
      badge: "Entertainment",
    },
    {
      id: "store-2",
      name: "KFC",
      tagline: "Finger Lickin’ Good",
      category: "Dining",
      image: "/images/kfc.png",
      fallback: "/images/dining.webp",
      badge: "Dining",
    },
    {
      id: "store-3",
      name: "Mayoodiya Jewellery",
      tagline: "Timeless Elegance & Bridal Gold",
      category: "Shopping",
      image: mayoodiyaImg,
      fallback: "/images/mayoodiyajewellery.jpeg",
      badge: "Shopping",
    },
    {
      id: "store-4",
      name: " B for U",
      tagline: "Designer Ethnic Wear & Modern Apparel",
      category: "Shopping",
      image: boutiqueImg,
      fallback: "/images/botique.jpeg",
      badge: "Shopping",
    },
    {
      id: "store-5",
      name: "Surprez Toys",
      tagline: "Fun, Learning & Smiles for Kids",
      category: "Entertainment",
      image: surprezToysImg,
      fallback: "/images/surpreztoys.jpeg",
      badge: "Entertainment",
    },
    {
      id: "store-lenora",
      name: "Lenora Fancy & Footwear",
      tagline: "Accessories, Footwear & Novelty Gifts",
      category: "Shopping",
      image: lenoraImg,
      fallback: "/images/lenorafancy.jpeg",
      badge: "Shopping",
    },
    {
      id: "store-6",
      name: "Amado Unisex Salon",
      tagline: "Style, Relax, Rejuvenate",
      category: "Lifestyle",
      image: AmadoBeautyParlour,
      fallback: "/images/about.webp",
      badge: "Lifestyle",
    },
    {
      id: "store-7",
      name: "Supermarket (Coming Soon)",
      tagline: "Fresh Choices, Everyday Needs",
      category: "Shopping",
      image: "/images/Supermarket.png",
      fallback: "/images/shopping-800.webp",
      badge: "Coming Soon",
    },
    {
      id: "store-8",
      name: "Gaming Zone (Coming Soon)",
      tagline: "Play, Connect, Enjoy",
      category: "Entertainment",
      image: "/images/GamingZone.png",
      fallback: "/images/entertainment-800.webp",
      badge: "Coming Soon",
    },
    {
      id: "store-9",
      name: "Food Court (Coming Soon)",
      tagline: "A World of Flavours",
      category: "Dining",
      image: "/images/dining-800.webp",
      fallback: "/images/dining-800.webp",
      badge: "Coming Soon",
    },
  ];

  const filteredStores = stores.filter((store) => {
    if (activeCategory === "All") return true;
    return store.category === activeCategory;
  });

  const floorDirectory = {
    "Ground Floor": [
      {
        code: "G-01",
        name: "KFC",
        category: "Dining",
        location: "Main Highway Frontage",
        status: "Open Now",
      },
      {
        code: "G-02",
        name: "Fashion Boutique",
        category: "Shopping",
        location: "North Concourse",
        status: "Open Now",
      },
      {
        code: "G-03",
        name: "Surprez Toys",
        category: "Entertainment",
        location: "South Concourse",
        status: "Open Now",
      },
      {
        code: "G-04",
        name: "Premium Salon",
        category: "Lifestyle",
        location: "East Wing",
        status: "Open Now",
      },
      {
        code: "G-05",
        name: "Mayoodiya Jewellery",
        category: "Shopping",
        location: "Central Atrium",
        status: "Open Now",
      },
      {
        code: "G-06",
        name: "Lenora Fancy & Footwear",
        category: "Shopping",
        location: "Central Atrium",
        status: "Open Now",
      },
      {
        code: "G-07",
        name: "Supermarket (Coming Soon)",
        category: "Shopping",
        location: "Anchor Zone",
        status: "Opening Soon",
      },
      {
        code: "G-08",
        name: "Food Court (Coming Soon)",
        category: "Dining",
        location: "Promenade",
        status: "Opening Soon",
      },
      {
        code: "G-09",
        name: "Gaming Zone (Coming Soon)",
        category: "Entertainment",
        location: "Activity Center",
        status: "Opening Soon",
      },
    ],
    "First Floor": [
      {
        code: "F-01",
        name: "Magic Frames Cinema Lobby",
        category: "Entertainment",
        location: "Cinema Entry",
        status: "Open Now",
      },
      {
        code: "F-02",
        name: "Fashion Brand Store",
        category: "Shopping",
        location: "Central Walkway",
        status: "Open Now",
      },
      {
        code: "F-03",
        name: "Kids Apparels",
        category: "Shopping",
        location: "Family Zone",
        status: "Open Now",
      },
      {
        code: "F-04",
        name: "Footwear & Accessories",
        category: "Shopping",
        location: "North Wing",
        status: "Open Now",
      },
      {
        code: "F-05",
        name: "Mobile & Tech Hub",
        category: "Services",
        location: "Tech Corner",
        status: "Open Now",
      },
      {
        code: "F-06",
        name: "Cafe & Bake House",
        category: "Dining",
        location: "Balcony Deck",
        status: "Open Now",
      },
    ],
    "Second Floor": [
      {
        code: "S-01",
        name: "Magic Frames Screen 1 & 2",
        category: "Entertainment",
        location: "Cinema Screens",
        status: "Open Now",
      },
      {
        code: "S-02",
        name: "Corporate Office Suites",
        category: "Services",
        location: "Business Bay",
        status: "Open Now",
      },
      {
        code: "S-03",
        name: "Wellness & Clinical Chambers",
        category: "Lifestyle",
        location: "Wellness Suite",
        status: "Open Now",
      },
      {
        code: "S-04",
        name: "Kids Soft Play Park",
        category: "Entertainment",
        location: "Playzone",
        status: "Open Now",
      },
    ],
    "Third Floor": [
      {
        code: "T-01",
        name: "Rooftop Terrace Lounge",
        category: "Dining",
        location: "Skyline Terrace",
        status: "Open Now",
      },
      {
        code: "T-02",
        name: "Event & Banquet Hall",
        category: "Services",
        location: "Grand Pavilion",
        status: "Open Now",
      },
    ],
  };

  const allUnits = useMemo(() => {
    const list = [];
    Object.entries(floorDirectory).forEach(([floorName, units]) => {
      units.forEach((unit) => {
        list.push({ ...unit, floor: floorName });
      });
    });
    return list;
  }, []);

  const inlineDisplayedUnits = useMemo(() => {
    if (activeFloor === "All Floors") {
      return allUnits;
    }
    return (floorDirectory[activeFloor] || []).map((u) => ({
      ...u,
      floor: activeFloor,
    }));
  }, [activeFloor, allUnits]);

  const modalFilteredUnits = useMemo(() => {
    return allUnits.filter((unit) => {
      if (directoryFloor !== "All Floors" && unit.floor !== directoryFloor) {
        return false;
      }
      if (directoryCategory !== "All" && unit.category !== directoryCategory) {
        return false;
      }
      if (directorySearch.trim()) {
        const q = directorySearch.toLowerCase().trim();
        const matchName = unit.name.toLowerCase().includes(q);
        const matchCode = unit.code.toLowerCase().includes(q);
        const matchCat = unit.category.toLowerCase().includes(q);
        const matchFloor = unit.floor.toLowerCase().includes(q);
        const matchLoc = (unit.location || "").toLowerCase().includes(q);
        return matchName || matchCode || matchCat || matchFloor || matchLoc;
      }
      return true;
    });
  }, [allUnits, directoryFloor, directoryCategory, directorySearch]);

  const getCategoryBadgeClass = (category) => {
    switch (category) {
      case "Dining":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "Shopping":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Entertainment":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Lifestyle":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "Services":
        return "bg-sky-100 text-sky-800 border-sky-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="w-full bg-[#F5F7FA]">
      {/* 1. Hero Section matching screenshot: "Explore every corner of S mall." */}
      <section className="relative min-h-[420px] lg:min-h-[480px] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImagePng}
            alt="S mall Concourse"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/images/heroimage.png";
            }}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Explore <br />
              every corner <br />
              <span className="text-[#F9B00C] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                of S mall.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white font-medium max-w-lg leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              From shopping and dining to entertainment and lifestyle, discover
              everything we have for you.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Filter Pills Tabs matching screenshot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-white p-2.5 rounded-2xl shadow-lg border border-slate-200 flex items-center gap-1.5 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-[#0E5EC8] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Shop & Brand Cards Grid matching screenshot */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStores.map((store, index) => (
              <motion.div
                key={store.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(index * 0.05, 0.25),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#0E5EC8]/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col will-change-transform cursor-pointer"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                  <img
                    src={store.image}
                    alt={store.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        store.fallback || "/images/shopping.webp";
                    }}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                    {store.badge}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0E5EC8] transition-colors">
                      {store.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {store.tagline}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-400">
                      S mall Edakkara
                    </span>
                    <span className="text-[#0E5EC8] group-hover:translate-x-1.5 transition-transform duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "Mall Directory." Section with Interactive Floor Plan Map and Table */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-[#0E5EC8]/10 text-[#0E5EC8] rounded-lg">
                  <Building2 className="w-5 h-5" />
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Mall Directory{" "}
                  <span className="text-[#0E5EC8]">& Stores.</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Explore 21 stores, cinema screens, and dining destinations
                across all 4 levels
              </p>
            </div>

            {/* Floor selector buttons */}
            <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 overflow-x-auto">
              {[
                "Ground Floor",
                "First Floor",
                "Second Floor",
                "Third Floor",
                "All Floors",
              ].map((floor) => (
                <button
                  key={floor}
                  onClick={() => setActiveFloor(floor)}
                  className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    activeFloor === floor
                      ? "bg-[#0E5EC8] text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                >
                  {floor}{" "}
                  <span className="opacity-75 text-[10px]">
                    (
                    {floor === "All Floors"
                      ? allUnits.length
                      : floorDirectory[floor]?.length || 0}
                    )
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Layout: Left Floor Diagram + Right Directory Table */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Stylized 2D Floor Plan Diagram */}
            <div className="lg:col-span-6 bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-inner flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden">
              <span className="absolute top-4 left-4 text-xs font-black uppercase tracking-wider text-slate-400">
                Floor Plan Layout • {activeFloor}
              </span>

              {/* Dynamic Floor Plan Diagrams */}
              {activeFloor === "Ground Floor" && (
                <div className="w-full max-w-md aspect-4/3 relative bg-white rounded-2xl border-2 border-slate-300 p-4 shadow-sm">
                  {/* Central Atrium */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-20 bg-blue-100/70 rounded-xl border border-blue-300 flex flex-col items-center justify-center text-[10px] font-black text-[#0E5EC8] text-center p-1">
                    <span>CENTRAL ATRIUM</span>
                    <span className="text-[8px] text-blue-600 font-normal">
                      Open Skylight
                    </span>
                  </div>

                  {/* Zoned Units around Concourse */}
                  <div className="absolute top-3 left-3 w-24 h-16 bg-amber-100/80 rounded-lg border border-amber-300 flex flex-col items-center justify-center text-xs font-bold text-amber-900 p-1 text-center">
                    <span>G-01</span>
                    <span className="text-[9px] font-medium truncate w-full text-center">
                      KFC
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 w-28 h-16 bg-blue-50 rounded-lg border border-blue-200 flex flex-col items-center justify-center text-xs font-bold text-blue-900 p-1 text-center">
                    <span>G-02</span>
                    <span className="text-[9px] font-medium truncate w-full text-center">
                      Boutique
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 w-24 h-20 bg-emerald-50 rounded-lg border border-emerald-200 flex flex-col items-center justify-center text-xs font-bold text-emerald-900 p-1 text-center">
                    <span>G-03</span>
                    <span className="text-[9px] font-medium truncate w-full text-center">
                      Toys
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 w-28 h-20 bg-purple-50 rounded-lg border border-purple-200 flex flex-col items-center justify-center text-xs font-bold text-purple-900 p-1 text-center">
                    <span>G-04</span>
                    <span className="text-[9px] font-medium truncate w-full text-center">
                      Salon
                    </span>
                  </div>
                  <div className="absolute top-1/2 left-3 -translate-y-1/2 w-16 h-12 bg-rose-50 rounded border border-rose-200 flex flex-col items-center justify-center text-[11px] font-bold text-rose-900 p-0.5 text-center">
                    <span>G-05</span>
                    <span className="text-[8px] font-normal truncate w-full text-center">
                      Jewellery
                    </span>
                  </div>
                  <div className="absolute top-1/2 right-3 -translate-y-1/2 w-16 h-12 bg-sky-50 rounded border border-sky-200 flex flex-col items-center justify-center text-[11px] font-bold text-sky-900 p-0.5 text-center">
                    <span>G-06</span>
                    <span className="text-[8px] font-normal truncate w-full text-center">
                      Lenora
                    </span>
                  </div>

                  {/* Entry Indicator */}
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#0E5EC8] text-white text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase shadow-xs">
                    Main Highway Entry
                  </div>
                </div>
              )}

              {activeFloor === "First Floor" && (
                <div className="w-full max-w-md aspect-4/3 relative bg-white rounded-2xl border-2 border-slate-300 p-4 shadow-sm">
                  {/* Central Escalator Hub */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-20 bg-indigo-100/70 rounded-xl border border-indigo-300 flex flex-col items-center justify-center text-[10px] font-black text-indigo-800 text-center p-1">
                    <span>ESCALATORS</span>
                    <span className="text-[8px] text-indigo-600 font-normal">
                      Upper Concourse
                    </span>
                  </div>

                  <div className="absolute top-3 left-3 w-28 h-18 bg-purple-100/90 rounded-lg border border-purple-300 flex flex-col items-center justify-center text-xs font-bold text-purple-900 p-1 text-center">
                    <span>F-01</span>
                    <span className="text-[9px] font-medium truncate w-full text-center">
                      Cinema Lobby
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 w-26 h-16 bg-blue-50 rounded-lg border border-blue-200 flex flex-col items-center justify-center text-xs font-bold text-blue-900 p-1 text-center">
                    <span>F-02</span>
                    <span className="text-[9px] font-medium truncate w-full text-center">
                      Fashion Brand
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 w-24 h-18 bg-emerald-50 rounded-lg border border-emerald-200 flex flex-col items-center justify-center text-xs font-bold text-emerald-900 p-1 text-center">
                    <span>F-03</span>
                    <span className="text-[9px] font-medium truncate w-full text-center">
                      Kids Wear
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 w-26 h-18 bg-amber-50 rounded-lg border border-amber-200 flex flex-col items-center justify-center text-xs font-bold text-amber-900 p-1 text-center">
                    <span>F-04</span>
                    <span className="text-[9px] font-medium truncate w-full text-center">
                      Footwear
                    </span>
                  </div>
                  <div className="absolute top-1/2 left-3 -translate-y-1/2 w-16 h-12 bg-sky-50 rounded border border-sky-200 flex flex-col items-center justify-center text-[11px] font-bold text-sky-900 p-0.5 text-center">
                    <span>F-05</span>
                    <span className="text-[8px] font-normal truncate w-full text-center">
                      Tech Hub
                    </span>
                  </div>
                  <div className="absolute top-1/2 right-3 -translate-y-1/2 w-16 h-12 bg-rose-50 rounded border border-rose-200 flex flex-col items-center justify-center text-[11px] font-bold text-rose-900 p-0.5 text-center">
                    <span>F-06</span>
                    <span className="text-[8px] font-normal truncate w-full text-center">
                      Cafe & Bake
                    </span>
                  </div>

                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-indigo-700 text-white text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase shadow-xs">
                    Escalator / Lift Concourse
                  </div>
                </div>
              )}

              {activeFloor === "Second Floor" && (
                <div className="w-full max-w-md aspect-4/3 relative bg-white rounded-2xl border-2 border-slate-300 p-4 shadow-sm flex flex-col justify-between">
                  <div className="grid grid-cols-2 gap-3 h-full">
                    <div className="bg-purple-100/90 border border-purple-300 rounded-xl p-3 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-black text-purple-900">
                        S-01
                      </span>
                      <span className="text-[11px] font-bold text-purple-800 mt-1">
                        Magic Frames Screens 1 & 2
                      </span>
                      <span className="text-[9px] text-purple-600">
                        Premium Cine Experience
                      </span>
                    </div>
                    <div className="bg-sky-50 border border-sky-200 rounded-xl p-3 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-black text-sky-900">
                        S-02
                      </span>
                      <span className="text-[11px] font-bold text-sky-800 mt-1">
                        Corporate Suites
                      </span>
                      <span className="text-[9px] text-sky-600">
                        Business & Professional
                      </span>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-black text-emerald-900">
                        S-03
                      </span>
                      <span className="text-[11px] font-bold text-emerald-800 mt-1">
                        Wellness & Clinic
                      </span>
                      <span className="text-[9px] text-emerald-600">
                        Health Chambers
                      </span>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-black text-amber-900">
                        S-04
                      </span>
                      <span className="text-[11px] font-bold text-amber-800 mt-1">
                        Kids Soft Play Park
                      </span>
                      <span className="text-[9px] text-amber-600">
                        Family Activity Zone
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-purple-700 text-white text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase shadow-xs">
                    Entertainment & Wellness Level
                  </div>
                </div>
              )}

              {activeFloor === "Third Floor" && (
                <div className="w-full max-w-md aspect-4/3 relative bg-white rounded-2xl border-2 border-slate-300 p-5 shadow-sm flex flex-col justify-around">
                  <div className="bg-amber-100/90 border border-amber-300 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-xs">
                    <span className="text-sm font-black text-amber-900">
                      T-01
                    </span>
                    <span className="text-xs font-bold text-amber-900 mt-1">
                      Rooftop Terrace Lounge
                    </span>
                    <span className="text-[10px] text-amber-700">
                      Open-Air Dining & Panoramic Edakkara Hills View
                    </span>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-xs">
                    <span className="text-sm font-black text-blue-900">
                      T-02
                    </span>
                    <span className="text-xs font-bold text-blue-900 mt-1">
                      Grand Event & Banquet Hall
                    </span>
                    <span className="text-[10px] text-blue-700">
                      Community Celebrations & Corporate Functions
                    </span>
                  </div>
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase shadow-xs">
                    Rooftop & Hospitality Level
                  </div>
                </div>
              )}

              {activeFloor === "All Floors" && (
                <div className="w-full max-w-md aspect-4/3 relative bg-white rounded-2xl border-2 border-slate-300 p-4 shadow-sm flex flex-col justify-between space-y-2">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-black text-amber-900">
                        Level 3 • Rooftop
                      </span>
                      <p className="text-[10px] text-slate-500">
                        Terrace Lounge & Banquet Hall
                      </p>
                    </div>
                    <span className="font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded text-[10px]">
                      2 Units
                    </span>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-2.5 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-black text-purple-900">
                        Level 2 • Cinema & Wellness
                      </span>
                      <p className="text-[10px] text-slate-500">
                        Magic Frames 1 & 2, Playzone, Clinic
                      </p>
                    </div>
                    <span className="font-bold text-purple-800 bg-purple-100 px-2 py-0.5 rounded text-[10px]">
                      4 Units
                    </span>
                  </div>
                  <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2.5 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-black text-indigo-900">
                        Level 1 • Fashion & Tech
                      </span>
                      <p className="text-[10px] text-slate-500">
                        Cinema Lobby, Brands, Cafe & Tech
                      </p>
                    </div>
                    <span className="font-bold text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded text-[10px]">
                      6 Units
                    </span>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-2.5 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-black text-blue-900">
                        Ground • Grand Retail & Food
                      </span>
                      <p className="text-[10px] text-slate-500">
                        KFC, Jewellery, Toys, Salon & More
                      </p>
                    </div>
                    <span className="font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded text-[10px]">
                      9 Units
                    </span>
                  </div>
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#0E5EC8] text-white text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase shadow-xs">
                    4-Level Mall Structure (21 Units)
                  </div>
                </div>
              )}

              <div className="text-[11px] text-slate-400 mt-4 flex items-center gap-4">
                <span>• State Highway Front Entrance</span>
                <span>• Malayora Highway Side Concourse</span>
              </div>
            </div>

            {/* Right Column: Floor Directory Table */}
            <div className="lg:col-span-6 space-y-4">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                      <th className="p-3.5">Unit Code</th>
                      <th className="p-3.5">Store / Brand Name</th>
                      {activeFloor === "All Floors" && (
                        <th className="p-3.5">Floor</th>
                      )}
                      <th className="p-3.5">Category</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {inlineDisplayedUnits.map((row, idx) => (
                      <tr
                        key={row.code + idx}
                        className="hover:bg-blue-50/40 transition-colors"
                      >
                        <td className="p-3.5 font-black text-[#0E5EC8]">
                          <span className="px-2 py-0.5 bg-blue-50 border border-blue-200 rounded font-mono">
                            {row.code}
                          </span>
                        </td>
                        <td className="p-3.5 font-bold text-slate-900">
                          <div>{row.name}</div>
                          <span className="text-[10px] font-normal text-slate-400">
                            {row.location}
                          </span>
                        </td>
                        {activeFloor === "All Floors" && (
                          <td className="p-3.5 font-medium text-slate-600 whitespace-nowrap">
                            {row.floor}
                          </td>
                        )}
                        <td className="p-3.5">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold border ${getCategoryBadgeClass(
                              row.category,
                            )}`}
                          >
                            {row.category}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* View Full Directory Button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setDirectoryFloor(activeFloor);
                    setDirectorySearch("");
                    setDirectoryCategory("All");
                    setIsFullDirectoryOpen(true);
                  }}
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-[#0E5EC8] text-white text-xs font-black uppercase tracking-wider transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>VIEW FULL DIRECTORY (ALL 21 UNITS)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Directory Interactive Modal */}
      {isFullDirectoryOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
          onClick={() => setIsFullDirectoryOpen(false)}
        >
          <div
            className="bg-white w-full max-w-4xl rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-200 bg-slate-50 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="p-1.5 bg-[#0E5EC8]/10 text-[#0E5EC8] rounded-lg">
                    <Building2 className="w-5 h-5" />
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    S Mall Edakkara — Full Directory
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Complete directory of all 21 retail stores, dining spots,
                  cinema screens & facilities across 4 floors.
                </p>
              </div>
              <button
                onClick={() => setIsFullDirectoryOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                aria-label="Close directory"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Filter Controls Bar */}
            <div className="p-4 sm:p-6 border-b border-slate-200 bg-white space-y-4">
              {/* Search input */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={directorySearch}
                  onChange={(e) => setDirectorySearch(e.target.value)}
                  placeholder="Search stores, brands, or unit code (e.g. KFC, G-01, Cinema, Salon)..."
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0E5EC8] focus:bg-white text-slate-900 transition-colors"
                />
                {directorySearch && (
                  <button
                    onClick={() => setDirectorySearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Floor & Category Filter Pills */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                {/* Floor Filter */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                  <span className="font-bold text-slate-500 text-[11px] uppercase mr-1 whitespace-nowrap">
                    Floor:
                  </span>
                  {[
                    "All Floors",
                    "Ground Floor",
                    "First Floor",
                    "Second Floor",
                    "Third Floor",
                  ].map((fl) => (
                    <button
                      key={fl}
                      onClick={() => setDirectoryFloor(fl)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                        directoryFloor === fl
                          ? "bg-[#0E5EC8] text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {fl}
                    </button>
                  ))}
                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                  <span className="font-bold text-slate-500 text-[11px] uppercase mr-1 whitespace-nowrap">
                    Category:
                  </span>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setDirectoryCategory(cat)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                        directoryCategory === cat
                          ? "bg-slate-900 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span>
                  Showing{" "}
                  <strong className="text-slate-900">
                    {modalFilteredUnits.length}
                  </strong>{" "}
                  of {allUnits.length} units
                </span>
                {(directorySearch ||
                  directoryFloor !== "All Floors" ||
                  directoryCategory !== "All") && (
                  <button
                    onClick={() => {
                      setDirectorySearch("");
                      setDirectoryFloor("All Floors");
                      setDirectoryCategory("All");
                    }}
                    className="text-[#0E5EC8] hover:underline font-bold text-xs cursor-pointer"
                  >
                    Reset all filters
                  </button>
                )}
              </div>
            </div>

            {/* Table Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50/50">
              {modalFilteredUnits.length === 0 ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
                    <Search className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">
                    No units found matching your criteria
                  </h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Try searching for another store name, unit code, or reset
                    the filters.
                  </p>
                  <button
                    onClick={() => {
                      setDirectorySearch("");
                      setDirectoryFloor("All Floors");
                      setDirectoryCategory("All");
                    }}
                    className="px-4 py-2 bg-white border border-slate-300 rounded-xl text-xs font-bold text-[#0E5EC8] hover:bg-slate-50 cursor-pointer"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px] sticky top-0 z-10 backdrop-blur-xs">
                        <th className="p-3.5">Unit Code</th>
                        <th className="p-3.5">Store / Outlet</th>
                        <th className="p-3.5">Category</th>
                        <th className="p-3.5">Floor Level</th>
                        <th className="p-3.5">Concourse Zone</th>
                        <th className="p-3.5">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {modalFilteredUnits.map((row, idx) => (
                        <tr
                          key={row.code + idx}
                          className="hover:bg-blue-50/50 transition-colors"
                        >
                          <td className="p-3.5 font-black text-[#0E5EC8] whitespace-nowrap">
                            <span className="px-2 py-1 bg-blue-50 border border-blue-200 rounded-md font-mono">
                              {row.code}
                            </span>
                          </td>
                          <td className="p-3.5 font-bold text-slate-900">
                            {row.name}
                          </td>
                          <td className="p-3.5">
                            <span
                              className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold border ${getCategoryBadgeClass(
                                row.category,
                              )}`}
                            >
                              {row.category}
                            </span>
                          </td>
                          <td className="p-3.5 font-medium text-slate-700 whitespace-nowrap">
                            {row.floor}
                          </td>
                          <td className="p-3.5 text-slate-500 whitespace-nowrap">
                            {row.location || "Main Concourse"}
                          </td>
                          <td className="p-3.5 whitespace-nowrap">
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                row.status === "Open Now"
                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                  : "bg-amber-50 text-amber-700 border border-amber-200"
                              }`}
                            >
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Phone className="w-4 h-4 text-[#0E5EC8]" />
                <span>Concierge & Help Desk: </span>
                <a
                  href="tel:+919447175232"
                  className="font-bold text-slate-900 hover:text-[#0E5EC8]"
                >
                  +91 94471 75232
                </a>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href="https://wa.me/919447175232?text=Hi%2C%20I%20am%20looking%20for%20a%20store%20at%20S%20Mall%20Edakkara."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Concierge</span>
                </a>
                <button
                  onClick={() => setIsFullDirectoryOpen(false)}
                  className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
