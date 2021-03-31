import './index.css';
import commitImage from '../../images/about-commit.jpg';
import qualityImage from '../../images/about-quality.jpg';
import Footer from '../../Components/Footer/Footer';
import { useHistory } from 'react-router';

export const About = () => {
	return (
		<div className="about">
			<section className="hero">
				<h1>About</h1>
				<p>
					Coffeeroasters began its journey of exotic discovery in
					1999, highlighting stories of coffee from around the world.
					We have since been dedicated to bringing the perfect cup -
					from bean to brew - in every shipment
				</p>
			</section>
			<section className="commitment">
				<div className="imageContainer">
					<img src={commitImage} alt="" />
				</div>
				<div className="infoContainer">
					<h2>Our commitment</h2>
					<p>
						We're built on a simple mission and commitment to doing
						good along the way. We want to make it easy for you to
						discover and brew the worlds best coffee at home. It all
						starts at source. To locate the specific lots we want to
						purchase, we travel nearly 60 days a year to understand
						the challenges and opportunities in each of these
						places. we collaborate with exceptional coffee growers
						and empower a global community of farmers through well
						above fair-trade benchmarks. we also offer training,
						support farm community initiatives, and invest in coffee
						plant science. Curating only the finest blends, we roast
						each lot to highlight tasting profiles distinctive to
						their native growing region.
					</p>
				</div>
			</section>
			<section className="quality">
				<div className="infoContainer">
					<h2>Uncompromising quality</h2>
					<p>
						Although we work with growers wh pay close attention to
						all stages harvest and processing, we still employ, on
						our end, a rigorous quality control program to avoid
						over-roasting or baking the coffee dry. Every bag of
						coffee is tagged with the roast date and batch number.
						Our goal is to roast consistent, user-friendly coffee,
						so that brewing is easy and enjoyable.
					</p>
				</div>
				<div className="imageContainer"></div>
			</section>
			<Footer />
		</div>
	);
};
