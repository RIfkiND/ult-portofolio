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
    company: "PT FAHOVE TEKNOLOGI INDONESIA (Backend Developer Intern)",
    location: "Indonesia · Remote",
    dateRange: "Sep 2025 - Dec 2025",
    description: "As a Backend Developer Intern, created and developed backend services for KARGOO using a microservices architecture. Implemented backend systems with Golang, built real-time WebSocket features, applied event-driven architecture, developed RESTful APIs, and collaborated with frontend/UI/UX teams. Improved system performance, reliability, and data flow.",
    tags: ["Go", "Microservices", "WebSocket", "REST API"],
  },
  {
    id: 2,
    company: "Hadir Teknologi (Backend Developer Intern)",
    location: "Ciamis Regency, West Java, Indonesia · Hybrid",
    dateRange: "Feb 2025 - May 2025",
    description: "As a Backend Developer Intern for SINDARA, an integrated system for Kemendikdasmen. Developed and maintained backend services for data integration, system interoperability, and secure communication between government applications. Gained experience in backend architecture, API development, database management, and system integration for large-scale digital ecosystems.",
    tags: ["Backend", "API", "Integration", "Database"],
  },
  {
    id: 3,
    company: "Minilemon Technology (Backend Developer Intern)",
    location: "Surabaya, Indonesia · Remote",
    dateRange: "Nov 2024 - Feb 2025",
    description: "As a Backend Developer Intern, worked on backend web development using Python and related technologies.",
    tags: ["Python", "Backend", "Web Development"],
  },
  {
    id: 4,
    company: "BBPPMPV BMTI Kemdikbud (Field Work Practice)",
    location: "Bandung, Indonesia · On-site",
    dateRange: "Oct 2024 - Jan 2025",
    description: "Designed and developed RESTful APIs, integrated relational databases, and implemented authentication and authorization mechanisms. Deployed services using Docker and Nginx. Led a small development team and contributed to RTLEDP system as a Field Work Practice (PKL) project for SMKN 1 Ciamis.",
    tags: ["Laravel", "API", "Docker", "Nginx"],
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
    years: '2025 - present',
    image: '/images/education/telkom.png',
  }

  const certificates = [
    {
      name: 'TOEIC Certificate',
      score: 'TOEIC 800',
      url: '/certificates/toeic.jpeg',
    },
    {
      name: 'TOEFL Certificate',
      score: 'TOEFL 520',
      url: '/certificates/toefl.pdf',
    },
    {
      name: 'BNSP Certificate',
      score: '',
      url: '/certificates/bnsp.pdf',
    },
  ]

  const displayedExperiences = isExpanded
    ? experiences
    : experiences.slice(0, INITIAL_DISPLAY_COUNT)
  
  const hasMoreExperiences = experiences.length > INITIAL_DISPLAY_COUNT

  return (
    <div id={id.id} className="relative min-h-screen text-zinc-100 py-20 px-6 md:px-12 lg:px-20 scroll-mt-20">
         {/* Top right gradient */}
            <div
                className="absolute top-0 right-0 w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] pointer-events-none z-0"
                style={{
                    background:
                        "radial-gradient(circle at top right, rgba(35, 46, 35) 0%, transparent 60%)",
                    transform: "scaleX(1)",
                }}
            />
            {/* Bottom left gradient (fixed: only at bottom left) */}
            <div
                className="absolute bottom-0 left-0 w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] pointer-events-none z-0"
                style={{
                    background:
                        "radial-gradient(circle at bottom left, rgba(35, 46, 35) 0%, transparent 60%)",
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
                  With 1 years of industry experience and a foundation in technology that began in vocational high school, I've built scalable systems and APIs, collaborating with talented engineers to deliver products used by many.
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
                            </div>
                          )}
                        </div>
                      ) : (
                        <p className="text-zinc-400">{exp.description}</p>
                      )}
                    </div>

                    {/* Location (was tags) */}
                    <div className="lg:col-span-3 flex items-center justify-start lg:justify-end">
                      <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-zinc-100 text-zinc-900">
                        {exp.location}
                      </span>
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
          <>
            {/* Education Section */}
            <div className="border-t border-zinc-800 mb-12">
              <div className="border-b border-zinc-800 py-6 transition-colors hover:bg-zinc-900/50">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
                  {/* Icon & Category */}
                  <div className="lg:col-span-4 flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white flex items-center justify-center border border-white/10 overflow-hidden p-2">
                      <div className="relative w-full h-full">
                        <Image
                          src={education.image}
                          alt={education.university}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-100 mb-1">{education.university}</h3>
                      <p className="text-zinc-500 text-sm">• {education.years}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-5">
                    <p className="text-zinc-400 mb-3">{education.degree}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-500 text-sm">GPA:</span>
                        <span className="text-zinc-100 font-semibold">{education.gpa}</span>
                      </div>
                      <div className="h-4 w-px bg-zinc-700" />
                      <p className="text-zinc-400 text-sm">
                        Pursuing excellence in Software Engineering with focus on backend development and system architecture
                      </p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="lg:col-span-3 flex items-center justify-start lg:justify-end">
                    <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-zinc-100 text-zinc-900">
                      Education
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificates Section */}
            <div className="border-t border-zinc-800">
              <div className="mb-6 pt-6">
                <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                  
                  Certifications
                </h3>
              </div>

              {certificates.map((cert, idx) => (
                <a
                  key={idx}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-b border-zinc-800 py-6 transition-colors hover:bg-zinc-900/50 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                    {/* Icon & Title */}
                    <div className="lg:col-span-4 flex items-center gap-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-400/10 to-pink-400/10 flex items-center justify-center border border-white/10 group-hover:border-emerald-400/30 transition-colors">
                        <ArrowUpRight className="w-8 h-8 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                          {cert.name}
                        </h4>
                        {cert.score && (
                          <p className="text-zinc-100 text-sm font-medium mt-1">{cert.score}</p>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-5">
                      <p className="text-zinc-400">
                        Professional certification demonstrating expertise and commitment to continuous learning
                      </p>
                    </div>

                    {/* Category Badge */}
                    <div className="lg:col-span-3 flex items-center justify-start lg:justify-end gap-3">
                      <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-zinc-100 text-zinc-900">
                        Certificate
                      </span>
                      <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}



