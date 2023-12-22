import { ReactNode } from 'react';
import classNames from 'classnames';

import classes from './BtnCircle.module.sass';

interface IBtnCircleProps {
    className?: string;
    icon: ReactNode;
    onClick?: () => void;
    style?: 'lightBlue' | 'darkBlue' | 'white'
};

export const BtnCircle: React.FC <IBtnCircleProps> = ({ className, icon, onClick, style = 'lightBlue' }) => 
    <button type='button' onClick={onClick} className={classNames(classes.checkListBtn, className, {
        [classes[style]]: style
    })}>
        {icon}
    </button>