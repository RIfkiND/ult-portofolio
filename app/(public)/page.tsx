"use client";
import Hero from '@/components/Home/Hero';
import Skill from '@/components/Home/SkillSection';
import ExperienceSection from '@/components/Home/ExperienceSection';
import LearnSection from '@/components/Home/LearnSection';
import ProjectSection from '@/components/Home/ProjectSection';
import HomeCta from '@/components/Home/HomeCta';

export default function HomePage() {
  return (
    <div className='min-h-screen '>
      <Hero id='home' />
      <Skill id='skill' />
      <ExperienceSection id='experience' />
      <LearnSection id= 'learn'/>
      <ProjectSection  id='project'/>
      <HomeCta />
    </div>
  );
}
