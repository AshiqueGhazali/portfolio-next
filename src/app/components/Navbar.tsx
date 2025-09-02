"use client";
import React from "react";
import { Sacramento } from "next/font/google";

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    // <div className="w-full h-[60px] fixed top-0 bg-transparent lg:bg-[#0c0a09] px-10 lg:px-20 flex justify-between items-center z-50">
    <div className="w-full h-[60px] fixed top-0 bg-transperant lg:bg-[#0c0a09]/50 px-10 lg:px-20 flex justify-between items-center z-50 backdrop-blur-md lg:border-b border-white/10">
      <p className={`${sacramento.className} text-3xl pointer-events-none text-white italic`}>Ashique</p>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center h-full gap-8">
        {navLinks.map((link, index) => (
          <div
            key={index}
            className="flex items-center relative h-full group transition-all duration-300"
          >
            <a
              href={link.href}
              className="text-gray-400 group-hover:text-white transition-colors"
            >
              {link.name}
            </a>
            <div className="w-full h-0 group-hover:h-[5px] bg-white absolute bottom-0 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>        
      </div> */
}
