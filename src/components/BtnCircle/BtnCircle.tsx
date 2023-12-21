import { ReactNode } from 'react';
import classNames from 'classnames';

import classes from './BtnCircle.module.sass';

interface IBtnCircleProps {
    className?: string;
    icon: ReactNode;
    onClick: () => void;
    style?: 'green' | 'blue'
};

export const BtnCircle: React.FC <IBtnCircleProps> = ({ className, icon, onClick, style = 'blue' }) => 
    <button type='button' onClick={onClick} className={classNames(classes.checkListBtn, className, {
        [classes[style]]: style
    })}>
        <span className={classes.checkListBtn__sign}>{icon}</span>
    </button>