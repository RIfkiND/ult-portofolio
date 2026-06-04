"use client";

import ProjectHero from "@/components/project/ProjectHero";
import ProjectGallery from "@/components/project/ProjectGallery";
import WorkStats from "@/components/project/WorkStats";
import ProjectFaq from "@/components/project/ProjectFaq";
import ProjectCta from "@/components/project/ProjectCta";

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-primary overflow-x-clip">
      <ProjectHero />
      <ProjectGallery />
      <WorkStats />
      <ProjectFaq />
      <ProjectCta />
    </div>
  );
}

