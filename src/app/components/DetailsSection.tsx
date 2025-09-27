import React from "react";
import About from "./About";

const DetailsSection = () => {
  return (
    <div className="max-h-[100vh] lg:px-10 overflow-auto transition-all duration-300 scrollbar-hide">
      <div className="w-full h-10 lg:h-20" />
      <About />
    </div>
  );
};

export default DetailsSection;
