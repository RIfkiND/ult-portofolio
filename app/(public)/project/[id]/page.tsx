"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/components/data/ProjectData";
import { notFound } from "next/navigation";
import { use } from "react";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = use(params);
  const projectId = Number.parseInt(id, 10);

  if (Number.isNaN(projectId)) {
    notFound();
  }

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    notFound();
  }

  // Find adjacent projects for navigation
  const projectIndex = projects.findIndex(p => p.id === projectId);
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-24 px-6 lg:px-8 border-b border-zinc-800/60">
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/project"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-2 mb-6"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-brand animate-pulse" />
                <span className="text-brand text-xs font-medium tracking-[0.2em] uppercase">
                  {project.category}
                </span>
              </motion.div>

              <div className="overflow-hidden mb-8">
                <motion.h1
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tight"
                >
                  {project.title}
                </motion.h1>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="origin-left mb-8 h-px w-full bg-zinc-800"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-zinc-300 text-lg leading-relaxed mb-8"
              >
                {project.description}
              </motion.p>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8"
              >
                <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-4">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm font-medium bg-white/5 text-zinc-300 rounded-full border border-white/10 hover:border-white/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* CTA Links */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex flex-wrap items-center gap-4"
              >
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-zinc-950 rounded-full text-sm font-semibold hover:bg-brand/90 transition-colors"
                  >
                    View Project
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full text-sm font-semibold hover:bg-white/20 transition-colors border border-white/20"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
              </motion.div>
            </div>

            {/* Right - Media */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-zinc-800 aspect-video bg-zinc-900"
            >
              {project.videoUrl ? (
                <video
                  src={project.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : project.imageUrl ? (
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-linear-to-br from-zinc-800 to-zinc-900">
                  <span className="text-8xl font-black text-zinc-700">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects Navigation */}
      {(prevProject || nextProject) && (
        <section className="border-t border-zinc-800/60 py-16 px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-8">
              Explore More
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevProject && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Link
                    href={`/project/${prevProject.id}`}
                    className="group relative block bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-white/30 transition-colors p-6 h-full"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">
                          Previous Project
                        </p>
                        <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors">
                          {prevProject.title}
                        </h3>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    <p className="text-sm text-zinc-400 line-clamp-2">
                      {prevProject.description}
                    </p>
                  </Link>
                </motion.div>
              )}
              {nextProject && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Link
                    href={`/project/${nextProject.id}`}
                    className="group relative block bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-white/30 transition-colors p-6 h-full"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">
                          Next Project
                        </p>
                        <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors">
                          {nextProject.title}
                        </h3>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    <p className="text-sm text-zinc-400 line-clamp-2">
                      {nextProject.description}
                    </p>
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
