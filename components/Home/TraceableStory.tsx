"use client";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "The Spark",
    title: "First Lines of Code",
    description: "Discovered a passion for solving complex logic puzzles and algorithmic challenges.",
  },
  {
    year: "Diving Deep",
    title: "Backend Architecture",
    description: "Fell in love with databases, REST APIs, and designing scalable systems.",
  },
  {
    year: "Tooling Up",
    title: "DevOps & Infrastructure",
    description: "Mastered Docker, Linux, and CI/CD pipelines for reliable, automated deployments.",
  },
  {
    year: "Today",
    title: "Software Engineer",
    description: "Delivering robust systems and high-performance applications globally.",
  },
];

export default function TraceableStory() {
  return (
    <div className="relative w-full max-w-sm mx-auto flex flex-col justify-center h-full min-h-[400px] py-8">
      {/* Background Line */}
      <div className="absolute left-[27px] top-10 bottom-10 w-px bg-white/10" />
      
      {/* Animated Glowing Trace Line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "calc(100% - 80px)" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className="absolute left-[27px] top-10 w-px bg-gradient-to-b from-[#8ddd8d] via-blue-500 to-purple-500 origin-top"
      />

      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative pl-16 group">
            {/* Timeline Dot */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.5 }}
              className="absolute left-[23px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-950 border border-white/50 z-10 transition-all duration-300 group-hover:border-[#8ddd8d] group-hover:shadow-[0_0_12px_#8ddd8d] group-hover:scale-150"
            />
            
            {/* Content */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.5 }}
              className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-4 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/[0.04] group-hover:border-white/[0.1]"
            >
              <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase mb-1 block group-hover:text-[#8ddd8d] transition-colors duration-300">
                {milestone.year}
              </span>
              <h3 className="text-sm font-semibold text-white mb-1.5">
                {milestone.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                {milestone.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
