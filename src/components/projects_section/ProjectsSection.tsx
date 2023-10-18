// Components

// import Project from './project/Project';

// Animation hook
import { projects } from '../../data/projects/projects';
import useAnimation from '../../hooks/useAnimation';
import Project from './project/Project';

export default function ProjectsSection() {
  // useAnimation(element id,trigger id,{from options},{to options})
  useAnimation(
    '.projects-animate',
    '#projects',
    {
      y: -300,
      duration: 0.6,
      stagger: 0.05,
      ease: 'back.out(1.4)',
    },
    {}
  );

  return (
    <section className='section projects-section' id='projects'>
      <div className='container'>
        <header className='article__header'>
          <div className='heading heading--lead projects-animate-text'>
            Projects
          </div>
          <h2 className='heading heading--h2 projects-animate-text'>
            Latest work
          </h2>
        </header>
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </section>
  );
}
