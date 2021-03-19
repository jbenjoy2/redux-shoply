import data from '../data.json';
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_TAX_RATE } from '../actionTypes';
import { calculatePreTaxTotal } from '../helpers';

const items = window.localStorage.getItem('cartItems');
const total = window.localStorage.getItem('cartTotal');
const cartItems = items ? JSON.parse(items) : {};
const cartTotal = total ? JSON.parse(total) : 0.0;
const INITIAL_STATE = {
	products  : data.products,
	cartItems : cartItems,
	cartTotal : cartTotal,
	taxRate   : 0.04
};

const rootReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			const cart = { ...state.cartItems };
			cart[action.id] = (cart[action.id] || 0) + 1;
			window.localStorage.setItem('cartItems', JSON.stringify(cart));
			const total = calculatePreTaxTotal(state.products, cart);
			window.localStorage.setItem('cartTotal', JSON.stringify(total));
			return {
				...state,
				cartItems : cart,
				cartTotal : total
			};
		}
		case REMOVE_FROM_CART: {
			const cart = { ...state.cartItems };
			if (!cart[action.id]) return state;
			cart[action.id]--;
			if (cart[action.id] === 0) {
				delete cart[action.id];
			}
			window.localStorage.setItem('cartItems', JSON.stringify(cart));
			const total = calculatePreTaxTotal(state.products, cart);
			window.localStorage.setItem('cartTotal', JSON.stringify(total));
			return {
				...state,
				cartItems : cart,
				cartTotal : total
			};
		}
		case UPDATE_TAX_RATE:
			return {
				...state,
				taxRate : action.taxRate
			};
		default:
			return state;
	}
};
export default rootReducer;
