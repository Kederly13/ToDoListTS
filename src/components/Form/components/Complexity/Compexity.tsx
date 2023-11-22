import { useState } from 'react';
import classNames from 'classnames';

import classes from './Priority.module.sass';



interface IComplexityProps {
    complexity?: number;
    setComplexity: (newValue: number) => void;
}

export const Complexity = ({ complexity, setComplexity }: IComplexityProps) => {
    const numbers = [1,2,3,4,5,6,7,8,9,10];

    const handleComplexityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        if (checked) {
            setComplexity(Number(value));
        };  
    };

    return (
        <div className={classes.complexity}>
            <h2 className={classes.complexity__title}>Select Complexity Level</h2>
            <div className={classes.complexity__wrapper}>
                {numbers.map((number) => (
                    <label className={`${classes.complexity__number} ${complexity === number ? classes.active : ""}`}>
                        {number}
                        <input 
                            name='complexity' 
                            type='radio' 
                            value={number} 
                            className={classes.complexity__input}
                            onChange={handleComplexityChange}     
                        />
                    </label>
                ))}
            </div> 
        </div>
    );
};
