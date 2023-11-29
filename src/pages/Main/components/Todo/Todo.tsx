import { ITodo } from 'ToDoProvider/ToDoProvider';
import { CheckItems } from './components/CheckItems';

import classes from './Todo.module.sass';

export const Todo = ({ id, title, dueDate, dueTime, priority, complexity, checkList } : ITodo) => {
    return (
        <div className={classes.todo} role='button' tabIndex={0} key={id}>
            <div className={classes.todo__header}>
                <h3 className={classes.todo__title}>{title}</h3>
                <div className={classes.todo__buttons}>
                    <button type='button' />
                    <button type='button' />
                </div>
            </div>
            <ul className={classes.todo__infoList}>
                <li className={classes.todo__infoList__item}>
                    Due Date: <span className={classes.todo__date}>{dueDate}, {dueTime}</span>
                </li>
                <li className={classes.todo__infoList__item}>
                    Priority: {priority}
                </li>
                <li className={classes.todo__infoList__item}>
                    Complexity: {complexity}
                </li>
            </ul>
            {checkList &&
                <CheckItems
                    checkItems={checkList}
                /> 
            }
            {/* <button aria-label='add subtask' title=''></button> */}
        </div>
    );
};