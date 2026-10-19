import React, { useState, useEffect } from "react";
import {
  Layers,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
  MessageSquare,
  Phone,
  Building2,
  CheckCircle2,
  Sparkles,
  MapPin,
  Compass,
} from "lucide-react";

// Floor data corresponding directly to the uploaded 2D architectural blueprint diagram
const floorData = [
  {
    id: "ground-floor",
    floor: "Ground Floor",
    level: "Level 0",
    floorPlanImage: "/images/ground-floor-plan.png",
    totalSqFt: "6,220+ sq. ft. Available Space",
    tagline:
      "State Highway Frontage, Jewellery Concourse, Waiting for Big Project & 2500 FT Extension Area",
    zones: [
      {
        id: "GF-RR",
        name: "Waiting for Big Project (Rear Right Wing)",
        sqFt: "3,720 sq. ft.",
        status: "Waiting for Big Project",
        statusColor: "bg-amber-100 text-amber-800 border-amber-300",
        description:
          "Contiguous anchor commercial footprint ideal for department stores, anchor retailers, or flagship commercial outlets with high visibility.",
        highlight:
          "Contiguous anchor unit directly connected to the main circulation concourse.",
        unitCrop: "/images/unit-gf-rr.png",
      },
      {
        id: "GF-EXT",
        name: "Driveway Extension Area (അനുമതിക്ക് Area)",
        sqFt: "2,500 sq. ft.",
        status: "Available (അനുമതിക്ക് Area)",
        statusColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
        description:
          "Strategically positioned adjacent to the vehicular access driveway and Malayora Highway side-road forecourt. Ideal for drive-through amenity, open-air café, or commercial kiosks.",
        highlight:
          "Direct driveway access and corner visibility between State & Hill Highway.",
        unitCrop: "/images/unit-gf-ext.png",
      },
      {
        id: "GF-JWL",
        name: "Jewellery Concourse (Front Left Wing)",
        sqFt: "2,118 sq. ft. Total",
        status: "Commercial Retail Concourse",
        statusColor: "bg-purple-100 text-purple-800 border-purple-300",
        breakdown: "4 Units: 780 + 485 + 425 + 428 sq. ft.",
        description:
          "Dedicated high-security jewellery and gold retail corridor featuring prominent storefronts directly accessible from the main highway entrance.",
        highlight:
          "Heavy daily footfall from main entrance facing Calicut-Ooty CNG Road.",
      },
      {
        id: "GF-FCY",
        name: "Fancy & Footwear Wing (Rear Left Wing)",
        sqFt: "1,387 sq. ft. Total",
        status: "Commercial Retail Corridor",
        statusColor: "bg-pink-100 text-pink-800 border-pink-300",
        breakdown: "3 Units: 485 + 474 + 428 sq. ft.",
        description:
          "Prime retail corridor specialized for branded footwear, fancy items, accessories, and cosmetics adjacent to the central escalator hub.",
        highlight:
          "Immediate proximity to customer elevator, escalators, and stairwells.",
      },
      {
        id: "GF-SHW",
        name: "Highway Frontage Retail Showrooms (Front Right Wing)",
        sqFt: "2,068 sq. ft. Total",
        status: "Frontage Showrooms",
        statusColor: "bg-blue-100 text-blue-800 border-blue-300",
        breakdown: "4 Units: 730 + 485 + 425 + 428 sq. ft.",
        description:
          "High-visibility glass-facade showrooms enjoying direct exposure to interstate traffic moving along the Calicut-Nilambur-Gudalur State Highway.",
        highlight:
          "Maximum street frontage and signage exposure for marquee brands.",
      },
    ],
  },
  {
    id: "first-floor",
    floor: "First Floor",
    level: "Level 1",
    floorPlanImage: "/images/first-floor-plan.png",
    totalSqFt: "7,779+ sq. ft. Available Space",
    tagline:
      "Reserved for Supermarket or Big Project, Boutique Corridor & Clinic / Corporate Bays",
    zones: [
      {
        id: "FF-RW",
        name: "Reserved for Supermarket / Big Project (Right Wing)",
        sqFt: "6,322 sq. ft.",
        status: "Reserved for Supermarket / Big Project",
        statusColor: "bg-purple-100 text-purple-800 border-purple-300",
        breakdown: "Rear hall (4,200 sq. ft.) + Front units (2,122 sq. ft.)",
        description:
          "Expansive contiguous commercial footprint dedicated to high-volume supermarket, hypermarket, fitness studio, or entertainment hub with dedicated goods elevator.",
        highlight:
          "Direct escalators and freight access for high-volume customer flow.",
        unitCrop: "/images/unit-ff-rw.png",
      },
      {
        id: "FF-BTQ",
        name: "Boutique & Fashion Corridor (പുതിയത് - Left Wing)",
        sqFt: "2,122 sq. ft. Total",
        status: "Fashion & Lifestyle Boutiques",
        statusColor: "bg-sky-100 text-sky-800 border-sky-300",
        breakdown: "4 Units: 735 + 485 + 474 + 428 sq. ft. (Cyan Highlighted)",
        description:
          "Curated designer fashion, textile, and lifestyle boutique corridor overlooking the central atrium with bright natural illumination.",
        highlight:
          "Wide concourse walkway with cyan-highlighted anchor boutique space (428 sq. ft.).",
      },
      {
        id: "FF-RL",
        name: "Vacant Commercial Bays (Rear Left - Marked NIL)",
        sqFt: "1,457 sq. ft. Total",
        status: "Vacant (Marked NIL)",
        statusColor: "bg-blue-100 text-blue-800 border-blue-300",
        breakdown: "3 Units: 462 + 515 + 480 sq. ft.",
        description:
          "Partitioned commercial bays ideal for multi-specialty clinics, diagnostic centers, executive consulting offices, or professional salons.",
        highlight:
          "Pre-fitted utilities and quiet commercial zone with elevator proximity.",
        unitCrop: "/images/unit-ff-rl.png",
      },
    ],
  },
  {
    id: "second-floor",
    floor: "Second Floor",
    level: "Level 2",
    floorPlanImage: "/images/second-floor-plan.png",
    totalSqFt: "5,800+ sq. ft. Planned Area",
    tagline:
      "Magic Frames Multiplex, Beauty Parlour, Kids Toys & Planned Big Project Concourse",
    zones: [
      {
        id: "SF-BP",
        name: "Now Planned for Big Project (Expansion Wing)",
        sqFt: "Planned Expansion Footprint",
        status: "Now Planned for Big Project",
        statusColor: "bg-rose-100 text-rose-800 border-rose-300",
        description:
          "Designated expansion wing marked with red perimeter and directional access on the architectural plan. Ideal for major leisure, family amusement, or banquet facility.",
        highlight:
          "Direct integration with Magic Frames multiplex cinema concourse.",
      },
      {
        id: "SF-MF",
        name: "Magic Frames Multiplex Cinema",
        sqFt: "Multiplex Concourse",
        status: "Cinema & Entertainment Hub",
        statusColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
        description:
          "Premier cinema destination drawing massive evening, weekend, and holiday family crowds from Edakkara, Nilambur, and surrounding regions.",
        highlight:
          "Major footfall driver ensuring continuous customer traffic across floors.",
      },
      {
        id: "SF-BTY",
        name: "Beauty Parlour & Wellness Suite",
        sqFt: "Lifestyle Suite",
        status: "Beauty & Wellness Zone",
        statusColor: "bg-amber-100 text-amber-800 border-amber-300",
        description:
          "Dedicated second-floor lifestyle space tailored for premium ladies salon, bridal studio, spa, or personal grooming clinic.",
        highlight:
          "Comfortable, private location with dedicated client waiting foyer.",
      },
      {
        id: "SF-TOY",
        name: "Toys & Kids Retail Concourse",
        sqFt: "Retail Zone",
        status: "Kids Entertainment & Retail",
        statusColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
        description:
          "Vibrant retail space dedicated to children's apparel, toys, games, novelty goods, and family shopping right by the cinema entrance.",
        highlight:
          "High visibility for families visiting the Magic Frames theatre.",
      },
    ],
  },
];

