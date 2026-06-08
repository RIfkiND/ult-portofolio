"use client";

import { motion } from "framer-motion";
import { ArrowRight, Video, CalendarDays } from "lucide-react";
import { TransitionLink } from "@/components/ui/TransitionLink";

export default function HomeCta() {
  return (
    <section className="w-full bg-[#f5f5f5] pt-32 pb-24 px-6 md:px-12 lg:px-20 text-[#111111] font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* Left Side: Text and Button */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-2xl"
        >
          <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-serif leading-[1.05] tracking-tight mb-6">
            Schedule an <br />
            appointment with <br />
            me today
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-800 mb-10 flex items-center gap-2">
            <span className="underline decoration-2 underline-offset-4 decoration-black/20 hover:decoration-black transition-colors cursor-pointer">
              @Rifki
            </span> 
            <span>💥</span>
          </p>

          <TransitionLink href="/contact" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between gap-6 bg-[#111111] text-white px-6 py-4 rounded-[14px] shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span className="text-sm md:text-base font-medium">Schedule a video conference</span>
              <div className="w-8 h-8 rounded border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-transparent transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.button>
          </TransitionLink>
        </motion.div>

        {/* Right Side: Pill Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 w-full flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[550px] xl:max-w-[650px] aspect-[2/1] bg-[#1a1a1a] rounded-[300px] p-3 md:p-5 flex items-center justify-between shadow-2xl gap-3">
            
            {/* Left Circle */}
            <div className="relative w-1/2 aspect-square bg-[#5264d1] rounded-full overflow-hidden shadow-inner flex items-center justify-center">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, -5, 5, 0] 
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Video className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 text-white/90" strokeWidth={1.5} />
              </motion.div>
            </div>
            
            {/* Right Circle */}
            <div className="relative w-1/2 aspect-square bg-[#8ddd8d] rounded-full overflow-hidden shadow-inner flex items-center justify-center">
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, 5, -5, 0] 
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <CalendarDays className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 text-[#111111]/80" strokeWidth={1.5} />
              </motion.div>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}
