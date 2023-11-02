type Heading2Props = {
  heading: string;
  anim?: string;
};

export default function Heading2({ heading, anim = '' }: Heading2Props) {
  return <h2 className={`heading heading--h2 ${anim}`}>{heading}</h2>;
}
