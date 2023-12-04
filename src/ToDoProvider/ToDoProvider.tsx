import { createContext, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
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
};

type TodoContextType = {
    todos: ITodo[];
    saveTodo: (todo: ITodo) => void;
    // updateTodo: (id: number) => void;
    // deleteTodo: (id: number) => void;
};

type Id = {
    id: string;
};

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const ToDoProvider: React.FC<TodoProviderParams> = ({ children }) => {
    const { id } = useParams<Id>();
    const [todos, setTodos] = useState<ITodo[]>([]);

    const saveTodo = (todo: ITodo) => {
        const newTodo = [...todos, todo];
        setTodos((prevTodos) => [
            ...prevTodos, todo
        ]);
    };

    return (
        <TodoContext.Provider value={{ todos, saveTodo }}>
            {children}
        </TodoContext.Provider>
    );
};