"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TextScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position across a 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Mapping the phrases to specific scroll windows
  const phrase1Opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const phrase1Y = useTransform(scrollYProgress, [0.1, 0.3, 0.4, 0.45], [50, 0, 0, -50]);

  const phrase2Opacity = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.7], [0, 1, 1, 0]);
  const phrase2Y = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.7], [50, 0, 0, -50]);

  const phrase3Opacity = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1.0], [0, 1, 1, 0]);
  const phrase3Y = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1.0], [50, 0, 0, -50]);

  return (
    <section ref={containerRef} className="relative h-[300vh] w-full bg-background border-t border-white/5">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Phrase 1 */}
        <motion.div 
          style={{ opacity: phrase1Opacity, y: phrase1Y }}
          className="absolute flex items-center justify-center w-full px-6"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-center max-w-3xl leading-snug text-muted-foreground">
            I <span className="text-foreground font-medium italic">design</span> scalable systems <br /> that solve complex problems.
          </h2>
        </motion.div>

        {/* Phrase 2 */}
        <motion.div 
          style={{ opacity: phrase2Opacity, y: phrase2Y }}
          className="absolute flex items-center justify-center w-full px-6"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-center max-w-3xl leading-snug text-muted-foreground">
            I <span className="text-foreground font-medium italic">build</span> robust microservices <br /> and fluid interfaces.
          </h2>
        </motion.div>

        {/* Phrase 3 */}
        <motion.div 
          style={{ opacity: phrase3Opacity, y: phrase3Y }}
          className="absolute flex items-center justify-center w-full px-6"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-center max-w-3xl leading-snug text-muted-foreground">
            I <span className="text-foreground font-medium italic">create</span> digital products <br /> optimized for performance.
          </h2>
        </motion.div>

      </div>
    </section>
  );
};

export default TextScene;
