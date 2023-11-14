import { useState, useContext } from "react";

import classes from './TaskNameInput.module.sass';

interface TaskNameInputProps {
    value: string;
    setValue: (value: string) => void;
}

export const TaskNameInput = ({ value, setValue }: TaskNameInputProps) => {
  
    return (
        <div className={classes.form}>
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
        </div>
    );
};