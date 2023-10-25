type ButtonProps = {
  name?: string;
  icon?: React.ReactNode;
  ariaLabel?: string;
  variant: 'btn--primary' | 'btn--secondary' | 'btn--tertiary';
  fnc: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
};

export default function Button({
  name,
  icon,
  ariaLabel,
  variant,
  fnc = () => {},
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`btn ${variant}${disabled && 'btn--disabled'}`}
      onClick={fnc}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {name && name}
      {icon && icon}
    </button>
  );
}
