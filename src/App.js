import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import NavBar from './Components/NavBar/NavBar';

function App() {
	return (
		<div className="App">
			<div className="container">
				<NavBar />
				<Router>
					<Switch>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
