import { CategoryFilter } from './CategoryFilter';
import { SortFilter } from './SortFilter';

import classes from './Filters.module.sass';

export const Filters: React.FC = () => (
    <div className={classes.filters}>
        <CategoryFilter />
        <SortFilter />
    </div>
);