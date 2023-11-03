import { useState } from 'react';

import { FilterMenu } from './components/FilterMenu';
import Arrow from './down.svg';

import classes from './filter.module.sass';

export const Filter = () => {

  const [isActiveMenu, setActiveMenu] = useState(false);

  const haldleClick = () => {
    setActiveMenu(!isActiveMenu);
  };

  return (
    <div className={classes.filter}>
      <button type='button' onClick={() => haldleClick()} className={classes.filter__button}>
        <div className={classes.filter__content}>
          <p className={classes.filter__name}>Filter</p>
          <img src={Arrow} alt='arrow' className={`${classes.arrow} ${isActiveMenu ? classes.active : ''}`} />
        </div> 
      </button>
      {isActiveMenu ? <FilterMenu /> : ''}
    </div>
  );  
}
