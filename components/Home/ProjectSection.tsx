"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with real-time inventory management, secure payment processing, and personalized product recommendations powered by machine learning algorithms.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative project management tool featuring Kanban boards, real-time updates, team chat integration, and automated workflow triggers for improved team productivity.",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
  },
  {
    id: 3,
    title: "Health & Fitness Tracker",
    description:
      "A comprehensive wellness application that tracks workouts, nutrition, sleep patterns, and provides AI-driven insights to help users achieve their health goals.",
    imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
    techStack: ["React Native", "Firebase", "TensorFlow", "GraphQL"],
  },
  {
    id: 4,
    title: "Real Estate Portal",
    description:
      "A modern property listing platform with virtual tours, mortgage calculators, neighborhood analytics, and an AI chatbot to assist potential buyers in finding their dream home.",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    techStack: ["Vue.js", "Django", "Elasticsearch", "AWS"],
  },
];

export default function ProjectShowcase() {
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
          {projects.map((project, index) => {
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
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>
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
