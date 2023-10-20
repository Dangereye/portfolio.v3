type ThirdPartyProps = {
  name: string;
  third_party:
    | {
        name: string;
        anchor: string;
      }[]
    | null;
  anim: string;
};

export default function ThirdParty({
  name,
  third_party,
  anim,
}: ThirdPartyProps) {
  if (third_party && third_party.length > 0) {
    return (
      <div className={`third-party ${anim}`}>
        <h4 className='heading heading--h3'>Third party</h4>
        <div className='btns tags'>
          {third_party.map((item, i) => (
            <a
              key={`${name}-api-${i}`}
              href={item.anchor}
              target='_blank'
              rel='noreferrer'
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
