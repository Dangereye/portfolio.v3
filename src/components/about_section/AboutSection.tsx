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
            text="Hi there, I'm Craig Puxty, a front-end developer based in Flintshire, North Wales, UK. I specialise in React.js development with a passion for creating modern, stunning software solutions that boast top-notch performance, scalability, accessibility, and fully responsive behaviour."
            anim='about-animate-text'
          />
          <BodyText
            text='Throughout numerous years, I have dedicated substantial time and effort to continually enhance and broaden my expertise in front-end technologies, including HTML, CSS/Sass, JavaScript, TypeScript, React.js, and various design tools.'
            anim='about-animate-text'
          />
          <BodyText
            text='My commitment to excellence is evident in my work, where I adhere to fundamental principles such as straightforward navigation, visual hierarchy, and consistency. I take pride in delivering high-quality, tailor-made, user-friendly, and visually appealing software, as showcased in my completed projects.'
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
