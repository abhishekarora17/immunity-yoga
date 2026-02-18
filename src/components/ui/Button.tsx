import styles from './Button.module.css';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    onClick?: () => void;
}

const Button = ({ children, href, variant = 'primary', className = '', onClick }: ButtonProps) => {
    const buttonClass = `${styles.button} ${styles[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={buttonClass}>
                {children}
            </Link>
        );
    }

    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
