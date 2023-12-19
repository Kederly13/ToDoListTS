import { ReactElement } from 'react';

import classes from './TodoBtn.module.sass';

interface IEditBtnProps {
    id?: string;
    icon?: ReactElement;
    handleButtonClick: () => void;
};

export const TodoBtn: React.FC<IEditBtnProps> = ({ icon, handleButtonClick }) => 
    <button type='button' onClick={handleButtonClick} className={classes.todoBtn}>
        {icon}
    </button>
