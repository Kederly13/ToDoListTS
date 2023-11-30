import { ITodo } from 'ToDoProvider/ToDoProvider';
import { TagItems } from './components/TagItems';

import up from '../../../../components/assets/svg/up.svg'
import move from '../../../../components/assets/svg/move.svg'
import calendar from '../../../../components/assets/svg/calendar.svg'

import classes from './Todo.module.sass';

export const Todo = ({ id, title, dueDate, dueTime, priority, complexity, tags } : ITodo) => {
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
                    <img src={calendar} alt='calendar' className={classes.todo__infoList__icon}/>
                    Due Date: <span className={classes.todo__date}>{dueDate}, {dueTime}</span>
                </li>
                <li className={classes.todo__infoList__item}>
                    <img src={up} alt='up' className={classes.todo__infoList__icon}/>
                    Priority: {priority}
                </li>
                <li className={classes.todo__infoList__item}>
                    <img src={move} alt='move' className={classes.todo__infoList__icon}/>
                    Complexity: {complexity}
                </li>
            </ul>
            {tags &&
                <TagItems
                    tags={tags}
                />
            }
            {/* <button aria-label='add subtask' title=''></button> */}
        </div>
    );
};