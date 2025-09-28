"use client";
import React, { useEffect, useState, useRef } from "react";

const HeroCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastMousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePos({ x, y });
      lastMousePos.current = { x, y };
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

  return (
    <div
      ref={containerRef}
      className="relative h-[100vh] flex items-center justify-center w-screen overflow-hidden "
    >
      {/* Main cursor glow - subtle white */}
      <div
        className="absolute pointer-events-none w-160 h-160 rounded-full transition-all duration-200 ease-out"
        style={{
          left: mousePos.x - 320,
          top: mousePos.y - 320,
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.07) 30%, rgba(255, 255, 255, 0.02) 60%, transparent 80%)",
          filter: "blur(30px)",
        }}
      />

      {/* Inner white core */}
      {/* <div
        className="absolute pointer-events-none w-24 h-24 rounded-full transition-all duration-100 ease-out"
        style={{
          left: mousePos.x - 48,
          top: mousePos.y - 48,
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 50%, transparent 80%)",
          filter: "blur(12px)",
        }}
      /> */}

      {/* Center dot */}
      {/* <div
        className="absolute pointer-events-none w-3 h-3 rounded-full transition-all duration-75 ease-out"
        style={{
          left: mousePos.x - 6,
          top: mousePos.y - 6,
          background: "rgba(255, 255, 255, 0.6)",
          boxShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
        }}
      /> */}
    </div>
  );
};

export default HeroCursor;
