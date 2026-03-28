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

        {/* Ambient breathing lighting */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px] mix-blend-screen absolute" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 90, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-[40vw] h-[60vw] bg-secondary/10 rounded-full blur-[120px] mix-blend-screen absolute translate-x-1/4" 
          />
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
            <h1 className="text-5xl sm:text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6">
              Full Stack <br />
              <span className="italic font-normal text-muted-foreground">Engineer</span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 2 }}
              className="text-muted-foreground/80 font-light text-lg sm:text-xl max-w-md mx-auto leading-relaxed"
            >
              Crafting premium digital experiences through minimal design and complex engineering.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroScene;
