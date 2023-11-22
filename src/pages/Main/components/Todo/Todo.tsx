import { ITodo } from 'ToDoProvider/ToDoProvider';

import classes from './Todo.module.sass';



export const Todo = ({ id, title, dueDate, dueTime, priority, complexity } : ITodo) => {
    return (
        <div className={classes.todo} role='button' tabIndex={0}>
            <div className={classes.todo__header}>
                <h3 className={classes.todo__title}>{title}</h3>
                <div className={classes.todo__buttons}>
                    <button type='button' />
                    <button type='button' />
                </div>
            </div>
            <ul>
                <li>
                    Due Date: <span className={classes.todo__date}>{dueDate}, {dueTime}</span>
                </li>
                <li>
                    Priority: {priority}
                </li>
                <li>
                    Complexity: {complexity}
                </li>
            </ul>
            <p className={classes.todo__item}>Due Date: <span className={classes.todo__date}>{dueDate}, {dueTime}</span></p>
            <p className={classes.todo__item}>Priority: {priority}</p>
            <p className={classes.todo__item}>Complexity: {complexity}</p>
            <button aria-label='add subtask' title=''></button>
        </div>
    );
};