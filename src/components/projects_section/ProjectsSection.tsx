// Components
import HeadingSection from '../text_elements/HeadingSection';
import Project from './project/Project';

// Hooks
import useAnimation from '../../hooks/useAnimation';

// Data
import { projects } from '../../data/projects/projects';

export default function ProjectsSection() {
  // useAnimation(element id,trigger id,{from options},{to options})
  useAnimation(
    '.projects-animate-text',
    '#projects',
    {
      y: -300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.3,
      stagger: 0.05,
      ease: 'power2.Out',
    }
  );

  return (
    <section className='section projects-section' id='projects'>
      <div className='container'>
        <HeadingSection
          lead='Personal Projects'
          heading='latest work'
          anim='projects-animate-text'
        />

        {projects.map((project, index) => (
          <Project key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
