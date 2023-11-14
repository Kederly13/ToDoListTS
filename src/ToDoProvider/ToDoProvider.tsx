import { createContext, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

type TodoProviderParams = {
    children: ReactNode;
};

interface ITodo {
    id: number;
    title: string;
    dueDate: string;
    dueTime: string
    priority?: string;
    complexity?: string;
    tags?: string[];
    subTasks?: string[];
}

interface IFilterMenu {

}

type TodoContextType = {
    todos: ITodo[];
    saveTodo: (todo: ITodo) => void;
    // updateTodo: (id: number) => void;
    // deleteTodo: (id: number) => void;
};

type Id = {
    id: string;
};

export const TodoContext = createContext<TodoContextType | null>(null);

export const ToDoProvider: React.FC<TodoProviderParams> = ({ children }) => {
    const { id } = useParams<Id>();
    const [todos, setTodos] = useState<ITodo[]>([]);
    
    const navigate = useNavigate();

    const saveTodo = (todo: ITodo) => {
        const newTodo = [...todos, todo];
        setTodos(newTodo)
    };

    return (
        <TodoContext.Provider value={{ todos, saveTodo }}>
            {children}
        </TodoContext.Provider>
    )
}