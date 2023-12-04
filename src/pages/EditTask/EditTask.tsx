import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import { TodoContext} from '../../ToDoProvider';

import { EditTaskForm } from "components/forms/EditTaskForm";
import { NewTaskForm } from 'components/forms/NewTaskForm';

export const EditTask = () => {

    const { id } = useParams();
    const todoContext = useContext(TodoContext);

    const task = todoContext && todoContext.todos.find(task => task.id === id);

    console.log(task);

    return (
        <section>
            <NewTaskForm
                task={task}
            />
        </section>
    )
}