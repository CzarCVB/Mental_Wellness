import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hello from './Hello.jsx';
import Menu from './components/Menu/Menu';

const App = () => {
	return (
		<Router history = {history}>
			<Switch>
				<Route exact path="/" component={Hello} />
				<Route path="/home" component={Hello} />
				<Route path="/:restaurantId/menu" component={Menu} />
			</Switch>
		</Router>
	);
}

export default App;
