// React
import { useState } from 'react';

type TextAreaProps = {
  id: string;
  name: string;
  init?: string;
};

export default function TextArea({ id, name, init = '' }: TextAreaProps) {
  const [value, setValue] = useState(init);
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onFocus={() => {}}
      onBlur={() => {}}
    />
  );
}
