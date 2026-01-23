"use client";

import { TerminalSquare, Database, Cloud, Server, Github, GitBranch, Zap } from "lucide-react";
import { SiDocker, SiGo } from "react-icons/si"; // Import Docker and Go icons from react-icons

const techIcons = [
  { icon: <SiGo className="w-12 h-12 text-blue-400" />, name: "Golang" },
  { icon: <TerminalSquare className="w-12 h-12 text-yellow-400" />, name: "Node.js" },
  { icon: <Database className="w-12 h-12 text-green-400" />, name: "PostgreSQL" },
  { icon: <Cloud className="w-12 h-12 text-cyan-400" />, name: "AWS" },
  { icon: <Server className="w-12 h-12 text-purple-400" />, name: "Linux" },
  { icon: <SiDocker className="w-12 h-12 text-blue-500" />, name: "Docker" },
  { icon: <Github className="w-12 h-12 text-white" />, name: "GitHub" },
  { icon: <GitBranch className="w-12 h-12 text-pink-400" />, name: "Git" },
  { icon: <Zap className="w-12 h-12 text-emerald-400" />, name: "CI/CD" },
];

export default function SkillSection() {
  return (
    <section className="relative w-full py-16  flex justify-center items-center">
      {/* Gradient overlay at bottom left */}
      <div className="pointer-events-none absolute right-0 bottom-0 w-1/2 h-1/2 z-0">
        <div className="w-full h-full bg-gradient-to-tr from-green-400/30 via-transparent to-transparent rounded-full blur-2xl" />
      </div>
      {/* Tech icons row */}
      <div className="relative z-10 w-full max-w-5xl mx-auto rounded-[100px] bg-black/70 border border-white/10 flex flex-row items-center justify-between px-10 py-10 backdrop-blur-md">
        {techIcons.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center justify-center h-16 w-24">
            {tech.icon}
            <span className="mt-2 text-xs text-gray-400 font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}