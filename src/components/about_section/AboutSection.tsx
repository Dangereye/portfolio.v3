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
            text='Hello and welcome to my corner of the web! I&lsquo;m Craig Puxty, a self-taught front-end developer based in Buckley, Flintshire, UK, with a passion for creating seamless and visually appealing digital experiences. '
            anim='about-animate-text'
          />
          <BodyText
            text='My journey into the world of coding began in 2016, and although I&lsquo;m largely self-taught, I continually expand my knowledge through online courses. Proficient in HTML, CSS, JavaScript, and steadily mastering TypeScript, my focus since mid-2020 has been on React.js. I&lsquo;ve completed several small to mid-sized personal projects, showcasing my skills in functional components, hooks, reducers, and the context API. '
            anim='about-animate-text'
          />
          <BodyText
            text='In addition to coding, I enjoy design and have gained proficiency in various design tools such as Photoshop, Illustrator, InDesign, and Experience Design (Xd). This enables me to easily convert designs into functional code.'
            anim='about-animate-text'
          />
          <BodyText
            text='What excites me most about front-end development is the power to enhance user experiences. I thrive on the creative process, transforming ideas into functional and visually appealing websites that leave a lasting impression.'
            anim='about-animate-text'
          />
          <BodyText
            text='What sets me apart is not just technical know-how but a commitment to critical thinking and problem-solving. Each project is an opportunity to grow, learn, and push boundaries.'
            anim='about-animate-text'
          />
          <BodyText
            text='Thanks for visiting, and I look forward to the opportunity to contribute my skills to meaningful projects. If you&lsquo;re interested in collaboration or have job opportunities, feel free to contact me. Let&lsquo;s collaborate and turn ideas into extraordinary digital experiences!'
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
