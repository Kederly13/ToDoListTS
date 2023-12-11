
import { TimeInput } from './components/TimeInput';
import { DateInput } from 'components/DateInput/DateInput';

import classes from './DateInputs.module.sass';

interface IDateInputsProps {
    dueDate: Date | null;
    dueTime: string
    onDateChange: (newValue: Date | null) => void;
    onTimeChange: (newValue: string) => void;
};

export const DateInputs: React.FC<IDateInputsProps> = ({ onDateChange, onTimeChange, dueDate, dueTime }) => (
    <div className={classes.dateInputs}>
        <DateInput
            handleDateChange={onDateChange}
            dueDate={dueDate}
        />
        <TimeInput 
            onChange={onTimeChange} 
            dueTime={dueTime}
        />
    </div>
);