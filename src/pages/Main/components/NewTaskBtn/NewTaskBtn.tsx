import { FC, ReactNode } from 'react';

import classes from './newTaskBtn.module.sass';

interface IButtonProps {
    onClick: () => void,
    children: ReactNode
};

export const NewTaskBtn: FC<IButtonProps> = ({ onClick, children }) => (
    <button type='button' onClick={onClick} className={classes.newTaskBtn}>
        {children}
    </button>
);