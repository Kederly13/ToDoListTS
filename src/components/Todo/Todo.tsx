import { ITodo } from 'ToDoProvider/ToDoProvider';
import { TagItems } from './components/TagItems';
import { TodoBtns } from './components/TodoBtns/TodoBtns';

import { Move } from 'components/assets/svg/Move';
import { Up } from 'components/assets/svg/Up'
import { Calendar } from 'components/assets/svg/Calendar';

import classes from './Todo.module.sass';

export const Todo = ({ id, title, dueDateTime, priority, complexity, tags, isClicked } : ITodo) => {

    const formattedDueDate = dueDateTime ? new Date(dueDateTime).toLocaleDateString() : 'No due date';
    const formattedDueTime = dueDateTime ? new Date(dueDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'No due time';

    const todoClasses = `${classes.todo} ${isClicked ? classes.clicked : ''}`

    return (
        <div className={todoClasses} role='button' tabIndex={0} key={id}>
            <div className={classes.todo__header}>
                <h3 className={classes.todo__title}>{title}</h3>
                <TodoBtns
                    id={id} 
                />
            </div>
            <ul className={classes.todo__infoList}>
                <li className={classes.todo__infoList__item}>
                    <Calendar className={classes.todo__infoList__icon} />
                    Due Date: <span className={classes.todo__date}>{formattedDueDate && formattedDueDate} </span>
                    Due Time: <span className={classes.todo__date}>{formattedDueTime && formattedDueTime}</span>
                </li>
                <li className={classes.todo__infoList__item}>
                    <Up className={classes.todo__infoList__icon} />
                    Priority: {priority}
                </li>
                <li className={classes.todo__infoList__item}>
                    <Move className={classes.todo__infoList__icon} />
                    Complexity: {complexity}
                </li>
            </ul>
            {tags &&
                <TagItems
                    tags={tags}
                />
            }
        </div>
    );
};