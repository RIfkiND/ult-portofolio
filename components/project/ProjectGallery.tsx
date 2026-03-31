"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { projects } from "@/components/data/ProjectData";

const categories = ["All", "Backend", "DevOps", "Frontend", "Full Stack"];

const featured = projects.slice(0, 3);

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const paginate = (dir: number) => {
    setDirection(dir);
    setFeaturedIndex(i => (i + dir + featured.length) % featured.length);
  };

  const variants: Variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] as [number, number, number, number] } }),
  };

  const current = featured[featuredIndex];

  return (
    <section className="bg-zinc-950 text-white py-20 px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">

        {/* Featured Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-6">
            <p className="text-zinc-500 text-xs uppercase tracking-widest font-medium">Featured Projects</p>
            <div className="flex items-center gap-3">
              {/* Dot indicators */}
              <div className="flex gap-1.5">
                {featured.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > featuredIndex ? 1 : -1); setFeaturedIndex(i); }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === featuredIndex ? "w-6 bg-white" : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
                    }`}
                  />
                ))}
              </div>
              {/* Arrow buttons */}
              <button
                onClick={() => paginate(-1)}
                className="p-2 rounded-full border border-zinc-700 hover:border-white hover:bg-white/5 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="p-2 rounded-full border border-zinc-700 hover:border-white hover:bg-white/5 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Slide */}
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current.id}
                custom={direction}

                initial="enter"
                animate="center"
                exit="exit"
                className="group flex flex-col md:flex-row w-full"
                variants={variants}
              >
                {/* Image side */}
                <div className="relative md:w-1/2 aspect-video overflow-hidden bg-zinc-800 shrink-0">
                  {current.videoUrl ? (
                    <video
                      src={current.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : current.imageUrl ? (
                    <Image
                      src={current.imageUrl}
                      alt={current.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-zinc-900">
                      <span className="text-8xl font-black text-zinc-800">{current.title.charAt(0)}</span>
                    </div>
                  )}
                </div>
                {/* Content side */}
                <div className="flex flex-col justify-center p-8 md:p-12 flex-1">
                  <span className="px-3 py-1 text-xs font-medium bg-brand/10 text-brand rounded-full border border-brand/20 w-fit mb-5">
                    {current.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-brand transition-colors">
                    {current.title}
                  </h2>
                  <p className="text-zinc-400 leading-relaxed mb-8 max-w-lg">
                    {current.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {current.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium bg-white/5 text-zinc-300 rounded-full border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-4">
                    <Link
                      href={`/project/${current.id}`}
                      className="inline-flex items-center gap-2 text-brand font-medium text-sm hover:gap-3 transition-all"
                    >
                      View Details <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    {current.link && (
                      <a
                        href={current.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-zinc-400 font-medium text-sm hover:text-white transition-all"
                      >
                        Live Project <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* All Projects heading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-zinc-500 text-xs uppercase tracking-widest font-medium mb-6"
        >
          All Projects
        </motion.p>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-white text-zinc-950"
                  : "bg-zinc-800/50 text-white hover:bg-zinc-800 border border-zinc-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <Link
                href={`/project/${project.id}`}
                key={project.id}
              >
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.25, delay: index * 0.04, ease: "easeOut" }}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className="group relative bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-white/30 transition-colors duration-300 h-full"
                >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden bg-zinc-800">
                  {project.videoUrl ? (
                    <video
                      src={project.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-linear-to-br from-zinc-800 to-zinc-900">
                      <div className="text-6xl font-bold text-zinc-700">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  )}

                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
                  >
                    {project.link && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.link, "_blank");
                        }}
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white hover:text-zinc-900 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    )}
                    {project.github && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, "_blank");
                        }}
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white hover:text-zinc-900 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </button>
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-3 py-1 text-xs font-medium text-zinc-500">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium bg-zinc-900/90 backdrop-blur-sm text-white rounded-full border border-white/30">
                      {project.category}
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        <AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 text-zinc-500"
            >
              No projects found in this category.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-400 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/RIfkiND"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-950 rounded-full font-semibold hover:bg-zinc-200 transition-colors"
          >
            <Github className="w-5 h-5" />
            Visit My GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
