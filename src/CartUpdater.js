import React from 'react';
import './CartUpdater.css';
import { useDispatch } from 'react-redux';
import { addToCart } from './actions';

function CartUpdater({ id }) {
	const dispatch = useDispatch();
	const add = () => dispatch(addToCart(id));
	const remove = () => dispatch({ type: 'REMOVE_FROM_CART', id: id });
	return (
		<div className="CartUpdater">
			<i onClick={remove} className="fas fa-cart-arrow-down fa-2x text-danger CartUpdater-icon" />
			<i onClick={add} className="fas fa-cart-plus fa-2x text-success CartUpdater-icon" />
		</div>
	);
}

export default CartUpdater;
