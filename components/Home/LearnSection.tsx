"use client"
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const skills = [
  "Go",
  "PHP",
  "Docker",
  "Linux",
  "CI/CD"
]

const categories = [
  {  color: "bg-green-400", height: 280 },
  { color: "bg-blue-500", height: 240 },
  {  color: "bg-yellow-400", height: 200 },
  {  color: "bg-pink-400", height: 160 },
]
export default function LearnSection(id : { id: string }) {
  return (
    <section className="w-full pt-20 sm:pt-32 px-2 sm:px-4 relative z-0 min-h-[700px] flex flex-col justify-center ">
      {/* Top left: Radial gradient background */}
      <div
        className="absolute top-0 left-0 w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(16, 50, 40, 0.5) 0%, transparent 60%)",
        }}
      />
 
      {/* Main hero content */}
       <div className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >

            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-balance">
              <span className="font-bold text-white">Backend Specialist</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              I focus on building scalable backend systems, designing robust APIs, and optimizing databases and infrastructure for reliability and performance. My expertise is in server-side development, distributed systems, and backend architecture.
            </p>

            <div className="space-y-4 pt-4">
              <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                Core Backend Skills:
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="px-4 py-2 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-gray-500 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Animated Pills */}
          <div className="flex justify-center lg:justify-end">
            <div className="flex items-end gap-4 md:gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex flex-col items-center gap-4"
                >
                  {/* Pill Bar */}
                  <motion.div
                    className={`${category.color} rounded-full w-16 md:w-20 relative flex items-end justify-center pb-4`}
                    style={{ height: `${category.height}px` }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Arrow icon at bottom */}
                    <motion.div
                      className="cursor-pointer"
                      whileHover={{ scale: 1.2, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7 text-[#0a0a0a]" />
                    </motion.div>
                  </motion.div>

                  {/* Category Label removed, pill bar only */}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
