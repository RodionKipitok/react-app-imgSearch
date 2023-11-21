import React from 'react';
import css from '../Searchbar/Searchbar.module.css';



const Searchbar = ({onChange,values,onSubmit}) => {

 

  return (
  
	<>
    <header className={css.Searchbar}>
      <form onSubmit={onSubmit} className={css.SearchForm}>
        <button  type="submit" className={css.SearchFormBtn}>
          <span className={css.SearchFormButtonLabel}></span>
        </button>

        <input
          onChange={onChange}
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={values}
        />
      </form>
    </header>
	 
	 </>
  );
};

export default Searchbar;
