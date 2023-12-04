import { createContext, useState } from 'react';
import { ReactNode } from 'react';
import { ICheckItem } from 'components/forms/NewTaskForm/NewTaskForm';

type TodoProviderParams = {
    children: ReactNode;
};

export interface ITodo {
    id: string;
    title: string;
    dueDate: string;
    dueTime: string
    priority?: number;
    complexity?: number;
    tags?: string[];
    checkList?: ICheckItem[];
    isClicked: boolean  
};

type TodoContextType = {
    todos: ITodo[];
    saveTodo: (todo: ITodo) => void;
    updateTodo: (todos: ITodo[]) => void;
    // deleteTodo: (id: number) => void;
};

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const ToDoProvider: React.FC<TodoProviderParams> = ({ children }) => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const saveTodo = (todo: ITodo) => {
        setTodos((prevTodos) => [
            ...prevTodos, todo
        ]);
    };

    const updateTodo = (todos: ITodo[]) => {
        setTodos(todos)
    };
    
    return (
        <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    );
};