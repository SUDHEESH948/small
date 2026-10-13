import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  Tv2
} from 'lucide-react';

export default function ExperiencesPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#F5F7FA]">
      
      {/* 1. Hero Section matching screenshot: "Experiences beyond shopping." */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/entertainment.webp"
            alt="S mall Experiences"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Experiences <br />
              <span className="text-[#F9B00C]">beyond shopping.</span>
            </h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-lg leading-relaxed font-normal">
              Movies, dining, entertainment, events and more — there's always something to look forward to at S mall.
            </p>
          </div>
        </div>
      </section>

      {/* 2. "At the Movies" Section matching screenshot */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              At the Movies
            </h2>
            <button 
              onClick={() => alert("Magic Frames Cinemas tickets booking schedule coming soon!")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E5EC8] hover:text-blue-800 transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Featured Cinema Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950 min-h-[360px] sm:min-h-[420px] flex items-end p-6 sm:p-10 group">
            <img
              src="/images/entertainment-800.webp"
              alt="Magic Frames Cinemas"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 w-full">
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
                  href="https://in.bookmyshow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#F9B00C] hover:bg-[#e5a007] text-[#1F2937] px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg active:scale-95 transition-all"
                >
                  <span>BOOK TICKETS</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* 4 Feature Badges Row matching screenshot */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <Film className="w-5 h-5 text-[#0E5EC8] shrink-0" />
              <span className="text-xs font-bold text-slate-800">Latest Movies</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <Languages className="w-5 h-5 text-[#0E5EC8] shrink-0" />
              <span className="text-xs font-bold text-slate-800">Multiple Languages</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <Armchair className="w-5 h-5 text-[#0E5EC8] shrink-0" />
              <span className="text-xs font-bold text-slate-800">Comfortable Seating</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <Popcorn className="w-5 h-5 text-[#0E5EC8] shrink-0" />
              <span className="text-xs font-bold text-slate-800">Blockbuster Experience</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. "Food & Dining" Section matching screenshot */}
      <section className="py-14 sm:py-20 bg-[#F5F7FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Food & Dining
            </h2>
            <button 
              onClick={() => navigate('/explore')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E5EC8] hover:text-blue-800 transition-colors"
            >
              <span>View all</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* KFC */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-1/2 aspect-16/10 sm:aspect-square overflow-hidden bg-slate-100">
                <img src="/images/dining.webp" alt="KFC" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 sm:w-1/2 space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#0E5EC8] tracking-wider block">Fast Food & Chicken</span>
                <h3 className="text-lg font-black text-slate-900">KFC</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Great food for every mood. Fresh hot chicken and signature treats.
                </p>
                <div className="pt-2 text-xs font-bold text-[#0E5EC8] inline-flex items-center gap-1">
                  <span>Visit Store</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Food Court */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-1/2 aspect-16/10 sm:aspect-square overflow-hidden bg-slate-100">
                <img src="/images/dining-800.webp" alt="Food Court" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 sm:w-1/2 space-y-2">
                <span className="text-[10px] uppercase font-bold text-amber-600 tracking-wider block">Multi-Cuisine</span>
                <h3 className="text-lg font-black text-slate-900">Food Court (Coming Soon)</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  A variety of cuisines under one roof, from authentic Kerala delicacies to continental snacks.
                </p>
                <div className="pt-2 text-xs font-bold text-[#0E5EC8] inline-flex items-center gap-1">
                  <span>Explore Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. "Family Fun" Section matching screenshot */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Family Fun
            </h2>
            <button 
              onClick={() => navigate('/explore')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E5EC8] hover:text-blue-800 transition-colors"
            >
              <span>View all</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Toys Store */}
            <div className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-1/2 aspect-16/10 sm:aspect-square overflow-hidden bg-slate-200">
                <img src="/images/experience.webp" alt="Toys Store" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 sm:w-1/2 space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#0E5EC8] tracking-wider block">Kids & Play</span>
                <h3 className="text-lg font-black text-slate-900">Toys Store</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  A world of toys, learning puzzles and smiles for little explorers.
                </p>
              </div>
            </div>

            {/* Gaming Zone */}
            <div className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-1/2 aspect-16/10 sm:aspect-square overflow-hidden bg-slate-200">
                <img src="/images/entertainment.webp" alt="Gaming Zone" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 sm:w-1/2 space-y-2">
                <span className="text-[10px] uppercase font-bold text-amber-600 tracking-wider block">Arcade & VR</span>
                <h3 className="text-lg font-black text-slate-900">Gaming Zone (Coming Soon)</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Play, connect, enjoy arcade simulations, VR adventures, and prize games.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. "Lifestyle & Wellness" Section matching screenshot */}
      <section className="py-14 sm:py-20 bg-[#F5F7FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Lifestyle & Wellness
            </h2>
            <button 
              onClick={() => navigate('/explore')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E5EC8] hover:text-blue-800 transition-colors"
            >
              <span>View all</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Premium Salon */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-1/2 aspect-16/10 sm:aspect-square overflow-hidden bg-slate-100">
                <img src="/images/about.webp" alt="Premium Salon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 sm:w-1/2 space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#0E5EC8] tracking-wider block">Beauty & Grooming</span>
                <h3 className="text-lg font-black text-slate-900">Premium Salon</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Style, relax, rejuvenate. Expert hair styling, skincare, and bridal grooming.
                </p>
              </div>
            </div>

            {/* Shopping */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-1/2 aspect-16/10 sm:aspect-square overflow-hidden bg-slate-100">
                <img src="/images/shopping-480.webp" alt="Shopping" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 sm:w-1/2 space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#0E5EC8] tracking-wider block">Fashion & Jewellery</span>
                <h3 className="text-lg font-black text-slate-900">Shopping</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Fashion, accessories, bridal jewellery, gifts and more from top brands.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Bottom Banner CTA: "Make more memories here." matching screenshot */}
      <section className="relative py-20 bg-slate-950 overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-1600.webp"
            alt="Family outing"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Make more memories here.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            From movie nights to family outings, S mall is your destination for moments that matter.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/contact')}
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

