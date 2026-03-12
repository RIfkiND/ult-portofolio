export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  techStack: string[];
  link?: string;
  github?: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "SINDARA",
    description:
      "SINDARA is an integrated digital platform for Indonesian primary education teachers, offering digital guestbooks, professional consultations, numeracy/literacy modules, and interactive learning resources.",
    imageUrl: "/projects/sindara.png",
    techStack: ["SSO", "REST API", "Microservice", "Backend"],
    link: "https://sindara.gurudikdas.kemendikdasmen.go.id/",
    category: "Backend",
  },
  {
    id: 2,
    title: "EDP Kejuruan (RTLBMTI)",
    description:
      "EDP Kejuruan is a real-time monitoring and evaluation platform for vocational teacher training, featuring live dashboards, comprehensive reporting, and user management.",
    imageUrl: "/projects/diklat.png",
    techStack: ["Backend", "API", "Server", "CI/CD"],
    link: "https://edp.kejuruan.id/",
    category: "Backend",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio site showcasing projects, skills, and professional background, with a modern, responsive design and smooth animations.",
    imageUrl: "/projects/portofolio.png",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    link: "/",
    category: "Frontend",
  },
  {
    id: 4,
    title: "Hasilbumi E-Commerce",
    description:
      "Hasilbumi is an agricultural platform where I handled all backend and DevOps responsibilities, including API development, database optimization, and infrastructure management.",
    imageUrl: "",
    videoUrl: "/vidios/hasilbumi.mp4",
    techStack: ["Laravel", "Payment Gateway", "Vue", "Stripe", "Team Lead"],
    link: "https://www.linkedin.com/in/rifki-nd/details/projects/1307333513/multiple-media-viewer/?locale=in_ID&profileId=ACoAAEeVC8oBE5xXklO_HJHfEKRPlrpTvI8oqVI&treasuryMediaId=1727884187244",
    category: "Full Stack",
  },
  {
    id: 5,
    title: "Codeout",
    description:
      "Codeout is a collaborative coding challenge platform with live code execution, lobbies for competition, and real-time feedback, built for developer skill improvement. Created for SEVENTH competetion at telkom unieversity manage to get into finalis round.",
    imageUrl: "",
    techStack: ["SvelteKit", "Supabase", "Piston API", "shadcn/ui", "Team Lead"],
    link: "https://codeout-app.vercel.app/",
    category: "Full Stack",
  },
  {
    id: 6,
    title: "Search Engine",
    description:
      "A full-featured search engine built with Golang and Supabase, featuring a custom web crawler, TF-IDF and BM25 ranking algorithms for relevance scoring, real-time autocomplete, and query suggestions powered by prefix indexing.",
    imageUrl: "/projects/kisearch.png",
    techStack: ["NextJs","Golang", "Supabase", "TF-IDF", "BM25", "Web Crawler"],
    link: "https://github.com/RIfkiND/search_engine",
    category: "Backend",
  },
  {
    id: 7,
    title: "Minilemon CI/CD Pipeline",
    description:
      "Designed and implemented a full CI/CD pipeline for Minilemon's company website, automating build, test, and deployment workflows to streamline releases and ensure consistent delivery.",
    imageUrl: "",
    techStack: ["GitHub Actions", "Docker", "Nginx", "CI/CD"],
    category: "DevOps",
  },
  {
    id: 8,
    title: "Keuangan Mahasiswa",
    description:
      "A personal finance management app for students, featuring expense tracking, budget planning, income logging, and spending insights to help manage day-to-day finances effectively.",
    imageUrl: "/projects/keuangan.png",
    techStack: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    link: "https://github.com/RIfkiND/keuangan_mahasiswa_app_frontend",
    category: "Full Stack",
  },
  {
    id: 9,
    title: "My First Portfolio",
    description:
      "My very first personal portfolio website built to showcase my early projects and skills, featuring a vscode design.",
    imageUrl: "/projects/portofoliov1.png",
    techStack: ["Next.js", "Tailwind CSS"],
    link: "https://github.com/RIfkiND/portofolio_rifki",
    category: "Frontend",
  },
  {
    id: 10,
    title: "Go REST API Template",
    description:
      "A production-ready REST API starter template built with Golang, featuring structured routing, middleware support, JWT authentication, database integration, and clean architecture patterns for rapid backend development.",
    imageUrl: "",
    techStack: ["Golang", "REST API", "JWT", "PostgreSQL", "Docker"],
    link: "https://github.com/RIfkiND/go_rest_api_template",
    category: "Backend",
  },

];


