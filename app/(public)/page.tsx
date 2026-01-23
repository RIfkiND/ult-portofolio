import Hero from '@/components/Home/Hero';
import Skill from '@/components/Home/SkillSection';
export default function HomePage() {
  return (
    <div className='min-h-screen'>
      <Hero id='home' />
      <Skill id='skill' />
    </div>
  );
}
