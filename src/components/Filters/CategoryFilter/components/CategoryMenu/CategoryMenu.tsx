import { uid } from 'uid';
import { useContext } from 'react';
import { TodoContext } from 'ToDoProvider';

import classes from './CategoryMenu.module.sass';

// export interface ICategories {
//     setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
// };

export const CategoryMenu = () => {
    const todoContext = useContext(TodoContext);

    const handleCategories = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        
        if (checked) {
            todoContext?.setFilterTag(prevCategories => [...prevCategories, value]);
        } else {
            todoContext?.setFilterTag(prevCategories =>
                prevCategories.filter(category => category !== value)
            );
        }
    };

   const getChecked = (tag: string): boolean => todoContext?.filterTag ? todoContext.filterTag.includes(tag) : false;

    return (
        <ul className={classes.list}>
            {todoContext?.todos.map(({ tags }) => (
                tags?.map(tag => (
                    <li key = {uid()} className={classes.list__item}>
                        <label className={classes.list__label}>
                            <span>{tag}</span>
                            <input 
                                type='checkbox' 
                                name={tag} 
                                value={tag}
                                onChange={handleCategories}
                                checked={getChecked(tag)}
                            />
                        </label>
                    </li>
                ))
            ))}
        </ul>
    );    
};
