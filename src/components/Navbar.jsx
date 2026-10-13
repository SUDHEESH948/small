import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  KeyRound
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePropertiesExpanded, setMobilePropertiesExpanded] = useState(false);
  const [propertiesDropdownOpen, setPropertiesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  // Detect scroll to apply subtle shadow & glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setPropertiesDropdownOpen(false);
    setMobilePropertiesExpanded(false);
  }, [location.pathname, location.search]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Click outside to close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setPropertiesDropdownOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setPropertiesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
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
    closeTimeoutRef.current = setTimeout(() => {
      setPropertiesDropdownOpen(false);
    }, 150);
  };

  // Property categories and leasing items for the dropdown
  const propertyDropdownItems = [
    {
      title: 'Leasing & Commercial Rentals',
      description: 'Vacant retail shops, food outlets & commercial units',
      path: '/leasing',
      badge: 'Popular',
      icon: KeyRound,
      highlight: true
    },
    {
      title: 'Properties for Sale',
      description: 'Commercial shop ownership & investment opportunities',
      path: '/properties?category=sale',
      icon: Building2
    },
    {
      title: 'All Property Listings',
      description: 'Explore all available units and floor inventory',
      path: '/properties',
      icon: Layers
    }
  ];

  const propertyCategories = [
    { name: 'Commercial Shops', path: '/properties?type=Retail Shop', icon: Store },
    { name: 'Office & Clinic Suites', path: '/properties?type=Office Space', icon: Briefcase },
    { name: 'Food Court & Dining', path: '/properties?type=Restaurant / Food Stall', icon: Utensils },
    { name: 'Supermarket & Anchor', path: '/properties?type=Supermarket Anchor', icon: Sparkles },
  ];

  // Active state checking
  const isHomeActive = location.pathname === '/';
  const isPropertiesActive = 
    location.pathname.startsWith('/properties') || 
    location.pathname === '/leasing' || 
    location.pathname === '/rentals' || 
    location.pathname === '/rooms';
  const isExploreActive = location.pathname === '/explore' || location.pathname === '/branches';
  const isExperiencesActive = location.pathname === '/experiences';
  const isContactActive = location.pathname === '/contact';

  return (
    <>
      <header 
        className={`sticky top-0 z-40 w-full bg-white transition-all duration-300 ${
          scrolled 
            ? 'shadow-md shadow-slate-900/5 border-b border-slate-200/80 py-3' 
            : 'border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo: Small Mall Official Horizontal Branding */}
            <Link 
              to="/" 
              className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#0E5EC8] rounded-xl -ml-1 sm:ml-0"
              aria-label="Small Mall - Home"
            >
              <img 
                src="/logo/small-logo-horizontal.png" 
                alt="Small Mall Logo" 
                className="h-9 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-200" 
              />
            </Link>

            {/* Desktop Navigation Links — Exactly 5 Items */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              
              {/* 1. Home */}
              <Link
                to="/"
                className={`relative py-2 text-sm transition-colors duration-200 group ${
                  isHomeActive
                    ? 'text-[#0E5EC8] font-bold'
                    : 'text-slate-700 hover:text-[#0E5EC8] font-medium'
                }`}
              >
                <span>Home</span>
                {/* Active / Hover Underline Indicator */}
                <span 
                  className={`absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#0E5EC8] rounded-full transition-all duration-200 origin-center ${
                    isHomeActive 
                      ? 'scale-x-100 opacity-100' 
                      : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                  }`} 
                />
              </Link>

              {/* 2. Properties (with Dropdown Menu) */}
              <div 
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setPropertiesDropdownOpen(!propertiesDropdownOpen)}
                  aria-expanded={propertiesDropdownOpen}
                  aria-haspopup="true"
                  className={`relative py-2 text-sm flex items-center gap-1.5 transition-colors duration-200 group cursor-pointer focus:outline-none ${
                    isPropertiesActive
                      ? 'text-[#0E5EC8] font-bold'
                      : 'text-slate-700 hover:text-[#0E5EC8] font-medium'
                  }`}
                >
                  <span>Properties</span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      propertiesDropdownOpen ? 'rotate-180 text-[#0E5EC8]' : 'text-slate-400 group-hover:text-[#0E5EC8]'
                    }`} 
                  />
                  {/* Active / Hover Underline Indicator */}
                  <span 
                    className={`absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#0E5EC8] rounded-full transition-all duration-200 origin-center ${
                      isPropertiesActive 
                        ? 'scale-x-100 opacity-100' 
                        : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    }`} 
                  />
                </button>

                {/* Dropdown Menu Card */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[460px] z-50 transition-all duration-200 ${
                    propertiesDropdownOpen 
                      ? 'opacity-100 translate-y-0 visible pointer-events-auto' 
                      : 'opacity-0 translate-y-2 invisible pointer-events-none'
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 p-4 space-y-3.5 backdrop-blur-md">
                    
                    {/* Primary Highlight Items (Leasing & Sale) */}
                    <div className="space-y-1">
                      {propertyDropdownItems.map((item) => {
                        const Icon = item.icon;
                        const isCurrent = location.pathname === item.path;
                        return (
                          <Link
                            key={item.title}
                            to={item.path}
                            onClick={() => setPropertiesDropdownOpen(false)}
                            className={`flex items-start gap-3 p-2.5 rounded-xl transition-all group ${
                              item.highlight 
                                ? 'bg-blue-50/70 hover:bg-blue-50 border border-blue-100/70' 
                                : 'hover:bg-slate-50'
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                              item.highlight
                                ? 'bg-[#0E5EC8] text-white shadow-xs'
                                : 'bg-slate-100 text-slate-600 group-hover:bg-[#0E5EC8] group-hover:text-white'
                            }`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className={`text-sm font-semibold transition-colors ${
                                  isCurrent ? 'text-[#0E5EC8]' : 'text-slate-900 group-hover:text-[#0E5EC8]'
                                }`}>
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

                    {/* Divider & Categories Section */}
                    <div className="pt-2 border-t border-slate-100">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
                        Categories & Spaces
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {propertyCategories.map((cat) => {
                          const Icon = cat.icon;
                          return (
                            <Link
                              key={cat.name}
                              to={cat.path}
                              onClick={() => setPropertiesDropdownOpen(false)}
                              className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs font-medium text-slate-700 hover:text-[#0E5EC8] hover:bg-slate-50 transition-colors"
                            >
                              <Icon className="w-3.5 h-3.5 text-[#0E5EC8] shrink-0" />
                              <span className="truncate">{cat.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* Dropdown Footer CTA */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between px-2 text-xs text-slate-500">
                      <span>Need leasing assistance?</span>
                      <a 
                        href="tel:+919447175232" 
                        className="font-semibold text-[#0E5EC8] hover:text-blue-800 transition-colors"
                      >
                        +91 94471 75232
                      </a>
                    </div>

                  </div>
                </div>
              </div>

              {/* 3. Explore */}
              <Link
                to="/explore"
                className={`relative py-2 text-sm transition-colors duration-200 group ${
                  isExploreActive
                    ? 'text-[#0E5EC8] font-bold'
                    : 'text-slate-700 hover:text-[#0E5EC8] font-medium'
                }`}
              >
                <span>Explore</span>
                {/* Active / Hover Underline Indicator */}
                <span 
                  className={`absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#0E5EC8] rounded-full transition-all duration-200 origin-center ${
                    isExploreActive 
                      ? 'scale-x-100 opacity-100' 
                      : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                  }`} 
                />
              </Link>

              {/* 4. Experiences */}
              <Link
                to="/experiences"
                className={`relative py-2 text-sm transition-colors duration-200 group ${
                  isExperiencesActive
                    ? 'text-[#0E5EC8] font-bold'
                    : 'text-slate-700 hover:text-[#0E5EC8] font-medium'
                }`}
              >
                <span>Experiences</span>
                {/* Active / Hover Underline Indicator */}
                <span 
                  className={`absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#0E5EC8] rounded-full transition-all duration-200 origin-center ${
                    isExperiencesActive 
                      ? 'scale-x-100 opacity-100' 
                      : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                  }`} 
                />
              </Link>

              {/* 5. Contact */}
              <Link
                to="/contact"
                className={`relative py-2 text-sm transition-colors duration-200 group ${
                  isContactActive
                    ? 'text-[#0E5EC8] font-bold'
                    : 'text-slate-700 hover:text-[#0E5EC8] font-medium'
                }`}
              >
                <span>Contact</span>
                {/* Active / Hover Underline Indicator */}
                <span 
                  className={`absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#0E5EC8] rounded-full transition-all duration-200 origin-center ${
                    isContactActive 
                      ? 'scale-x-100 opacity-100' 
                      : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                  }`} 
                />
              </Link>

            </nav>

            {/* Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/leasing"
                className="inline-flex items-center gap-2 bg-[#F9B00C] hover:bg-[#e5a007] text-[#1F2937] px-4 py-2 rounded-xl text-xs font-black shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
              >
                <span>Enquire Space</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/contact"
                className="sm:hidden bg-[#F9B00C] text-[#1F2937] text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm"
              >
                Contact
              </Link>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#0E5EC8]"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer - OUTSIDE header to ensure full viewport coverage */}
      <div 
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs"
        />

        {/* Drawer Panel */}
        <div 
          className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm h-full h-[100dvh] bg-white shadow-2xl z-50 flex flex-col justify-between transition-transform duration-300 ease-out transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
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
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Nav Items — Exactly 5 Items with Properties Accordion */}
          <div className="p-4 space-y-1.5 overflow-y-auto flex-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">
              Menu Navigation
            </div>

            {/* 1. Home */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-all ${
                isHomeActive
                  ? 'text-[#0E5EC8] bg-blue-50 border border-blue-200/80 shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-[#0E5EC8]'
              }`}
            >
              <span>Home</span>
              {isHomeActive ? (
                <span className="w-2 h-2 rounded-full bg-[#F9B00C]" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-300" />
              )}
            </Link>

            {/* 2. Properties (Accordion with 'Leasing' & Categories) */}
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setMobilePropertiesExpanded(!mobilePropertiesExpanded)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-all ${
                  isPropertiesActive
                    ? 'text-[#0E5EC8] bg-blue-50/70 border border-blue-200/60'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-[#0E5EC8]'
                }`}
              >
                <span>Properties</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobilePropertiesExpanded ? 'rotate-180 text-[#0E5EC8]' : 'text-slate-400'
                  }`} 
                />
              </button>

              {/* Sub-items accordion */}
              {mobilePropertiesExpanded && (
                <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-blue-200 ml-4 my-1">
                  <Link
                    to="/leasing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#0E5EC8]"
                  >
                    <span>Leasing & Rentals</span>
                    <span className="text-[9px] bg-[#F9B00C] text-slate-900 font-bold px-1.5 py-0.5 rounded">
                      Hot
                    </span>
                  </Link>
                  <Link
                    to="/properties"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#0E5EC8]"
                  >
                    All Properties
                  </Link>
                  <Link
                    to="/properties?type=Retail Shop"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-[#0E5EC8]"
                  >
                    Commercial Shops
                  </Link>
                  <Link
                    to="/properties?type=Office Space"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-[#0E5EC8]"
                  >
                    Office & Clinic Suites
                  </Link>
                  <Link
                    to="/properties?type=Restaurant / Food Stall"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-[#0E5EC8]"
                  >
                    Food Court & Dining
                  </Link>
                  <Link
                    to="/properties?type=Supermarket Anchor"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-[#0E5EC8]"
                  >
                    Supermarket & Anchor
                  </Link>
                </div>
              )}
            </div>

            {/* 3. Explore */}
            <Link
              to="/explore"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-all ${
                isExploreActive
                  ? 'text-[#0E5EC8] bg-blue-50 border border-blue-200/80 shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-[#0E5EC8]'
              }`}
            >
              <span>Explore</span>
              {isExploreActive ? (
                <span className="w-2 h-2 rounded-full bg-[#F9B00C]" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-300" />
              )}
            </Link>

            {/* 4. Experiences */}
            <Link
              to="/experiences"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-all ${
                isExperiencesActive
                  ? 'text-[#0E5EC8] bg-blue-50 border border-blue-200/80 shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-[#0E5EC8]'
              }`}
            >
              <span>Experiences</span>
              {isExperiencesActive ? (
                <span className="w-2 h-2 rounded-full bg-[#F9B00C]" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-300" />
              )}
            </Link>

            {/* 5. Contact */}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-all ${
                isContactActive
                  ? 'text-[#0E5EC8] bg-blue-50 border border-blue-200/80 shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-[#0E5EC8]'
              }`}
            >
              <span>Contact</span>
              {isContactActive ? (
                <span className="w-2 h-2 rounded-full bg-[#F9B00C]" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-300" />
              )}
            </Link>

          </div>

          {/* Drawer Bottom CTA */}
          <div className="p-5 border-t border-slate-100 bg-slate-50/80 space-y-3 shrink-0">
            <Link
              to="/leasing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#F9B00C] hover:bg-[#e5a007] text-[#1F2937] py-3 rounded-xl font-extrabold text-sm shadow-md active:scale-95 transition-all"
            >
              <span>Enquire About Space</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="text-xs text-slate-500 space-y-1 text-center pt-1">
              <div>Direct Hotline: <strong className="text-slate-800">+91 94471 75232</strong></div>
              <div className="text-[11px] text-slate-400">Edakkara, Calicut-Ooty Highway</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
