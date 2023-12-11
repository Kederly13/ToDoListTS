import { NewTaskForm } from 'components/TaskForm';
import { BackBtn } from 'components/BackBtn/BackBtn';

import classes from './NewTask.module.sass';

export const NewTask = () => (
    <section className={classes.newTaskSection}>
        <div className={classes.container}>
            <div className={classes.newTask}>
                <div className={classes.header}>
                    <BackBtn />
                    <h1 className={classes.newTask__title}>Add New Task</h1>
                </div>
                <div className={classes.body}>
                    <NewTaskForm />
                </div>
            </div>
        </div>
    </section>
);