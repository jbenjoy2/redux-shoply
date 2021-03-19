import React from 'react';
import { useSelector } from 'react-redux';
import CartUpdater from './CartUpdater';
import { Link } from 'react-router-dom';
import { calculateQuantity, calculateTaxTotal, calculateTax } from './helpers';
import './Cart.css';
function Cart() {
	const { products, cartItems, cartTotal } = useSelector((st) => st);
	const totalQuantity = calculateQuantity(cartItems);

	const makeTable = () => {
		return (
			<table className="table table-bordered table-striped">
				<thead>
					<tr>
						<th>Item</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
						<th>Update Cart</th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(cartItems).map((id) => (
						<tr key={id}>
							<td className="text-center align-middle">
								<Link to={`/products/${id}`}>{products[id].name}</Link>
							</td>
							<td className="text-center align-middle">{products[id].price}</td>
							<td className="text-center align-middle">{cartItems[id]}</td>
							<td className="text-center align-middle">{cartItems[id] * products[id].price}</td>
							<td>
								<CartUpdater id={id} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	};
	return (
		<div className="Cart container mt-4">
			<h1>Your Shopping Cart</h1>
			{totalQuantity > 0 ? (
				<div className="Cart-table mt-3">
					{makeTable()}
					<h5>Subtotal: ${cartTotal}</h5>
					<h5 className="Cart-tax">Tax(7.25%): ${calculateTax(cartTotal)}</h5>
					<h3>Total: ${calculateTaxTotal(cartTotal)}</h3>
				</div>
			) : (
				<h3>No items yet!</h3>
			)}
		</div>
	);
}

export default Cart;
