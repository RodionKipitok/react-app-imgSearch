import React from "react";
import css from '../Button/Button.module.css'

const Button = ({onClick,isLoading}) => {
	console.log(isLoading);
	return (
		<button type="button" className={css.loadMore} onClick={onClick} disabled={isLoading}>
		  {isLoading ? 'Loading...' : 'Load more'}
		</button>
	 );
};

export default Button;