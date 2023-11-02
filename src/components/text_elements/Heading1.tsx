type Heading1Props = {
  heading: string;
  anim?: string;
};

export default function Heading1({ heading, anim = '' }: Heading1Props) {
  return <h1 className={`heading heading--h1 ${anim}`}>{heading}</h1>;
}
