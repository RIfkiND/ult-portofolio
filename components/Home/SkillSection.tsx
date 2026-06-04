"use client";

import { SiJavascript, SiPhp, SiGo, SiDocker, SiLinux } from "react-icons/si";

const logos = [
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiPhp, name: "PHP" },
  { icon: SiGo, name: "Go" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiLinux, name: "Linux" },
];

export default function SkillSection(id : { id: string }) {
  return (
    <section id={id.id} className="w-full pt-24 sm:pt-32 px-2 sm:px-4 relative scroll-mt-20">
      <div className="mx-auto max-w-[1100px]">
        <div className="relative rounded-full border border-white/[0.08] bg-primary/40 backdrop-blur-md py-12 px-6 sm:py-20 sm:px-12 md:py-20 md:px-20 overflow-hidden">
          {/* Subtle top gradient border effect */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="relative flex items-center justify-between w-full">
            {/* Mobile: only show JavaScript, Go, PHP */}
            <div className="flex sm:hidden w-full items-center justify-between px-2">
              {[logos[0], logos[2], logos[1]].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-white/50 hover:text-white transition-all duration-500"
                >
                  <logo.icon className="h-5 w-5" />
                  <span className="text-sm font-bold tracking-tight">{logo.name}</span>
                </div>
              ))}
            </div>
            {/* Desktop: show all evenly spaced */}
            <div className="hidden sm:flex items-center justify-between w-full">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-white/50 hover:text-white transition-all duration-500 cursor-default group"
                >
                  <logo.icon className="h-7 w-7 md:h-8 md:w-8 lg:h-[34px] lg:w-[34px] transition-transform duration-500 group-hover:-translate-y-1" />
                  <span className="text-base md:text-xl lg:text-2xl font-bold tracking-tighter">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
