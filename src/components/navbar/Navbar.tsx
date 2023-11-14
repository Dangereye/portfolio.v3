// React router
import { Link } from 'react-router-dom';

// Hooks
import useAnimation from '../../hooks/useAnimation';

// Components
import Navigation from '../navigation/Navigation';
import MobileIcon from './mobile_icon/MobileIcon';

// Data
import { navigation } from '../../data/navigation';
import Logo from '../../svgs/Logo';

export default function Navbar() {
  // useAnimation(element id,trigger id,{from options},{to options})
  useAnimation(
    '.navbar-animate',
    '#navbar',
    { y: -300 },
    { y: 0, duration: 1, delay: 0.3, ease: 'power2.out' }
  );

  return (
    <header className='navbar' id='navbar'>
      <div className='container navbar-animate'>
        <Link to='/' className='logo'>
          <Logo />
          <span className='logo__text'>Craig Puxty</span>
        </Link>
        <Navigation array={navigation} />
        <MobileIcon />
      </div>
    </header>
  );
}
