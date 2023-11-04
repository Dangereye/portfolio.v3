type BodyTextVariant = 'body-text--lead' | '';

type BodyTextProps = {
  text: string | React.ReactNode;
  variant?: BodyTextVariant;
  anim?: string;
};

export default function BodyText({
  text,
  variant = '',
  anim = '',
}: BodyTextProps) {
  return <p className={`body-text ${variant} ${anim}`}>{text}</p>;
}
