"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experiance", href: "#experiance" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

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
      // threshold: 0.4,
      threshold: 0.1,
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
    <>
      {activeSection && (
        <div className="w-full h-[60px] lg:hidden fixed top-0 bg-transperant px-10 lg:px-20 flex justify-between items-center z-50 backdrop-blur-md  border-white/10">
          <p
            className={`text-[16px] pointer-events-none text-white capitalize italic`}
          >
            {activeSection}
          </p>
        </div>
      )}
    </>
  );
};

export default Navbar;
