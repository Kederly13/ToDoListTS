import { EditBtn } from './components/EditBtn';

export const TodoBtns = ({id}: {id: string}) => (
    <div>
        <EditBtn
            id={id} 
        />
    </div>
);