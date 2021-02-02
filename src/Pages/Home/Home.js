import React from 'react';
import './index.css';
import coffeeBag from '../../images/coffee-bag.png';

const Home = () => {
	return (
		<div className="home">
			<section className="hero">
				<h1>Great coffee made simple.</h1>
				<p>
					Start your mornings with the worlds best coffees. Try our
					expertly curated artisan coffees from our best roasters
					delivered to your door, at your schedule
				</p>
				<button>Create your plan</button>
			</section>
			<section className="collection">
				<h2>our collection</h2>
				<div className="cardsContainer">
					<div className="coffeeCard">
						<img src={coffeeBag} alt="" />
						<div className="cardDescription">
							<h3>Gran Espressso</h3>
							<p>
								Light and flavorful with cocoa and black pepper
								for an intense experience
							</p>
						</div>
					</div>
					<div className="coffeeCard">
						<img src={coffeeBag} alt="" />
						<div className="cardDescription">
							<h3>Planato</h3>
							<p>
								Brazilian dark roast with rich and velvety body,
								and hints of fruits and nuts
							</p>
						</div>
					</div>
					<div className="coffeeCard">
						<img src={coffeeBag} alt="" />
						<div className="cardDescription">
							<h3>Piccollo</h3>
							<p>
								Mild and smooth blend featuring notes of toasted
								almond and dried cherry.
							</p>
						</div>
					</div>
					<div className="coffeeCard">
						<img src={coffeeBag} alt="" />
						<div className="cardDescription">
							<h3>Danche</h3>
							<p>
								Ethiopian hand-harvested blend densely packed
								with vibrant fruit notes.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
