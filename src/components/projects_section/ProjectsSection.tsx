// Components

// import Project from './project/Project';

// Animation hook
import { projects } from '../../data/projects/projects';
import useAnimation from '../../hooks/useAnimation';
import Project from './project/Project';

export default function ProjectsSection() {
  // useAnimation(element id,trigger id,{from options},{to options})
  useAnimation(
    '.projects-animate-down',
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
        <div className='heading heading--lead projects-animate-down'>
          Projects
        </div>
        <h2 className='heading heading--h2 projects-animate-down'>
          Latest work
        </h2>
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
