// React router
import { Link } from 'react-router-dom';

// Hooks
import useAnimation from '../../hooks/useAnimation';

// Components
import Navigation from '../navigation/Navigation';
import MobileIcon from './mobile_icon/MobileIcon';

// Data
import { navigation } from '../../data/navigation';

export default function Navbar() {
  // useAnimation('.navbar-animate', '#navbar', {
  //   y: -300,
  //   duration: 1,
  //   immediateRender: false,
  // });

  return (
    <header className='navbar navbar-animate' id='navbar'>
      <div className='container'>
        <Link to='/' className='logo'>
          Craig Puxty
        </Link>
        <Navigation array={navigation} />
        <MobileIcon />
      </div>
    </header>
  );
}
