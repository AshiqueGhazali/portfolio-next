import Link from "next/link";
import React from "react";

const Experiance = () => {
  const experianceData = [
    {
      year: "JAN, 2025 - PRESENT",
      role: "Full Stack Developer",
      company: "Subhx Infotech",
      href: "https://subhx.in/",
      details:
        "Build and maintain scalable full-stack applications using Next.js, Node.js, Express.js, and PostgreSQL. Manage projects end-to-end from planning to deployment, collaborate with cross-functional teams, and enhance development quality through code reviews, sprint planning, and best practices.",
    },
    {
      year: "DEC, 2023 - JAN, 2025",
      role: "MERN Stack Developer Trainee",
      company: "Brotorype",
      href: "https://www.brototype.com/",
      details:
        "Designed and developed two major projects — Zephyr, a premium e-commerce platform, and Veew. Gained hands-on experience in building scalable web applications, implementing RESTful APIs, and delivering responsive, high-performance user interfaces while honing skills in JavaScript, Node.js, Express.js, MongoDB, and React.js.",
    },
  ];
  return (
    <div id="experiance" className="mt-20 flex flex-col gap-6 w-full">
      {experianceData.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          target="_blank"
          className="w-full lg:px-4 group py-3 lg:py-4 rounded-[5px] hover:border-t border-[#17264b] lg:hover:bg-[#17264b]/30 flex flex-col xl:flex-row gap-2 "
        >
          <div className="lg:w-[250px] flex-shink-0">
            <p className="text-[14px] font-medium text-gray-400">{item.year}</p>
          </div>
          <div className="w-full flex-shink-0">
            <div className="flex gap-2 items-center">
              <p className="text-[16px] font-medium text-[#49b4bb] lg:text-[#FFFFFF] group-hover:lg:text-[#49b4bb] transition-all duration-100">
                {`${item.role} , ${item.company}`}
              </p>
            </div>
            <p className="text-[14px] font-normal pointer-events-none text-gray-400 mt-2">
              {item.details}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Experiance;
