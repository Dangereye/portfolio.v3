// React router
import { Link } from 'react-router-dom';

// Hooks
import useAnimation from '../../hooks/useAnimation';

// Components
import HeadingSection from '../text_elements/HeadingSection';
import Heading3 from '../text_elements/Heading3';
import BodyText from '../text_elements/BodyText';

export default function AboutSection() {
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
            text="Hello and welcome to my corner of the web! I'm Craig Puxty, a self-taught front-end developer and creative from Buckley, Flintshire, UK, passionate about crafting visually stunning digital experiences."
            anim='about-animate-text'
          />
          <Heading3 heading='My Journey' anim='about-animate-text' />
          <BodyText
            text="I began my journey in 2010, building a solid foundation in HTML, CSS and JavaScript while continuously expanding my skills (including TypeScript) through online courses and personal projects. For many years, I've used React.js to build engaging websites, utilising functional components, state management (with hooks, reducers and the context API) and third-party API integration for dynamic content. More recently, I've shifted my focus to WordPress, enabling me to build high-quality websites more efficiently."
            anim='about-animate-text'
          />
          <Heading3 heading='My Creative Edge' anim='about-animate-text' />
          <BodyText
            text="My experience creating digital assets, from website banners and carousel images to layouts, has refined my attention to detail. Recently, I've broadened my focus to logo design and branding, tying every element together into a cohesive visual identity."
            anim='about-animate-text'
          />
          <Heading3
            heading='Entrepreneurial Ventures'
            anim='about-animate-text'
          />
          <BodyText
            text='Towards the end of 2024, my brother and I launched Apt.creative as a side hustle. After several months of applying for tech roles without success, I decided to create my own opportunity for extra income while further exploring my passion for both development and creative work. Apt.creative is an exciting venture where we experiment with innovative solutions while continuously refining our craft. Our website is still under construction but is gradually evolving into a vibrant showcase of our ambition and creative drive.'
            anim='about-animate-text'
          />
          <Heading3 heading="Let's Collaborate" anim='about-animate-text' />
          <BodyText
            text="I'm always open to new challenges, collaborations, and opportunities that push creative boundaries and expand my skill set. If you have any questions or are interested in working together, please don’t hesitate to get in touch!"
            anim='about-animate-text'
          />

          <div className='btns about-animate-text'>
            <Link to='/#contact' className='btn btn--primary '>
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
