// "use client";
// import React from "react";
// import { Sacramento } from "next/font/google";

// const sacramento = Sacramento({
//   weight: "400",
//   subsets: ["latin"],
// });

// const Navbar = () => {
//   const navLinks = [
//     { name: "About", href: "#about" },
//     { name: "Experiance", href: "#experiance" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//   ];

//   return (
//     <div className="w-full h-[60px] fixed top-0 bg-transperant lg:bg-[#0c0a09]/50 px-10 lg:px-20 flex justify-between items-center z-50 backdrop-blur-md lg:border-b border-white/10">
//       <p className={`${sacramento.className} text-3xl pointer-events-none text-white italic`}>Ashique</p>

//       {/* Desktop Navigation */}
//       <div className="hidden lg:flex items-center h-full gap-8">
//         {navLinks.map((link, index) => (
//           <div
//             key={index}
//             className="flex items-center relative h-full group transition-all duration-300"
//           >
//             <a
//               href={link.href}
//               className="text-gray-400 group-hover:text-white transition-colors"
//             >
//               {link.name}
//             </a>
//             <div className="w-full h-0 group-hover:h-[5px] bg-white absolute bottom-0 transition-all duration-300"></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

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
