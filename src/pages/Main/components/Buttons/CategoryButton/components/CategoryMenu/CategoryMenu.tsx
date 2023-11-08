import classes from './CategoryMenu.module.sass';

export const CategoryMenu = () => {

    return (
    <ul className={classes.list}>
        {/* {menuData.map((listItem) => (
            <li className={classes.list__item}>
                <label className={classes.list__label}>{listItem}
                    <input type='radio' name={listItem} readOnly value='default'/>
                </label>
            </li>
        ))} */}
    </ul>
    )    
};
