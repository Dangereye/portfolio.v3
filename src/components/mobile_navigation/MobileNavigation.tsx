// React
import { useContext } from 'react';

// Context
import { AppContext } from '../../context/appContext';

// Hooks
import useAnimation from '../../hooks/useAnimation';

// Components
import Navigation from '../navigation/Navigation';

// Data
import { navigation } from '../../data/navigation';

export default function MobileNavigation() {
  const { mobileNavIsOpen, setMobileNavIsOpen } = useContext(AppContext);
  const id = mobileNavIsOpen ? '.mobile-menu-animate' : null;
  // useAnimation(element id,trigger id,{from options},{to options})
  useAnimation(
    id,
    '#mobile-menu',
    {
      x: -300,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.3,
      delay: 0.2,
      stagger: 0.06,
      ease: 'power2.Out',
    }
  );

  return (
    <div
      className={
        mobileNavIsOpen ? 'mobile-navigation' : 'mobile-navigation closed'
      }
      id='mobile-menu'
    >
      <div className='container'>
        <Navigation
          array={navigation}
          variant='vertical'
          animation='mobile-menu-animate'
          onClick={() => setMobileNavIsOpen(false)}
        />
      </div>
    </div>
  );
}
