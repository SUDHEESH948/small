import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUp, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#0B2545] text-white pt-14 pb-10 border-t border-blue-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand & About Column */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block group" aria-label="Small Mall - Home">
              <div className="bg-white/10 hover:bg-white/15 backdrop-blur-xs p-2 sm:p-2.5 rounded-xl inline-block border border-white/10 transition-colors">
                <img 
                  src="/logo/small-logo-horizontal.png" 
                  alt="Small Mall Logo" 
                  className="h-9 sm:h-11 w-auto object-contain" 
                />
              </div>
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              S mall is your premier destination for shopping, dining, and commercial opportunities in Edakkara. Strategically positioned on the State Highway (Calicut-Ooty / CNG Road) with corner access via Malayora Highway.
            </p>

            <div className="text-xs text-slate-400 space-y-1">
              <div>Main Road Edakkara, Malappuram, Kerala</div>
              <div>State Highway & Malayora Highway Junction</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-[#F9B00C] transition-colors block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F9B00C] transition-colors block">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/leasing" className="hover:text-[#F9B00C] transition-colors block">
                  Leasing
                </Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-[#F9B00C] transition-colors block">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="hover:text-[#F9B00C] transition-colors block">
                  Experiences
                </Link>
              </li>
              <li>
                <Link to="/properties" className="hover:text-[#F9B00C] transition-colors block">
                  Properties for Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* We're Here to Help */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              We're Here to Help
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a 
                  href="https://maps.google.com/?q=S+Mall+Main+Road+Edakkara" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#F9B00C] transition-colors flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#F9B00C]" />
                  <span>Directions & Location</span>
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#F9B00C]" />
                <span>Opening Hours: 10:00 AM – 10:00 PM</span>
              </li>
              <li>
                <a 
                  href="tel:+919447175232" 
                  className="hover:text-[#F9B00C] transition-colors flex items-center gap-1.5 font-semibold text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F9B00C]" />
                  <span>+91 94471 75232</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:smallmalledakkara@gmail.com" 
                  className="hover:text-[#F9B00C] transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#F9B00C]" />
                  <span>smallmalledakkara@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Follow Us
            </h4>
            <div className="flex items-center gap-2 pt-1">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#F9B00C] hover:text-[#1F2937] transition-all flex items-center justify-center text-xs font-bold text-white active:scale-95"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#F9B00C] hover:text-[#1F2937] transition-all flex items-center justify-center text-xs font-bold text-white active:scale-95"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#F9B00C] hover:text-[#1F2937] transition-all flex items-center justify-center text-xs font-bold text-white active:scale-95"
                title="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919447175232"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal with Back to Top Button */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} <strong>S mall</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 bg-white/10 hover:bg-[#F9B00C] hover:text-[#1F2937] text-white px-2.5 py-1 rounded text-xs font-bold transition-all active:scale-95"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

