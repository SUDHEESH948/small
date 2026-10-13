import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import RentalsPage from './pages/RentalsPage';
import BranchesPage from './pages/BranchesPage';
import ContactPage from './pages/ContactPage';
import ExperiencesPage from './pages/ExperiencesPage';
import { MessageSquare } from 'lucide-react';

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname, search]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F5F7FA] text-[#1F2937] selection:bg-[#F9B00C]/30 selection:text-[#0E5EC8] relative">
        
        {/* Main Navbar matching S mall in screenshot */}
        <Navbar />

        {/* Dynamic Route Pages matching screenshot */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* 2. CONTACT PAGE */}
            <Route path="/contact" element={<ContactPage />} />
            {/* 3. LEASING PAGE */}
            <Route path="/leasing" element={<RentalsPage />} />
            <Route path="/rentals" element={<RentalsPage />} />
            <Route path="/rooms" element={<RentalsPage />} />
            {/* 4. EXPLORE PAGE */}
            <Route path="/explore" element={<BranchesPage />} />
            <Route path="/branches" element={<BranchesPage />} />
            {/* 5. EXPERIENCES PAGE */}
            <Route path="/experiences" element={<ExperiencesPage />} />
            {/* Properties for Sale */}
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Main Footer matching S mall in screenshot */}
        <Footer />

        {/* Floating WhatsApp Action Button connected directly to S mall Edakkara hotline */}
        <aside aria-label="Quick WhatsApp Connect" className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
          <a
            href="https://wa.me/919447175232?text=Hello%20S%20mall%20Edakkara%20Management%2C%20I%20am%20interested%20in%20commercial%20spaces."
            target="_blank"
            rel="noopener noreferrer"
            className="wa-pulse-init flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-400"
            aria-label="Contact S mall Management on WhatsApp"
            title="Chat with S mall on WhatsApp (+91 94471 75232)"
          >
            <MessageSquare className="w-5 h-5 text-white" />
            <span className="hidden md:inline text-xs font-black tracking-wide pr-1">
              WhatsApp (+91 94471 75232)
            </span>
          </a>
        </aside>

      </div>
    </BrowserRouter>
  );
}
