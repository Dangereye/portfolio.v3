type TechnologiesProps = {
  name: string;
  tech: { image: string; name: string; width: string; height: string }[] | null;
  anim: string;
};

export default function Technologies({ name, tech, anim }: TechnologiesProps) {
  if (tech && tech.length) {
    return (
      <div className={`tech ${anim}`}>
        <h4 className='heading heading--h3'>Technologies</h4>
        <div className='tech__items'>
          {tech.map((item, i) => (
            <div
              key={`${name}-tech-${i}`}
              className='tech__icon'
              data-tooltip={item.name}
            >
              <img
                src={item.image}
                width={item.width}
                height={item.height}
                alt={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
}
