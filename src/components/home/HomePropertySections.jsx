import React, { useState, useEffect } from "react";
import {
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
  Layers,
  MessageSquare,
  Building2,
  CheckCircle2,
} from "lucide-react";

// Floor plan metadata corresponding to the architectural blueprints
const floorPlans = {
  "Ground Floor": {
    name: "Ground Floor",
    title: "Ground Floor Architectural Plan",
    image: "/images/ground-floor-plan.png",
    sqFt: 6220,
    highlights:
      "Rear Right Wing (Waiting for Big Project) & Driveway Extension Area (അനുമതിക്ക് Area - 2500 FT)",
    tenants:
      "Jewellery Concourse, Fancy & Footwear corridor, Front State Highway Entry",
  },
  "First Floor": {
    name: "First Floor",
    title: "First Floor Architectural Plan",
    image: "/images/first-floor-plan.png",
    sqFt: 7779,
    highlights:
      "Reserved for Supermarket / Big Project & Rear Left Wing (3 units marked NIL)",
    tenants:
      "Boutique corridor (പുതിയത്), Diagnostics / Clinic bays, Anchor Supermarket space",
  },
  "Second Floor": {
    name: "Second Floor",
    title: "Second Floor Architectural Plan",
    image: "/images/second-floor-plan.png",
    sqFt: 5800,
    highlights:
      "Now Planned for Big Project, Magic Frames cinema concourse, Beauty Parlour & Toys zone",
    tenants:
      "Magic Frames Multiplex, Lifestyle Salon, Kids Toys & Anchor entertainment expansion",
  },
  "All Floors": {
    name: "All Floors Master Blueprint",
    title: "Complete Master Blueprint (Ground, 1st & 2nd Floor)",
    image: "/images/all-floors-plan.png",
    sqFt: 19799,
    highlights:
      "Comprehensive architectural blueprint displaying all 3 levels side-by-side",
    tenants:
      "Ground Floor (Retail & Jewellery), 1st Floor (Supermarket & Boutiques), 2nd Floor (Cinema & Entertainment)",
  },
};

// Property floor data with blueprint layout images and unit details
const propertyData = [
  {
    floor: "Ground Floor",
    floorPlanImage: "/images/ground-floor-plan.png",
    totalAvailableSqFt: 6220,
    units: [
      {
        id: "GF-RR",
        wing: "Rear Right Wing",
        sqFt: 3720,
        status: "Waiting for Big Project",
        statusColor: "bg-amber-100 text-amber-800 border-amber-300",
        image: "/images/unit-gf-rr.png",
        floorPlanImage: "/images/ground-floor-plan.png",
        description:
          "Contiguous anchor unit suitable for large retail, department store, or flagship brand outlet.",
        breakdown: "Anchor wing with high clear ceiling and direct central concourse visibility",
      },
      {
        id: "GF-EXT",
        wing: "Driveway / Extension Area",
        sqFt: 2500,
        status: "Available (അനുമതിക്ക് Area)",
        statusColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
        image: "/images/unit-gf-ext.png",
        floorPlanImage: "/images/ground-floor-plan.png",
        description:
          "Adjacent to vehicle access driveway; suited for open-air café, kiosk cluster, or drive-through amenity.",
        breakdown: "Malayora highway side road access with dedicated customer forecourt",
      },
    ],
  },
  {
    floor: "First Floor",
    floorPlanImage: "/images/first-floor-plan.png",
    totalAvailableSqFt: 7779,
    units: [
      {
        id: "FF-RL",
        wing: "Rear Left Wing",
        sqFt: 1457,
        breakdown: "3 units (462 + 515 + 480 sq. ft.)",
        status: "Vacant (Marked NIL)",
        statusColor: "bg-blue-100 text-blue-800 border-blue-300",
        image: "/images/unit-ff-rl.png",
        floorPlanImage: "/images/first-floor-plan.png",
        description:
          "Partitioned bays ideal for diagnostics, multi-specialty clinics, salons, or modern corporate offices.",
      },
      {
        id: "FF-RW",
        wing: "Entire Right Wing",
        sqFt: 6322,
        breakdown: "Rear hall (4,200 sq. ft.) + Front units (2,122 sq. ft.)",
        status: "Reserved for Supermarket / Big Project",
        statusColor: "bg-purple-100 text-purple-800 border-purple-300",
        image: "/images/unit-ff-rw.png",
        floorPlanImage: "/images/first-floor-plan.png",
        description:
          "Expansive contiguous footprint dedicated to high-volume hypermarket, fitness studio, or entertainment hub.",
      },
    ],
  },
  {
    floor: "Second Floor",
    floorPlanImage: "/images/second-floor-plan.png",
    totalAvailableSqFt: 5800,
    units: [
      {
        id: "SF-BP",
        wing: "Planned Anchor Project Zone",
        sqFt: 5800,
        breakdown: "Now Planned for Big Project — Cinema & Leisure wing",
        status: "Now Planned for Big Project",
        statusColor: "bg-rose-100 text-rose-800 border-rose-300",
        image: "/images/second-floor-plan.png",
        floorPlanImage: "/images/second-floor-plan.png",
        description:
          "Expansive second floor commercial zone adjacent to Magic Frames cinema, Beauty Parlour, and toy retail hub.",
      },
    ],
  },
];

