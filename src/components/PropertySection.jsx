import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Maximize2, 
  Search, 
  X, 
  Check, 
  ArrowRight, 
  MessageSquare, 
  Phone,
  Sparkles,
  SlidersHorizontal,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Calendar,
  Layers,
  Zap,
  Info
} from 'lucide-react';
import { properties as allProperties } from '../data/properties';
import { branches } from '../data/branches';

export default function PropertySection({
  title = "Commercial Properties",
  subtitle = "Discover available spaces across Small Mall properties",
  category = "all", // "all" | "sale" | "rent"
  propertyTypeFilter = "all",
  branchId = null,
  featuredOnly = false,
  recentOnly = false,
  limit = null,
  showFilters = true,
  showViewAllLink = null
}) {
  const navigate = useNavigate();

  // Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [selectedType, setSelectedType] = useState(propertyTypeFilter);
  const [selectedBranch, setSelectedBranch] = useState(branchId || "all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");
  const [availabilityOnly, setAvailabilityOnly] = useState(true);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [resultsFading, setResultsFading] = useState(false);

  // Modal / Detail state
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Image load state tracker to display shimmer placeholder until loaded
  const [loadedImages, setLoadedImages] = useState({});

  // Close modal on ESC key & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProperty(null);
      }
    };

    if (selectedProperty) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProperty]);

  // Property types list derived from data
  const propertyTypes = useMemo(() => {
    const types = new Set(allProperties.map(p => p.propertyType));
    return ["all", ...Array.from(types)];
  }, []);

  // Filter logic
  const filteredProperties = useMemo(() => {
    let list = [...allProperties];

    if (category !== "all") {
      list = list.filter(p => p.category === category);
    } else if (selectedCategory !== "all") {
      list = list.filter(p => p.category === selectedCategory);
    }

    if (branchId) {
      list = list.filter(p => p.branchId === branchId);
    } else if (selectedBranch !== "all") {
      list = list.filter(p => p.branchId === selectedBranch);
    }

    if (selectedType !== "all") {
      list = list.filter(p => p.propertyType === selectedType);
    }

    if (availabilityOnly) {
      list = list.filter(p => p.availability === "Available");
    }

    if (featuredOnly) {
      list = list.filter(p => p.featured === true);
    }

    if (recentOnly) {
      list.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    }

    if (searchTerm.trim() !== "") {
      const q = searchTerm.toLowerCase().trim();
      list = list.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.address.toLowerCase().includes(q) ||
        p.propertyType.toLowerCase().includes(q) ||
        p.amenities.some(a => a.toLowerCase().includes(q))
      );
    }

    if (minPrice !== "" && !isNaN(Number(minPrice))) {
      list = list.filter(p => p.price >= Number(minPrice));
    }
    if (maxPrice !== "" && !isNaN(Number(maxPrice))) {
      list = list.filter(p => p.price <= Number(maxPrice));
    }

    if (minArea !== "" && !isNaN(Number(minArea))) {
      list = list.filter(p => p.area >= Number(minArea));
    }
    if (maxArea !== "" && !isNaN(Number(maxArea))) {
      list = list.filter(p => p.area <= Number(maxArea));
    }

    if (limit && limit > 0) {
      list = list.slice(0, limit);
    }

    return list;
  }, [
    category, 
    selectedCategory, 
    branchId, 
    selectedBranch, 
    selectedType, 
    availabilityOnly, 
    featuredOnly, 
    recentOnly, 
    searchTerm, 
    minPrice, 
    maxPrice, 
    minArea, 
    maxArea, 
    limit
  ]);

  // Trigger slight fade animation on results when filters change
  useEffect(() => {
    setResultsFading(true);
    const timer = setTimeout(() => setResultsFading(false), 200);
    return () => clearTimeout(timer);
  }, [selectedCategory, selectedType, selectedBranch, minPrice, maxPrice, minArea, maxArea, searchTerm, availabilityOnly]);

  const resetFilters = () => {
    setSearchTerm("");
    if (category === "all") setSelectedCategory("all");
    setSelectedType("all");
    if (!branchId) setSelectedBranch("all");
    setMinPrice("");
    setMaxPrice("");
    setMinArea("");
    setMaxArea("");
    setAvailabilityOnly(true);
  };

  const hasActiveFilters = 
    searchTerm !== "" || 
    (category === "all" && selectedCategory !== "all") ||
    selectedType !== "all" ||
    (!branchId && selectedBranch !== "all") ||
    minPrice !== "" ||
    maxPrice !== "" ||
    minArea !== "" ||
    maxArea !== "";

  const getBranchName = (bId) => {
    const b = branches.find(item => item.id === bId);
    return b ? b.name : "Small Mall Branch";
  };

  const handleWhatsAppEnquiry = (property) => {
    const text = encodeURIComponent(
      `Hello Small Mall Management, I would like to enquire about: ${property.name} (Ref ID: ${property.id}) at ${getBranchName(property.branchId)}. Price: ${property.priceLabel}. Please share further details and site viewing options.`
    );
    window.open(`https://wa.me/18005550199?text=${text}`, '_blank');
  };

  const handleContactForm = (property) => {
    navigate(`/contact?propertyId=${property.id}&category=${property.category}`);
  };

  const handleImageLoaded = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-8 lg:py-14 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Short Yellow Bar Accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#0E5EC8] border border-blue-200 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F9B00C]" />
              <span>Small Mall Verified Listings</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1F2937] tracking-tight">
              {title}
            </h2>
            <div className="w-12 h-1 bg-[#F9B00C] rounded-full mt-2"></div>
            <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-2xl">
              {subtitle}
            </p>
          </div>

          {showViewAllLink && (
            <button
              onClick={() => navigate(showViewAllLink)}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0E5EC8] hover:text-blue-800 transition-colors group self-start md:self-end"
            >
              <span>View All Listings</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* Filter & Search Bar */}
        {showFilters && (
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-[#E2E8F0] mb-8 space-y-4">
            
            {/* Top row: search + quick category pills + mobile filter toggle */}
            <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
              
              {/* Search input */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, ID (e.g. SM-SL-101), type, or keyword..."
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0E5EC8] focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Category Segment Tabs (if category='all') */}
              {category === "all" && (
                <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 overflow-x-auto">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                      selectedCategory === "all"
                        ? 'bg-[#0E5EC8] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    All Types
                  </button>
                  <button
                    onClick={() => setSelectedCategory("sale")}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                      selectedCategory === "sale"
                        ? 'bg-[#0E5EC8] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    For Sale
                  </button>
                  <button
                    onClick={() => setSelectedCategory("rent")}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                      selectedCategory === "rent"
                        ? 'bg-[#0E5EC8] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    For Rent
                  </button>
                </div>
              )}

              {/* Filter Drawer Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFiltersOpen(!filtersOpen)}
                  className={`flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all active:scale-95 ${
                    filtersOpen || hasActiveFilters
                      ? 'bg-blue-50 text-[#0E5EC8] border-blue-300'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <SlidersHorizontal className="w-4 h-4 text-[#0E5EC8]" />
                  <span>{filtersOpen ? 'Hide Filters' : 'More Filters'}</span>
                  {hasActiveFilters && (
                    <span className="w-2 h-2 rounded-full bg-[#F9B00C]"></span>
                  )}
                </button>

                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="p-2.5 text-slate-500 hover:text-[#0E5EC8] hover:bg-slate-100 rounded-xl transition-colors active:scale-95"
                    title="Reset all filters"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Expandable Advanced Filters Drawer */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-slate-100 transition-all duration-300 ${
              filtersOpen ? 'block opacity-100' : 'hidden md:grid opacity-100'
            }`}>
              {/* Branch Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">
                  Mall Branch Location
                </label>
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  disabled={Boolean(branchId)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0E5EC8]"
                >
                  <option value="all">All Mall Branches</option>
                  {branches.map(b => (
                    <option key={b.id} value={b.id}>{b.name}</option>
                  ))}
                </select>
              </div>

              {/* Space / Property Type */}
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">
                  Space Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0E5EC8]"
                >
                  <option value="all">All Space Types</option>
                  {propertyTypes.filter(t => t !== "all").map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">
                  Price / Budget ($)
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="Min $"
                    className="w-1/2 px-2.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:ring-2 focus:ring-[#0E5EC8]"
                  />
                  <span className="text-slate-400 text-xs">-</span>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="Max $"
                    className="w-1/2 px-2.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:ring-2 focus:ring-[#0E5EC8]"
                  />
                </div>
              </div>

              {/* Area Range Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">
                  Area Range (Sq Ft)
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    value={minArea}
                    onChange={(e) => setMinArea(e.target.value)}
                    placeholder="Min sqft"
                    className="w-1/2 px-2.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:ring-2 focus:ring-[#0E5EC8]"
                  />
                  <span className="text-slate-400 text-xs">-</span>
                  <input
                    type="number"
                    value={maxArea}
                    onChange={(e) => setMaxArea(e.target.value)}
                    placeholder="Max sqft"
                    className="w-1/2 px-2.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:ring-2 focus:ring-[#0E5EC8]"
                  />
                </div>
              </div>
            </div>

            {/* Results counter indicator */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span>Showing <strong className="text-slate-900">{filteredProperties.length}</strong> matching verified spaces</span>
                {availabilityOnly && (
                  <span className="inline-flex items-center gap-1 text-[#0E5EC8] bg-blue-50 px-2 py-0.5 rounded-md font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Available only
                  </span>
                )}
              </div>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-[#0E5EC8] hover:underline font-bold"
                >
                  Clear all filters
                </button>
              )}
            </div>

          </div>
        )}

        {/* Property Grid with 4:3 ratio, stagger delay, card hover lift, and subtle image zoom */}
        {filteredProperties.length > 0 ? (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-200 ${
            resultsFading ? 'opacity-50' : 'opacity-100'
          }`}>
            {filteredProperties.map((property, index) => {
              const isSale = property.category === "sale";
              const branchName = getBranchName(property.branchId);
              const staggerDelay = Math.min(index * 60, 300);
              const isImgLoaded = loadedImages[property.id];

              return (
                <div
                  key={property.id}
                  style={{ animationDelay: `${staggerDelay}ms` }}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:border-[#0E5EC8]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col will-change-transform"
                >
                  {/* Fixed 4:3 Image Ratio with shimmer placeholder and gentle zoom */}
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                    
                    {!isImgLoaded && (
                      <div className="absolute inset-0 shimmer-placeholder" />
                    )}

                    <img
                      src={property.images[0]}
                      alt={property.name}
                      loading="lazy"
                      onLoad={() => handleImageLoaded(property.id)}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out ${
                        isImgLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                    />

                    {/* Gradient Overlay for Top Badges */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                    {/* Top-Left: Availability Badge with semantic status color */}
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <span className="bg-white/95 backdrop-blur-md text-slate-800 px-2.5 py-1 rounded-lg text-[11px] font-bold shadow-sm flex items-center gap-1.5 border border-slate-100">
                        <span className={`w-2 h-2 rounded-full ${
                          property.availability === 'Available' ? 'bg-emerald-500' : 'bg-slate-400'
                        }`} />
                        <span>{property.availability}</span>
                      </span>
                    </div>

                    {/* Top-Right: Yellow "Featured" Badge when featured */}
                    {property.featured && (
                      <div className="absolute top-3 right-3 pointer-events-none">
                        <span className="bg-[#F9B00C] text-[#1F2937] px-2.5 py-1 rounded-lg text-xs font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#1F2937]" />
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Bottom image bar */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                      <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[11px]">
                        Ref: {property.id}
                      </span>
                      <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[11px]">
                        {isSale ? 'Freehold Sale' : 'Commercial Lease'}
                      </span>
                    </div>
                  </div>

                  {/* Property Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      
                      {/* Price Section */}
                      <div className="border-b border-slate-100 pb-3">
                        <div className="flex items-baseline gap-2">
                          <div className="text-2xl sm:text-3xl font-black text-[#0E5EC8] tracking-tight">
                            {property.priceLabel}
                          </div>
                          <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">
                            {isSale ? 'For Sale' : '/ month'}
                          </span>
                        </div>

                        {/* Security deposit on its own dedicated line */}
                        {!isSale && property.securityDeposit && (
                          <div className="text-xs font-medium text-[#64748B] mt-1 flex items-center gap-1">
                            <span>Security Deposit:</span>
                            <strong className="text-slate-700">${property.securityDeposit.toLocaleString()}</strong>
                            <span className="text-slate-400">• refundable</span>
                          </div>
                        )}

                        {isSale && (
                          <div className="text-xs font-medium text-[#64748B] mt-1">
                            ${Math.round(property.price / property.area)} / sq ft • Freehold Title
                          </div>
                        )}
                      </div>

                      {/* Property Name */}
                      <h3 
                        onClick={() => {
                          setSelectedProperty(property);
                          setActiveImageIndex(0);
                        }}
                        className="text-base sm:text-lg font-bold text-[#1F2937] hover:text-[#0E5EC8] cursor-pointer transition-colors line-clamp-1"
                        title={property.name}
                      >
                        {property.name}
                      </h3>

                      {/* Small icon row for Area, Type, and Location */}
                      <div className="grid grid-cols-3 gap-2 py-2 px-2.5 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700">
                        <div className="flex items-center gap-1.5 truncate" title={`Area: ${property.area} sq ft`}>
                          <Maximize2 className="w-3.5 h-3.5 text-[#0E5EC8] shrink-0" />
                          <span className="font-extrabold truncate">{property.area} sqft</span>
                        </div>
                        <div className="flex items-center gap-1.5 truncate" title={`Type: ${property.propertyType}`}>
                          <Building2 className="w-3.5 h-3.5 text-[#0E5EC8] shrink-0" />
                          <span className="font-semibold truncate">{property.propertyType}</span>
                        </div>
                        <div className="flex items-center gap-1.5 truncate" title={`Branch: ${branchName}`}>
                          <MapPin className="w-3.5 h-3.5 text-[#0E5EC8] shrink-0" />
                          <span className="font-semibold truncate">{branchName.replace('Small Mall ', '')}</span>
                        </div>
                      </div>

                      {/* Short Description */}
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {property.description}
                      </p>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          setSelectedProperty(property);
                          setActiveImageIndex(0);
                        }}
                        className="w-full py-2.5 px-3 rounded-xl border border-slate-200 hover:border-[#0E5EC8] text-slate-700 hover:text-[#0E5EC8] hover:bg-blue-50/50 text-xs font-bold transition-all text-center hover:-translate-y-0.5 active:scale-95"
                      >
                        View Details
                      </button>

                      <button
                        onClick={() => handleContactForm(property)}
                        className="w-full py-2.5 px-3 rounded-xl bg-[#0E5EC8] hover:bg-[#0b4ca0] text-white text-xs font-bold transition-all shadow-xs text-center flex items-center justify-center gap-1.5 hover:-translate-y-0.5 active:scale-95"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#F9B00C]" />
                        <span>Enquire Now</span>
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Friendly Empty State with Icon and Clear Filters button */
          <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-8 sm:p-12 text-center max-w-lg mx-auto my-8">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0E5EC8] flex items-center justify-center mx-auto mb-4 border border-blue-200">
              <Building2 className="w-7 h-7 text-[#0E5EC8]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              No matching properties found
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-5 leading-relaxed">
              We couldn't find any property listings matching your active filters. Try adjusting your budget bracket, space type, or clear filters to see all available spaces.
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 bg-[#0E5EC8] hover:bg-[#0b4ca0] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#F9B00C]" />
              <span>Clear All Filters</span>
            </button>
          </div>
        )}

        {/* Property Detail Modal */}
        {selectedProperty && (
          <div 
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="property-modal-title"
            onClick={() => setSelectedProperty(null)}
          >
            <div 
              className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden my-6 border border-slate-200 flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Modal Top Header */}
              <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-[#0E5EC8] text-white text-xs font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {selectedProperty.category === "sale" ? "Freehold Property for Sale" : "Commercial Rental Unit"}
                  </span>
                  <span className="text-xs font-bold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    Ref: {selectedProperty.id}
                  </span>
                  <span className="text-xs font-semibold text-slate-700 bg-white px-2.5 py-1 rounded-md border border-slate-200 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    {selectedProperty.availability}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProperty(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-200/60 transition-colors"
                  aria-label="Close details (ESC)"
                  title="Close (ESC)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-6 pb-24 sm:pb-6">
                
                {/* Title & Price Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <h2 id="property-modal-title" className="text-xl sm:text-2xl font-black text-slate-900">
                      {selectedProperty.name}
                    </h2>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 mt-1">
                      <MapPin className="w-4 h-4 text-[#0E5EC8] shrink-0" />
                      <span>{selectedProperty.address} ({selectedProperty.location})</span>
                    </div>
                  </div>

                  <div className="sm:text-right shrink-0">
                    <div className="text-2xl sm:text-3xl font-black text-[#0E5EC8]">
                      {selectedProperty.priceLabel}
                    </div>
                    {selectedProperty.category === "rent" && selectedProperty.securityDeposit && (
                      <div className="text-xs font-semibold text-slate-500 mt-0.5">
                        Security Deposit: ${selectedProperty.securityDeposit.toLocaleString()}
                      </div>
                    )}
                    {selectedProperty.category === "sale" && (
                      <div className="text-xs font-semibold text-slate-500 mt-0.5">
                        ${Math.round(selectedProperty.price / selectedProperty.area)} / sq ft • Freehold
                      </div>
                    )}
                  </div>
                </div>

                {/* Gallery Viewer with Crossfade */}
                <div className="space-y-2">
                  <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                    {selectedProperty.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${selectedProperty.name} view ${idx + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                          activeImageIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                      />
                    ))}

                    {selectedProperty.images.length > 1 && (
                      <>
                        <button
                          onClick={() => setActiveImageIndex((prev) => (prev === 0 ? selectedProperty.images.length - 1 : prev - 1))}
                          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors active:scale-95"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setActiveImageIndex((prev) => (prev === selectedProperty.images.length - 1 ? 0 : prev + 1))}
                          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors active:scale-95"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </>
                    )}

                    <div className="absolute bottom-3 right-3 z-20 bg-black/60 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-md font-medium">
                      {activeImageIndex + 1} / {selectedProperty.images.length}
                    </div>
                  </div>

                  {/* Thumbnail Strip */}
                  {selectedProperty.images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-1">
                      {selectedProperty.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImageIndex(i)}
                          className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                            activeImageIndex === i ? 'border-[#0E5EC8] ring-2 ring-blue-200' : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt="thumb" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Property Description
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedProperty.description}
                  </p>
                </div>

                {/* Specifications Clean Table */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Specifications Table
                  </h4>
                  <div className="overflow-hidden rounded-xl border border-slate-200 text-xs">
                    <table className="w-full text-left border-collapse">
                      <tbody>
                        <tr className="bg-slate-50/70 border-b border-slate-100">
                          <td className="p-3 font-semibold text-slate-500 w-1/3">Total Floor Area</td>
                          <td className="p-3 font-extrabold text-slate-900">{selectedProperty.area.toLocaleString()} sq ft</td>
                        </tr>
                        <tr className="bg-white border-b border-slate-100">
                          <td className="p-3 font-semibold text-slate-500">Floor Level</td>
                          <td className="p-3 font-bold text-slate-900">{selectedProperty.floor}</td>
                        </tr>
                        <tr className="bg-slate-50/70 border-b border-slate-100">
                          <td className="p-3 font-semibold text-slate-500">Storefront Frontage</td>
                          <td className="p-3 font-bold text-slate-900">{selectedProperty.frontage}</td>
                        </tr>
                        <tr className="bg-white border-b border-slate-100">
                          <td className="p-3 font-semibold text-slate-500">Ceiling Height</td>
                          <td className="p-3 font-bold text-slate-900">{selectedProperty.ceilingHeight}</td>
                        </tr>
                        <tr className="bg-slate-50/70 border-b border-slate-100">
                          <td className="p-3 font-semibold text-slate-500">Power Infrastructure</td>
                          <td className="p-3 font-bold text-slate-900">{selectedProperty.powerCapacity}</td>
                        </tr>
                        <tr className="bg-white border-b border-slate-100">
                          <td className="p-3 font-semibold text-slate-500">Additional Charges</td>
                          <td className="p-3 font-bold text-slate-900">{selectedProperty.additionalCharges}</td>
                        </tr>
                        <tr className="bg-slate-50/70">
                          <td className="p-3 font-semibold text-slate-500">Listing Date</td>
                          <td className="p-3 font-bold text-slate-900">{selectedProperty.dateAdded}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Amenities as Pill Chips */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Amenities & Facilities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProperty.amenities.map((amenity, idx) => (
                      <span 
                        key={idx} 
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-800 rounded-full text-xs font-semibold border border-slate-200"
                      >
                        <Check className="w-3.5 h-3.5 text-[#0E5EC8]" />
                        <span>{amenity}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Desktop Sticky Footer Actions */}
              <div className="hidden sm:flex p-4 sm:p-5 border-t border-slate-100 bg-slate-50/90 items-center justify-between gap-3">
                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Directly managed by Small Mall Property Management</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => handleWhatsAppEnquiry(selectedProperty)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all active:scale-95"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Inquiry</span>
                  </button>

                  <button
                    onClick={() => {
                      const prop = selectedProperty;
                      setSelectedProperty(null);
                      handleContactForm(prop);
                    }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0E5EC8] hover:bg-[#0b4ca0] text-white font-bold text-xs shadow-md transition-all active:scale-95"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#F9B00C]" />
                    <span>Enquire / Book Visit</span>
                  </button>
                </div>
              </div>

              {/* Mobile Fixed Bottom Action Bar */}
              <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 flex items-center gap-2 shadow-2xl">
                <button
                  onClick={() => handleWhatsAppEnquiry(selectedProperty)}
                  className="flex-1 py-3 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    const prop = selectedProperty;
                    setSelectedProperty(null);
                    handleContactForm(prop);
                  }}
                  className="flex-1 py-3 px-3 rounded-xl bg-[#0E5EC8] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-[#F9B00C]" />
                  <span>Enquire</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}