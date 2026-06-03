"use client"
import { motion } from "framer-motion";
import TraceableStory from "./TraceableStory";

const skills = [
  "JavaScript",
  "Go",
  "Python",
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
    <section id={id.id} className="w-full pt-20 sm:pt-32 px-2 sm:px-4 relative z-0 min-h-[700px] flex flex-col justify-center scroll-mt-20">
      {/* Top left: Radial gradient background */}
      <div
        className="absolute top-0 left-0 w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(35, 46, 35) 0%, transparent 40%)",
        }}
      />
 
      {/* Main hero content */}
       <div className="max-w-[1400px] mx-auto py-16 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >

            <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] text-balance font-serif font-normal tracking-tight mb-2">
              <span className="text-white">Software Engineer</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
             I build scalable and reliable software systems, design robust APIs, and develop high-performance applications. My experience includes backend development, distributed systems, and designing maintainable software architectures.
            </p>

            <div className="space-y-4 pt-4">
              <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">
              Core Software Engineering Skills :
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

          {/* Right Content - Traceable Story */}
          <div className="flex justify-center lg:justify-end items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <TraceableStory />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

