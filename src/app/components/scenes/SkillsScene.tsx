"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const skills = [
  "TypeScript", "React", "Next.js", "Node.js", 
  "Express", "PostgreSQL", "MongoDB", "Tailwind", 
  "Framer Motion", "MongoDB", "WebRTC"
];

export default function SkillsScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="relative h-[200vh] w-full bg-background border-t border-white/5">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
        
        <motion.h3 
          style={{ 
            opacity: useTransform(scrollYProgress, [0.1, 0.3], [0, 1]),
            y: useTransform(scrollYProgress, [0.1, 0.3], [20, 0])
          }}
          className="text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-16 text-center"
        >
          Core Technologies
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-x-12 md:gap-y-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            // Calculate a staggered scroll window for each skill
            const start = 0.2 + (index * 0.04);
            const end = start + 0.15;
            
            const opacity = useTransform(scrollYProgress, [start, end, 0.8, 0.9], [0.1, 1, 1, 0]);
            const scale = useTransform(scrollYProgress, [start, end], [0.8, 1]);
            const filter = useTransform(scrollYProgress, [start, end], ["blur(10px)", "blur(0px)"]);
            const color = useTransform(
              scrollYProgress, 
              [start, end], 
              ["var(--muted)", "var(--foreground)"]
            );
            
            return (
              <motion.div 
                key={index}
                style={{ opacity, scale, filter, color }}
                className="text-3xl md:text-5xl lg:text-7xl font-light tracking-tight transition-colors duration-100"
              >
                {skill}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
