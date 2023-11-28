import React from "react";
import css from '../Button/Button.module.css'

const Button = ({onClick}) => {
	// console.log(onClick);
	return (
		<button type="button" className={css.loadMore} onClick={onClick}>Load more</button>
	)
};

export default Button;