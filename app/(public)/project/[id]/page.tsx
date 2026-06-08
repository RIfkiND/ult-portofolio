"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, LayoutTemplate, Workflow } from "lucide-react";
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

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  // Find adjacent projects for navigation
  const projectIndex = projects.findIndex((p) => p.id === projectId);
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <div className="min-h-screen bg-primary text-white selection:bg-[#8ddd8d] selection:text-black font-sans">
      {/* Dynamic Background Glow */}
      <div
        className="fixed top-0 left-0 w-[500px] h-[500px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(141, 221, 141, 0.05) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 pt-24 pb-24 px-6 lg:px-8 max-w-[1465px] mx-auto">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            href="/project"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm group"
          >
            <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </div>
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#8ddd8d] shadow-[0_0_10px_rgba(141,221,141,0.5)]" />
            <span className="text-[#8ddd8d] text-sm font-semibold tracking-[0.2em] uppercase">
              {project.category}
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-normal text-white leading-[1.05] tracking-tight text-balance mb-8"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl"
          >
            {project.description}
          </motion.p>
        </div>

        {/* Meta Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-8 border-y border-zinc-800 mb-16"
        >
          {/* Tech Stack */}
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-3">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium bg-white/[0.02] text-zinc-300 rounded-lg border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Links */}
          <div className="flex items-center gap-4 shrink-0">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer relative inline-flex items-center justify-between gap-6 pl-6 pr-2 py-2 bg-transparent border border-white/20 rounded-[14px] text-white hover:border-white/40 transition-all duration-500 overflow-hidden"
              >
                <span className="text-sm font-medium flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  Repository
                </span>
                <div 
                  className="relative overflow-hidden w-10 h-10 rounded-[10px] bg-transparent border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:text-black group-hover:border-transparent text-white/60"
                >
                  <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  <ArrowUpRight className="w-5 h-5 relative z-10" strokeWidth={2} />
                </div>
              </motion.a>
            )}
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer relative inline-flex items-center justify-between gap-6 pl-6 pr-2 py-2 bg-transparent border border-white/20 rounded-[14px] text-white hover:border-white/40 transition-all duration-500 overflow-hidden"
              >
                <span className="text-sm font-medium">Live Demo</span>
                <div 
                  className="relative overflow-hidden w-10 h-10 rounded-[10px] bg-[#8ddd8d]/10 border border-[#8ddd8d]/30 flex items-center justify-center transition-all duration-500 group-hover:text-black group-hover:border-transparent text-[#8ddd8d]"
                >
                  <div className="absolute inset-0 bg-[#8ddd8d] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  <ArrowUpRight className="w-5 h-5 relative z-10" strokeWidth={2} />
                </div>
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Main Media Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative w-full rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-900/50 aspect-video mb-24 shadow-2xl"
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
            <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900">
              <span className="text-8xl font-black text-zinc-700/50 font-serif">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </motion.div>

        {/* System Design Architecture Section */}
        {project.systemDesignUrl && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#8ddd8d]/10 flex items-center justify-center text-[#8ddd8d]">
                <Workflow className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-white">System Architecture</h2>
            </div>
            
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] p-2 md:p-4">
               <div className="relative w-full aspect-auto min-h-[300px] md:min-h-[500px] rounded-xl overflow-hidden">
                <Image
                  src={project.systemDesignUrl}
                  alt={`${project.title} System Architecture`}
                  fill
                  className="object-contain"
                />
               </div>
            </div>
          </motion.div>
        )}

        {/* Additional Images / Gallery */}
        {project.additionalImages && project.additionalImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
             <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <LayoutTemplate className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-white">Gallery & Interfaces</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {project.additionalImages.map((img, idx) => (
                <div key={idx} className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] group">
                  <Image
                    src={img}
                    alt={`${project.title} Preview ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Related Projects Navigation */}
      {(prevProject || nextProject) && (
        <section className="border-t border-zinc-800/60 bg-[#111111] py-16 px-6 lg:px-8">
          <div className="max-w-[1465px] mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8ddd8d] font-semibold mb-8 text-center">
              Continue Exploring
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevProject ? (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href={`/project/${prevProject.id}`}
                    className="group relative flex flex-col justify-between bg-white/[0.02] rounded-[24px] overflow-hidden border border-white/5 hover:border-white/20 transition-all p-8 h-full hover:bg-white/[0.04]"
                  >
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest mb-3">
                        Previous Project
                      </p>
                      <h3 className="text-2xl font-serif text-white group-hover:text-[#8ddd8d] transition-colors mb-4">
                        {prevProject.title}
                      </h3>
                      <p className="text-sm text-zinc-400 line-clamp-2">
                        {prevProject.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ) : <div />}
              
              {nextProject && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href={`/project/${nextProject.id}`}
                    className="group relative flex flex-col justify-between bg-white/[0.02] rounded-[24px] overflow-hidden border border-white/5 hover:border-white/20 transition-all p-8 h-full hover:bg-white/[0.04]"
                  >
                    <div className="flex flex-col items-end text-right">
                      <p className="text-xs text-zinc-500 uppercase tracking-widest mb-3">
                        Next Project
                      </p>
                      <h3 className="text-2xl font-serif text-white group-hover:text-[#8ddd8d] transition-colors mb-4 flex items-center gap-3">
                        {nextProject.title}
                        <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-[#8ddd8d] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                      </h3>
                      <p className="text-sm text-zinc-400 line-clamp-2">
                        {nextProject.description}
                      </p>
                    </div>
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
