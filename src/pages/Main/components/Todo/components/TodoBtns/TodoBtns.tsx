import { useNavigate } from 'react-router-dom';

import { TodoBtn } from 'components/TodoBtn';
import { Edit } from 'components/assets/svg/Edit';
import { Check } from 'components/assets/svg/Check';


export const TodoBtns = ({id}: {id: string}) => {
    const navigate = useNavigate();

    return (
        <div>
            <TodoBtn
                icon={<Check />} 
            />  
            <TodoBtn
                icon={<Edit/>}
                handleButtonClick={() => navigate(`/task/${id}`)}
            />
        </div>
    );
};