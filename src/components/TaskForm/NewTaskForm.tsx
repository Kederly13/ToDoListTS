import { useState, useContext, type FC } from 'react';

import { uid } from 'uid';
import { useNavigate } from 'react-router-dom';

import { DateInputs } from 'components/formComponents/DateInputs';
import { TaskNameInput } from 'components/formComponents/TaskNameInput';
import { Priority } from 'components/formComponents/Priority';
import { Complexity } from 'components/formComponents/Complexity';
import { SaveTaskBtn } from 'components/formComponents/SaveTaskBtn';
import { Tags } from 'components/formComponents/Tags';
import { CheckList } from 'components/formComponents/CheckList';
import { ToDoProvider, TodoContext } from 'ToDoProvider';

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
    const [dueDate, setDueDate] = useState<Date | null>(task?.dueDateTime ?? null);
    const [dueTime, setDueTime] = useState<string>(
        task?.dueDateTime ? task.dueDateTime.toISOString().split('T')[1] || '' : ''
    );
    const [taskExists, setTaskExists] = useState<boolean>(false);
    const [priority, setPriority] = useState<number>(task?.priority || 5);
    const [complexity, setComplexity] = useState<number>(task?.complexity || 5);
    const [checklist, setChecklist] = useState<ICheckItem[]>((!!task?.checkList?.length && task.checkList) || []);
    const [tags, setTags] = useState<string[]>((!!task?.tags?.length && task.tags) || []);

    const todoContext = useContext(TodoContext);
    const navigate = useNavigate();

    const handleEditTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const combinedDateTime = dueDate && dueTime
        ? new Date(`${dueDate.toISOString().split('T')[0]}T${dueTime}`)
        : null;

        let updatedTodos: ITodo[] = [];
        if (task && todoContext && todoContext.todos) {
            updatedTodos = todoContext.todos.map((todo) => {
                if (todo.id === task.id) {
                    return {
                        ...todo,
                        title: taskName,
                        dueDateTime: combinedDateTime,
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

        const combinedDateTime = dueDate && dueTime
        ? new Date(`${dueDate.toISOString().split('T')[0]}T${dueTime}`)
        : null;

        if (todoContext?.todos.some((todo) => taskName === todo.title)) {
            setTaskExists(true);
        } else {
            const newTodo = {
                id: uid(),
                title: taskName,
                dueDateTime: combinedDateTime,
                priority: priority,
                complexity: complexity,
                checkList: checklist,
                tags: tags,
                isClicked: false
            };
            todoContext?.saveTodo(newTodo);
            setTaskName('');
            setDueDate(null);
            setDueTime('');
            navigate('/');  
        };   
    };

    const handleTaskNameChange = (newValue: string) => {
        setTaskName(newValue);
    };

    const handleDueDateChange = (newValue: Date | null) => {
        if (newValue !== null) {
            setDueDate(newValue);
        }
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