const masterBlueprintData = {
  floor: "All Floors Master Blueprint",
  image: "/images/all-floors-plan.png",
  title: "Complete 3-Level Master Architectural Blueprint",
  highlights:
    "Ground Floor (Retail & Jewellery), First Floor (Supermarket & Boutiques), Second Floor (Multiplex & Big Project Expansion)",
};

export default function PropertiesPage() {
  const [selectedFloorTab, setSelectedFloorTab] = useState("All");
  const [modalImage, setModalImage] = useState(null);
  const [zoom, setZoom] = useState(1);

  // Close modal on ESC key & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setModalImage(null);
    };
    if (modalImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalImage]);

  const openLightbox = (imageSrc, title, subtitle = "") => {
    setModalImage({
      src: imageSrc,
      title: title,
      subtitle: subtitle,
    });
    setZoom(1);
  };

  const filteredFloors =
    selectedFloorTab === "All"
      ? floorData
      : floorData.filter((item) => item.floor === selectedFloorTab);

  return (
    <div className="w-full bg-[#F5F7FA] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Top Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-200 pb-6 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0E5EC8]/10 text-[#0E5EC8] border border-[#0E5EC8]/20 mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>S. Mall Edakkara • 2D Architectural Floor Inventory</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
              Commercial Floor Diagrams <br />
              <span className="text-[#0E5EC8]">& Leasing Inventory</span>
            </h1>
            <p className="text-sm text-slate-500 mt-1 max-w-3xl leading-relaxed">
              Explore authentic 2D architectural layout diagrams, available commercial wings, reserved spaces, and retail shop allocations across all three floors of S. Mall.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() =>
                openLightbox(
                  masterBlueprintData.image,
                  masterBlueprintData.title,
                  masterBlueprintData.highlights
                )
              }
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer active:scale-95"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#F9B00C]" />
              <span>View Full Master Blueprint</span>
            </button>
          </div>
        </header>

        {/* Floor Filter Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-2.5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex flex-wrap items-center gap-2">
            {["All", "Ground Floor", "First Floor", "Second Floor"].map(
              (floorOption) => (
                <button
                  key={floorOption}
                  onClick={() => setSelectedFloorTab(floorOption)}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                    selectedFloorTab === floorOption
                      ? "bg-[#0E5EC8] text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {floorOption === "All" ? "All 3 Floors" : floorOption}
                </button>
              )
            )}
          </div>

          <span className="text-xs text-slate-500 hidden sm:inline px-2">
            Click any floor diagram or <strong>Enlarge Floor Diagram</strong> to inspect high-resolution blueprints
          </span>
        </div>

        {/* 2D Architectural Floor Diagrams & Space Breakdowns */}
        <div className="space-y-12">
          {filteredFloors.map((floorGroup) => (
            <section
              key={floorGroup.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
            >
              {/* Floor Section Header */}
              <div className="bg-slate-50/80 border-b border-slate-200 px-6 py-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                      {floorGroup.floor}
                    </h2>
                    <span className="text-xs font-mono font-bold bg-[#0E5EC8]/10 text-[#0E5EC8] px-2.5 py-1 rounded-md border border-[#0E5EC8]/20">
                      {floorGroup.level}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                      {floorGroup.totalSqFt}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    {floorGroup.tagline}
                  </p>
                </div>

                <button
                  onClick={() =>
                    openLightbox(
                      floorGroup.floorPlanImage,
                      `${floorGroup.floor} Architectural Plan`,
                      floorGroup.tagline
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 hover:border-slate-400 shadow-xs transition-all cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Enlarge {floorGroup.floor} Diagram</span>
                </button>
              </div>

              {/* 2D Diagram Showcase Banner */}
              <div className="p-6 border-b border-slate-100 bg-[#FAF8F3]/60">
                <div
                  onClick={() =>
                    openLightbox(
                      floorGroup.floorPlanImage,
                      `${floorGroup.floor} Architectural Plan`,
                      floorGroup.tagline
                    )
                  }
                  className="relative rounded-2xl bg-[#FAF8F3] border border-slate-200 overflow-hidden cursor-pointer group flex items-center justify-center p-4 min-h-[300px] sm:min-h-[380px] shadow-inner select-none"
                  title={`Click to enlarge ${floorGroup.floor} 2D Diagram`}
                >
                  <img
                    src={floorGroup.floorPlanImage}
                    alt={`${floorGroup.floor} 2D Architectural Diagram`}
                    className="max-h-[460px] max-w-full object-contain group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                    <span className="bg-slate-900/90 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-4 h-4 text-[#F9B00C]" />
                      Click to Enlarge 2D Floor Diagram
                    </span>
                  </div>
                  <span className="absolute bottom-3 left-3 text-[11px] uppercase font-bold tracking-wider bg-white/95 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 shadow-xs">
                    {floorGroup.floor} Blueprint Layout
                  </span>
                </div>
              </div>

              {/* Floor Spaces & Units Grid */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                    Allocated Commercial Zones & Available Units
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {floorGroup.zones.map((zone, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col justify-between bg-slate-50/70 hover:bg-white rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200 overflow-hidden p-5"
                    >
                      <div className="space-y-3">
                        {/* Status Badge & Sq Ft */}
                        <div className="flex items-start justify-between gap-2">
                          <span
                            className={`text-xs px-2.5 py-0.5 rounded-full border font-semibold shadow-2xs ${zone.statusColor}`}
                          >
                            {zone.status}
                          </span>
                          <span className="text-base font-black text-slate-900 shrink-0">
                            {zone.sqFt}
                          </span>
                        </div>

                        {/* Zone Name */}
                        <h4 className="font-bold text-slate-900 text-base leading-snug">
                          {zone.name}
                        </h4>

                        {/* Breakdown if present */}
                        {zone.breakdown && (
                          <div className="text-xs font-mono font-medium text-slate-700 bg-white p-2 rounded-lg border border-slate-200">
                            {zone.breakdown}
                          </div>
                        )}

                        {/* Description */}
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {zone.description}
                        </p>

                        {/* Highlight */}
                        <div className="text-[11px] text-indigo-700 font-medium bg-indigo-50/60 p-2 rounded-lg border border-indigo-100 flex items-start gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                          <span>{zone.highlight}</span>
                        </div>
                      </div>

                      {/* Actions Footer */}
                      <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                        <button
                          onClick={() =>
                            openLightbox(
                              floorGroup.floorPlanImage,
                              `${floorGroup.floor} Diagram — ${zone.name}`,
                              `${zone.sqFt} • ${zone.status}`
                            )
                          }
                          className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-bold cursor-pointer group/btn"
                        >
                          <span>Enlarge Floor Diagram</span>
                          <span className="transition-transform group-hover/btn:translate-x-1">
                            &rarr;
                          </span>
                        </button>

                        <a
                          href={`https://wa.me/919447175232?text=${encodeURIComponent(
                            `Hello S. Mall Leasing Desk, I would like to enquire about: ${floorGroup.floor} - ${zone.name} (${zone.sqFt}). Please share availability and rental terms.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-bold bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-lg border border-emerald-200 transition-colors"
                        >
                          <MessageSquare className="w-3 h-3" />
                          <span>Enquire</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Master Blueprint Card (All Floors side-by-side) */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">
                Complete Mall Blueprint
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-2">
                All Floors <span className="text-[#0E5EC8]">Architectural Layout Overview</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Full 3-level comparative layout displaying Ground Floor, First Floor, and Second Floor side-by-side.
              </p>
            </div>

            <button
              onClick={() =>
                openLightbox(
                  masterBlueprintData.image,
                  masterBlueprintData.title,
                  masterBlueprintData.highlights
                )
              }
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0E5EC8] hover:bg-[#0b4ca0] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#F9B00C]" />
              <span>Enlarge Master Blueprint</span>
            </button>
          </div>

          <div
            onClick={() =>
              openLightbox(
                masterBlueprintData.image,
                masterBlueprintData.title,
                masterBlueprintData.highlights
              )
            }
            className="relative rounded-2xl bg-[#FAF8F3] border border-slate-200 overflow-hidden cursor-pointer group flex items-center justify-center p-4 min-h-[320px] sm:min-h-[420px] shadow-inner select-none"
            title="Click to Enlarge Complete 3-Level Blueprint"
          >
            <img
              src={masterBlueprintData.image}
              alt="Complete Master Architectural Blueprint"
              className="max-h-[500px] max-w-full object-contain group-hover:scale-102 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
              <span className="bg-slate-900/90 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <Maximize2 className="w-4 h-4 text-[#F9B00C]" />
                Click to Enlarge Complete Blueprint
              </span>
            </div>
          </div>
        </section>

        {/* Direct Leasing Desk & Custom Space Advisory */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-950 rounded-2xl p-6 sm:p-10 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F9B00C]">
              Direct Mall Leasing Desk
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
              Enquire for Commercial Space <br />
              <span className="text-[#F9B00C]">or Site Inspection</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Connect directly with S. Mall Management for bespoke unit configurations, contiguous floor allocations, pre-lease terms, or to schedule an in-person site walkthrough.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/919447175232?text=Hello%20S.%20Mall%20Management%2C%20I%20would%20like%20to%20enquire%20about%20commercial%20space%20leasing."
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

          {/* Decorative background accent */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
        </section>

      </div>

      {/* Enlarged Floor Plan Lightbox Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setModalImage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[94vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:px-6 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  {modalImage.title}
                </h3>
                {modalImage.subtitle && (
                  <p className="text-xs text-slate-500 mt-0.5">
                    {modalImage.subtitle}
                  </p>
                )}
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
                  href={modalImage.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 shadow-xs cursor-pointer transition-colors"
                  title="Open Original High-Res in New Tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setModalImage(null)}
                  className="p-2 text-slate-500 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 shadow-xs cursor-pointer transition-colors"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Switcher Tabs inside Modal */}
            <div className="bg-slate-100 px-4 sm:px-6 py-2 border-b border-slate-200 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
                Switch Diagram:
              </span>
              {[
                { name: "Ground Floor", src: "/images/ground-floor-plan.png", title: "Ground Floor Architectural Plan" },
                { name: "First Floor", src: "/images/first-floor-plan.png", title: "First Floor Architectural Plan" },
                { name: "Second Floor", src: "/images/second-floor-plan.png", title: "Second Floor Architectural Plan" },
                { name: "Master Blueprint", src: "/images/all-floors-plan.png", title: "Complete 3-Level Master Architectural Blueprint" },
              ].map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => {
                    setModalImage({ src: tab.src, title: tab.title, subtitle: "" });
                    setZoom(1);
                  }}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    modalImage.src === tab.src
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {tab.name}
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
                  src={modalImage.src}
                  alt={modalImage.title}
                  className="max-h-[58vh] max-w-full object-contain rounded-lg shadow-md border border-slate-200/80"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 border-t border-slate-200 px-4 sm:px-6 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="text-slate-600">
                S. Mall Edakkara • 2D Architectural Plan
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={`https://wa.me/919447175232?text=${encodeURIComponent(
                    `Hello S. Mall Leasing Desk, I am enquiring regarding the architectural floor plan: ${modalImage.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Enquire via WhatsApp
                </a>
                <button
                  onClick={() => setModalImage(null)}
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
