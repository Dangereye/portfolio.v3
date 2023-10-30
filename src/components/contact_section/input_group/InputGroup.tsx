type InputGroupProps = {
  anim: string;
  id: string;
  name: string;
  children: React.ReactNode;
  error_msg: string;
};

export default function InputGroup({
  anim,
  id,
  name,
  children,
  error_msg,
}: InputGroupProps) {
  return (
    <div className={`input-group ${anim}`}>
      <label htmlFor={id}>{name}</label>
      {children}
      <div className='input-group__error-text'>{error_msg}</div>
    </div>
  );
}
