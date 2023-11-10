import classes from './DateForm.module.sass';

export const DateForm = () => (
    <form className={classes.date}>
        <label htmlFor='date' className={classes.date__label}>Select Due Date</label>
        <input
            placeholder='dd.mm.yyyy'
            id='date' 
            name='dueDate' 
            type=''
            // onChange={onChange}
            // value={value} 
            className={classes.date__input}                
        />
    </form>
);



