import React from 'react';
import css from '../Button/Button.module.css';

const Button = ({ loadMore, isLoading }) => {
  return (
    <button type="button" className={css.loadMore} onClick={loadMore}>
      Load More
    </button>
  );
};

export default Button;

// {isLoading ? 'Loading...' : 'Load more'}
