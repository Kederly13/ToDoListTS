import { useNavigation } from 'react-router-dom';
import { ToDoProvider } from 'ToDoProvider';

import { TaskNameForm } from '../../components/TaskNameForm';
import { SaveTaskBtn } from '../../components/SaveTaskBtn';
import { DateForms } from '../../components/DateForms';

import Arrow from './Arrow.svg';
import classes from './NewTask.module.sass';

type CustomNavigate = (steps: number) => void;

export const NewTask = () => {

    // const navigate = useNavigation();
    // console.log(navigate)
    

    return (
        <section className={classes.newTaskSection}>
            <div className={classes.container}>
                <div className={classes.newTask}>
                    <div className={classes.header}>
                        <button type='button'>
                            <img src={Arrow} alt='back' className={classes.backArrow}/>
                        </button>
                        <h1 className={classes.newTask__title}>Add New Task</h1>
                        
                    </div>
                    <div className={classes.body}>
                        <TaskNameForm />
                        <DateForms />
                        <SaveTaskBtn />
                    </div>
                </div>
            </div>
        </section>
    );
};