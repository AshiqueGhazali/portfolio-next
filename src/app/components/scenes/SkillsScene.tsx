"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

import { 
  SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer, 
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiRedis, 
  SiAmazonwebservices, SiDocker, SiWebrtc, SiSocketdotio, SiGit 
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer }
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis }
    ]
  },
  {
    title: "Architecture & Tools",
    skills: [
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Docker", icon: SiDocker },
      { name: "WebRTC", icon: SiWebrtc },
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "Git", icon: SiGit }
    ]
  }
];

// Sub-component to safely handle Framer Motion hooks per item
const SkillBadge = ({ 
  skill, 
  globalIndex, 
  scrollYProgress 
}: { 
  skill: { name: string; icon: React.ElementType }; 
  globalIndex: number; 
  scrollYProgress: MotionValue<number>; 
}) => {
  const start = 0.2 + (globalIndex * 0.02);
  const end = start + 0.1;
  
  const opacity = useTransform(scrollYProgress, [start, end, 0.8, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [0.9, 1]);
  const y = useTransform(scrollYProgress, [start, end], [20, 0]);

  return (
    <motion.div 
      role="button"
      style={{ opacity, scale, y }}
      className="flex items-center gap-2 font-sans font-medium text-[13px] md:text-base tracking-wide px-4 py-2 md:px-6 md:py-3 rounded-full glass-panel text-foreground hover:bg-foreground/5 hover:border-foreground/20 hover:-translate-y-1 hover:shadow-button-hover transition-all duration-300 cursor-default"
    >
      <skill.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
      <span>{skill.name}</span>
    </motion.div>
  );
};

const CategoryTitle = ({ 
  title, 
  globalIndex, 
  scrollYProgress 
}: { 
  title: string; 
  globalIndex: number; 
  scrollYProgress: MotionValue<number>; 
}) => {
  const start = 0.2 + (globalIndex * 0.02);
  const opacity = useTransform(scrollYProgress, [start, start + 0.1], [0, 1]);
  const y = useTransform(scrollYProgress, [start, start + 0.1], [20, 0]);

  return (
    <motion.h4 
      style={{ opacity, y }} 
      className="font-sans font-semibold text-base md:text-xl text-muted-foreground mb-4 md:mb-6 tracking-wide"
    >
      {title}
    </motion.h4>
  );
};

export default function SkillsScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  let runningIndex = 0;

  return (
    <section ref={containerRef} className="relative h-[200vh] w-full bg-background border-t border-border">
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden px-4 md:px-6">
        
        <div className="w-full flex flex-col items-center py-10 md:py-0 w-full max-w-5xl mx-auto">
          <motion.h3 
          style={{ 
            opacity: useTransform(scrollYProgress, [0.1, 0.3], [0, 1]),
            y: useTransform(scrollYProgress, [0.1, 0.3], [20, 0])
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-display font-bold tracking-tighter text-foreground mb-6 md:mb-16 leading-[0.85] text-center"
        >
          Core Technologies
        </motion.h3>

        <div className="flex flex-col gap-6 md:gap-16 w-full">
          {skillCategories.map((category, catIndex) => {
            const catGlobalIndex = runningIndex;
            
            return (
              <div key={catIndex} className="flex flex-col items-center w-full">
                <CategoryTitle 
                  title={category.title} 
                  globalIndex={catGlobalIndex} 
                  scrollYProgress={scrollYProgress} 
                />
                
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    runningIndex++;
                    return (
                      <SkillBadge 
                        key={skillIndex} 
                        skill={skill} 
                        globalIndex={runningIndex} 
                        scrollYProgress={scrollYProgress} 
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
