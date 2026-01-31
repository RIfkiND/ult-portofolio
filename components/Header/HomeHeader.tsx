"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, Instagram, Github } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState,useEffect } from "react";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/Mobile Header";
export default function HomeHeader() {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Track scroll position to hide logo
  const [hideLogo, setHideLogo] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setHideLogo(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full md:sticky md:top-0 z-40 font-inter">
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div className="container mx-auto px-6 lg:px-8 pt-10">
        <nav className="flex items-center justify-between pb-6">
          {/* Logo (always left) */}
          <Link href="/" className="flex items-center gap-4">
            <motion.div
              className="text-white font-bold text-2xl flex items-center gap-2"
              animate={{ opacity: hideLogo ? 0 : 1, y: hideLogo ? -30 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-4xl font-black">Rifki</span>
              <div className="h-8 w-px bg-white/30" />
              <div className="flex flex-col text-sm leading-tight">
                <span className="font-bold">Backend</span>
                <span className="font-normal">Devops</span>
              </div>
              <span className="ml-1 text-xs">®</span>
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2  border-white/10 rounded-md p-2 border border-[#1c1c1c] backdrop-blur-md">
            <a
              href="#about"
              className="text-white hover:text-white transition-colors text-sm uppercase tracking-wider font-normal rounded-md px-5 py-2.5 bg-neutral-800 hover:bg-zinc-800/50"
            >
              About Me
            </a>
            <a
              href="#project"
              className="text-white hover:text-white transition-colors text-sm uppercase tracking-wider font-normal rounded-md px-5 py-2.5 bg-neutral-800 hover:bg-zinc-800/50"
            >
              Project
            </a>
            <a
              href="#experience"
              className="text-white hover:text-white transition-colors text-sm uppercase tracking-wider font-normal rounded-md px-5 py-2.5 bg-neutral-800 hover:bg-zinc-800/50"
            >
              Experience
            </a>
            <div className="h-6 w-px bg-white/10 mx-4" />
            <Dialog>
              <DialogTrigger asChild>
                <motion.div
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  className="relative cursor-pointer rounded-full overflow-hidden mr-1"
                  style={{ width: '180px', height: '50px' }}
                  tabIndex={0}
                  role="button"
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{ backgroundColor: isHovered ? '#8ddd8d' : '#171717' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="absolute top-1/2 -translate-y-1/2 uppercase text-sm font-normal tracking-wider z-10"
                    animate={{ x: isHovered ? 18 : 65, color: isHovered ? '#1a1a1a' : '#fff' }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    Contact
                  </motion.span>
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center z-10"
                    style={{ width: '42px', height: '42px' }}
                    animate={{ x: isHovered ? 130 : 8, backgroundColor: isHovered ? '#1a1a1a' : '#8ddd8d' }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-5 w-5" strokeWidth={2.5} style={{ color: isHovered ? '#fff' : '#1a1a1a' }} />
                  </motion.div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="bg-zinc-900/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-[90vw] max-w-md flex flex-col items-center border border-white/10">
                <DialogTitle className="sr-only">Contact Links</DialogTitle>
                <div className="flex flex-row gap-6 w-full justify-center mt-2">
                  <a
                    href="https://www.linkedin.com/in/rifki-nd" target="_blank" rel="noopener noreferrer"
                    className="rounded-full bg-zinc-800 hover:bg-emerald-400/20 border border-white/10 p-4 transition-colors flex items-center justify-center"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-7 h-7 text-emerald-400" />
                  </a>
                  <a
                    href="mailto:rifkinauvaldzaki08@gmail.com"
                    className="rounded-full bg-zinc-800 hover:bg-emerald-400/20 border border-white/10 p-4 transition-colors flex items-center justify-center"
                    aria-label="Email"
                  >
                    <Mail className="w-7 h-7 text-emerald-400" />
                  </a>
                  <a
                    href="https://github.com/RIfkiND" target="_blank" rel="noopener noreferrer"
                    className="rounded-full bg-zinc-800 hover:bg-emerald-400/20 border border-white/10 p-4 transition-colors flex items-center justify-center"
                    aria-label="GitHub"
                  >
                    <Github className="w-7 h-7 text-emerald-400" />
                  </a>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          {/* Mobile nav - hamburger at far right */}
          <div className="md:hidden flex items-center justify-end flex-1 relative z-50">
            <MobileNav visible={menuOpen}>
              <MobileNavHeader>
                <div className="flex items-center justify-end w-full">
                  <MobileNavToggle isOpen={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
                </div>
              </MobileNavHeader>
              <MobileNavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} className="mx-auto left-1/2 -translate-x-1/2 w-64">
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About Me
                </a>
                <a href="#project" onClick={() => setMenuOpen(false)}>
                  Project
                </a>
                <a href="#experience" onClick={() => setMenuOpen(false)}>
                  Experience
                </a>
              </MobileNavMenu>
            </MobileNav>
          </div>
        </nav>
      </div>
    </header>
  );
}
