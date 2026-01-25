"use client"

import { ExternalLink, Github, GitFork, Star } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Project = {
  id: string
  title: string
  subtitle?: string
  date: string
  description: string
  fullDescription: string
  techStack: string[]
  github?: string
  demo?: string
  bgColor: string
  textColor: string
  accentColor?: string
  image: string
}

const projects: Project[] = [
  {
    id: "microservices",
    title: "MICRO",
    subtitle: "SERVICES",
    date: "01 - 2026",
    description:
      "Designed and built scalable microservices architecture with Golang, Docker, and Kubernetes. Event-driven systems handling millions of requests.",
    fullDescription:
      "A comprehensive microservices ecosystem built from the ground up using Golang. Features include service discovery with Consul, message queuing with RabbitMQ, distributed tracing with Jaeger, and container orchestration with Kubernetes. The system processes over 2 million events daily with 99.9% uptime.",
    techStack: ["Golang", "Docker", "Kubernetes", "RabbitMQ", "Redis", "PostgreSQL"],
    github: "https://github.com",
    bgColor: "bg-lime-400",
    textColor: "text-neutral-900",
    image: "/images/project-microservices.jpg",
  },
  {
    id: "api-gateway",
    title: "API GATEWAY.",
    date: "2025",
    description:
      "High-performance API gateway built with Golang, featuring rate limiting, JWT authentication, Redis caching, and PostgreSQL.",
    fullDescription:
      "Enterprise-grade API gateway handling 100K+ requests per second with sub-millisecond latency. Implements circuit breaker patterns, request/response transformation, load balancing, and comprehensive logging. Features a custom plugin system for extensibility and real-time analytics dashboard.",
    techStack: ["Golang", "Redis", "PostgreSQL", "gRPC", "Prometheus", "Grafana"],
    github: "https://github.com",
    demo: "https://demo.com",
    bgColor: "bg-neutral-900",
    textColor: "text-white",
    image: "/images/project-api-gateway.jpg",
  },
  {
    id: "docker-infra",
    title: "DOCKER",
    subtitle: "INFRA",
    date: "2024",
    description:
      "Containerized deployment pipelines with Docker and Docker Compose. CI/CD automation on Linux servers with nginx, systemd, and monitoring stacks.",
    fullDescription:
      "Complete infrastructure-as-code solution for deploying and managing containerized applications. Includes custom Docker images optimized for production, automated backup systems, zero-downtime deployment strategies, and comprehensive monitoring with Prometheus and Grafana. Manages 50+ microservices across multiple environments.",
    techStack: ["Docker", "Linux", "Nginx", "GitHub Actions", "Ansible", "Terraform"],
    github: "https://github.com",
    bgColor: "bg-white",
    textColor: "text-neutral-900",
    accentColor: "bg-yellow-400",
    image: "/images/project-docker-infra.jpg",
  },
  {
    id: "cli-tools",
    title: "CLI",
    subtitle: "TOOLS",
    date: "2023 - Present",
    description:
      "Custom CLI utilities and automation scripts built with Python and Golang for developer productivity and server management.",
    fullDescription:
      "A collection of powerful command-line tools designed to streamline development workflows and server administration. Includes database migration helpers, log analyzers, deployment scripts, and custom shell utilities. Used daily by development teams to automate repetitive tasks and improve productivity.",
    techStack: ["Python", "Golang", "Bash", "Linux", "SQLite", "Click"],
    github: "https://github.com",
    bgColor: "bg-yellow-400",
    textColor: "text-neutral-900",
    image: "/images/project-cli-tools.jpg",
  },
]

