import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  Car, 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  AlertCircle,
  ShoppingBag,
  Utensils,
  Gamepad2,
  Store,
  Compass,
  Briefcase
} from 'lucide-react';
import PropertySection from '../components/PropertySection';

export default function RentalsPage() {
  const [searchParams] = useSearchParams();
  const branchParam = searchParams.get('branch');
  const typeParam = searchParams.get('type') || 'all';

  // Leasing Form State
  const [formData, setFormData] = useState({
    businessCategory: 'Retail Shops',
    brandName: '',
    contactPerson: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const opportunities = [
    {
      title: "Supermarket",
      description: "Large and flexible spaces available for anchor grocery & daily essentials.",
      image: "/images/shopping-800.webp",
      icon: ShoppingBag
    },
    {
      title: "Food Court & Dining",
      description: "Ideal for restaurants, quick service cafes and premium F&B brands.",
      image: "/images/dining.webp",
      icon: Utensils
    },
    {
      title: "Gaming & Family Entertainment",
      description: "Create unforgettable leisure and gaming experiences for kids and youth.",
      image: "/images/entertainment.webp",
      icon: Gamepad2
    },
    {
      title: "Retail Shops",
      description: "Prime retail units of various sizes for fashion, electronics and lifestyle.",
      image: "/images/shopping.webp",
      icon: Store
    },
    {
      title: "Pop-up Kiosks",
      description: "Short-term, seasonal and high-turnover commuter opportunities.",
      image: "/images/experience-640.webp",
      icon: Compass
    },
    {
      title: "Other Businesses",
      description: "Well-suited for clinics, salons, consultancy offices, and service studios.",
      image: "/images/about-800.webp",
      icon: Briefcase
    }
  ];

  const handleLeasingSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!formData.contactPerson.trim()) errs.contactPerson = 'Contact person name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.email.trim()) errs.email = 'Email address is required';

    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      const text = encodeURIComponent(
        `*S MALL LEASING ENQUIRY*\nBrand: ${formData.brandName || 'N/A'}\nCategory: ${formData.businessCategory}\nContact: ${formData.contactPerson}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nRequirements: ${formData.message || 'Standard lease request'}`
      );
      window.open(`https://wa.me/919447175232?text=${text}`, '_blank');
      setSubmitted(true);
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById('enquire-space-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#F5F7FA]">
      
      {/* 1. Hero Section matching screenshot: "Grow together at S mall." */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/heroimage.png"
            alt="S mall Concourse"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
          <div className="max-w-2xl space-y-5">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Grow together <br />
              <span className="text-[#F9B00C] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">at S mall.</span>
            </h1>
            <p className="text-base sm:text-lg text-white font-medium max-w-lg leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              Premium retail and entertainment spaces for forward-looking businesses.
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 bg-[#F9B00C] hover:bg-[#e5a007] text-[#1F2937] px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all"
              >
                <span>ENQUIRE ABOUT SPACE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "Why choose S mall?" Section matching screenshot with 4 Pillars */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Why choose <span className="text-[#0E5EC8]">S mall?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            
            {/* 1. Prime location */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2.5">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#0E5EC8] flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Prime location</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                High visibility and easy access on State Highway & Malayora Highway.
              </p>
            </div>

            {/* 2. Large catchment */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2.5">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#0E5EC8] flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Large catchment</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Families, professionals, daily commuters and interstate travelers.
              </p>
            </div>

            {/* 3. Ample parking */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2.5">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#0E5EC8] flex items-center justify-center mx-auto mb-3">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Ample parking</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Spacious and well-organised surface & basement bays.
              </p>
            </div>

            {/* 4. Premium ambience */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2.5">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#0E5EC8] flex items-center justify-center mx-auto mb-3">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Premium ambience</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Modern, climate-regulated and impeccably well-maintained complex.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. "Available Opportunities" Grid matching screenshot */}
      <section className="py-14 sm:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Available <span className="text-[#0E5EC8]">Opportunities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#0E5EC8]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0E5EC8] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={scrollToForm}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E5EC8] group-hover:text-blue-800 transition-colors"
                    >
                      <span>Enquire space</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Banner CTA: "Let's build something great together." matching screenshot */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpeg"
            alt="S mall storefronts"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center bg-slate-950/75 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/15 shadow-2xl space-y-5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Let's Build Something <br />
            <span className="text-[#F9B00C]">Great Together.</span>
          </h2>
          <div>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-[#F9B00C] hover:bg-[#e5a007] text-[#1F2937] px-7 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg active:scale-95 transition-all"
            >
              <span>ENQUIRE NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. "Enquire About Space" Form Section matching screenshot */}
      <section id="enquire-space-form" className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Enquire About <span className="text-[#0E5EC8]">Space</span>
                </h2>
              </div>

              <form onSubmit={handleLeasingSubmit} className="space-y-4" noValidate>
                
                {/* Business Category | Company / Brand Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Business Category
                    </label>
                    <select
                      value={formData.businessCategory}
                      onChange={(e) => setFormData({ ...formData, businessCategory: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium focus:ring-2 focus:ring-[#0E5EC8] focus:bg-white"
                    >
                      <option value="Supermarket">Supermarket</option>
                      <option value="Food Court & Dining">Food Court & Dining</option>
                      <option value="Gaming & Entertainment">Gaming & Entertainment</option>
                      <option value="Retail Shops">Retail Shops</option>
                      <option value="Pop-up Kiosks">Pop-up Kiosks</option>
                      <option value="Corporate Office">Corporate Office</option>
                      <option value="Other Businesses">Other Businesses</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      placeholder="e.g. My Brand"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:ring-2 focus:ring-[#0E5EC8] focus:bg-white"
                    />
                  </div>
                </div>

                {/* Contact Person | Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Contact Person <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      placeholder="e.g. Shaji Kumar"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:ring-2 focus:ring-[#0E5EC8] ${
                        errors.contactPerson ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 bg-slate-50 focus:bg-white'
                      }`}
                    />
                    {errors.contactPerson && (
                      <span className="text-xs text-rose-500 mt-1 block">{errors.contactPerson}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 94471 75232"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:ring-2 focus:ring-[#0E5EC8] ${
                        errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 bg-slate-50 focus:bg-white'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-xs text-rose-500 mt-1 block">{errors.phone}</span>
                    )}
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. business@brand.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:ring-2 focus:ring-[#0E5EC8] ${
                      errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 bg-slate-50 focus:bg-white'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-500 mt-1 block">{errors.email}</span>
                  )}
                </div>

                {/* Message / Requirements */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Message / Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify target area (sq ft), preferred floor, or electrical requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:ring-2 focus:ring-[#0E5EC8] focus:bg-white"
                  />
                </div>

                {/* Yellow Submit Button matching screenshot */}
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#F9B00C] hover:bg-[#e5a007] text-[#1F2937] px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg active:scale-95 transition-all"
                  >
                    <span>SUBMIT ENQUIRY</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {submitted && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Your leasing enquiry has been prepared. WhatsApp dispatch launched!</span>
                  </div>
                )}

              </form>
            </div>

            {/* Right Column: "Your brand belongs here." Vertical Card matching screenshot */}
            <div className="lg:col-span-5 relative min-h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="/images/about.webp"
                alt="Brand Storefront"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-3xl font-black leading-tight text-white">
                  Your brand <br />
                  <span className="text-[#F9B00C]">belongs here.</span>
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Join premier brands thriving in S mall's high-traffic commercial retail environment.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Live Verified Rental Listings from Data (PropertySection) */}
      <div className="border-t border-slate-200 bg-[#F5F7FA]">
        <PropertySection
          title="Available Rental Units at S mall Edakkara"
          subtitle="Explore turnkey retail shops, food units, private suites, and storage spaces with transparent monthly rents and security deposits."
          category="rent"
          propertyTypeFilter={typeParam}
          branchId={branchParam}
          showFilters={true}
        />
      </div>

    </div>
  );
}
