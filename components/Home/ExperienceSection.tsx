"use client";

import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";
import Image from "next/image";
import {
  education,
  experiences,
  certificates,
  competitions
} from "../data/ExperienceData";
import { motion, AnimatePresence } from "framer-motion";

const INITIAL_DISPLAY_COUNT = 4;

export default function ExperienceSection(id: { id: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "certificates" | "achievements">("experience");

  const displayedExperiences = isExpanded
    ? experiences
    : experiences.slice(0, INITIAL_DISPLAY_COUNT);

  const hasMoreExperiences = experiences.length > INITIAL_DISPLAY_COUNT;

  return (
    <div
      id={id.id}
      className="relative min-h-screen text-zinc-100 py-20 px-6 md:px-12 lg:px-20 scroll-mt-20"
    >
      {/* Right middle gradient */}
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-1/2 -translate-y-1/2 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[1200px] lg:h-[1200px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at right center, rgba(35, 46, 35) 0%, transparent 40%)",
        }}
      />
     
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-serif text-white tracking-tight leading-[1.1]">
              Professional <br className="hidden md:block" />
              <span className="text-[#8ddd8d] italic">Experience.</span>
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab("experience")}
              className={`text-xs md:text-sm font-semibold tracking-widest uppercase px-10 py-4 transition-all duration-300 border ${
                activeTab === "experience" 
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
                  : "bg-transparent text-white/40 border-white/20 hover:text-white hover:border-white/50"
              }`}
            >
              Work
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`text-xs md:text-sm font-semibold tracking-widest uppercase px-10 py-4 transition-all duration-300 border ${
                activeTab === "education" 
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
                  : "bg-transparent text-white/40 border-white/20 hover:text-white hover:border-white/50"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`text-xs md:text-sm font-semibold tracking-widest uppercase px-10 py-4 transition-all duration-300 border ${
                activeTab === "certificates" 
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
                  : "bg-transparent text-white/40 border-white/20 hover:text-white hover:border-white/50"
              }`}
            >
              Certificates
            </button>
            <button
              onClick={() => setActiveTab("achievements")}
              className={`text-xs md:text-sm font-semibold tracking-widest uppercase px-10 py-4 transition-all duration-300 border ${
                activeTab === "achievements" 
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
                  : "bg-transparent text-white/40 border-white/20 hover:text-white hover:border-white/50"
              }`}
            >
              Achievements
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="w-full">
          {activeTab === "experience" && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              {/* Table Header (Desktop only) */}
              <div className="hidden md:grid grid-cols-12 gap-6 pb-6 border-b border-white/10 text-white/30 text-xs tracking-widest uppercase font-semibold">
                <div className="col-span-5">Role & Company</div>
                <div className="col-span-5">Description</div>
                <div className="col-span-2 text-right">Timeline</div>
              </div>

              {/* Experience List */}
              <AnimatePresence>
                {displayedExperiences.map((exp, idx) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="group border-b border-white/10 transition-colors duration-500 hover:bg-white/[0.03]"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-12 md:px-4 items-start relative overflow-hidden">
                      
                      {/* Left: Role and Company */}
                      <div className="md:col-span-5 flex flex-col justify-center pr-4">
                        <h3 className="text-2xl md:text-3xl font-normal text-white group-hover:text-[#8ddd8d] transition-colors duration-300">
                          {exp.company}
                        </h3>
                        <div className="flex items-center gap-3 mt-3 text-white/40 font-light text-sm md:text-base">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8ddd8d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                          <span className="group-hover:text-white/80 transition-colors duration-300 uppercase tracking-wider text-xs font-medium">
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Middle: Description */}
                      <div className="md:col-span-5 flex flex-col justify-center pr-4">
                        <p className="text-white/60 text-sm md:text-[15px] leading-relaxed font-light group-hover:text-white/80 transition-colors duration-300">
                          {exp.description}
                        </p>
                        
                        {/* Render inline images if they exist */}
                        {exp.images && exp.images.length > 0 && (
                          <div className="flex gap-3 mt-6">
                            {exp.images.map((img: string, i: number) => (
                              <div key={i} className="relative w-16 h-12 rounded-lg bg-white/5 overflow-hidden border border-white/10">
                                <Image src={img || "/placeholder.svg"} alt="Work demo" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Right: Date */}
                      <div className="md:col-span-2 flex md:justify-end items-start mt-4 md:mt-0">
                        <span className="text-white/40 font-mono text-sm uppercase tracking-wider transition-colors duration-300 bg-transparent border-l-2 border-white/10 pl-4 py-1 group-hover:border-[#8ddd8d] group-hover:text-white">
                          {exp.dateRange}
                        </span>
                      </div>

                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Show More Button */}
              {hasMoreExperiences && (
                <div className="flex justify-center mt-16">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-6 px-12 py-5 bg-transparent border border-white/20 text-white transition-all duration-500 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[#8ddd8d] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                    <span className="relative z-10 text-xs md:text-sm font-bold tracking-widest uppercase group-hover:text-[#111111] transition-colors duration-500">
                      {isExpanded ? "Show Less" : "View All Experience"}
                    </span>
                    <div className="relative z-10 flex items-center justify-center text-white group-hover:text-[#111111] transition-colors duration-500">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                      ) : (
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      )}
                    </div>
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              {/* Table Header */}
              <div className="hidden md:grid grid-cols-12 gap-6 pb-6 border-b border-white/10 text-white/30 text-xs tracking-widest uppercase font-semibold">
                <div className="col-span-5">Degree & Institution</div>
                <div className="col-span-5">Overview</div>
                <div className="col-span-2 text-right">Timeline</div>
              </div>

              {/* Education section */}
              <div className="group border-b border-white/10 py-12 md:px-4 transition-colors duration-500 hover:bg-white/[0.03]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  
                  {/* Left: Image and Title */}
                  <div className="md:col-span-5 flex items-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-white p-4 flex items-center justify-center shrink-0 shadow-lg">
                      <div className="relative w-full h-full">
                        <Image
                          src={education.image}
                          alt={education.university}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-normal text-white group-hover:text-[#8ddd8d] transition-colors duration-300">
                        {education.degree}
                      </h3>
                      <p className="text-white/40 mt-2 text-sm uppercase tracking-wider font-medium group-hover:text-white/80 transition-colors">
                        {education.university}
                      </p>
                    </div>
                  </div>

                  {/* Middle: Description */}
                  <div className="md:col-span-5 pr-4">
                    <p className="text-white/60 text-sm md:text-[15px] leading-relaxed font-light group-hover:text-white/80 transition-colors duration-300">
                      Currently pursuing my degree with a focus on backend architecture, software engineering principles, and distributed systems. 
                      <br className="hidden md:block" />
                      <span className="text-[#8ddd8d] font-mono mt-2 inline-block">GPA: {education.gpa}</span>
                    </p>
                  </div>

                  {/* Right: Date */}
                  <div className="md:col-span-2 flex md:justify-end">
                    <span className="text-white/40 font-mono text-sm uppercase tracking-wider transition-colors duration-300 bg-transparent border-l-2 border-white/10 pl-4 py-1 group-hover:border-[#8ddd8d] group-hover:text-white">
                      {education.years}
                    </span>
                  </div>

                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "certificates" && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              {/* Table Header */}
              <div className="hidden md:grid grid-cols-12 gap-6 pb-6 border-b border-white/10 text-white/30 text-xs tracking-widest uppercase font-semibold">
                <div className="col-span-8">Certificate Name</div>
                <div className="col-span-4 text-right">View/Download</div>
              </div>

              {certificates.map((cert, idx) => (
                <div key={idx} className="group border-b border-white/10 py-8 md:px-4 transition-colors duration-500 hover:bg-white/[0.03]">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    {/* Left: Title & Score */}
                    <div className="md:col-span-8">
                      <h3 className="text-xl md:text-2xl font-normal text-white group-hover:text-[#8ddd8d] transition-colors duration-300">
                        {cert.name}
                      </h3>
                      {cert.score && (
                        <p className="text-white/40 mt-2 text-sm uppercase tracking-wider font-medium">
                          {cert.score}
                        </p>
                      )}
                    </div>
                    {/* Right: Link */}
                    <div className="md:col-span-4 flex md:justify-end">
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#8ddd8d] font-medium text-sm tracking-widest uppercase border border-[#8ddd8d] px-6 py-2 rounded-full hover:bg-[#8ddd8d] hover:text-[#111111] transition-all duration-300 flex items-center gap-2"
                      >
                        View Credential <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "achievements" && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              {/* Table Header */}
              <div className="hidden md:grid grid-cols-12 gap-6 pb-6 border-b border-white/10 text-white/30 text-xs tracking-widest uppercase font-semibold">
                <div className="col-span-4">Competition & Result</div>
                <div className="col-span-6">Description</div>
                <div className="col-span-2 text-right">Date</div>
              </div>

              {competitions.map((comp) => (
                <div key={comp.id} className="group border-b border-white/10 py-8 md:px-4 transition-colors duration-500 hover:bg-white/[0.03]">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    {/* Left: Title, Organizer, Result */}
                    <div className="md:col-span-4 flex flex-col justify-center">
                      <h3 className="text-xl md:text-2xl font-normal text-white group-hover:text-[#8ddd8d] transition-colors duration-300">
                        {comp.title}
                      </h3>
                      <p className="text-white/40 mt-2 text-sm uppercase tracking-wider font-medium">
                        {comp.organizer}
                      </p>
                      <div className="mt-4 inline-flex">
                        <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#8ddd8d]/10 text-[#8ddd8d] border border-[#8ddd8d]/20">
                          {comp.result}
                        </span>
                      </div>
                    </div>
                    {/* Middle: Description & Links */}
                    <div className="md:col-span-6 flex flex-col justify-center">
                      <p className="text-white/60 text-sm leading-relaxed font-light group-hover:text-white/80 transition-colors duration-300">
                        {comp.description}
                      </p>
                      <div className="flex gap-4 mt-6">
                        {comp.projectUrl && (
                          <a href={comp.projectUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-[#8ddd8d] underline underline-offset-4 decoration-white/20 hover:decoration-[#8ddd8d] transition-colors">
                            View Project
                          </a>
                        )}
                        {comp.certificateUrl && (
                          <a href={comp.certificateUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-[#8ddd8d] underline underline-offset-4 decoration-white/20 hover:decoration-[#8ddd8d] transition-colors">
                            View Certificate
                          </a>
                        )}
                      </div>
                    </div>
                    {/* Right: Date */}
                    <div className="md:col-span-2 flex md:justify-end mt-4 md:mt-0">
                      <span className="text-white/40 font-mono text-sm uppercase tracking-wider transition-colors duration-300 border-l-2 border-white/10 pl-4 py-1 group-hover:border-[#8ddd8d] group-hover:text-white">
                        {comp.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
