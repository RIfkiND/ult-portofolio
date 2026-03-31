"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/components/data/ProjectData";

const featuredProjects = projects.slice(0, 5);

export default function ProjectShowcase(id : { id: string }) {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
         <span className="text-emerald-400 text-sm font-medium tracking-wide">
              • Project
            </span>
        <h2 className="text-3xl pt-2 md:text-4xl font-bold text-foreground text-lefth mb-12">
          Featured Projects
        </h2>

        <div className="flex flex-col gap-16 md:gap-24">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                    {project.imageUrl ? (
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full bg-zinc-100 dark:bg-zinc-900">
                        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-300 dark:bg-zinc-800">
                          <ArrowUpRight className="w-8 h-8 text-zinc-700 dark:text-zinc-200" />
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  <Link href={`/project/${project.id}`}>
                    <h3 className="text-2xl font-semibold text-foreground hover:text-brand transition-colors flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 inline-block text-primary/70" />
                    </h3>
                  </Link>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}