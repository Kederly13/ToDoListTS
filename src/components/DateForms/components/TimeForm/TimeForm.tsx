import Clock from './clock.svg';

import classes from './TimeForm.module.sass';

export const TimeForm = () => (
    <form className={classes.time}>
        <label htmlFor='date' className={classes.time__label}>Select Time</label>
        <input
            placeholder='00:00'
            id='time' 
            name='dueTime' 
            type='time'
            // onChange={onChange}
            // value={value} 
            className={classes.time__input}                
        />
    </form>
);
