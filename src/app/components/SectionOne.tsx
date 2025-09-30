"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SocialLinks from "./ui/SocialLinks";
import { TypingAnimation } from "./ui/TypingAnimation";
import DownloadButton from "./ui/ResumeDownloadButton";

const SectionOne = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experiance", href: "#experiance" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleObserver = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      threshold: 0.4, // section is considered active if 40% is visible
    });

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => {
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="sticky top-0">
      <div className="py-20 absolute h-[100vh]  px-30 hidden lg:flex flex-col justify-between">
        {/* Profile Info */}
        <div className="flex gap-3 flex-col">
          <p className="font-bold text-[40px] text-[#FFFFFF] pointer-events-none">Ashique PK</p>
           <TypingAnimation startOnView={true} className="text-[16px] font-medium">FULL STACK ENGINEER</TypingAnimation>
           {/* <p className="text-[16px] font-medium"></p> */}
          <p className="text-[14px] font-normal text-gray-400">
            I build accessible, pixel-perfect digital <br /> experiences for the
            web.
          </p>
          <DownloadButton />
        </div>

        {/* Nav Links */}
        <div className="flex flex-col gap-3">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <Link
                href={link.href}
                key={index}
                className={`flex gap-3 cursor-pointer transition-all items-center group`}
              >
                <div
                  className={`h-[2px] transition-all duration-500 w-10 
                  ${
                    isActive
                      ? "w-20 bg-white"
                      : "bg-gray-400 group-hover:w-20 group-hover:bg-white"
                  }
                `}
                ></div>
                <p
                  className={`font-semibold uppercase text-[12px] transition-colors 
                  ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  }
                `}
                >
                  {link.name}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Social Links */}
        <SocialLinks />
      </div>
    </div>
  );
};

export default SectionOne;
