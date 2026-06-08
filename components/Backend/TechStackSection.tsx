"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TechStackSectionProps {
  id?: string;
}

function ScrollRevealText({ text }: { text: string }) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end center"],
  });

  const words = text.split(" ");

  return (
    <h2
      ref={containerRef}
      className="text-5xl md:text-7xl lg:text-[6rem] font-serif leading-[1.1] text-white flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-x-5 md:gap-y-4"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
        return (
          <motion.span key={i} style={{ opacity }}>
            {word}
          </motion.span>
        );
      })}
    </h2>
  );
}

const floatingTags = [
  { label: "Node.js", y: [0, -20, 0], rotate: [0, 5, 0], duration: 6, delay: 0, pos: "top-[20%] left-[10%]" },
  { label: "Go / Golang", y: [0, 25, 0], rotate: [0, -3, 0], duration: 7, delay: 1, pos: "top-[30%] right-[15%]" },
  { label: "PostgreSQL", y: [0, -15, 0], rotate: [0, 2, 0], duration: 5, delay: 2, pos: "bottom-[25%] left-[20%]" },
  { label: "Cloud", y: [0, 30, 0], rotate: [0, -5, 0], duration: 8, delay: 0.5, pos: "bottom-[20%] right-[25%]" },
  { label: "Redis", y: [0, -25, 0], rotate: [0, 4, 0], duration: 6.5, delay: 1.5, pos: "top-[60%] left-[5%]" },
];

export default function TechStackSection({ id }: TechStackSectionProps) {
  return (
    <section
      id={id}
      className="w-full py-40 px-6 lg:px-12 overflow-hidden relative"
    >
      <div className="max-w-[1400px] mx-auto text-center relative z-10 px-4">
        <ScrollRevealText text="I master the subtleties of diverse ecosystems and activate creative solutions" />
      </div>

      {/* Floating Tags */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingTags.map((tag) => (
          <motion.div
            key={tag.label}
            animate={{ y: tag.y, rotate: tag.rotate }}
            transition={{
              duration: tag.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: tag.delay,
            }}
            className={`absolute ${tag.pos} px-6 py-3 rounded-full bg-zinc-900 border border-white/5 text-white/40 font-mono text-sm shadow-xl`}
          >
            {tag.label}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
