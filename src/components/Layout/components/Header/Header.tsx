import { Logo } from '../../../Logo';

import classes from './header.module.scss';

export const Header = () => (
    <header className={classes.header}>
        <div className={classes.container}>
            <Logo />
        </div>
    </header>
);