export default function CommercialPropertyInventory() {
  const [selectedFloor, setSelectedFloor] = useState("All");
  const [modalState, setModalState] = useState(null);
  const [zoom, setZoom] = useState(1);

  // Close modal on ESC key & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setModalState(null);
      }
    };

    if (modalState) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalState]);

  const openFloorModal = (floorName, unit = null, viewMode = "floor") => {
    setModalState({
      activeFloor: floorName,
      unit: unit,
      viewMode: viewMode, // "floor" (shows current floor diagram) or "unit" (shows unit crop)
    });
    setZoom(1);
  };

  const totalSqFt = propertyData.reduce(
    (acc, curr) => acc + curr.totalAvailableSqFt,
    0
  );

  const filteredData =
    selectedFloor === "All"
      ? propertyData
      : propertyData.filter((item) => item.floor === selectedFloor);

  // Determine current active image for modal
  const activePlanInfo = modalState ? floorPlans[modalState.activeFloor] || floorPlans["Ground Floor"] : null;
  const currentModalImage =
    modalState?.viewMode === "unit" && modalState?.unit?.image
      ? modalState.unit.image
      : activePlanInfo?.image || "/images/ground-floor-plan.png";

  const getWhatsAppEnquiryUrl = () => {
    if (!modalState) return "";
    const text = modalState.unit
      ? `Hello S. Mall Leasing Desk, I am enquiring about ${modalState.activeFloor} - ${modalState.unit.wing} (${modalState.unit.sqFt.toLocaleString()} sq. ft., Unit ID: ${modalState.unit.id}). Please share availability and rental terms.`
      : `Hello S. Mall Leasing Desk, I would like to enquire about commercial retail spaces on ${modalState.activeFloor}. Please share the floor plan details.`;
    return `https://wa.me/919447175232?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-200 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full">
                <Building2 className="w-3.5 h-3.5" />
                Floor Plans & Leasing
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 mt-1">
              Commercial Leasing Inventory
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Architectural floor diagrams, available wings, and reserved commercial units
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Total Available:
              </span>
              <span className="text-lg font-bold text-slate-900">
                {totalSqFt.toLocaleString()} sq. ft.
              </span>
            </div>
            <button
              onClick={() => openFloorModal("All Floors")}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-800 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 shadow-xs transition-colors cursor-pointer"
              title="View Complete All-Floors Blueprint"
            >
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>Full Master Blueprint</span>
            </button>
          </div>
        </header>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {["All", "Ground Floor", "First Floor", "Second Floor"].map(
              (floorOption) => (
                <button
                  key={floorOption}
                  onClick={() => setSelectedFloor(floorOption)}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-150 cursor-pointer ${
                    selectedFloor === floorOption
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {floorOption}
                </button>
              )
            )}
          </div>
          <span className="text-xs text-slate-500 hidden sm:inline">
            Click any floor card or <strong>Enlarge Image</strong> to view high-res floor diagrams
          </span>
        </div>

        {/* Floor Sections */}
        <div className="space-y-8">
          {filteredData.map((floorGroup) => (
            <section
              key={floorGroup.floor}
              className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
            >
              {/* Floor Header & Architectural Plan Preview Button */}
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex flex-wrap justify-between items-center gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-slate-900">
                      {floorGroup.floor}
                    </h2>
                    <span className="text-xs bg-slate-200/80 text-slate-700 px-2 py-0.5 rounded font-mono font-medium">
                      Blueprint Available
                    </span>
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    Floor Total Available:{" "}
                    <strong className="text-slate-800">
                      {floorGroup.totalAvailableSqFt.toLocaleString()} sq. ft.
                    </strong>
                  </span>
                </div>
                <button
                  onClick={() => openFloorModal(floorGroup.floor)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 hover:border-slate-400 shadow-xs transition-colors cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 20l-5.447-2.724A2 2 0 013 15.485V5.515a2 2 0 011.553-1.96L9 2m0 18l6-3m-6 3V2m6 15l4.447 2.224A2 2 0 0021 17.485V7.515a2 2 0 00-1.553-1.96L15 4m0 13V4m0 0L9 2"
                    />
                  </svg>
                  View {floorGroup.floor} Diagram
                </button>
              </div>

              {/* Units Grid */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {floorGroup.units.map((unit) => (
                  <div
                    key={unit.id}
                    className="flex flex-col rounded-xl border border-slate-200 hover:border-slate-300 overflow-hidden bg-white shadow-xs hover:shadow-md transition-all duration-200"
                  >
                    {/* Unit Image / Blueprint Preview */}
                    <div
                      onClick={() => openFloorModal(floorGroup.floor, unit, "floor")}
                      className="relative h-56 w-full bg-[#FAF8F3] overflow-hidden cursor-pointer group flex items-center justify-center border-b border-slate-200 select-none"
                      title={`Click to enlarge ${floorGroup.floor} Diagram for ${unit.wing}`}
                    >
                      <img
                        src={unit.image || floorGroup.floorPlanImage}
                        alt={unit.wing}
                        className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                        <span className="bg-slate-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                          <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                          Click to Enlarge {floorGroup.floor} Diagram
                        </span>
                      </div>
                      <span
                        className={`absolute top-3 right-3 text-xs px-2.5 py-0.5 rounded-full border font-semibold shadow-xs backdrop-blur-sm ${unit.statusColor}`}
                      >
                        {unit.status}
                      </span>
                      <span className="absolute bottom-2 left-2 text-[10px] uppercase font-bold tracking-wider bg-white/95 text-slate-700 px-2 py-0.5 rounded border border-slate-200 shadow-xs">
                        {floorGroup.floor} Plan
                      </span>
                    </div>

                    {/* Unit Details */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-bold text-slate-900 text-base">
                            {unit.wing}
                          </h3>
                        </div>

                        <div className="flex items-baseline gap-2 mb-3">
                          <span className="text-2xl font-black tracking-tight text-slate-900">
                            {unit.sqFt.toLocaleString()}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">
                            sq. ft.
                          </span>
                        </div>

                        {unit.breakdown && (
                          <p className="text-xs font-medium text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200 mb-3">
                            {unit.breakdown}
                          </p>
                        )}

                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                          {unit.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                        <span className="font-mono font-medium">
                          Unit ID: {unit.id}
                        </span>
                        {/* Enlarge Image button clicking displays the current floor diagram */}
                        <button
                          onClick={() =>
                            openFloorModal(floorGroup.floor, unit, "floor")
                          }
                          className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-bold cursor-pointer group/btn"
                          title={`Enlarge ${floorGroup.floor} Diagram for ${unit.wing}`}
                        >
                          <span>Enlarge Image</span>
                          <span className="transition-transform group-hover/btn:translate-x-1">
                            &rarr;
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Enlarged Floor Plan Lightbox Modal */}
      {modalState && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setModalState(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[94vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:px-6 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse" />
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    {activePlanInfo?.title || `${modalState.activeFloor} Diagram`}
                  </h3>
                </div>
                {modalState.unit && (
                  <p className="text-xs text-slate-600 mt-0.5">
                    Viewing floor layout for:{" "}
                    <strong className="text-slate-900 font-semibold">
                      {modalState.unit.wing}
                    </strong>{" "}
                    ({modalState.unit.sqFt.toLocaleString()} sq. ft. •{" "}
                    <span className="text-indigo-600 font-medium">
                      {modalState.unit.status}
                    </span>
                    )
                  </p>
                )}
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                {/* Zoom Controls */}
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

                {/* Open Full Image in New Tab */}
                <a
                  href={currentModalImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 shadow-xs cursor-pointer transition-colors"
                  title="Open Original Image in New Tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Close Button */}
                <button
                  onClick={() => setModalState(null)}
                  className="p-2 text-slate-500 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 shadow-xs cursor-pointer transition-colors"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Floor Switcher Navigation Pills inside Modal */}
            <div className="bg-slate-100 px-4 sm:px-6 py-2 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
                  Floor Diagram:
                </span>
                {["Ground Floor", "First Floor", "Second Floor", "All Floors"].map(
                  (floorKey) => (
                    <button
                      key={floorKey}
                      onClick={() => {
                        setModalState((prev) => ({
                          ...prev,
                          activeFloor: floorKey,
                          viewMode: "floor",
                        }));
                        setZoom(1);
                      }}
                      className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                        modalState.activeFloor === floorKey &&
                        modalState.viewMode === "floor"
                          ? "bg-indigo-600 text-white shadow-xs"
                          : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                      }`}
                    >
                      {floorKey}
                    </button>
                  )
                )}
              </div>

              {/* Toggle to Unit-Specific Crop if available */}
              {modalState.unit?.image && (
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => {
                      setModalState((prev) => ({
                        ...prev,
                        viewMode:
                          prev.viewMode === "unit" ? "floor" : "unit",
                      }));
                      setZoom(1);
                    }}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                      modalState.viewMode === "unit"
                        ? "bg-amber-600 text-white shadow-xs"
                        : "bg-white text-amber-800 hover:bg-amber-50 border border-amber-300"
                    }`}
                  >
                    {modalState.viewMode === "unit"
                      ? "Showing Unit View (Click for Floor Plan)"
                      : "View Unit Focus Crop"}
                  </button>
                </div>
              )}
            </div>

            {/* Modal Image Viewport */}
            <div className="flex-1 overflow-auto bg-[#FAF8F3] p-4 sm:p-6 flex items-center justify-center min-h-[350px] max-h-[62vh] relative select-none">
              <div
                className="transition-transform duration-150 origin-center flex items-center justify-center"
                style={{ transform: `scale(${zoom})` }}
              >
                <img
                  src={currentModalImage}
                  alt={activePlanInfo?.title || "Floor Plan"}
                  className="max-h-[58vh] max-w-full object-contain rounded-lg shadow-md border border-slate-200/80"
                  style={{ imageRendering: "auto" }}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 border-t border-slate-200 px-4 sm:px-6 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="text-slate-600">
                <span className="font-semibold text-slate-800">
                  Floor Key Highlights:
                </span>{" "}
                {activePlanInfo?.highlights}
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={getWhatsAppEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Enquire via WhatsApp
                </a>
                <button
                  onClick={() => setModalState(null)}
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