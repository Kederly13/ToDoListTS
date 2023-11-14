import { useState } from 'react';
import { useContext } from "react";

import { DateInputs } from './components/DateInputs';
import { TaskNameInput } from './components/TaskNameInput';
import { SaveTaskBtn } from './components/SaveTaskBtn';
import { ToDoProvider } from 'ToDoProvider';

import classes from './Form.module.sass';


export const Form = () => {

    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [dueTime, setDueTime] = useState('');

    // const { saveTodo } = useContext(ToDoProvider)

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
                {/* <SaveTaskBtn handleSubmit={saveTodo}/> */}
            </form>
        </ToDoProvider>
        
    );
};