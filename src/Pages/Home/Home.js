import React from 'react';
import './index.css';
import coffeeBag from '../../images/coffee-bag.png';
import { GiCoffeeBeans, GiPresent } from 'react-icons/gi';
import { FaShippingFast } from 'react-icons/fa';
import Footer from '../../Components/Footer/Footer';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';

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
			<section className="aboutMini">
				<div className="aboutMiniBg"></div>
				<h2>why choose us?</h2>
				<p>
					A large part of our role is choosing which particular
					coffees will be feature in our range. This means working
					closely with the best coffee growers to give you more
					impactful experience on every level
				</p>

				<div className="aboutCardsContainer">
					<div className="aboutCard">
						<GiCoffeeBeans />
						<div className="aboutInfo">
							<h3>Best Quality</h3>
							<p>
								Discover an endless variety of the world's best
								artisan coffee form each of our roasters
							</p>
						</div>
					</div>
					<div className="aboutCard">
						<GiPresent />

						<div className="aboutInfo">
							<h3>Exclusive benefits</h3>
							<p>
								special offers and swag when you subscribe,
								including 30% off your first shipment
							</p>
						</div>
					</div>
					<div className="aboutCard">
						<FaShippingFast />
						<div className="aboutInfo">
							<h3>Free shipping</h3>
							<p>
								We cover the cost and coffee is delivered fast.
								Peak freshness: guaranteed.
							</p>
						</div>
					</div>
				</div>
			</section>
			<HowItWorks showButton={true} />
			<Footer />
		</div>
	);
};

export default Home;
