import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import PropertySection from '../components/PropertySection';
import CommercialPropertyInventory from '../components/home/HomePropertySections';
import { 
  Building2, 
  Sparkles, 
  Layers, 
  Store, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Maximize2,
  FileText,
  Phone,
  Compass,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink
} from 'lucide-react';

const floorPlanData = {
  "Ground Floor": {
    name: "Ground Floor",
    title: "Ground Floor Architectural Plan",
    image: "/images/ground-floor-plan.png",
    sqFt: "6,220 sq. ft.",
    highlights: "Rear Right Wing (Waiting for Big Project) & Driveway Extension Area (അനുമതിക്ക് Area - 2500 FT)",
    tenants: "Jewellery Concourse, Fancy & Footwear corridor, Front State Highway Access"
  },
  "First Floor": {
    name: "First Floor",
    title: "First Floor Architectural Plan",
    image: "/images/first-floor-plan.png",
    sqFt: "7,779 sq. ft.",
    highlights: "Reserved for Supermarket / Big Project & Rear Left Wing (3 units marked NIL)",
    tenants: "Boutique corridor (പുതിയത്), Diagnostics / Clinic bays, Anchor Supermarket space"
  },
  "Second Floor": {
    name: "Second Floor",
    title: "Second Floor Architectural Plan",
    image: "/images/second-floor-plan.png",
    sqFt: "5,800 sq. ft.",
    highlights: "Now Planned for Big Project, Magic Frames cinema concourse, Beauty Parlour & Toys zone",
    tenants: "Magic Frames Multiplex, Lifestyle Salon, Kids Toys & Anchor entertainment expansion"
  },
  "All Floors": {
    name: "All Floors Master Blueprint",
    title: "Complete Master Blueprint (Ground, 1st & 2nd Floor)",
    image: "/images/all-floors-plan.png",
    sqFt: "19,799 sq. ft.",
    highlights: "Comprehensive architectural blueprint displaying all 3 levels side-by-side",
    tenants: "Full mall architectural layout across all 3 levels"
  }
};

