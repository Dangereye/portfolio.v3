// React router
import { Link } from 'react-router-dom';

// Hooks
import useAnimation from '../../hooks/useAnimation';

// Components
import HeadingSection from '../text_elements/HeadingSection';
import BodyText from '../text_elements/BodyText';
import ListGroup from '../list_group/ListGroup';

// Data
import { environment } from '../../data/skills/enviroment';
import { designTools } from '../../data/skills/designTools';
import { frontEnd } from '../../data/skills/frontEnd';
import { backEnd } from '../../data/skills/backEnd';

export default function SkillsSection() {
  // useAnimation(element id,trigger id,{from options},{to options})
  useAnimation(
    '.skills-animate-bg',
    '#skills',
    {
      scale: 1.3,
      opacity: 0,
    },
    { scale: 1, opacity: 1, duration: 1, ease: 'power2.Out' }
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
      delay: 0.5,
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
      delay: 0.7,
      stagger: 0.01,
      ease: 'power2.Out',
    }
  );

  return (
    <section className='section skills-section' id='skills'>
      <div className='container skills-animate-bg'>
        <div className='background '></div>
        <div className='typography'>
          <HeadingSection
            lead='skills'
            heading='knowledge & experience'
            anim='skills-animate-text'
          />
          <BodyText
            text={
              <>
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
                <Link
                  to='https://business.adobe.com/uk/products/magento/magento-commerce.html'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Magento
                </Link>{' '}
                and{' '}
                <Link
                  to='https://wordpress.com/website-builder'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  WordPress
                </Link>
                . Listed are typical environmental setup and design tools,
                frequently used front-end technologies, frameworks and
                libraries. I also have some experience with back-end
                technologies - DB connection, routing, schemas etc.
              </>
            }
            anim='skills-animate-text'
          />
        </div>
        <div className='lists'>
          <ListGroup
            heading={environment.heading}
            list={environment.list}
            listImage='image'
            renderKey={(item) => item}
            renderItem={(item) => item}
          />
          <ListGroup
            heading={designTools.heading}
            list={designTools.list}
            listImage='image'
            renderKey={(item) => item}
            renderItem={(item) => item}
          />
          <ListGroup
            heading={frontEnd.heading}
            list={frontEnd.list}
            listImage='image'
            renderKey={(item) => item}
            renderItem={(item) => item}
          />

          <ListGroup
            heading={backEnd.heading}
            list={backEnd.list}
            listImage='image'
            renderKey={(item) => item}
            renderItem={(item) => item}
          />
        </div>
      </div>
    </section>
  );
}
