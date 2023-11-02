type Heading3Props = {
  heading: string;
  anim?: string;
};

export default function Heading3({ heading, anim = '' }: Heading3Props) {
  return <h3 className={`heading heading--h3 ${anim}`}>{heading}</h3>;
}
