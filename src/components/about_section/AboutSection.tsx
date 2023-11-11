// React router
import { Link } from 'react-router-dom';

// Hooks
import useAnimation from '../../hooks/useAnimation';
import useModal from '../../hooks/useModal';

// Components
import Button from '../buttons/Button';
import HeadingSection from '../text_elements/HeadingSection';
import BodyText from '../text_elements/BodyText';

export default function AboutSection() {
  const { downloadCV } = useModal();
  // useAnimation(element id,trigger id,{from options},{to options})
  useAnimation(
    '.about-animate-image',
    '#about',
    {
      scale: 1.4,
      opacity: 0,
    },
    { scale: 1, opacity: 1, duration: 1, ease: 'power2.Out' }
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
      delay: 0.5,
      stagger: 0.05,
      ease: 'power2.Out',
    }
  );

  return (
    <section className='section about-section' id='about'>
      <div className='container'>
        <div className='image about-animate-image'>
          <div className='image__wrapper'>
            <img
              srcSet='/images/about/profile-260w.webp 260w, /images/about/profile-550w.webp 550w'
              sizes='(min-width: 1360px) 550px, (min-width: 980px) 41.67vw, (min-width: 700px) 550px, (min-width: 560px) calc(58.33vw + 153px), calc(100vw - 40px)'
              src='/images/about/profile-550x550.webp'
              alt='Craig Puxty'
              width='550px'
              height='550px'
              loading='lazy'
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
              <span>download curriculum vitae</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
