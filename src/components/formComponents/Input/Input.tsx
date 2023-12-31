import { ReactNode } from 'react';

import classes from './Input.module.sass';

interface IInput {
    label?: string;
    htmlFor?: string;
    id?: string;
    placeholder?: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    buttonComponent?: ReactNode;
    readOnly?: boolean;
};

export const Input: React.FC<IInput> = ({ htmlFor, id, placeholder, value, label, onChange, buttonComponent, readOnly = false }) => (
    <div className={classes.inputItem}>
        <label htmlFor={htmlFor} className={classes.inputItem__label}>{label}</label>
        <div className={classes.inputItem__wrapper}>
            <input
                placeholder={placeholder}
                id={id}
                onChange={onChange}
                value={value}
                className={classes.inputItem__input}
                readOnly={readOnly}
            />
            {buttonComponent && buttonComponent}
        </div> 
    </div>
);