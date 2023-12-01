import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import { TodoContext, ITodo } from '../../ToDoProvider';

import { EditTaskForm } from "components/forms/EditTaskForm";

const EditTask = () => {

    const { id } = useParams();
    const todoContext = useContext(TodoContext);

    if (!todoContext) {
        // Handle the case where todoContext is null (e.g., return an error message)
        return <p>Todo context is null</p>;
    }

    const task = todoContext.find(task => task.id === id)

    return (
        <section>

        </section>
    )
}