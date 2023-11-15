import { useState } from 'react';
import { useContext } from "react";
import { uid } from 'uid';

import { DateInputs } from './components/DateInputs';
import { TaskNameInput } from './components/TaskNameInput';
import { SaveTaskBtn } from './components/SaveTaskBtn';
import { ToDoProvider, TodoContext } from 'ToDoProvider';

import classes from './Form.module.sass';


export const Form = () => {

    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [dueTime, setDueTime] = useState('');

    const todoContext = useContext(TodoContext);

    const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault;
        const newTodo = {
            id: Number(uid()),
            title: taskName,
            dueDate: dueDate,
            dueTime: dueTime
        };

        todoContext?.saveTodo(newTodo)
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
            <form className={classes.form}>
                <DateInputs 
                    onDateChange={handleDueDateChange} 
                    onTimeChange={handleDueTimeChange}
                    dueDate={dueDate}
                    dueTime={dueTime}
                />
                <TaskNameInput value={taskName} setValue={handleTaskNameChange}/>
                <SaveTaskBtn onClick={(e) => handleAddTask(e)}/>
            </form>
        </ToDoProvider>
        
    );
};