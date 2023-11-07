import { useState } from 'react';

import { SortMenu } from './components/SortMenu';

import Arrow from './down.svg';

import classes from './SortButton.module.sass';

export const SortButton = () => {

  const [isActiveMenu, setActiveMenu] = useState(false);

  const haldleClick = () => {
    setActiveMenu(!isActiveMenu);
  };

  return (
    <div className={classes.sort}>
      <button type='button' onClick={haldleClick} className={classes.sort__btn}>
        <span className={classes.sort__btnName}>Sort</span>
        <img src={Arrow} alt='arrow' className={`${classes.sort__btnIcon} ${isActiveMenu ? classes.active : ''}`} />
      </button>
      {isActiveMenu ? <SortMenu /> : ''}
    </div>
  );  
}
