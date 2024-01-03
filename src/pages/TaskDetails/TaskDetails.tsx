import { useParams, useNavigate  } from 'react-router-dom';
import { useContext } from 'react';

import { TodoContext} from 'ToDoProvider';

import { Edit } from 'components/icons/Edit';
import { Todo } from 'components/Todo';
import { DeleteBtn } from 'components/DeleteBtn';
import { Input } from 'components/formComponents/Input';
import { BtnCircle } from 'components/BtnCircle';
import { Check } from 'components/icons/Check';

import { BackArrow } from 'components/icons/BackArrow';

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

    console.log(todo)
    const handleCommpleted = (idSubtask: string) => {
        const updatedTasks = !!todoContext?.todos?.length ? todoContext.todos.map((task) => {
            if (task.id === id) {
                const updatedCheckList = !!task?.checkList?.length ? task.checkList.map((checkItem) => {
                    if (checkItem.id === idSubtask) {
                        return {
                            ...checkItem,
                            completed: !checkItem.completed
                        }
                    }

                    return checkItem;
                }) : [];

                let completionPercentage = 0;
                const totalCheckList = task?.checkList?.length ?? 0;
                const completedCount = updatedCheckList.filter(item => item.completed).length;
                completionPercentage = Math.round((completedCount / totalCheckList) * 100); 

                return {
                    ...task,
                    checkList: updatedCheckList,
                    progressValue: completionPercentage
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
                    <BtnCircle
                        icon={<BackArrow />}
                        onClick={() => navigate(-1)}
                        style='white'
                    />
                    <h1 className={classes.header__title}>Task Details</h1>
                    <BtnCircle
                        icon={<Edit/>}
                        onClick={() => navigate(`/task/${id}`)}
                        style='white'
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
                            progressValue={todo.progressValue}
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