import { useNavigate } from 'react-router-dom';

import { SearchForm } from './components/SearchForm';
import { Buttons } from './components/Buttons';
import { NewTaskBtn } from './components/NewTaskBtn';
import { Todo } from './components/Todo';
import { useContext } from 'react';

import { TodoContext } from '../../ToDoProvider';

import classes from './main.module.sass';

export const Main = () => {
    const todoContext = useContext(TodoContext);
    console.log(todoContext?.todos);

    const navigate = useNavigate();

    return (
        <section className={classes.main}>
            <div className={classes.container}>
                <SearchForm />
                <Buttons />
                {todoContext?.todos && (
                    <ul className={classes.todoList}>
                        {todoContext.todos.map((todo) => (
                            <li key={todo.id}>
                                <Todo
                                    id={todo.id}
                                    title={todo.title}
                                    dueDate={todo.dueDate}
                                    dueTime={todo.dueTime}
                                    priority={todo.priority}
                                    complexity={todo.complexity}
                                    checkList={todo.checkList}
                                    tags={todo.tags}
                                    isClicked={todo.isClicked}
                                />
                            </li>
                        ))}
                    </ul>
                )}
                <NewTaskBtn onClick={() => navigate('/add-task')}>
                    <span>+ add new task </span>
                </NewTaskBtn>
            </div>
        </section>
    );   
};