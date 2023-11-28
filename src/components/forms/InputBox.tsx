import React from 'react';
import "../styles/InputBox.css";

interface InputBoxProps {
    style?: string;
    text?: string;
    id: string;
    placeholder?: string;
    disabled?: boolean;
    label?: string;
    type: string;
    name: string;
    addClass?: string;
    input_Class?: string;
    values?: string | number | Array<string>;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onIconClick?: (e: any) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    errors?: string | Array<string> | any;
    icon?: 'search' | 'password' | 'delete' | 'file' | null;
}

export const InputBox: React.FC<InputBoxProps> = (
    {
        label,
        placeholder,
        id,
        style,
        disabled,
        type,
        onChange,
        onIconClick,
        addClass,
        input_Class,
        name,
        errors,
        onBlur,
        values,
        icon,
    }) => {
    return (
        <>
            <div className={`input-group ${addClass}`}>
                <div className="flex">
                    <div className="flex-grow">
                        {label && (
                            <label htmlFor={id}>
                                {label}
                            </label>
                        )}
                    </div>
                </div>

                <div className="relative">
                    <input
                        id={id}
                        type={type}
                        className={`text-field w-100 ${input_Class || ''} ${errors ? 'input-error' : ''
                            }`}
                        placeholder={placeholder}
                        onChange={onChange}
                        disabled={disabled}
                        name={name}
                        onBlur={onBlur}
                        value={values}
                        autoComplete="off"
                        aria-labelledby={id}
                    />
                    {/* {icon === 'password' && (
                        <div tabIndex={0} onKeyDown={handleClick} className="input-password onkeyup" aria-label={type === 'password' ? 'hide password icon' : 'show password icon'} onClick={onIconClick}>
                            {type === 'password' ? <PasswordHidden /> : < Password />}
                        </div>
                    )} */}

                    {/* {icon === 'search' && (
                        <div className="input-search">
                            <Search />
                        </div>
                    )} */}
                </div>
                {errors && <div className="form-error-msg">{errors}</div>}
            </div>
        </>
    );
}