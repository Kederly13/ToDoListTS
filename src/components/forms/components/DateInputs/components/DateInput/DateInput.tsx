import classes from './DateInput.module.sass';

interface DateInputProps {
    onChange: (newValue: string) => void;
    dueDate: string
};

export const DateInput: React.FC<DateInputProps> = ({ dueDate, onChange }) => (
    <div className={classes.date}>
        <label htmlFor='date' className={classes.date__label}>Select Due Date</label>
        <input
            placeholder='dd/mm/yyyy'
            id='date' 
            name='dueDate' 
            type='number'
            onChange={(e) => onChange(e.target.value)}
            value={dueDate} 
            className={classes.date__input}                
        />
    </div>
);



