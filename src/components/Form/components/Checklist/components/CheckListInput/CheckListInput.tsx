import { ReactNode } from 'react';

import classes from './CheckListInput.module.sass';

interface ICheckListInput {
    label?: string;
    htmlFor?: string;
    id?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    buttonComponent?: ReactNode;
}

export const CheckListInput: React.FC<ICheckListInput> = ({ htmlFor, id, placeholder, value, label, onChange, buttonComponent }) => (
    <div className={classes.checkItem}>
        <label htmlFor={htmlFor} className={classes.checkItem__label}>{label}</label>
        <div className={classes.checkItem__wrapper}>
            <input
                placeholder={placeholder}
                id={id}
                onChange={onChange}
                value={value}
                className={classes.checkItem__input}
            />
            {buttonComponent && buttonComponent}
        </div> 
    </div>
);