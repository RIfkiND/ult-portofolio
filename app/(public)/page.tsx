"use client";
import Hero from '@/components/Home/Hero';
import Skill from '@/components/Home/SkillSection';
import ExperienceSection from '@/components/Home/ExperienceSection';
import LearnSection from '@/components/Home/LearnSection';
import ProjectSection from '@/components/Home/ProjectSection';
import HomeCta from '@/components/Home/HomeCta';
import Preloader from '@/components/Home/Preloader';

export default function HomePage() {
  return (
    <div className='min-h-screen '>
      {/* <Preloader /> */}
      <Hero id='home' />
      <Skill id='skill' />
      <ExperienceSection id='experience' />
      <ProjectSection  id='project'/>
      {/* 
      // <ExperienceSection id='experience' />
      // <LearnSection id= 'learn'/> */}
      <HomeCta />
    </div>
  );
}
   
