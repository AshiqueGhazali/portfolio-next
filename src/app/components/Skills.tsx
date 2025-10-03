"use client";
import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiRedux,
  SiSocketdotio,
  SiWebrtc,
  SiPostman,
  SiFigma,
  SiMysql,
  SiSequelize,
  SiMongoose,
  SiVercel,
  SiNginx,
} from "react-icons/si";
import SkillCard from "./ui/SkillCard";
import SectionMobileHead from "./ui/SectionMobileHead";

const skills = [
  // Frontend
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    category: "Frontend",
  },
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "white", category: "Frontend" },
  { name: "Redux", icon: SiRedux, color: "#764ABC", category: "Frontend" },
  // { name: "HTML", icon: SiHtml5, color: "#E34F26", category: "Frontend" },
  // { name: "CSS", icon: SiCss3, color: "#1572B6", category: "Frontend" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    category: "Frontend",
  },
  // {
  //   name: "Bootstrap",
  //   icon: SiBootstrap,
  //   color: "#7952B3",
  //   category: "Frontend",
  // },

  // Backend
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
  { name: "Express.js", icon: SiExpress, color: "white", category: "Backend" },
  {
    name: "Socket.IO",
    icon: SiSocketdotio,
    color: "white",
    category: "Backend",
  },
  { name: "WebRTC", icon: SiWebrtc, color: "#0d3a82", category: "Backend" },
  // {
  //   name: "Sequelize",
  //   icon: SiSequelize,
  //   color: "#52B0E7",
  //   category: "Backend",
  // },
  // { name: "Mongoose", icon: SiMongoose, color: "#880000", category: "Backend" },

  // Database
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database" },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    category: "Database",
  },
  // { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Database" },

  // Tools and Platforms
  // {
  //   name: "Git",
  //   icon: SiGit,
  //   color: "#F05032",
  //   category: "Tools and Platforms",
  // },
  // {
  //   name: "GitHub",
  //   icon: SiGithub,
  //   color: "white",
  //   category: "Tools and Platforms",
  // },
  // {
  //   name: "Postman",
  //   icon: SiPostman,
  //   color: "#FF6C37",
  //   category: "Tools and Platforms",
  // },
  // {
  //   name: "Figma",
  //   icon: SiFigma,
  //   color: "#F24E1E",
  //   category: "Tools and Platforms",
  // },
  // {
  //   name: "Vercel",
  //   icon: SiVercel,
  //   color: "white",
  //   category: "Tools and Platforms",
  // },
  // {
  //   name: "Nginx",
  //   icon: SiNginx,
  //   color: "#009639",
  //   category: "Tools and Platforms",
  // },

  // Others
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const categories = [
    "Frontend",
    "Backend",
    "Database",
    "Tools and Platforms",
    "Others",
  ];
  return (
    <div id="skills" className="pt-20 px-4">
      <SectionMobileHead title="Skills" className="mb-3" />
      <div className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 items-center gap-3 flex-wrap">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className={`group w-full flex flex-col justify-center items-center gap-2 text-sm border border-[#17264b]  px-4 py-2 rounded-[5px] cursor-pointer transition-all duration-300 group-hover:[border-color:var(--hover-color)]`}
                style={{ "--hover-color": skill.color } as React.CSSProperties}
              >
                <skill.icon className="text-lg transition-colors duration-300 text-gray-400 group-hover:[color:var(--hover-color)]" />
                <span className="transition-colors duration-300 text-gray-400 group-hover:[color:var(--hover-color)]">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
