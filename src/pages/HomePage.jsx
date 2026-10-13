
import React from "react";
import HomeHero from "../components/home/HomeHero";
import HomeAdvantages from "../components/home/HomeAdvantages";
import HomeBranches from "../components/home/HomeBranches";
import HomePropertySections from "../components/home/HomePropertySections";

export default function HomePage() {
  return (
    <main className="w-full space-y-0 overflow-hidden">
      <HomeHero />
      <HomeAdvantages />
      <HomeBranches />
      <HomePropertySections />
    </main>
  );
}