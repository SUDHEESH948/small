import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  Building2, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  ChevronLeft,
  X,
  MessageSquare
} from 'lucide-react';
import { branches } from '../data/branches';
import { properties } from '../data/properties';

export default function BranchSection({
  title = "Our Mall Branches",
  subtitle = "Strategically located commercial destinations across high-growth transit and retail corridors",
  initialBranchId = null,
  featuredOnly = false,
  showAllLink = null
}) {
  const navigate = useNavigate();
  const [selectedBranchId, setSelectedBranchId] = useState(initialBranchId);
  const [activePropertyModal, setActivePropertyModal] = useState(null);
  const [branchFilterCategory, setBranchFilterCategory] = useState("all");

  const displayedBranches = useMemo(() => {
    if (featuredOnly) {
      return branches.slice(0, 3);
    }
    return branches;
  }, [featuredOnly]);

  const activeBranch = useMemo(() => {
    if (!selectedBranchId) return null;
    return branches.find(b => b.id === selectedBranchId) || null;
  }, [selectedBranchId]);

  const branchProperties = useMemo(() => {
    if (!selectedBranchId) return [];
    let list = properties.filter(p => p.branchId === selectedBranchId);
    if (branchFilterCategory !== "all") {
      list = list.filter(p => p.category === branchFilterCategory);
    }
    return list;
  }, [selectedBranchId, branchFilterCategory]);

  const getBranchStats = (bId) => {
    const branchUnits = properties.filter(p => p.branchId === bId);
    const available = branchUnits.filter(p => p.availability === "Available");
    const forSale = branchUnits.filter(p => p.category === "sale");
    const forRent = branchUnits.filter(p => p.category === "rent");
    return {
      total: branchUnits.length,
      available: available.length,
      forSale: forSale.length,
      forRent: forRent.length
    };
  };

  const handleWhatsAppBranch = (branch) => {
    const text = encodeURIComponent(
      `Hello ${branch.name} Leasing Desk, I would like to schedule a branch site tour and enquire about available commercial shops.`
    );
    window.open(`https://wa.me/${branch.whatsapp.replace(/\D/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section className="py-8 lg:py-14 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Short Yellow Bar Accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#0E5EC8] border border-blue-200 mb-2">
              <Building2 className="w-3.5 h-3.5 text-[#0E5EC8]" />
              <span>Small Mall Network</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1F2937] tracking-tight">
              {title}
            </h2>
            {/* Short yellow accent bar under heading */}
            <div className="w-12 h-1 bg-[#F9B00C] rounded-full mt-2"></div>
            <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-2xl">
              {subtitle}
            </p>
          </div>

          {showAllLink && (
            <button
              onClick={() => navigate(showAllLink)}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0E5EC8] hover:text-blue-800 transition-colors group self-start md:self-end"
            >
              <span>Explore All Branches</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* If a Branch is active / selected: Detailed Branch Explorer View */}
        {activeBranch ? (
          <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Top Return Banner */}
            <div className="p-4 sm:p-5 bg-[#0E5EC8] text-white flex items-center justify-between">
              <button
                onClick={() => setSelectedBranchId(null)}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-[#F9B00C] transition-colors active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back to All Mall Branches</span>
              </button>

              <span className="text-xs bg-[#F9B00C] text-[#1F2937] px-3 py-1 rounded-full font-black uppercase tracking-wider">
                Branch Explorer
              </span>
            </div>

            {/* Branch Hero & Specs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-[#E2E8F0]">
              
              {/* Branch Cover Image with dark bottom gradient overlay */}
              <div className="lg:col-span-6 relative aspect-16/10 lg:aspect-auto h-full min-h-[320px] overflow-hidden bg-slate-900">
                <img
                  src={activeBranch.coverImage}
                  alt={activeBranch.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs font-bold text-[#F9B00C] uppercase tracking-wider block">
                    {activeBranch.city}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black">{activeBranch.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">{activeBranch.tagline}</p>
                </div>
              </div>

              {/* Branch Details Column */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      About this Branch
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {activeBranch.description}
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                      Key Complex Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {activeBranch.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0E5EC8] mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact & Map Card */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-slate-700">
                      <MapPin className="w-4 h-4 text-[#0E5EC8] shrink-0" />
                      <span className="font-semibold">{activeBranch.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <Clock className="w-4 h-4 text-[#0E5EC8] shrink-0" />
                      <span>{activeBranch.hours}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 pt-1">
                      <a 
                        href={`tel:${activeBranch.phone.replace(/\D/g, '')}`} 
                        className="flex items-center gap-1.5 font-bold text-[#0E5EC8] hover:underline"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{activeBranch.phone}</span>
                      </a>
                      <a 
                        href={activeBranch.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-600 hover:text-[#0E5EC8] font-bold"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#F9B00C]" />
                        <span>Open Directions / Maps</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                  <button
                    onClick={() => handleWhatsAppBranch(activeBranch)}
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Branch Desk</span>
                  </button>

                  <button
                    onClick={() => navigate(`/contact?branch=${activeBranch.id}`)}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#0E5EC8] hover:bg-[#0b4ca0] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <Sparkles className="w-4 h-4 text-[#F9B00C]" />
                    <span>Schedule Site Visit</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Associated Properties Inside this Branch */}
            <div className="p-6 sm:p-8 bg-slate-50/50">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900">
                    Properties & Units Inside {activeBranch.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    Calculated directly from local property records
                  </p>
                </div>

                {/* Category Filter */}
                <div className="flex items-center p-1 bg-white rounded-xl border border-slate-200">
                  <button
                    onClick={() => setBranchFilterCategory("all")}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                      branchFilterCategory === "all" ? 'bg-[#0E5EC8] text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    All Units
                  </button>
                  <button
                    onClick={() => setBranchFilterCategory("sale")}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                      branchFilterCategory === "sale" ? 'bg-[#0E5EC8] text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    For Sale
                  </button>
                  <button
                    onClick={() => setBranchFilterCategory("rent")}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                      branchFilterCategory === "rent" ? 'bg-[#0E5EC8] text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    For Rent
                  </button>
                </div>
              </div>

              {branchProperties.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {branchProperties.map((p) => (
                    <div 
                      key={p.id}
                      className="bg-white rounded-2xl p-4 border border-[#E2E8F0] hover:border-[#0E5EC8] hover:shadow-md transition-all flex flex-col justify-between space-y-3"
                    >
                      <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100">
                        <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                        <span className="absolute top-2 left-2 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-[#0E5EC8] text-white">
                          {p.category === 'sale' ? 'For Sale' : 'For Rent'}
                        </span>
                        <span className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded">
                          {p.propertyType}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-base font-black text-[#0E5EC8]">{p.priceLabel}</span>
                          <span className="text-xs font-bold text-slate-700">{p.area} sq ft</span>
                        </div>
                        <h5 className="text-sm font-bold text-slate-900 line-clamp-1">{p.name}</h5>
                        <p className="text-xs text-slate-500 line-clamp-1">{p.location}</p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setActivePropertyModal(p)}
                          className="py-2 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-[#0E5EC8] rounded-lg transition-colors border border-slate-200 active:scale-95"
                        >
                          Specs & Info
                        </button>
                        <button
                          onClick={() => navigate(`/contact?propertyId=${p.id}&category=${p.category}`)}
                          className="py-2 text-xs font-bold text-white bg-[#0E5EC8] hover:bg-[#0b4ca0] rounded-lg transition-colors active:scale-95"
                        >
                          Enquire
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center bg-white rounded-2xl border border-dashed border-slate-200 text-xs text-slate-500">
                  No units currently listed in this category at this branch.
                </div>
              )}

            </div>

          </div>
        ) : (
          /* All Branches Grid with cover image, dark gradient overlay, and yellow available units pill */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {displayedBranches.map((branch) => {
              const stats = getBranchStats(branch.id);

              return (
                <div
                  key={branch.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] hover:border-[#0E5EC8]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col will-change-transform"
                >
                  {/* Branch Cover with dark bottom gradient */}
                  <div className="relative aspect-16/9 sm:aspect-21/9 overflow-hidden bg-slate-900">
                    <img
                      src={branch.coverImage}
                      alt={branch.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

                    {/* Yellow pill showing available units calculated from static data */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#F9B00C] text-[#1F2937] text-xs font-black px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#1F2937]" />
                        <span>{stats.available} Available Units</span>
                      </span>
                    </div>

                    {/* Branch Name & Tagline overlaid on dark bottom gradient */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[11px] font-bold text-[#F9B00C] uppercase tracking-wider block">
                        {branch.city}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-blue-100 transition-colors">
                        {branch.name}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                        {branch.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Branch Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-4">
                      
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                        {branch.description}
                      </p>

                      {/* Units Breakdown */}
                      <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center text-xs">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Units</span>
                          <span className="text-sm font-extrabold text-slate-900">{stats.total}</span>
                        </div>
                        <div className="border-x border-slate-200">
                          <span className="text-[10px] uppercase font-bold text-[#0E5EC8] block">For Sale</span>
                          <span className="text-sm font-extrabold text-[#0E5EC8]">{stats.forSale}</span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-700 block">For Rent</span>
                          <span className="text-sm font-extrabold text-slate-900">{stats.forRent}</span>
                        </div>
                      </div>

                      {/* Address & Hours */}
                      <div className="space-y-2 text-xs text-slate-600">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-[#0E5EC8] mt-0.5 shrink-0" />
                          <span className="font-medium line-clamp-1">{branch.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#0E5EC8] shrink-0" />
                          <span>{branch.hours}</span>
                        </div>
                      </div>

                    </div>

                    {/* Bottom Actions with button lift on hover */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                      <a
                        href={branch.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-slate-500 hover:text-[#0E5EC8] inline-flex items-center gap-1 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Directions</span>
                      </a>

                      <button
                        onClick={() => setSelectedBranchId(branch.id)}
                        className="inline-flex items-center gap-2 bg-[#0E5EC8] hover:bg-[#0b4ca0] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all group-hover:translate-x-0.5 active:scale-95"
                      >
                        <span>Explore Branch</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#F9B00C]" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Small in-branch Property Details Modal if clicked inside branch explorer */}
        {activePropertyModal && (
          <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 border border-slate-200 shadow-2xl animate-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-slate-400">Ref: {activePropertyModal.id}</span>
                <button onClick={() => setActivePropertyModal(null)} className="p-1 rounded text-slate-400 hover:text-slate-800">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div>
                <span className="text-xs font-black text-[#0E5EC8] uppercase">{activePropertyModal.category === 'sale' ? 'For Sale' : 'For Rent'}</span>
                <h3 className="text-lg font-black text-slate-900">{activePropertyModal.name}</h3>
                <p className="text-xs text-slate-500">{activePropertyModal.location}</p>
                <div className="text-2xl font-black text-[#0E5EC8] mt-2">{activePropertyModal.priceLabel}</div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">{activePropertyModal.description}</p>

              <div className="pt-3 border-t border-slate-100 flex gap-2">
                <button
                  onClick={() => {
                    const p = activePropertyModal;
                    setActivePropertyModal(null);
                    navigate(`/contact?propertyId=${p.id}&category=${p.category}`);
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#0E5EC8] text-white text-xs font-bold shadow-md active:scale-95"
                >
                  Proceed to Enquiry Form
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
