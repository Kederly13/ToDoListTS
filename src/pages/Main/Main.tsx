import { useNavigate } from 'react-router-dom';

import { SearchForm } from './components/SearchForm';
import { Buttons } from './components/Buttons';
import { NewTaskBtn } from './components/NewTaskBtn';
import { Todo } from './components/Todo';
import { ITodo } from 'ToDoProvider/ToDoProvider';
import { useContext, useState } from 'react';

import { TodoContext } from '../../ToDoProvider';

import classes from './main.module.sass';

export const Main = () => {
    const todoContext = useContext(TodoContext);
    const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([]);
    console.log(todoContext?.todos);
    console.log(filteredTodos);

    const filterTodos = (value: string) => {
        const filteredList = todoContext?.todos.filter(({ title }) => {
            return title.toLocaleLowerCase().includes(value.toLowerCase());
        });
        setFilteredTodos(filteredList || [])
    };

    const navigate = useNavigate();

    return (
        <section className={classes.main}>
            <div className={classes.container}>
                <SearchForm
                    filterTodos={filterTodos}
                />
                <Buttons />
                <ul className={classes.todoList}>
                    {(filteredTodos.length > 0 ? filteredTodos : todoContext?.todos || []).map(todo => (
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

                <NewTaskBtn onClick={() => navigate('/add-task')}>
                    <span>+ add new task </span>
                </NewTaskBtn>
            </div>
        </section>
    );   
};