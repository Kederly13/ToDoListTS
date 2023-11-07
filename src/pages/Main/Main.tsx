import { SearchForm } from './components/SearchForm';
import { SortButton } from './components/Buttons/SortButton';
import { useEffect, useState } from 'react';

import classes from './main.module.sass';

export const Main = () => (
    <section className={classes.main}>
        <div className={classes.container}>
            <SearchForm />
            <SortButton />
        </div>
    </section>
);