import { useContext } from 'react';
import { TodoContext } from 'ToDoProvider';

import classes from './CategoryMenu.module.sass';

export const CategoryMenu = () => {
    const tooContext = useContext(TodoContext);

    return (
        <ul className={classes.list}>
            {tooContext?.todos.map(({ tags }) => (
                tags?.map(tag => (
                    <li className={classes.list__item}>
                        <label className={classes.list__label}>{tags}
                            <input type='radio' name={tag} readOnly value='default'/>
                        </label>
                    </li>
                ))
            ))}
        </ul>
    );    
};
