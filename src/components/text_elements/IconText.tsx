type IconTextProps = {
  icon: React.ReactElement;
  text: string;
  anim?: string;
};

export default function IconText({ icon, text, anim = '' }: IconTextProps) {
  return (
    <div className={`icon-text ${anim}`}>
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
}
