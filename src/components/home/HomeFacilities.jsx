import React from "react";
import { motion } from "framer-motion";
import {
  Car,
  Layers,
  Navigation,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import escalaterImg from "../../assets/escalater.jpeg";
import hroic2Img from "../../assets/homepage/hroic2.jpeg";

const FACILITIES = [
  {
    icon: Car,
    title: "Ample Dedicated Parking",
    capacity: "200+ Vehicles",
    badge: "Surface & Basement",
    image:
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80",
    fallback: "/images/about.webp",
    points: [
      "Direct entry from State Highway and Malayora Highway",
      "Dedicated two-wheeler & car parking zones",
      "Easy drop-off point right at the main entrance",
    ],
  },
  {
    icon: Layers,
    title: "Lifts & Central Escalators",
    capacity: "All 3 Levels",
    badge: "Effortless Mobility",
    image: escalaterImg,
    fallback: "/images/escalater.jpeg",
    points: [
      "Central escalators connecting all commercial floors",
      "High-speed customer passenger elevator",
      "Wheelchair-friendly accessible entrance ramps",
    ],
  },
  {
    icon: Navigation,
    title: "Dual Highway Accessibility",
    capacity: "CNG & Malayora",
    badge: "Direct Road Access",
    image: hroic2Img,
    fallback: "/images/hroic2.jpeg",
    points: [
      "Direct State Highway (Calicut–Nilambur–Gudalur) front",
      "Corner access along Malayora Highway (Hill Highway)",
      "Convenient access for interstate travelers and locals",
    ],
  },
  {
    icon: ShieldCheck,
    title: "24/7 Safety & Power Backup",
    capacity: "Full Coverage",
    badge: "Complete Peace of Mind",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
    fallback: "/images/about.webp",
    points: [
      "Round-the-clock CCTV security surveillance",
      "Dedicated professional mall security staff",
      "Uninterrupted generator power backup system",
    ],
  },
];

export default function HomeFacilities() {
  return (
    <section
      id="mall-facilities"
      className="py-20 sm:py-28 bg-[#F5F7FA] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#0E5EC8] bg-[#0E5EC8]/10 px-3.5 py-1.5 rounded-full mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F9B00C]" />
            <span>Visitor Facilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Thoughtfully Designed <br />
            <span className="text-[#0E5EC8]">for Your Comfort.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            From effortless parking to smooth vertical mobility, S Mall Edakkara
            is equipped with modern infrastructure to ensure every visit is
            relaxing and enjoyable.
          </motion.p>
        </div>

        {/* 4 Image-Driven Facility Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {FACILITIES.map((facility, index) => {
            const Icon = facility.icon;

            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Facility Card Visual Media */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = facility.fallback || "/images/about.webp";
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-block bg-[#F9B00C] text-slate-950 font-black text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                        {facility.badge}
                      </span>
                    </div>

                    {/* Bottom Floating Identity & Title */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3.5">
                      <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-[#F9B00C]" />
                      </div>
                      <div className="text-white">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-200 block">
                          {facility.capacity}
                        </span>
                        <h3 className="text-lg sm:text-xl font-black tracking-tight drop-shadow-xs">
                          {facility.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="p-6 sm:p-7 space-y-3">
                    {facility.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-slate-700">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Fast Info Banner */}
        <div className="mt-10 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#0E5EC8]/10 text-[#0E5EC8] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#0E5EC8]" />
            </div>
            <div>
              <div className="text-sm font-black text-slate-900">
                Operating 7 Days a Week
              </div>
              <div className="text-xs text-slate-500">
                10:00 AM to 10:00 PM Daily · Main Road Edakkara
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-700">
              All Facilities Open & Fully Operational
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
