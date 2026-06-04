"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface ProcessSectionProps {
  id?: string;
}

const processSteps = [
  {
    number: "01",
    title: "System Architecture Design",
    description:
      "We start by designing a scalable, cloud-native foundation tailored to your business needs, ensuring high availability and fault tolerance from day one.",
  },
  {
    number: "02",
    title: "Database Modeling",
    description:
      "Crafting optimized schemas for SQL or NoSQL databases to guarantee lightning-fast queries, data integrity, and seamless horizontal scaling.",
  },
  {
    number: "03",
    title: "API Development & Deployment",
    description:
      "Building robust RESTful or GraphQL APIs with modern security standards, fully automated testing, and zero-downtime CI/CD pipelines.",
  },
];

export default function ProcessSection({ id }: ProcessSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id={id}
      className="w-full py-32 px-6 md:px-10 lg:px-16 xl:px-20 bg-primary"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 min-h-[400px] items-start lg:items-center">
        {/* Left Column - Steps */}
        <div className="lg:col-span-3 xl:col-span-2 flex flex-row lg:flex-col gap-3">
          {processSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`group relative overflow-hidden w-14 h-16 md:w-16 md:h-16 rounded-[12px] border flex items-center justify-center text-xl md:text-2xl font-serif transition-colors duration-300 ${
                  isActive
                    ? "border-transparent text-black"
                    : "bg-transparent border-white/5 text-white/30 hover:text-white/60"
                }`}
              >
                {/* Background slider */}
                <div className={`absolute inset-0 bg-[#8ddd8d] transition-transform duration-500 ease-out ${isActive ? "translate-x-0" : "-translate-x-full"}`} />
                <span className="relative z-10">{idx + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Right Column - Content */}
        <div className="lg:col-span-9 xl:col-span-10 flex flex-col justify-center">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] text-white max-w-2xl">
              {processSteps[activeStep].title}
            </h2>

            <p className="text-white/50 text-base lg:text-lg font-light leading-relaxed max-w-xl">
              {processSteps[activeStep].description}
            </p>

            <div className="pt-8">
              <button className="flex items-center justify-between w-full max-w-md px-6 py-4 rounded-xl border border-white/5 bg-transparent hover:bg-white/5 transition-colors group">
                <span className="text-white/80 font-light text-sm md:text-base">
                  What are the challenges of this step?
                </span>
                <div className="p-2 rounded-lg bg-black/40 border border-white/5 group-hover:border-white/10 transition-colors">
                  <ArrowDown className="w-4 h-4 text-white/80" />
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

