// React router
import { Link } from 'react-router-dom';

// Data
import { navigation } from '../../data/navigation';

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/'>Craig puxty</Link>
      <nav className='navigation'>
        {navigation.map((link) => (
          <Link key={link.name} to={link.link}>
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
