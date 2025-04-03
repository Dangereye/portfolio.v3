type TextButton = {
  children: string;
  ariaLabel?: never;
};

type IconButton = {
  children: React.ReactNode;
  ariaLabel: string;
};

type ButtonProps = (TextButton | IconButton) & {
  variant:
    | 'btn--primary'
    | 'btn--secondary'
    | 'btn--tertiary'
    | 'btn--disabled'
    | 'btn--toast';
  fnc: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

export default function Button({
  children,
  ariaLabel,
  variant,
  fnc = () => {},
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`btn ${variant} ${disabled ? 'btn--disabled' : ''}`}
      onClick={fnc}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
