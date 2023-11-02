type HeadingDivVariants =
  | 'heading--h1'
  | 'heading--h2'
  | 'heading--h3'
  | 'heading--lead';

type HeadingDivProps = {
  heading: string;
  variant: HeadingDivVariants;
  anim?: string;
};

export default function HeadingDiv({
  heading,
  variant,
  anim = '',
}: HeadingDivProps) {
  return <div className={`heading ${variant} ${anim}`}>{heading}</div>;
}