export  default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20 font-prata">

         {/* Section Header */}
      <div className="px-4 pt-8 pb-4">
        <h1 className="text-4xl uppercase tracking-tight text-white md:text-6xl">
          Featured <span className="text-lime-400">Projects</span>
        </h1>
        <p className="mt-2 text-neutral-400">
          A selection of my recent backend development work
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-3 p-4">
        {/* Row 1 */}
        {/* GitHub Profile Card */}
        <div className="col-span-12 row-span-2 overflow-hidden rounded-xl bg-neutral-900 md:col-span-3">
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center gap-2 bg-white p-3">
              <Github className="h-6 w-6 text-neutral-900" />
              <span className="text-sm font-medium text-neutral-900">GitHub</span>
            </div>
            {/* Code Preview */}
            <div className="relative flex-1 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black p-4">
              <pre className="text-xs text-lime-400">
                <code>{`package main

func main() {
  dev := Developer{
    Name: "Rifki Nauval",
    Role: "Backend Dev",
    Stack: []string{
      "Golang",
      "PHP",
      "Node.js",
    },
  }
  dev.Build()
}`}</code>
              </pre>
            </div>
            {/* Stats */}
            <div className="flex gap-4 bg-white p-3">
              <div className="flex items-center gap-1 text-xs text-neutral-600">
                <Star className="h-3 w-3" />
                <span>2.4k</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-neutral-600">
                <GitFork className="h-3 w-3" />
                <span>890</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Project Card 1 - Microservices */}
        <button
          type="button"
          onClick={() => setSelectedProject(projects[0])}
          className="col-span-12 row-span-2 flex cursor-pointer flex-col justify-between rounded-xl bg-lime-400 p-6 text-left transition-transform hover:scale-[1.02] md:col-span-2"
        >
          <div>
            <h2 className="text-4xl font-black uppercase leading-none tracking-tight text-neutral-900">
              MICRO
              <br />
              SERVICES
            </h2>
            <p className="mt-3 text-sm font-medium text-neutral-700">01 - 2026</p>
          </div>
          <p className="text-sm leading-relaxed text-neutral-800">
            Designed and built scalable microservices architecture with Golang, Docker, and
            Kubernetes. Event-driven systems handling millions of requests.
          </p>
        </button>

        {/* Project Screenshot Card */}
        <div className="col-span-12 row-span-2 overflow-hidden rounded-xl md:col-span-3">
          <Image
            src="/images/screenshot-202026-01-26-20003545.jpg"
            alt="Project showcase"
            width={600}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Featured Project Card 4 - CLI Tools */}
        <button
          type="button"
          onClick={() => setSelectedProject(projects[3])}
          className="col-span-12 row-span-2 flex cursor-pointer flex-col justify-between rounded-xl bg-yellow-400 p-6 text-left transition-transform hover:scale-[1.02] md:col-span-4"
        >
          <div>
            <div className="flex items-start justify-between">
              <h2 className="text-4xl font-black uppercase leading-none tracking-tight text-neutral-900">
                CLI
                <br />
                <span className="inline-block bg-neutral-900 px-1 text-yellow-400">TOOLS</span>
              </h2>
              <p className="text-sm font-medium text-neutral-600">2023</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-neutral-800">
            Custom CLI utilities and automation scripts built with Python and Golang for developer
            productivity and server management.
          </p>
        </button>

        {/* Row 2 */}
        {/* Featured Project Card 2 - API Gateway */}
        <button
          type="button"
          onClick={() => setSelectedProject(projects[1])}
          className="col-span-12 flex cursor-pointer flex-col justify-between rounded-xl bg-neutral-900 p-6 text-left transition-transform hover:scale-[1.02] md:col-span-5"
        >
          <div className="flex items-start justify-between">
            <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              API GATEWAY.
            </h2>
            <p className="text-sm font-medium text-neutral-400">2025</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-neutral-300">
            High-performance API gateway built with Golang, featuring rate limiting, JWT
            authentication, Redis caching, and PostgreSQL. Handles 100K+ requests per second with
            sub-millisecond latency.
          </p>
        </button>

        {/* Featured Project Card 3 - Docker Infra */}
        <button
          type="button"
          onClick={() => setSelectedProject(projects[2])}
          className="col-span-12 flex cursor-pointer flex-col justify-between rounded-xl bg-white p-6 text-left transition-transform hover:scale-[1.02] md:col-span-3"
        >
          <div>
            <h2 className="text-3xl font-light uppercase tracking-tight text-neutral-900">
              DOCKER
            </h2>
            <h2 className="-mt-1 inline-block bg-yellow-400 px-1 text-3xl font-black uppercase tracking-tight text-neutral-900">
              INFRA
            </h2>
            <p className="mt-2 text-sm font-medium text-neutral-500">2024</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-neutral-700">
            Containerized deployment pipelines with Docker and Docker Compose. CI/CD automation on
            Linux servers with nginx, systemd, and monitoring stacks.
          </p>
        </button>

        {/* Tech Stack Card */}
        <div className="col-span-12 row-span-1 overflow-hidden rounded-xl bg-neutral-800 md:col-span-4">
          <div className="grid h-full grid-cols-2 gap-1 p-1">
            {/* Profile Mini Card */}
            <div className="flex flex-col gap-2 rounded-lg bg-white p-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-lime-400 to-green-500">
                  <span className="text-xs font-bold text-white">RN</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-900">Rifki Nauval Dzaki</p>
                  <p className="text-[10px] text-neutral-500">Backend Developer</p>
                </div>
              </div>
              <div className="mt-auto flex gap-1">
                <span className="rounded bg-lime-400 px-2 py-0.5 text-[10px] font-medium text-neutral-900">
                  Hire Me
                </span>
                <span className="rounded bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600">
                  <ExternalLink className="inline h-2 w-2" /> Portfolio
                </span>
              </div>
            </div>
            {/* Tech Stack Icons */}
            <div className="grid grid-cols-2 gap-1">
              <div className="group flex items-center justify-center rounded-lg bg-cyan-500 transition-all hover:scale-105">
                <svg className="h-6 w-6 text-white transition-transform group-hover:rotate-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.176-.199-.31-.327-.56-.444-.75-.362-1.477-.257-2.156.187-.815.533-1.239 1.322-1.228 2.332.012 1.006.654 1.834 1.612 1.963.839.117 1.544-.187 2.098-.839.117-.14.222-.292.352-.491h-2.39c-.247 0-.305-.152-.223-.35.152-.362.432-.968.596-1.274.047-.093.152-.245.409-.245h4.428c-.023.257-.023.514-.07.77-.117.934-.409 1.81-.933 2.59-.805 1.193-1.869 1.987-3.238 2.29-1.134.245-2.221.175-3.227-.397-1.006-.56-1.612-1.427-1.869-2.52-.292-1.228-.07-2.38.514-3.448.584-1.064 1.45-1.857 2.555-2.368.934-.432 1.905-.585 2.923-.491.805.07 1.555.34 2.215.817.573.41 1.006.922 1.299 1.544.082.14.035.222-.117.268z"/>
                </svg>
              </div>
              <div className="group flex items-center justify-center rounded-lg bg-indigo-600 transition-all hover:scale-105">
                <svg className="h-6 w-6 text-white transition-transform group-hover:rotate-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zm2.545-1.072h-.883l.464-2.395h.798c.387 0 .665.082.834.246.17.165.214.436.134.813-.094.485-.28.83-.56 1.033-.28.203-.653.303-1.118.303zm-3.783 7.853L8.5 4.012h5.036c1.248 0 2.139.337 2.674 1.011.535.675.637 1.616.305 2.826a4.33 4.33 0 01-.602 1.37 3.67 3.67 0 01-1.05 1.057c.45.26.736.654.858 1.181.123.527.047 1.162-.226 1.904a4.53 4.53 0 01-1.152 1.796c-.502.49-1.09.835-1.763 1.037-.672.201-1.453.302-2.34.302H5.772zM10 17h3l2-10H7z"/>
                </svg>
              </div>
              <div className="group flex items-center justify-center rounded-lg bg-lime-500 transition-all hover:scale-105">
                <svg className="h-6 w-6 text-neutral-900 transition-transform group-hover:rotate-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383.665-.23.8-.282 1.509-.681.075-.042.172-.026.249.015l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.19-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.29 6.679c-.087.051-.139.146-.139.243v10.07c0 .095.052.189.134.235l2.409 1.392c1.307.653 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.111.255.253v9.944c0 1.743-.949 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.943-.922-1.604V6.999c0-.66.352-1.273.922-1.602l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.942.924 1.602v10.072c0 .66-.354 1.273-.924 1.604l-8.795 5.078c-.28.163-.6.247-.924.247z"/>
                </svg>
              </div>
              <div className="group flex items-center justify-center rounded-lg bg-blue-500 transition-all hover:scale-105">
                <svg className="h-6 w-6 text-white transition-transform group-hover:rotate-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.82 17.275c-.684 0-1.304-.085-1.86-.254a3.2 3.2 0 01-1.371-.788 2.6 2.6 0 01-.67-1.169H3.06c.09.234.253.422.49.563.357.21.85.315 1.48.315.576 0 1.004-.09 1.283-.27.28-.18.42-.419.42-.717 0-.18-.057-.33-.17-.45-.115-.12-.315-.218-.6-.293l-1.77-.42c-.72-.165-1.266-.418-1.638-.76-.372-.34-.558-.79-.558-1.348 0-.45.133-.856.4-1.218.265-.363.635-.65 1.11-.863.474-.213 1.024-.32 1.65-.32.63 0 1.186.094 1.67.283.483.19.865.456 1.146.8.282.342.452.74.512 1.195H6.357a1.09 1.09 0 00-.43-.552c-.25-.183-.606-.274-1.068-.274-.408 0-.73.077-.968.23-.237.154-.356.364-.356.63 0 .168.053.312.16.43.105.12.297.218.576.294l1.77.42c.732.168 1.293.427 1.683.778.39.35.585.806.585 1.367 0 .474-.134.897-.4 1.27-.268.372-.645.665-1.13.877-.486.213-1.05.32-1.695.32H4.82zm8.34 0c-.684 0-1.304-.085-1.86-.254a3.2 3.2 0 01-1.37-.788 2.6 2.6 0 01-.67-1.169h2.142c.09.234.252.422.49.563.356.21.85.315 1.48.315.575 0 1.003-.09 1.282-.27.28-.18.42-.419.42-.717 0-.18-.056-.33-.17-.45-.114-.12-.314-.218-.6-.293l-1.77-.42c-.72-.165-1.265-.418-1.637-.76-.372-.34-.558-.79-.558-1.348 0-.45.133-.856.4-1.218.265-.363.635-.65 1.109-.863.474-.213 1.024-.32 1.65-.32.63 0 1.187.094 1.67.283.484.19.866.456 1.147.8.28.342.452.74.51 1.195h-2.126a1.09 1.09 0 00-.43-.552c-.25-.183-.606-.274-1.068-.274-.408 0-.73.077-.967.23-.238.154-.357.364-.357.63 0 .168.054.312.16.43.106.12.298.218.577.294l1.77.42c.732.168 1.293.427 1.683.778.39.35.585.806.585 1.367 0 .474-.134.897-.4 1.27-.268.372-.645.665-1.13.877-.486.213-1.052.32-1.696.32h-.316zM21.64 6.728c.807 0 1.46.653 1.46 1.46v7.624c0 .807-.653 1.46-1.46 1.46H13.6l4.04-5.272-4.04-5.272h8.04z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto bg-neutral-900 text-white border-neutral-800">
          {selectedProject && (
            <div className="flex flex-col gap-4">
              <DialogHeader>
                <DialogTitle className="text-3xl font-black uppercase tracking-tight text-white">
                  {selectedProject.title}
                  {selectedProject.subtitle && (
                    <span className="ml-2 inline-block bg-lime-400 px-2 text-neutral-900">
                      {selectedProject.subtitle}
                    </span>
                  )}
                </DialogTitle>
                <DialogDescription className="text-neutral-400">
                  {selectedProject.date}
                </DialogDescription>
              </DialogHeader>

              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                <p className="text-neutral-300 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-neutral-400 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-neutral-800 text-lime-400 hover:bg-neutral-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  {selectedProject.github && (
                    <Button
                      variant="outline"
                      className="border-neutral-700 bg-transparent text-white hover:bg-neutral-800 hover:text-white"
                      asChild
                    >
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button className="bg-lime-400 text-neutral-900 hover:bg-lime-500" asChild>
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
