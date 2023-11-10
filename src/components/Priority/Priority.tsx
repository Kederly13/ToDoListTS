import classes from './Priority.module.sass';

export const Priority = () => {

    return (
        <label htmlFor='priority' className={classes.priority}>
            <h2 className={classes.priority__title}>Select Priority Level</h2>
            <div className={classes.priorityWrapper}>
                <div className={classes.priority__item}>
                    <input name='priority' type='radio' className={classes.priority__input}/>
                    <span className={classes.priority__number}>1</span> 
                </div>  
            </div>   
        </label>
    );
};


