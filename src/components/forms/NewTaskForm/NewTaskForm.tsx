import { useState, useContext, type FC } from 'react';

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

import { ITodo } from 'ToDoProvider/ToDoProvider';
import classes from './NewTaskForm.module.sass';

export interface ICheckItem {
    id: string,
    value: string
};

interface INewTaskFormProps {
    task?: ITodo;
};


export const NewTaskForm: FC<INewTaskFormProps> = ({ task }) => {

    const [taskName, setTaskName] = useState<string>(task?.title ?? '');
    const [dueDate, setDueDate] = useState<string>(task?.dueDate ?? '');
    const [dueTime, setDueTime] = useState<string>(task?.dueTime ?? '');
    const [taskExists, setTaskExists] = useState<boolean>(false);
    const [priority, setPriority] = useState<number>(task?.priority || 5);
    const [complexity, setComplexity] = useState<number>(task?.complexity || 5);
    const [checklist, setChecklist] = useState<ICheckItem[]>((!!task?.checkList?.length && task.checkList) || []);
    const [tags, setTags] = useState<string[]>((!!task?.tags?.length && task.tags) || []);

    const todoContext = useContext(TodoContext);
    const navigate = useNavigate();

    const handleEditTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let updatedTodos: ITodo[] = [];
        if (task && todoContext && todoContext.todos) {
            updatedTodos = todoContext.todos.map((todo) => {
                if (todo.id === task.id) {
                    return {
                        ...todo,
                        title: taskName,
                        dueDate: dueDate,
                        dueTime: dueTime,
                        priority: priority,
                        complexity: complexity,
                        checkList: checklist,
                        tags: tags
                    };
                }
                return todo;
            });
        }
        todoContext?.updateTodo(updatedTodos);
        navigate('/');    
    };

    const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (todoContext?.todos.some((todo) => taskName === todo.title)) {
            setTaskExists(true);
        } else {
            const newTodo = {
                id: uid(),
                title: taskName,
                dueDate: dueDate,
                dueTime: dueTime,
                priority: priority,
                complexity: complexity,
                checkList: checklist,
                tags: tags,
                isClicked: false
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
            <form className={classes.form} onSubmit={task ? handleEditTask : handleAddTask}>
                <TaskNameInput 
                    value={taskName} 
                    setValue={handleTaskNameChange} 
                />
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