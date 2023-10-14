// React router
import { Link } from 'react-router-dom';

// Components
import Navigation from '../navigation/Navigation';
import MobileIcon from './mobile_icon/MobileIcon';

// Data
import { navigation } from '../../data/navigation';

export default function Navbar() {
  return (
    <header className='navbar'>
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
