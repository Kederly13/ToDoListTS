import { Logo } from '../../../Logo';

import classes from './footer.module.sass';

export const Footer = () => (
    <footer className={classes.footer}>
        <div className={classes.container}>
            <Logo />
        </div>
    </footer>
);