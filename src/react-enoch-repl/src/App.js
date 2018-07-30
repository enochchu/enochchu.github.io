import React, { Component } from 'react';
import './App.css';

class EnochREPLApp extends Component {
	constructor(props) {
		super(props);

		this.state = { prompts: [] };

		this._handleKeyPress = this._handleKeyPress.bind(this);
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

			// If there is no value, do nothing.
			if (value === '') {
				return '';
			}

			const args = value.split(' ');

			// Read
			let command = '';

			const commands = {
				'date' : Date(),
				'help' : 'What? you need help?',
				'man': '<div>You are the man now dog!</div>' + this._generateYoutubeLink('IPjvDE-rKo0'),
				'resume': 'Here is my resume: ' + this._generateLink('https://github.com/enochchu/enochchu.github.io/raw/master/assets/resume.pdf', 'Resume.pdf'),
				'sudo' : 'sudo what?',
				'whoami': '<div>You are not you. You are me.</div>' + this._generateYoutubeLink('Ra-wC05lZi4')
			}

			if (args[0] in commands) {
				command = commands[value];
			}

			// Evaluate
			const result = command === '' ? args[0] + ': command not found.' : command;

			// Print
			const newPrompt = {
				id: Date.now(),
				result: result
			}

			this.setState(prevState => ({
				prompts: prevState.prompts.concat(newPrompt)
			}));

			// Loop
			e.target.value = "";

			window.scrollTo(0, document.body.scrollHeight);
		}
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
		return {__html: value};
	}

	render() {
		return (
			<div>
				<div className="initial-prompt">
					<p>
						{ this.state.initDate }
					</p>
					<p>
						{`Welcome to enochchu.github.io.`}
					</p>

					<div>
					</div>

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
								<div className="line" key={item.id} dangerouslySetInnerHTML={this.createMarkup(item.result)} />
							))
						}
					</div>
				</div>
			</div>
		);
	}
}

export default EnochREPLApp;