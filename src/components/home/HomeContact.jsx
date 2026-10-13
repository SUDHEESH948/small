import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

export default function HomeContact() {
  return (
    <section className="py-16 sm:py-20 bg-[#0B2545] text-white relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0E5EC8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F9B00C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#F9B00C]/20 border border-[#F9B00C]/30 text-[#F9B00C] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premier Commercial Opportunities</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Ready to elevate your <br />
                <span className="text-[#F9B00C]">brand at S mall?</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Strategically positioned at the corner of State Highway (Calicut-Ooty / CNG Road) and Malayora Highway in Edakkara. Reserve commercial units, anchor spaces, or retail shops with flexible lease terms.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#F9B00C]" />
                  <span>High Footfall Location</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#F9B00C]" />
                  <span>Ample Dedicated Parking</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#F9B00C]" />
                  <span>Prime Dual Highway Frontage</span>
                </div>
              </div>
            </div>

            {/* Right Action Card */}
            <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl space-y-5">
              <div>
                <h3 className="text-xl font-black text-slate-950">
                  Speak with Mall Management
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Enquire about leasing, purchase opportunities, or site visits.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="https://wa.me/919447175232?text=Hello%2C%20I%20am%20interested%20in%20leasing%2Fbuying%20space%20at%20S%20mall%20Edakkara."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-emerald-900/20 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 94471 75232)</span>
                </a>

                <a
                  href="tel:+919447175232"
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all border border-slate-200"
                >
                  <Phone className="w-4 h-4 text-[#0E5EC8]" />
                  <span>Call Us Directly</span>
                </a>

                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 bg-[#0E5EC8] hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all"
                >
                  <span>Submit Online Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[11px] text-slate-400">
                  Main Road Edakkara · Open Daily 10 AM – 10 PM
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

