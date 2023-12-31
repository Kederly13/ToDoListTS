import { ReactNode } from 'react';
import classNames from 'classnames';

import classes from './CheckListBtn.module.sass';

interface CheckListBtnProps {
    className?: string;
    icon: ReactNode;
    onClick: () => void;
    style?: 'green' | 'blue'
};

export const CheckListBtn: React.FC <CheckListBtnProps> = ({ className, icon, onClick, style = 'blue' }) => 
    <button type='button' onClick={onClick} className={classNames(classes.checkListBtn, className, {
        [classes[style]]: style
    })}>
        <span className={classes.checkListBtn__sign}>{icon}</span>
    </button>