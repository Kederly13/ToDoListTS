import { useContext } from 'react';
import React from 'react';

import classes from './SaveTaskButton.module.sass'; 

export const AddTaskBtn = () => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
    }
    return (
        <button type='submit' className={classes.addBtn} onSubmit={handleSubmit}> Save Task</button>
    );
};