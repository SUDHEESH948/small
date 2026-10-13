
import React, { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Percent,
  ShieldCheck,
  Zap,
  Check,
  ArrowUpRight,
} from "lucide-react";

const advantages = [
  {
    id: "locations",
    number: "01",
    label: "Prime Locations",
    title: "A better place to shop, live, and grow.",
    description:
      "Discover thoughtfully selected retail destinations designed to bring shopping, convenience, and everyday experiences closer together.",
    icon: MapPin,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Modern retail shopping destination",
    highlights: [
      "Conveniently connected destinations",
      "Designed for everyday accessibility",
      "Spaces for brands and communities",
    ],
  },
  {
    id: "pricing",
    number: "02",
    label: "Smart Value",
    title: "More value in every experience.",
    description:
      "Create meaningful shopping experiences through a balanced mix of retail, convenience, and opportunities for customers and businesses.",
    icon: Percent,
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Shopping bags representing retail value",
    highlights: [
      "Value-focused shopping experiences",
      "A diverse retail mix",
      "Convenience for every visitor",
    ],
  },
  {
    id: "management",
    number: "03",
    label: "Trusted Management",
    title: "Reliable spaces, managed with care.",
    description:
      "A considered approach to retail space management helps create welcoming environments for customers, tenants, and business partners.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Contemporary commercial interior",
    highlights: [
      "A customer-focused approach",
      "Organized retail environments",
      "Long-term business relationships",
    ],
  },
  {
    id: "facilities",
    number: "04",
    label: "Modern Facilities",
    title: "Everyday convenience, thoughtfully designed.",
    description:
      "Explore modern retail environments designed around comfort, accessibility, and the needs of today's shoppers and businesses.",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Bright modern shopping mall interior",
    highlights: [
      "Comfortable retail environments",
      "Convenience-focused spaces",
      "Designed for everyday experiences",
    ],
  },
];

function useInView(ref) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return undefined;

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);

  return inView;
}

