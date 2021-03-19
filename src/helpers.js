export function calculateTotal(products, cart) {
	let total = 0;
	for (let id in products) {
		const { price } = products[id];
		const quantity = cart[id] || 0;
		total += price * quantity;
	}

	return total.toFixed(2);
}

export function calculateQuantity(cart) {
	let quantity = 0;
	for (let id in cart) {
		quantity += cart[id];
	}
	return quantity;
}
