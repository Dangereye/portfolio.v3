// Components
import { Link } from 'react-router-dom';
// import ArticleHeading from '../../components/ArticleHeading';
// import Button from '../../components/Button';

// Animation hook
import useAnimation from '../../hooks/useAnimation';
// import useModal from '../../hooks/useModal';

export default function AboutSection() {
  //   const { closeModal, downloadCV } = useModal();
  // Animation
  // useAnimation(element id,trigger id,{animation options},{trigger options})
  useAnimation('.about-animate', '#about', {
    duration: 1,
    scale: 1.3,
    immediateRender: false,
  });

  useAnimation('.about-animate-text', '#about', {
    y: -300,
    stagger: 0.05,
    immediateRender: false,
    ease: 'back.out(1.4)',
  });

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
          <div className='heading heading--lead about-animate-text'>
            About me
          </div>
          <h2 className='heading heading--h2 about-animate-text'>
            Front-end developer
          </h2>
          <p className='body-text body-text--lead about-animate-text'>
            Specialising in React.js development.
          </p>
          <p className='body-text about-animate-text'>
            Hi! I'm Craig Puxty, a bespoke front-end developer from a small town
            in Flintshire, North Wales, UK.
          </p>
          <p className='body-text about-animate-text'>
            Over several years, I've dedicated much of my free time to gaining
            proficiency in several front-end technologies and design tools,
            together with some back-end knowledge.
          </p>
          <p className='body-text about-animate-text'>
            My development process is meticulous, following fundamental design
            principles: "keep it simple, stupid" (KISS), "don't repeat yourself"
            (DRY), simple navigation, visual hierarchy, consistency, etc.
          </p>
          <p className='body-text about-animate-text'>
            My mission is to create beautiful, modern software with custom,
            high-quality imagery - that's accessible, scalable, responsive and
            performance-driven.
          </p>
          <div className='btns about-animate-text'>
            <Link to='/#contact'>
              <a className='btn btn--large btn--primary '>Contact me</a>
            </Link>
            {/* <Button
              name='Download CV'
              classes='btn--large btn--tertiary'
              func={downloadCV}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
