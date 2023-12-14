import { useState } from 'react';
import { CategoryMenu } from './components/CategoryMenu';
import Arrow from './down.svg';

import classes from './CategoryFilter.module.sass';

export const CategoryFilter: React.FC = () => {
  const [isActiveMenu, setActiveMenu] = useState(false);

  const haldleClick = () => {
    setActiveMenu(!isActiveMenu);
  };

  return (
    <div className={classes.category}>
      <button type='button' onClick={haldleClick} className={classes.category__btn}>
        <span className={classes.category__btnName}>Category</span>
        <img src={Arrow} alt='arrow' className={`${classes.category__btnIcon} ${isActiveMenu ? classes.active : ''}`} />
      </button>
      {isActiveMenu && <CategoryMenu />}
    </div>
  );  
};
