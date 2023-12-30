import { SetStateAction, createContext, useState, Dispatch } from 'react';
import { ReactNode } from 'react';
import { ICheckItem } from 'components/TaskForm/TaskForm';
import { SORT } from 'constants/sort';

type TodoProviderParams = {
    children: ReactNode;
};

export interface ITodo {
    id: string;
    title: string;
    dueDateTime: string;
    priority?: number;
    complexity?: number;
    tags?: string[];
    checkList?: ICheckItem[];
    isClicked: boolean;
    progressValue?: number  
};

export interface ISort {
    sorted: SORT,
    reversed: boolean
};

type TodoContextType = {
    todos: ITodo[];
    sort: ISort;
    setSort: Dispatch<SetStateAction<ISort>>;
    filterTag: string[];
    setFilterTag: Dispatch<SetStateAction<string[]>>
    search: string;
    setSearch: Dispatch<SetStateAction<string>>
    saveTodo: (todo: ITodo) => void;
    updateTodo: (todos: ITodo[]) => void;
    handleToggle: (id: string) => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);

export const ToDoProvider: React.FC<TodoProviderParams> = ({ children }) => {
    const defaultTasks = JSON.parse(localStorage.getItem('tasks')!) || [];

    const [todos, setTodos] = useState<ITodo[]>(defaultTasks);
    const [sort, setSort] = useState<ISort>({ sorted: SORT.ALL, reversed: false });
    const [filterTag, setFilterTag] = useState<string[]>([]);
    const [search, setSearch] = useState<string>('');

    const saveTodo = (todo: ITodo) => {
        const addTasks = [...todos, todo];
        setTodos(addTasks);
        localStorage.setItem('tasks', JSON.stringify(addTasks));
    };
    
    const updateTodo = (todos: ITodo[]) => {
        setTodos(todos);
        localStorage.setItem('tasks', JSON.stringify(todos));
    };

    

    const handleToggle = (id: string) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isClicked: !todo.isClicked
                    };
                }
                return todo
            });
        });
    };

    const globalState: TodoContextType = {
        todos,
        saveTodo,
        updateTodo,
        handleToggle,
        sort,
        setSort,
        filterTag,
        setFilterTag,
        search,
        setSearch
    };
    
    return (
        <TodoContext.Provider value={globalState}>
            {children}
        </TodoContext.Provider>
    );
};