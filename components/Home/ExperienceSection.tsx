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
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience')

  // Education and Certificates Data
  const education = {
    university: 'Telkom University',
    degree: 'Bachelor of Software Engineering',
    gpa: '3.66/4',
    years: '2018 - 2022',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=250&fit=crop',
  }

  const certificates = [
    {
      name: 'TOEIC Certificate',
      score: 'TOEIC 850',
      image: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?w=400&h=250&fit=crop',
    },
    {
      name: 'TOEFL Certificate',
      score: 'TOEFL 540',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop',
    },
    {
      name: 'BNSP Certificate',
      score: '',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=250&fit=crop',
    },
  ]

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
            <div className="flex gap-4 mb-2">
              <button
                className={`text-sm font-medium tracking-wide px-3 py-1 rounded-full transition-colors ${activeTab === 'experience' ? 'bg-emerald-400 text-zinc-900' : 'text-emerald-400 hover:bg-zinc-800'}`}
                onClick={() => setActiveTab('experience')}
              >
                Experience
              </button>
              <button
                className={`text-sm font-medium tracking-wide px-3 py-1 rounded-full transition-colors ${activeTab === 'education' ? 'bg-emerald-400 text-zinc-900' : 'text-emerald-400 hover:bg-zinc-800'}`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight text-balance">
              {activeTab === 'experience' ? 'Explore My Engineering Journey' : 'My Academic Background'}
            </h1>
          </div>
          <div className="flex flex-col justify-center">
            {activeTab === 'experience' ? (
              <>
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
              </>
            ) : (
              <p className="text-zinc-400 leading-relaxed mb-4">
                Here is a summary of my education. (Replace with your real education data.)
              </p>
            )}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'experience' ? (
          <>
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
          </>
        ) : (
          <div className="border-t border-zinc-800 py-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center">Education</h2>
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-10">
                <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center">
                  <div className="relative w-56 h-36 rounded-lg overflow-hidden bg-zinc-800">
                    <Image
                      src={education.image}
                      alt="Telkom University"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-zinc-100 mb-1">{education.university}</h3>
                  <p className="text-zinc-400 mb-1">{education.degree}</p>
                  <p className="text-zinc-400 mb-1">GPA: <span className="text-emerald-400 font-medium">{education.gpa}</span></p>
                  <p className="text-zinc-400">{education.years}</p>
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-6 text-center">Certificates</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {certificates.map((cert, idx) => (
                  <div key={idx} className="bg-zinc-900 rounded-lg shadow p-4 flex flex-col items-center">
                    <div className="relative w-40 h-28 rounded-md overflow-hidden mb-3 bg-zinc-800">
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-zinc-100 mb-1">{cert.name}</h4>
                    {cert.score && <p className="text-emerald-400 font-medium mb-1">{cert.score}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
