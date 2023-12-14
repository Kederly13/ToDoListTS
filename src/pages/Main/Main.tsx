import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { SearchForm } from './components/SearchForm';
import { Filters } from './components/Filters';
import { NewTaskBtn } from './components/NewTaskBtn';
import { ITodo } from 'ToDoProvider/ToDoProvider';
import { Todo } from 'components/Todo';
import { useContext } from 'react';
import { SORT } from 'constants/sort';

import { TodoContext } from 'ToDoProvider';
import { useFilterTasks } from 'hooks/useFilter';

import classes from './main.module.sass';


export const Main = () => {
    const todoContext = useContext(TodoContext);

    const navigate = useNavigate()

    const filteredTasks = useFilterTasks();

    useEffect(() => {
        return () => {
            todoContext?.setSearch('')
            todoContext?.setSort({ sorted: SORT.ALL, reversed: false })
            todoContext?.setFilterTag([])
        }
    }, [])

    return (
        <section className={classes.main}>
            <div className={classes.container}>
                <SearchForm />
                <Filters />
                {!!filteredTasks &&
                    <div className={classes.todoList}>
                        {filteredTasks.map(todo => (
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
                        ))}
                    </div> 
                }
                <NewTaskBtn onClick={() => navigate('/add-task')}>
                    <span>+ add new task </span>
                </NewTaskBtn>
            </div>
        </section>
    );   
};