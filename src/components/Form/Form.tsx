import { useState } from 'react';
import { useContext } from "react";
import { uid } from 'uid';
import { Navigate, useNavigate } from 'react-router-dom';

import { DateInputs } from './components/DateInputs';
import { TaskNameInput } from './components/TaskNameInput';
import { Priority } from './components/Priority';
import { SaveTaskBtn } from './components/SaveTaskBtn';
import { ToDoProvider, TodoContext } from 'ToDoProvider';

import classes from './Form.module.sass';


export const Form = () => {

    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [dueTime, setDueTime] = useState('');
    const [taskExists, setTaskExists] = useState('');

    const todoContext = useContext(TodoContext);
    const navigate = useNavigate();

    const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (todoContext?.todos.some((todo) => taskName === todo.title)) {
            setTaskExists('yes');
        } else {
            const newTodo = {
                id: uid(),
                title: taskName,
                dueDate: dueDate,
                dueTime: dueTime
            };
            todoContext?.saveTodo(newTodo);
            setTaskName('');
            setDueDate('');
            setDueTime('');
            navigate('/');  
        };   
    };

    const handleTaskNameChange = (newValue: string) => {
        setTaskName(newValue);
    };

    const handleDueDateChange = (newValue: string) => {
        setDueDate(newValue);
    };

    const handleDueTimeChange = (newValue: string) => {
        setDueTime(newValue);
    };

    return (
        <ToDoProvider>
            <form className={classes.form} onSubmit={handleAddTask}>
            <TaskNameInput value={taskName} setValue={handleTaskNameChange}/>
                <DateInputs 
                    onDateChange={handleDueDateChange} 
                    onTimeChange={handleDueTimeChange}
                    dueDate={dueDate}
                    dueTime={dueTime}
                />
                <Priority />
                <SaveTaskBtn />
            </form>
        </ToDoProvider>   
    );
};