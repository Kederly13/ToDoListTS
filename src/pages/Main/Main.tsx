import { SearchForm } from './components/SearchForm';
import { Buttons } from './components/Buttons';
import { NewTaskBtn } from './components/NewTaskBtn';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { TodoContext } from '../../ToDoProvider';

import classes from './main.module.sass';

type Navigate = {
    navNewTask: () => void;
};

export const Main = () => {
    const todoContext = useContext(TodoContext);

    const navigate = useNavigate();

    if (todoContext) {
        const { todos } = todoContext;
    };

    return (
        <section className={classes.main}>
            <div className={classes.container}>
                <SearchForm />
                <Buttons />
                <ul className={classes.todoList}>
                    
                </ul>
                {/* <NavLink to={'/add-task'}> */}
                    <NewTaskBtn onClick={() => navigate('/add-task')}>
                        <span>+ add new task </span>
                    </NewTaskBtn>
                {/* </NavLink> */}
            </div>
        </section>
    )   
};