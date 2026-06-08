"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";

interface FaqSectionProps {
  id?: string;
}

const faqItems = [
  {
    question: "Do meetings with you include coffee?",
    answer:
      "I believe productive meetings start with a warm atmosphere. While I can't guarantee coffee every time if we are remote, I do ensure every session is collaborative, efficient, and focused on delivering real value.",
  },
  {
    question: "What is your main engineering focus?",
    answer:
      "My primary focus is backend architecture and systems engineering. I enjoy designing databases, building high-performance APIs in Go or Node, and managing infrastructure using modern DevOps practices.",
  },
  {
    question: "Where can I find examples of your work?",
    answer:
      "You can explore my 'Project' page to see real-world examples of systems I've built. My GitHub also contains various open-source contributions and personal experiments.",
  },
  {
    question: "What is your approach to learning new tech?",
    answer:
      "I am a lifelong learner. I usually start by reading the official documentation, building a small prototype to understand the edge cases, and then applying it to a real-world problem to solidify my understanding.",
  },
  {
    question: "How can we start working together?",
    answer:
      "The first step is always a quick chat—either via email or a discovery call. We can discuss your current system, your pain points, and how my skill set can help you achieve your goals.",
  },
];

export default function FaqSection({ id }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id={id}
      className="w-full py-32 px-6 md:px-10 lg:px-16 xl:px-20 bg-primary"
    >
      <div className="max-w-full mx-auto">
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

