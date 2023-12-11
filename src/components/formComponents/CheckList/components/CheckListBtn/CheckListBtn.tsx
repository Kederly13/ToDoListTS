import React from 'react';

import classes from './CheckListBtn.module.sass';

interface CheckListBtnProps {
    className?: string;
    sign: string;
    onClick: () => void;
};

export const CheckListBtn: React.FC <CheckListBtnProps> = ({ className, sign, onClick }) => 
    <button type='button' onClick={onClick} className={`${classes.checkListBtn} ${className}`}>
        <span className={classes.checkListBtn__sign}>{sign}</span>
    </button>