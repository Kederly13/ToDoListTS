import { useContext } from 'react';

import { menuData } from './data/menuData';
import { TodoContext } from 'ToDoProvider';
import { SORT } from 'constants/sort';

import classes from './SortMenu.module.sass';

export const SortMenu = () => {
    const todoContext = useContext(TodoContext);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, dataset, checked } = e.target;

        if (checked) {
            todoContext?.setSort({ sorted: value as SORT, reversed: dataset.reversed === 'true' ? true : false})
        }
    };

    return (
        <ul className={classes.list}>
            {menuData.map(({ name, value, reversed }) => (
                <li className={classes.list__item}>
                    <label className={classes.list__label}>{name}
                        <input 
                            type='radio' 
                            name='sort' 
                            data-reversed={reversed}
                            value={value}
                            onChange={onChange}
                            checked={value === todoContext?.sort?.sorted && reversed === todoContext?.sort?.reversed}
                        />
                    </label>
                </li>
            ))}
        </ul>
    )   
}

