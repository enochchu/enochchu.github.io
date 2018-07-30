import React, { Component } from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/*
 * TODO Find something to not be dependent on Youtube?
 * TODO Break up _handleKeyPress. Modualize it?
 */

class EnochREPLApp extends Component {
	constructor(props) {
		super(props);

		this.state = { prompts: [] };

		this._handleKeyPress = this._handleKeyPress.bind(this);
		this._printPrompt = this._printPrompt.bind(this);
	}

	componentDidUpdate() {
		this.cliInput.scrollIntoView({ behavior: "smooth" });
	}

	_generateCat(args) {
		let result = this._generateYoutubeLink('v2GCfSGFkG0');

		if (args.length <= 1) {
			return result;
		}

		const commands = {
			'cat' : "meow!",
			'meta' : this._generateIframe('/')
		}

		if (args[1] in commands) {
			result = commands[args[1]];
		}

		return result;
	}

	_generateLink(link, label) {
		return '<a href="' + link + '" target="_blank" rel="noopener noreferrer">' + label + '</a>';
	}

	_generateIframe(link, label) {
		return '<a href="' + link + '" target="_blank" rel="noopener noreferrer">' + label + '</a><br /><iframe width="640" height="360" src="' + link + '"></iframe>';
	}

	_generateYoutubeLink(youtubeId) {
		return '<iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/' + youtubeId + '?autoplay=1"></iframe>';
	}

	_handleKeyPress(e) {
		if (e.key === 'Enter') {
			const value = e.target.value;

			if (value === '') {
				return;
			}

			// Read
			const args = value.split(' ');

			let command = '';

			const commands = {
				'cat' : this._generateCat(args),
				'config' : this._generateLink('https://github.com/enochchu/config', 'config'),
				'date' : Date(),
				'help' : 'What? you need help?',
				'man': '<div>You are the man now dog!</div>' + this._generateYoutubeLink('IPjvDE-rKo0'),
				'random' : Math.random(),
				'resume': 'Here is my resume: ' + this._generateLink('https://github.com/enochchu/enochchu.github.io/raw/master/static/resume.pdf', 'resume.pdf'),
				'stupidfunpictures' : this._generateLink('https://github.com/enochchu/stupidfunpictures', 'stupidfunpictures'),
				'sudo' : 'sudo what?',
				'whoami': '<div>You are not you. You are me.</div>' + this._generateYoutubeLink('Ra-wC05lZi4'),
			}

			if (args[0] in commands) {
				command = commands[args[0]];
			}

			// Evaluate
			const result = command === '' ? args[0] + ': command not found.' : command;

			// Print
			this._printPrompt(value, result);

			// Loop
			e.target.value = "";
		}
	}

	_printPrompt(value, result) {
		if (result === '') {
			return;
		}

		return this.setState(prevState => ({
			prompts: prevState.prompts.concat({
				id: Date.now(),
				result: '> ' + value + '<br />' + result
			})
		}));
	}

	render() {
		return (
			<div className="cli">
				<EnochREPLPromptResultView prompts={this.state.prompts} />

				<div className="cli-input">
					<input type="text" onKeyPress={this._handleKeyPress} ref={(el) => { this.cliInput = el; }} />
				</div>
			</div>
		)
	}
}

class EnochREPLPromptResultView extends Component {
	constructor(props) {
		super(props);

		this.state = { initDate: Date() };
	}

	createMarkup(value) {
		return { __html: value };
	}

	render() {
		return (
			<div className="cli-result">
				<p>
					{ this.state.initDate }
				</p>
				<p>
					{ `Welcome to enochchu.github.io.` }
				</p>

				<img src="/static/portrait.jpg" alt="that's me!" />

				<p>
					{ `Hi! My name is Enoch! I write code!` }
				</p>

				<p>
					<a href="https://github.com/enochchu/enochchu.github.io/raw/master/static/resume.pdf">Download my resume.pdf</a>
					<a href="https://github.com/enochchu/stupidfunpictures" target="_blank" rel="noopener noreferrer">stupidfunpictures</a>
					<a href="https://github.com/enochchu/config" target="_blank" rel="noopener noreferrer">config</a>
				</p>

				<ReactCSSTransitionGroup
					transitionName="cli-line-animation"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>

					{
						this.props.prompts.map(item => (
							<div className='line' key={ item.id } dangerouslySetInnerHTML={this.createMarkup( item.result )} />
						))
					}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

export default EnochREPLApp;