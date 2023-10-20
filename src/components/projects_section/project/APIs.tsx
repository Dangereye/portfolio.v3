type APIsProps = {
  name: string;
  apis: { name: string; anchor: string }[] | null;
  anim: string;
};

export default function Apis({ name, apis, anim }: APIsProps) {
  if (apis && apis.length > 0) {
    return (
      <div className={`apis ${anim}`}>
        <h4 className='heading heading--h3'>APIs</h4>
        <div className='btns tags'>
          {apis.map((item, i) => (
            <a
              key={`${name}-api-${i}`}
              href={item.anchor}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn--tag'
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
