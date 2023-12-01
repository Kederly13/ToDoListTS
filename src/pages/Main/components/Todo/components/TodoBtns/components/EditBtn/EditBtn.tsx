import { useNavigate } from 'react-router-dom';
import edit from '../../../../../../../../components/assets/svg/Edit.svg'

export const EditBtn = ({ id }: {id: string}) => {

    const navigate = useNavigate();
    return (
        <button type='button' onClick={() => navigate(`/task:${id}`)}>
            <img src={edit} alt='edit' />
        </button>
    );
};