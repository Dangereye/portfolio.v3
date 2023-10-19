// Components
// import Apis from './Apis';
// import Technologies from './Technologies';
// import ThirdParty from './ThirdParty';

// React router
import { Link } from 'react-router-dom';

// Animation hook
import useAnimation from '../../../hooks/useAnimation';

type ProjectProps = {
  project: {
    image: string;
    date: string;
    name: string;
    tech: { image: string; name: string; width: string; height: string }[];
    description: string;
    apis: { name: string; anchor: string }[] | null;
    third_party: {
      name: string;
      anchor: string;
    }[];
    project__anchor: string | null;
    repo__anchor: string;
  };
};

export default function Project({ project }: ProjectProps) {
  const id = () => {
    return project.name.replaceAll(' ', '-').toLowerCase();
  };

  // Animation
  // useAnimation(element id,trigger id,{animation options},{trigger options})
  //   useAnimation(
  //     `.${id()}-animate-image`,
  //     `#${id()}`,
  //     {
  //       x: -300,
  //       y: 0,
  //       scale: 1.3,
  //       duration: 1,
  //       ease: 'ease-out',
  //     },
  //     {}
  //   );

  //   useAnimation(
  //     `.${id()}-animate-text`,
  //     `#${id()}`,
  //     {
  //       x: 300,
  //       y: 0,
  //       delay: 0.4,
  //       ease: 'back.out(1.4)',
  //       stagger: 0.05,
  //     },
  //     {}
  //   );

  return (
    <div className='project' id={id()}>
      <div className={`project__img ${id()}-animate-image`}>
        <div className='project__img__wrapper'>
          <img src={project.image} alt={project.name} />
        </div>
      </div>
      <div className='project__details'>
        <header className={`project__header ${id()}-animate-text`}>
          <h3 className='heading heading--h2'>{project.name}</h3>
          <div className='project__date'>{project.date}</div>
        </header>
        <div className={`project__description ${id()}-animate-text`}>
          <p className='body-text'>{project.description}</p>
        </div>
        {/* <Technologies
          name={project.name}
          tech={project.tech}
          anim={`${id()}-animate-text`}
        />
        <Apis
          name={project.name}
          apis={project.apis}
          anim={`${id()}-animate-text`}
        />
        <ThirdParty
          name={project.name}
          third_party={project.third_party}
          anim={`${id()}-animate-text`}
        /> */}
        <div className={`btns ${id()}-animate-text`}>
          {project.project__anchor && (
            <Link
              to={project.project__anchor}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn--primary btn--large'
            >
              Launch Site
            </Link>
          )}
          <Link
            to={project.repo__anchor}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn--tertiary'
          >
            view on Github
          </Link>
        </div>
      </div>
    </div>
  );
}
