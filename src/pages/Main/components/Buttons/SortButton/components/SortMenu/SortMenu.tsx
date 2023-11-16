import classes from './SortMenu.module.sass';
import { menuData } from './data/menuData';
// do the ul, li, create data with array of items and use map, use label and wrap input

export const SortMenu = () => {

    return (
    <ul className={classes.list}>
        {menuData.map((listItem) => (
            <li className={classes.list__item}>
                <label className={classes.list__label}>{listItem}
                    <input type='radio' name={listItem} readOnly value='default'/>
                </label>
            </li>
        ))}
    </ul>
    )
    
}

// export const SortMenu = () => {
//     return (
//         <div className={classes.sortMenu}>
//             <div className={classes.sortMenu__menuItem}>
//                 <h5>Default</h5>
//                 <input type='radio' name='sort' readOnly value='default' />
//             </div>
//             <div className={classes.sortMenu__menuItem}>
//                 <h5>Ascending Date</h5>
//                 <input type='radio' name='sort' readOnly value='Ascending Date'/>
//             </div>
//             <div className={classes.sortMenu__menuItem}>
//                 <h5>Descending Date</h5>
//                 <input type='radio' name='sort' readOnly value='Descending Date' />
//             </div>
//             <div className={classes.sortMenu__menuItem}>
//                 <h5>Ascending Complexity</h5>
//                 <input type='radio' name='sort' readOnly value='Ascending Complexity' />
//             </div>
//             <div className={classes.sortMenu__menuItem}>
//                 <h5>Descending Complexity</h5>
//                 <input type='radio' name='sort' readOnly value='Descending Complexity' />
//             </div>
//             <div className={classes.sortMenu__menuItem}>
//                 <h5>Ascending Priority</h5>
//                 <input type='radio' name='sort' readOnly value='Ascending Priority' />
//             </div>
//             <div className={classes.sortMenu__menuItem}>
//                 <h5>Descending Priority</h5>
//                 <input type='radio' name='sort' readOnly value='Descending Priority' />
//             </div>
//         </div>
//     )
// };
