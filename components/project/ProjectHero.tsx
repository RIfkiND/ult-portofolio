"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-24 px-6 lg:px-8 border-b border-white/5">
      
      {/* Left side green gradient */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-1/2 -translate-y-1/2 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[1200px] lg:h-[1200px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at left center, rgba(35, 46, 35, 0.8) 0%, transparent 40%)",
        }}
      />

      <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Top small label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8"
        >
          <span className="text-[#8ddd8d] text-sm md:text-base font-medium tracking-wide">
            Portfolio Showcase
          </span>
        </motion.div>

        {/* Main Heading */}
        <div className="overflow-hidden mb-8 py-4 -my-4">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-[5.5rem] font-serif text-[#f5f5f5] leading-[1.05] tracking-tight"
          >
            A collection of digital experiences <br className="hidden md:block" />
            that leave a lasting impression.
          </motion.h1>
        </div>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/60 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl"
        >
          I design and build production-ready backend systems and web apps that scale effortlessly and reinforce your technical foundation.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <a
            href="https://github.com/RIfkiND"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-6 py-4 rounded-[14px] border border-white/20 hover:border-white/40 transition-colors bg-transparent text-white/80 hover:text-white cursor-pointer"
          >
            <span className="text-sm md:text-base font-medium">Explore GitHub Profile</span>
            <div className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center group-hover:bg-[#8ddd8d] group-hover:border-transparent group-hover:text-black transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}


