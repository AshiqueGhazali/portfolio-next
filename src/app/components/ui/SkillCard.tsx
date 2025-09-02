"use client";
import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ skill }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-b w-96 from-neutral-950 to-neutral-900 rounded-xl p-8 border border-gray-800  transition-all duration-300 group relative overflow-hidden"
    >
      <div className="relative z-10 col-span-11 flex flex-col justify-between h-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="dark:text-gray-400 text-gray-700"
          >
            <div
              className={`group flex items-center gap-2 text-sm px-4 py-2 rounded-[5px] cursor-pointer transition-all duration-300`}
              style={{ "--hover-color": skill.color } as React.CSSProperties}
            >
              <skill.icon className="text-lg lg:text-xl transition-colors duration-300 text-gray-400 group-hover:[color:var(--hover-color)]" />
              <span className="transition-colors lg:text-xl duration-300 text-gray-400 group-hover:[color:var(--hover-color)]">
                {skill.name}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 20"
        className="absolute -top-2"
      >
        <motion.path
          d="M0 10 L400 10"
          stroke="url(#upper)"
          strokeWidth="1"
          fill="none"
        />
        <defs>
          <motion.linearGradient
            id="upper"
            gradientUnits="userSpaceOnUse"
            x1="100%"
            x2="0%"
            y1="0%"
            y2="0%"
            animate={{
              x1: ["100%", "-10%", "0%"],
              x2: ["105%", "-5%", "0%"],
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <stop offset="0%" stopColor="#000000" stopOpacity="0" />
            <stop offset="20%" stopColor="#7d12ff" stopOpacity="1" />
            <stop offset="50%" stopColor="#ab20fd" stopOpacity="1" />
            <stop offset="80%" stopColor="#200589" stopOpacity="1" />
            <stop offset="100%" stopColor="#fbf8fd" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 20"
        className="absolute  -bottom-2"
      >
        <motion.path
          d="M0 10 L400 10"
          stroke="url(#lower)"
          strokeWidth="1"
          fill="none"
        />
        <defs>
          <motion.linearGradient
            id="lower"
            gradientUnits="userSpaceOnUse"
            x1="100%"
            x2="0%"
            y1="0%"
            y2="0%"
            animate={{
              x1: ["0%", "-10%", "100%"],
              x2: ["0%", "-5%", "105%"],
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <stop offset="0%" stopColor="#000000" stopOpacity="0" />
            <stop offset="20%" stopColor="#7d12ff" stopOpacity="1" />
            <stop offset="50%" stopColor="#ab20fd" stopOpacity="1" />
            <stop offset="80%" stopColor="#200589" stopOpacity="1" />
            <stop offset="100%" stopColor="#fbf8fd" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-indigo-600/20"
      />
    </motion.div>
  );
};

export default SkillCard;
