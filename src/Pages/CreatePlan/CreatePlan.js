import React, { useEffect, useRef, useState } from 'react';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';
import Footer from '../../Components/Footer/Footer';
import { AiOutlineDown } from 'react-icons/ai';
import { ImQuotesLeft } from 'react-icons/im';
import { ImQuotesRight } from 'react-icons/im';

import './index.css';
import { useLocation } from 'react-router';

const CreatePlan = () => {
	const prefRef = useRef(null);
	const beanRef = useRef(null);
	const quantRef = useRef(null);
	const grindRef = useRef(null);
	const delRef = useRef(null);

	const refs = {
		preference: prefRef,
		beanType: beanRef,
		quantity: quantRef,
		grind: grindRef,
		deliveries: delRef,
	};

	const [isOpen, setIsOpen] = useState({
		preference: true,
		beanType: false,
		quantity: false,
		grind: false,
		deliveries: false,
	});

	const [isChecked, setIsChecked] = useState({
		preference: false,
		beanType: false,
		quantity: false,
		grind: false,
		deliveries: false,
	});

	const [chosenValues, setChosenValues] = useState({
		preference: '',
		beanType: '',
		quantity: '',
		grind: '',
		deliveries: '',
	});

	const [currentPosition, setCurrentPosition] = useState('preference');

	const toggleChoiceOpen = (choice) => {
		setIsOpen({
			...isOpen,
			[choice]: !isOpen[choice],
		});
	};

	const scrollToElement = (ref) => {
		ref.current.scrollIntoView();
	};

	const handleChecked = (section, choice) => {
		if (chosenValues[section] === choice) {
			setChosenValues({
				...chosenValues,
				[section]: '',
			});
			setIsChecked({
				...isChecked,
				[section]: false,
			});
			setCurrentPosition(section);
			scrollToElement(refs[section]);
		} else {
			setChosenValues({
				...chosenValues,
				[section]: choice,
			});
			setIsChecked({
				...isChecked,
				[section]: true,
			});
			for (const key in isChecked) {
				if (!isChecked[key] && key !== section) {
					setCurrentPosition(key);
					setIsOpen({
						...isOpen,
						[key]: true,
					});
					scrollToElement(refs[key]);
					break;
				}
			}
		}

		//change current position to next selection
	};

	const handleCurrentOptionsClick = (clicked) => {
		setCurrentPosition(clicked);
		setIsOpen({
			...isOpen,
			[clicked]: true,
		});
		scrollToElement(refs[clicked]);
	};

	useEffect(() => {
		let test = Object.entries(chosenValues).filter((entry) => {
			if (!entry[1]) return;
			return 1;
		});
	}, [chosenValues]);

	return (
		<div className="createPlan">
			<div className="hero">
				<h1>Create a plan</h1>
				<p>
					Build a subscription plan that best fits your needs. We
					offer an assortment og the best artisan coffees frm around
					the glove delivered fresh to your door.
				</p>
			</div>
			<HowItWorks />
			<div className="planFormContainer">
				<div className="currentOptions">
					<p
						className={
							currentPosition === 'preference'
								? 'currentStep'
								: null
						}
						onClick={() => handleCurrentOptionsClick('preference')}>
						<span
							className={
								isChecked.preference ? 'completed' : null
							}>
							01
						</span>{' '}
						Preferences
					</p>
					{/* ******** */}
					<p
						className={
							currentPosition === 'beanType'
								? 'currentStep'
								: null
						}
						onClick={() => handleCurrentOptionsClick('beanType')}>
						<span
							className={isChecked.beanType ? 'completed' : null}>
							02
						</span>{' '}
						Bean Type
					</p>
					{/* ******* */}
					<p
						className={
							currentPosition === 'quantity'
								? 'currentStep'
								: null
						}
						onClick={() => handleCurrentOptionsClick('quantity')}>
						<span
							className={isChecked.quantity ? 'completed' : null}>
							03
						</span>{' '}
						Quantity
					</p>
					<p
						className={
							currentPosition === 'grind' ? 'currentStep' : null
						}
						onClick={() => handleCurrentOptionsClick('grind')}>
						<span className={isChecked.grind ? 'completed' : null}>
							04
						</span>{' '}
						Grind Option
					</p>
					<p
						className={
							currentPosition === 'deliveries'
								? 'currentStep'
								: null
						}
						onClick={() => handleCurrentOptionsClick('deliveries')}>
						<span
							className={
								isChecked.deliveries ? 'completed' : null
							}>
							05
						</span>{' '}
						Deliveries
					</p>
				</div>

				<div className="formContainer">
					{/* how do you dring your coffee section */}
					<div className="selectionContainer">
						<div className="title" ref={prefRef}>
							<h2>How do you drink your coffee?</h2>
							<AiOutlineDown
								onClick={() => toggleChoiceOpen('preference')}
								className={isOpen.preference ? null : 'isDown'}
							/>
						</div>
						<div
							className={
								isOpen.preference
									? 'choices'
									: 'choices isClosed'
							}>
							<div
								className={
									chosenValues.preference === 'capsule'
										? 'choiceCard checked'
										: 'choiceCard'
								}
								onClick={() =>
									handleChecked('preference', 'capsule')
								}>
								<h3>Capusle</h3>
								<p>
									compatible with Nespresso systems and
									similar brewers
								</p>
							</div>
							<div
								className={
									chosenValues.preference === 'filter'
										? 'choiceCard checked'
										: 'choiceCard'
								}
								onClick={() =>
									handleChecked('preference', 'filter')
								}>
								<h3>Filter</h3>
								<p>
									For pour over or drip methods like
									Aeropress, Chemex and V60
								</p>
							</div>
							<div
								className={
									chosenValues.preference === 'espresso'
										? 'choiceCard checked'
										: 'choiceCard'
								}
								onClick={() =>
									handleChecked('preference', 'espresso')
								}>
								<h3>Espresso</h3>
								<p>
									Dense and finely ground beans for an
									intense, flavorful experience
								</p>
							</div>
						</div>
					</div>
					{/* what type of coffee */}
					<div className="selectionContainer" ref={beanRef}>
						<div className="title">
							<h2>What type of coffee?</h2>
							<AiOutlineDown
								onClick={() => toggleChoiceOpen('beanType')}
								className={isOpen.beanType ? null : 'isDown'}
							/>
						</div>
						<div
							className={
								isOpen.beanType ? 'choices' : 'choices isClosed'
							}>
							<div
								className={
									chosenValues.beanType === 'single origin'
										? 'choiceCard checked'
										: 'choiceCard'
								}
								onClick={() =>
									handleChecked('beanType', 'single origin')
								}>
								<h3>Single Origin</h3>
								<p>
									Distinct, high quality coffee from a
									specific family-owned farm
								</p>
							</div>
							<div
								className={
									chosenValues.beanType === 'decaf'
										? 'choiceCard checked'
										: 'choiceCard'
								}
								onClick={() =>
									handleChecked('beanType', 'decaf')
								}>
								<h3>Decaf</h3>
								<p>
									Just like regular coffee, except the
									caffeine has been removed
								</p>
							</div>
							<div
								className={
									chosenValues.beanType === 'blended'
										? 'choiceCard checked'
										: 'choiceCard'
								}
								onClick={() =>
									handleChecked('beanType', 'blended')
								}>
								<h3>Blended</h3>
								<p>
									Combination of two or three dark roasted
									beans of organic coffees
								</p>
							</div>
						</div>
					</div>
					{/* how much would you like*/}
					<div className="selectionContainer" ref={quantRef}>
						<div className="title">
							<h2>How much would you like?</h2>
							<AiOutlineDown
								onClick={() => toggleChoiceOpen('quantity')}
								className={isOpen.quantity ? null : 'isDown'}
							/>
						</div>
						<div
							className={
								isOpen.quantity ? 'choices' : 'choices isClosed'
							}>
							<div
								className={
									chosenValues.quantity === '250'
										? 'choiceCard checked'
										: 'choiceCard'
								}
								onClick={() =>
									handleChecked('quantity', '250')
								}>
								<h3>250g</h3>
								<p>
									Perfect for the solo drinker. Yields about
									12 delicious cups
								</p>
							</div>
							<div
								className={
									chosenValues.quantity === '500'
										? 'choiceCard checked'
										: 'choiceCard'
								}
								onClick={() =>
									handleChecked('quantity', '500')
								}>
								<h3>500g</h3>
								<p>
									Perfect optjion for a couple Yields about 40
									delectable cups.
								</p>
							</div>
							<div
								className={
									chosenValues.quantity === '1000'
										? 'choiceCard checked'
										: 'choiceCard'
								}
								onClick={() =>
									handleChecked('quantity', '1000')
								}>
								<h3>1000g</h3>
								<p>
									Perfect for offices and events. Yields about
									90 delightful cups.
								</p>
							</div>
						</div>
					</div>
					{/* want us to grind */}
					<div className="selectionContainer" ref={grindRef}>
						<div className="title">
							<h2>Want us to grind them?</h2>
							<AiOutlineDown
								onClick={() => toggleChoiceOpen('grind')}
								className={isOpen.grind ? null : 'isDown'}
							/>
						</div>
						<div
							className={
								isOpen.grind ? 'choices' : 'choices isClosed'
							}>
							<div
								className={
									chosenValues.grind === 'wholebean'
										? 'choiceCard checked'
										: 'choiceCard'
								}
								onClick={() =>
									handleChecked('grind', 'wholebean')
								}>
								<h3>Wholebean</h3>
								<p>
									Best choice if you cherish the fill sensory
									experience
								</p>
							</div>
							<div
								className={
									chosenValues.grind === 'filter'
										? 'choiceCard checked'
										: 'choiceCard'
								}
								onClick={() =>
									handleChecked('grind', 'filter')
								}>
								<h3>Filter</h3>
								<p>
									for drip or pour over coffee methods such as
									V60 or Aeropress
								</p>
							</div>
							<div
								className={
									chosenValues.grind === 'cafetiere'
										? 'choiceCard checked'
										: 'choiceCard'
								}
								onClick={() =>
									handleChecked('grind', 'cafetiere')
								}>
								<h3>Cafetiere</h3>
								<p>
									Course fround beans specially suited for
									french press coffee
								</p>
							</div>
						</div>
					</div>
					{/* how often should we deliver*/}
					<div className="selectionContainer" ref={delRef}>
						<div className="title">
							<h2>How often should we deliver?</h2>
							<AiOutlineDown
								onClick={() => toggleChoiceOpen('deliveries')}
								className={isOpen.deliveries ? null : 'isDown'}
							/>
						</div>
						<div
							className={
								isOpen.deliveries
									? 'choices'
									: 'choices isClosed'
							}>
							<div
								className={
									chosenValues.deliveries === 'week'
										? 'choiceCard checked'
										: 'choiceCard'
								}
								onClick={() =>
									handleChecked('deliveries', 'week')
								}>
								<h3>Every week</h3>
								<p>
									$14.00 per shipment includes free
									first-class shipping.
								</p>
							</div>
							<div
								className={
									chosenValues.deliveries === '2 weeks'
										? 'choiceCard checked'
										: 'choiceCard'
								}
								onClick={() =>
									handleChecked('deliveries', '2 weeks')
								}>
								<h3>Every 2 weeks</h3>
								<p>
									$17.25 per shipment. Includes free priority
									shipping.
								</p>
							</div>
							<div
								className={
									chosenValues.deliveries === 'month'
										? 'choiceCard checked'
										: 'choiceCard'
								}
								onClick={() =>
									handleChecked('deliveries', 'month')
								}>
								<h3>Every month</h3>
								<p>
									$22.50 per shipment. Includes free priority
									shipping.
								</p>
							</div>
						</div>
					</div>
					<div
						className={`summary ${
							isChecked.deliveries &&
							isChecked.grind &&
							isChecked.quantity &&
							isChecked.beanType &&
							isChecked.preference
								? 'summaryShow'
								: ''
						}`}>
						<h2>Order summary</h2>

						<p>
							<ImQuotesLeft /> I drink my coffee as{' '}
							<span>{chosenValues.preference}</span>, with a{' '}
							<span>{chosenValues.beanType}</span> type of bean.{' '}
							<span>{chosenValues.quantity}g</span> ground ala{' '}
							<span>{chosenValues.grind}</span> sent to me{' '}
							<span>Every {chosenValues.deliveries}</span>.
							<ImQuotesRight />
							<button>Order</button>
						</p>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default CreatePlan;
