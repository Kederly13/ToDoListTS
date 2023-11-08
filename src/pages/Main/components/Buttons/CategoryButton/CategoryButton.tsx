import { useState } from 'react';
import Arrow from './down.svg';

import classes from './CategoryButton.module.sass';
import { CategoryMenu } from './components/CategoryMenu';

export const CategoryButton = () => {

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
      {isActiveMenu ? <CategoryMenu /> : ''}
    </div>
  );  
};
