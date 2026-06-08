"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { useState } from "react";
import { projects, Project } from "@/components/data/ProjectData";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["All", "Backend", "DevOps", "Frontend", "Full Stack"];

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<Project | null>(projects[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section className="text-white py-32 px-6 lg:px-8 min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Header */}
        <div className="relative z-50 flex flex-col mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">Selected Works</h2>
            <p className="text-white/50 text-lg max-w-md">
              A curated collection of backend architectures, scalable systems, and full-stack applications.
            </p>
          </div>
        </div>

        {/* Main Interactive Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 relative">
          
          {/* Left Side - Project List */}
          <div className="w-full lg:w-[45%] flex flex-col">
            
            {/* Mobile Filters (Hidden on Desktop) */}
            <div className="lg:hidden flex flex-wrap gap-6 border-b border-white/10 pb-4 mb-10 w-fit">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`text-sm tracking-widest uppercase transition-all duration-300 ${
                    selectedCategory === category
                      ? "text-[#8ddd8d] font-semibold"
                      : "text-white/40 hover:text-white/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col"
              >
                {filteredProjects.length === 0 ? (
                  <div className="py-12 text-white/40">No projects found for this category.</div>
                ) : (
                  <>
                    {paginatedProjects.map((project, index) => (
                      <TransitionLink
                        href={`/project/${project.id}`}
                        key={project.id}
                        onMouseEnter={() => setHoveredProject(project)}
                        className="group flex flex-col py-8 border-b border-white/10 cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-3xl md:text-5xl font-serif text-white/50 group-hover:text-white transition-colors duration-500">
                            {project.title}
                          </h3>
                          <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                            <ArrowRight className="w-8 h-8 text-[#8ddd8d]" />
                          </div>
                        </div>
                        
                        {/* Details that expand on hover */}
                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                          <div className="overflow-hidden">
                            <div className="pt-6 flex flex-col gap-4">
                              <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg">
                                {project.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {project.techStack.slice(0, 4).map((tech) => (
                                  <span key={tech} className="px-3 py-1 text-xs text-[#8ddd8d] border border-[#8ddd8d]/30 rounded-full">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </TransitionLink>
                    ))}

                    {/* Pagination UI */}
                    {totalPages > 1 && (
                      <div className="flex items-center justify-between gap-4 mt-8 pt-4">
                        <button
                          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                          disabled={currentPage === 1}
                          className="p-3 border border-white/10 rounded-full text-white/50 hover:text-white hover:border-white/30 disabled:opacity-30 disabled:hover:border-white/10 transition-all"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <span className="text-white/50 text-sm font-medium tracking-widest uppercase">
                          Page {currentPage} of {totalPages}
                        </span>
                        <button
                          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                          disabled={currentPage === totalPages}
                          className="p-3 border border-white/10 rounded-full text-white/50 hover:text-white hover:border-white/30 disabled:opacity-30 disabled:hover:border-white/10 transition-all"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side - Hover Image Display */}
          <div className="hidden lg:flex w-full lg:w-[50%] flex-col relative h-full">
            <div className="sticky top-32 flex flex-col gap-12 w-full">
              
              {/* Desktop Filters (Positioned strictly above the image) */}
              <div className="flex flex-wrap gap-6 border-b border-white/10 pb-4 justify-end">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`text-sm tracking-widest uppercase transition-all duration-300 ${
                      selectedCategory === category
                        ? "text-[#8ddd8d] font-semibold"
                        : "text-white/40 hover:text-white/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Image Container */}
              <div className="w-full aspect-video rounded-[20px] overflow-hidden bg-transparent shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
                <AnimatePresence mode="wait">
                  {hoveredProject && (
                    <motion.div
                      key={hoveredProject.id}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      {hoveredProject.videoUrl ? (
                        <video
                          src={hoveredProject.videoUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : hoveredProject.imageUrl ? (
                        <Image
                          src={hoveredProject.imageUrl}
                          alt={hoveredProject.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-primary">
                          <span className="text-8xl font-black text-white/5">{hoveredProject.title.charAt(0)}</span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

