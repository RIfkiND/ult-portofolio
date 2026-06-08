"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TransitionLink } from "@/components/ui/TransitionLink";

export default function Hero(id: { id: string }) {
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
            Rifki Nauval • Software Engineer
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
            Engineering robust systems <br className="hidden md:block" />
            that scale effortlessly.
          </motion.h1>
        </div>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/60 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl"
        >
          I design and build production-ready backend architectures, reliable APIs, and seamless integrations that reinforce your technical foundation.
        </motion.p>

        {/* CTA Button */}
        <div className="pt-8 flex flex-col md:flex-row gap-6 items-center">
          <TransitionLink href="/contact" className="cursor-pointer">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer relative inline-flex items-center justify-between gap-8 pl-8 pr-3 h-[72px] md:h-[80px] bg-transparent border border-white/20 rounded-[14px] text-white hover:border-white/40 transition-all duration-500 overflow-hidden"
            >
              <span className="text-base md:text-xl font-medium">Let's build something great.</span>
              <div 
                className="relative overflow-hidden w-12 h-12 md:w-14 md:h-14 rounded-[10px] bg-transparent border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:text-black group-hover:border-transparent text-white/60"
              >
                <div className="absolute inset-0 bg-[#8ddd8d] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                <ArrowRight className="w-6 h-6 relative z-10" strokeWidth={2} />
              </div>
            </motion.button>
          </TransitionLink>

          <a href="/cv/CV_Rifki.pdf" download="CV_Rifki.pdf">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer relative inline-flex items-center justify-center gap-3 px-8 h-[72px] md:h-[80px] bg-[#111111] border border-white/10 rounded-[14px] text-white hover:bg-white/5 hover:border-white/30 transition-all duration-500 shadow-xl"
            >
              <span className="text-sm md:text-base font-bold tracking-widest uppercase">Download CV</span>
              <svg className="w-5 h-5 group-hover:translate-y-1 group-hover:text-[#8ddd8d] transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </motion.button>
          </a>
        </div>

      </div>
    </section>
  );
}