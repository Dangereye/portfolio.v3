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
            text='Welcome to my corner of the web! I&lsquo;m a self-taught front-end developer based in Buckley, Flintshire, UK, embodying a "can do" mindset and a commitment to integrity, dependability, and meticulous work. Over the past three years, I&lsquo;ve immersed myself in React.js, showcasing not just coding skills but a tenacious problem-solving attitude.'
            anim='about-animate-text'
          />
          <BodyText
            text='My work philosophy is grounded in a strong work ethic, coupled with emotional intelligence that fosters collaboration. I excel in HTML, CSS & Sass (SCSS), JavaScript, and TypeScript, with a primary focus on coding. While coding is my forte, I occasionally explore the design realm, infusing creativity into my toolkit. Proficient in translating concepts into code, I bring a meticulous approach to crafting seamless and user-friendly experiences.'
            anim='about-animate-text'
          />
          <BodyText
            text='What sets me apart is not just my technical prowess but the continuous journey of self-discovery and learning that fuels my passion for front-end development. I approach each project as an opportunity to grow, learn, and push boundaries. With a genuine excitement for the ever-evolving tech landscape, I&lsquo;m eager to contribute my skills to meaningful projects and explore the endless possibilities that lie ahead. Let&lsquo;s collaborate and turn ideas into remarkable digital experiences!'
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
