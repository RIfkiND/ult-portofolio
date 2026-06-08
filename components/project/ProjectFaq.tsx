"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";

interface FaqSectionProps {
  id?: string;
}

const faqItems = [
  {
    question: "What do I make in the backend?",
    answer:
      "I architect and develop robust, scalable backend systems ranging from high-performance RESTful and GraphQL APIs to complex microservices. Whether you need a secure authentication flow, real-time data processing, or a highly concurrent distributed system, I build resilient foundations that power modern web applications.",
  },
  {
    question: "What technologies do I use?",
    answer:
      "My core stack revolves around Node.js, TypeScript, Go, and Python for backend logic, paired with robust databases like PostgreSQL, MongoDB, and Redis. For infrastructure and deployment, I leverage Docker, Kubernetes, and AWS/GCP to ensure high availability and seamless scalability.",
  },
  {
    question: "What will I do for your project?",
    answer:
      "I will take full ownership of your backend lifecycle—from initial architecture design and database modeling to API development, optimization, and deployment. I focus on understanding your specific business needs to deliver a tailor-made, performant system that is ready to scale from day one.",
  },
  {
    question: "What are my best practices?",
    answer:
      "I strictly adhere to clean code principles, comprehensive automated testing, and continuous integration/continuous deployment (CI/CD) pipelines. I prioritize security by design, robust error handling, and write clear, maintainable documentation so your team can easily manage the system in the future.",
  },
];

export default function ProjectFaq({ id }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id={id}
      className="relative w-full py-32 px-6 md:px-10 lg:px-16 xl:px-20"
    >
      {/* Right side green gradient */}
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-1/2 -translate-y-1/2 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[1200px] lg:h-[1200px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at right center, rgba(35, 46, 35, 0.8) 0%, transparent 40%)",
        }}
      />

      <div className="max-w-full mx-auto relative z-10">
        {/* FAQ Items */}
        <div className="flex flex-col gap-2">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            const isHovered = hoveredIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-[10px] border transition-all duration-500 bg-transparent ${
                  isOpen
                    ? "border-white/40"
                    : "border-white/10 hover:border-white/30"
                }`}
                style={{
                  backgroundImage: "linear-gradient(to right, transparent 50%, transparent 85%, rgba(141, 221, 141, 0.35) 100%)",
                  backgroundSize: "200% 100%",
                  backgroundPosition: isHovered ? "100% 0" : "0 0",
                  transition: "background-position 0.5s ease-out",
                }}
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full  rounded-[10px] flex items-center justify-between gap-6 px-6 md:px-8 py-5 md:py-6 text-left border-white  "
                >
                  <span className="text-base md:text-xl text-white/90 font-medium leading-snug">
                    {item.question}
                  </span>
                  <div
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`shrink-0 w-12 h-12 rounded-[10px] flex items-center justify-center transition-all duration-300 border ${
                      isHovered
                        ? "bg-transparent scale-110 border-white/40 text-white"
                        : "bg-transparent border-white/20 text-white/50"
                    }`}
                  >
                    {isOpen ? (
                      <ArrowUp className="w-5 h-5" strokeWidth={2} />
                    ) : (
                      <ArrowDown className="w-5 h-5" strokeWidth={2} />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8">
                        <p className="text-white/50 text-sm md:text-base font-light leading-relaxed max-w-2xl">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

