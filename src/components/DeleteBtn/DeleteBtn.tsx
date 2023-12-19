import { Trash } from 'components/assets/svg/Delete';

import classes from './DeleteBtn.module.sass';

interface IDeleteBtn {
    handleDelete?: () => void;
};

export const DeleteBtn: React.FC<IDeleteBtn> = ({ handleDelete }) => (
    <button onClick={handleDelete} className={classes.deleteBtn}>Delete Task</button>
);