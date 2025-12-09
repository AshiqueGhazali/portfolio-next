"use client";
import React from "react";
import Ribbons from "./ui/Ribbons";
import SplashCursor from "./ui/SplashCursor";

const HeroCursor: React.FC = () => {

  return (
    <div className="relative h-[100vh] flex items-center justify-center w-screen overflow-hidden ">
      {/* ### Rebbons coursor - disabled for now */}
      {/* <Ribbons
        baseThickness={30}
        colors={["#ffffff"]}
        speedMultiplier={0.5}
        maxAge={500}
        enableFade={false}
        enableShaderEffect={true}
      /> */}

      {/* ######### Simple splash effect cursor */}
      <SplashCursor /> 
    </div>
  );
};

export default HeroCursor;
