type IconTextProps = {
  icon: React.ReactElement;
  text: string;
  anim?: string;
};

export default function IconText({ icon, text, anim = '' }: IconTextProps) {
  return (
    <div className={`icon-text ${anim}`}>
      <span className='icon-text__icon'>{icon}</span>
      <span className='icon-text__text'>{text}</span>
    </div>
  );
}
