"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

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
    techStack: ["Backend", "APi", "Server", "ci/cd"],
    link: "https://edp.kejuruan.id/"
  },
  {
    id: 3,
    title: "Portfolio Website (This Site)",
    description:
      "A personal portfolio site showcasing projects, skills, and professional background, with a modern, responsive design.",
    imageUrl: "",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    link: "/"
  },
  {
    id: 4,
    title: "Hasilbumi E-Commerce Backend",
    description:
      "Hasilbumi is an agricultural platform where I handled all backend and DevOps responsibilities, including API, database, and infrastructure.",
    imageUrl: "",
    techStack: ["Laravel", "Payment Gateway", "React",  "Stripe"],
    link: "https://www.linkedin.com/in/rifki-nd/details/projects/1307333513/multiple-media-viewer/?locale=in_ID&profileId=ACoAAEeVC8oBE5xXklO_HJHfEKRPlrpTvI8oqVI&treasuryMediaId=1727884187244"
  },
  {
    id: 5,
    title: "Codeout (Competition, 7th Telkom University)",
    description:
      "Codeout is a collaborative coding challenge platform with live code execution, lobbies for competition, and real-time feedback, built for developer skill improvement. This project was created for the final round of a software development competition at Telkom University.",
    imageUrl: "",
    techStack: ["SvelteKit", "Supabase", "Piston API", "shadcn/ui"],
    link: "https://codeout-app.vercel.app/"
  },
];

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
                  <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                        {project.title}
                        <ArrowUpRight className="w-4 h-4 inline-block text-primary/70" />
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