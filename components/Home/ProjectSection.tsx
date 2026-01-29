"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    techStack: ["Web Platform", "REST API", "Cloud", "Backend"],
    link: "https://sindara.gurudikdas.kemendikdasmen.go.id/"
  },
  {
    id: 2,
    title: "EDP Kejuruan",
    description:
      "EDP Kejuruan is a real-time monitoring and evaluation platform for vocational teacher training, featuring live dashboards, comprehensive reporting, and user management.",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    techStack: ["Node.js", "Express", "Database", "Cloud"],
    link: "https://edp.kejuruan.id/"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio site showcasing projects, skills, and professional background, with a modern, responsive design.",
    imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    link: "/"
  },
  {
    id: 4,
    title: "Codeout",
    description:
      "Codeout is a collaborative coding challenge platform with live code execution, lobbies for competition, and real-time feedback, built for developer skill improvement.",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    techStack: ["SvelteKit", "Supabase", "Piston API", "shadcn/ui"],
    link: "https://codeout-app.vercel.app/"
  },
  {
    id: 5,
    title: "Minilemon (Backend)",
    description:
      "Minilemon is a digital universe for children’s character education, offering animation, games, and interactive content, with a focus on Indonesian culture. Focused on backend/server work.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
    techStack: ["Next.js", "Custom Backend", "Cloud"],
    link: "https://www.minilemon.co.id/"
  },
  {
    id: 6,
    title: "Hasilbumi Backend (All Backend/DevOps)",
    description:
      "Hasilbumi is an agricultural platform where I handled all backend and DevOps responsibilities, including API, database, and infrastructure.",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop",
    techStack: ["Node.js", "PostgreSQL", "Docker", "CI/CD", "Cloud"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7239875914493272064"
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
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {project.title}
                      </a>
                    ) : project.title}
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
