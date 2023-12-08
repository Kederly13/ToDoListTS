import { useState } from 'react';
import { ICheckItem } from 'components/forms/NewTaskForm/NewTaskForm';
import { CheckListBtn } from './components/CheckListBtn';
import { Input } from '../Input/Input';

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
                    <CheckListBtn
                        onClick={() => handleNewCheckItem(newSubtask)}
                        sign='+'
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
                            <CheckListBtn
                                onClick={() => removeCheckItem(id)}
                                sign='-'
                            />
                        } 
                    />
                ))
            )}
        </div>
    );  
};