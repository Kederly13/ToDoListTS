import { DateInput} from './components/DateInput';
import { TimeInput } from './components/TimeInput';

import classes from './DateInputs.module.sass';

interface IDateInputsProps {
    dueDate: string;
    dueTime: string
    onDateChange: (newValue: string) => void;
    onTimeChange: (newValue: string) => void;
};

export const DateInputs: React.FC<IDateInputsProps> = ({ onDateChange, onTimeChange, dueDate, dueTime }) => (
    <div className={classes.dateInputs}>
        <DateInput onChange={onDateChange} dueDate={dueDate}/>
        <TimeInput onChange={onTimeChange} dueTime={dueTime}/>
    </div>
);