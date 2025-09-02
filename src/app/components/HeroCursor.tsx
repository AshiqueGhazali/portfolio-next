"use client";
import React, { useEffect, useState, useRef } from "react";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({
  weight: "400",
  subsets: ["latin"],
});

// Define particle type for strict typing
interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  decay: number;
  size: number;
  initialSize: number;
  opacity: number;
  color: string;
}

const HeroCursor: React.FC = () => {
  const [smokeParticles, setSmokeParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const particleIdRef = useRef<number>(0);
  const lastMousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const velocity = {
        x: x - lastMousePos.current.x,
        y: y - lastMousePos.current.y,
      };

      setMousePos({ x, y });
      lastMousePos.current = { x, y };
      const grays = ["#9ca3af", "#6b7280", "#4b5563", "#374151"];

      const newParticles: Particle[] = [];
      const particleCount =
        Math.min(Math.abs(velocity.x) + Math.abs(velocity.y), 8) + 2;

      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 15;

        newParticles.push({
          id: particleIdRef.current++,
          x: x + Math.cos(angle) * distance,
          y: y + Math.sin(angle) * distance,
          vx: velocity.x * 0.1 + (Math.random() - 0.5) * 0.5,
          vy:
            velocity.y * 0.1 +
            (Math.random() - 0.5) * 0.5 -
            Math.random() * 0.3,
          life: 1,
          decay: Math.random() * 0.008 + 0.003,
          size: Math.random() * 20 + 8,
          initialSize: Math.random() * 20 + 8,
          opacity: Math.random() * 0.6 + 0.2,
          color: grays[Math.floor(Math.random() * grays.length)],
        });
      }

      setSmokeParticles((prev) => [...prev, ...newParticles].slice(-150));
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSmokeParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vx: particle.vx * 0.99,
            vy: particle.vy * 0.99 - 0.02,
            life: particle.life - particle.decay,
            size: particle.initialSize * (2 - particle.life),
          }))
          .filter((particle) => particle.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[100vh] flex items-center justify-center  w-screen overflow-hidden"
    >
      {/* Smoke Particles */}
      {smokeParticles.map((particle) => (
        <div
          key={particle.id}
          className="absolute pointer-events-none rounded-full"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, ${particle.color}${Math.floor(
              particle.life * particle.opacity * 255
            )
              .toString(16)
              .padStart(2, "0")} 0%, transparent 70%)`,
            opacity: particle.life * particle.opacity,
            filter: `blur(${4 - particle.life * 2}px)`,
            transform: "translate3d(0, 0, 0)",
          }}
        />
      ))}

      {/* Ambient Glow */}
      <div
        className="absolute pointer-events-none w-96 h-96 rounded-full opacity-20 transition-all duration-300"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
          background:
            "radial-gradient(circle, rgba(232, 121, 249, 0.3) 0%, rgba(192, 132, 252, 0.2) 30%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
};

export default HeroCursor;
