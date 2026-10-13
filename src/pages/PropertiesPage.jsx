import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PropertySection from '../components/PropertySection';
import { Sparkles } from 'lucide-react';

export default function PropertiesPage() {
  const [searchParams] = useSearchParams();
  const branchParam = searchParams.get('branch');
  const typeParam = searchParams.get('type') || 'all';

  return (
    <div className="min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        {/* Page Banner Header */}
        <div className="bg-gradient-to-r from-[#0E5EC8] to-blue-800 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black bg-[#F9B00C] text-[#1F2937] shadow-sm uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#1F2937]" />
              <span>Capital Commercial Investments</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Commercial Properties for Sale
            </h1>
            <div className="w-12 h-1 bg-[#F9B00C] rounded-full"></div>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal">
              Secure permanent commercial real estate in high-density shopping complexes. Freehold titles, atrium retail shops, flagship showrooms, and corporate suites with high rental yields.
            </p>
          </div>

          {/* Decorative accents */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute bottom-0 right-20 w-32 h-32 rounded-full bg-[#F9B00C]/20 pointer-events-none" />
        </div>
      </div>

      {/* Property Section with Sale-only category and all filters enabled */}
      <PropertySection
        title="Available Properties for Purchase"
        subtitle="Explore fully verified commercial ownership opportunities with transparent pricing and title deeds"
        category="sale"
        propertyTypeFilter={typeParam}
        branchId={branchParam}
        showFilters={true}
      />
    </div>
  );
}
