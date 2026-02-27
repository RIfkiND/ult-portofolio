"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  link?: string;
  github?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "SINDARA",
    description:
      "SINDARA is an integrated digital platform for Indonesian primary education teachers, offering digital guestbooks, professional consultations, numeracy/literacy modules, and interactive learning resources.",
    imageUrl: "/projects/sindara.png",
    techStack: ["SSO", "REST API", "Microservice", "Backend"],
    link: "https://sindara.gurudikdas.kemendikdasmen.go.id/",
    category: "Backend"
  },
  {
    id: 2,
    title: "EDP Kejuruan (RTLBMTI)",
    description:
      "EDP Kejuruan is a real-time monitoring and evaluation platform for vocational teacher training, featuring live dashboards, comprehensive reporting, and user management.",
    imageUrl: "/projects/diklat.png",
    techStack: ["Backend", "API", "Server", "CI/CD"],
    link: "https://edp.kejuruan.id/",
    category: "DevOps"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio site showcasing projects, skills, and professional background, with a modern, responsive design and smooth animations.",
    imageUrl: "",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    link: "/",
    category: "Frontend"
  },
  {
    id: 4,
    title: "Hasilbumi E-Commerce",
    description:
      "Hasilbumi is an agricultural platform where I handled all backend and DevOps responsibilities, including API development, database optimization, and infrastructure management.",
    imageUrl: "",
    techStack: ["Laravel", "Payment Gateway", "React", "Stripe"],
    link: "https://www.linkedin.com/in/rifki-nd/details/projects/1307333513/multiple-media-viewer/?locale=in_ID&profileId=ACoAAEeVC8oBE5xXklO_HJHfEKRPlrpTvI8oqVI&treasuryMediaId=1727884187244",
    category: "Full Stack"
  },
  {
    id: 5,
    title: "Codeout",
    description:
      "Codeout is a collaborative coding challenge platform with live code execution, lobbies for competition, and real-time feedback, built for developer skill improvement. Created for Telkom University competition (7th place).",
    imageUrl: "",
    techStack: ["SvelteKit", "Supabase", "Piston API", "shadcn/ui"],
    link: "https://codeout-app.vercel.app/",
    category: "Full Stack"
  },
];

const categories = ["All", "Backend", "DevOps", "Frontend", "Full Stack"];

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="min-h-screen bg-zinc-950 text-white py-20 px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-emerald-400 text-sm font-medium tracking-wide uppercase">
            • Portfolio
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6">
            All  Projects
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl">
            A collection of my work spanning backend development, DevOps automation, and full-stack applications.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-white text-zinc-950"
                  : "bg-zinc-800/50 text-white hover:bg-zinc-800 border border-zinc-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-white/30 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-zinc-800">
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
                
                {/* Overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
                >
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white hover:text-zinc-900 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white hover:text-zinc-900 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                    </a>
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
          ))}
        </div>

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
