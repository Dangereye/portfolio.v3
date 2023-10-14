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

  useAnimation(id, '#mobile-menu', {
    y: 0,
    x: -300,
    stagger: 0.06,
    duration: 0.6,
  });

  return (
    <div
      className={
        mobileNavIsOpen ? 'mobile-navigation' : 'mobile-navigation closed'
      }
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
