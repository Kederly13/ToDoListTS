import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import { TodoContext} from '../../ToDoProvider';

import { BackBtn } from 'components/BackBtn/BackBtn';
import { Todo } from 'pages/Main/components/Todo';

import classes from './TaskDetails.module.sass';

export const TaskDetails = () => {

    const { id } = useParams();
    const todoContext = useContext(TodoContext);

    const todo = todoContext && todoContext.todos?.find(task => task.id === id);

    return (
        <section className={classes.main}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <BackBtn />
                    <h1 className={classes.header__title}>Add New Task</h1>
                </div>
                <div className={classes.taskDetails}>
                    {todo ? (
                        <Todo
                            id={todo.id}
                            title={todo.title}
                            dueDate={todo.dueDate}
                            dueTime={todo.dueTime}
                            priority={todo.priority}
                            complexity={todo.complexity}
                            isClicked={todo.isClicked}
                        />
                    ) : (
                        <p>No task found</p>
                    )}
                </div>
            </div>
        </section>
    );
};