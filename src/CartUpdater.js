import React from 'react';
import './CartUpdater.css';
import { useDispatch } from 'react-redux';

function CartUpdater(id) {
	const dispatch = useDispatch();
	const add = () => dispatch({ type: 'ADD_TO_CART', id });
	const remove = () => dispatch({ type: 'REMOVE_FROM_CART', id });
	return (
		<div className="CartUpdater">
			<i onClick={remove} className="fas fa-cart-arrow-down fa-2x text-danger CartUpdater-icon" />
			<i onClick={add} className="fas fa-cart-plus fa-2x text-success CartUpdater-icon" />
		</div>
	);
}

export default CartUpdater;
