"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactScene() {
  return (
    <section className="relative min-h-[100svh] w-full bg-background flex flex-col items-center justify-center p-6 border-t border-border">

      {/* Soft Premium Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] md:w-[60vw] h-[60vw] bg-foreground/[0.02] rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50, filter: "blur(10px)", scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
        viewport={{ once: false, margin: "-20%" }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="z-10 text-center max-w-4xl w-full"
      >
        <span className="text-sm tracking-[0.3em] text-muted-foreground/60 mb-6 font-mono block">
          What's Next?
        </span>

        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-display font-bold tracking-tighter text-foreground mb-6 leading-[0.85]">
          Let's create <br className="hidden md:block" />
          <span className="italic font-bold text-muted-foreground opacity-80">something.</span>
        </h2>

        <a
          href="mailto:ashiquekundala6@gmail.com"
          className="inline-flex items-center justify-center px-10 py-5 text-sm font-medium transition-all duration-500 glass-panel text-foreground hover:bg-foreground hover:text-background rounded-full shadow-button hover:scale-105 active:scale-95 active:shadow-none hover:-translate-y-1 hover:shadow-button-hover ease-[cubic-bezier(0.22,1,0.36,1)]"
        >
          <span className="tracking-widest">GET IN TOUCH</span>
        </a>
      </motion.div>

      <div className="absolute bottom-10 w-full flex flex-col md:flex-row justify-between items-center px-10 gap-6 text-[10px] tracking-[0.2em] text-muted-foreground font-light uppercase">
        <p>© {new Date().getFullYear()} Muhammed Ashique PK.</p>
        <div className="flex gap-8">
          <a href={
            process.env.NEXT_PUBLIC_GITHUB_URL ||
            "https://github.com/AshiqueGhazali"
          } target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors duration-300">Github</a>
          <a href={
            process.env.NEXT_PUBLIC_LINKEDIN_URL ||
            "https://www.linkedin.com/in/ashiqueghazali/"
          } target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors duration-300">LinkedIn</a>
          <a href={
            process.env.NEXT_PUBLIC_INSTA_URL ||
            "https://www.instagram.com/ashique_pk__/"
          } target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors duration-300">Instagram</a>
        </div>
      </div>
    </section>
  );
}
