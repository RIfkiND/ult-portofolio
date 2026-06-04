"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ArrowUp, Plus, ArrowLeft } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

interface CapabilitiesSectionProps {
  id?: string;
}

const MicroservicesShape = ({ isActive }: { isActive: boolean }) => {
  const container = useRef<HTMLDivElement>(null);
  const dots = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    gsap.to(container.current, {
      rotation: isActive ? 90 : 0,
      scale: isActive ? 1.05 : 1,
      duration: 0.7,
      ease: "back.out(1.2)"
    });
    
    gsap.to(dots.current[0], { y: isActive ? -12 : 0, duration: 0.6, ease: "power2.out" });
    gsap.to(dots.current[1], { x: isActive ? 12 : 0, y: isActive ? 8 : 0, duration: 0.6, ease: "power2.out" });
    gsap.to(dots.current[2], { x: isActive ? -12 : 0, y: isActive ? 8 : 0, duration: 0.6, ease: "power2.out" });
  }, [isActive]);

  return (
    <div className="w-28 h-28 flex items-center justify-center">
       <div ref={container} className="w-24 h-24 bg-[#ffb6ff] rounded-full flex items-center justify-center relative shadow-lg">
          <div ref={el => { dots.current[0] = el; }} className="absolute top-4 w-6 h-6 bg-black rounded-full shadow-md" />
          <div ref={el => { dots.current[1] = el; }} className="absolute bottom-4 right-4 w-6 h-6 bg-black rounded-full shadow-md" />
          <div ref={el => { dots.current[2] = el; }} className="absolute bottom-4 left-4 w-6 h-6 bg-black rounded-full shadow-md" />
       </div>
    </div>
  );
};

const RestShape = ({ isActive }: { isActive: boolean }) => {
  const dot = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(dot.current, {
      x: isActive ? 52 : 0, // moves to the right pill
      duration: 0.6,
      ease: "power2.out"
    });
  }, [isActive]);
  return (
    <div className="w-28 h-28 flex items-center justify-center gap-3 relative">
      <div className="w-10 h-24 bg-[#ffb6ff] rounded-full" />
      <div className="w-10 h-24 bg-[#ffb6ff] rounded-full" />
      <div ref={dot} className="absolute left-[34px] top-[36px] w-10 h-10 bg-black rounded-full flex items-center justify-center text-white z-10 shadow-lg">
        <ArrowRight className="w-5 h-5" />
      </div>
    </div>
  );
};

const AuthShape = ({ isActive }: { isActive: boolean }) => {
  const dots = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    gsap.to(dots.current, {
      y: isActive ? -52 : 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.5)"
    });
  }, [isActive]);
  return (
    <div className="w-28 h-28 flex items-center justify-center gap-2">
      {['bg-[#8ddd8d]', 'bg-[#f4e04d]', 'bg-[#6b66ff]'].map((bg, i) => (
        <div key={i} className={`w-8 h-24 ${bg} rounded-full flex items-end justify-center p-1.5`}>
          <div ref={el => { dots.current[i] = el; }} className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white shadow-md">
            <ArrowUp className="w-3 h-3" />
          </div>
        </div>
      ))}
    </div>
  );
};

