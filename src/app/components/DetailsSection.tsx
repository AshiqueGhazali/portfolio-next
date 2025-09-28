import React from "react";
import About from "./About";
import Experiance from "./Experiance";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

const DetailsSection = () => {
  return (
    <div className="min-h-[100vh] lg:px-6  transition-all duration-300 scrollbar-hide">
      <About />
      <Experiance />
      <Skills />
      <Projects />
      <Footer/>
    </div>
  );
};

export default DetailsSection;
