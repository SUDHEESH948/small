
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ArrowLeft,
  ArrowRight,
  Navigation,
  Building2,
  Route,
} from "lucide-react";

const branches = [
  {
    id: 1,
    name: "S. Mall",
    location: "Edakkara, Kerala",
    address: "Main Road, Edakkara",
    road: "State Highway Frontage",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=85",
    description:
      "A prominent commercial location on the main road in Edakkara.",
    tag: "Main Road",
  },
  {
    id: 2,
    name: "S. Mall",
    location: "Edakkara, Kerala",
    address: "CNG Road",
    road: "Calicut – Nilambur – Gudallur Road",
    image:
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1600&q=85",
    description:
      "Convenient access from the Calicut–Nilambur–Gudallur road.",
    tag: "Roadside Location",
  },
  {
    id: 3,
    name: "S. Mall",
    location: "Edakkara, Kerala",
    address: "Calicut–Ooty Main Road",
    road: "Malayora Highway",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=85",
    description:
      "A strategic roadside location along the Calicut–Ooty route.",
    tag: "Highway Access",
  },
];

const HomeBranches = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const activeBranch = branches[activeIndex];

  const nextBranch = () => {
    setActiveIndex((current) => (current + 1) % branches.length);
  };

  const previousBranch = () => {
    setActiveIndex(
      (current) => (current - 1 + branches.length) % branches.length
    );
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % branches.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      id="branches"
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-blue-700"
            >
              <span className="h-1 w-8 rounded-full bg-yellow-400" />
              Find Our Location
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
            >
              Discover{" "}
              <span className="text-blue-700">S. Mall</span>
              <span className="text-yellow-500">.</span>
            </motion.h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-500 md:justify-self-end">
            Find us in Edakkara, conveniently located along major roads.
            Explore our location details and discover the best way to reach us.
          </p>
        </div>

        {/* Main animated card */}
        <div
          className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setPaused(false);
            }
          }}
        >
          {/* Location details appear above the image on mobile */}
          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBranch.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45 }}
                className="mb-5"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-2 text-sm font-bold text-blue-800">
                  <MapPin size={17} className="text-blue-700" />
                  {activeBranch.tag}
                </div>

                <h3 className="mb-2 text-3xl font-black text-slate-950 sm:text-4xl">
                  {activeBranch.name}
                </h3>

                <p className="mb-5 flex items-center gap-2 font-medium text-blue-700">
                  <Navigation size={18} />
                  {activeBranch.location}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                        Address
                      </p>
                      <p className="font-bold text-slate-900">
                        {activeBranch.address}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Edakkara, Kerala
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="rounded-xl bg-yellow-100 p-3 text-blue-800">
                      <Route size={22} />
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                        Road & Access
                      </p>
                      <p className="font-bold leading-6 text-slate-900">
                        {activeBranch.road}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-5 leading-7 text-slate-500">
                  {activeBranch.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Slide controls */}
            <div className="mt-7 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {branches.map((branch, index) => (
                  <button
                    key={branch.id}
                    type="button"
                    aria-label={`Show location ${index + 1}`}
                    aria-pressed={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-9 bg-blue-700"
                        : "w-2.5 bg-slate-300 hover:bg-yellow-400"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm font-semibold text-slate-500">
                  0{activeIndex + 1} / 0{branches.length}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={previousBranch}
                  aria-label="Previous location"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-800 transition hover:border-blue-700 hover:bg-blue-700 hover:text-white"
                >
                  <ArrowLeft size={19} />
                </button>
                <button
                  type="button"
                  onClick={nextBranch}
                  aria-label="Next location"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-white transition hover:bg-yellow-400 hover:text-blue-950"
                >
                  <ArrowRight size={19} />
                </button>
              </div>
            </div>
          </div>

          {/* Animated image card */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-3xl bg-yellow-400 sm:-left-6 sm:-top-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeBranch.id}
                initial={{ opacity: 0, scale: 0.96, x: 35 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.97, x: -25 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-[28px] bg-slate-100 shadow-2xl"
              >
                <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5]">
                  <img
                    src={activeBranch.image}
                    alt={`${activeBranch.name} location in Edakkara`}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-bold text-blue-900 shadow-lg backdrop-blur-md">
                    <Building2 size={16} />
                    OUR LOCATION
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.45 }}
                    className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8"
                  >
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-300">
                      Edakkara · Kerala
                    </p>
                    <h4 className="text-2xl font-black sm:text-3xl">
                      {activeBranch.address}
                    </h4>
                    <p className="mt-2 text-sm text-white/80 sm:text-base">
                      {activeBranch.road}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute -bottom-4 -right-3 -z-0 h-24 w-24 rounded-full border-[12px] border-blue-100 sm:-right-5" />
          </div>
        </div>

        {/* Location summary cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {branches.map((branch, index) => (
            <motion.button
              key={branch.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              whileHover={{ y: -4 }}
              className={`rounded-2xl border p-5 text-left transition-all ${
                activeIndex === index
                  ? "border-blue-700 bg-blue-50 shadow-md"
                  : "border-slate-100 bg-white hover:border-yellow-400"
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-100 text-blue-800">
                  <MapPin size={18} />
                </span>
                <span className="text-xs font-bold text-slate-400">
                  0{index + 1}
                </span>
              </div>
              <h4 className="font-bold text-slate-950">
                {branch.address}
              </h4>
              <p className="mt-2 text-sm text-slate-500">
                {branch.road}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBranches;
