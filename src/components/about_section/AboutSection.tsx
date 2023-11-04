// React
import { useContext } from 'react';

// React router
import { Link } from 'react-router-dom';

// Context
import { AppContext } from '../../context/appContext';

// Components
import Button from '../buttons/Button';
import HeadingSection from '../text_elements/HeadingSection';

// Animation hook
import useAnimation from '../../hooks/useAnimation';
import BodyText from '../text_elements/BodyText';

export default function AboutSection() {
  const { setModalIsOpen } = useContext(AppContext);
  // useAnimation(element id,trigger id,{from options},{to options})
  useAnimation(
    '.about-animate',
    '#about',
    {
      scale: 1.4,
      opacity: 0,
    },
    { scale: 1, opacity: 1, duration: 1, delay: 0.5, ease: 'power2.Out' }
  );

  useAnimation(
    '.about-animate-text',
    '#about',
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

  const downloadCV = () => {
    setModalIsOpen(true);
  };

  return (
    <section className='section about-section' id='about'>
      <div className='container'>
        <div className='image about-animate'>
          <div className='image__wrapper'>
            <img
              src='/images/about/profile.webp'
              alt='Craig puxty'
              width='500px'
              height='500px'
            />
          </div>
        </div>
        <div className='text'>
          <HeadingSection
            lead='about me'
            heading='Front-end developer'
            anim='about-animate-text'
          />
          <BodyText
            variant='body-text--lead'
            text='Specialising in React.js development.'
            anim='about-animate-text'
          />
          <BodyText
            text="Hi! I'm Craig Puxty, a bespoke front-end developer from a small town
            in Flintshire, North Wales, UK."
            anim='about-animate-text'
          />
          <BodyText
            text="Over several years, I've dedicated much of my free time to gaining
            proficiency in several front-end technologies and design tools,
            together with some back-end knowledge."
            anim='about-animate-text'
          />
          <BodyText
            text="My development process is meticulous, following fundamental design
            principles: keep it simple, stupid (KISS), don't repeat yourself
            (DRY), simple navigation, visual hierarchy, consistency, etc."
            anim='about-animate-text'
          />
          <BodyText
            text="My mission is to create beautiful, modern software with custom,
            high-quality imagery - that's accessible, scalable, responsive and
            performance-driven."
            anim='about-animate-text'
          />

          <div className='btns about-animate-text'>
            <Link to='/#contact' className='btn btn--primary '>
              Contact me
            </Link>
            <Button variant='btn--tertiary' fnc={downloadCV}>
              <span>Download CV</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
