"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Projects shipped", value: 6, suffix: "" },
  { label: "Competition awards", value: 1, suffix: "" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function WorkStats() {
  return (
    <section className="bg-zinc-950 border-t border-zinc-800/50 py-24 px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — editorial text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-brand text-xs uppercase tracking-[0.25em] font-medium mb-6">By the numbers</p>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-8">
              Built with<br />
              <span className="text-zinc-500">intention.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-sm">
              Every project is a system. Every system is a decision.
              These are the outcomes of shipping real software for real users.
            </p>
          </motion.div>

          {/* Right — stat list */}
          <div className="flex flex-col divide-y divide-zinc-800/60">
            {stats.map(({ label, value, suffix }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-between py-8 group"
              >
                <span className="text-zinc-500 text-sm md:text-base group-hover:text-white transition-colors duration-300">
                  {label}
                </span>
                <span className="text-5xl md:text-6xl font-black text-white tabular-nums leading-none">
                  <Counter target={value} suffix={suffix} />
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
