import { DateForm } from './components/DateForm';
import { TimeForm } from './components/TimeForm';

import classes from './DateForms.module.sass';

export const DateForms = () => (
    <div className={classes.dateForms}>
        <DateForm />
        <TimeForm />
    </div>
);