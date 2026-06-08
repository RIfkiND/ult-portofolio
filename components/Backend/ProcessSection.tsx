"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

interface ProcessSectionProps {
  id?: string;
}

const processSteps = [
  {
    title: "Understanding the core problem before writing a single line of code",
    description: "I always start by diving deep into the actual requirements. Whether it's a freelance gig or a complex system design, I need to understand the 'why' before I can architect the 'how'.",
    cardTitle: "Why is this step crucial?",
    cardContent: "Jumping straight into code often leads to technical debt. By mapping out the data flow, database schema, and system architecture first, I ensure the foundation is solid."
  },
  {
    title: "Building scalable and clean backend systems",
    description: "My favorite part of the process. I focus on writing clean, maintainable code using frameworks like Laravel, ensuring the APIs are fast, secure, and well-documented.",
    cardTitle: "What drives my development?",
    cardContent: "I prioritize clean architecture, strict typing, and modern RESTful principles. I want my code to be easily readable for the next developer—even if that next developer is just me six months from now."
  },
  {
    title: "Deploying with confidence and monitoring performance",
    description: "A project isn't done when it works on localhost. I take pride in setting up smooth pipelines and deploying robust applications directly to production environments.",
    cardTitle: "What happens after launch?",
    cardContent: "I establish error tracking and server monitoring from day one. Whether I'm managing a VPS or cloud infrastructure, I ensure the application remains stable and performs flawlessly under load."
  }
];

export default function ProcessSection({ id }: ProcessSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id={id}
      className="w-full py-32 px-6 md:px-10 lg:px-16 xl:px-20 bg-primary flex justify-center"
    >
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
        
        {/* Left Column - Steps Nav */}
        <div className="flex flex-row md:flex-col gap-3 shrink-0 pt-2">
          {processSteps.map((_, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`relative w-14 h-16 md:w-16 md:h-16 rounded-xl border flex items-center justify-center text-xl md:text-2xl font-serif transition-all duration-300 overflow-hidden ${
                  isActive
                    ? "border-white/10 text-white"
                    : "bg-transparent border-white/5 text-white/30 hover:text-white/50"
                }`}
              >
                {/* Active subtle background highlight */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#8ddd8d]/10 opacity-100" />
                )}
                
                <span className="relative z-10">{idx + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Right Column - Content */}
        <div className="flex-1 max-w-2xl relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Header Texts */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-medium leading-[1.2] text-white">
                  {processSteps[activeStep].title}
                </h2>
                <p className="text-white/40 text-sm md:text-base font-light leading-relaxed">
                  {processSteps[activeStep].description}
                </p>
              </div>

              {/* Glowing Card */}
              <div className="relative group overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8">
                {/* Glowing right edge */}
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#8ddd8d]/40 to-transparent opacity-80 pointer-events-none" />
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-40 h-full bg-[#8ddd8d] blur-[80px] opacity-20 pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-white font-medium text-base md:text-lg">
                      {processSteps[activeStep].cardTitle}
                    </h3>
                    <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center">
                      <ArrowUp className="w-4 h-4 text-white/70" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <p className="text-white/50 text-sm leading-relaxed pr-8 md:pr-12">
                    {processSteps[activeStep].cardContent}
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

