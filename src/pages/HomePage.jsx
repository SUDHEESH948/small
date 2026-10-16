import React from "react";
import HomeHero from "../components/home/HomeHero";
import HomeAdvantages from "../components/home/HomeAdvantages";
import HomeBrandDirectory from "../components/home/HomeBrandDirectory";
import HomeExperiences from "../components/home/HomeExperiences";
import HomeFacilities from "../components/home/HomeFacilities";
import HomeBranches from "../components/home/HomeBranches";
import HomeContact from "../components/home/HomeContact";

export default function HomePage() {
  return (
    <main className="w-full space-y-0 overflow-hidden bg-[#F5F7FA]">
      {/* 1. Hero with Cinematic Slides & Quick Metrics Bar (Forum Kochi Model) */}
      <HomeHero />

      {/* 2. Experience Pillars: Shop, Style, Dine, Play (Forum Kochi Model) */}
      <HomeAdvantages />

      {/* 3. Featured Brands & Outlets Explorer (Forum Kochi Store Finder Model) */}
      <HomeBrandDirectory />

      {/* 4. Entertainment & Cinema Spotlight (Magic Frames Cinemas & Dining) */}
      <HomeExperiences />

      {/* 5. World-Class Facilities & Amenities (Parking, Escalators, Security) */}
      <HomeFacilities />

      {/* 6. Location & Accessibility (State Highway & Malayora Highway Junction) */}
      <HomeBranches />
    </main>
  );
}
