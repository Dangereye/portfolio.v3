// React router
import { Link } from 'react-router-dom';

type NavigationProps = {
  array: { name: string; link: string }[];
  variant?: 'horizontal' | 'vertical';
  animation?: string;
  onClick?: () => void | undefined;
};

export default function Navigation({
  array,
  variant = 'horizontal',
  animation = '',
  onClick,
}: NavigationProps) {
  return (
    <nav className={`navigation ${variant}`}>
      {array.map((link) => (
        <Link
          key={link.name}
          to={link.link}
          className={`${animation}`}
          onClick={onClick && onClick}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
