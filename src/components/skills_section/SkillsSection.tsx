// React router
import { Link } from 'react-router-dom';

// Hooks
import useAnimation from '../../hooks/useAnimation';

// Components
// import ArticleHeading from '../../components/ArticleHeading';
// import ListGroup from '../../components/ListGroup';
// import Anchor from '../../components/Anchor';

// Data
import { environment } from '../../data/skills/enviroment';
import { designTools } from '../../data/skills/designTools';
import { frontEnd } from '../../data/skills/frontEnd';
import { backEnd } from '../../data/skills/backEnd';
import ListGroup from '../list_group/ListGroup';

export default function SkillsSection() {
  // useAnimation(element id,trigger id,{from options},{to options})
  useAnimation(
    '.skills-animate-bg',
    '#skills',
    {
      scale: 1.3,
      opacity: 0,
    },
    { scale: 1, opacity: 1, duration: 1, delay: 0.5, ease: 'power2.Out' }
  );

  useAnimation(
    '.skills-animate-text',
    '#skills',
    {
      y: -300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.3,
      delay: 1,
      stagger: 0.05,
      ease: 'power2.Out',
    }
  );

  useAnimation(
    '.animate-list-item',
    '#skills',
    {
      y: -300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.3,
      delay: 1.2,
      stagger: 0.01,
      ease: 'power2.Out',
    }
  );

  return (
    <section className='section skills-section' id='skills'>
      <div className='container skills-animate-bg'>
        <div className='background '></div>
        <header className='section__header'>
          <div className='heading heading--lead skills-animate-text'>
            Skills
          </div>
          <h2 className='heading heading--h2 skills-animate-text'>
            Knowledge & Experience
          </h2>

          <p className='body-text skills-animate-text'>
            Experienced in building static websites,{' '}
            <Link
              to='https://reactjs.org'
              rel='noopener noreferrer'
              target='_blank'
            >
              React.js
            </Link>{' '}
            and{' '}
            <Link
              to='https://nextjs.org/'
              rel='noopener noreferrer'
              target='_blank'
            >
              Next.js
            </Link>{' '}
            applications, and customisation of eCommerce platforms such as{' '}
            <Link to='https://business.adobe.com/uk/products/magento/magento-commerce.html'>
              Magento
            </Link>{' '}
            and{' '}
            <Link to='https://wordpress.com/website-builder'>WordPress</Link>.
            Listed are typical environmental setup and design tools, frequently
            used front-end technologies, frameworks and libraries. I also have
            some experience with back-end technologies - DB connection, routing,
            schemas etc.
          </p>
        </header>
        <div className='lists'>
          <ListGroup
            heading={environment.heading}
            list={environment.list}
            renderItem={(item) => (
              <li className='list__item image animate-list-item'>{item}</li>
            )}
          />
          <ListGroup
            heading={designTools.heading}
            list={designTools.list}
            renderItem={(item) => (
              <li className='list__item image animate-list-item'>{item}</li>
            )}
          />
          <ListGroup
            heading={frontEnd.heading}
            list={frontEnd.list}
            renderItem={(item) => (
              <li className='list__item image animate-list-item'>{item}</li>
            )}
          />

          <ListGroup
            heading={backEnd.heading}
            list={backEnd.list}
            renderItem={(item) => (
              <li className='list__item image animate-list-item'>{item}</li>
            )}
          />
        </div>
      </div>
    </section>
  );
}
