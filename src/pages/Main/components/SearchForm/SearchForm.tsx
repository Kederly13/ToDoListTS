import Arrow from './svg/Arrow.svg';
import SearchIcon from './svg/SearchIcon.svg';

import classes from './searchForm.module.sass';

const SearchForm = () => {
    return (
      <form className={classes.searchForm}>
          <div className={classes.inputWrapper}>      
            <img src={SearchIcon} alt='searchIcon' className={classes.searchIcon} /> 
            <input 
              type='search' 
              placeholder='Search...'
  
              // onChange={}
              className={classes.input}
              />
            <button type='submit' className={classes.submitButton}>
              <img src={Arrow} alt='run' className={classes.arrowIcon} />
            </button>   
          </div>
      </form>
    )
  };
  
  export { SearchForm };