import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const HowItWorks = ({ showButton }) => {
	return (
		<section className="howItWorks">
			<h2>How it works</h2>
			<div className="bulletLine"></div>
			<div className="bulletCardsContainer">
				<div className="bulletCard">
					<div className="bulletPoint"></div>
					<span className="bulletNumber">01</span>
					<h3>Pick your coffee</h3>
					<p>
						Select from our evolving range of artisan coffees. Our
						beans are ethically sourced and we pay fair prices for
						them. There are new coffees in all profiles every month
						for you to try
					</p>
				</div>
				<div className="bulletCard">
					<div className="bulletPoint"></div>
					<span className="bulletNumber">02</span>
					<h3>Choose your frequency</h3>
					<p>
						Customize your order frequency, quantity, even your
						roast style and grind type. Pause, skip, cancel with no
						commitment through our online portal
					</p>
				</div>
				<div className="bulletCard">
					<div className="bulletPoint"></div>
					<span className="bulletNumber">03</span>
					<h3>Receive and enjoy!</h3>
					<p>
						We ship your package within 48 hours, freshly roasted.
						sit back and enjoy award-winning world-class coffees
						curated th provide a distinct tasting experience.
					</p>
				</div>
			</div>

			{showButton && (
				<Link className="btn" to="/create">
					Create your plan
				</Link>
			)}
		</section>
	);
};

export default HowItWorks;
