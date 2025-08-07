import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import { TbBrandCSharp, TbSql } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { SiDotnet, SiTypescript, SiTailwindcss } from "react-icons/si";

const stacks = [
  { name: "C#", icon: <TbBrandCSharp className="text-indigo-500" /> },
  { name: ".NET", icon: <SiDotnet className="text-indigo-500" /> },
  { name: "SQL Server", icon: <TbSql className="text-indigo-500" /> },
  { name: "Microsoft Azure", icon: <VscAzure className="text-sky-500" /> },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-200" />,
  },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-sky-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-300" /> },
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-sky-400" /> },
  { name: "Docker", icon: <FaDocker className="text-sky-500" /> },
];

const Stacks: React.FC = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    className="w-full max-w-2xl xl:max-w-3xl mx-auto mt-8 mb-8 py-6 px-2 sm:py-10 sm:px-4 text-center bg-gray-950 rounded-2xl shadow-xl"
    aria-labelledby="stacks-title"
  >
    <h2
      id="stacks-title"
      className="text-2xl sm:text-3xl font-bold mb-4 text-indigo-500"
    >
      Minhas Stacks
    </h2>
    <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
      {stacks.map((stack) => (
        <div
          key={stack.name}
          className="flex flex-col items-center w-20 sm:w-28"
        >
          <div className="text-4xl sm:text-5xl mb-2 drop-shadow-lg">
            {stack.icon}
          </div>
          <span className="text-base sm:text-lg font-medium text-gray-200">
            {stack.name}
          </span>
        </div>
      ))}
    </div>
  </motion.section>
);

export default Stacks;
