import { useNavigate} from 'react-router-dom';
import { ToDoProvider } from 'ToDoProvider';

import { NewTaskForm } from 'components/forms/NewTaskForm';
import Arrow from './Arrow.svg';

import classes from './NewTask.module.sass';

type CustomNavigate = (steps: number) => void;

type Navigate = {
    navNewTask: () => void;
    navPrevPage: () => void
};

export const NewTask = () => {
    const navigate = useNavigate();
    
    return (
        <section className={classes.newTaskSection}>
            <div className={classes.container}>
                <div className={classes.newTask}>
                    <div className={classes.header}>
                        <button type='button' onClick={() => navigate(-1)}>
                            <img src={Arrow} alt='back' className={classes.backArrow}/>
                        </button>
                        <h1 className={classes.newTask__title}>Add New Task</h1>
                    </div>
                    <div className={classes.body}>
                        <NewTaskForm />
                    </div>
                </div>
            </div>
        </section>
    );
};