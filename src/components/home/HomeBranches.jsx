import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Navigation, 
  Route, 
  ExternalLink, 
  Car, 
  Compass, 
  Sparkles,
  ArrowRight,
  Clock,
  Phone
} from "lucide-react";

import hroic2Img from "../../assets/homepage/hroic2.jpeg";
import heroImg from "../../assets/homepage/hero.jpeg";

const ACCESS_ROUTES = [
  {
    id: "state-highway",
    title: "State Highway Frontage",
    subtitle: "Calicut – Nilambur – Gudalur Road (CNG / Calicut-Ooty Route)",
    badge: "Primary Front Entrance",
    image: hroic2Img,
    fallback: "/images/hroic2.jpeg",
    description:
      "S Mall sits prominently directly on the State Highway connecting Calicut, Nilambur, and Ooty. Visitors enjoy maximum visibility, an open paved forecourt, and wide vehicular entry gates.",
    points: [
      "Direct front entrance with generous vehicle turning radius",
      "Expansive customer parking forecourt right by the highway",
      "Immediate proximity to local bus and auto stands in Edakkara town",
    ],
  },
  {
    id: "malayora-highway",
    title: "Malayora Highway Confluence",
    subtitle: "Hill Highway Corner Access",
    badge: "Corner Side Road Access",
    image: heroImg,
    fallback: "/images/hero.jpeg",
    description:
      "The secondary side road gives visitors effortless entry from the Malayora Highway (Hill Highway), connecting Edakkara with adjacent residential townships without interstate traffic bottlenecks.",
    points: [
      "Smooth side-road entry bypassing main road peak flow",
      "Direct access to basement parking and dedicated loading areas",
      "Safe, traffic-calmed drop-off zone for families and elders",
    ],
  },
];

export default function HomeBranches() {
  const [activeRoute, setActiveRoute] = useState(0);
  const current = ACCESS_ROUTES[activeRoute];

  return (
    <section id="location-accessibility" className="py-20 sm:py-28 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#0E5EC8] bg-[#0E5EC8]/10 px-3.5 py-1.5 rounded-full mb-3"
          >
            <MapPin className="w-3.5 h-3.5 text-[#F9B00C]" />
            <span>Mall Location & Access</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Effortless to Reach, <br />
            <span className="text-[#0E5EC8]">Right in the Heart of Edakkara.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            Positioned right at the high-traffic junction of two primary Kerala thoroughfares, S Mall offers seamless entry from all directions.
          </motion.p>
        </div>

        {/* Location Interactive Showcase Box */}
        <div className="bg-[#F5F7FA] rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Route Details */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Route Selector Buttons */}
              <div className="flex flex-wrap gap-2.5">
                {ACCESS_ROUTES.map((route, idx) => (
                  <button
                    key={route.id}
                    onClick={() => setActiveRoute(idx)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      activeRoute === idx
                        ? "bg-[#0E5EC8] text-white shadow-md shadow-blue-900/10"
                        : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {route.title}
                  </button>
                ))}
              </div>

              {/* Active Route Content */}
              <div className="space-y-3">
                <span className="inline-block bg-[#F9B00C]/20 text-amber-900 border border-[#F9B00C]/40 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                  {current.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#0E5EC8]">
                  {current.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-normal pt-1">
                  {current.description}
                </p>
              </div>

              {/* Bullet points */}
              <div className="space-y-2.5 pt-2">
                {current.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-[#0E5EC8] flex items-center justify-center shrink-0 mt-0.5">
                      <Route className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-700">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Navigation Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://maps.google.com/?q=S+Mall+Main+Road+Edakkara+CNG+Road"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0E5EC8] hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#F9B00C]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
                </a>

                <a
                  href="tel:+919447175232"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold px-5 py-3.5 rounded-xl text-xs sm:text-sm border border-slate-300 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#0E5EC8]" />
                  <span>Call: +91 94471 75232</span>
                </a>
              </div>

            </div>

            {/* Right Column: Visual Photo & Landmarks card */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-16/10 rounded-2xl overflow-hidden shadow-lg border border-slate-200 group bg-slate-900">
                <img
                  src={current.image}
                  alt={current.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = current.fallback;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute bottom-3 left-3 right-3 text-white bg-slate-950/75 backdrop-blur-md p-3 rounded-xl border border-white/15">
                  <div className="flex items-center gap-2 text-xs text-[#F9B00C] font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>S Mall, Main Road Edakkara, Malappuram</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-100 mt-0.5">
                    State Highway (CNG Road) & Malayora Highway Junction
                  </div>
                </div>
              </div>

              {/* 3 Quick Distance Guide Pills */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-400 font-medium">From Nilambur</div>
                  <div className="text-sm font-black text-slate-900 mt-0.5">~15 km</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-400 font-medium">From Vazhikadavu</div>
                  <div className="text-sm font-black text-slate-900 mt-0.5">~9 km</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-400 font-medium">From Gudalur</div>
                  <div className="text-sm font-black text-slate-900 mt-0.5">~35 km</div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
