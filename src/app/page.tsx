"use client";
import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/SkillsRef";
import HeroCursor from "./components/HeroCursor";
import SectionOne from "./components/SectionOne";
import DetailsSection from "./components/DetailsSection";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full fixed h-screen -z-10">
        <Hero />
      </div>
      <HeroCursor />
      <div className="w-screen lg:grid grid-cols-2 px-10 lg:px-30  h-[100vh] bg-[#0f172a]">
        {/* bg-[#0c0a09] */}
        {/* <Skills/> */}
        <SectionOne/>
        <DetailsSection/>
      </div>
    </div>
  );
};

export default page;
