import Heading2 from './Heading2';
import HeadingDiv from './HeadingDiv';

type HeadingSectionProps = {
  lead: string;
  heading: string;
  anim: string;
};

export default function HeadingSection({
  lead,
  heading,
  anim,
}: HeadingSectionProps) {
  return (
    <header className='heading heading--section'>
      <HeadingDiv variant='heading--lead' heading={lead} anim={anim} />
      <Heading2 heading={heading} anim={anim} />
    </header>
  );
}
