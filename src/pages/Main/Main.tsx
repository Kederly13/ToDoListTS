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
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    // console.log(todoContext?.todos);
    console.log(selectedCategories);

    // const addCategory = (value: string) => {
    //     setCategoryTodos(value);
    // }

    // const filterTodos = (value: string) => {
    //     const filteredList = todoContext?.todos.filter(({ title }) => {
    //         return title.toLocaleLowerCase().includes(value.toLowerCase());
    //     });
    //     setFilteredTodos(filteredList || [])
    // };

    const filterTodos = (value: string) => {
        let filteredList: ITodo[] = [];
    
        if (selectedCategories.length > 0) {
            filteredList = todoContext?.todos.filter(todo =>
                todo.title.toLowerCase().includes(value.toLowerCase()) &&
                selectedCategories.some(category => (todo.tags || []).includes(category))
            ) || [];
        } else {
            filteredList = todoContext?.todos.filter(todo =>
                todo.title.toLowerCase().includes(value.toLowerCase())
            ) || [];
        }
    
        setFilteredTodos(filteredList);
    };

    const navigate = useNavigate();

    return (
        <section className={classes.main}>
            <div className={classes.container}>
                <SearchForm
                    filterTodos={filterTodos}
                />
                <Buttons
                    setSelectedCategories={setSelectedCategories}
                />
                <ul className={classes.todoList}>
                    {(filteredTodos.length > 0 ? filteredTodos : todoContext?.todos || []).map(todo => (
                        <li key={todo.id} onClick={() => navigate(`/task-detail/${todo.id}`)}>
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