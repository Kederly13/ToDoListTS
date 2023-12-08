import { useContext } from 'react';
import { TodoContext } from 'ToDoProvider';

import classes from './CategoryMenu.module.sass';

export interface ICategories {
    setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
};

export const CategoryMenu: React.FC<ICategories> = ({ setSelectedCategories }) => {
    const tooContext = useContext(TodoContext);

    const handleCategories = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        
        if (checked) {
            setSelectedCategories(prevCategories => [...prevCategories, value]);
        } else {
            setSelectedCategories(prevCategories =>
                prevCategories.filter(category => category !== value)
            );
        }
    };

    return (
        <ul className={classes.list}>
            {tooContext?.todos.map(({ tags }) => (
                tags?.map(tag => (
                    <li className={classes.list__item}>
                        <label className={classes.list__label}>
                            <span>{tag}</span>
                            <input 
                                type='checkbox' 
                                name={tag} 
                                value={tag}
                                onChange={handleCategories}
                            />
                        </label>
                    </li>
                ))
            ))}
        </ul>
    );    
};
