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
    <section className="w-full pt-24 sm:pt-32 px-2 sm:px-4 relative">
      {/* Radial gradient at bottom right */}
      <div 
        className="absolute bottom-0 right-0 w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[700px] pointer-events-none "
        style={{
          background: 'radial-gradient(circle at bottom right, rgba(16, 50, 40, 0.5) 0%, transparent 60%)',
        }}
      />
      <div className="mx-auto max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-5xl">
        <div className="relative rounded-full sm:rounded-full border border-white/[0.08] bg-neutral-950 p-3 sm:p-6 md:p-10 overflow-hidden">
          {/* Subtle top gradient border effect */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="relative flex flex-wrap items-center justify-center gap-1.5 sm:gap-6 md:gap-10 lg:gap-16">
            {/* Mobile: only show JavaScript, Go, PHP */}
            <div className="flex sm:hidden w-full items-center justify-center gap-1.5">
              {[logos[0], logos[2], logos[1]].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center gap-0.5 text-white/60 hover:text-white/80 transition-colors duration-300 min-w-[48px] justify-center"
                >
                  <logo.icon className="h-4 w-4" />
                  <span className="text-xs font-medium whitespace-nowrap">{logo.name}</span>
                </div>
              ))}
            </div>
            {/* Desktop: show all */}
            <div className="hidden sm:flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-16 w-full">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-white/60 hover:text-white/80 transition-colors duration-300 min-w-[100px] md:min-w-[120px] justify-center"
                >
                  <logo.icon className="h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9" />
                  <span className="text-base md:text-lg font-medium whitespace-nowrap">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}