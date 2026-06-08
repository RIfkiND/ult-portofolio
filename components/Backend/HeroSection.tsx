"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TransitionLink } from "@/components/ui/TransitionLink";

interface HeroSectionProps {
  id?: string;
}

export default function HeroSection({ id }: HeroSectionProps) {
  return (
    <section
      id={id}
      className="relative w-full pt-40 pb-20 px-6 md:px-10 lg:px-16 xl:px-20 flex flex-col items-center justify-center min-h-[70vh]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto text-center space-y-8"
      >
        <p className="text-[#8ddd8d] text-sm md:text-base tracking-[0.2em] uppercase font-semibold">
          About Me
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif font-normal text-white leading-[1.05] tracking-tight text-balance">
          Hi, I'm Rifki. A Software Engineer and Api Specialist.
        </h1>
        <div className="pt-8">
          <TransitionLink href="/contact" className="cursor-pointer">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer relative inline-flex items-center justify-between gap-8 pl-8 pr-3 py-3 bg-transparent border border-white/20 rounded-[14px] text-white hover:border-white/40 transition-all duration-500 overflow-hidden"
            >
              <span className="text-base md:text-xl font-medium">Get in touch and let's build something great.</span>
              <div 
                className="relative overflow-hidden w-12 h-12 md:w-14 md:h-14 rounded-[10px] bg-transparent border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:text-black group-hover:border-transparent text-white/60"
              >
                <div className="absolute inset-0 bg-[#8ddd8d] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                <ArrowRight className="w-6 h-6 relative z-10" strokeWidth={2} />
              </div>
            </motion.button>
          </TransitionLink>
        </div>
      </motion.div>
    </section>
  );
}
