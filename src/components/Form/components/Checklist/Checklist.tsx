import { useState } from 'react';
import { ICheckItem } from 'components/Form/Form';
import { CheckListBtn } from '../CheckList/components/CheckListBtn';
import { CheckListInput } from './components/CheckListInput';

import classes from './CheckList.module.sass';

interface CheckListProps {
    newSubtask: boolean,
    addCheckItem: (value: string) => void,
    removeCheckItem: (id: string) => void,
    updateCheckItemValue: (value: string, id: string) => void,
    checkList: ICheckItem[] 
};

export const CheckList = ({ addCheckItem, removeCheckItem, updateCheckItemValue, checkList }: CheckListProps) => {
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
            <CheckListInput
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
                    <CheckListInput
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