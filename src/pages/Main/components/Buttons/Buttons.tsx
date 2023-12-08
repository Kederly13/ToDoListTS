import { CategoryButton } from './CategoryButton';
import { SortButton } from './SortButton';
import { ICategories } from './CategoryButton/components/CategoryMenu/CategoryMenu';

import classes from './buttons.module.sass';

export const Buttons: React.FC< ICategories > = ({ setSelectedCategories }) => (
    <div className={classes.buttons}>
        <CategoryButton
            setSelectedCategories={setSelectedCategories} 
        />
        <SortButton />
    </div>
);