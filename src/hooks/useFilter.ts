import { useContext, useMemo } from 'react';
import { ITodo } from 'ToDoProvider/ToDoProvider';
import { SORT } from 'constants/sort';
import { TodoContext } from 'ToDoProvider';

export const useFilterTasks = (): ITodo[] => {
    const todoContext = useContext(TodoContext); 
    
    const filteredByTagTasks = useMemo(() => {
        if(!!todoContext?.filterTag?.length) {
            return todoContext?.todos.filter(({ tags }) => {
                return !!tags?.length && tags.some((tag) => todoContext?.filterTag?.includes(tag))
            })
        }

        return todoContext?.todos || [];
    }, [todoContext?.filterTag, todoContext?.todos]) 

    const sortedTasks = useMemo(() => {
        if (todoContext?.sort?.sorted) {
            const sorted = todoContext?.sort.sorted as Exclude<SORT, SORT.ALL>;

            if (!!filteredByTagTasks?.length && filteredByTagTasks?.length >= 1) {
                return [...filteredByTagTasks]?.sort((a, b) => {
                    const isDateTime = sorted === SORT.DUE_DATE_TIME;

                    const aEl = isDateTime ? new Date(a[sorted]) : a[sorted] as any;
                    const bEl = isDateTime ? new Date(b[sorted]) : b[sorted] as any;

                    return todoContext?.sort?.reversed ? aEl - bEl : bEl - aEl;
                })
            } 
        }

        return filteredByTagTasks;
    }, [filteredByTagTasks, todoContext?.sort]);

    const foundTasks = useMemo(() => {
        if (!!sortedTasks?.length && todoContext?.search) {
            return sortedTasks?.filter(({ title }) => {
                return title.toLocaleLowerCase().includes(todoContext.search.toLocaleLowerCase())
            });
        }

        return sortedTasks;
    }, [sortedTasks, todoContext?.search]);

    return foundTasks;
}