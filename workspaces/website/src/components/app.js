import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import About from '../routes/about';
import Privacy from '../routes/privacy';
import Rules from '../routes/rules';
import Profile from '../routes/profile';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<About path="/about/"/>
			<Privacy path="/privacy/"/>
			<Rules path="/rules/"/>
			<Profile path="/profile/:user" />
		</Router>
	</div>
)

export default App;
