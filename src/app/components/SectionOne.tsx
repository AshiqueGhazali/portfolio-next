import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SectionOne = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experiance", href: "#experiance" },
    { name: "Projects", href: "#projects" },
  ];

  const linkClass = `hover:text-[#FFFFFF] cursor-pointer`;
  return (
    <div className="py-20 hidden lg:flex flex-col justify-between">
      <div className="flex gap-3 flex-col">
        <p className="font-bold text-[40px] text-[#FFFFFF]">Ashique Ghazali</p>
        <p className="text-[16px] font-medium">FULL STACK ENGINEER</p>
        <p className="text-[14px] font-normal text-gray-400">
          I build accessible, pixel-perfect digital <br /> experiences for the
          web.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {navLinks.map((link, index) => (
          <div
            key={index}
            className={`flex gap-3 cursor-pointer transition-all items-center group`}
          >
            <div
              className={`bg-gray-400 h-[2px] group-hover:w-20 transition-all duration-500 group-hover:bg-[#FFFFFF] w-10`}
            ></div>
            <p className="font-semibold uppercase text-[10px] text-gray-400 group-hover:text-[#FFFFFF]">
              {link.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-4 text-[22px] text-gray-400 items-center">
        <Link href={"#"} target="_blank" className={`${linkClass}`}>
          <FaGithub />
        </Link>
        <Link href={"#"} target="_blank" className={`${linkClass}`}>
          <FaLinkedin />
        </Link>
        <Link href={"#"} target="_blank" className={`${linkClass}`}>
          <FaInstagram />
        </Link>
        <Link href={"#"} target="_blank" className={`${linkClass}`}>
          <SiLeetcode />
        </Link>
      </div>
    </div>
  );
};

export default SectionOne;
