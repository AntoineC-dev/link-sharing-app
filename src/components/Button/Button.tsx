import clsx from 'clsx';
import styles from './Button.module.css';

interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'outlined';
}

function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button data-variant={variant} {...props} className={clsx(styles.button, props.className)}>
      {children}
    </button>
  );
}

export default Button;
