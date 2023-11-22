import { useState } from 'react';
import classes from 'Checklist.module.sass';

interface ChecklistProps {
    newSubtask: string,
    setChecklist: (subTask: string) => void,
    checkList: string[]
};

export const Checklist = ({setChecklist, checkList }: ChecklistProps) => {
    const [newSubtask, setNewSubtask] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const updatedCheckList = [...checkList];
        updatedCheckList[index] = e.target.value;
        setChecklist(updatedCheckList.join(', '));
    };
    
    return (
        <div className={classes.checklist}>
            <label htmlFor='checklist'>Add Checklist for subtasks</label>
            <input
                placeholder='Add item'
                id='checklist'
                onChange={(e) => setChecklist(e.target.value)}
                value={newSubtask}
            />
            {checkList.length > 0 && (
                checkList.map((item: string, index: number) => (
                    <input
                        key={index}
                        value={item}
                        onChange={(e) => handleInputChange(e, index)}
                    />
                ))
            )}
        </div>
    );  
};