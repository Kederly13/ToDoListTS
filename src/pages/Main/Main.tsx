import { SearchForm } from './components/SearchForm';
import { Buttons } from './components/Buttons';
import { useContext } from 'react';
import { useEffect, useState } from 'react';

import { TodoContext } from '../../ToDoProvider';

import classes from './main.module.sass';

export const Main = () => {
    const todoContext = useContext(TodoContext);

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
        </div>
    </section>
    )
    
};