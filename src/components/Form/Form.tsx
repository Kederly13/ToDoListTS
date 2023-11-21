import { useState } from 'react';
import { useContext } from "react";
import { uid } from 'uid';
import { Navigate, useNavigate } from 'react-router-dom';

import { DateInputs } from './components/DateInputs';
import { TaskNameInput } from './components/TaskNameInput';
import { Priority } from './components/Priority';
import { Complexity } from './components/Complexity';
import { SaveTaskBtn } from './components/SaveTaskBtn';
import { ToDoProvider, TodoContext } from 'ToDoProvider';

import classes from './Form.module.sass';


export const Form = () => {

    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [dueTime, setDueTime] = useState('');
    const [taskExists, setTaskExists] = useState('');
    const [priority, setPriority] = useState<number>();
    const [complexity, setComplexity] = useState<number>();

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
                dueTime: dueTime,
                priority: priority,
                complexity: complexity
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

    const handlePriority = (newValue: number) => {
        setPriority(newValue);
    };

    const handleCompexity = (newValue: number) => {
        setComplexity(newValue);
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
                <Priority
                    priority={priority}
                    setPriority={handlePriority} 
                />
                <Complexity
                    complexity={complexity}
                    setComplexity={handleCompexity}
                /> 
                <SaveTaskBtn />
            </form>
        </ToDoProvider>   
    );
};