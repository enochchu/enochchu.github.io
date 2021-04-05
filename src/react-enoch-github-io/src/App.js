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
							<Link to="/blog">Blog</Link>
							<Link to="/github">Github</Link>
							<Link to="/resume">Résumé</Link>
						</span>
						<Switch>
							<Route path='/github' component={() => { 
								window.location.href = 'https://github.com/enochchu'; 
								return null;
							}} />
							<Route path='/blog' component={() => { 
								alert("Coming Soon!");
								return null;
							}} />
							<Route path='/resume' component={() => { 
								window.location.href = 'https://github.com/enochchu/files/raw/master/resume.pdf'; 
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