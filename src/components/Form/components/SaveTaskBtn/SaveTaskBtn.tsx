import { useContext } from 'react';
import React from 'react';

import classes from './SaveTaskButton.module.sass'; 

export const SaveTaskBtn = () => ( 
    <button type='submit' className={classes.addBtn}> Save Task</button>
);