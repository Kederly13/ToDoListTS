import { CategoryButton } from './CategoryButton';
import { SortButton } from './SortButton';

import classes from './buttons.module.sass';

export const Buttons = () => (
    <div className={classes.buttons}>
        <CategoryButton />
        <SortButton />
    </div>
);