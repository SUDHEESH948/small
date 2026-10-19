import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Building2,
  Store,
  Briefcase,
  Utensils,
  Layers,
  Sparkles,
  KeyRound,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePropertiesExpanded, setMobilePropertiesExpanded] =
    useState(false);
  const [propertiesDropdownOpen, setPropertiesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  // Detect scroll for navbar shadow.
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus after route changes.
  useEffect(() => {
    setMobileMenuOpen(false);
    setPropertiesDropdownOpen(false);
    setMobilePropertiesExpanded(false);
  }, [location.pathname, location.search]);

  // Prevent background scrolling while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close the desktop dropdown when clicking outside or pressing Escape.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setPropertiesDropdownOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setPropertiesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);

      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleDropdownMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    setPropertiesDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }

    closeTimeoutRef.current = setTimeout(() => {
      setPropertiesDropdownOpen(false);
    }, 150);
  };

  const propertyDropdownItems = [
    {
      title: "Leasing & Commercial Rentals",
      description: "Vacant retail shops, food outlets & commercial units",
      path: "/leasing",
      badge: "Popular",
      icon: KeyRound,
      highlight: true,
    },
    {
      title: "Properties for Sale",
      description: "Commercial shop ownership & investment opportunities",
      path: "/properties?category=sale",
      icon: Building2,
    },
    {
      title: "All Property Listings",
      description: "Explore all available units and floor inventory",
      path: "/properties",
      icon: Layers,
    },
  ];

  const propertyCategories = [
    {
      name: "Commercial Shops",
      path: "/properties?type=Retail Shop",
      icon: Store,
    },
    {
      name: "Office & Clinic Suites",
      path: "/properties?type=Office Space",
      icon: Briefcase,
    },
    {
      name: "Food Court & Dining",
      path: "/properties?type=Restaurant / Food Stall",
      icon: Utensils,
    },
    {
      name: "Supermarket & Anchor",
      path: "/properties?type=Supermarket Anchor",
      icon: Sparkles,
    },
  ];

  const isHomeActive = location.pathname === "/";
  const isExploreActive =
    location.pathname === "/explore" || location.pathname === "/branches";
  const isExperiencesActive = location.pathname === "/experiences";
  const isPropertiesActive =
    location.pathname.startsWith("/properties") ||
    ["/leasing", "/rentals", "/rooms"].includes(location.pathname);
  const isContactActive = location.pathname === "/contact";

  const desktopLinkClass = (active) =>
    `relative py-2 text-sm transition-colors duration-200 group ${
      active
        ? "text-[#0E5EC8] font-bold"
        : "text-slate-700 hover:text-[#0E5EC8] font-medium"
    }`;

  const desktopUnderlineClass = (active) =>
    `absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#0E5EC8] rounded-full transition-all duration-200 origin-center ${
      active
        ? "scale-x-100 opacity-100"
        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
    }`;

  const mobileLinkClass = (active) =>
    `flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-all ${
      active
        ? "text-[#0E5EC8] bg-blue-50 border border-blue-200/80 shadow-sm"
        : "text-slate-700 hover:bg-slate-50 hover:text-[#0E5EC8]"
    }`;

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Reusable desktop Properties dropdown.
  const PropertiesDropdown = () => (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleDropdownMouseEnter}
      onMouseLeave={handleDropdownMouseLeave}
    >
      <button
        type="button"
        onClick={() => setPropertiesDropdownOpen((previous) => !previous)}
        aria-expanded={propertiesDropdownOpen}
        aria-haspopup="true"
        className={`${desktopLinkClass(
          isPropertiesActive,
        )} flex items-center gap-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E5EC8] rounded-md`}
      >
        <span>Properties</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            propertiesDropdownOpen
              ? "rotate-180 text-[#0E5EC8]"
              : "text-slate-400 group-hover:text-[#0E5EC8]"
          }`}
        />
        <span className={desktopUnderlineClass(isPropertiesActive)} />
      </button>

      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[460px] max-w-[calc(100vw-2rem)] z-50 transition-all duration-200 ${
          propertiesDropdownOpen
            ? "opacity-100 translate-y-0 visible pointer-events-auto"
            : "opacity-0 translate-y-2 invisible pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 p-4 space-y-3.5">
          <div className="space-y-1">
            {propertyDropdownItems.map((item) => {
              const Icon = item.icon;
              const isCurrent =
                location.pathname === item.path && !location.search;

              return (
                <Link
                  key={item.title}
                  to={item.path}
                  onClick={() => setPropertiesDropdownOpen(false)}
                  className={`flex items-start gap-3 p-2.5 rounded-xl transition-all group ${
                    item.highlight
                      ? "bg-blue-50/70 hover:bg-blue-50 border border-blue-100/70"
                      : "hover:bg-slate-50"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      item.highlight
                        ? "bg-[#0E5EC8] text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 group-hover:bg-[#0E5EC8] group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`text-sm font-semibold transition-colors ${
                          isCurrent
                            ? "text-[#0E5EC8]"
                            : "text-slate-900 group-hover:text-[#0E5EC8]"
                        }`}
                      >
                        {item.title}
                      </span>

                      {item.badge && (
                        <span className="text-[10px] font-bold bg-[#F9B00C] text-slate-950 px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-500 leading-snug mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
              Categories & Spaces
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              {propertyCategories.map((category) => {
                const Icon = category.icon;

                return (
                  <Link
                    key={category.name}
                    to={category.path}
                    onClick={() => setPropertiesDropdownOpen(false)}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs font-medium text-slate-700 hover:text-[#0E5EC8] hover:bg-slate-50 transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#0E5EC8] shrink-0" />
                    <span className="truncate">{category.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3 px-2 text-xs text-slate-500">
            <span>Need leasing assistance?</span>
            <a
              href="tel:+919447175232"
              className="font-semibold text-[#0E5EC8] hover:text-blue-800 transition-colors whitespace-nowrap"
            >
              +91 94471 75232
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-white transition-all duration-300 ${
          scrolled
            ? "shadow-md shadow-slate-900/5 border-b border-slate-200/80 py-3"
            : "border-b border-slate-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Small Mall logo */}
            <Link
              to="/"
              className="flex items-center shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E5EC8] rounded-xl -ml-1 sm:ml-0"
              aria-label="Small Mall - Home"
            >
              <img
                src="/logo/small-logo-horizontal.png"
                alt="Small Mall Logo"
                className="h-8 sm:h-10 w-auto max-w-[130px] min-[380px]:max-w-none object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </Link>

            {/* Desktop navigation: Home, Explore, Experiences, Properties, Contact */}
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center gap-6 xl:gap-8"
            >
              <Link to="/" className={desktopLinkClass(isHomeActive)}>
                <span>Home</span>
                <span className={desktopUnderlineClass(isHomeActive)} />
              </Link>

              <Link to="/explore" className={desktopLinkClass(isExploreActive)}>
                <span>Explore</span>
                <span className={desktopUnderlineClass(isExploreActive)} />
              </Link>

              <Link
                to="/experiences"
                className={desktopLinkClass(isExperiencesActive)}
              >
                <span>Experiences</span>
                <span className={desktopUnderlineClass(isExperiencesActive)} />
              </Link>

              {/* Properties is now the fourth navigation item */}
              <PropertiesDropdown />

              <Link to="/contact" className={desktopLinkClass(isContactActive)}>
                <span>Contact</span>
                <span className={desktopUnderlineClass(isContactActive)} />
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/leasing"
                className="inline-flex items-center gap-2 bg-[#F9B00C] hover:bg-[#e5a007] text-[#1F2937] px-4 py-2 rounded-xl text-xs font-black shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
              >
                <span>Enquire Space</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile actions */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
              <Link
                to="/contact"
                className="sm:hidden bg-[#F9B00C] hover:bg-[#e5a007] text-[#1F2937] text-[11px] font-bold px-2.5 py-1.5 rounded-lg shadow-sm transition-colors whitespace-nowrap"
              >
                Contact
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((previous) => !previous)}
                className="w-9 h-9 shrink-0 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E5EC8]"
                aria-label={
                  mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
                }
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <button
          type="button"
          onClick={closeMobileMenu}
          aria-label="Close navigation menu"
          tabIndex={mobileMenuOpen ? 0 : -1}
          className="fixed inset-0 w-full h-full bg-black/60 backdrop-blur-sm cursor-default"
        />

        {/* Drawer panel */}
        <div
          id="mobile-navigation-drawer"
          inert={!mobileMenuOpen}
          className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm h-[100dvh] bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex items-center"
              aria-label="Small Mall - Home"
            >
              <img
                src="/logo/small-logo-horizontal.png"
                alt="Small Mall Logo"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            <button
              type="button"
              onClick={closeMobileMenu}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile links in the same order as desktop */}
          <nav
            aria-label="Mobile navigation"
            className="p-4 space-y-1.5 overflow-y-auto flex-1"
          >
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">
              Menu Navigation
            </div>

            {/* 1. Home */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={mobileLinkClass(isHomeActive)}
            >
              <span>Home</span>
              {isHomeActive ? (
                <span className="w-2 h-2 rounded-full bg-[#F9B00C]" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-300" />
              )}
            </Link>

            {/* 2. Explore */}
            <Link
              to="/explore"
              onClick={closeMobileMenu}
              className={mobileLinkClass(isExploreActive)}
            >
              <span>Explore</span>
              {isExploreActive ? (
                <span className="w-2 h-2 rounded-full bg-[#F9B00C]" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-300" />
              )}
            </Link>

            {/* 3. Experiences */}
            <Link
              to="/experiences"
              onClick={closeMobileMenu}
              className={mobileLinkClass(isExperiencesActive)}
            >
              <span>Experiences</span>
              {isExperiencesActive ? (
                <span className="w-2 h-2 rounded-full bg-[#F9B00C]" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-300" />
              )}
            </Link>

            {/* 4. Properties accordion */}
            <div className="space-y-1">
              <button
                type="button"
                onClick={() =>
                  setMobilePropertiesExpanded((previous) => !previous)
                }
                className={`w-full ${mobileLinkClass(isPropertiesActive)}`}
                aria-expanded={mobilePropertiesExpanded}
              >
                <span>Properties</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobilePropertiesExpanded
                      ? "rotate-180 text-[#0E5EC8]"
                      : "text-slate-400"
                  }`}
                />
              </button>

              {mobilePropertiesExpanded && (
                <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-blue-200 ml-4 my-1">
                  <Link
                    to="/leasing"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#0E5EC8]"
                  >
                    <span>Leasing & Rentals</span>
                    <span className="text-[9px] bg-[#F9B00C] text-slate-900 font-bold px-1.5 py-0.5 rounded">
                      Hot
                    </span>
                  </Link>

                  <Link
                    to="/properties?category=sale"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#0E5EC8]"
                  >
                    Properties for Sale
                  </Link>

                  <Link
                    to="/properties"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#0E5EC8]"
                  >
                    All Properties
                  </Link>

                  {propertyCategories.map((category) => {
                    const Icon = category.icon;

                    return (
                      <Link
                        key={category.name}
                        to={category.path}
                        onClick={closeMobileMenu}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-slate-600 hover:bg-blue-50 hover:text-[#0E5EC8]"
                      >
                        <Icon className="w-3.5 h-3.5 text-[#0E5EC8] shrink-0" />
                        <span>{category.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 5. Contact */}
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className={mobileLinkClass(isContactActive)}
            >
              <span>Contact</span>
              {isContactActive ? (
                <span className="w-2 h-2 rounded-full bg-[#F9B00C]" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-300" />
              )}
            </Link>
          </nav>

          {/* Drawer footer CTA */}
          <div className="p-5 border-t border-slate-100 bg-slate-50/80 space-y-3 shrink-0">
            <Link
              to="/leasing"
              onClick={closeMobileMenu}
              className="w-full flex items-center justify-center gap-2 bg-[#F9B00C] hover:bg-[#e5a007] text-[#1F2937] py-3 rounded-xl font-extrabold text-sm shadow-md active:scale-95 transition-all"
            >
              <span>Enquire About Space</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="text-xs text-slate-500 space-y-1 text-center pt-1">
              <div>
                Direct Hotline:{" "}
                <a
                  href="tel:+919447175232"
                  className="font-bold text-slate-800"
                >
                  +91 94471 75232
                </a>
              </div>
              <div className="text-[11px] text-slate-400">
                Edakkara, Calicut-Ooty Highway
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
