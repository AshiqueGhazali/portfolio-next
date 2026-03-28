"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import projectsData from "../../utils/projectData";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsScene() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Create a scroll container that is as tall as the number of projects (each getting 100vh)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Calculate the horizontal translation based on number of items
  const totalProjects = projectsData.length || 1;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${100 * (totalProjects - 1)}vw`]);

  return (
    <section ref={targetRef} className="relative z-10 bg-background" style={{ height: `${totalProjects * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex h-screen w-max items-center">
          {projectsData.map((project, index) => {
            return (
              <div 
                key={index}
                className="w-screen h-[100dvh] flex items-center justify-center p-6 pt-24 pb-12 lg:p-24 relative overflow-hidden"
              >
                {/* Background Numbering */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] lg:text-[30vw] font-bold text-white/[0.02] pointer-events-none z-0">
                  0{index + 1}
                </div>

                <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-16 h-full">
                  
                  {/* Left Text Detail */}
                  <div className="flex-1 w-full space-y-4 lg:space-y-6 flex flex-col justify-center max-h-[50%] lg:max-h-full overflow-y-auto custom-scrollbar pr-2 lg:pr-0">
                    <div>
                      <h4 className="text-primary text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase mb-2 lg:mb-4">
                        Selected Project
                      </h4>
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tighter text-foreground mb-4 lg:mb-6">
                        {project.name}
                      </h2>
                    </div>

                    <p className="text-muted-foreground text-sm lg:text-lg font-light leading-relaxed max-w-xl">
                      {project.details}
                    </p>

                    <div className="flex flex-wrap gap-2 lg:gap-3 py-2">
                        {project.techstack.map((tech, i) => (
                            <span
                            key={i}
                            className="px-3 py-1 lg:px-4 lg:py-2 text-[10px] lg:text-xs font-medium bg-white/5 border border-white/10 text-muted-foreground rounded-full tracking-wider"
                            >
                            {tech}
                            </span>
                        ))}
                    </div>

                    <div className="pt-2 lg:pt-6 pb-4">
                      <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 group px-6 py-3 lg:px-8 lg:py-4 bg-white/10 hover:bg-white text-foreground hover:text-black rounded-full transition-all duration-500 hover:scale-105 active:scale-95 text-xs lg:text-sm">
                        <span className="font-medium tracking-wide">View Project</span>
                        <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:rotate-45 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>

                  {/* Right Image Container */}
                  <div className="flex-1 w-full max-h-[40%] lg:max-h-[65%] lg:h-[65vh] relative group overflow-hidden rounded-2xl glass-panel flex items-center justify-center bg-black/50">
                    <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-700" />
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-contain p-4 lg:p-8 scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)]"
                    />
                  </div>

                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
