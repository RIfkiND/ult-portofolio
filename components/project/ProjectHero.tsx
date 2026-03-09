"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function ProjectHero() {
  return (
    <section className="relative bg-zinc-950 overflow-hidden pt-10 pb-24 px-6 lg:px-8 border-b border-zinc-800/60">
      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          {/* Left — heading */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-brand animate-pulse" />
              <span className="text-brand text-xs font-medium tracking-[0.2em] uppercase">
                Portfolio
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight"
              >
                Selected
                <br />
                <span className="text-zinc-500">Work</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="origin-left mt-6 h-px w-full bg-zinc-800"
            />
          </div>

          {/* Right — description + CTA */}
          <div className="lg:pb-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-zinc-400 text-lg leading-relaxed mb-8"
            >
              A collection of real-world systems I've shipped — from government-scale
              microservices to competition-winning apps. Built with care, deployed with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-6"
            >
              <a
                href="https://github.com/RIfkiND"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 rounded-full text-sm font-semibold hover:bg-brand transition-colors"
              >
                GitHub Profile
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-zinc-600 text-sm">5+ projects shipped</span>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

