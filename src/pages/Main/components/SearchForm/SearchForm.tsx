import { useContext, useState } from 'react';

import { TodoContext } from 'ToDoProvider';

import Arrow from './svg/Arrow.svg';
import SearchIcon from './svg/SearchIcon.svg';

import classes from './searchForm.module.sass';

const SearchForm: React.FC = () => {
  const todoContext = useContext(TodoContext);

  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (!e.target.value) {
      todoContext?.setSearch(e.target.value);
    }  
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    todoContext?.setSearch(value);
  };

    return (
      <form className={classes.searchForm} onSubmit={handleSubmit}>
          <div className={classes.inputWrapper}>      
            <img src={SearchIcon} alt='searchIcon' className={classes.searchIcon} /> 
            <input 
              type='search' 
              placeholder='Search...'
              value={value}
              onChange={handleChange}
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