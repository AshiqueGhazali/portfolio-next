// import Link from "next/link";
// import React from "react";
// import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";

// const SectionOne = () => {
//   const navLinks = [
//     { name: "About", href: "#about" },
//     { name: "Experiance", href: "#experiance" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//   ];

//   const linkClass = `hover:text-[#FFFFFF] cursor-pointer`;
//   return (
//     <div className="py-20 hidden lg:flex flex-col justify-between">
//       <div className="flex gap-3 flex-col">
//         <p className="font-bold text-[40px] text-[#FFFFFF]">Ashique Ghazali</p>
//         <p className="text-[16px] font-medium">FULL STACK ENGINEER</p>
//         <p className="text-[14px] font-normal text-gray-400">
//           I build accessible, pixel-perfect digital <br /> experiences for the
//           web.
//         </p>
//       </div>
//       <div className="flex flex-col gap-3">
//         {navLinks.map((link, index) => (
//           <Link
//             href={link.href}
//             key={index}
//             className={`flex gap-3 cursor-pointer transition-all items-center group`}
//           >
//             <div
//               className={`bg-gray-400 h-[2px] group-hover:w-20 transition-all duration-500 group-hover:bg-[#FFFFFF] w-10`}
//             ></div>
//             <p className="font-semibold uppercase text-[10px] text-gray-400 group-hover:text-[#FFFFFF]">
//               {link.name}
//             </p>
//           </Link>
//         ))}
//       </div>
//       <div className="flex gap-4 text-[22px] text-gray-400 items-center">
//         <Link href={"#"} target="_blank" className={`${linkClass}`}>
//           <FaGithub />
//         </Link>
//         <Link href={"#"} target="_blank" className={`${linkClass}`}>
//           <FaLinkedin />
//         </Link>
//         <Link href={"#"} target="_blank" className={`${linkClass}`}>
//           <FaInstagram />
//         </Link>
//         <Link href={"#"} target="_blank" className={`${linkClass}`}>
//           <SiLeetcode />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default SectionOne;

"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SectionOne = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experiance", href: "#experiance" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleObserver = (entries:any) => {
      entries.forEach((entry:any) => {
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
    <div className="py-20 hidden lg:flex flex-col justify-between">
      {/* Profile Info */}
      <div className="flex gap-3 flex-col">
        <p className="font-bold text-[40px] text-[#FFFFFF]">Ashique Ghazali</p>
        <p className="text-[16px] font-medium">FULL STACK ENGINEER</p>
        <p className="text-[14px] font-normal text-gray-400">
          I build accessible, pixel-perfect digital <br /> experiences for the web.
        </p>
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
                  ${isActive ? "w-20 bg-white" : "bg-gray-400 group-hover:w-20 group-hover:bg-white"}
                `}
              ></div>
              <p
                className={`font-semibold uppercase text-[10px] transition-colors 
                  ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}
                `}
              >
                {link.name}
              </p>
            </Link>
          );
        })}
      </div>

      {/* Social Links */}
      <div className="flex gap-4 text-[22px] text-gray-400 items-center">
        <Link href={"#"} target="_blank" className="hover:text-white">
          <FaGithub />
        </Link>
        <Link href={"#"} target="_blank" className="hover:text-white">
          <FaLinkedin />
        </Link>
        <Link href={"#"} target="_blank" className="hover:text-white">
          <FaInstagram />
        </Link>
        <Link href={"#"} target="_blank" className="hover:text-white">
          <SiLeetcode />
        </Link>
      </div>
    </div>
  );
};

export default SectionOne;
