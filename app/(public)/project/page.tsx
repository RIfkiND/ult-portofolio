"use client";

import ProjectHero from "@/components/project/ProjectHero";
import ProjectGallery from "@/components/project/ProjectGallery";
import WorkStats from "@/components/project/WorkStats";

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <ProjectHero />
      <ProjectGallery />
      <WorkStats />
    </div>
  );
}
