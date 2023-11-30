import { ICheckItem } from 'components/Form/Form';

import classes from './CheckItems.module.sass';

interface IInputItems {
    inputItems: string[];
};

export const InputItems: React.FC<IInputItems> = ({ inputItems }) => (
    <ul className={classes.inputItems}>
        {inputItems.map(({value}) => (
            <li className={classes.checkItems__item} key={id}>
                {value}
            </li>
        ))}
    </ul>
);