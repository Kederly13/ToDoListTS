import { useState, useContext } from "react";

import classes from './TaskNameForm.module.sass';

export const TaskNameForm = () => {

    const [value, setValue] = useState('');
    
    return (
        <form className={classes.form}>
            <label htmlFor='task' className={classes.form__label}>Task Name</label>
            <input
                placeholder='Name of task...'
                id='task' 
                name='taskName' 
                type='text'
                onChange={(e) => setValue(e.target.value)}
                value={value} 
                className={classes.form__input}                
            />   
        </form>
    );
};