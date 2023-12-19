import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { TodoContext} from '../../ToDoProvider';

import { BackBtn } from 'components/BackBtn/BackBtn';
import { Edit } from 'components/assets/svg/Edit';
import { Todo } from 'components/Todo';
import { TodoBtn } from 'components/TodoBtn';
import { DeleteBtn } from 'components/DeleteBtn/DeleteBtn';

import classes from './TaskDetails.module.sass';

export const TaskDetails = () => {

    const { id } = useParams();
    const todoContext = useContext(TodoContext);
    const navigate = useNavigate();

    const todo = todoContext && todoContext.todos?.find(task => task.id === id);

    return (
        <section className={classes.main}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <BackBtn />
                    <h1 className={classes.header__title}>Task Details</h1>
                    <TodoBtn
                        icon={<Edit/>}
                        handleButtonClick={() => navigate(`/task/${id}`)}
                    />
                </div>
                <div className={classes.taskDetails}>
                    {todo ? (
                        <Todo
                            id={todo.id}
                            title={todo.title}
                            dueDateTime={todo.dueDateTime}
                            priority={todo.priority}
                            complexity={todo.complexity}
                            isClicked={todo.isClicked}
                        />
                    ) : (
                        <p>No task found</p>
                    )}
                </div>
                <DeleteBtn />
            </div>
        </section>
    );
};