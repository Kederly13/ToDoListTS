import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { TodoBtn } from 'components/TodoBtn';
import { Edit } from 'components/assets/svg/Edit';
import { Check } from 'components/assets/svg/Check';
import { TodoContext } from 'ToDoProvider';

import classes from './TodoBtns.module.sass';

export const TodoBtns = ({id}: {id: string}) => {
    const navigate = useNavigate();

    const todoContext = useContext(TodoContext);
    
    return (
        <div className={classes.todoBtns}>
            <TodoBtn
                icon={<Check />}
                handleButtonClick={() => todoContext?.handleToggle(id)}
            />  
            <TodoBtn
                icon={<Edit/>}
                handleButtonClick={() => navigate(`/task/${id}`)}
            />
        </div>
    );
};