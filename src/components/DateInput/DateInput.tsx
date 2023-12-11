import Datepicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import classes from './DateInput.module.sass';

interface IDateInputProps {
    handleDateChange: (newValue: Date | null) => void;
    dueDate: Date | null
};

export const DateInput = ({ handleDateChange, dueDate } : IDateInputProps) => (
    <div className={classes.date}>
        <label htmlFor='date' className={classes.date__label}>Select Due Date</label>
        <div className={classes.date__input}>
            <Datepicker
                placeholderText='enter due Date' 
                selected={dueDate} 
                onChange={(date: Date | null) => handleDateChange(date)} 
            />
        </div> 
    </div>       
);