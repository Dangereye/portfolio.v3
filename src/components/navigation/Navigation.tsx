// React router
import { Link } from 'react-router-dom';

type NavigationProps = {
  array: { name: string; link: string }[];
  variant?: 'horizontal' | 'vertical';
};

export default function Navigation({
  array,
  variant = 'horizontal',
}: NavigationProps) {
  return (
    <nav className={`navigation ${variant}`}>
      {array.map((link) => (
        <Link key={link.name} to={link.link}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
