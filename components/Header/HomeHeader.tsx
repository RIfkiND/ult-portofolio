"use client";

import { TransitionLink } from "@/components/ui/TransitionLink";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/Mobile Header";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

export default function HomeHeader() {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideLogo, setHideLogo] = useState(false);
  const [isOfferHovered, setIsOfferHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const isHome = pathname === "/";

  // Prefix hash links with "/" when not on home page
  const navHref = (hash: string) => (isHome ? hash : `/${hash}`);

  const handleMouseEnterOffer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOfferHovered(true);
  };

  const handleMouseLeaveOffer = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOfferHovered(false);
    }, 150);
  };

  useEffect(() => {
    const onScroll = () => {
      setHideLogo(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const isLightMode = pathname === "/contact" || pathname === "/project";
  const isProject = pathname === "/project";

  // The logo and header text should turn dark on light mode pages
  const logoTextColor = isLightMode ? "text-[#111111]" : "text-white";
  const logoDividerColor = isLightMode ? "bg-black/30" : "bg-white/30";
  
  // The container border should be dark on light mode pages
  const containerBorderColor = isLightMode ? "border-black" : "border-white/10";
  const containerBorderSecondary = isLightMode ? "" : "border-[#1c1c1c]";
  
  // Mega menu background
  const megaMenuBg = isLightMode ? "bg-transparent border-black shadow-xl" : "bg-black/40 border-white/20";

  // The header background is white on project page
  const headerBgClass = isProject ? "bg-transparent" : "bg-transparent";

  useEffect(() => {
    // When the route changes, animate the header back in!
    gsap.fromTo("#main-header", 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", clearProps: "all" }
    );
  }, [pathname]);

  return (
    <header id="main-header" className={`w-full z-40 font-sans transition-all duration-300 ${headerBgClass} ${isLightMode ? 'absolute top-0 left-0' : 'md:sticky md:top-0'}`}>
      <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 pt-12">
        <nav className="flex items-center justify-between pb-6 relative"> 
          {/* Logo (always left) */}
          <TransitionLink href="/" className="flex items-center gap-4">
            <motion.div
              className={`${logoTextColor} font-bold text-2xl flex items-center gap-2`}
              animate={{ opacity: hideLogo ? 0 : 1, y: hideLogo ? -30 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-6xl font-black">Rifki</span>
              <div className={`h-8 w-px ${logoDividerColor}`} />
              <div className="flex flex-col text-sm leading-tight">
                <span className="font-bold">Software</span>
                <span className="font-normal">Engineer</span>
              </div>
              <span className="ml-1 text-xs">®</span>
            </motion.div>
          </TransitionLink>

          {/* Desktop nav */}
          <div className={`hidden md:flex items-center gap-4 rounded-md p-2 border ${containerBorderColor} backdrop-blur-md ${containerBorderSecondary}`}>
            <div 
              onMouseEnter={handleMouseEnterOffer}
              onMouseLeave={handleMouseLeaveOffer}
            >
              <button
                type="button"
                className="text-white disabled:text-white transition-colors text-base uppercase tracking-wider font-normal rounded-md px-6 py-3 flex items-center gap-2 cursor-default bg-neutral-800"
              >
                What i Offer
                <motion.div
                  animate={{ rotate: isOfferHovered ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-4 h-4 text-white/70" strokeWidth={2.5} />
                </motion.div>
              </button>
            </div>
            <TransitionLink
              href="/project"
              className={`text-white hover:text-white transition-colors text-base uppercase tracking-wider font-normal rounded-md px-6 py-3 hover:bg-zinc-800/50 ${pathname === "/project" ? "bg-neutral-800/40" : "bg-neutral-800"}`}
            >
              Project
            </TransitionLink>
            <TransitionLink
              href="/about-me"
              className={`text-white hover:text-white transition-colors text-base uppercase tracking-wider font-normal rounded-md px-6 py-3 hover:bg-zinc-800/50 ${pathname === "/about-me" ? "bg-neutral-800/40" : "bg-neutral-800"}`}
            >
              More About Me
            </TransitionLink>
            <div className={`h-6 w-px mx-4 ${isLightMode ? 'bg-black/10' : 'bg-white/10'}`} />
            <TransitionLink href="/contact">
              <AnimatedButton className="mr-1" />
            </TransitionLink>
          </div>
          {/* Mobile nav - hamburger at far right */}
          <div className="md:hidden flex items-center justify-end flex-1 relative z-50">
            <MobileNav visible={menuOpen}>
              <MobileNavHeader>
                <div className="flex items-center justify-end w-full">
                  <MobileNavToggle isOpen={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
                </div>
              </MobileNavHeader>
              <MobileNavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} className="right-0 left-auto translate-x-0 w-56 mt-4">
                <div className="w-full text-white text-base uppercase tracking-wider font-medium border-b border-white/10 pb-4 cursor-default">
                  What I Offer
                </div>
                <TransitionLink 
                  href="/project" 
                  onClick={() => setMenuOpen(false)}
                  className={`w-full text-base uppercase tracking-wider font-medium transition-colors border-b border-white/10 pb-4 block ${pathname === "/project" ? "text-[#8ddd8d]" : "text-white hover:text-[#8ddd8d]"}`}
                >
                  Project
                </TransitionLink>
                <TransitionLink 
                  href="/about-me" 
                  onClick={() => setMenuOpen(false)}
                  className={`w-full text-base uppercase tracking-wider font-medium transition-colors pb-2 block ${pathname === "/about-me" ? "text-[#8ddd8d]" : "text-white hover:text-[#8ddd8d]"}`}
                >
                  More About Me
                </TransitionLink>
              </MobileNavMenu>
            </MobileNav>
          </div>
          
          {/* Desktop Mega Menu Dropdown */}
          <AnimatePresence>
            {isOfferHovered && (
              <motion.div
                onMouseEnter={handleMouseEnterOffer}
                onMouseLeave={handleMouseLeaveOffer}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { 
                    opacity: 1, y: 0,
                    transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.1, delayChildren: 0.1 }
                  },
                  exit: { 
                    opacity: 0, y: 20,
                    transition: { duration: 0.2, ease: "easeIn", staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
                className="absolute top-[100%] left-0 w-full pt-6 z-50 hidden md:block"
              > 
                {/* Glassy Background Container */}
                <div className={`flex gap-6 w-full rounded-[6px] p-6 border backdrop-blur-md ${megaMenuBg}`}>
                  
                  {/* Green Card */}
                  <motion.div 
                    variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }, exit: { opacity: 0, y: 50, transition: { duration: 0.3, ease: "easeIn" } } }} 
                    className="flex-1"
                  >
                    <div className="h-full bg-[#8ddd8d] text-black p-8 rounded-[24px] flex flex-col justify-between group hover:scale-[1.03] transition-transform min-h-[240px] shadow-2xl block">
                      <div>
                        <h3 className="text-3xl font-bold mb-3 leading-tight font-sans">Backend<br/>Architecture</h3>
                        <p className="text-sm font-medium opacity-80 max-w-[80%]">Robust APIs, microservices, and scalable database designs.</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Yellow Card */}
                  <motion.div 
                    variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }, exit: { opacity: 0, y: 50, transition: { duration: 0.3, ease: "easeIn" } } }} 
                    className="flex-1"
                  >
                    <div className="h-full bg-[#f4e04d] text-black p-8 rounded-[24px] flex flex-col justify-between group hover:scale-[1.03] transition-transform min-h-[240px] shadow-2xl block">
                      <div>
                        <h3 className="text-3xl font-bold mb-3 leading-tight font-sans">DevOps &<br/>Infrastructure</h3>
                        <p className="text-sm font-medium opacity-80 max-w-[80%]">Automated pipelines, Docker, and reliable cloud deployments.</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Blue Card */}
                  <motion.div 
                    variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }, exit: { opacity: 0, y: 50, transition: { duration: 0.3, ease: "easeIn" } } }} 
                    className="flex-1"
                  >
                    <div className="h-full bg-[#6b66ff] text-white p-8 rounded-[24px] flex flex-col justify-between group hover:scale-[1.03] transition-transform min-h-[240px] shadow-2xl block">
                      <div>
                        <h3 className="text-3xl font-bold mb-3 leading-tight font-sans">Distributed<br/>Systems</h3>
                        <p className="text-sm font-medium opacity-80 max-w-[80%]">High-performance applications handling millions of requests.</p>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
