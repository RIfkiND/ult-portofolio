"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TransitionLink } from "@/components/ui/TransitionLink";

export default function ProjectCta() {
  return (
    <section className="bg-primary text-white py-40 px-6 lg:px-8 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto flex flex-col items-center w-full"
      >
        <span className="text-[#8ddd8d] text-sm md:text-lg font-medium tracking-wide mb-8">
          Our web offer: Catch me online!
        </span>
        
        <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] font-serif text-[#f5f5f5] mb-16 leading-[1.1] tracking-tight">
          Schedule an appointment and let's <br className="hidden md:block" />
          leave our mark <br className="hidden md:block" />
          on the web with your presence.
        </h2>

        <TransitionLink href="/contact" className="block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-6 px-8 py-4 rounded-[14px] border border-white/20 hover:border-white/40 transition-colors bg-transparent text-white/80 hover:text-white cursor-pointer"
          >
            <span className="text-base md:text-xl font-medium">Let's make an appointment</span>
            <div className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center group-hover:bg-[#8ddd8d] group-hover:border-transparent group-hover:text-black transition-all duration-300">
              <ArrowRight className="w-5 h-5" />
            </div>
          </motion.button>
        </TransitionLink>
      </motion.div>
    </section>
  );
}

