import React, { Component } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CLI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initDate: Date(),
            prompts: []
        };

        this._handleKeyPress = this._handleKeyPress.bind(this);
        this._printPrompt = this._printPrompt.bind(this);
    }

    getWelcomeDialog() {
        return (
            <div className="welcome">
                <p>
                    { this.state.initDate }
                </p>
                <p>
                    { `Welcome to enochchu.github.io.` }
                </p>

                <img src="https://raw.githubusercontent.com/enochchu/files/master/portrait.jpg" alt="that's me!" />

                <p>
                    { `Hi! My name is Enoch! I write code!` }
                </p>

                <p>
                    <a href="https://github.com/enochchu/files/raw/master/resume.pdf">Download my resume.pdf</a>
                </p>

                <p>
                    <a href="https://github.com/enochchu/" target="_blank" rel="noopener noreferrer">github</a>
                    <a href="https://github.com/enochchu/config" target="_blank" rel="noopener noreferrer">config</a>
                    <a href="https://github.com/enochchu/enochchu.github.io/tree/src" target="_blank" rel="noopener noreferrer">src</a>
                    <a href="https://github.com/enochchu/files/">files</a>
                    <a href="https://github.com/enochchu/stupidfunpictures" target="_blank" rel="noopener noreferrer">stupidfunpictures</a>
                </p>
            </div>
        )
    }

    _generateYoutubeLink(youtubeId) {
        const markup = {
            __html: '<iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/' + youtubeId + '?autoplay=1"></iframe>'
        };

        return(
            <div dangerouslySetInnerHTML={markup} />
        )
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
                'cat' : this._generateYoutubeLink('v2GCfSGFkG0'),
                'date' : Date(),
                'help' : 'What? you need help?',
                'man': this._generateYoutubeLink('IPjvDE-rKo0'),
                    'random' : Math.random(),
                'sudo' : 'sudo what?',
                'whoami': this._generateYoutubeLink('Ra-wC05lZi4'),
            }

            if (args[0] in commands) {
                command = commands[args[0]];
            }

            // Evaluate
            const result = command === '' ? args[0] + ': command not found.' : command;

            // Print
            this._printPrompt(value, result);

            if (command === 'clear') {
                this._clearPrompt();
                debugger;
            }

            // Loop
            e.target.value = "";
        }
    }

    _printPrompt(command, result) {
        if (result === '') {
            return;
        }

        return this.setState(prevState => ({
            prompts: prevState.prompts.concat({
                id: Date.now(),
                command: command,
                result: result
            })
        }));
    }

    render() {
        return (
            <div className="cli">
                <div className="cli-result">
                    { this.getWelcomeDialog() }

                    <ReactCSSTransitionGroup
                        transitionName="cli-line-animation"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>

                        {
                            this.state.prompts.map(item => (
                                <div className='line' key={ item.id }>
                                    <div> > {item.command} </div>
                                    <div> {item.result} </div>
                                </div>
                            ))
                        }
                    </ReactCSSTransitionGroup>
                </div>
                <div className="cli-input">
                    <input type="text" onKeyPress={this._handleKeyPress} ref={(el) => { this.cliInput = el; }} placeholder="type command here" />
                </div>
            </div>
        );
    }
}

export default CLI;
