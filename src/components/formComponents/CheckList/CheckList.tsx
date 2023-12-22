import { useState } from 'react';
import { ICheckItem } from 'components/TaskForm/TaskForm';
import { Input } from '../Input/Input';
import { BtnCircle } from 'components/BtnCircle';

import classes from './CheckList.module.sass';

interface ICheckListProps {
    newSubtask: boolean,
    addCheckItem: (value: string) => void,
    removeCheckItem: (id: string) => void,
    updateCheckItemValue: (value: string, id: string) => void,
    checkList: ICheckItem[] 
};

export const CheckList: React.FC<ICheckListProps> = ({ addCheckItem, removeCheckItem, updateCheckItemValue, checkList }) => {
    const [newSubtask, setNewSubtask] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, id} = e.target;
        updateCheckItemValue(value, id)
    };

    const handleNewCheckItem = (newSubtask: string) => {
        addCheckItem(newSubtask);
        setNewSubtask('');      
    };
    
    return (
        <div className={classes.checklist}>
            <Input
                label='Add Checklist for subtasks'
                htmlFor='checklist'
                id='checklist'
                placeholder='Add item'
                value={newSubtask}
                onChange={(e) => setNewSubtask(e.target.value)}
                buttonComponent={
                    <BtnCircle
                        onClick={() => handleNewCheckItem(newSubtask)}
                        icon='+'
                    />
                }
            />
            {checkList.length > 0 && (
                checkList.map(({ value, id }) => (
                    <Input
                        key={id}
                        id={id}
                        value={value}
                        onChange={handleInputChange}
                        buttonComponent={
                            <BtnCircle
                                onClick={() => removeCheckItem(id)}
                                icon='-'
                                style='lightBlue'
                            />
                        } 
                    />
                ))
            )}
        </div>
    );  
};