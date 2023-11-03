import { Logo } from 'components/Logo';

import classes from './header.module.sass';

export const Header = () => (
    <header className={classes.header}>
        <div className={classes.container}>
            <Logo />
        </div>
    </header>
);