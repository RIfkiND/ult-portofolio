"use client"

import { useState } from "react"
import { ArrowUpRight, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

interface Experience {
  id: number
  company: string
  location: string
  dateRange: string
  description: string
  tags: string[]
  images?: string[]
  expandedDescription?: string
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Stripe, San Francisco, USA",
    location: "San Francisco, USA",
    dateRange: "March 2023 - Present",
    description: "Staff Engineer, Building scalable payment infrastructure and APIs",
    tags: ["TypeScript", "Go"],
  },
  {
    id: 2,
    company: "Meta, Menlo Park, USA",
    location: "USA",
    dateRange: "June 2021 - February 2023",
    description: "Senior SWE, Led React Native core team - Performance optimization",
    tags: ["React", "C++"],
  },
  {
    id: 3,
    company: "Vercel, Remote",
    location: "Remote",
    dateRange: "January 2020 - May 2021",
    description: "Software Engineer, Next.js framework and edge runtime development",
    tags: ["Node.js", "Rust"],
  },
  {
    id: 4,
    company: "Google, London, UK",
    location: "UK",
    dateRange: "August 2018 - December 2019",
    description: "",
    tags: ["Python", "Kubernetes"],
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=200&h=150&fit=crop",
    ],
    expandedDescription:
      "From architecting distributed systems to optimizing cloud infrastructure, each role has deepened my expertise in building reliable, high-performance software at scale.",
  },
  {
    id: 5,
    company: "Spotify, Stockholm, Sweden",
    location: "Sweden",
    dateRange: "July 2016 - July 2018",
    description: "Backend Engineer, Music recommendation systems and data pipelines",
    tags: ["Java", "Scala"],
  },
]

const INITIAL_DISPLAY_COUNT = 3

export default function ExperienceSection(id: { id: string }) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const displayedExperiences = isExpanded
    ? experiences
    : experiences.slice(0, INITIAL_DISPLAY_COUNT)
  
  const hasMoreExperiences = experiences.length > INITIAL_DISPLAY_COUNT

  return (
    <div className="relative min-h-screen text-zinc-100 py-20 px-6 md:px-12 lg:px-20">
         {/* Top right gradient */}
            <div
                className="absolute top-0 right-0 w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] pointer-events-none z-0"
                style={{
                    background:
                        "radial-gradient(circle at top right, rgba(16, 50, 40, 0.5) 0%, transparent 60%)",
                    transform: "scaleX(1)",
                }}
            />
            {/* Bottom left gradient (fixed: only at bottom left) */}
            <div
                className="absolute bottom-0 left-0 w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] pointer-events-none z-0"
                style={{
                    background:
                        "radial-gradient(circle at bottom left, rgba(16, 50, 40, 0.5) 0%, transparent 60%)",
                }}
            />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <span className="text-emerald-400 text-sm font-medium tracking-wide">
              • Experience
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight text-balance">
              Explore My Engineering Journey
            </h1>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-zinc-400 leading-relaxed mb-4">
              Over the past 8+ years, I've built scalable systems and APIs at
              leading tech companies, collaborating with world-class engineers
              to ship products used by millions.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-zinc-100 hover:text-emerald-400 transition-colors font-medium group"
            >
              Let's Connect
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Experience List */}
        <div className="border-t border-zinc-800">
          {displayedExperiences.map((exp) => (
            <div
              key={exp.id}
              className="border-b border-zinc-800 py-6 transition-colors hover:bg-zinc-900/50"
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
                {/* Company & Date */}
                <div className="lg:col-span-4">
                  <h3 className="font-semibold text-zinc-100">{exp.company}</h3>
                  <p className="text-zinc-500 text-sm mt-1">• {exp.dateRange}</p>
                </div>

                {/* Images or Description */}
                <div className="lg:col-span-5">
                  {exp.images ? (
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-3">
                        {exp.images.map((img, idx) => (
                          <div
                            key={idx}
                            className="relative w-24 h-20 rounded-lg overflow-hidden bg-zinc-800"
                          >
                            <Image
                              src={img || "/placeholder.svg"}
                              alt={`${exp.company} work ${idx + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      {exp.expandedDescription && (
                        <div className="flex items-start gap-4">
                          <p className="text-zinc-400 text-sm leading-relaxed flex-1">
                            {exp.expandedDescription}
                          </p>
                          <button className="w-10 h-10 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center hover:bg-emerald-400 transition-colors shrink-0">
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-zinc-400">{exp.description}</p>
                  )}
                </div>

                {/* Tags */}
                <div className="lg:col-span-3 flex gap-2 justify-start lg:justify-end flex-wrap">
                  {exp.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        idx === 0
                          ? "bg-zinc-100 text-zinc-900"
                          : "border border-zinc-700 text-zinc-400 hover:border-zinc-500"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {hasMoreExperiences && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 hover:border-emerald-400 hover:text-emerald-400 transition-colors group"
            >
              <span>{isExpanded ? "Show Less" : `Show ${experiences.length - INITIAL_DISPLAY_COUNT} More`}</span>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
