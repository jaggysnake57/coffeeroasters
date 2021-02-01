import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Bean from '../../images/Coffee_beans_by_gnokii.svg';
import './index.css';

const NavBar = () => {
	return (
		<div className="navBar">
			<div className="brand">
				<img src={Bean} alt="" />
				<h1>coffeeroasters</h1>
			</div>
			<nav>
				<Router>
					<Link to="/">Home</Link>
					<Link to="/about">About Us</Link>
					<Link to="/">Create Your Plan</Link>
				</Router>
			</nav>
		</div>
	);
};

export default NavBar;
