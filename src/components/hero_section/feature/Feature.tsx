type FeatureProps = {
  icon: React.ReactElement;
  textTop: string;
  textBottom: string;
};

export default function Feature({ icon, textTop, textBottom }: FeatureProps) {
  return (
    <div className='feature'>
      <div className='feature__icon'>
        <span>{icon}</span>
      </div>
      <div className='feature__text'>{textTop}</div>
      <div className='feature__text'>{textBottom}</div>
    </div>
  );
}
