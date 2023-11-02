// React router
import { Link } from 'react-router-dom';

type SocialIconsProps = {
  list: { name: string; icon: React.ReactElement; anchor: string }[];
  anim: string;
};

export default function SocialIcons({ list, anim }: SocialIconsProps) {
  return (
    <div className={`btns ${anim}`}>
      {list.map((item) => (
        <Link
          key={`social-icon-${item.name}`}
          to={item.anchor}
          target='_blank'
          rel='noopener noreferrer'
          className='social-icon'
          data-tooltip={item.name}
          aria-label={item.name}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
