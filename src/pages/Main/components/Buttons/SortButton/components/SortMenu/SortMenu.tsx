import classes from './SortMenu.module.sass';
import { menuData } from './data/menuData';

export const SortMenu = () => {

    return (
        <ul className={classes.list}>
            {menuData.map((listItem) => (
                <li className={classes.list__item}>
                    <label className={classes.list__label}>{listItem}
                        <input type='radio' name='sortMenu' readOnly value='default'/>
                    </label>
                </li>
            ))}
        </ul>
    )   
}

