import Plus from './plus.svg';

import classes from './newTaskBtn.module.sass';

export const NewTaskBtn = () => (
    <button type='button' className={classes.newTaskBtn}>
        <img src={Plus} alt='add' className={classes.button__plus}/>
        Add New Task
    </button>
);