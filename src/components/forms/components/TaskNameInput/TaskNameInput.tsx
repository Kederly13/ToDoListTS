import classes from './TaskNameInput.module.sass';

interface ITaskNameInputProps {
    value: string;
    setValue: (value: string) => void;
};

export const TaskNameInput: React.FC<ITaskNameInputProps> = ({ value, setValue } ) => (
    <div className={classes.form}>
        <label htmlFor='task' className={classes.form__label}>Task Name</label>
        <input
            placeholder='Name of task...'
            id='task' 
            name='taskName' 
            type='text'
            onChange={(e) => setValue(e.target.value)}
            value={value} 
            className={classes.form__input}                
        /> 
    </div>
);