const WebSocketsShape = ({ isActive }: { isActive: boolean }) => {
  const dot = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(dot.current, {
      y: isActive ? -48 : 0,
      duration: 0.6,
      ease: "power2.out"
    });
  }, [isActive]);
  return (
    <div className="w-28 h-28 flex items-center justify-center">
      <div className="w-12 h-[104px] bg-[#6b66ff] rounded-full flex items-end justify-center p-2 transform rotate-45 relative">
        <div ref={dot} className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white transform -rotate-45 shadow-lg">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

const DatabaseShape = ({ isActive }: { isActive: boolean }) => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(container.current, {
      rotation: isActive ? 45 : -45, // pivots on hover
      duration: 0.7,
      ease: "back.out(1.2)"
    });
  }, [isActive]);
  return (
    <div className="w-28 h-28 flex items-center justify-center">
      <div ref={container} className="w-12 h-[104px] bg-[#f4e04d] rounded-full flex items-end justify-center p-2 transform -rotate-45">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white transform rotate-45 shadow-lg">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

const AutomationShape = ({ isActive }: { isActive: boolean }) => {
  const plus = useRef<SVGSVGElement>(null);
  const outer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(plus.current, {
      rotation: isActive ? 90 : 0,
      duration: 0.6,
      ease: "power2.out"
    });
    gsap.to(outer.current, {
      scale: isActive ? 1.05 : 1,
      duration: 0.6,
      ease: "back.out(1.5)"
    });
  }, [isActive]);
  return (
    <div className="w-28 h-28 flex items-center justify-center">
      <div ref={outer} className="w-28 h-28 bg-[#8ddd8d] rounded-full flex items-center justify-center">
        <div className="w-20 h-20 border-[2px] border-black/20 rounded-full flex items-center justify-center">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shadow-lg">
            <Plus ref={plus} className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FusionShape = ({ isActive }: { isActive: boolean }) => {
  const leftDot = useRef<HTMLDivElement>(null);
  const rightDot = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(leftDot.current, {
      x: isActive ? 12 : 0,
      duration: 0.5,
      ease: "power2.out"
    });
    gsap.to(rightDot.current, {
      x: isActive ? -12 : 0,
      duration: 0.5,
      ease: "power2.out"
    });
  }, [isActive]);
  return (
    <div className="w-28 h-28 flex items-center justify-center">
      <div className="w-[104px] h-12 bg-[#d6ff40] rounded-full flex items-center justify-between px-1">
        <div ref={leftDot} className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white shadow-lg">
          <ArrowRight className="w-4 h-4" />
        </div>
        <div ref={rightDot} className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white shadow-lg">
          <ArrowLeft className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

const ExpansionShape = ({ isActive }: { isActive: boolean }) => {
  const tl = useRef<HTMLDivElement>(null);
  const tr = useRef<HTMLDivElement>(null);
  const bl = useRef<HTMLDivElement>(null);
  const br = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const d = isActive ? 8 : 0;
    gsap.to(tl.current, { x: -d, y: -d, duration: 0.5, ease: "back.out(1.5)" });
    gsap.to(tr.current, { x: d, y: -d, duration: 0.5, ease: "back.out(1.5)" });
    gsap.to(bl.current, { x: -d, y: d, duration: 0.5, ease: "back.out(1.5)" });
    gsap.to(br.current, { x: d, y: d, duration: 0.5, ease: "back.out(1.5)" });
  }, [isActive]);
  return (
    <div className="w-28 h-28 flex items-center justify-center">
      <div className="relative w-24 h-24 flex flex-wrap items-center justify-center gap-1 bg-[#a3b3a3] rounded-[32px] p-1.5">
        <div ref={tl} className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white shadow-lg transform -rotate-45">
          <ArrowUp className="w-4 h-4" />
        </div>
        <div ref={tr} className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white shadow-lg transform rotate-45">
          <ArrowUp className="w-4 h-4" />
        </div>
        <div ref={bl} className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white shadow-lg transform -rotate-[135deg]">
          <ArrowUp className="w-4 h-4" />
        </div>
        <div ref={br} className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white shadow-lg transform rotate-[135deg]">
          <ArrowUp className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

const TakeActionShape = ({ isActive }: { isActive: boolean }) => {
  const arrow = useRef<SVGSVGElement>(null);
  useEffect(() => {
    gsap.to(arrow.current, {
      x: isActive ? 15 : 0,
      scale: isActive ? 1.1 : 1,
      duration: 0.5,
      ease: "power2.out"
    });
  }, [isActive]);
  return (
    <div className="w-28 h-28 flex items-center justify-center">
      <ArrowRight ref={arrow} className="w-16 h-16 text-[#8ddd8d]" strokeWidth={2} />
    </div>
  );
};

const capabilities = [
  { name: "Microservices", Component: MicroservicesShape },
  { name: "REST & gRPC", Component: RestShape },
  { name: "Authentication", Component: AuthShape },
  { name: "WebSockets", Component: WebSocketsShape },
  { name: "Database Design", Component: DatabaseShape },
  { name: "Automation", Component: AutomationShape },
  { name: "Fusion", Component: FusionShape },
  { name: "Expansion", Component: ExpansionShape },
  { name: "Take Action", Component: TakeActionShape },
];

export default function CapabilitiesSection({ id }: CapabilitiesSectionProps) {
  const [activeCap, setActiveCap] = useState<number | null>(null);

  return (
    <section
      id={id}
      className="w-full py-32 px-6 md:px-10 lg:px-16 xl:px-20 bg-primary"
    >
      <div className="w-full flex flex-col xl:flex-row justify-between gap-16 items-start">
        {/* Left Text Column */}
        <div className="w-full xl:w-[30%] space-y-8 xl:sticky xl:top-40">
          <div className="space-y-6">
            <p className="text-[#8ddd8d] text-sm tracking-[0.2em] uppercase font-semibold">
              Creativity & Business
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif leading-[1.1] text-white">
              An architecture in line with your development goals
            </h2>
            <p className="text-white/50 text-base md:text-lg font-light leading-relaxed max-w-md">
              Every system is unique, but all are built step by step. Our
              solutions adjust to your development phase to accompany your
              ambitions with finesse.
            </p>
          </div>

          <div className="pt-4">
            <Link href="mailto:rifkinauvaldzaki08@gmail.com">
              <button className="group flex items-center justify-between gap-4 px-6 py-3 rounded-xl border border-white/20 bg-transparent hover:bg-white/5 transition-colors">
                <span className="text-white/90 text-sm font-light tracking-wide">
                  Let&apos;s talk visions
                </span>
                <ArrowRight className="w-4 h-4 text-white/90 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Grid Column */}
        <div className="w-full xl:w-[65%] grid grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap, idx) => {
            const isActive = activeCap === idx;
            return (
              <motion.button
                key={cap.name}
                onMouseEnter={() => setActiveCap(idx)}
                onMouseLeave={() => setActiveCap(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative p-6 rounded-[12px] transition-all duration-500 flex-col items-center justify-center text-center gap-6 min-h-[240px] w-full
                  ${
                    isActive
                      ? "bg-white/5 border border-white/10 shadow-[0_4px_30px_rgba(255,255,255,0.02)]"
                      : "bg-transparent border border-white/5 hover:bg-white/5"
                  }
                  ${cap.name === "Take Action" ? "hidden lg:flex" : "flex"}
                `}
              >
                <div className="flex-1 flex items-center justify-center">
                   <cap.Component isActive={isActive} />
                </div>
                <h3 className="text-lg font-medium text-white/90">
                  {cap.name}
                </h3>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

