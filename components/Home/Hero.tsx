"use client";

import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero(id: { id: string }) {
  return (
    <motion.section
      id={id.id}
      className="w-full min-h-screen relative font-sans scroll-mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 min-h-[80vh] items-center relative">
          {/* Left Side - Image */}
          <motion.div
            className="flex flex-col items-center justify-center lg:justify-end lg:pr-16 relative"
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-[300px] h-[500px] lg:w-[350px] lg:h-[550px] rounded-[150px] overflow-hidden shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <Image
                src="/photos/rifki-profile.jpg"
                alt="Profile"
                fill
                className="object-cover rounded-[150px]"
                priority
              />
            </motion.div>
            {/* Social links as buttons */}
            <div className="flex gap-4 mt-6">
              <a href="https://github.com/RIfkiND" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <button className="rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 p-2 transition-colors">
                  <Github className="w-7 h-7 text-white/80" />
                </button>
              </a>
              <a href="https://www.linkedin.com/in/rifki-nd" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <button className="rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 p-2 transition-colors">
                  <Linkedin className="w-7 h-7 text-white/80" />
                </button>
              </a>
              <a href="mailto:rifkinauvaldzaki08@gmail.com" aria-label="Email">
                <button className="rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 p-2 transition-colors">
                  <Mail className="w-7 h-7 text-white/80" />
                </button>
              </a>
            </div>
          </motion.div>

          {/* Vertical divider line - taller */}
          <motion.div
            className="hidden lg:block absolute left-1/2 top-[-5%] bottom-[-5%] w-px bg-white/20 -translate-x-1/2 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Right Side - Content */}
          <motion.div
            className="flex flex-col justify-center lg:pl-16 space-y-4 md:space-y-6"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >

            {/* Top tagline */}
            <motion.p
              className="text-[#8ddd8d] text-xs lg:text-sm tracking-[0.2em] uppercase font-semibold"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              API & Integration Specialist
            </motion.p>

            {/* Main heading */}
            <motion.h1
              className="text-5xl lg:text-6xl xl:text-[5.5rem] font-serif font-normal text-white leading-[1.05] tracking-tight"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Architecting<br />seamless<br />integrations
            </motion.h1>

            {/* Bottom content */}
            <motion.div
              className="flex flex-col sm:flex-row gap-8 sm:gap-12 pt-6 md:pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Left description */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1 }}
              >
                <p className="text-white text-base lg:text-lg leading-relaxed font-light">
                  Specialized in high-performance APIs.<br />Microservices & Cloud architecture.
                </p>
                <motion.a
                  href="/cv/CV_Rifki.pdf"
                  download
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-lg bg-[#7ec47e] text-black font-semibold shadow-md hover:bg-[#6bb06b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7ec47e]/60 focus:ring-offset-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-5-5m5 5l5-5" />
                  </svg>
                  Download CV
                </motion.a>
              </motion.div>

              {/* Right description */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.2 }}
              >
                <p className="text-white/60 text-sm lg:text-base leading-relaxed font-light">
                  Let’s connect your systems seamlessly.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
