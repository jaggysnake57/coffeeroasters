import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import CreatePlan from './Pages/CreatePlan/CreatePlan';

function App() {
	return (
		<Router>
			<div className="App">
				<div className="container">
					<NavBar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/create">
							<CreatePlan />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
