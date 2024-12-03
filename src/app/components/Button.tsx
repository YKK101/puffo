import React from 'react';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    rounded?: boolean;
    blog?: boolean;
    className?: string;
    variant?: 'primary' | 'outline';
    size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled = false, type = 'button', rounded, blog, className, variant = 'primary', size = 'medium' }) => {
    let btnClassName = `button ${variant === 'primary' ? 'primary-button' : 'outline-button'}`;
    btnClassName = `${btnClassName} ${rounded ? 'button-rounded' : 'button-squared'}`;
    btnClassName = `${btnClassName} ${size === 'small' ? 'button-small' : size === 'medium' ? 'button-medium' : size === 'large' ? 'button-large' : ''}`;
    btnClassName = `${btnClassName} ${blog ? 'button-blog' : ''}`;
    btnClassName = `flex items-center justify-center ${btnClassName} ${className}`

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={btnClassName}
        >
            {children}
        </button>
    );
};

export default Button;
