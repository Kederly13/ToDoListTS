import { useContext } from 'react';
import React from 'react';

import classes from './SaveTaskButton.module.sass'; 

interface SaveTaskButtonProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void; 
}


export const SaveTaskBtn = ({ handleSubmit }: SaveTaskButtonProps) => {

    
    return (
        <button type='submit' className={classes.addBtn} onSubmit={() => handleSubmit}> Save Task</button>
    );
};