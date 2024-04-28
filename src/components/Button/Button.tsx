interface ButtonProps {
  text?: string;
  type?: 'button';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}
const Button = ({
  text = 'Default text',
  type = 'button',
  onClick,
  disabled = false,
  className = '',
}: ButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
