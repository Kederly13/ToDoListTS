import Plus from './plus.svg';
import { FC, ReactNode } from 'react';

import classes from './newTaskBtn.module.sass';

interface IButtonProps {
    onClick: () => void,
    children: ReactNode
}

export const NewTaskBtn: FC<IButtonProps> = ({ onClick, children }) => (
    <button type='button' onClick={onClick} className={classes.newTaskBtn}>
        {children}
        {/* <img src={Plus} alt='add' className={classes.newTaskBtn__plus}/>
        Add New Task */}
    </button>
);