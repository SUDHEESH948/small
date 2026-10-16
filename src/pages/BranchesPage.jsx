import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  ChevronRight
} from 'lucide-react';
import BranchSection from '../components/BranchSection';

import magicFramesImg from '../assets/magicframes.jpeg';
import mayoodiyaImg from '../assets/mayoodiyajewellery.jpeg';
import boutiqueImg from '../assets/botique.jpeg';
import lenoraImg from '../assets/lenorafancy.jpeg';
import surprezToysImg from '../assets/surpreztoys.jpeg';
import heroImagePng from '../assets/homepage/heroimage.png';

export default function BranchesPage() {
  const [searchParams] = useSearchParams();
  const initialBranch = searchParams.get('id');

  // Active category filter tab
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeFloor, setActiveFloor] = useState('Ground Floor');

  const categories = ['All', 'Shopping', 'Dining', 'Entertainment', 'Lifestyle', 'Services'];

  const stores = [
    {
      id: 'store-1',
      name: 'Magic Frames Cinema',
      tagline: 'Movies, More Than Movies',
      category: 'Entertainment',
      image: magicFramesImg,
      fallback: '/images/magicframes.jpeg',
      badge: 'Entertainment'
    },
    {
      id: 'store-2',
      name: 'KFC',
      tagline: 'Finger Lickin’ Good',
      category: 'Dining',
      image: '/images/dining.webp',
      fallback: '/images/dining.webp',
      badge: 'Dining'
    },
    {
      id: 'store-3',
      name: 'Mayoodiya Jewellery',
      tagline: 'Timeless Elegance & Bridal Gold',
      category: 'Shopping',
      image: mayoodiyaImg,
      fallback: '/images/mayoodiyajewellery.jpeg',
      badge: 'Shopping'
    },
    {
      id: 'store-4',
      name: 'Fashion Boutique',
      tagline: 'Designer Ethnic Wear & Modern Apparel',
      category: 'Shopping',
      image: boutiqueImg,
      fallback: '/images/botique.jpeg',
      badge: 'Shopping'
    },
    {
      id: 'store-5',
      name: 'Surprez Toys',
      tagline: 'Fun, Learning & Smiles for Kids',
      category: 'Entertainment',
      image: surprezToysImg,
      fallback: '/images/surpreztoys.jpeg',
      badge: 'Entertainment'
    },
    {
      id: 'store-lenora',
      name: 'Lenora Fancy & Footwear',
      tagline: 'Accessories, Footwear & Novelty Gifts',
      category: 'Shopping',
      image: lenoraImg,
      fallback: '/images/lenorafancy.jpeg',
      badge: 'Shopping'
    },
    {
      id: 'store-6',
      name: 'Premium Salon',
      tagline: 'Style, Relax, Rejuvenate',
      category: 'Lifestyle',
      image: '/images/about.webp',
      fallback: '/images/about.webp',
      badge: 'Lifestyle'
    },
    {
      id: 'store-7',
      name: 'Supermarket (Coming Soon)',
      tagline: 'Fresh Choices, Everyday Needs',
      category: 'Shopping',
      image: '/images/shopping-800.webp',
      fallback: '/images/shopping-800.webp',
      badge: 'Coming Soon'
    },
    {
      id: 'store-8',
      name: 'Gaming Zone (Coming Soon)',
      tagline: 'Play, Connect, Enjoy',
      category: 'Entertainment',
      image: '/images/entertainment-800.webp',
      fallback: '/images/entertainment-800.webp',
      badge: 'Coming Soon'
    },
    {
      id: 'store-9',
      name: 'Food Court (Coming Soon)',
      tagline: 'A World of Flavours',
      category: 'Dining',
      image: '/images/dining-800.webp',
      fallback: '/images/dining-800.webp',
      badge: 'Coming Soon'
    }
  ];

  const filteredStores = stores.filter(store => {
    if (activeCategory === 'All') return true;
    return store.category === activeCategory;
  });

  const floorDirectory = {
    'Ground Floor': [
      { code: 'G-01', name: 'KFC', category: 'Dining' },
      { code: 'G-02', name: 'Fashion Boutique', category: 'Shopping' },
      { code: 'G-03', name: 'Surprez Toys', category: 'Entertainment' },
      { code: 'G-04', name: 'Premium Salon', category: 'Lifestyle' },
      { code: 'G-05', name: 'Mayoodiya Jewellery', category: 'Shopping' },
      { code: 'G-06', name: 'Lenora Fancy & Footwear', category: 'Shopping' },
      { code: 'G-07', name: 'Supermarket (Coming Soon)', category: 'Shopping' },
      { code: 'G-08', name: 'Food Court (Coming Soon)', category: 'Dining' },
      { code: 'G-09', name: 'Gaming Zone (Coming Soon)', category: 'Entertainment' }
    ],
    'First Floor': [
      { code: 'F-01', name: 'Magic Frames Cinema Lobby', category: 'Entertainment' },
      { code: 'F-02', name: 'Fashion Brand Store', category: 'Shopping' },
      { code: 'F-03', name: 'Kids Apparels', category: 'Shopping' },
      { code: 'F-04', name: 'Footwear & Accessories', category: 'Shopping' },
      { code: 'F-05', name: 'Mobile & Tech Hub', category: 'Services' },
      { code: 'F-06', name: 'Cafe & Bake House', category: 'Dining' }
    ],
    'Second Floor': [
      { code: 'S-01', name: 'Magic Frames Screen 1 & 2', category: 'Entertainment' },
      { code: 'S-02', name: 'Corporate Office Suites', category: 'Services' },
      { code: 'S-03', name: 'Wellness & Clinical Chambers', category: 'Lifestyle' },
      { code: 'S-04', name: 'Kids Soft Play Park', category: 'Entertainment' }
    ],
    'Third Floor': [
      { code: 'T-01', name: 'Rooftop Terrace Lounge', category: 'Dining' },
      { code: 'T-02', name: 'Event & Banquet Hall', category: 'Services' }
    ]
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
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Explore <br />
              every corner <br />
              <span className="text-[#F9B00C]">of S mall.</span>
            </h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-lg leading-relaxed font-normal">
              From shopping and dining to entertainment and lifestyle, discover everything we have for you.
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
                  ? 'bg-[#0E5EC8] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
            {filteredStores.map((store) => (
              <div
                key={store.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#0E5EC8]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                  <img
                    src={store.image}
                    alt={store.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = store.fallback || "/images/shopping.webp";
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                    <span className="text-[#0E5EC8] group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. "Mall Directory." Section with Interactive Floor Plan Map and Table matching screenshot */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Mall Directory.
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Explore stores and services floor by floor
              </p>
            </div>

            {/* Floor selector buttons matching screenshot */}
            <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 overflow-x-auto">
              {['Ground Floor', 'First Floor', 'Second Floor', 'Third Floor'].map((floor) => (
                <button
                  key={floor}
                  onClick={() => setActiveFloor(floor)}
                  className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                    activeFloor === floor
                      ? 'bg-[#0E5EC8] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {floor}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Layout: Left Floor Diagram + Right Directory Table */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Stylized 2D Floor Plan Diagram matching screenshot */}
            <div className="lg:col-span-6 bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-inner flex flex-col items-center justify-center min-h-[380px] relative overflow-hidden">
              <span className="absolute top-4 left-4 text-xs font-black uppercase tracking-wider text-slate-400">
                Floor Plan Layout • {activeFloor}
              </span>

              {/* Architectural 2D Floor Plan Graphic */}
              <div className="w-full max-w-md aspect-4/3 relative bg-white rounded-2xl border-2 border-slate-300 p-4 shadow-sm">
                
                {/* Central Atrium */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-20 bg-blue-100/70 rounded-xl border border-blue-300 flex items-center justify-center text-[10px] font-black text-[#0E5EC8]">
                  CENTRAL ATRIUM
                </div>

                {/* Zoned Units around Concourse */}
                <div className="absolute top-3 left-3 w-24 h-16 bg-amber-100/80 rounded-lg border border-amber-300 flex items-center justify-center text-xs font-bold text-amber-900">
                  G-01
                </div>
                <div className="absolute top-3 right-3 w-28 h-16 bg-blue-50 rounded-lg border border-blue-200 flex items-center justify-center text-xs font-bold text-blue-900">
                  G-02
                </div>
                <div className="absolute bottom-3 left-3 w-24 h-20 bg-emerald-50 rounded-lg border border-emerald-200 flex items-center justify-center text-xs font-bold text-emerald-900">
                  G-03
                </div>
                <div className="absolute bottom-3 right-3 w-28 h-20 bg-purple-50 rounded-lg border border-purple-200 flex items-center justify-center text-xs font-bold text-purple-900">
                  G-04
                </div>
                <div className="absolute top-1/2 left-3 -translate-y-1/2 w-16 h-12 bg-rose-50 rounded border border-rose-200 flex items-center justify-center text-[11px] font-bold text-rose-900">
                  G-05
                </div>
                <div className="absolute top-1/2 right-3 -translate-y-1/2 w-16 h-12 bg-sky-50 rounded border border-sky-200 flex items-center justify-center text-[11px] font-bold text-sky-900">
                  G-06
                </div>

                {/* Entry Indicator */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#0E5EC8] text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
                  Main Highway Entry
                </div>
              </div>

              <div className="text-[11px] text-slate-400 mt-4 flex items-center gap-4">
                <span>• State Highway Front Entrance</span>
                <span>• Malayora Highway Side Concourse</span>
              </div>
            </div>

            {/* Right Column: Floor Directory Table matching screenshot */}
            <div className="lg:col-span-6 space-y-4">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                      <th className="p-3.5">Unit Code</th>
                      <th className="p-3.5">Store / Brand Name</th>
                      <th className="p-3.5">Category</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {(floorDirectory[activeFloor] || []).map((row, idx) => (
                      <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                        <td className="p-3.5 font-black text-[#0E5EC8]">{row.code}</td>
                        <td className="p-3.5 font-bold text-slate-900">{row.name}</td>
                        <td className="p-3.5 text-slate-500">{row.category}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* View Full Directory Button matching screenshot */}
              <div className="pt-2">
                <button
                  onClick={() => alert(`Full directory for S mall Edakkara: ${floorDirectory[activeFloor].length} retail units on this floor.`)}
                  className="w-full py-3 rounded-xl border border-slate-300 hover:border-[#0E5EC8] hover:text-[#0E5EC8] hover:bg-blue-50 text-slate-700 text-xs font-black uppercase tracking-wider transition-all"
                >
                  VIEW FULL DIRECTORY →
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Mall Branches Network Explorer (BranchSection) */}
      <BranchSection
        title="Our Mall Network & Highway Branches"
        subtitle="Explore our commercial shopping complexes and transit junctions"
        initialBranchId={initialBranch}
        featuredOnly={false}
      />

    </div>
  );
}
