import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Navigation, 
  Phone, 
  MessageSquare, 
  Clock, 
  MapPin, 
  Car, 
  Film, 
  Sparkles,
  ArrowRight,
  ExternalLink
} from "lucide-react";

export default function HomeContact() {
  const whatsappUrl = `https://wa.me/919447175232?text=${encodeURIComponent(
    "Hello! I am planning a visit to S Mall Edakkara and would like to know more about the facilities, movies, and store hours."
  )}`;

  return (
    <section id="plan-your-visit" className="py-20 sm:py-28 bg-[#0B2545] text-white relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0E5EC8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F9B00C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card Wrapper */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-[#F9B00C]/20 border border-[#F9B00C]/40 text-[#F9B00C] px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Visit S Mall Edakkara</span>
              </div>

              {/* Exact Requested Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Your Next Experience <br />
                <span className="text-[#F9B00C]">Starts Here.</span>
              </h2>

              {/* Exact Requested Supporting Text */}
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Plan your visit to S Mall for shopping, entertainment, dining, and more.
              </p>

              {/* Key Visitor Highlights Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <Clock className="w-5 h-5 text-[#F9B00C] mb-2" />
                  <div className="text-xs text-slate-400 font-medium">Opening Hours</div>
                  <div className="text-sm font-bold text-white mt-0.5">10:00 AM – 10:00 PM</div>
                  <div className="text-[11px] text-slate-400">Open 7 Days a Week</div>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <Car className="w-5 h-5 text-[#F9B00C] mb-2" />
                  <div className="text-xs text-slate-400 font-medium">Visitor Parking</div>
                  <div className="text-sm font-bold text-white mt-0.5">200+ Spaces</div>
                  <div className="text-[11px] text-slate-400">Surface & Basement</div>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <Film className="w-5 h-5 text-[#F9B00C] mb-2" />
                  <div className="text-xs text-slate-400 font-medium">Entertainment</div>
                  <div className="text-sm font-bold text-white mt-0.5">Magic Frames</div>
                  <div className="text-[11px] text-slate-400">Multiplex Cinemas</div>
                </div>
              </div>

              {/* Address indicator */}
              <div className="flex items-center gap-2 text-xs text-slate-300 pt-1">
                <MapPin className="w-4 h-4 text-[#F9B00C] shrink-0" />
                <span>Main Road Edakkara, Malappuram District, Kerala — 679331</span>
              </div>

            </div>

            {/* Right Action Card */}
            <div className="lg:col-span-5 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="space-y-1.5">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#0E5EC8] block">
                  Visitor Assistance & Concierge
                </span>
                <h3 className="text-2xl font-black text-slate-950 tracking-tight">
                  Ready to Visit S Mall?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-normal">
                  Reach out directly, get instant driving directions, or chat with our team on WhatsApp.
                </p>
              </div>

              {/* The 3 Requested Buttons */}
              <div className="space-y-3 pt-1">
                
                {/* Button 1: Get Directions */}
                <a
                  href="https://maps.google.com/?q=S+Mall+Main+Road+Edakkara+CNG+Road"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#0E5EC8] hover:bg-blue-700 text-white font-black py-4 px-5 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95 group"
                >
                  <Navigation className="w-4 h-4 text-[#F9B00C]" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80 transition-transform group-hover:translate-x-0.5" />
                </a>

                {/* Button 2: WhatsApp Us */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-green-900/10 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Us (+91 94471 75232)</span>
                </a>

                {/* Button 3: Contact Us */}
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm border border-slate-200 transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4 text-[#0E5EC8]" />
                  <span>Contact Us</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 ml-1" />
                </Link>

              </div>

              {/* Quick direct phone and email footer */}
              <div className="pt-2 border-t border-slate-100 text-center space-y-1">
                <a
                  href="tel:+919447175232"
                  className="text-xs font-bold text-slate-700 hover:text-[#0E5EC8] transition-colors block"
                >
                  Direct Call: +91 94471 75232
                </a>
                <span className="text-[11px] text-slate-400 block">
                  Edakkara, Kerala · Open Today Until 10:00 PM
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
