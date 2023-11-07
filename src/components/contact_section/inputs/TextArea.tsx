type TextAreaProps = {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
};

export default function TextArea({
  id,
  name,
  value,
  onChange,
  onFocus,
  onBlur,
}: TextAreaProps) {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}
