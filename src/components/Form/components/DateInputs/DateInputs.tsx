import { DateInput} from './components/DateInput';
import { TimeInput } from './components/TimeInput';

import classes from './DateInputs.module.sass';

interface DateInputsProps {
    dueDate: string;
    dueTime: string
    onDateChange: (newValue: string) => void;
    onTimeChange: (newValue: string) => void;
}

export const DateInputs = ({ onDateChange, onTimeChange, dueDate, dueTime }: DateInputsProps) => (
    <div className={classes.dateInputs}>
        <DateInput onChange={onDateChange} dueDate={dueDate}/>
        <TimeInput onChange={onTimeChange} dueTime={dueTime}/>
    </div>
);