import { useNavigate } from 'react-router-dom';
import { Edit } from 'components/assets/svg/Edit';

export const EditBtn = ({ id }: {id: string}) => {
    const navigate = useNavigate();

    return (
        <button type='button' onClick={() => navigate(`/task/${id}`)}>
            <Edit />
        </button>
    );
};