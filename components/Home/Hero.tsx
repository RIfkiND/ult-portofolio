"use client";

import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero(id: { id: string }) {
  return (
    <motion.section
      className="w-full min-h-screen relative font-prata"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-6 lg:px-8 py-20">
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
            className="flex flex-col justify-center lg:pl-16 space-y-8"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Top tagline */}
            <motion.p
              className="text-[#7ec47e] text-sm lg:text-base tracking-wide"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Backend & DevOps Engineer
            </motion.p>

            {/* Main heading */}
            <motion.h1
              className="text-6xl lg:text-7xl xl:text-8xl font-normal text-white leading-[0.95] tracking-tight"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Delivering scalable,<br />reliable systems
            </motion.h1>

            {/* Bottom content */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8"
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
                <p className="text-white text-base lg:text-lg leading-relaxed">
                  Cloud-native backend specialist.<br />Automation, APIs, CI/CD.
                </p>
                <motion.a
                  href="/cv.pdf"
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
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  Let’s build robust, efficient solutions together.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
