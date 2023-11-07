type InputTypes = 'text' | 'email' | 'number';

type FormInputProps = {
  id: string;
  type: InputTypes;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
};

export default function FormInput({
  id,
  type,
  name,
  value,
  onChange,
  onFocus,
  onBlur,
}: FormInputProps) {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}
