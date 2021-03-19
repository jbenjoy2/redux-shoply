import data from '../data.json';
import { calculateTotal } from '../helpers';
const INITIAL_STATE = { products: data.products, cartItems: {}, cartTotal: 0.0 };

const rootReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'ADD_TO_CART': {
			const cart = { ...state.cartItems };
			cart[action.id] = (cart[action.id] || 0) + 1;
			return {
				...state,
				cartItems : cart,
				cartTotal : calculateTotal(state.products, cart)
			};
		}
		case 'REMOVE_FROM_CART': {
			const cart = { ...state.cartItems };
			if (!cart[action.id]) return state;
			cart[action.id]--;
			if (cart[action.id] === 0) {
				delete cart[action.id];
			}
			return {
				...state,
				cartItems : cart,
				cartTotal : calculateTotal(state.products, cart)
			};
		}
		default:
			return state;
	}
};
export default rootReducer;
