// React router
import { Link } from 'react-router-dom';

// Animation hook
import useAnimation from '../../hooks/useAnimation';

// Components
import Feature from './feature/Feature';

// SVGs
import ReactSvg from '../../svgs/React';
import CompassSvg from '../../svgs/Compass';
import ScreenSvg from '../../svgs/Screens';

export default function HeroSection() {
  // Animation
  // useAnimation(element id,trigger id,{animation options},{trigger options})

  useAnimation('.hero-animate-bg', '#hero', {
    y: 0,
    scale: 1.4,
    duration: 1,
    immediateRender: false,
  });

  useAnimation('.hero-animate-up', '#hero', {
    duration: 1,
    immediateRender: false,
  });

  useAnimation('.hero-animate-down', '#hero', {
    y: -300,
    stagger: 0.1,
    ease: 'back.out(1.4)',
    immediateRender: false,
  });

  return (
    <section className='hero-section' id='hero'>
      <div className='background hero-animate-bg'></div>
      <div className='container'>
        <div className='typography'>
          <div className='heading heading--lead hero-animate-down'>
            Front-end developer
          </div>
          <h1 className='heading heading--h1'>
            <div className='hero-animate-down'>I build things</div>
            <div className='hero-animate-down'>
              for the <span>Web</span>
            </div>
          </h1>
          <p className='body-text hero-animate-down'>
            Specialising in{' '}
            <Link
              to='https://reactjs.org'
              rel='noopener no referrer'
              target='_blank'
            >
              React.js
            </Link>{' '}
            development.
            <br /> I love building (and occasionally designing) beautiful,
            modern software that's accessible, scalable, responsive and
            performance-driven.
          </p>
          <div className='btns hero-animate-down'>
            <Link to='/#projects' className='btn btn--primary btn--large'>
              Latest projects
            </Link>
          </div>
        </div>
        <div className='features hero-animate-up'>
          <Feature icon={<ReactSvg />} text='React.js focused' />
          <Feature icon={<CompassSvg />} text='Modern designs' />
          <Feature icon={<ScreenSvg />} text='Device responsive' />
        </div>
      </div>
    </section>
  );
}
