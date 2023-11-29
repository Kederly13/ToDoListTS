import { ICheckItem } from 'components/Form/Form';

import classes from './CheckItems.module.sass';

interface ICheckItemsProps {
    checkItems: ICheckItem[];
};

export const CheckItems: React.FC<ICheckItemsProps> = ({ checkItems }) => (
    <ul className={classes.сheckItems}>
        {checkItems.map(({value, id}) => (
            <li className={classes.checkItems__item} key={id}>
                {value}
            </li>
        ))}
    </ul>
);