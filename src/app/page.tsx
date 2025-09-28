"use client";
import React from "react";
import Hero from "./components/Hero";
import HeroCursor from "./components/HeroCursor";
import SectionOne from "./components/SectionOne";
import DetailsSection from "./components/DetailsSection";
import SocialLinks from "./components/ui/SocialLinks";

const page = () => {
  
  return (
    <div className="w-full">
      <div className="w-full fixed h-screen -z-10">
        <Hero />
      </div>
      <HeroCursor />
      <div className="absolute flex w-full justify-center bottom-20">
        <SocialLinks />
      </div>
      <SectionOne />

      <div className="w-screen lg:grid grid-cols-2 px-10 lg:px-30   bg-[#0f172a]">
        <div className="hidden lg:block"></div>
        <DetailsSection />
      </div>
    </div>
  );
};

export default page;
