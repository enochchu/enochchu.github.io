import React, { Component } from 'react';

import CLI from "./components/cli/CLI"

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate() {
		this.cliInput.scrollIntoView({ behavior: "smooth" });
	}

	render() {
		return (
			<div className="App">
				<div className="links">
					<span className="links-title">
						Links:
					</span>

					<Router>
						<span>
							<Link to="/">Home</Link>
							<Link to="/github">Github</Link>
						</span>
						<Switch>
							<Route path='/github' component={() => { 
								window.location.href = 'https://github.com/enochchu'; 
								return null;
							}} />
						</Switch>
					</Router>
				</div>

				<CLI />
			</div>
		)
	}
}

export default App;