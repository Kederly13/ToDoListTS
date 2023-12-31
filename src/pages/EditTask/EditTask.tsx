import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import { TodoContext} from '../../ToDoProvider';

import { TaskForm } from 'components/TaskForm';

import classes from './EditTask.module.sass';

export const EditTask = () => {

    const { id } = useParams();
    const todoContext = useContext(TodoContext);

    const task = todoContext && todoContext.todos.find(task => task.id === id);

    return (
        <section className={classes.editSection}>
            <div className={classes.container}>
                {task &&
                <TaskForm
                    task={task}
                /> 
                }
            </div>
        </section>
    );
};