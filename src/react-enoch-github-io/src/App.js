import React, { Component } from 'react';

import CLI from "./components/cli/CLI"
import Blog from "./components/blog/Blog"

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/*
 * TODO Consider making a component registry instead of a big switch statement
 */

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<header>
						<div className="links">
							<span className="links-title">
								Links:
							</span>
							<span>
								<Link to="/">Home</Link>
								<Link to="/blog">Blog</Link>
								<Link to="/github">Github</Link>
								<Link to="/resume">Résumé</Link>
							</span>
						</div>
					</header>

					<main>
						<Switch>
							<Route path='/github' component={() => {
								window.location.href = 'https://github.com/enochchu';
								return null;
							}} />

							<Route path='/blog' component={Blog} />

							<Route path="/blog/post/:title" component={Blog} />

							<Route path='/resume' component={() => {
								window.location.href = 'https://github.com/enochchu/files/raw/master/resume.pdf';
								return null;
							}} />

							<Route path='/'>
								<CLI />
							</Route>
						</Switch>
					</main>
			</Router>
			</div>
		)
	}
}

export default App;
