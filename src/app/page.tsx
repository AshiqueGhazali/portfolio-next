"use client";
import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import HeroCursor from "./components/HeroCursor";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full fixed h-screen -z-10">
      <Hero />
      </div>
      <HeroCursor/>
      <div className="w-screen bg-[#0c0a09]">
      <Skills/>
      </div>
    </div>
  );
};

export default page;
