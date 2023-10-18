// Components
import HeroSection from '../hero_section/HeroSection';
import AboutSection from '../about_section/AboutSection';
import SkillsSection from '../skills_section/SkillsSection';
import ProjectsSection from '../projects_section/ProjectsSection';

export default function Main() {
  return (
    <main className='main'>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
