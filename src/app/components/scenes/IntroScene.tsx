"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IntroScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position within this container's height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Fade out and scale down as user scrolls down
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(20px)"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative h-[150vh] w-full bg-background">
      {/* Sticky content stays fixed while container scrolls */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center pointer-events-none">
        
        {/* Ambient lighting */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
        </div>

        <motion.div 
          style={{ opacity, scale, filter: blur, y }}
          className="z-10 flex flex-col items-center justify-center w-full px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-center"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground/60 mb-6 font-mono">
              Muhammed Ashique P K
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-foreground mb-8">
              Full Stack <br />
              <span className="italic font-normal text-muted-foreground">Engineer</span>
            </h1>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroScene;
