
import { useState } from 'react';

import classes from './Priority.module.sass';


export const Priority = () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10];

    const [selectedPriority, setSelectedPriority] = useState('');

    const handlePriorityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        

        setSelectedPriority(event.target.value);
        console.log(selectedPriority)
    };

    return (
        <div className={classes.priority}>
            <h2 className={classes.priority__title}>Select Priority Level</h2>
            <div className={classes.priority__wrapper}>
                {numbers.map((number, index) => (
                    <label className={classes.priority__number} key={number}>
                        {number}
                        <input 
                            name='priority' 
                            type='radio' 
                            value={number} 
                            className={classes.priority__input}
                            onChange={handlePriorityChange}
                            checked 
                        />
                    </label>
                ))}
            </div> 
        </div>
    );
};

