import React from 'react';
import "../styles/Button.css";

interface ButtonProps {
    text?: string;
    addClass?: string;
    btntype: 'submit' | 'button';
    disabled?: boolean;
    onClick?: any;
    id?: any;
}

export const Button: React.FC<ButtonProps> = (
    {
        text,
        addClass,
        btntype,
        disabled,
        onClick,
        id,   
    }) => {
    const tabIndex = 0;
    return (
        <section className='btn-relative' id={id}>
            <button
                tabIndex={tabIndex}
                id={id}
                onClick={onClick}
                type={btntype === 'button' ? 'button' : 'submit'}
                className={`btn ${addClass}`}
                disabled={disabled}
            >
                {text}            
            </button>   
        </section>
    );
}
