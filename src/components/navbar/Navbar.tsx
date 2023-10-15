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
  // useAnimation(element id,trigger id,{from options},{to options})
  useAnimation(
    '.navbar-animate',
    '#navbar',
    {
      y: -300,
      opacity: 0,
    },
    { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power2.Out' }
  );

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
