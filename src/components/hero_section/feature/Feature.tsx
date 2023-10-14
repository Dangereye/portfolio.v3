type FeatureProps = {
  icon: React.ReactElement;
  text: string;
};

export default function Feature({ icon, text }: FeatureProps) {
  return (
    <div className='feature'>
      <div className='feature__icon'>
        <span>{icon}</span>
      </div>
      <span className='feature__text'>{text}</span>
    </div>
  );
}
