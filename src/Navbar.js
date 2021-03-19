import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarText } from 'reactstrap';
import { useSelector } from 'react-redux';
import { calculateQuantity } from './helpers';
import './Navbar.css';
const NavBar = () => {
	const cartTotal = useSelector((st) => st.cartTotal);
	const cartItems = useSelector((st) => calculateQuantity(st.cartItems));
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="info" dark expand="md" className="px-5 align-top">
				<NavLink className="navbar-brand" to="/">
					Shoply
				</NavLink>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavbarText>Cart Total: ${cartTotal}</NavbarText>
						</NavItem>
						<NavItem>
							<NavLink className="nav-link" to="/cart">
								<i className="fas fa-shopping-cart" />
								{cartItems > 0 && <span className="badge badge-danger Nav-badge">{cartItems}</span>}
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default NavBar;
