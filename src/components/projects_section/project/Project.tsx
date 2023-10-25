// React router
import { Link } from 'react-router-dom';

// Hooks
import useAnimation from '../../../hooks/useAnimation';

// Components
import APIs from './APIs';
import Technologies from './Technologies';
import ThirdParty from './ThirdParty';

type ProjectProps = {
  project: {
    image: string;
    date: string;
    name: string;
    tech:
      | { image: string; name: string; width: string; height: string }[]
      | null;
    description: string;
    apis: { name: string; anchor: string }[] | null;
    third_party:
      | {
          name: string;
          anchor: string;
        }[]
      | null;
    project__anchor: string | null;
    repo__anchor: string;
  };
  index: number;
};

export default function Project({ project, index }: ProjectProps) {
  const id = () => {
    return project.name.replaceAll(' ', '-').toLowerCase();
  };

  const getImageStartPosition = () => {
    let pos;
    if (index % 2 === 0) {
      pos = -300;
    } else {
      pos = 300;
    }
    return pos;
  };

  const getTextStartPosition = () => {
    let pos;
    if (index % 2 === 0) {
      pos = 300;
    } else {
      pos = -300;
    }
    return pos;
  };

  const getProjectAltClass = (index: number) => {
    if (index % 2 === 0) {
      return '';
    }
    return 'alt';
  };

  // useAnimation(element id,trigger id,{from options},{to options})
  useAnimation(
    `.${id()}-animate-image`,
    `#${id()}`,
    {
      opacity: 0,
      x: getImageStartPosition(),
      scale: 1.3,
    },
    { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power2.Out' }
  );

  useAnimation(
    `.${id()}-animate-text`,
    `#${id()}`,
    {
      x: getTextStartPosition(),
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      delay: 0.4,
      duration: 0.6,
      stagger: 0.05,
      ease: 'power2.Out',
    }
  );

  return (
    <article className={`project ${getProjectAltClass(index)}`} id={id()}>
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
        <Technologies
          name={project.name}
          tech={project.tech}
          anim={`${id()}-animate-text`}
        />
        <APIs
          name={project.name}
          apis={project.apis}
          anim={`${id()}-animate-text`}
        />
        <ThirdParty
          name={project.name}
          third_party={project.third_party}
          anim={`${id()}-animate-text`}
        />
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
    </article>
  );
}
