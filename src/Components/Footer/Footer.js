import React from 'react';
import './index.css';
import Bean from '../../images/Coffee_beans_by_gnokii.svg';
import { Link } from 'react-router-dom';
import { FiInstagram } from 'react-icons/fi';
import { ImFacebook2, ImTwitter } from 'react-icons/im';

const Footer = () => {
	return (
		<div className="footer">
			<div className="brand">
				<img src={Bean} alt="" />
				<h1>coffeeroasters</h1>
			</div>
			<div className="altNav">
				<Link to="/">Home</Link>
				<Link to="/">about us</Link>
				<Link to="/">create your plan</Link>
			</div>
			<div className="social">
				<ImFacebook2 />
				<ImTwitter />
				<FiInstagram />
			</div>
		</div>
	);
};

export default Footer;
