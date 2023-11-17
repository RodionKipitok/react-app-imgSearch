import React from 'react';
import css from '../Searchbar/Searchbar.module.css';

const Searchbar = () => {
  return (
	<>
    <header className={css.Searchbar}>
      <form className={css.SearchForm}>
        <button type="submit" className={css.SearchFormBtn}>
          <span className={css.SearchFormButtonLabel}></span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
	 
	 </>
  );
};

export default Searchbar;
