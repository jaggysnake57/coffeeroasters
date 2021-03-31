import {
	Route,
	BrowserRouter as Router,
	Switch,
	useHistory,
} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import CreatePlan from './Pages/CreatePlan/CreatePlan';
import { About } from './Pages/About/About';
import { useEffect } from 'react';
import ScrollToTop from './Components/ScrollToTop';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<div className="App">
				<div className="container">
					<NavBar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />

						<Route exact path="/create" component={CreatePlan} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
