import React from 'react';
import CartUpdater from './CartUpdater';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ name, id }) {
	return (
		<div className="card ProductCard">
			<div className="card-body ProductCard-body">
				<div className="card-title">
					<Link to={`/products/${id}`}>
						<h2>{name}</h2>
					</Link>
				</div>
				<div className="card-text">
					<CartUpdater id={id} />
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
