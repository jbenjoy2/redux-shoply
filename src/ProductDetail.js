import React from 'react';
import { useSelector } from 'react-redux';
import CartUpdater from './CartUpdater';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetail() {
	const { id } = useParams();
	const { name, price, description, image_url } = useSelector((st) => ({ ...st.products[id] }));
	return (
		<div className="ProductDetail">
			<h1>{name}: details</h1>
			<img className="img img-fluid ProductDetail-img" src={image_url} alt={name} />
			<div className="ProductDetail-details card-body ">
				<div className="ProductDetail-basicInfo">
					<h5>{name}</h5>
					<p>${price}</p>
				</div>
				<div className="ProductDetail-description mb-3">{description}</div>
				<CartUpdater id={id} />
			</div>
		</div>
	);
}

export default ProductDetail;
