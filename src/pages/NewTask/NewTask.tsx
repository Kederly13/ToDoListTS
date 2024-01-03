import { useNavigate } from 'react-router-dom';

import { TaskForm } from 'components/TaskForm';
import { BtnCircle } from 'components/BtnCircle';
import { BackArrow } from 'components/icons/BackArrow';

import classes from './NewTask.module.sass';

export const NewTask = () => {
    const navigate = useNavigate();

    return (
        <section className={classes.newTaskSection}>
            <div className={classes.container}>
                <div className={classes.newTask}>
                    <div className={classes.newTask__header}>
                        <BtnCircle
                            icon={<BackArrow />}
                            onClick={() => navigate(-1)}
                            style='white'
                        />
                        <h1 className={classes.newTask__title}>Add New Task</h1>
                    </div>
                    <div className={classes.body}>
                        <TaskForm />
                    </div>
                </div>
            </div>
        </section>
    )
};