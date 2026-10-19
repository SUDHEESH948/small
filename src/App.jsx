
import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import RentalsPage from './pages/RentalsPage';
import BranchesPage from './pages/BranchesPage';
import ContactPage from './pages/ContactPage';
import ExperiencesPage from './pages/ExperiencesPage';

import FloatingWhatsApp from './components/FloatingWhatsApp';

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname, search]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="relative flex min-h-screen min-w-[320px] max-w-full flex-col bg-[#F5F7FA] text-[#1F2937] selection:bg-[#F9B00C]/30 selection:text-[#0E5EC8] overflow-x-hidden">

        {/* Common Navbar */}
        <Navbar />

        {/* Page Routes */}
        <main className="w-full flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="/leasing" element={<RentalsPage />} />
            <Route path="/rentals" element={<RentalsPage />} />
            <Route path="/rooms" element={<RentalsPage />} />

            <Route path="/explore" element={<BranchesPage />} />
            <Route path="/branches" element={<BranchesPage />} />

            <Route path="/experiences" element={<ExperiencesPage />} />

            <Route path="/properties" element={<PropertiesPage />} />

            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Common Footer */}
        <Footer />

        {/* Floating WhatsApp on Every Page */}
        <FloatingWhatsApp />

      </div>
    </BrowserRouter>
  );
}