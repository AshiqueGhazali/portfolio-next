"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ExperienceScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const experianceData = [
    {
      year: "JAN, 2025 - PRESENT",
      role: "Full Stack Developer",
      company: "Subhx Infotech",
      href: "https://subhx.in/",
      details: "Build and maintain scalable full-stack applications using Next.js, Node.js, Express.js, and PostgreSQL. Manage projects end-to-end from planning to deployment, collaborate with cross-functional teams, and enhance development quality through code reviews, sprint planning, and best practices.",
    },
    {
      year: "DEC, 2023 - JAN, 2025",
      role: "MERN Stack Developer Trainee",
      company: "Brototype",
      href: "https://www.brototype.com/",
      details: "Designed and developed two major projects — Zephyr, a premium e-commerce platform, and Veew. Gained hands-on experience in building scalable web applications, implementing RESTful APIs, and delivering responsive, high-performance user interfaces while honing skills in JavaScript, Node.js, Express.js, MongoDB, and React.js.",
    },
  ];

  // Map scroll progress to a reveal effect over the container
  // As user scrolls through the massive 200vh height, cards float up sequentially

  return (
    <section ref={containerRef} className="relative py-32 lg:py-48 min-h-[150vh] w-full bg-background border-t border-border flex items-center justify-center">

      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-32">
        <div className="w-full text-left md:text-center sticky top-32 lg:static mb-10 z-0">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-muted-foreground/30 leading-[0.9]">
            Experience
          </h2>
        </div>

        <div className="flex flex-col gap-24 relative z-10 mt-10 lg:mt-0">
          {experianceData.map((item, i) => {
            // Using frame motion's whileInView is perfect here instead of tight scroll mapping 
            // because we want an elegant entry as opposed to a strict scrub.
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100, filter: "blur(10px)", scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-start group p-8 lg:p-12 rounded-3xl transition-all duration-700 hover:bg-foreground/[0.02] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-2 border border-transparent hover:border-border"
              >
                <div className="lg:w-1/3 flex-shrink-0">
                  <span className="text-xs font-semibold tracking-[0.2em] text-primary block uppercase mb-4">
                    {item.year}
                  </span>
                  <h3 className="text-2xl lg:text-4xl font-light tracking-tight text-foreground mb-3">
                    {item.role}
                  </h3>
                  <h4 className="text-3xl md:text-4xl lg:text-6xl  text-muted-foreground mb-4 lg:mb-0 font-display font-bold tracking-tighter text-foreground">
                    {item.company}
                  </h4>
                </div>

                <div className="lg:w-2/3">
                  <p className="text-base lg:text-xl text-muted-foreground/80 font-light leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
