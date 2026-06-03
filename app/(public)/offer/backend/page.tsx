"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown, Database, Server, Shield, Network, Zap, Workflow } from "lucide-react";
import Link from "next/link";

function ScrollRevealText({ text }: { text: string }) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end center"]
  });

  const words = text.split(" ");
  
  return (
    <h2 ref={containerRef} className="text-5xl md:text-7xl lg:text-[6rem] font-serif leading-[1.1] text-white flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-x-5 md:gap-y-4">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
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

export default function BackendOfferPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeCap, setActiveCap] = useState<number | null>(0);

  const processSteps = [
    {
      number: "01",
      title: "System Architecture Design",
      description: "We start by designing a scalable, cloud-native foundation tailored to your business needs, ensuring high availability and fault tolerance from day one.",
    },
    {
      number: "02",
      title: "Database Modeling",
      description: "Crafting optimized schemas for SQL or NoSQL databases to guarantee lightning-fast queries, data integrity, and seamless horizontal scaling.",
    },
    {
      number: "03",
      title: "API Development & Deployment",
      description: "Building robust RESTful or GraphQL APIs with modern security standards, fully automated testing, and zero-downtime CI/CD pipelines.",
    },
  ];

  const capabilities = [
    { name: "Microservices", icon: Network, color: "bg-[#f4e04d]", text: "text-black" },
    { name: "REST & GraphQL", icon: Server, color: "bg-[#8ddd8d]", text: "text-black" },
    { name: "Authentication", icon: Shield, color: "bg-[#6b66ff]", text: "text-white" },
    { name: "WebSockets", icon: Zap, color: "bg-[#ff6b6b]", text: "text-white" },
    { name: "Database Design", icon: Database, color: "bg-zinc-800", text: "text-white" },
    { name: "Automation", icon: Workflow, color: "bg-zinc-800", text: "text-white" },
  ];

  return (
    <div className="min-h-screen bg-transparent w-full selection:bg-[#8ddd8d] selection:text-black">
      
      {/* 1. Editorial Hero Section */}
      <section className="relative w-full pt-40 pb-20 px-6 md:px-10 lg:px-16 xl:px-20 flex flex-col items-center justify-center min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          <p className="text-[#8ddd8d] text-sm md:text-base tracking-[0.2em] uppercase font-semibold">
            Our Offer: Backend Architecture
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif font-normal text-white leading-[1.05] tracking-tight text-balance">
            Robust architecture is the lever of your success
          </h1>
          <div className="pt-8">
            <Link href="mailto:rifkinauvaldzaki08@gmail.com">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-4 px-8 py-4 bg-transparent border border-white/20 rounded-full text-white hover:bg-white/5 transition-colors"
              >
                <span>Let's talk about your system</span>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. The Process Section */}
      <section className="w-full py-32 px-6 md:px-10 lg:px-16 xl:px-20 bg-[#0a0a0a]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 min-h-[400px] items-start lg:items-center">
          
          {/* Left Column - Steps */}
          <div className="lg:col-span-3 xl:col-span-2 flex flex-row lg:flex-col gap-3">
            {processSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button 
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-14 h-16 md:w-16 md:h-16 rounded-xl border flex items-center justify-center text-xl md:text-2xl font-serif transition-all duration-300 ${
                    isActive 
                      ? "bg-gradient-to-l from-[#214221] to-transparent border-r-[#8ddd8d]/50 border-transparent text-white shadow-[0_4px_20px_rgba(141,221,141,0.15)]" 
                      : "bg-transparent border-white/5 text-white/30 hover:bg-white/5 hover:text-white/60"
                  }`}
                >
                  {idx + 1}
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
                  <span className="text-white/80 font-light text-sm md:text-base">What are the challenges of this step?</span>
                  <div className="p-2 rounded-lg bg-black/40 border border-white/5 group-hover:border-white/10 transition-colors">
                    <ArrowDown className="w-4 h-4 text-white/80" />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Capabilities Grid */}
      <section className="w-full py-32 px-6 md:px-10 lg:px-16 xl:px-20 bg-transparent">
        <div className="w-full flex flex-col xl:flex-row gap-16 items-start">
          
          {/* Left Text Column */}
          <div className="w-full xl:w-[35%] space-y-8 xl:sticky xl:top-40">
            <div className="space-y-6">
              <p className="text-[#8ddd8d] text-sm tracking-[0.2em] uppercase font-semibold">
                Creativity & Business
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif leading-[1.1] text-white">
                An architecture in line with your development goals
              </h2>
              <p className="text-white/50 text-base md:text-lg font-light leading-relaxed max-w-md">
                Every system is unique, but all are built step by step. Our solutions adjust to your development phase to accompany your ambitions with finesse.
              </p>
            </div>
            
            <div className="pt-4">
              <Link href="mailto:rifkinauvaldzaki08@gmail.com">
                <button className="group flex items-center justify-between gap-4 px-6 py-3 rounded-xl border border-white/20 bg-transparent hover:bg-white/5 transition-colors">
                  <span className="text-white/90 text-sm font-light tracking-wide">Let's talk visions</span>
                  <ArrowRight className="w-4 h-4 text-white/90 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Grid Column */}
          <div className="w-full xl:w-[65%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap, idx) => {
              const isActive = activeCap === idx;
              return (
                <motion.button
                  key={cap.name}
                  onClick={() => setActiveCap(idx)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group relative p-6 rounded-[24px] transition-all duration-500 flex flex-col items-center justify-center text-center gap-6 min-h-[220px] w-full
                    ${isActive 
                      ? "bg-[#161616] border-white/10 shadow-[0_0_80px_rgba(141,221,141,0.15)] z-10" 
                      : "bg-[#111111] border-transparent hover:bg-[#131313]"
                    }
                  `}
                >
                  <div className={`w-24 h-24 rounded-full ${cap.color} ${cap.text} flex items-center justify-center transition-transform duration-500 ${isActive ? 'scale-105' : 'group-hover:scale-105'}`}>
                    <cap.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-medium text-white/90">{cap.name}</h3>
                </motion.button>
              );
            })}
          </div>
          
        </div>
      </section>

      {/* 4. Floating Tech Stack Cloud */}
      <section className="w-full py-40 px-6 lg:px-12 bg-zinc-950 overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto text-center relative z-10 px-4">
          <ScrollRevealText text="We master the subtleties of diverse ecosystems and activate creative solutions" />
        </div>

        {/* Floating Tags - Flat Dark Style */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[10%] px-6 py-3 rounded-full bg-zinc-900 border border-white/5 text-white/40 font-mono text-sm shadow-xl"
          >
            Node.js
          </motion.div>
          <motion.div 
            animate={{ y: [0, 25, 0], rotate: [0, -3, 0] }} 
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[30%] right-[15%] px-6 py-3 rounded-full bg-[#111] border border-white/5 text-white/40 font-mono text-sm shadow-xl"
          >
            Go / Golang
          </motion.div>
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[25%] left-[20%] px-6 py-3 rounded-full bg-zinc-900 border border-white/5 text-white/40 font-mono text-sm shadow-xl"
          >
            PostgreSQL
          </motion.div>
          <motion.div 
            animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-[20%] right-[25%] px-6 py-3 rounded-full bg-[#111] border border-white/5 text-white/40 font-mono text-sm shadow-xl"
          >
            AWS / Cloud
          </motion.div>
          <motion.div 
            animate={{ y: [0, -25, 0], rotate: [0, 4, 0] }} 
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-[60%] left-[5%] px-6 py-3 rounded-full bg-[#0a0a0a] border border-white/5 text-white/40 font-mono text-sm shadow-xl"
          >
            Redis
          </motion.div>
        </div>
      </section>

    </div>
  );
}
