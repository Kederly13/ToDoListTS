import { SearchForm } from './components/SearchForm';
import { Filter } from './components/Buttons/FilterButton';

import classes from './main.module.sass';

export const Main = () => (
    <section className={classes.main}>
        <div className={classes.container}>
            <SearchForm />
            <Filter/>
        </div>
    </section>
);