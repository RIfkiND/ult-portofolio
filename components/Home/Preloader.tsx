"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";
    
    // Wait for 4.5 seconds to let the user read before fading out
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 4500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        >
          {/* The Paper Letter */}
          <motion.div
            className="w-[90%] max-w-[600px] bg-[#f4f1e1] shadow-[0_30px_60px_rgba(0,0,0,0.5)] p-10 md:p-14 flex flex-col text-[#222222] font-serif relative"
            initial={{ y: 50, opacity: 0, rotate: 0 }}
            animate={{ y: 0, opacity: 1, rotate: 1.5 }}
            exit={{ y: -50, opacity: 0, rotate: -1.5 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex justify-between items-start mb-8">
              <h1 className="text-2xl md:text-3xl font-normal tracking-tight">The Art of Engineering</h1>
              <p className="text-sm text-gray-600 mt-2">March 5, 2026</p>
            </div>
            
            <div className="space-y-4 text-sm md:text-[15px] leading-[1.8] text-[#333333]">
              <p>Have you ever felt like you weren't building up to your full potential?</p>
              
              <p>For a long time, I did.</p>
              
              <p>
                I felt like the systems I was building were far from what I knew I was capable of. There was always this little voice I couldn't fully mute telling me that I could push myself significantly further technically than I had been.
              </p>
              
              <p>
                I wasn't able to break the cycle until I stopped waiting for the right architecture to come along, and instead focused on personal projects that I knew would challenge me. Ones I had been putting off for ages, that helped me rediscover my love for designing and building robust backends again.
              </p>
              
              <p>
                That passion, plus the work that led me here, is available below.
              </p>
              
              <p>
                I'm at a stage of my career where I'm looking to work with those who are more interested in where I'm going, not where I've been.
              </p>
              
              <p>
                You're trying to build the best product of your career, and so am I.
              </p>
            </div>

            <div className="mt-10">
              <p className="text-sm mb-4">Warmly,</p>
              {/* Cursive style signature */}
              <p className="text-3xl md:text-4xl italic tracking-widest font-light" style={{ fontFamily: "'Brush Script MT', cursive, serif" }}>
                Rifki
              </p>
            </div>
            
            {/* Subtle paper texture overlay (using pure CSS gradient noise simulation for performance) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply" 
              style={{ 
                backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" 
              }} 
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
