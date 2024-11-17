"use client";

import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaVuejs,
  FaAngular,
  FaSass,
  FaGitAlt,
  FaNpm,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiWebpack,
  SiBabel,
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Vue.js", icon: FaVuejs, color: "#4FC08D" },
  { name: "Angular", icon: FaAngular, color: "#DD0031" },
  { name: "Sass", icon: FaSass, color: "#CC6699" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "npm", icon: FaNpm, color: "#CB3837" },
  { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
  { name: "Babel", icon: SiBabel, color: "#F9DC3E" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
];

const SkillCard = ({ skill }: { skill: (typeof skills)[number] }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center"
    whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${skill.color}` }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <skill.icon className="text-5xl mb-4" style={{ color: skill.color }} />
    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
      {skill.name}
    </h3>
  </motion.div>
);

const SkillMarquee = () => (
  <Marquee className="py-8" gradient={false} speed={50}>
    {skills.map((skill, index) => (
      <div key={index} className="mx-4 text-4xl" style={{ color: skill.color }}>
        <skill.icon />
      </div>
    ))}
  </Marquee>
);

export function FrontendSkillsShowcaseComponent() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frontend Skills
        </motion.h2>
        <SkillMarquee />
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
