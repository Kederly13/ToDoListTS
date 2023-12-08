import { useNavigate } from 'react-router-dom';

import { BackArrow } from 'components/assets/svg/BackArrow';

import classes from './BackBtn.module.sass';

export const BackBtn = () => {
    const navigate = useNavigate();

    return (
        <button type='button' onClick={() => navigate(-1)} className={classes.backArrow}>
            <BackArrow  />
        </button>
    )  
};