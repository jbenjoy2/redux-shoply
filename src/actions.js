import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_TAX_RATE } from './actionTypes';
export function addToCart(id) {
	return {
		type : ADD_TO_CART,
		id
	};
}
export function removeFromCart(id) {
	return {
		type : REMOVE_FROM_CART,
		id
	};
}

export function updateTaxRate(taxRate) {
	return {
		type    : UPDATE_TAX_RATE,
		taxRate
	};
}
