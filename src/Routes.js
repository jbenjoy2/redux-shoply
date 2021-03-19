import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductList from './ProductList';
const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<ProductList />
			</Route>
			<Route exact path="/cart">
				<h1>Your Shopping Cart</h1>
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
