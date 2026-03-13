export interface ExperienceItem {
  id: number;
  company: string;
  location: string;
  dateRange: string;
  description: string;
  tags: string[];
  images?: string[];
  expandedDescription?: string;
}

export interface EducationItem {
  university: string;
  degree: string;
  gpa: string;
  years: string;
  image: string;
}

export interface CertificateItem {
  name: string;
  score: string;
  url: string;
}

export interface CompetitionItem {
  id: number;
  title: string;
  organizer: string;
  date: string;
  result: string;
  description: string;
  imageUrl?: string;
  certificateUrl?: string;
  projectUrl?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "PT FAHOVE TEKNOLOGI INDONESIA (Backend Developer Intern)",
    location: "Indonesia · Remote",
    dateRange: "Sep 2025 - Dec 2025",
    description:
      "As a Backend Developer Intern, created and developed backend services for KARGOO using a microservices architecture. Implemented backend systems with Golang, built real-time WebSocket features, applied event-driven architecture, developed RESTful APIs, and collaborated with frontend/UI/UX teams. Improved system performance, reliability, and data flow.",
    tags: ["Go", "Microservices", "WebSocket", "REST API"],
  },
  {
    id: 2,
    company: "Hadir Teknologi (Backend Developer Intern)",
    location: "Ciamis Regency, West Java, Indonesia · Hybrid",
    dateRange: "Feb 2025 - May 2025",
    description:
      "As a Backend Developer Intern for SINDARA, an integrated system for Kemendikdasmen. Developed and maintained backend services for data integration, system interoperability, and secure communication between government applications. Gained experience in backend architecture, API development, database management, and system integration for large-scale digital ecosystems.",
    tags: ["Backend", "API", "Integration", "Database"],
  },
  {
    id: 3,
    company: "Minilemon Technology (Backend Developer Intern)",
    location: "Surabaya, Indonesia · Remote",
    dateRange: "Nov 2024 - Feb 2025",
    description:
      "As a Backend Developer Intern, worked on backend web development using Python and related technologies.",
    tags: ["Python", "Backend", "Web Development"],
  },
  {
    id: 4,
    company: "BBPPMPV BMTI Kemdikbud (Field Work Practice)",
    location: "Bandung, Indonesia · On-site",
    dateRange: "Oct 2024 - Jan 2025",
    description:
      "Designed and developed RESTful APIs, integrated relational databases, and implemented authentication and authorization mechanisms. Deployed services using Docker and Nginx. Led a small development team and contributed to RTLEDP system as a Field Work Practice (PKL) project for SMKN 1 Ciamis.",
    tags: ["Laravel", "API", "Docker", "Nginx"],
  },
];

export const education: EducationItem = {
  university: "Telkom University",
  degree: "Bachelor of Software Engineering",
  gpa: "3.66/4",
  years: "2025 - present",
  image: "/images/education/telkom.png",
};

export const certificates: CertificateItem[] = [
  {
    name: "TOEIC Certificate",
    score: "TOEIC 800",
    url: "/certificates/toeic.jpeg",
  },
  {
    name: "TOEFL Certificate",
    score: "TOEFL 520",
    url: "/certificates/toefl.pdf",
  },
  {
    name: "BNSP Certificate",
    score: "",
    url: "/certificates/bnsp.pdf",
  },
];

export const competitions: CompetitionItem[] = [
  {
    id: 1,
    title: "SEVENTH Competition - Codeout",
    organizer: "Telkom University",
    date: "2025",
    result: "Finalist",
    description:
      "Built Codeout, a collaborative coding challenge platform with live execution, real-time feedback, and lobby-based matches. Successfully advanced to the finalist round.",

    projectUrl: "https://codeout-app.vercel.app/",
    certificateUrl: "/competition/FinalisSoftdev.pdf",
  },
];