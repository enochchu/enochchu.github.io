import React, { Component } from 'react';
import './App.css';

/*
 * FIXME Scroll doesn't work because when Youtube is generated

 * TODO Find something to not be dependent on Youtube?
 * TODO Break up _handleKeyPress. Modualize it?
 * TODO Make it mobile friendly.
 */

class EnochREPLApp extends Component {
	constructor(props) {
		super(props);

		this.state = { prompts: [] };

		this._handleKeyPress = this._handleKeyPress.bind(this);
		this._printPrompt = this._printPrompt.bind(this);
	}

	_generateLink(link, label) {
		return '<a href="' + link + '" target="_blank" rel="noopener noreferrer">' + label + '</a>';
	}

	_generateYoutubeLink(youtubeId) {
		return '<iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/' + youtubeId + '?autoplay=1" frameborder="0"></iframe>';
	}

	_handleKeyPress(e) {
		if (e.key === 'Enter') {
			const value = e.target.value;

			if (value === '') {
				return;
			}

			this._printPrompt("> " + value);

			const args = value.split(' ');

			// Read
			let command = '';

			const commands = {
				'config' : this._generateLink('https://github.com/enochchu/config', 'config'),
				'date' : Date(),
				'help' : 'What? you need help?',
				'man': '<div>You are the man now dog!</div>' + this._generateYoutubeLink('IPjvDE-rKo0'),
				'random' : Math.random(),
				'resume': 'Here is my resume: ' + this._generateLink('https://github.com/enochchu/enochchu.github.io/raw/master/assets/resume.pdf', 'resume.pdf'),
				'stupidfunpictures': this._generateLink('https://github.com/enochchu/stupidfunpictures', 'stupidfunpictures'),
				'sudo' : 'sudo what?',
				'whoami': '<div>You are not you. You are me.</div>' + this._generateYoutubeLink('Ra-wC05lZi4')
			}

			if (args[0] in commands) {
				command = commands[value];
			}

			// Evaluate
			const result = command === '' ? args[0] + ': command not found.' : command;

			// Print
			this._printPrompt(result);

			// Loop
			e.target.value = "";

			window.scrollTo(0, document.body.scrollHeight);
		}
	}

	_printPrompt(message) {
		if (message === '') {
			return;
		}

		return this.setState(prevState => ({
			prompts: prevState.prompts.concat({
				id: Date.now(),
				result: message
			})
		}));
	}

	render() {
		return (
			<div className="cli">
				<EnochREPLPromptResultView prompts={this.state.prompts} />

				<div className="cli-input">
					<input type="text" onKeyPress={this._handleKeyPress} />
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
			<div>
				<div className="initial-prompt">
					<p>
						{ this.state.initDate }
					</p>
					<p>
						{ `Welcome to enochchu.github.io.` }
					</p>

					<p>
						<a href="https://github.com/enochchu/enochchu.github.io/raw/master/assets/resume.pdf" target="_blank" rel="noopener noreferrer">resume.pdf</a>
						<a href="https://github.com/enochchu/stupidfunpictures" target="_blank" rel="noopener noreferrer">stupidfunpictures</a>
						<a href="https://github.com/enochchu/config" target="_blank" rel="noopener noreferrer">config</a>
					</p>
				</div>
				<div>
					<div className="cli-result">
						{
							this.props.prompts.map(item => (
								<div className="line" key={ item.id } dangerouslySetInnerHTML={this.createMarkup( item.result )} />
							))
						}
					</div>
				</div>
			</div>
		);
	}
}

export default EnochREPLApp;