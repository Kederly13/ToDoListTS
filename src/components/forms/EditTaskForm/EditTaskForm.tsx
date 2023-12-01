import { useState } from 'react';
import { useContext } from "react";
import { uid } from 'uid';
import { useNavigate } from 'react-router-dom';

import { DateInputs } from '../components/DateInputs';
import { TaskNameInput } from '../components/TaskNameInput';
import { Priority } from '../components/Priority';
import { Complexity } from '../components/Complexity';
import { SaveTaskBtn } from '../components/SaveTaskBtn';
import { ToDoProvider, TodoContext } from 'ToDoProvider';
import { Tags } from '../components/Tags';
import { CheckList } from '../components/CheckList/CheckList';

import classes from './NewTaskForm.module.sass';

export interface ICheckItem {
    id: string,
    value: string
};

export const EditTaskForm = () => {

    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [dueTime, setDueTime] = useState('');
    const [taskExists, setTaskExists] = useState('');
    const [priority, setPriority] = useState<number>();
    const [complexity, setComplexity] = useState<number>();
    const [checklist, setChecklist] = useState<ICheckItem[]>([]);
    const [tags, setTags] = useState<string[]>([]);

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
                complexity: complexity,
                checkList: checklist,
                tags: tags
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

    const addCheckItem = (value: string) => {
        setChecklist((prev) => ([
            ...prev,
            {
                id: uid(),
                value
            }
        ]));
    };

    const handleTags = (value: string) => {
        let tags = [];
        if (value.includes(',')) {
            tags = value.split(', ');
        } else if (value.includes(' ')) {
            tags.push(value)
        }
        else  {
            tags = value.split(' ');
        }
        setTags(tags);
    };

    const removeCheckItem = (id: string) => {
        setChecklist((prev) => prev.filter((item) => item.id !== id));
    };

    const updateCheckItemValue = (value: string, id: string) => {
        setChecklist((prev) => prev.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    value
                }
            };

            return item;
        }));
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
                <CheckList
                    newSubtask
                    addCheckItem={addCheckItem}
                    removeCheckItem={removeCheckItem}
                    updateCheckItemValue={updateCheckItemValue}
                    checkList={checklist}
                />
                <Tags
                   setValue={handleTags} 
                />
                <SaveTaskBtn />
            </form>
        </ToDoProvider>   
    );
};