export default function PropertiesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const branchParam = searchParams.get('branch');
  const typeParam = searchParams.get('type') || 'all';
  const categoryQuery = searchParams.get('category'); // "sale" | "rent" | "blueprints" | "all"

  // Active Tab: default to URL param or "all"
  const [activeTab, setActiveTab] = useState(
    categoryQuery === 'sale' ? 'sale' :
    categoryQuery === 'rent' ? 'rent' :
    categoryQuery === 'blueprints' ? 'blueprints' : 'all'
  );

  // Sync state if URL changes externally
  useEffect(() => {
    if (categoryQuery === 'sale') setActiveTab('sale');
    else if (categoryQuery === 'rent') setActiveTab('rent');
    else if (categoryQuery === 'blueprints') setActiveTab('blueprints');
    else if (categoryQuery === 'all' || !categoryQuery) setActiveTab('all');
  }, [categoryQuery]);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    const nextParams = new URLSearchParams(searchParams);
    if (newTab === 'all') {
      nextParams.delete('category');
    } else {
      nextParams.set('category', newTab);
    }
    setSearchParams(nextParams);
  };

  // Quick Blueprint Modal State
  const [blueprintModal, setBlueprintModal] = useState(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setBlueprintModal(null);
    };
    if (blueprintModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [blueprintModal]);

  const openBlueprint = (floorName) => {
    setBlueprintModal(floorName);
    setZoom(1);
  };

  return (
    <div className="w-full bg-[#F5F7FA]">
      
      {/* 1. Hero Section matching site design language */}
      <section className="relative min-h-[420px] lg:min-h-[480px] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-1600.webp"
            alt="S. Mall Commercial Concourse"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-[#F9B00C] text-[#1F2937] shadow-sm uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#1F2937]" />
              <span>S. Mall Edakkara • Landmark Commercial Hub</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Commercial Real Estate & <br />
              <span className="text-[#F9B00C]">Retail Inventory.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
              Explore verified commercial ownership opportunities, prime retail showrooms, high-footfall concourse shops, and flexible commercial leasing inventory positioned directly on the State Highway (Calicut-Ooty CNG Road) with Malayora Highway corner visibility.
            </p>

            {/* Key Statistics Strip */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-white">
              <div className="bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                <div className="text-lg sm:text-xl font-black text-[#F9B00C]">19,000+</div>
                <div className="text-[11px] text-slate-300 font-medium">Sq. Ft. Footprint</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                <div className="text-lg sm:text-xl font-black text-white">Dual Highway</div>
                <div className="text-[11px] text-slate-300 font-medium">State & Hill Road</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                <div className="text-lg sm:text-xl font-black text-[#F9B00C]">100% Clear</div>
                <div className="text-[11px] text-slate-300 font-medium">Titles & Verified Units</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                <div className="text-lg sm:text-xl font-black text-white">3 Levels</div>
                <div className="text-[11px] text-slate-300 font-medium">Ground, 1st & 2nd Floor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Category Tabs Switcher */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => handleTabChange('all')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-[#0E5EC8] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Properties
              </button>

              <button
                onClick={() => handleTabChange('sale')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'sale'
                    ? 'bg-[#0E5EC8] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                For Sale (Freehold)
              </button>

              <button
                onClick={() => handleTabChange('rent')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'rent'
                    ? 'bg-[#0E5EC8] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Commercial Rentals
              </button>

              <button
                onClick={() => handleTabChange('blueprints')}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'blueprints'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Floor Plans & Diagrams</span>
              </button>
            </div>

            {/* Quick Action Button */}
            <button
              onClick={() => openBlueprint("All Floors")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E5EC8] hover:text-blue-800 transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#F9B00C]" />
              <span>Open Master Blueprint Lightbox</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Architectural Floor Plan Quick Strip (shown unless in blueprint tab) */}
      {activeTab !== 'blueprints' && (
        <section className="bg-slate-50 border-b border-slate-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-600" />
                  Architectural Floor Diagrams & Master Layout
                </h2>
                <p className="text-xs text-slate-500">
                  Select a floor to view detailed architectural plans, corridor allocations, and unit dimensions
                </p>
              </div>
              <button
                onClick={() => handleTabChange('blueprints')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 self-start md:self-auto"
              >
                <span>View Full Leasing Inventory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Floor Quick Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { key: "Ground Floor", name: "Ground Floor", desc: "Jewellery, Waiting for Big Project & 2500 FT Extension", tag: "Level 0" },
                { key: "First Floor", name: "First Floor", desc: "Supermarket Anchor, Boutique Corridor & Clinic Bays", tag: "Level 1" },
                { key: "Second Floor", name: "Second Floor", desc: "Magic Frames Multiplex, Toys, Beauty Parlour & Expansion", tag: "Level 2" },
                { key: "All Floors", name: "Master Blueprint", desc: "Complete 3-Level Side-by-Side Blueprint Layout", tag: "All Levels" },
              ].map((floor) => (
                <div
                  key={floor.key}
                  onClick={() => openBlueprint(floor.key)}
                  className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {floor.name}
                    </span>
                    <span className="text-[10px] font-mono font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      {floor.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed mb-2.5">
                    {floor.desc}
                  </p>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-600 group-hover:translate-x-0.5 transition-transform">
                    <Maximize2 className="w-3 h-3" />
                    <span>Enlarge Floor Diagram &rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Tab Content: Either Property Listings OR Full Commercial Leasing Inventory */}
      {activeTab === 'blueprints' ? (
        <div className="bg-slate-100 py-6">
          <CommercialPropertyInventory />
        </div>
      ) : (
        <div className="py-4">
          <PropertySection
            title={
              activeTab === 'sale'
                ? "Available Properties for Purchase"
                : activeTab === 'rent'
                ? "Available Commercial Rental Units"
                : "All Commercial Property Listings"
            }
            subtitle={
              activeTab === 'sale'
                ? "Explore fully verified commercial ownership opportunities with transparent pricing and freehold titles"
                : activeTab === 'rent'
                ? "Turnkey commercial units, concourse shops, and dining spaces available for immediate lease"
                : "Comprehensive catalog of commercial units available for freehold acquisition and lease"
            }
            category={activeTab}
            propertyTypeFilter={typeParam}
            branchId={branchParam}
            showFilters={true}
          />
        </div>
      )}

      {/* 5. Custom Space & Advisory Support CTA */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 to-blue-950 rounded-2xl p-6 sm:p-10 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F9B00C]">
                Dedicated Leasing & Investment Advisory
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Looking for Custom Space or Anchor Placement?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect directly with the S. Mall Management Desk for bespoke unit configurations, contiguous floor allocations, pre-leased investor units, and site inspection tours.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/919447175232?text=Hello%20S.%20Mall%20Management%2C%20I%20would%20like%20to%20enquire%20about%20commercial%20space%20options."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Leasing Desk</span>
              </a>

              <a
                href="tel:+919447175232"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#0E5EC8]" />
                <span>+91 94471 75232</span>
              </a>
            </div>

            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 6. Quick Blueprint Lightbox Modal on Properties Page */}
      {blueprintModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setBlueprintModal(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[94vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:px-6 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  {floorPlanData[blueprintModal]?.title || `${blueprintModal} Architectural Plan`}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Total Floor Space: <strong className="text-slate-800">{floorPlanData[blueprintModal]?.sqFt}</strong> • S. Mall Edakkara
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 shadow-xs">
                  <button
                    onClick={() => setZoom((z) => Math.max(0.75, z - 0.25))}
                    className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded cursor-pointer"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="px-2 text-xs font-mono font-semibold text-slate-700 min-w-[42px] text-center">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button
                    onClick={() => setZoom((z) => Math.min(3, z + 0.25))}
                    className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded cursor-pointer"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  {zoom !== 1 && (
                    <button
                      onClick={() => setZoom(1)}
                      className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded cursor-pointer"
                      title="Reset Zoom"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <a
                  href={floorPlanData[blueprintModal]?.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 shadow-xs cursor-pointer transition-colors"
                  title="Open Original High-Res in New Tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setBlueprintModal(null)}
                  className="p-2 text-slate-500 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 shadow-xs cursor-pointer transition-colors"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Floor Switcher Tabs inside Modal */}
            <div className="bg-slate-100 px-4 sm:px-6 py-2 border-b border-slate-200 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
                Select Floor:
              </span>
              {["Ground Floor", "First Floor", "Second Floor", "All Floors"].map((fKey) => (
                <button
                  key={fKey}
                  onClick={() => {
                    setBlueprintModal(fKey);
                    setZoom(1);
                  }}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    blueprintModal === fKey
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {fKey}
                </button>
              ))}
            </div>

            {/* Modal Image Viewport */}
            <div className="flex-1 overflow-auto bg-[#FAF8F3] p-4 sm:p-6 flex items-center justify-center min-h-[350px] max-h-[62vh] relative select-none">
              <div
                className="transition-transform duration-150 origin-center flex items-center justify-center"
                style={{ transform: `scale(${zoom})` }}
              >
                <img
                  src={floorPlanData[blueprintModal]?.image}
                  alt={floorPlanData[blueprintModal]?.title || "Floor Plan"}
                  className="max-h-[58vh] max-w-full object-contain rounded-lg shadow-md border border-slate-200/80"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 border-t border-slate-200 px-4 sm:px-6 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="text-slate-600">
                <span className="font-semibold text-slate-800">Highlights:</span>{" "}
                {floorPlanData[blueprintModal]?.highlights}
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={`https://wa.me/919447175232?text=${encodeURIComponent(
                    `Hello S. Mall Leasing Desk, I would like more information about commercial spaces on ${blueprintModal}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Enquire via WhatsApp
                </a>
                <button
                  onClick={() => setBlueprintModal(null)}
                  className="px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold transition-colors"
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
