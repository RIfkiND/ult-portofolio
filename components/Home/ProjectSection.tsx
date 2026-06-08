"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  techStack: string[];
  link?: string;
  isGithub?: boolean;
  tagPrefix?: string;
  tagHighlighted?: string;
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
    tagPrefix: "for",
    tagHighlighted: "Kemendikdas",
  },
  {
    id: 2,
    title: "EDP Kejuruan",
    description:
      "EDP Kejuruan is a real-time monitoring and evaluation platform for vocational teacher training, featuring live dashboards, comprehensive reporting, and user management.",
    imageUrl: "/projects/diklat.png",
    techStack: ["Backend", "API", "Server", "CI/CD"],
    link: "https://github.com/RIfkiND/diklat",
    isGithub: true,
    tagPrefix: "for",
    tagHighlighted: "BMTI Bandung",
  },
  {
    id: 3,
    title: "Koupii LMS",
    description:
      "A freelance backend project developed for Mager Coding (Vietnam), featuring a robust Laravel REST API and advanced Voice/AI integration.",
    imageUrl: "/projects/Koupii-app.svg",
    techStack: ["Laravel", "REST API", "Voice/AI", "Backend"],
    link: "https://koupii.com/en",
    tagPrefix: "for",
    tagHighlighted: "Mager Coding",
  },
  {
    id: 4,
    title: "Hasilbumi",
    description:
      "Hasilbumi is an agricultural platform where I handled all backend and DevOps responsibilities, including API, database, and infrastructure.",
    imageUrl: "",
    videoUrl: "/vidios/hasilbumi.mp4",
    techStack: ["Laravel", "Payment Gateway", "Vue", "Stripe"],
    link: "https://github.com/RIfkiND/HasilBumi",
    isGithub: true
  },
];

export default function ProjectSection({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 px-6 md:px-12 lg:px-20">
       <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-1/2 -translate-y-1/2 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[1200px] lg:h-[1200px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at left center, rgba(35, 46, 35, 0.8) 0%, transparent 40%)",
        }}
      />
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <span className="text-[#8ddd8d] text-sm font-medium tracking-wide uppercase mb-2 block">
            Selected Works
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight">
            My Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project) => {
            const Wrapper = project.link ? "a" : "div";
            const wrapperProps = project.link 
              ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } 
              : {};

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group flex flex-col"
              >
                <Wrapper {...wrapperProps} className="block w-full">
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden bg-[#1a1a1a] mb-6 shadow-2xl">
                    {project.videoUrl ? (
                      <video
                        src={project.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : project.imageUrl ? (
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : null}
                    
                    {/* Subtle dark overlay that lifts on hover */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </Wrapper>

                {/* Text Content */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between w-full px-2 gap-2">
                  <h3 className="text-2xl md:text-3xl font-serif text-white group-hover:text-[#8ddd8d] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {project.tagHighlighted && (
                    <span className="text-sm md:text-base font-medium text-white/50 tracking-wide flex items-center gap-1">
                      {project.tagPrefix && <span>{project.tagPrefix}</span>}
                      <span className="text-white/90 underline decoration-1 underline-offset-4">
                        {project.tagHighlighted}
                      </span>
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
