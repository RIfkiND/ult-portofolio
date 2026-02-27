"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "SINDARA",
    description:
      "SINDARA is an integrated digital platform for Indonesian primary education teachers, offering digital guestbooks, professional consultations, numeracy/literacy modules, and interactive learning resources.",
    imageUrl: "/projects/sindara.png",
    techStack: ["SSO", "REST API", "Microservice", "Backend"],
    link: "https://sindara.gurudikdas.kemendikdasmen.go.id/"
  },
  {
    id: 2,
    title: "EDP Kejuruan (RTLBMTI)",
    description:
      "EDP Kejuruan is a real-time monitoring and evaluation platform for vocational teacher training, featuring live dashboards, comprehensive reporting, and user management.",
    imageUrl: "/projects/diklat.png",
    techStack: ["Backend", "API", "Server", "CI/CD"],
    link: "https://edp.kejuruan.id/"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio site showcasing projects, skills, and professional background, with a modern, responsive design.",
    imageUrl: "",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    link: "/"
  },
  {
    id: 4,
    title: "Hasilbumi E-Commerce",
    description:
      "Hasilbumi is an agricultural platform where I handled all backend and DevOps responsibilities, including API, database, and infrastructure.",
    imageUrl: "",
    techStack: ["Laravel", "Payment Gateway", "React", "Stripe"],
    link: "https://www.linkedin.com/in/rifki-nd/details/projects/1307333513/multiple-media-viewer/?locale=in_ID&profileId=ACoAAEeVC8oBE5xXklO_HJHfEKRPlrpTvI8oqVI&treasuryMediaId=1727884187244"
  },
  {
    id: 5,
    title: "Codeout",
    description:
      "Codeout is a collaborative coding challenge platform with live code execution, lobbies for competition, and real-time feedback, built for developer skill improvement. Created for Telkom University competition (7th place).",
    imageUrl: "",
    techStack: ["SvelteKit", "Supabase", "Piston API", "shadcn/ui"],
    link: "https://codeout-app.vercel.app/"
  },
];

export default function ProjectShowcase(id: { id: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const itemsPerView = 3;
  const maxIndex = Math.max(0, projects.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header with Navigation */}
        <div className="relative text-center mb-16">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Content */}
          <div>
            <span className="text-emerald-400 text-sm font-medium tracking-wide">
              • Project
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-4">
              My Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Witness the beauty of creative through our lens, as we showcase stunning landscapes that evoke wonder and appreciation for the environment.
            </p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative">

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="relative flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group"
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                >
                  {/* Card */}
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900 border border-border">
                    {/* Image */}
                    {project.imageUrl ? (
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900">
                        <div className="text-6xl font-bold text-zinc-700">
                          {project.title.charAt(0)}
                        </div>
                      </div>
                    )}

                    {/* Overlay - Always visible title, description on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                      {/* Title - Always visible */}
                      <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: hoveredId === project.id ? 0 : 1 }}
                        className="text-white"
                      >
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      </motion.div>

                      {/* Description - Shows on hover */}
                      <AnimatePresence>
                        {hoveredId === project.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="text-white"
                          >
                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <p className="text-sm text-white/90 leading-relaxed mb-4 line-clamp-4">
                              {project.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Tech Stack Tags - Always visible */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.techStack.slice(0, 2).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Link Icon */}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute bottom-6 right-6 p-2 bg-white/20 backdrop-blur-sm rounded-full transition-colors"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
