// React
import { useContext } from 'react';

// Context
import { AppContext } from '../../context/appContext';

// Components
import Navigation from '../navigation/Navigation';

// Data
import { navigation } from '../../data/navigation';

export default function MobileNavigation() {
  const { mobileNavIsOpen, setMobileNavIsOpen } = useContext(AppContext);
  return (
    <div
      className={
        mobileNavIsOpen ? 'mobile-navigation' : 'mobile-navigation closed'
      }
    >
      <div className='container'>
        <Navigation array={navigation} variant='vertical' />
      </div>
    </div>
  );
}
