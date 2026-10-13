import React, { useState } from "react";

// Property floor data with images, layout diagrams, and unit details
const propertyData = [
  {
    floor: "Ground Floor",
    floorPlanImage: "/images/ground-floor-plan.jpg", // Replace with your Ground Floor plan asset[cite: 2]
    totalAvailableSqFt: 6220, //[cite: 2]
    units: [
      {
        id: "GF-RR",
        wing: "Rear Right Wing", //[cite: 2]
        sqFt: 3720, //[cite: 2]
        status: "Waiting for Big Project", //[cite: 2]
        statusColor: "bg-amber-100 text-amber-800 border-amber-300",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        description: "Contiguous anchor unit suitable for large retail, department store, or flagship brand outlet.",
      },
      {
        id: "GF-EXT",
        wing: "Driveway / Extension Area", //[cite: 2]
        sqFt: 2500, //[cite: 2]
        status: "Available (അഡീഷണൽ Area)", //[cite: 2]
        statusColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
        image: "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&w=800&q=80",
        description: "Adjacent to vehicle access driveway; suited for open-air café, kiosk cluster, or drive-through amenity.", //[cite: 2]
      },
    ],
  },
  {
    floor: "First Floor",
    floorPlanImage: "/images/first-floor-plan.jpg", // Replace with your First Floor plan asset[cite: 1]
    totalAvailableSqFt: 7779, //[cite: 1]
    units: [
      {
        id: "FF-RL",
        wing: "Rear Left Wing", //[cite: 1]
        sqFt: 1457, //[cite: 1]
        breakdown: "3 units (462 + 515 + 480 sq. ft.)", //[cite: 1]
        status: "Vacant (Marked NIL)", //[cite: 1]
        statusColor: "bg-blue-100 text-blue-800 border-blue-300",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        description: "Partitioned bays ideal for diagnostics, multi-specialty clinics, salons, or modern corporate offices.",
      },
      {
        id: "FF-RW",
        wing: "Entire Right Wing", //[cite: 1]
        sqFt: 6322, //[cite: 1]
        breakdown: "Rear hall (4,200 sq. ft.) + Front units (2,122 sq. ft.)", //[cite: 1]
        status: "Reserved for Supermarket / Big Project", //[cite: 1]
        statusColor: "bg-purple-100 text-purple-800 border-purple-300",
        image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80",
        description: "Expansive contiguous footprint dedicated to high-volume hypermarket, fitness studio, or entertainment hub.",
      },
    ],
  },
];

export default function CommercialPropertyInventory() {
  const [selectedFloor, setSelectedFloor] = useState("All");
  const [activeModalImage, setActiveModalImage] = useState(null);

  const totalSqFt = propertyData.reduce((acc, curr) => acc + curr.totalAvailableSqFt, 0); //[cite: 1, 2]

  const filteredData =
    selectedFloor === "All"
      ? propertyData
      : propertyData.filter((item) => item.floor === selectedFloor);

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-200 pb-6 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Commercial Leasing Inventory
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Available & reserved unallocated commercial floor spaces
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
              Total Available:
            </span>
            <span className="text-xl font-bold text-slate-900 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
              {totalSqFt.toLocaleString()} sq. ft.
            </span>
          </div>
        </header>

        {/* Filter Navigation */}
        <div className="flex gap-2">
          {["All", "Ground Floor", "First Floor"].map((floorOption) => (
            <button
              key={floorOption}
              onClick={() => setSelectedFloor(floorOption)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                selectedFloor === floorOption
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {floorOption}
            </button>
          ))}
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
                  <h2 className="text-lg font-semibold text-slate-800">
                    {floorGroup.floor}
                  </h2>
                  <span className="text-xs font-medium text-slate-500">
                    Floor Total Available:{" "}
                    <strong className="text-slate-800">
                      {floorGroup.totalAvailableSqFt.toLocaleString()} sq. ft.
                    </strong>
                  </span>
                </div>
                <button
                  onClick={() =>
                    setActiveModalImage({
                      title: `${floorGroup.floor} Architectural Plan`,
                      src: floorGroup.floorPlanImage,
                    })
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 shadow-sm transition-colors"
                >
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A2 2 0 013 15.485V5.515a2 2 0 011.553-1.96L9 2m0 18l6-3m-6 3V2m6 15l4.447 2.224A2 2 0 0021 17.485V7.515a2 2 0 00-1.553-1.96L15 4m0 13V4m0 0L9 2" />
                  </svg>
                  View Floor Plan Diagram
                </button>
              </div>

              {/* Units Grid */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {floorGroup.units.map((unit) => (
                  <div
                    key={unit.id}
                    className="flex flex-col rounded-lg border border-slate-200 hover:border-slate-300 overflow-hidden bg-slate-50/50 transition-all duration-200"
                  >
                    {/* Unit Image Preview */}
                    <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                      <img
                        src={unit.image}
                        alt={unit.wing}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <span
                        className={`absolute top-3 right-3 text-xs px-2.5 py-0.5 rounded-full border font-medium shadow-sm backdrop-blur-sm ${unit.statusColor}`}
                      >
                        {unit.status}
                      </span>
                    </div>

                    {/* Unit Details */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-semibold text-slate-900 text-base">
                            {unit.wing}
                          </h3>
                        </div>

                        <div className="flex items-baseline gap-2 mb-3">
                          <span className="text-2xl font-bold tracking-tight text-slate-900">
                            {unit.sqFt.toLocaleString()}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">sq. ft.</span>
                        </div>

                        {unit.breakdown && (
                          <p className="text-xs font-mono text-slate-600 bg-white p-2 rounded border border-slate-200 mb-3">
                            {unit.breakdown}
                          </p>
                        )}

                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                          {unit.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-400">
                        <span className="font-mono">ID: {unit.id}</span>
                        <button
                          onClick={() =>
                            setActiveModalImage({
                              title: `${unit.wing} (${unit.sqFt.toLocaleString()} sq. ft.)`,
                              src: unit.image,
                            })
                          }
                          className="text-indigo-600 hover:text-indigo-700 font-medium"
                        >
                          Enlarge Image &rarr;
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

      {/* Image Modal Lightbox */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="bg-white rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-slate-200">
              <h3 className="font-semibold text-slate-900 text-base">
                {activeModalImage.title}
              </h3>
              <button
                onClick={() => setActiveModalImage(null)}
                className="text-slate-400 hover:text-slate-600 text-lg font-bold p-1 leading-none"
              >
                &times;
              </button>
            </div>
            <div className="p-4 bg-slate-950 flex justify-center">
              <img
                src={activeModalImage.src}
                alt={activeModalImage.title}
                className="max-h-[70vh] object-contain rounded"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}