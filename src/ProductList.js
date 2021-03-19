import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList() {
	const products = useSelector((st) => st.products);
	return (
		<div className="ProductList">
			<h1 className="text-center">
				Welcome to Shoply! We have a very ecclectic selection here...have at it!
			</h1>
			<div className="ProductList-list">
				{Object.keys(products).map((id) => (
					<ProductCard key={id} name={products[id].name} id={id} />
				))}
			</div>
		</div>
	);
}

export default ProductList;
