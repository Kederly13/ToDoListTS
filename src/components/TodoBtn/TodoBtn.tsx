import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './TodoBtn.module.sass';

interface IEditBtnProps {
    id?: string;
    icon: ReactElement;
    handleButtonClick: () => void;
};


export const TodoBtn: React.FC<IEditBtnProps> = ({id, icon, handleButtonClick }) => 
    <button type='button' onClick={handleButtonClick} className={classes.todoBtn}>
        {icon}
    </button>
