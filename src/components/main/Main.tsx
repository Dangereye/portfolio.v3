// Components
import HeroSection from '../hero_section/HeroSection';
import AboutSection from '../about_section/AboutSection';
import SkillsSection from '../skills_section/SkillsSection';
import ProjectsSection from '../projects_section/ProjectsSection';
import ContactSection from '../contact_section/ContactSection';
import Footer from '../footer/Footer';

export default function Main() {
  return (
    <main className='main'>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
