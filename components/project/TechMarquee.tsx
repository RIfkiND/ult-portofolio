"use client";

import { motion } from "framer-motion";

const row1 = [
  "Go / Golang",
  "Node.js",
  "Python",
  "Laravel",
  "Next.js",
  "React",
  "SvelteKit",
  "TypeScript",
  "REST API",
  "WebSocket",
];

const row2 = [
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Nginx",
  "CI / CD",
  "Microservices",
  "Event-Driven",
  "Supabase",
  "Stripe",
  "shadcn/ui",
];

function MarqueeRow({
  items,
  reverse = false,
  speed = 28,
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
}) {
  // Duplicate items so the loop is seamless
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-2 select-none">
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: reverse ? ["0%", "50%"] : ["-50%", "0%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {doubled.map((tech, i) => (
          <span
            key={i}
            className="px-5 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium whitespace-nowrap hover:border-brand/50 hover:text-brand transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="bg-zinc-950 py-14 border-y border-zinc-800/50 overflow-hidden">
      {/* Label */}
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 mb-5">
        <p className="text-zinc-600 text-xs uppercase tracking-[0.2em] font-medium">
          Technologies I Work With
        </p>
      </div>

      {/* Fade masks on left & right */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-zinc-950 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-zinc-950 to-transparent" />

        <div className="flex flex-col gap-4">
          <MarqueeRow items={row1} speed={32} />
          <MarqueeRow items={row2} reverse speed={26} />
        </div>
      </div>
    </section>
  );
}
