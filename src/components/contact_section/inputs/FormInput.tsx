// React
import { useState } from 'react';

type InputTypes = 'text' | 'email';

type FormInputProps = {
  id: string;
  type: InputTypes;
  name: string;
  init?: string;
};

export default function FormInput({
  id,
  type,
  name,
  init = '',
}: FormInputProps) {
  const [value, setValue] = useState(init);
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onFocus={() => {}}
      onBlur={() => {}}
    />
  );
}
