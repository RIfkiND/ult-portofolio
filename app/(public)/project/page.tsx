"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "SINDARA",
    description: "SINDARA is an integrated digital platform for Indonesian primary education teachers, offering digital guestbooks, professional consultations, numeracy/literacy modules, and interactive learning resources.",
    techStack: ["SSO", "REST API", "Microservice", "Backend"],
    category: "Work",
    role: "Backend Developer",
    imageUrl: "/projects/sindara.png",
    bgColor: "#ffe45e", // Vibrant Yellow
    link: "https://sindara.gurudikdas.kemendikdasmen.go.id/",
  },
  {
    id: 2,
    title: "EDP KEJURUAN",
    description: "EDP Kejuruan is a real-time monitoring and evaluation platform for vocational teacher training, featuring live dashboards, comprehensive reporting, and user management.",
    techStack: ["Backend", "API", "Server", "CI/CD"],
    category: "Work",
    role: "Team Leader, PM & System Design",
    imageUrl: "/projects/diklat.png",
    bgColor: "#5264d1", // Royal Blue
    link: "https://github.com/RIfkiND/diklat",
    isGithub: true,
  },
  {
    id: 3,
    title: "KOUPII LMS",
    description: "A freelance backend Learning Management System (LMS) project developed for a client in Vietnam (Mager Coding), featuring a robust Laravel REST API and advanced Voice/AI integration.",
    techStack: ["Laravel", "REST API", "Voice/AI", "Backend"],
    category: "Work",
    role: "Freelance Backend Developer",
    imageUrl: "/projects/Koupii-app.svg",
    bgColor: "#111111", // Dark
    link: "https://koupii.com/en",
  },
  {
    id: 4,
    title: "HASILBUMI",
    description: "Hasilbumi is an agricultural platform where I handled all backend and DevOps responsibilities, including API, database, and infrastructure.",
    techStack: ["Laravel", "Payment Gateway", "Vue", "Stripe"],
    category: "Hobbies / Fun",
    role: "Full Stack Developer",
    videoUrl: "/vidios/hasilbumi.mp4",
    bgColor: "#8ddd8d", // Fresh Green
    link: "https://github.com/RIfkiND/HasilBumi",
    isGithub: true,
  },
  {
    id: 5,
    title: "AKUPUNYAKASUS",
    description: "A hobby project built to analyze legal cases using AI. Integrated with Grok and Gemini AI for advanced analysis, and utilizes the pasal.id API for fetching Indonesian laws (hukum, KUHP, etc.).",
    techStack: ["Next.js", "Golang", "Grok AI", "Gemini AI", "Pasal.id API"],
    category: "Hobbies / Fun",
    imageUrl: "/projects/akupunyakasus-app.png",
    bgColor: "#1a3622", // Dark Green
    link: "https://github.com/RIfkiND", // Assuming github link or placeholder
    isGithub: true,
  },
];

const ALL_CATEGORY = "All";
const categories = [ALL_CATEGORY, ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectPage() {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);
  
  const filteredProjects = activeCategory === ALL_CATEGORY 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f5f5f5] pt-32 lg:pt-0 font-sans text-[#111111]">
      {/* LEFT SIDE - Project List */}
      <div className="w-full lg:w-[40%] xl:w-[35%] lg:h-screen lg:sticky top-0 flex flex-col justify-center px-8 md:px-12 lg:pl-20 lg:pr-12 py-16 lg:py-0 bg-[#f5f5f5] z-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] tracking-tight mb-8">
          The Rifki<br />projects.
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                const newProjects = cat === ALL_CATEGORY ? projects : projects.filter(p => p.category === cat);
                if (newProjects.length > 0) setActiveProject(newProjects[0]);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors ${
                activeCategory === cat 
                  ? "bg-[#111111] text-white" 
                  : "bg-black/5 text-black hover:bg-black/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col w-full border-t border-black/10">
          {filteredProjects.map((project) => {
            const isActive = activeProject.id === project.id;

            return (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="w-full flex items-center justify-between py-6 border-b border-black/10 group cursor-pointer transition-colors hover:bg-black/[0.02]"
              >
                <span className="text-sm md:text-base font-medium tracking-wide text-[#111111] text-left pr-4 uppercase">
                  {project.title}
                </span>

                {/* Custom Toggle Switch */}
                <div 
                  className={`relative w-14 h-7 md:w-16 md:h-8 rounded-full p-1 flex items-center transition-colors duration-500 shrink-0 shadow-inner ${
                    isActive ? "bg-[#e6b7ec] justify-end" : "bg-[#7e8ce0] justify-start"
                  }`}
                >
                  <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="w-5 h-5 md:w-6 md:h-6 bg-[#111111] rounded-full flex items-center justify-center shadow-md z-10"
                  >
                     <ArrowRight className="w-3 h-3 text-white" />
                  </motion.div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT SIDE - Scrollable Visual Preview */}
      <div className="w-full lg:w-[60%] xl:w-[65%] min-h-[60vh] lg:min-h-screen relative overflow-y-auto" style={{ backgroundColor: activeProject.bgColor }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col w-full min-h-full p-6 pt-32 md:p-16 lg:p-24 lg:pt-40 pb-32"
          >
            {/* Massive Background Text for extra premium feel */}
            <h2 className="fixed top-1/2 left-1/2 lg:left-[60%] -translate-x-1/2 -translate-y-1/2 text-[12vw] lg:text-[10vw] font-black text-white/20 whitespace-nowrap pointer-events-none z-0 tracking-tighter uppercase mix-blend-overlay">
              {activeProject.title}
            </h2>

            {/* Visual Content Frame */}
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl mx-auto aspect-[4/3] sm:aspect-video rounded-xl md:rounded-2xl overflow-hidden z-10" // added mx-auto
            >
              {activeProject.videoUrl ? (
                <video
                  src={activeProject.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={activeProject.imageUrl || "/placeholder.svg"}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                />
              )}
            </motion.div>
            
            {/* Project Details */}
            <div className="w-full max-w-5xl mx-auto mt-16 md:mt-24 z-10">
               {/* Detail Card */}
               <div className="bg-[#f5f5f5] rounded-3xl p-8 md:p-12">
                 <h3 className="text-3xl font-serif text-[#111111] mb-6">About the project</h3>
                 <p className="text-gray-700 text-lg leading-relaxed mb-10">
                   {activeProject.description}
                 </p>
                 
                 <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">My Role</h4>
                 <p className="text-[#111111] font-medium text-lg mb-8">{activeProject.role}</p>

                 <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Tech Stack & System</h4>
                 <div className="flex flex-wrap gap-3 mb-12">
                   {activeProject.techStack.map(tech => (
                     <span key={tech} className="px-5 py-2.5 bg-gray-100 text-[#111111] rounded-full text-sm font-medium border border-gray-200">
                       {tech}
                     </span>
                   ))}
                 </div>
                 
                 {activeProject.link && (
                    <Link 
                      href={activeProject.link} 
                      target="_blank"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-[#111111] text-white rounded-full hover:bg-black transition-colors duration-300"
                    >
                      <span className="text-sm md:text-base font-bold tracking-wide uppercase">
                        {activeProject.isGithub ? "View Source Code" : "Explore Live Project"}
                      </span>
                      {activeProject.isGithub ? (
                        <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                      )}
                    </Link>
                  )}
               </div>
            </div>
            
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
