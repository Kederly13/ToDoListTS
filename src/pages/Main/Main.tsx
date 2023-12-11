import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';

import { SearchForm } from './components/SearchForm';
import { Buttons } from './components/Buttons';
import { NewTaskBtn } from './components/NewTaskBtn';
import { ITodo } from 'ToDoProvider/ToDoProvider';
import { Todo } from 'components/Todo';
import { MouseEventHandler, useContext, useState } from 'react';

import { TodoContext } from 'ToDoProvider';

import classes from './main.module.sass';

export const Main = () => {
    const todoContext = useContext(TodoContext);
    const [filteredTodos, setFilteredTodos] = useState<ITodo[]>(todoContext?.todos || []);
    
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    // console.log(todoContext?.todos);
    

    // const addCategory = (value: string) => {
    //     setCategoryTodos(value);
    // }

    const searchTodos = (value: string) => {
        setFilteredTodos(prev => [...prev].filter(({ title }) => {
            console.log(title, value);
            return title.toLocaleLowerCase().includes(value.toLowerCase());
        }));
        
    };
    console.log(filteredTodos);

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

    const handleNavigate = (e: MouseEvent<HTMLDivElement>, id: string) => {
        e.stopPropagation()
        navigate(`/task-detail/${id}`)
    };
    console.log(todoContext?.todos)
    return (
        <section className={classes.main}>
            <div className={classes.container}>
                <SearchForm
                    filterTodos={searchTodos}
                />
                <Buttons
                    setSelectedCategories={setSelectedCategories}
                />
                <div className={classes.todoList}>
                    {(filteredTodos.length > 0 ? filteredTodos : todoContext?.todos || []).map(todo => (
                        <div key={todo.id} onClick={(e) => handleNavigate(e, todo.id)}>
                            <Todo
                                id={todo.id}
                                title={todo.title}
                                dueDateTime={todo.dueDateTime}
                                priority={todo.priority}
                                complexity={todo.complexity}
                                checkList={todo.checkList}
                                tags={todo.tags}
                                isClicked={todo.isClicked}
                            />
                        </div>
                    ))} 
                </div>
                <NewTaskBtn onClick={() => navigate('/add-task')}>
                    <span>+ add new task </span>
                </NewTaskBtn>
            </div>
        </section>
    );   
};