import Link from "next/link";
import React from "react";
import projectsData from "../utils/projectData";
import { motion } from "framer-motion";
import SectionMobileHead from "./ui/SectionMobileHead";

const Projects = () => {
  return (
    <div id="projects" className="mt-20 w-full">
      <SectionMobileHead title="Projects" className="mb-3" />
      <div className="flex flex-col gap-6 w-full">
        {projectsData.map((item, index) => (
          <div
            key={index}
            className="w-full lg:px-4 group py-3 lg:py-4 rounded-[5px] hover:border-t border-[#17264b] lg:hover:bg-[#17264b]/30 flex flex-col xl:flex-row transition-all duration-500 gap-4"
          >
            <div className="w-full xl:max-w-[200px] flex-shink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-auto rounded-[5px]"
              />
            </div>
            <div className="w-full flex-shink-0">
              <Link
                href={item.href}
                target="_blank"
                className="flex gap-2 items-center"
              >
                <p className="text-[16px] font-medium text-[#49b4bb] lg:text-[#FFFFFF] group-hover:lg:text-[#49b4bb] transition-all duration-100">
                  {`${item.name}`}
                </p>
              </Link>
              <p className="text-[14px] font-normal pointer-events-none text-gray-400 mt-2">
                {item.details}
              </p>
              <div className="overflow-hidden mt-3">
                <div className="flex flex-wrap gap-2 lg:hidden">
                  {item.techstack.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="text-[12px] bg-[#17264b] text-gray-400 px-2 py-1 rounded-[3px]"
                      initial={{ opacity: 0, y: -20 }} // Start above & invisible
                      whileInView={{ opacity: 1, y: 0 }} // Animate to visible & original position
                      viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% visible
                      transition={{
                        duration: 0.3,
                        delay: techIndex * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden mt-3">
                <div className="hidden lg:flex flex-wrap gap-2 transform translate-y-[-100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  {item.techstack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-[12px] bg-[#17264b] text-gray-400 px-2 py-1 rounded-[3px] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out"
                      style={{
                        transitionDelay: `${techIndex * 50}ms`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
