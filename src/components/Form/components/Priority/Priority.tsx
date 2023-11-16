
import { useState } from 'react';

import classes from './Priority.module.sass';


export const Priority = () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10];

    const [selectedPriority, setSelectedPriority] = useState('');

    const handlePriorityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPriority(event.target.value);
        console.log(selectedPriority)
    };


    return (
        <div className={classes.priority}>
            <h2 className={classes.priority__title}>Select Priority Level</h2>
            <label htmlFor='Priority' className={classes.priority__label}>
                {numbers.map((number) => (
                    <span className={classes.priority__number} key={number}>
                        {number}
                        <input 
                            name='Priority' 
                            type='radio' 
                            value={number} 
                            className={classes.priority__input}
                            
                            onChange={handlePriorityChange} 
                        />
                    </span>
                ))}
            </label>
            {/* <label htmlFor='priority' className={classes.priority}>
                
                <div className={classes.priorityWrapper}>
                    <div className={classes.priority__item}>
                        <input name='priority' type='radio' className={classes.priority__input}/>
                        <span className={classes.priority__number}>1</span> 
                    </div>  
                </div>   
            </label> */}
        </div>
    );
};


