import { useState } from 'react';
import classNames from 'classnames';

import classes from './Priority.module.sass';



interface IPriorityProps {
    priority?: number;
    setPriority: (newValue: number) => void;
}

export const Priority = ({ priority, setPriority }: IPriorityProps) => {
    const numbers = [1,2,3,4,5,6,7,8,9,10];

    const handlePriorityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        if (checked) {
            setPriority(Number(value));
        };  
    };


    return (
        <div className={classes.priority}>
            <h2 className={classes.priority__title}>Select Priority Level</h2>
            <div className={classes.priority__wrapper}>
                {numbers.map((number) => (
                    <label key={number} className={`${classes.priority__number} ${priority === number ? classes.active : ""}`}>
                        {number}
                        <input 
                            name='priority' 
                            type='radio' 
                            value={number} 
                            className={classes.priority__input}
                            onChange={handlePriorityChange}     
                        />
                    </label>
                ))}
            </div> 
        </div>
    );
};

