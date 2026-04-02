"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import projectsData from "../../utils/projectData";
import { ArrowUpRight, X, Github } from "lucide-react";

export default function ProjectsScene() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const touchStartY = useRef<number>(0);

  // Scroll interception logic
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const isAtTop = target.scrollTop === 0;
    const isAtBottom = Math.abs(target.scrollHeight - target.clientHeight - target.scrollTop) <= 1;

    if (e.deltaY > 0 && !isAtBottom) {
      e.stopPropagation();
    } else if (e.deltaY < 0 && !isAtTop) {
      e.stopPropagation();
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchY = e.touches[0].clientY;
    const deltaY = touchStartY.current - touchY; 
    const target = e.currentTarget;

    const isAtTop = target.scrollTop === 0;
    const isAtBottom = Math.abs(target.scrollHeight - target.clientHeight - target.scrollTop) <= 1;

    if (deltaY > 0 && !isAtBottom) {
      e.stopPropagation();
    } else if (deltaY < 0 && !isAtTop) {
      e.stopPropagation();
    }
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);
  
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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] lg:text-[30vw] font-bold text-foreground/[0.03] pointer-events-none z-0">
                  0{index + 1}
                </div>

                <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-16 h-full">
                  
                  {/* Left Text Detail */}
                  <div className="flex-1 w-full relative max-h-[50%] lg:max-h-full flex flex-col overflow-hidden">
                    <div 
                      className="flex-1 w-full overflow-y-auto custom-scrollbar pr-4 space-y-4 lg:space-y-6 pb-24"
                      onWheel={handleWheel}
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                    >
                      <div>
                      <h4 className="text-primary text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase mb-2 lg:mb-4">
                        Selected Project
                      </h4>
                      <motion.h2 
                        layoutId={`project-title-${index}`}
                        className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tighter text-foreground mb-4 lg:mb-6"
                      >
                        {project.name}
                      </motion.h2>
                    </div>

                    <p className="text-muted-foreground text-sm lg:text-lg font-light leading-relaxed max-w-xl">
                      {project.details}
                    </p>

                    <div className="flex flex-wrap gap-2 lg:gap-3 py-2">
                        {project.techstack.map((tech, i) => (
                            <span
                            key={i}
                            className="px-3 py-1 lg:px-4 lg:py-2 text-[10px] lg:text-xs font-medium bg-foreground/5 border border-border text-muted-foreground rounded-full tracking-wider"
                            >
                            {tech}
                            </span>
                        ))}
                    </div>

                    <div className="pt-2 lg:pt-6 pb-4">
                      <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 group px-6 py-3 lg:px-8 lg:py-4 bg-foreground/10 hover:bg-foreground text-foreground hover:text-background rounded-full transition-all duration-500 hover:scale-105 active:scale-95 text-xs lg:text-sm">
                        <span className="font-medium tracking-wide">View Project</span>
                        <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:rotate-45 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>

                  {/* Gradient mask to indicate scrollability smoothly */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none lg:pr-16" />
                </div>

                {/* Right Image Container */}
                  <motion.div 
                    layoutId={`project-bg-${index}`}
                    onClick={() => setSelectedProject(index)}
                    className="flex-1 w-full max-h-[40%] lg:max-h-[65%] lg:h-[65vh] relative group overflow-hidden rounded-2xl flex items-center justify-center bg-foreground/5 transition-all duration-700 hover:bg-foreground/10 hover:shadow-2xl hover:-translate-y-2 hover:shadow-primary/10 cursor-pointer border border-border"
                  >
                    <div className="absolute inset-0 bg-background/40 z-10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
                    <motion.img 
                      layoutId={`project-image-${index}`}
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-contain p-4 lg:p-8 scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)]"
                    />
                  </motion.div>

                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Project Preview Overlay */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-y-auto custom-scrollbar"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/95 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              layoutId={`project-bg-${selectedProject}`}
              className="relative w-full max-w-6xl h-auto min-h-[80vh] bg-background border border-border rounded-3xl overflow-hidden flex flex-col md:flex-row z-10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-background/50 border border-border text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-colors backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Large Image */}
              <div className="w-full md:w-1/2 p-8 md:p-16 flex items-center justify-center bg-foreground/5 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent z-0" />
                <motion.img
                  layoutId={`project-image-${selectedProject}`}
                  src={projectsData[selectedProject].image}
                  alt={projectsData[selectedProject].name}
                  className="w-full h-auto max-h-[60vh] object-contain relative z-10 drop-shadow-2xl"
                />
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-background relative z-10 border-l border-border">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.h2
                    layoutId={`project-title-${selectedProject}`}
                    className="text-4xl md:text-6xl font-light tracking-tighter text-foreground mb-8"
                  >
                    {projectsData[selectedProject].name}
                  </motion.h2>

                  <div className="space-y-6 text-muted-foreground leading-relaxed font-light text-lg">
                    {/* Render details gracefully */}
                    {projectsData[selectedProject].details.split(". ").map((sentence, sIdx) => (
                      <motion.p
                        key={sIdx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (sIdx * 0.1), duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {sentence}{sentence.endsWith(".") ? "" : "."}
                      </motion.p>
                    ))}
                  </div>

                  {/* Tech Stack Animated */}
                  <div className="mt-12">
                    <h4 className="text-secondary text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {projectsData[selectedProject].techstack.map((tech, tIdx) => (
                        <motion.span
                          key={tIdx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + (tIdx * 0.05), duration: 0.5 }}
                          className="px-4 py-2 text-xs font-medium bg-primary/10 border border-primary/20 text-primary rounded-full tracking-wider"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <motion.div 
                    className="flex flex-wrap gap-4 mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    <a href={projectsData[selectedProject].href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-foreground text-background hover:bg-foreground/90 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 font-medium text-sm shadow-lg">
                      Live Preview <ArrowUpRight className="w-4 h-4" />
                    </a>
                    {projectsData[selectedProject].github && (
                      <a href={projectsData[selectedProject].github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-foreground/5 border border-border text-foreground hover:bg-foreground/10 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 font-medium text-sm">
                        Source Code <Github className="w-4 h-4" />
                      </a>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
