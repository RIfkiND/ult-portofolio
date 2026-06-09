"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EducationSection({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full py-24 px-4 md:px-6 lg:px-8 bg-primary">
      <div className="w-full max-w-[1800px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-16 text-center">
          My Educational Journey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Self Learn (White Style) */}
          <div className="group flex flex-col">
            <div className="relative w-full h-[600px] lg:h-[750px] xl:h-[850px] bg-white rounded-[20px] overflow-hidden cursor-pointer">
              {/* Front view (Text only) */}
              <div className="absolute inset-0 flex flex-col justify-center p-8 lg:p-12 bg-white">
                <div className="text-center mb-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <h4 className="text-2xl font-bold uppercase tracking-widest text-black mb-2">Self</h4>
                  <h4 className="text-2xl font-bold uppercase tracking-widest text-black">Learn</h4>
                </div>
                <p className="text-black/80 text-sm lg:text-base leading-relaxed text-center">
                  Continuously exploring advanced web technologies and backend systems outside of my formal school curriculum to build <span className="font-bold text-black">real-world, scalable applications.</span>
                </p>
              </div>
            </div>
            
            {/* Meta footer */}
            <div className="flex items-center justify-between text-white/30 text-xs mt-6">
              <span>Self-Taught</span>
              <div className="flex-1 border-t border-white/10 mx-4" />
              <span>2022 - Ongoing</span>
            </div>
          </div>

          {/* Card 2: SMKN 1 Ciamis (Blob Style) */}
          <div className="group flex flex-col">
            <div className="relative w-full h-[600px] lg:h-[750px] xl:h-[850px] bg-[#1a1a1a] rounded-[20px] overflow-hidden cursor-pointer">
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-40 blur-[2px] transition-transform duration-700 group-hover:scale-105">
                <Image
                  src="/images/education/smk.png"
                  alt="SMKN 1 Ciamis"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent z-0" />

              {/* Top Left Green Blob */}
              <div 
                className="absolute -top-16 -left-16 w-64 h-64 bg-[#c4f092] z-10 transition-transform duration-700 group-hover:scale-110" 
                style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
              />

              {/* Bottom Blue Blob */}
              <div 
                className="absolute -bottom-20 -right-20 w-[120%] h-80 bg-[#3b5cf0] z-10 transition-transform duration-700 group-hover:scale-105"
                style={{ borderRadius: '50% 50% 0 0 / 20% 40% 0 0' }}
              />

              {/* Content */}
              <div className="absolute bottom-8 right-8 z-20 text-right group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white font-bold text-2xl lg:text-3xl mb-1">SMKN 1</h3>
                <h3 className="text-white font-bold text-2xl lg:text-3xl">Ciamis</h3>
              </div>

              {/* Hover overlay that slides up */}
              <div className="absolute inset-0 bg-[#eff4ff] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1] flex flex-col items-center justify-between p-10 lg:p-14 z-30">
                
                {/* Logo Section */}
                <div className="flex-1 flex flex-col items-center justify-center w-full">
                  <div className="relative w-24 md:w-32 h-24 md:h-32 mb-4">
                    <Image 
                      src="/images/education/smk.png" 
                      alt="SMKN 1 Ciamis Logo" 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[#3b5cf0] font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
                    SMKN 1 Ciamis
                  </span>
                </div>

                {/* Text Section */}
                <div className="w-full">
                  <p className="text-[#333333] text-sm lg:text-[15px] leading-relaxed text-center font-medium">
                    Built a strong foundation in software engineering, networking, and core programming principles to <span className="font-bold text-black">kickstart my technical journey.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Meta footer */}
            <div className="flex items-center justify-between text-white/30 text-xs mt-6">
              <span>Vocational School</span>
              <div className="flex-1 border-t border-white/10 mx-4" />
              <span>2022 - 2025</span>
            </div>
          </div>

          {/* Card 3: Telkom University (Soft Red Style) */}
          <div className="group flex flex-col">
            <div className="relative w-full h-[600px] lg:h-[750px] xl:h-[850px] bg-[#1a0505] rounded-[20px] overflow-hidden cursor-pointer border border-red-900/20">
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-40 transition-transform duration-1000 group-hover:scale-105">
                <Image
                  src="/images/education/tult-telu.png"
                  alt="Telkom University"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Concentric Lines Background (Tinted Red) */}
              <div 
                className="absolute inset-0 opacity-20 transition-transform duration-1000 group-hover:scale-110 z-0"
                style={{
                  backgroundImage: 'repeating-radial-gradient(circle at 70% 30%, transparent 0, transparent 4px, rgba(220, 38, 38, 0.1) 4px, rgba(220, 38, 38, 0.1) 5px)',
                  backgroundSize: '100% 100%'
                }}
              />
              
              {/* Subtle gradient overlay to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0505] via-[#1a0505]/60 to-transparent z-0" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10 group-hover:opacity-0 transition-opacity duration-300">
                <div className="flex items-center text-5xl lg:text-6xl font-light tracking-tighter text-white mb-2 transition-transform duration-500 group-hover:-translate-y-2 drop-shadow-xl">
                  TEL<span className="text-white font-bold drop-shadow-md">KOM</span>
                </div>
                <h3 className="text-white/80 tracking-[0.3em] text-sm lg:text-base font-medium uppercase transition-all duration-500 group-hover:tracking-[0.4em]">
                  University
                </h3>
              </div>

              {/* Hover overlay that slides up */}
              <div className="absolute inset-0 bg-[#fef2f2] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1] flex flex-col items-center justify-between p-10 lg:p-14 z-30">
                
                {/* Logo Section */}
                <div className="flex-1 flex flex-col items-center justify-center w-full">
                  <div className="relative w-32 md:w-40 h-20 mb-2">
                    <Image 
                      src="/images/education/telkom.png" 
                      alt="Telkom University Logo" 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-black font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
                    Telkom University
                  </span>
                </div>

                {/* Text Section */}
                <div className="w-full">
                  <p className="text-[#333333] text-sm lg:text-[15px] leading-relaxed text-center font-medium">
                    Majoring in Software Engineering in a highly entrepreneurial ecosystem. Beyond just writing code, I am learning how to build digital products from scratch, <span className="font-bold text-black">innovate, and turn technical ideas into real businesses.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Meta footer */}
            <div className="flex items-center justify-between text-white/30 text-xs mt-6">
              <span>Higher Education</span>
              <div className="flex-1 border-t border-white/10 mx-4" />
              <span>2026 - Present</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
