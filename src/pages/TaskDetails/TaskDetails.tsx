import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { TodoContext} from '../../ToDoProvider';

import { BackBtn } from 'components/BackBtn/BackBtn';
import { Edit } from 'components/assets/svg/Edit';
import { Todo } from 'components/Todo';
import { TodoBtn } from 'components/TodoBtn';
import { DeleteBtn } from 'components/DeleteBtn/DeleteBtn';
import { Input } from 'components/formComponents/Input';
import { BtnCircle } from 'components/BtnCircle/BtnCircle';
import { Check } from 'components/assets/svg/Check';

import classes from './TaskDetails.module.sass';

export const TaskDetails = () => {

    const { id } = useParams();
    const todoContext = useContext(TodoContext);
    const navigate = useNavigate();

    const todo = todoContext && todoContext.todos?.find(task => task.id === id);

    const handleDelete = () => {
        if (todoContext) {
            const updatedTodos = todoContext.todos.filter(todo => todo.id !== id);
            todoContext?.updateTodo(updatedTodos)
            navigate('/')
        }
    };

    const handleCommpleted = (idSubtask: string) => {
        const updatedTasks = !!todoContext?.todos?.length ? todoContext.todos.map((task) => {
            if (task.id === id) {
                return {
                    ...task,
                    checkList: !!task?.checkList?.length ? task.checkList.map((checkItem) => {
                        if (checkItem.id === idSubtask) {
                            return {
                                ...checkItem,
                                completed: !checkItem.completed
                            }
                        }

                        return checkItem;
                    }) : []
                }
            }

            return task;
        }) : []
        todoContext?.updateTodo(updatedTasks)
    };

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
                <form>
                    <h3></h3>
                    <div>
                        {todo && !!todo.checkList?.length && todo.checkList.map(({ id, value, completed }) => (
                            <Input
                                key={id}
                                id={id}
                                value={value}
                                readOnly
                                buttonComponent={
                                    <BtnCircle
                                        icon={<Check />}
                                        onClick={() => handleCommpleted(id)}
                                        style={completed ? 'darkBlue' : 'lightBlue'}                      
                                    />
                                }
                            />
                        ))}
                    </div>
                </form>
                <DeleteBtn
                    handleDelete={handleDelete} 
                />
            </div>
        </section>
    );
};