type HeadingOneProps = {
  heading: string;
  anim?: string;
};

export default function HeadingOne({ heading, anim = '' }: HeadingOneProps) {
  return <h1 className={`heading heading--h1 ${anim}`}>{heading}</h1>;
}
