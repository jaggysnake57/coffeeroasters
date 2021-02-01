import React, { useState } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Bean from '../../images/Coffee_beans_by_gnokii.svg';
import './index.css';
import { RiCloseCircleLine } from 'react-icons/ri';

const NavBar = () => {
	const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);
	return (
		<div className="navBar">
			<div className="brand">
				<img src={Bean} alt="" />
				<h1>coffeeroasters</h1>
			</div>
			<nav className={navMenuIsOpen ? 'open' : 'closed'}>
				<span onClick={() => setNavMenuIsOpen(false)}>
					<RiCloseCircleLine />
				</span>
				<Router>
					<Link to="/">Home</Link>
					<Link to="/about">About Us</Link>
					<Link to="/">Create Your Plan</Link>
				</Router>
			</nav>
			<div className="burger" onClick={() => setNavMenuIsOpen(true)}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default NavBar;
