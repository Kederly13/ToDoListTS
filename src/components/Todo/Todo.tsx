import { MouseEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ITodo, TodoContext } from 'ToDoProvider/ToDoProvider';
import { TagItems } from './components/TagItems';

import { Move } from 'components/icons/Move';
import { Up } from 'components/icons/Up/Up'
import { Calendar } from 'components/icons/Calendar';
import { BtnCircle } from 'components/BtnCircle';
import { Check } from 'components/icons/Check/Check';
import { Edit } from 'components/icons/Edit/Edit';

import classes from './Todo.module.sass';

export const Todo = ({ id, title, dueDateTime, priority, complexity, tags, isClicked, progressValue } : ITodo) => {
    const formattedDueDate = dueDateTime ? new Date(dueDateTime).toLocaleDateString() : 'No due date';
    const formattedDueTime = dueDateTime ? new Date(dueDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'No due time';

    const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const todo = `${classes.todo} ${isClicked ? classes.clicked : ''}`;

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/task-detail/${id}`)
    };

    const todoContext = useContext(TodoContext);

    return (
        <div className={todo} role='button' tabIndex={0} key={id} onClick={handleNavigate}>
            <div className={classes.todo__header} onClick={stopPropagation}>
                <h3 className={classes.todo__title}>{title}</h3>
                <div className={classes.todo__btns}>
                    <BtnCircle
                        icon={<Check />}
                        onClick={() => todoContext?.handleToggle(id)}
                        className={classes.todo__editBtn}
                    />  
                    <BtnCircle
                        icon={<Edit/>}
                        onClick={() => navigate(`/task/${id}`)}
                    />
                </div>
            </div>
            <ul className={classes.todo__list}>
                <li className={classes.todo__item}>
                    <Calendar className={classes.todo__icon} />
                    <span>
                        Due Date: <span className={classes.todo__date}>{formattedDueDate && formattedDueDate} </span>
                        Due Time: <span className={classes.todo__date}>{formattedDueTime && formattedDueTime}</span>
                    </span>
                </li>
                <li className={classes.todo__item}>
                    <Up className={classes.todo__icon} />
                    <span>Priority: {priority}</span>
                </li>
                <li className={classes.todo__item}>
                    <Move className={classes.todo__icon} />
                    <span>
                        Complexity: {complexity}
                    </span>
                </li>
            </ul>
            {tags &&
                <TagItems
                    tags={tags}
                />
            }
            <div className={classes.todo__progress}>
                <div className={classes.todo__progressWrapper }></div>
                <progress value={progressValue} max="100"></progress>
                <span className={classes.progressLabel}>{progressValue}% Completed</span>
            </div>
        </div>
    );
};