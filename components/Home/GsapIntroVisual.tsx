"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Database, Server, Cpu, Cloud, Code2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { name: "High-Performance APIs", icon: <Server className="w-5 h-5" />, color: "border-[#8ddd8d]/40 text-[#8ddd8d]", bg: "bg-[#8ddd8d]/10", position: "top-[10%] left-[5%] md:left-[10%]" },
  { name: "Distributed Systems", icon: <Cpu className="w-5 h-5" />, color: "border-blue-500/40 text-blue-400", bg: "bg-blue-500/10", position: "top-[25%] right-[5%] md:right-[5%]" },
  { name: "Clean Architecture", icon: <Code2 className="w-6 h-6" />, color: "border-white/20 text-white", bg: "bg-white/5", position: "top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10" },
  { name: "Cloud Infrastructure", icon: <Cloud className="w-5 h-5" />, color: "border-purple-500/40 text-purple-400", bg: "bg-purple-500/10", position: "bottom-[25%] left-[0%] md:left-[5%]" },
  { name: "Database Optimization", icon: <Database className="w-5 h-5" />, color: "border-yellow-500/40 text-yellow-400", bg: "bg-yellow-500/10", position: "bottom-[10%] right-[5%] md:right-[15%]" },
];

export default function GsapIntroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = cardsRef.current.filter(Boolean);

    // Initial scatter animation on scroll
    gsap.fromTo(
      cards,
      { 
        y: 80, 
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        onComplete: () => {
          // Continuous floating animation
          cards.forEach((card, i) => {
            gsap.to(card, {
              y: `+=${i % 2 === 0 ? 15 : -15}`,
              x: `+=${i % 2 === 0 ? -10 : 10}`,
              duration: gsap.utils.random(3, 5),
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut",
              delay: gsap.utils.random(0, 1),
            });
          });
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
      {/* Central glowing orb */}
      <div className="absolute w-48 h-48 md:w-64 md:h-64 bg-[#8ddd8d]/10 rounded-full blur-[80px] animate-pulse pointer-events-none" />
      
      {techStack.map((tech, idx) => (
        <div
          key={idx}
          className={`absolute ${tech.position}`}
        >
          <div 
            ref={(el) => {
              cardsRef.current[idx] = el;
            }}
          >
            <div className={`flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 backdrop-blur-md border ${tech.color} ${tech.bg} rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-105 hover:bg-white/10 transition-all duration-300 cursor-default`}>
              {tech.icon}
              <span className="font-medium md:font-semibold tracking-wide whitespace-nowrap text-sm md:text-base">{tech.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
