// React
import { useState } from 'react';

type InputTypes = 'text' | 'email';

type FormInputProps = {
  id: string;
  type: InputTypes;
  name: string;
  init?: string;
  onFocus: () => void;
  onBlur: () => void;
};

export default function FormInput({
  id,
  type,
  name,
  init = '',
  onFocus,
  onBlur,
}: FormInputProps) {
  const [value, setValue] = useState(init);
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}
