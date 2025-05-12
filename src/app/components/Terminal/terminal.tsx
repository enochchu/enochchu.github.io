'use client';

import React, {ReactElement, useState} from 'react';

const ID_COMMAND_INPUT = "command-input";

const AUTOCOMPLETE_COMMANDS: string[] = [
  'help',
  'echo',
  'clear',
  'date',
  'resume'
];

const MESSAGE_HELP: string = 'Available commands: ' + AUTOCOMPLETE_COMMANDS.join(', ') + '.';

const initialPrompt = [
  'Welcome to enochchu.github.io!',
  'Type "help" to see available commands.',
  MESSAGE_HELP
];

export function Terminal(): ReactElement {
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState(initialPrompt);

  const handleCommandSubmit = (event: any): void => {
    event.preventDefault();
    let newState: any = [...history, `$ ${command}`];

    switch (command.trim()) {
      case 'help':
        newState.push(MESSAGE_HELP);
        break;
      case 'date':
        newState.push(new Date().toString());
        break;
      case 'clear':
        newState = [];
        break;
      default:
        if (command.startsWith('echo ')) {
          newState.push(command.slice(5));
        }
        else {
          newState.push(`Command not found: ${command}`);
        }
        break;
    }

    setHistory(newState);
    setCommand('');
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#FFF', padding: '10px', fontFamily: 'monospace', fontSize: '1em', height: '80vh', overflowY: 'scroll', lineHeight: '1.5em' }}>
      {
        history.map((line, index) => (
          <div key={index}>{line}</div>
        ))
      }
      <form onSubmit={handleCommandSubmit}>
        <span>$ </span>
        <input id={ID_COMMAND_INPUT}
               type="text"
               value={command}
               onChange={(event) => setCommand(event.target.value)}
               style={{ backgroundColor: '#000', color: '#FFF', border: 'none', outline: 'none', width: '25vh', fontFamily: 'inherit', fontSize: 'inherit' }}
               autoFocus list="commands"
        />

        <datalist id="commands">
          {
            AUTOCOMPLETE_COMMANDS.map((command) => (
              <option value={command}/>
            ))
          }
        </datalist>
      </form>
    </div>
  );
}