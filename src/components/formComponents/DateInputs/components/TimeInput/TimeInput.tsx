import classes from './TimeInput.module.sass';

interface DateInputProps {
    onChange: (newValue: string) => void;
    dueTime: string
};

export const TimeInput = ({ onChange, dueTime}: DateInputProps) => (
    <div className={classes.time}>
        <label htmlFor='date' className={classes.time__label}>Select Time</label>
        <input
            placeholder='00:00'
            id='time' 
            name='dueTime' 
            type='time'
            onChange={(e) => onChange(e.target.value)}
            value={dueTime} 
            className={classes.time__input}                
        />
    </div>
);