export default function HomeAdvantages({
  propertiesHref = "#properties",
  contactHref = "#contact",
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const sectionRef = useRef(null);
  const tabRefs = useRef([]);
  const resumeTimer = useRef(null);

  const inView = useInView(sectionRef);
  const current = advantages[active];

  // Automatically advance every 1 second while the section is visible.
  // A manual selection pauses the animation for 2 seconds.
  useEffect(() => {
    if (!inView || paused) return undefined;

    const timer = setInterval(() => {
      setActive((previous) => (previous + 1) % advantages.length);
    }, 1000);

    return () => clearInterval(timer);
  }, [inView, paused]);

  // Clear the pending timeout when the component unmounts.
  useEffect(() => {
    return () => {
      if (resumeTimer.current) {
        clearTimeout(resumeTimer.current);
      }
    };
  }, []);

  const select = (index, focus = false) => {
    const next = (index + advantages.length) % advantages.length;

    // Show the user's selection immediately.
    setActive(next);

    // Pause automatic animation after every manual selection.
    setPaused(true);

    // Restart the 2-second countdown on every click.
    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current);
    }

    resumeTimer.current = setTimeout(() => {
      setPaused(false);
      resumeTimer.current = null;
    }, 2000);

    if (focus) {
      tabRefs.current[next]?.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    let nextIndex = index;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = (index + 1) % advantages.length;
        break;

      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = (index - 1 + advantages.length) % advantages.length;
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = advantages.length - 1;
        break;

      default:
        return;
    }

    event.preventDefault();
    select(nextIndex, true);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-28"
      aria-label="Why choose Small Mall"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0E5EC8]/15 bg-white px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0E5EC8]">
              <span className="h-2 w-2 rounded-full bg-[#F9B00C]" />
              The Small Mall Difference
            </div>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              More than a place.
              <span className="block text-[#0E5EC8]">
                A better experience.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base">
            Explore the features that shape a more convenient, welcoming, and
            thoughtfully designed retail experience.
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* Advantage navigation */}
          <div className="flex flex-col gap-3">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              const isActive = active === index;

              return (
                <button
                  key={item.id}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  type="button"
                  role="tab"
                  id={`advantage-tab-${item.id}`}
                  aria-selected={isActive}
                  aria-controls="advantage-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => select(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={`group relative w-full overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 ${
                    isActive
                      ? "border-[#0E5EC8] bg-white shadow-[0_12px_35px_rgba(14,94,200,0.09)]"
                      : "border-slate-200 bg-white/70 hover:border-[#0E5EC8]/40 hover:bg-white"
                  }`}
                >
                  {/* Active progress indicator */}
                  {isActive && (
                    <span
                      key={`progress-${active}`}
                      className="absolute bottom-0 left-0 h-1 bg-[#F9B00C] animate-advantage-progress"
                      aria-hidden="true"
                    />
                  )}

                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 sm:h-14 sm:w-14 ${
                        isActive
                          ? "bg-[#0E5EC8] text-white"
                          : "bg-slate-100 text-slate-600 group-hover:bg-[#EAF2FF] group-hover:text-[#0E5EC8]"
                      }`}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <span
                          className={`text-[10px] font-bold tracking-widest ${
                            isActive ? "text-[#0E5EC8]" : "text-slate-400"
                          }`}
                        >
                          {item.number}
                        </span>

                        {isActive && (
                          <span className="h-1 w-1 rounded-full bg-[#F9B00C]" />
                        )}
                      </div>

                      <h3
                        className={`text-base font-semibold sm:text-lg ${
                          isActive ? "text-slate-950" : "text-slate-700"
                        }`}
                      >
                        {item.label}
                      </h3>
                    </div>

                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-[#F9B00C] text-slate-950"
                          : "bg-transparent text-slate-400 group-hover:bg-slate-100 group-hover:text-slate-800"
                      }`}
                    >
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </button>
              );
            })}

            <p className="mt-1 px-1 text-xs leading-5 text-slate-500">
              Select any feature to explore it. Automatic rotation resumes
              after 2 seconds.
            </p>
          </div>

          {/* Active advantage panel */}
          <div
            id="advantage-panel"
            role="tabpanel"
            aria-labelledby={`advantage-tab-${current.id}`}
            className="relative flex min-h-[420px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm sm:min-h-[500px]"
          >
            {/* Image */}
            <div className="relative min-h-[230px] flex-1 overflow-hidden sm:min-h-[300px]">
              {advantages.map((item, index) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.imageAlt}
                  loading={index === 0 ? "eager" : "lazy"}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
                    active === index
                      ? "scale-100 opacity-100"
                      : "pointer-events-none scale-105 opacity-0"
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />

              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/25 bg-slate-950/30 px-3 py-2 text-xs font-medium text-white backdrop-blur-md sm:left-7 sm:top-7">
                <span className="h-2 w-2 rounded-full bg-[#F9B00C]" />
                Small Mall Advantage
              </div>

              <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">
                <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#F9B00C]">
                  {current.number} / 04
                </span>

                <h3
                  key={`title-${current.id}`}
                  className="max-w-xl text-2xl font-semibold leading-tight text-white animate-advantage-fade sm:text-3xl lg:text-4xl"
                >
                  {current.title}
                </h3>
              </div>
            </div>

            {/* Description and highlights */}
            <div className="p-5 sm:p-7 lg:p-8">
              <p
                key={`description-${current.id}`}
                className="mb-6 max-w-2xl text-sm leading-7 text-slate-600 animate-advantage-fade sm:text-base"
              >
                {current.description}
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {current.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF2FF] text-[#0E5EC8]">
                      <Check size={13} strokeWidth={2.5} />
                    </span>

                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
                <div className="flex items-center gap-2">
                  {advantages.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => select(index)}
                      aria-label={`Show ${item.label}`}
                      aria-pressed={active === index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        active === index
                          ? "w-8 bg-[#0E5EC8]"
                          : "w-2 bg-slate-300 hover:bg-slate-500"
                      }`}
                    />
                  ))}
                </div>

                <a
                  href={propertiesHref}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E5EC8] transition-colors hover:text-[#08499F]"
                >
                  Explore Small Mall
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>

       
      </div>

      {/* Component-specific animations */}
      <style>{`
        @keyframes advantage-progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes advantage-fade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-advantage-progress {
          animation: advantage-progress 1s linear forwards;
        }

        .animate-advantage-fade {
          animation: advantage-fade 450ms ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-advantage-progress,
          .animate-advantage-fade {
            animation: none !important;
          }

          * {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}